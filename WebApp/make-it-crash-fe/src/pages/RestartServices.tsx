import { useState } from "react";
import axios from 'axios';
import { Button, Alert } from '@mui/material';

function RestartServices() {
    const [data, setData] = useState(null);

    const restartServices = () => {
        axios
            .get('/restart', {
                baseURL: process.env.API_TESTING_BE_URL,
            })
            .then((response) => {
                setData(response.data);
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const getCurrentTimePlusMinutes = (minutes) => {
        const now = new Date();
        now.setMinutes(now.getMinutes() + minutes);
        const hours = now.getHours().toString().padStart(2, '0');
        const mins = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${mins}`;
    };

    return (
        <div>
            <h1 className="fw-bold">Anwendung neu starten</h1>
            <h5>Starte alle Services neu!</h5>
            <Button className="mt-2" variant="contained" onClick={restartServices}>neu starten!</Button>
            {data &&
                <Alert severity="success" className="mt-2">
                    <div className="d-flex flex-column align-items-start">
                        <p className="mb-2">Der Neustart wurde getriggert, dies kann eine Weile dauern (ca. 3-5 Minuten).</p>
                        <p className="mb-3"><strong>Schaue selbst, wann die Anwendung wieder verfügbar ist.</strong></p>
                        <p className="mb-2">Geschätzte Zeit: {getCurrentTimePlusMinutes(4)}</p>
                    </div>
                </Alert>}
        </div>
    );
}

export default RestartServices;
