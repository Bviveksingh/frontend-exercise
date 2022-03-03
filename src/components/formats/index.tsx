import React, { FC, useState } from 'react';
import { ErrorSvg } from '../../assets/svgs';
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
    <>
    <div className="md:col-span-full lg:col-span-3 h-auto rounded-lg bg-white">
        <div className="inner-container grid grid-cols-1 ml-5 gap-3 xl:gap-5 items-center xl:grid-cols-6 h-auto row-auto p-4">
            <div className="info-container col-span-2 self-start p-1">
                <h4 className="text-lg text-gray-900">Formats</h4>
                <p className="text-sm text-gray-500">Select all the formats this product and tracklisting will be released on.</p>
            </div>
            <div className="checkbox-container col-span-4 grid grid-cols-3 gap-2 pt-1">
                <CheckBoxComponent type="Digital" setCheckBoxState={alterCheckboxState} defaultChecked/>
                <CheckBoxComponent type="CD" setCheckBoxState={alterCheckboxState}/>
                <CheckBoxComponent type="Vinyl" setCheckBoxState={alterCheckboxState}/>
              {checkboxState === 0 &&                 
              <div className="error-message-container bg-errorBgRed rounded-md h-14 col-start-1 col-end-4 xl:mr-5 lg:mr-7 md:mr-8 flex items-center justify-evenly">
                  <ErrorSvg className="text-errorIcon"/>
                <p className="text-sm text-red-800" data-testid="error-message">This is an error message that appears when there are 0 formats are selected</p>
                </div>}
            </div>
        </div>
    </div>

    </>
  )
};

export default Formats;