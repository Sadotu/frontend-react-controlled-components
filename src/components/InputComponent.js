// InputComponent.js
import React from 'react';
function InputComponent({ inputType, inputName, inputLabel, inputId, validationRules, register, error }) {
    return (
            <label>
                {inputLabel}
                <input
                    type={inputType}
                    id={inputId}
                    {...register(inputName, validationRules)}
                />
                {error[inputName] && <p>{error[inputName].message}</p>}
            </label>
    );
}

export default InputComponent;
