/**
 * @category  Koene
 * @package   Koene_GraphQl
 * @author    Deniss Dubinins <denissd@scandiweb.com>
 * @copyright Copyright (c) 2020 Scandiweb, Inc (https://scandiweb.com)
 * @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class AdyenIdeal extends ExtensiblePureComponent {
    static propTypes = {
        fieldRef: PropTypes.shape({
            current: PropTypes.instanceOf(Element)
        }).isRequired
    };

    render() {
        const { fieldRef } = this.props;

        return (
        <>
            <div ref={ fieldRef } />
            <div id='AdyenRedirect' />
        </>
        );
    }
}

export default middleware(AdyenIdeal, 'Scandipwa/AdyenGraphQl/Component/AdyenIdeal/Component');
