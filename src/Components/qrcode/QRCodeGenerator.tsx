import React, { ChangeEvent, useState } from 'react';
import QRCode from 'qrcode.react';

type QrCodeProps = {
  url: string;
  logo?: File | null;
};

const QrCode: React.FC<QrCodeProps> = ({ url, logo }) => {
  return (
    <QRCode
    value={url}
    renderAs="svg"
    size={250}
    level="H"
    imageSettings={{
      src: logo ? URL.createObjectURL(logo) : '/assets/logos/qrLogo.png',
      x: (250 - 119) / 2, // Center horizontally
      y: (250 - 99) / 2,  // Center vertically
      height: 99,
      width: 119,
      excavate: true,
    }}
  />
  );
};


export default QrCode;
