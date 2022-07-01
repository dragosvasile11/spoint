import React, {useContext, useState} from 'react';
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
// import SpointCopyright from "@material-ui/icons";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Switch from "../Buttons/SwitchTheme/Switch";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {ThemeContext} from "../Contexts/ThemeContext";
import {createTheme} from "@mui/material/styles";
import {Rating, ThemeProvider} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import SpointCopyright from "../Assets/SpointCopyright"
import ratings3 from "../../images/ratings3.png";
import ratings4 from "../../images/ratings4.png";
import ratings5 from "../../images/rating5.png";
import {Fade, Slide} from 'react-reveal';
import BackButton from "../Buttons/BackButton";

const Review = () => {

    const CHARACTER_LIMIT = 200;
    const [values, setValues] = useState("");
    const[reviews, setReviews] = useState(null)
    const[rating, setRating] = useState(3)
    const[ratingHover, setRatingHover] = useState(-1)

    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    const handleSubmit = () => {
        console.log("handle")
    }

    const { theme, setTheme } = useContext(ThemeContext)

    const muiTheme = createTheme({
        palette: {
            mode: theme,
        },
    });

    const handleChange = (event) => {
        setValues(event.target.value );
    };

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    return (
        <>
            <ThemeProvider theme={muiTheme}>
                <BackButton backToLink={"/gameplay"}/>
                <Switch/>
                <Container component="main" maxWidth="xl" style={{ lineHeight: "1", paddingLeft: "2vw", marginLeft: "0" }}>
                    <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'left',
                            }}
                        >
                            <Avatar sx={{ m:1, bgcolor: 'primary.main', width: 75, height: 75 }} xs={10}>
                                <FavoriteIcon fontSize={"large"} color={"error"}/>
                            </Avatar>
                            <Box
                                sx={{
                                    display: "flex",
                                    position: "fixed",
                                    justifyContent: "right",
                                    right: "0",
                                    bottom: "0"
                                }}
                            >
                                <Slide right>
                                    <img src={ratings3} alt="Logo" style={{maxWidth: "85%", height: "auto"}}></img>
                                </Slide>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    position: "fixed",
                                    justifyContent: "left",
                                    left: "-0.5vw",
                                    bottom: "0"
                                }}
                            >
                                <Slide left>
                                    <img src={ratings4} alt="Logo" style={{maxWidth: "100%", height: "auto"}}></img>
                                </Slide>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    position: "fixed",
                                    justifyContent: "",
                                    right: "20vw",
                                    top: "5vw"
                                }}
                            >
                                <Slide top>
                                    <img src={ratings5} alt="Logo" style={{maxWidth: "90%", height: "auto"}}></img>
                                </Slide>
                            </Box>
                            <Typography component="h1" variant="h5">
                                Leave us a review
                            </Typography>
                            <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={5}>
                                    <Grid item xs={10} sm={5}>
                                        <TextField
                                            name="message"
                                            required={true}
                                            fullWidth
                                            multiline={true}
                                            rows={5}
                                            inputProps={{ maxLength: CHARACTER_LIMIT }}
                                            id="message"
                                            label="Message"
                                            autoFocus
                                            color = "warning"
                                            helperText={`${values.length}/${CHARACTER_LIMIT}`}
                                            onChange={ handleChange }
                                        />
                                    </Grid>
                                    <Grid item xs={12} display={"inline-flex"}>
                                        <Rating
                                            name="rating"
                                            value={rating}
                                            precision={0.5}
                                            getLabelText={getLabelText}
                                            onChange={(event, newValue) => {
                                                setRating(newValue);
                                            }}
                                            onChangeActive={(event, newHover) => {
                                                setRatingHover(newHover);
                                            }}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        {rating !== null && (
                                            <Box sx={{ ml: 2 }} style={{ marginTop: "4px" }}>
                                                {labels[ratingHover !== -1 ? ratingHover : rating]}
                                            </Box>
                                        )}
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 4, mb: 1 }}
                                    color="warning"
                                >
                                    Post Review
                                </Button>
                            </Box>
                    </Box>
                </Container>
                <Box sx={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                }}>

                        <Typography
                            component="h5"
                            variant="h5"
                            fontSize={"1.3vw"}
                            width={"20vw"}
                            display={ "inline-block" }
                            position={"absolute"}
                            bottom={"10vh"}
                            style={{ borderStyle: "solid", borderColor: "orange", borderRadius: "10px", fontStyle: "oblique"}}
                        >
                            <Fade bottom>
                                <div>
                                "Until you understand your customers,
                                deeply and genuinely,
                                you cannot truly serve them"
                                </div>
                            </Fade>
                        </Typography>

                </Box>
                <Grid container justifyContent="center" position={"absolute"} bottom={"10px"}>
                    <Grid item>
                        <SpointCopyright sx={{ mt: 3 }} />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
};

export default Review;
