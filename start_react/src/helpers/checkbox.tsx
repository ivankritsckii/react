import React from "react";
import { changeCheckbox } from '../tookitRedux/toolKitSlice.ts'
import { useDispatch } from "react-redux";

export function CheckBox (obj: {obj: {isActive:boolean, name:string}}) {
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState(!obj.obj.isActive);
    function handleClick(e:React.MouseEvent<HTMLInputElement, MouseEvent>) {
        e.stopPropagation()
        setChecked(!checked);
      };
    return (
        <div onClick={() => setChecked(!checked)}>
          <input type="checkbox" className="card_checkbox" checked={checked} onClick={(e) => handleClick(e)}
          onChange={() => {dispatch(changeCheckbox(obj.obj.name));
            console.log(obj.obj.name)}}/>
        </div>
      );
}