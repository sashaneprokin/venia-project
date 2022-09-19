import React from 'react';
import {
    arrayOf,
    bool,
    number,
    oneOf,
    shape,
    string,
    object
} from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
SwiperCore.use([ Autoplay, Keyboard, Mousewheel, Navigation, Pagination ]);
import './swiper-bundle.css';
import './slider-dots.css';

const Slider = props => {
    const {
        minHeight,
        autoplay,
        autoplaySpeed,
        fade,
        infinite,
        showArrows,
        showDots,
        textAlign,
        border,
        borderColor,
        borderWidth,
        borderRadius,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        mediaQueries,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        cssClasses = [],
        children
    } = props;

    const sliderSettings = {
        autoplay: autoplay ? { delay: autoplaySpeed ? autoplaySpeed : 5000 } : false,
        loop: infinite ? 'infinite' : '',
        navigation: showArrows,
        pagination: { clickable: showDots },
        style: {
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
        }
    };

    return (
        <Swiper {...sliderSettings}>
            {children.map((item, index) => (
                <SwiperSlide key={index}>
                    {item}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

Slider.propTypes = {
    classes: shape({
        root: string,
        bannerRoot: string,
        bannerLink: string,
        bannerWrapper: string,
        bannerPosterOverlay: string
    }),
    appearance: oneOf(['default']),
    minHeight: string,
    autoplay: bool,
    autoplaySpeed: number,
    fade: bool,
    infinite: bool,
    showArrows: bool,
    showDots: bool,
    textAlign: string,
    border: string,
    borderColor: string,
    borderWidth: string,
    borderRadius: string,
    marginTop: string,
    marginRight: string,
    marginBottom: string,
    marginLeft: string,
    mediaQueries: arrayOf(
        shape({
            media: string,
            style: object
        })
    ),
    paddingTop: string,
    paddingRight: string,
    paddingBottom: string,
    paddingLeft: string,
    cssClasses: arrayOf(string)
};

export default Slider;
