import React from 'react';
import Button from "@mui/material/Button";
const ReusableButton = ({ size, style, endIcon, href, variant, maxWidth, fullWidth, onClick, type, className, buttonName, startIcon, disabled }) => {
  return (
    <>

      <Button size={size} endIcon={endIcon} href={href} style={style} maxWidth={maxWidth} fullWidth={fullWidth} variant={variant} onClick={onClick} type={type} className={`${className}`} startIcon={startIcon} disabled={disabled}>{buttonName}</Button>
    </>
  );
};

export default ReusableButton;