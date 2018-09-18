import React from "react";

const Field = (props) => {
  console.log(props);
  const {label, name, type, onChange, value} = props;
  return (
    <div className="form-group">
      <label>{label}</label>
      <input className="form-control" name={name} onChange={onChange} value={value} />
    </div>
  )
}

export default Field;
