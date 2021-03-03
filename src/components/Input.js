import React from "react";
import './Input.css';

function Input({ label, type, name, value, onChange, error, onBlur,onFocus, placeholder, className }) {
  return (
    <div className="label-float">
      <input
        type={type}
        id={name}
        name={name}
        className={className}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        required
      />
      <label htmlFor={name}>
        {label}
      </label>
      {/* {error && <p className={styles.error}> {error}</p>} */}
    </div>
  );
}
export default Input;