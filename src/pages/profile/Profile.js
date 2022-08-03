import { useUser } from 'contexts/userContext'
import React, { useEffect } from 'react'
import { toast } from "react-toastify";
import {
    Box,
    Button, Container, CssBaseline
} from 'components/muiComponents'
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const { userState: { user, error }, logout } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])
    return (<>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <p>Profile: {user.firstName} {user.lastName}</p>
                <p>Email : {user.email}</p>
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => { logout(); navigate('/') }}
                >
                    Logout
                </Button>
            </Box>
        </Container>
    </>
    )
}
