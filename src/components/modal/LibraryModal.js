import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { useLibrary } from 'contexts/LibraryContext';
import { CheckBox } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { FormControlLabel, FormGroup } from '@mui/material';



const libraries = ['my playlist'];

function SimpleDialog(props) {
    const [checked, setChecked] = useState(true);
    const { onClose, selectedValue, open } = props;
    const label = { inputProcess: { 'aria-label': 'checkbox demo' } }
    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Save to library</DialogTitle>
            <List sx={{ pt: 0 }}>
                <FormGroup>
                    {libraries.map((library) => (
                        <ListItem>
                            <FormControlLabel control={<Checkbox />} label={library} />
                        </ListItem>
                    ))}
                </FormGroup>

                <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 25, height: 25 }}>
                            <AddIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Create new playlist" sx={{marginLeft: -3}}/>
                </ListItem>
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default function LibraryModal() {
    const { openModal, handleModalClose } = useLibrary()

    return (
        <>
            <SimpleDialog
                open={openModal}
                onClose={handleModalClose}
            />
        </>
    );
}
