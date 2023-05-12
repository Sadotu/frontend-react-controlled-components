import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import InputComponent from "./components/InputComponent";

function App () {
    const { register, handleSubmit, reset,  formState: { errors } } = useForm({ mode: "onBlur" });

    function handleFormSubmit(data) {
        console.log(data);
        reset();
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="form-section">
                    <InputComponent
                        inputType="text"
                        inputName="naam"
                        inputId="name-field"
                        inputLabel="Naam:"
                        validationRules={{
                            required: {
                                value: true,
                                message: "Dit veld is verplicht"
                            },
                            minLength: {
                                value: 2,
                                message: "Je naam moet uit minimaal twee karakters bestaan"
                            },
                            maxLength: {
                                value: 75,
                                message: "Je naam mag uit maximaal 75 karakters bestaan"
                            }
                        }}
                        register = {register}
                        error = {errors}
                    />
                    <InputComponent
                        inputType="text"
                        inputName="leeftijd"
                        inputId="age-field"
                        inputLabel="Leeftijd:"
                        validationRules={{
                            required: {
                                value: true,
                                message: "Dit veld is verplicht"
                            },
                            min: {
                                value: 18,
                                message: "Je moet minimaal 18 jaar zijn om dit formulier in te vullen"
                            },
                            max: {
                                value: 122,
                                message: "Je mag maximaal 122 jaar oud zijn om dit formulier in te vullen"
                            }
                        }}
                        register = {register}
                        error = {errors}
                    />
                </div>

                <div className="form-section">
                    <InputComponent
                        inputType="textarea"
                        inputName="review"
                        inputId="review-field"
                        inputLabel="Review:"
                        validationRules={{
                            maxLength: {
                                value: 500,
                                message: "Je review mag uit maximaal 500 karakters bestaan"
                            }
                        }}
                        register = {register}
                        error = {errors}
                    />
                    <label className="nieuwsbrief">
                        Inschrijven voor nieuwsbrief:
                        <input
                            type="checkbox"
                            {...register("nieuwsbrief")}
                        />
                    </label>
                </div>

                <button type="submit">Verzenden</button>
            </form>
        </div>
    );
}

export default App;

