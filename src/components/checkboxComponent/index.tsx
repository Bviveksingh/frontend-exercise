import React, { FC, useEffect, useState } from 'react';
import { CdSvg, DigitalSvg, VinylSvg } from '../../assets/svgs';

interface CheckBoxComponentProps{
  type: 'Digital' | 'Vinyl' | 'CD';
  defaultChecked?: boolean;
  setCheckBoxState: (num: 0 | 1) => void;
}

const CheckBoxComponent : FC<CheckBoxComponentProps> = ({
  defaultChecked,
  type,
  setCheckBoxState
}) => {
  const [activeState, setActiveState] = useState<boolean>(false);
 
  useEffect(()=> {
    if(defaultChecked){
      setActiveState(true);
    }
  },[defaultChecked])
  return (
      <>
        <div className={`flex flex-col border rounded-lg ${activeState ? "border-activeBorder" : "border-inactiveBorder"} ${activeState ? "bg-activeBg" : "bg-white"} items-center justify-evenly w-44 h-36`}>
          <div className="checkbox-image-container">
            {type === 'Digital' ? 
            <DigitalSvg className={`${activeState ? "text-activeIcon" : "text-inactiveIcon"}`}/> : type === "CD" ? 
            <CdSvg className={`${activeState ? "text-activeIcon" : "text-inactiveIcon"}`}/> : 
            <VinylSvg className={`${activeState ? "text-activeIcon" : "text-inactiveIcon"}`}/> }
          </div>
          <div className="checkbox-label-container">
            <label className={`${activeState ? "text-activeColor" : "text-inactiveColor"}`}>
              {type}
            </label>
          </div>
          <div className="checkbox-check-container flex justify-center">
            <input className="rounded w-4 h-4" defaultChecked={defaultChecked} onChange={(e) => {
              if(e.target.checked){
                setCheckBoxState(1);
                setActiveState(true);
              }else{
                setCheckBoxState(0);
                setActiveState(false);
              }
            }} type="checkbox"/>
          </div>
        </div>
      </>
 
   
  )
}

export default CheckBoxComponent;
