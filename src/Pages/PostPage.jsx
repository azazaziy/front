import {
    AppBar,
    Box,
    Button,
    Container,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";


const buttonsStyles = makeStyles((theme)=>({
    menu:{
        marginRight: theme.spacing(1),
        color: "rgb(228, 155, 93)",
    },
    navigationMain:{
        backgroundColor: "rgb(228, 155, 93)",
        color: "rgb(142, 114, 63)"
    },
    navigationSecondary:{
        color: "rgb(228, 155, 93)",
        backgroundColor: "rgb(142, 114, 63)",
    },
    card:{
        color: "rgb(77, 69, 62)",
        backgroundColor: "rgb(154, 172, 206)"
    },
    info:{
        color: "rgb(77, 69, 62)",
        backgroundColor: "rgb(236, 225, 215)",
        marginRight: theme.spacing(4),

    },
}))

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        font:"Montserrat"
    },
    navigator:{
        backgroundColor: "rgb(142, 114, 63)"

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
        backgroundColor: "rgb(77, 69, 62)"
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
    body:{
        backgroundColor: "rgb(102, 102, 102)",
    },
    cardHeader:{
        color: "rgb(206, 155, 203)"
    },
    cardText:{
        color: "rgb(228, 155, 93)",
    },

}))

const PostPage = () => {
    const classes = useStyles();
    const buttons = buttonsStyles();
    return (
        <body className={classes.body}>
        <AppBar position={"fixed"} className={classes.navigator}>
            <Container fixed className={classes.container}>
                <Toolbar>
                    <Typography className={classes.title}>Проект по проге</Typography>
                    <Box mr={3}>
                        <Button color="inherit" variant="outlined" className={buttons.navigationSecondary} href={'/login'}>Log In</Button>
                    </Box>
                    <Button color="secondary" variant="contained" className={buttons.navigationMain} href={'/register'}>Sing Up</Button>
                </Toolbar>
            </Container>
        </AppBar>
        </body>

    )
}

export default PostPage
