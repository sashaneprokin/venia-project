import React from 'react';
import { arrayOf, bool, shape, string, object } from 'prop-types';
import defaultClasses from './slider.shimmer.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
import Shimmer from '@magento/venia-ui/lib/components/Shimmer';
import { useMediaQuery } from '@magento/peregrine/lib/hooks/useMediaQuery';

export const SliderShimmer = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const {
        minHeight,
        showDots,
        border,
        borderWidth,
        marginTop = 0,
        marginRight = 0,
        marginBottom = 0,
        marginLeft = 0,
        mediaQueries,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        cssClasses = []
    } = props;

    const { styles: mediaQueryStyles } = useMediaQuery({ mediaQueries });

    const dynamicStyles = {
        minHeight: mediaQueryStyles?.minHeight || minHeight,
        border,
        borderWidth,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
    };

    const dotsContainer = showDots ? <div className="slick-dots" /> : null;

    return (
        <Shimmer
            aria-live="polite"
            aria-busy="true"
            classes={{
                root_rectangle: [
                    classes.root,
                    classes.shimmerRoot,
                    ...cssClasses
                ].join(' ')
            }}
            style={dynamicStyles}
        >
            <div className="slick-slider">
                <div className="slick-list" />
                {dotsContainer}
            </div>
        </Shimmer>
    );
};

SliderShimmer.propTypes = {
    classes: shape({
        root: string,
        shimmerRoot: string
    }),
    minHeight: string,
    showDots: bool,
    border: string,
    borderWidth: string,
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

