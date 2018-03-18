import * as React from 'react';
import { SAFEQRCode } from 'safe-qrcode-svg';

interface IDemoProps {
    text: string;
}

class Demo extends React.Component<IDemoProps> {
    render(): JSX.Element {
        return <div>
            <SAFEQRCode bgColor="#FFFFFF" fgColor="#000000" level="M" value={this.props.text} />
            <SAFEQRCode value="Only value here" />
            <SAFEQRCode value="Style here" style={{ width: 250 }} />
        </div>;
    }
}
