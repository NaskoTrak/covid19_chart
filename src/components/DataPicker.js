import React from 'react';
import Select from 'react-select';
import { Dropdown } from 'semantic-ui-react'

const DataPicker = (props) => {
    
    const options = props.dataChoices.map(choice => (
            {value: choice, label: choice}
        ));
    
    const handleChanege = (selectedOptions) => {
        props.setDataPicker(selectedOptions.value);
    };

    return (
        <div className="dataPicker">
            <Select
                value={options.find(op => {
                    return op.value === props.chosenData
                 })}
                options={options} 
                onChange={handleChanege}
            />
        </div>
    );
}

export default DataPicker;