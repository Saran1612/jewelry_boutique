import React from 'react';
import { TextField } from '@mui/material';

export const ReusableInputfield = ({ onChange, endAdornment, startAdornment, rows, multiline, maxRows, type, className, placeholder, InputProps, size, value, style, id, variant, label, name, required, error, helperText }) => {
  return (
    <>
      <TextField multiline={multiline} type={type} style={style} id={id}
        variant={variant} label={label} maxRows={maxRows} value={value}
        name={name} className={`${className}`} rows={rows}
        required={required} onChange={onChange} size={size}
        error={error} helperText={helperText} placeholder={placeholder} InputProps={{
          startAdornment: startAdornment, // Pass startAdornment directly
          endAdornment: endAdornment // Pass endAdornment directly
        }}></TextField>
    </>
  )
}