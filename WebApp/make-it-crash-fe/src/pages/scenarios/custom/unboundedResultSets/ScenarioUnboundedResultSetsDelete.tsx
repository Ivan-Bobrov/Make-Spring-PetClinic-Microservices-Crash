import Button from '@mui/material/Button';
import axios from 'axios';
import { useCollapse } from "react-collapsed";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useState } from 'react';
import { Alert, Box, LinearProgress } from '@mui/material';

function ScenarioUnboundedResultSetsDelete({ title, text, path }: { title: string, text: string, path: string}) {
    const [showSpinner, setShowSpinner] = useState(false);
    const [data, setData] = useState(null);
    
    const startDeletion = () => {
        setShowSpinner(true);

        axios
            .get(`${path}/delete`, {
                baseURL: process.env.API_GW_URL,
                responseType: 'json',
                headers: { 'content-type': 'application/json' },
            })
            .then((response) => {
                setShowSpinner(false);
                setData(response.data);
                console.log(response);
            })
            .catch((error) => {
                setShowSpinner(false);
                console.error(error);
            });
    };

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

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
                    <Button variant="outlined" onClick={startDeletion}>Löschen</Button>

                    {showSpinner && 
                                <Box className="mt-3" sx={{ width: '100%' }}>
                                    <LinearProgress/>
                                </Box>
                            }

                    <div className="mt-3">
                    {data && <Alert severity="success" className="mt-2">
                                    Erfolgt!
                                </Alert>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScenarioUnboundedResultSetsDelete
