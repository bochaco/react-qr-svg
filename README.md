# safe-qrcode-svg
React component for rendering SVG QR codes with SAFE Network design

## Demo
Basic demo can be found at the [demo page](https://bochaco.github.io/safe-qrcode-svg).

## Why SVG?
Most of the existing React components for QR (namely [`qrcode.react`](https://github.com/zpao/qrcode.react), which was used as a starting point for this project) use `<canvas>` for rendering.

This is fine for most scenarios, however when trying to print such code, it gets blurry. This is caused by the fact that `<canvas>` contents get rastered and *then* scaled in the process resulting in the blurriness.

On the other hand, SVG retains the vector information of its contents and therefore is scaled properly when printed.

## Basic Usage

Install using `npm`:
```js
npm install safe-qrcode-svg --save
```

Then use in your application like this:

```js
import React from 'react';
import { SAFEQRCode } from 'safe-qrcode-svg';

class Demo extends React.Component {
    render() {
        return (<SAFEQRCode
                    bgColor="#FFFFFF"
                    fgColor="#5b91cc"
                    logoColor = '#5b91cc'
                    level="Q"
                    connsDensity="H"
                    style={{ width: 256 }}
                    value="some text"
                />);
    }
}
```

## Props
The props available are (shown with default values):
```js
{
    value: '', // The value to encode in the code
    level: 'L', // QR Error correction level
    bgColor: '#FFFFFF', // Color of the bright squares
    fgColor: '#5b91cc', // Color of the dark squares
    logoColor: '#5b91cc', // Color of the SAFE Network logo
    connsDensity: 'N', // Density of connectors between dots
}
```

The `level` prop corresponds to [Error correction level](https://en.wikipedia.org/wiki/QR_code#Error_correction) so the valid values are `L`, `M`, `Q` and `H`.

The `connsDensity` prop is to set the level of density for the connectors to be drawn between dots. Valid values are `N` (None), `L` (Low), `M` (Medium), and `H` (High).

You can also specify all the props that are valid for the `<svg>` React element (e.g. `style`, `className` or `width` which you can use to specify the size of the QR code).

## Acknowledgements
This project is a modified version of [`react-qr-svg`](https://github.com/no23reason/react-qr-svg) which in turn is heavily inspired by the [`qrcode.react`](https://github.com/zpao/qrcode.react) project.

The design of the QR code generated was proposed by Daniel Karlsson ([@arcturus](https://safenetforum.org/u/arcturus/summary)) on the [SAFE Network forum](https://safenetforum.org/t/safe-infographics/22022/46?u=bochaco).

This project uses the [`react-component-boilerplate`](https://github.com/survivejs/react-component-boilerplate).

## License

`safe-qrcode-svg` is available under MIT. See [LICENSE.MIT](https://github.com/bochaco/safe-qrcode-svg/tree/master/LICENSE.MIT) for more details.
