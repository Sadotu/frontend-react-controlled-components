import React, {useState} from 'react';
import './App.css';

const Formulier = () => {
    const [naam, setNaam] = useState('');
    const [leeftijd, setLeeftijd] = useState('');
    const [review, setReview] = useState('');
    const [nieuwsbrief, setNieuwsbrief] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Naam:', naam);
        console.log('Leeftijd:', leeftijd);
        console.log('Review:', review);
        console.log('Nieuwsbrief:', nieuwsbrief);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Naam:
                <input
                    type="text"
                    value={naam}
                    onChange={(e) => setNaam(e.target.value)}
                />
            </label>
            <br />
            <label>
                Leeftijd:
                <input
                    type="number"
                    value={leeftijd}
                    onChange={(e) => setLeeftijd(e.target.value)}
                />
            </label>
            <br />
            <label>
                Jouw Review:
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </label>
            <br />
            <label>
                Inschrijven voor nieuwsbrief:
                <input
                    type="checkbox"
                    checked={nieuwsbrief}
                    onChange={(e) => setNieuwsbrief(e.target.checked)}
                />
            </label>
            <br />
            <button type="submit">Verzenden</button>
        </form>
    );
};

export default Formulier;

