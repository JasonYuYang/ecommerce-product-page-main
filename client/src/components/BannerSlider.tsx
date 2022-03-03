import { useRef, useLayoutEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import ArrowRight from '@images/icon-next.svg';
import ArrowLeft from '@images/icon-previous.svg';
import banner1 from '@images/banner1.png';
import banner2 from '@images/banner2.png';
import banner3 from '@images/banner3.png';
import banner4 from '@images/banner4.png';
import banner5 from '@images/banner5.png';

export const BannerSlider = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  const sliderItems = [
    {
      id: 1,
      img: banner1,
      title: 'Adidas Z.N.E. Hoodie ',
      desc1: `A comfortable hooded sweatshirt ${'\n'}with thumb holes at the cuffs.`,
      desc2: 'Featuring Fast Release Zipper',
      color: 'black',
      background:
        'linear-gradient(313deg, rgba(138,138,138,1) 0%, rgba(200,200,200,1) 35%, rgba(233,233,233,1) 64%, rgba(243,243,243,1) 87%, rgba(255,255,255,1) 100%)',
    },
    {
      id: 2,
      img: banner2,
      title: 'Apple Watch SE',
      desc1: 'Heavy on features. Light on price.',
      desc2: 'From $279 up',
      color: 'white',
      background:
        'linear-gradient(90deg,rgba(131,58,180,1)  0%, rgba(253,29,29,1) 50%,rgba(252,176,69,1)  100%)',
    },
    {
      id: 3,
      img: banner3,
      title: `Air Jordan 1 Mid${'\n'} Green Grey`,
      desc1: 'Dream It, Do It.',
      desc2: `$160`,
      span: '$180',
      color: 'white',
      backgroundColor: 'rgba(0,95,61,255)',
    },
    {
      id: 4,
      img: banner4,
      title: 'SONY α7 IV',
      desc1: 'Beyond Basic.',
      desc2: `For a new generation${'\n'} of imagemakers.`,
      color: 'black',
      background: 'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
    },
    {
      id: 5,
      img: banner5,
      title: 'Furniture',
      desc1: `Change the look of your house,${'\n'}change the perspective of others.`,
      desc2: 'Up to 50% off',
      color: 'white',
      background: 'linear-gradient(127deg, rgba(0,49,54,1) 0%, rgba(62,155,172,1) 100%)',
    },
  ];

  const buttonRef = useRef<HTMLButtonElement>(null);
  const slideInfoRef = useRef<HTMLDivElement>(null);
  const slideImgRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const slides = gsap.utils.selector(slidesRef);
  const tl = useRef({});

  const bannerAnimaiton = useCallback(
    (index: number) => {
      if (buttonRef.current !== null && slideImgRef.current !== null) {
        tl.current = gsap
          .timeline()
          .set(slides(`.banner-slide--${index} .slide__image`), {
            y: slideImgRef.current.offsetHeight * 0.05,
            opacity: 0,
          })
          .set(slides(`.banner-slide--${index} .slide__button`), {
            y: -buttonRef.current.offsetHeight * 1.7,
          })
          .set(slides(`.banner-slide--${index} .slide__info`), {
            x: -buttonRef.current.getBoundingClientRect().width * 0.2,
            opacity: 0,
          })

          .to(
            slides(`.banner-slide--${index} .slide__image`),
            {
              duration: 1,
              y: 0,
              opacity: 1,

              ease: 'in-out-smooth',
            },
            'start+=0.8'
          )
          .to(
            slides(`.banner-slide--${index} .slide__info`),
            {
              duration: 1,
              x: 0,
              opacity: 1,

              ease: 'in-out-smooth',
            },
            'start+=0.8'
          )
          .to(
            slides(`.banner-slide--${index} .slide__button`),
            {
              duration: 1,
              ease: 'in-out-smooth',
              y: 0,
            },
            '-=0.5'
          );
      }
    },
    [slides]
  );
  useLayoutEffect(() => {
    bannerAnimaiton(1);
  }, [bannerAnimaiton]);

  return (
    <section className='banner-slider'>
      <div className='banner-slider__wrapper' ref={slidesRef}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides
          speed={1000}
          navigation={{
            nextEl: '.banner-slider__arrow--right',
            prevEl: '.banner-slider__arrow--left',
          }}
          init={false}
          loop
          grabCursor
          // autoplay={{ pauseOnMouseEnter: true, disableOnInteraction: false, delay: 3500 }}
          pagination={{
            el: '.swiper-pagination-banner',
            type: 'bullets',
            clickable: true,
            bulletElement: 'span',
          }}
          onRealIndexChange={(swiper) => {
            const { realIndex } = swiper;
            bannerAnimaiton(realIndex + 1);
          }}
        >
          {sliderItems.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                className={`slide banner-slide--${index + 1}`}
                style={
                  slide.background
                    ? { background: slide.background }
                    : { backgroundColor: slide.backgroundColor }
                }
              >
                <div className='slide__info' style={{ color: slide.color }} ref={slideInfoRef}>
                  <h2 className='slide__info--title slide__info--animated'>{slide.title}</h2>
                  <p className='slide__info--description--1 slide__info--animated'>{slide.desc1}</p>
                  <p className='slide__info--description--2 slide__info--animated'>
                    {slide.desc2} <span>{slide.span}</span>
                  </p>
                  <div className='slide__button-wrap'>
                    <button className='slide__button' type='button' ref={buttonRef}>
                      <span className='slide__button__title-mask'>
                        <div className='slide__button__title-wrap'>
                          <span className='slide__button__title'>
                            SHOP
                            <span className='logoit'>IT</span>
                            <span className='logodot'>.</span>
                          </span>
                          <span className='slide__button__title--secondary'>
                            SHOP<span className='logoit'>IT</span>
                            <span className='logodot'>.</span>
                          </span>
                        </div>
                      </span>

                      <span className='slide__button__icon'>
                        <span className='slide__button__circle'></span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          className='bi bi-arrow-right slide__button__svg'
                          viewBox='0 0 16 16'
                        >
                          <path
                            fillRule='evenodd'
                            d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
                          />
                        </svg>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          className='bi bi-arrow-right slide__button__svg slide__button__svg--clone'
                          viewBox='0 0 16 16'
                        >
                          <path
                            fillRule='evenodd'
                            d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className='slide__image' ref={slideImgRef}>
                  <img src={slide.img} alt='SUMMER SALE' />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className='swiper-pagination swiper-pagination-banner'></div>
        </Swiper>

        <div className='banner-slider__arrow--left'>
          <img src={ArrowLeft} alt='' />
        </div>
        <div className='banner-slider__arrow--right'>
          <img src={ArrowRight} alt='' />
        </div>
      </div>
    </section>
  );
};
