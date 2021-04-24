import TextField from '@material-ui/core/TextField';

export default function InputText({ id, label, value, handleChange,fullWidth,required }) {
    return (
        <TextField
            id={id ? id : undefined}
            label={label ? label : undefined}
            value={value ? value : ""}
            onChange={(e) => handleChange(id, e.target.value)}
            fullWidth={fullWidth? fullWidth : undefined}
            required={required ? required : undefined}
            variant="outlined"
        />
    );
}
