import React, { useEffect } from "react";
import { selectElement, deSelectElement } from '../tookitRedux/toolKitSlice.ts'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

export function CheckBox (obj: {obj: {name:string}}) {
    const dispatch = useDispatch();
    const selectedArr = useSelector((state:{toolkit:{selectedEl:[]}}) => {
      return state.toolkit.selectedEl
  });

    const [checked, setChecked] = React.useState(() => {
      if(selectedArr.indexOf(obj.obj.name) > -1) return true;
      return false
    });
    useEffect(() => {
      setChecked(() => {
        if(selectedArr.indexOf(obj.obj.name) > -1) return true;
        return false
      })
    }, [selectedArr])


    function handleClick(e:React.MouseEvent<HTMLInputElement, MouseEvent>) {
        e.stopPropagation()
        setChecked(!checked);
      };
    return (
        <div onClick={() => setChecked(!checked)}>
          <input type="checkbox" className="card_checkbox" checked={checked} onClick={(e) => handleClick(e)}
          onChange={() => {
            if(checked) {
              console.log('checked')
              dispatch(deSelectElement(obj.obj.name))
            } else {
              dispatch(selectElement(obj.obj.name))
            }
            }}/>
        </div>
      );
}