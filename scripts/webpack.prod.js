const { resolve } = require('path')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

// 定义nodejs环境变量：决定使用browserslist的哪个环境
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  // 生产环境下会自动压缩js代码//内部会自动加载一些插件
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash:6].js',
    path: resolve(__dirname, '../dist'),
  },
  devtool: 'source-map',
  cache: { type: 'filesystem', buildDependencies: { config: [__filename] } }, //使用文件缓存
  optimization: {
    /*
      1. 可以将node_modules中代码单独打包一个chunk最终输出
      2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk
    */

    splitChunks: {
      // include all types of chunks
      chunks: 'all',
      // 重复打包问题
      cacheGroups: {
        vendors: {
          //node_modules里的代码
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors', //chunks name
          priority: 10, //优先级
          enforce: true,
        },
      },
    },
    // 将当前模块的记录其他模块的hash单独打包为一个文件 runtime
    // 解决：修改a文件导致b文件的contenthash变化
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`,
    },
    minimizer: [
      // 配置生产环境的压缩方案：js和css
      new TerserWebpackPlugin({
        parallel: 4,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),

      // 压缩css
      new CssMinimizerPlugin(),
    ],
  },
  // 解析模块的规则
  resolve: {
    // 告诉 webpack 解析模块是去找哪个目录（不写这个的话，他会一层一层的往上面找，直到找到位置），第2個node_modules是為了怕第一個找不到，原本是只有寫第二個的，第一個是為了找快點才加的
    modules: [resolve(__dirname, './node_modules'), 'node_modules'],
  },
})
