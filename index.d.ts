import * as React from "react";

interface QRCodeProps {
    /**
     * The value to encode in the code
     */
    value: string;
    /**
     * QR Error correction level
     */
    level?: "L" | "M" | "Q" | "H";
    /**
     * Color of the bright squares
     */
    bgColor?: string;
    /**
     * Color of the dark squares
     */
    fgColor?: string;
    /**
     * Color of the SAFE Network logo
     */
    logoColor?: string;
    /**
     * Density level for connections between dots
     */
    connsDensity?: "N" | "L" | "M" | "H";
    /**
     * Render the QR code as an <img> element instead of <svg>
     */
    asImg?: false;
}

/**
 * The component
 */
export function QRCode(props: QRCodeProps & React.SVGProps<SVGElement>): React.ReactElement<{}>;
