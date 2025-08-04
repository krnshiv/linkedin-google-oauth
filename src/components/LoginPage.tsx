
"use client";
import { LOGIN_BOX_SX, LOGIN_BOX_TYPOGRAPHY_VARIANT, LOGIN_CONTAINER_MAX_WIDTH, LOGIN_CONTAINER_SX, SIGN_IN_TEXT, TITLE } from "@/utils/constants";
import { Container, Typography, Box } from "@mui/material";
import LoginButton from "./LoginButton";


const LoginPage = () => {
    return (
        <Container maxWidth={LOGIN_CONTAINER_MAX_WIDTH} sx={LOGIN_CONTAINER_SX}>
            <Typography variant={LOGIN_BOX_TYPOGRAPHY_VARIANT} gutterBottom>
                {SIGN_IN_TEXT} {TITLE}
            </Typography>
            <Box sx={LOGIN_BOX_SX}>
                <LoginButton />
            </Box>
        </Container>
    );
}
export default LoginPage
