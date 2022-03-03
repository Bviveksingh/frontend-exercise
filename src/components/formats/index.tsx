import React, { FC, useState } from 'react';
import CheckBoxComponent from '../checkboxComponent';

type alter = 0 | 1;

const Formats : FC = () => {
  const [checkboxState, setCheckBoxState] = useState<number>(1);

  const alterCheckboxState = (num: alter) => {
    if(num === 0){
      setCheckBoxState(prevState => prevState - 1);
    }
    else{
      setCheckBoxState(prevState => prevState + 1);
    }
  }
  return (
    <div className="md:col-span-full lg:col-span-3 bg-white">
        <div className="inner-container grid grid-cols-1 xl:gap-5 items-center xl:grid-cols-6 h-auto row-auto p-4">
            <div className="info-container col-span-2 self-start">
                <h4 className="text-lg">Formats</h4>
                <p className="text-sm">Select all the formats this product and tracklisting will be released on.</p>
            </div>
            <div className="checkbox-container col-span-4 grid grid-cols-3 gap-2 pt-5">
                <CheckBoxComponent setCheckBoxState={alterCheckboxState} defaultChecked/>
                <CheckBoxComponent setCheckBoxState={alterCheckboxState}/>
                <CheckBoxComponent setCheckBoxState={alterCheckboxState}/>
            </div>
            {checkboxState === 0 && <p>Areeei ek toh bhi check kar</p>}
        </div>
    </div>
  )
};

export default Formats;