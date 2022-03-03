import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import ArrowRight from '@images/icon-next.svg';
import { FlipCountDownClock } from './FlipCountDownClock';
import { ProductCard } from './ProductCard';

interface SalesEventPropsType {
  setEventTime: { hours: number; minutes: number; seconds: number };
}

export const SalesEvent = ({ setEventTime }: SalesEventPropsType) => {
  return (
    <section className='sales-event'>
      <div className='sales-event__wrapper'>
        <div className='sales-event__info'>
          <div className='sales-event__info--title'>FLASHSALE</div>
          <FlipCountDownClock setEventTime={setEventTime} />
          <div className='sales-event__info--viewall-button'>View All</div>
        </div>

        <div className='sales-event__product-slider__wrapper'>
          <Swiper
            freeMode
            freeModeMomentumVelocityRatio={0.5}
            spaceBetween={10}
            slidesPerView={1.7}
            longSwipes
            longSwipesRatio={0.6}
          >
            <SwiperSlide>
              <ProductCard label='12.12' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard label='12.12' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard label='12.12' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard label='12.12' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard label='12.12' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard label='12.12' />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard label='12.12' />
            </SwiperSlide>

            <SwiperSlide>
              <div className='view-all-button__wrapper'>
                <div className='view-all-button__img'>
                  <img src={ArrowRight} alt='view all sales product' />
                </div>

                <span className='view-all-button__text'>View All</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
