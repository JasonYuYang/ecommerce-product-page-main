// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import category1 from '@images/Categories/electronics.png';
import category2 from '@images/Categories/cameras.png';
import category3 from '@images/Categories/laptops.png';
import category4 from '@images/Categories/accessories.png';
import category5 from '@images/Categories/headphones.png';
import category6 from '@images/Categories/food.png';
import category7 from '@images/Categories/books.png';
import category8 from '@images/Categories/clothes&shoes.png';
import category9 from '@images/Categories/sports.png';
import category10 from '@images/Categories/beauty&health.png';
import category11 from '@images/Categories/outdoor.png';
import category12 from '@images/Categories/home.png';

export const ProductCategories = () => {
  const categoriesImgs = [
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,
    category7,
    category8,
    category9,
    category10,
    category11,
    category12,
  ];
  const categories = [
    ['Electronics', 'Cameras'],
    ['Laptops', 'Accessories'],
    ['Headphones', 'Food'],
    ['Books', `Clothes &${'\n'}Shoes`],
    ['Sports', `Beauty &${'\n'}Health`],
    ['Outdoor', 'Home'],
  ];
  const backgroundColor = [
    ['#f8b76d', '#ffc1c1'],
    ['#4eb3a5', '#87bcdb'],
  ];
  return (
    <section className='product-categories'>
      <div className='product-categories__wrapper'>
        <Swiper slidesPerView='auto'>
          {categories.map((category, index) => {
            return (
              <SwiperSlide key={`${index + 1}`}>
                <div className='product-categories__category-group'>
                  <div className='product-categories__category' key={category[0]}>
                    <div
                      className='product-categories__category--img'
                      style={{ backgroundColor: backgroundColor[index % 2][0] }}
                    >
                      <img src={categoriesImgs[index * 2]} alt={`${category[0]}`} />
                    </div>
                    <div className='product-categories__category--name'>{category[0]}</div>
                  </div>
                  <div className='product-categories__category' key={category[1]}>
                    <div
                      className='product-categories__category--img'
                      style={{ backgroundColor: backgroundColor[index % 2][1] }}
                    >
                      <img src={categoriesImgs[index * 2 + 1]} alt={`${category[1]}`} />
                    </div>
                    <div className='product-categories__category--name'>{category[1]}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
