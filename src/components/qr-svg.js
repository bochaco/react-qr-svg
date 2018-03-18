import React from 'react';
import PropTypes from 'prop-types';

const QRCodeImpl = require('qr.js/lib/QRCode');
const ErrorCorrectLevel = require('qr.js/lib/ErrorCorrectLevel');

export function QRCode({
    value = '',
    level = 'L',
    bgColor = '#FFFFFF',
    fgColor = '#000000',
    ...otherProps
} = {}) {
    // adapted from https://github.com/zpao/qrcode.react/blob/master/src/index.js
    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
    qrcode.addData(value);
    qrcode.make();

    const cells = qrcode.modules;

    let cellIndex = 0; // we use simple order as a key just to avoid the key warning here
    return (<svg shapeRendering="crispEdges" viewBox={[-1, -1, 2 * cells.length, 2 * cells.length].join(' ')} {...otherProps}>
        {
            cells.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <circle key={cellIndex++}
                      cx={2 * colIndex}
                      cy={2 * rowIndex}
                      r={1}
                      style={{ fill: cell ? fgColor : bgColor }}
                    />
                )))
        }
    </svg>);
}

QRCode.propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.number,
    level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
    bgColor: PropTypes.string,
    fgColor: PropTypes.string,
};
