import React from "react";

export function CheckBox () {
    const [checked, setChecked] = React.useState(true);
    function handleClick(e:React.MouseEvent<HTMLInputElement, MouseEvent>) {
        e.stopPropagation()
        setChecked(!checked);
      };
    return (
        <div onClick={() => setChecked(!checked)}>
          <input type="checkbox" className="card_checkbox" checked={checked} onClick={(e) => handleClick(e)}/>
        </div>
      );
}