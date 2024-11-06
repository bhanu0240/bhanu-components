import React, { useEffect } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";
import "./Qr-Code-Scanner.css";

export interface QRCodeScanner {}

const QRCodeScanner = () => {
  useEffect(() => {
    compute();
  }, []);
  const compute = () => {
    const codeReader = new BrowserQRCodeReader();
    console.log(codeReader);
  };

  return <div>QR Code Scanner</div>;
};

export default QRCodeScanner;
