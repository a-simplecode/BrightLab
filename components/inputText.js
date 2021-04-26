import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';

export default function InputText({ id, label, value, type, handleChange, fullWidth, required }) {
    const [val, setVal] = React.useState(value);
    useEffect(()=>{
        setVal(value);
    },[value]);

    return (
        <TextField
            id={id ? id : undefined}
            label={label ? label : undefined}
            value={val}
            type={type ? type : "text"}
            onChange={(e) => {
                setVal(e.target.value)
            }}
            onBlur={()=>handleChange(id, val)}
            fullWidth={fullWidth ? fullWidth : undefined}
            required={required ? required : undefined}
            variant="outlined"
        />
    );
}
