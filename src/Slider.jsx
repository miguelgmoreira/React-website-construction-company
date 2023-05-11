import { Pagination, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle'

export default ({ slides }) => {
    return (
        <Swiper
            modules={[Pagination, A11y, Autoplay, EffectFade]}          
            speed={800}
            effect={'fade'}
            loop
            autoplay={true}
            pagination={{ clickable: true }}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map(slide => (
                <SwiperSlide key={slide.image}>
                    <img src={slide.image} alt={slide.title} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
