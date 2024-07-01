import { useCollapse } from "react-collapsed";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {ChangeEvent, useEffect, useState} from "react";
import Switch from '@mui/material/Switch';
import {Alert} from "@mui/material";
import axios from 'axios';

function ScenarioIntegrationPoints({ title, text }: { title: string, text: string}) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [checked, setChecked] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        setShowError(false);
        axios
            .get(`${process.env.API_TESTING_BE_URL}monkey/active`)
            .then((response) => {
                setChecked(response.data)
                console.log(response);
            })
            .catch((error) => {
                setShowError(true);
                console.error(error);
            });
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setShowError(false);
        if(event.target.checked) {
            axios
                .get(`${process.env.API_TESTING_BE_URL}monkey/start`)
                .then((response) => {
                    setChecked(true)
                    console.log(response);
                })
                .catch((error) => {
                    setShowError(true);
                    console.error(error);
                });
        } else {
            axios
                .get(`${process.env.API_TESTING_BE_URL}monkey/stop`)
                .then((response) => {
                    setChecked(false);
                    console.log(response);
                })
                .catch((error) => {
                    setShowError(true);
                    console.error(error);
                });
        }
    };

    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {!isExpanded && <KeyboardDoubleArrowRightIcon />}
                {isExpanded && <KeyboardDoubleArrowDownIcon />}
                {title}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <p className="mt-2 fst-italic">{text}</p>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    {showError && <Alert className="mt-3" severity="error">Etwas ist schiefgelaufen. Bitte versuche es nochmal</Alert>}
                </div>
            </div>
        </div>
    );
}

export default ScenarioIntegrationPoints
