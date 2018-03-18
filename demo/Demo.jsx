import React from 'react';
import { SAFEQRCode } from '../src/index';

class Demo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 'SAFE Network QR code in real-time!',
      level: 'H',
      bgColor: '#FFFFFF',
      fgColor: '#5b91cc',
      logoColor: '#5b91cc',
    };
  }

  updateValue = e => this.setState({ ...this.state, value: e.target.value });
  updateLevel = e => this.setState({ ...this.state, level: e.target.value });
  updateBgColor = e =>
    this.setState({ ...this.state, bgColor: e.target.value });
  updateFgColor = e =>
    this.setState({ ...this.state, fgColor: e.target.value });
  updateLogoColor = e =>
    this.setState({ ...this.state, logoColor: e.target.value });

  render() {
    const {
      state,
      updateValue,
      updateLevel,
      updateBgColor,
      updateFgColor,
      updateLogoColor,
    } = this;
    return (
      <div>
        <form className="pure-form pure-form-stacked">
          <fieldset>
            <div className="pure-g">
              <div className="pure-u-1">
                <label htmlFor="value">Value: </label>
                <textarea
                  className="pure-input-1"
                  id="value"
                  onChange={updateValue}
                  type="text"
                  value={state.value}
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="level">Error Correction level: </label>
                <select id="level" onChange={updateLevel}>
                  <option value="L">L</option>
                  <option value="M">M</option>
                  <option value="Q">Q</option>
                  <option selected value="H">H</option>
                </select>
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="fgColor">Foreground color: </label>
                <input
                  id="fgColor"
                  onChange={updateFgColor}
                  type="color"
                  value={state.fgColor}
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="bgColor">Background color: </label>
                <input
                  id="bgColor"
                  onChange={updateBgColor}
                  type="color"
                  value={state.bgColor}
                />
              </div>
              <div className="pure-u-1-3">
                <label htmlFor="bgColor">SAFE Network logo color: </label>
                <input
                  id="logoColor"
                  onChange={updateLogoColor}
                  type="color"
                  value={state.logoColor}
                />
              </div>
            </div>
          </fieldset>
        </form>
        <br/>
        <div className="qrcode">
          <SAFEQRCode
            bgColor={state.bgColor}
            fgColor={state.fgColor}
            logoColor={state.logoColor}
            level={state.level}
            style={{ width: 400 }}
            value={state.value}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
