import React, { useEffect } from "react";
import { selectElement, deSelectElement } from '../tookitRedux/toolKitSlice.ts'
import { useDispatch, useSelector } from "react-redux";

export function CheckBox (obj: {obj: {name:string}}) {
    const dispatch = useDispatch();
    const selectedArr = useSelector((state:{toolkit:{selectedEl:[]}}) => {
      return state.toolkit.selectedEl
  });
  const curObj = useSelector((state:{toolkit:{curPage:string, pages:[]}}) => {
    const curPage = state.toolkit.curPage;
    const resultsArr = state.toolkit.pages[curPage].results;
    let index = -1;
    resultsArr.forEach((item:{name:string}, i:number) => {
      if(item.name === obj.obj.name) index = i
    })
    return resultsArr[index]
});
//console.log(curObj)

    const [checked, setChecked] = React.useState(() => {
      for(let i = 0; i < selectedArr.length; i++) {
        if(selectedArr[i].name === obj.obj.name) {
          return true
        }
      }
      return false
    });
    useEffect(() => {
      setChecked(() => {
        for(let i = 0; i < selectedArr.length; i++) {
          if(selectedArr[i].name === obj.obj.name) {
            return true
          }
        }
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
              dispatch(deSelectElement(curObj))
            } else {
              dispatch(selectElement(curObj))
            }
            }}/>
        </div>
      );
}