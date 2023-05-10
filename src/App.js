import React, {useState} from 'react';
import './App.css';
//import { useForm } from "react-hook-form";

const Formulier = () => {
    const [ formState, setFormState ] = useState({
        naam: '',
        leeftijd: '',
        review: '',
        niewsbrief: false
    })

    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Naam:
                <input
                    type="text"
                    name="naam"
                    value={formState.naam}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Leeftijd:
                <input
                    type="number"
                    name="leeftijd"
                    value={formState.leeftijd}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Jouw Review:
                <textarea
                    name="review"
                    value={formState.review}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Inschrijven voor nieuwsbrief:
                <input
                    type="checkbox"
                    checked={formState.nieuwsbrief}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Verzenden</button>
        </form>
    );
};

export default Formulier;

