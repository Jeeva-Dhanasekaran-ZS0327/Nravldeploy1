/* eslint-disable no-console */
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { InputLabel, CircularProgress } from "@mui/material";
// import "../../styles/autocomplete_scroll.css";
const selectStyles = {
  borderOnFocus: {
    "& .MuiOutlinedInput-root": {
      padding: "10px 18px 10px 18px",
      fontSize: "1rem",
      borderRadius: "10px",
      fontWeight: 500,
      color: "#30261D",
      opacity: 0.7,

      "& .input-focus": {
        borderColor: "#A7AEAC",
        opacity: 0.2,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#A7AEAC",
        opacity: 0.2,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#A7AEAC",
        opacity: 0.2,
      },
      input: {
        "&::placeholder": {
          textOverflow: "ellipsis !important",
          color: "#30261DB2",
          opacity: 1,
        },
      },
    },
    "& .MuiSvgIcon-root": {
      color: "#25A53B",
      height: "24px",
      width: "24px",
    },
    "& .MuiFormHelperText-root": {
      marginLeft: "5px",
    },
  },
  labelStyles: {
    paddingLeft: "5px",
    fontWeight: 400,
    fontFamily: "Trebuchet MS",
    color: "#1E4540",
    fontSize: "18px",
    lineHeight: "20.9px",
  },
  listStyles: {
    fontWeight: 500,
    color: "#30261D",
    opacity: 0.7,
  },
};

const AutocompleteField = ({
  options,
  value,
  label,
  onChange,
  shrink,
  id,
  name,
  helperText,
  error,
  placeholder,
  className,
  defaultValue,
  addStyle,
  maxHeight,
  sx,
  disabled,
  ...otherProps
}: any) => {
  return (
    <>
      <InputLabel shrink={shrink} sx={selectStyles.labelStyles}>
        {label}
      </InputLabel>
      <Autocomplete
        disableClearable={true}
        disabled={disabled}
        fullWidth
        disablePortal
        value={value}
        className={className}
        defaultValue={defaultValue}
        onChange={onChange}
        // getOptionLabel={(option) =>
        //   option && option?.name ? option?.name : ""
        // }
        // isOptionEqualToValue={(option, value) =>
        //   option.id === value.id ? true : false
        // }
        // renderOption={(props, option) => (
        //   <li {...props} key={option.id} style={selectStyles.listStyles}>
        //     {option.name}
        //   </li>
        // )}
        sx={addStyle ? sx : selectStyles.borderOnFocus}
        id={id}
        options={options}
        {...otherProps}
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            // InputProps={{
            //   ...params.InputProps,
            // }}
          />
        )}
        ListboxProps={{
          className: "customScroll",
          style: {
            maxHeight: maxHeight,
          },
        }}
      />
    </>
  );
};
export default AutocompleteField;
