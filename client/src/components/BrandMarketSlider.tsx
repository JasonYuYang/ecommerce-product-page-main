import { useRef, useLayoutEffect, useCallback } from 'react';

import NumberFormat from 'react-number-format';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, EffectFade } from 'swiper';
import { gsap } from 'gsap';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import ArrowRight from '@images/icon-next.svg';
import logo1 from '@images/logo_1.png';
import logo2 from '@images/logo_2.png';
import logo3 from '@images/logo_3.png';
import logo4 from '@images/logo_4.png';
import logo5 from '@images/logo_5.png';
import logo6 from '@images/logo_6.png';
import category1 from '@images/Categories/electronics.png';
import category2 from '@images/Categories/cameras.png';
import category3 from '@images/Categories/laptops.png';

// import { ProductCard } from './ProductCard';
import { Button } from './UI';

export const BrandMarketSlider = () => {
  SwiperCore.use([EffectFade, Autoplay, Pagination]);
  const brandsDiscount = ['50', '50', '50', '25', '25', '50'];

  const paginationLogo = [logo1, logo2, logo3, logo4, logo5, logo6];

  // const [brandsLogo, setBrandsLogo] = useState<number>(0);
  const buttonRef = useRef<HTMLDivElement>(null);
  const slideInfoRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const slides = gsap.utils.selector(slidesRef);
  const products = gsap.utils.selector(productsRef);
  const tl = useRef({});
  const tl2 = useRef({});

  const brandsTitle = useRef({
    /* eslint-disable */
    slideTo: (realIndex: number, speed: number, callback: boolean) => {},
  });

  const initSlideAnimation = useCallback(
    (initIndex: number) => {
      if (buttonRef.current !== null && slideInfoRef.current !== null) {
        tl.current = gsap
          .timeline()
          .set(slides(`.swiper-slide-active .brand-market-event__brand-grid--${initIndex}`), {
            yPercent: 0,
            scale: 1,
          })
          .set(`.swiper-slide:not(.swiper-slide-active) .brand-market-event-slide`, {
            scale: 0.8,
            webkitFilter: 'brightness(0.5)',
            filter: 'brightness(0.5)',
          })
          .set(
            slides(
              `.swiper-slide-active .brand-market-event__brand-grid--${initIndex} .brand-sale-info`
            ),
            {
              y: -slideInfoRef.current.offsetHeight * 0.25,
              opacity: 0,
            }
          )
          .set(
            slides(
              `.swiper-slide-active .brand-market-event__brand-grid--${initIndex} .brand-market-entry-button`
            ),
            {
              y: -buttonRef.current.offsetHeight * 0.5,
              opacity: 0,
            }
          )
          .set(products(`.productCardContainer`), {
            yPercent: 15,
            opacity: 0,
          })
          .to(
            slides(
              `.swiper-slide-active .brand-market-event__brand-grid--${initIndex} .brand-sale-info`
            ),
            {
              duration: 0.8,
              y: 0,
              opacity: 1,
              ease: 'in-out-smooth',
            }
          )
          .to(
            products(`.productCardContainer`),
            {
              yPercent: 0,
              opacity: 1,
              ease: 'in-out-smooth',
              duration: 0.8,
            },
            '<'
          )
          .to(
            slides(
              `.swiper-slide-active .brand-market-event__brand-grid--${initIndex} .brand-market-entry-button`
            ),
            {
              duration: 0.5,
              y: 0,
              opacity: 1,
              ease: 'in-out-smooth',
            }
          );
      }
    },
    [slides]
  );
  const afterSlideChangeAnimaiton = useCallback(
    (activeIndex: number) => {
      if (buttonRef.current !== null && slideInfoRef.current !== null) {
        tl.current = gsap
          .timeline()
          .set(
            slides(
              `.swiper-slide-active .brand-market-event__brand-grid--${activeIndex} .brand-sale-info`
            ),
            {
              y: -slideInfoRef.current.offsetHeight * 0.25,
              opacity: 0,
            }
          )
          .set(
            slides(
              `.swiper-slide-active .brand-market-event__brand-grid--${activeIndex} .brand-market-entry-button`
            ),
            {
              y: -buttonRef.current.offsetHeight * 0.5,
              opacity: 0,
            }
          )
          .set(products(`.productCardContainer`), {
            yPercent: 15,
            opacity: 0,
          })
          .to(slides(`.swiper-slide-active .brand-market-event__brand-grid--${activeIndex}`), {
            duration: 0.5,
            yPercent: 0,
            scale: 1,
            webkitFilter: 'brightness(1)',
            filter: 'brightness(1)',
            ease: 'in-out-smooth',
          })
          .to(
            `.swiper-slide:not(.swiper-slide-active) .brand-market-event-slide`,
            {
              duration: 0.8,
              // yPercent: -25,
              webkitFilter: 'brightness(0.5)',
              filter: 'brightness(0.5)',
              ease: 'in-out-smooth',
            },
            '<'
          )
          .to(
            slides(
              `.swiper-slide-active .brand-market-event__brand-grid--${activeIndex} .brand-sale-info`
            ),
            {
              duration: 0.8,
              y: 0,
              opacity: 1,
              ease: 'in-out-smooth',
            },
            '<'
          )
          .to(
            products(`.productCardContainer`),
            {
              yPercent: 0,
              opacity: 1,
              ease: 'in-out-smooth',
              duration: 0.8,
            },
            '<'
          )
          .to(
            slides(
              `.swiper-slide-active .brand-market-event__brand-grid--${activeIndex} .brand-market-entry-button`
            ),
            {
              duration: 0.5,
              y: 0,
              opacity: 1,
              ease: 'in-out-smooth',
            },
            '-=0.4'
          );
      }
    },
    [slides]
  );
  const slideChangeAnimaiton = useCallback(() => {
    if (buttonRef.current !== null && slideInfoRef.current !== null) {
      tl2.current = gsap
        .timeline()
        .to(slides(`.swiper-slide .brand-market-event-slide`), {
          scale: 0.8,
          duration: 0.5,
          ease: 'in-out-smooth',
        })
        .to(
          slides(`.swiper-slide-active .brand-sale-info`),
          {
            duration: 0.5,
            y: -slideInfoRef.current.offsetHeight * 0.5,
            opacity: 0,
            ease: 'in-out-smooth',
          },
          '<'
        )
        .to(
          slides(`.swiper-slide-active  .brand-market-entry-button`),
          {
            duration: 0.5,
            y: -buttonRef.current.offsetHeight * 0.5,
            opacity: 0,
            ease: 'in-out-smooth',
          },
          '<'
        )
        .to(
          products(`.productCardContainer`),
          {
            duration: 0.8,
            yPercent: 15,
            opacity: 0,
          },
          '<'
        )
        .to(
          slides(`.swiper-slide .brand-market-event-slide`),
          {
            yPercent: 0,
            duration: 0.5,
            ease: 'in-out-smooth',
          },
          '<'
        );
    }
  }, [slides]);

  useLayoutEffect(() => {
    const brandMarketSlider = document.querySelector('.brand-market-event__brand-slider');
    initSlideAnimation(1);
    brandMarketSlider?.classList.add(`active-1`);
  }, [initSlideAnimation]);
  return (
    <>
      {' '}
      <div className='brand-market-event--title'>
        <div className='header__nav--logo secondary'>
          SHOP<span className='logoit'>IT</span>
          <span className='logodot'>.</span>
        </div>{' '}
        Brands Mall
        <span className='and'>X</span>
        <div className='brand-market-event--title__brands-logo-wrapper'>
          <Swiper
            slidesPerView='auto'
            direction='vertical'
            centeredSlides
            effect='fade'
            fadeEffect={{ crossFade: true }}
            onInit={(swiper) => {
              brandsTitle.current = swiper;
            }}
          >
            {paginationLogo.map((logo, index) => (
              <SwiperSlide key={`${index + 1}`}>
                <div className='brand-market-event--title__brands-logo'>
                  <img src={logo} className='brand-market-event--title__brand-logo' alt='' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='brand-market-event__brand-slider' ref={slidesRef}>
        <div className='swiper-pagination swiper-pagination-brand-market'></div>
        <Swiper
          slidesPerView='auto'
          allowTouchMove={false}
          speed={1000}
          loop
          preventInteractionOnTransition
          slideToClickedSlide
          centeredSlides
          loopedSlides={2}
          // autoplay={{ pauseOnMouseEnter: true, disableOnInteraction: false, delay: 3500 }}
          pagination={{
            el: '.swiper-pagination-brand-market',
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}"><img src=${paginationLogo[index]}
             alt='Expand brands market promo' /></span>`;
            },
          }}
          onSlideChange={() => {
            // const { previousIndex } = swiper;
            slideChangeAnimaiton();
          }}
          onSlideChangeTransitionEnd={(swiper) => {
            const { slides, realIndex, previousIndex } = swiper;
            const brandMarketSlider = document.querySelector('.brand-market-event__brand-slider');
            brandMarketSlider?.classList.remove(`active-${previousIndex - 1}`);
            afterSlideChangeAnimaiton(realIndex + 1);
            brandMarketSlider?.classList.add(`active-${realIndex + 1}`);
            slides.find('.brand-market-event-slide').removeClass('move-down');

            brandsTitle.current.slideTo(realIndex, 1000, false);
          }}
        >
          {brandsDiscount.map((brandDiscount, index) => (
            <SwiperSlide key={`brand-market-event__brand-grid--${index + 1}`}>
              <div
                className={`swiper-slide brand-market-event-slide brand-market-event__brand-grid--${
                  index + 1
                }`}
                ref={slideRef}
              >
                <div className='brand-sale-info' ref={slideInfoRef}>
                  <span className='brand-sale-info--1'>UP</span>
                  <span className='brand-sale-info--2'>TO</span>
                  <span className='brand-sale-info--3'>{brandDiscount}</span>
                  <span className='brand-sale-info--4'>%</span>
                  <span className='brand-sale-info--5'>OFF</span>
                </div>
                <Button>
                  <div className='brand-market-entry-button' ref={buttonRef}>
                    See More
                    <img src={ArrowRight} alt='Go Brands Market' />
                  </div>
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='brand-market-event__brand-slider__prime-product'>
          <div className='product-image'>
            <img src='' alt='' />
          </div>
          <div className='product-info'>
            <div className='product-info--title'></div>
            <div className='product-info--price'>
              <div className='product-info--price--sale-price'></div>
              <div className='product-info--price-origin-price'></div>
            </div>
          </div>
        </div>
        <div className='brand-market-event__brand-slider__secondary-products'>
          <div className='brand-market-event__brand-slider__secondary-products--1'>
            <div className='product-info'>
              <div className='product-info--title'>
                23423423vjmefgefg twertrweheth gregergegege gggggg ggggrgeeeewerwerwer
              </div>
              <div className='product-info--price'>
                <div className='product-info--price--origin-price'>
                  <NumberFormat
                    value={24534436981}
                    displayType='text'
                    thousandSeparator
                    prefix='$'
                  />
                </div>
                <div className='product-info--price--sale-price'>
                  <NumberFormat value={2456981} displayType='text' thousandSeparator prefix='$' />
                </div>
              </div>
            </div>
            <div className='product-image'>
              <img src={category1} alt='' />
            </div>
          </div>
          <div className='brand-market-event__brand-slider__secondary-products--2'>
            <div className='product-info'>
              <div className='product-info--title'>Prod 345 uct na me4 32fw erfer</div>
              <div className='product-info--price'>
                <div className='product-info--price--origin-price'>
                  <NumberFormat
                    value={24569677888881}
                    displayType='text'
                    thousandSeparator
                    prefix='$'
                  />
                </div>
                <div className='product-info--price--sale-price'>
                  <NumberFormat value={2456981} displayType='text' thousandSeparator prefix='$' />
                </div>
              </div>
            </div>
            <div className='product-image'>
              <img src={category2} alt='' />
            </div>
          </div>
          <div className='brand-market-event__brand-slider__secondary-products--3'>
            <div className='product-info'>
              <div className='product-info--title'>
                Product name 432f werf 4534 er453453453 3454545454545454545454545454534534534 5345
                3453453453543535
              </div>
              <div className='product-info--price'>
                {' '}
                <div className='product-info--price--origin-price'>
                  <NumberFormat value={245695581} displayType='text' thousandSeparator prefix='$' />
                </div>
                <div className='product-info--price--sale-price'>
                  <NumberFormat value={2456981} displayType='text' thousandSeparator prefix='$' />
                </div>
              </div>
            </div>
            <div className='product-image'>
              <img src={category3} alt='' />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='brand-market-event__products-section'>
        <div className='brand-market-event__brand-products'>
          <div className='brand-market-event__brand-products--brand-prime-goods__header'>
            <div className='brand-market-event__brand-products--brand-prime-goods__title'>
              SHOPIT Prime Goods
            </div>
            <div className='brand-market-event__brand-products--brand-prime-goods__button'>
              <span>View All</span>
              <img src={ArrowRight} alt='' />
            </div>
          </div>
          <div
            className='brand-market-event__brand-products--brand-prime-goods__products'
            ref={productsRef}
          >
            <ProductCard label='Shopit Mall' background='#d4041c' />
            <ProductCard label='Shopit Mall' background='#d4041c' />
            <ProductCard label='Shopit Mall' background='#d4041c' />
            <ProductCard label='Shopit Mall' background='#d4041c' />
            <ProductCard label='Shopit Mall' background='#d4041c' />
            <ProductCard label='Shopit Mall' background='#d4041c' />
          </div>
        </div>
      </div> */}
    </>
  );
};
