import React, { FC } from 'react';
import { CdSvg, DigitalSvg, VinylSvg } from '../../assets/svgs';

interface CheckBoxComponentProps{
  type?: 'digital' | 'vinyl' | 'cd';
  defaultChecked?: boolean;
  setCheckBoxState: (num: 0 | 1) => void;
}

const CheckBoxComponent : FC<CheckBoxComponentProps> = ({
  defaultChecked,
  setCheckBoxState
}) => {
  return (
      <>
        <div className="flex flex-col border-black border items-center justify-evenly w-44 h-36">
          <div className="checkbox-image-container">
            <DigitalSvg/>
          </div>
          <form>
          <div className="checkbox-label-container">
            <label>
              Digital
            </label>
          </div>
          <div className="checkbox-check-container flex justify-center">
            <input defaultChecked={defaultChecked} onChange={(e) => {
              if(e.target.checked){
                setCheckBoxState(1);
              }else{
                setCheckBoxState(0);
              }
            }} type="checkbox"/>
          </div>
          </form>
        </div>
      </>
 
   
  )
}

export default CheckBoxComponent;
