import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { useStyle } from '@magento/venia-ui/lib/classify';
import Image from '@magento/venia-ui/lib/components/Image';
import logo from './DrexelLogo.png';

/**
 * A component that renders a logo in the header.
 *
 * @typedef Logo
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a logo.
 */
const Logo = props => {
    const { height, width } = props;
    const classes = useStyle({}, props.classes);
    const { formatMessage } = useIntl();

    const title = formatMessage({ id: 'logo.title', defaultMessage: 'Drexel' });

    return (
        <Image
            alt={title}
            classes={{ image: classes.logo }}
            height={height}
            src={logo}
            title={title}
            width={width}
        />
    );
};

/**
 * Props for {@link Logo}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the
 * Logo component.
 * @property {string} classes.logo classes for logo
 * @property {number} height the height of the logo.
 */
Logo.propTypes = {
    classes: PropTypes.shape({
        logo: PropTypes.string
    }),
    height: PropTypes.number,
    width: PropTypes.number
};

Logo.defaultProps = {
    height: 46,
    width: 176
};

export default Logo;
