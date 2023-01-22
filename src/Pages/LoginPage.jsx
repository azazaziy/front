import {
    Box,
    Button,
    ButtonGroup,
    makeStyles,
    TextField,
} from "@material-ui/core";
import "./styles.css"
import {useState} from "react";

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        font:"Montserrat"
    },
    navigator:{
        backgroundColor: "rgb(142, 114, 63)"

    },
    menuButton:{
        marginRight: theme.spacing(1),
        color: "rgb(228, 155, 93)",
    },
    container:{
        backgroundColor: "inherit",

    },
    title:{
        flexGrow:1,
        color: "rgb(228, 155, 93)",

    },
    info:{
        position: "relative",
        color: "white",
        marginBottom: theme.spacing(1),
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "rgb(77, 69, 62)",
        marginTop: "10px"
    },
    infoContent:{
        position:"relative",
        padding: theme.spacing(9),
        color:"rgb(236, 225, 215)"
    },
    infoOverlay:{
        position:"absolute",
        top:0,
        right:0,
        left:0,
        backgroundOverlay: "rgba(0,0,0,.3)"
    },
    cardsGrid:{
        marginTop: theme.spacing(5)
    },
    card:{
        backgroundColor: "rgb(77, 69, 62)",
    },
    cardMedia:{
        paddingTop:"56.25%"
    },
    cardContent:{
        flexGrow: 1
    },
    buttonMain:{
        backgroundColor: "rgb(228, 155, 93)",
        color: "rgb(142, 114, 63)",
    },
    buttonSecondary:{
        color: "rgb(228, 155, 93)",
        backgroundColor: "rgb(142, 114, 63)",
    },
    body:{
        backgroundColor: "rgb(102, 102, 102)",
    },
    infoButton:{
        color: "rgb(77, 69, 62)",
        backgroundColor: "rgb(236, 225, 215)"
    },
    cardHeader:{
        color: "rgb(206, 155, 203)"
    },
    cardText:{
        color: "rgb(228, 155, 93)",
    },
    cardButton:{
        color: "rgb(77, 69, 62)",
        backgroundColor: "rgb(154, 172, 206)"
    }

}))

const LoginPage = () => {
    const [inputLogin, setInputLogin] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const classes = useStyles();
    const handleClick = async () =>{
        setIsLoading(true);
            const response = await fetch('http://192.168.3.72:80/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                mode: 'no-cors',
                body:JSON.stringify({
                    'headers':{
                        'table': 'users',
                        'action_type': 'select_one',
                        'data_type':'str',
                        'conditions': {'login': inputLogin},
                        'fields': 'password',
                    },
                    'body':{'password':inputPassword}
                })
            })
        console.log(response)
    };
    return (
        <div className="App">
            <form className="form">
                <TextField
                    value={inputLogin}
                    onChange={e=> setInputLogin(e.target.value)}
                    id="outlined-basic"
                    label="login"
                    variant="outlined"
                    className="input"
                />
                <TextField
                    value={inputPassword}
                    onChange={e=> setInputPassword(e.target.value)}
                    id="outlined-basic"
                    label="password"
                    variant="outlined"
                    className="input"
                />

                <ButtonGroup className="form__buttons">
                    <Box>
                        <Button
                            color="inherit"
                            variant="outlined"
                            className={classes.buttonSecondary}
                            onClick={handleClick}
                        >Log In</Button>
                    </Box>
                    <Button color="secondary" variant="contained" className={classes.buttonMain} href={'/register'}>Register</Button>
                </ButtonGroup>
            </form>
        </div>
    )
}

export default LoginPage
