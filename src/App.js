import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";

const Formulier = () => {
    const { register, handleSubmit, reset } = useForm();

    function handleFormSubmit(data) {
        console.log(data);
        reset();
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="form-section">
                    <label>
                        Naam:
                        <input
                            type="text"
                            {...register("naam")}
                            //value={formState.naam}
                            //onChange={handleChange}
                        />
                    </label>
                    <label>
                        Leeftijd:
                        <input
                            type="number"
                            {...register("leeftijd")}
                            //value={formState.leeftijd}
                            //onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="form-section">
                    <label>
                        Jouw Review:
                        <textarea
                            {...register("review")}
                            //value={formState.review}
                            //onChange={handleChange}
                        />
                    </label>
                    <label className="nieuwsbrief">
                        Inschrijven voor nieuwsbrief:
                        <input
                            type="checkbox"
                            {...register("nieuwsbrief")}
                            //checked={formState.nieuwsbrief}
                            //onChange={handleChange}
                        />
                    </label>
                </div>

                <button type="submit">Verzenden</button>
            </form>
        </div>
    );
};

export default Formulier;

