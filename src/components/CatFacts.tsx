import React, { useState } from "react";
import "./CatFacts.scss";

export default function CatFacts() {
    const [facts, setFacts] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleLoadFacts = async () => {
        try {
            const response = await fetch("https://catfact.ninja/facts");
            const data = await response.json();
            setFacts(data.data.map((f: never) : string => f.fact));
            setError(null);
        } catch {
            setError("Не удалось получить список фактов");
            setFacts(null);
        }
    };

    return (
        <div className="cat-facts">
            <h1>Cat Facts</h1>
            <button onClick={handleLoadFacts} >
                Получить факты
            </button>
            {error && <div className="error-box">{error}</div>}

            {!error &&
                facts.map((fact, i) => (
                    <div key={i} className="success-box">
                        {fact}
                    </div>
                ))}
        </div>
    );
}
