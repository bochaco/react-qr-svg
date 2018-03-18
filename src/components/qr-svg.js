import React from 'react';
import PropTypes from 'prop-types';

const QRCodeImpl = require('qr.js/lib/QRCode');
const ErrorCorrectLevel = require('qr.js/lib/ErrorCorrectLevel');

export function SAFEQRCode({
    value = '',
    level = 'L',
    bgColor = '#FFFFFF',
    fgColor = '#5b91cc',
    ...otherProps
} = {}) {
    // adapted from https://github.com/zpao/qrcode.react/blob/master/src/index.js
    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
    qrcode.addData(value);
    qrcode.make();

    const cells = qrcode.modules;
    const radius = 10;
    const logoLocation = Math.floor(radius * cells.length) - (7 * 5);
    const safeNetworkMark = (
      <svg xmlns="http://www.w3.org/2000/svg" x={logoLocation} y={logoLocation} width="97.84" height="110" viewBox="0 0 97.84 110.00">
        <circle cx="7" cy="31" r="7" fill="#5b91cc"/>
        <circle cx="7" cy="55" r="7" fill="#5b91cc"/>
        <circle cx="7" cy="79" r="7" fill="#5b91cc"/>
        <circle cx="27.46" cy="19" r="7" fill="#5b91cc"/>
        <circle cx="27.46" cy="43" r="7" fill="#5b91cc"/>
        <circle cx="27.46" cy="67" r="7" fill="#5b91cc"/>
        <circle cx="27.46" cy="91" r="7" fill="#5b91cc"/>
        <circle cx="48.92" cy="7" r="7" fill="#5b91cc"/>
        <circle cx="48.92" cy="31" r="7" fill="#5b91cc"/>
        <circle cx="48.92" cy="55" r="7" fill="#5b91cc"/>
        <circle cx="48.92" cy="79" r="7" fill="#5b91cc"/>
        <circle cx="48.92" cy="103" r="7" fill="#5b91cc"/>
        <circle cx="69.38" cy="19" r="7" fill="#5b91cc"/>
        <circle cx="69.38" cy="43" r="7" fill="#5b91cc"/>
        <circle cx="69.38" cy="67" r="7" fill="#5b91cc"/>
        <circle cx="69.38" cy="91" r="7" fill="#5b91cc"/>
        <circle cx="90.84" cy="31" r="7" fill="#5b91cc"/>
        <circle cx="90.84" cy="55" r="7" fill="#5b91cc"/>
        <circle cx="90.84" cy="79" r="7" fill="#5b91cc"/>
        <path fill="#5b91cc" d="M10 31v24H4V31zM30.46 19v24h-6V19zM30.46 43v24h-6V43zM51.92 7v24h-6V7zM51.92 55v24h-6V55zM51.92 79v24h-6V79zM8.5 28.402l20.784 12-3 5.196-20.784-12zM28.96 40.402l20.784 12-3 5.196-20.784-12zM50.42 28.402l20.784 12-3 5.196-20.784-12zM70.88 40.402l20.784 12-3 5.196-20.784-12zM70.88 16.402l20.784 12-3 5.196-20.784-12zM70.88 64.402l20.784 12-3 5.196-20.784-12zM5.5 76.402l20.784-12 3 5.196-20.784 12zM47.42 100.402l20.784-12 3 5.196-20.784 12zM47.42 52.402l20.784-12 3 5.196-20.784 12zM67.88 40.402l20.784-12 3 5.196-20.784 12zM25.96 88.402l20.784-12 3 5.196-20.784 12zM47.42 76.402l20.784-12 3 5.196-20.784 12z"/>
      </svg>
    );

    let cellIndex = 0; // we use simple order as a key just to avoid the key warning here

    return (<svg shapeRendering="crispEdges" viewBox={[-1 * radius, -1 * radius, 2 * radius * cells.length, 2 * radius * cells.length].join(' ')} {...otherProps}>
        {
            cells.map((row, rowIndex) =>
                row.map((cell, colIndex) => {
                  if (((rowIndex === 3) || (rowIndex === 8)) && ((colIndex === 7) || (colIndex === 13))) {
                    return (
                      <line x1={2 * radius * colIndex}
                        y1={2 * radius * rowIndex}
                        x2={2 * radius * (colIndex - 1)}
                        y2={2 * radius * (rowIndex + 1)}
                        style={{ stroke: fgColor, strokeWidth: Math.floor(0.7 * radius)}}
                      />);
                  } else if (rowIndex < 14 || rowIndex > 21 || colIndex < 14 || colIndex > 20) {
                    return (
                      <circle key={cellIndex++}
                        cx={2 * radius * colIndex}
                        cy={2 * radius * rowIndex}
                        r={radius}
                        style={{ fill: cell ? fgColor : bgColor }}
                      />);
                  }
                }))
        }
        {safeNetworkMark}
    </svg>);
}

SAFEQRCode.propTypes = {
    value: PropTypes.string.isRequired,
    size: PropTypes.number,
    level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
    bgColor: PropTypes.string,
    fgColor: PropTypes.string,
};
