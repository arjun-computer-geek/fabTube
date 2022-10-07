import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import { useLibrary } from 'contexts/LibraryContext';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { Button, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { useRef } from 'react';




function SimpleDialog(props) {
    const [hidden, setHidden] = useState(true)
    const inputRef = useRef()
    const { onClose,  open , video} = props;
    const { libraryState: { playlists }, createPlaylist, addVideoToPlaylist } = useLibrary();

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = () => {
        setHidden(!hidden);
    };
const createPlaylistHandler = () => {
    createPlaylist(inputRef.current?.children[1]?.children[0]?.value)
    inputRef.current.children[1].children[0].value = ""
}
    const handleChange = (playlistID) => {
        addVideoToPlaylist(playlistID, video)
        onClose()
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Save to library</DialogTitle>
            <List sx={{ pt: 0 }}>
                <FormGroup>
                    {playlists?.map((list) => (
                        <ListItem key={list._id} onChange={() =>handleChange(list._id)}>
                            <FormControlLabel control={<Checkbox />} label={list?.title} />
                        </ListItem>
                    ))}
                </FormGroup>
                <ListItem style={{display: hidden? "none": "block"}}>
                    <TextField ref={inputRef}  id="standard-basic" label="Name" variant="standard" />
                    <Button onClick={createPlaylistHandler} variant="contained">Create</Button>
                </ListItem>
                <ListItem  autoFocus button onClick={ handleListItemClick} sx={{display: hidden ?  "flex":"none"}}>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 25, height: 25 }}>
                            <AddIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Create new playlist" sx={{ marginLeft: -3 }} />
                </ListItem>
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default function LibraryModal({video}) {
    const { openModal, handleModalClose } = useLibrary()

    return (
        <>
            <SimpleDialog
                open={openModal}
                video = {video}
                onClose={handleModalClose}
            />
        </>
    );
}
