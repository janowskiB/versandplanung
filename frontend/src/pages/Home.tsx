import {Box, Container, Paper, Typography} from "@mui/material";

export default function Home() {
    return (
        <Container sx={{my: 2}}>
            <Paper elevation={1} sx={{p: 2}}>
                <Typography variant={"h4"} sx={{my: 2}}>Home</Typography>
                <Typography variant={"body1"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium adipisci alias,
                    architecto atque autem blanditiis commodi consequatur consequuntur corporis cumque cupiditate
                    dignissimos dolor doloremque doloribus eaque eius eligendi error esse et eveniet ex excepturi
                </Typography>
                <Box component={"img"} src={"/image_map.jpeg"} alt={"Random Image from a Map"}
                     sx={{my: 2, height: "100%", width: "100%", borderRadius: 2}}/>
            </Paper>
        </Container>
    )
}