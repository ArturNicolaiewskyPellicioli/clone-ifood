import React from "react";
function Input({ label, type, name, value, onChange, error, onBlur }) {
  return (
    <div >
      <label htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        // className={styles.input}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {/* {error && <p className={styles.error}> {error}</p>} */}
    </div>
  );
}
export default Input;