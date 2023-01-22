import {
    AppBar,
    Box,
    Button, ButtonGroup, Card, CardContent, CardMedia,
    Container,
    Grid,
    makeStyles,
    Paper,
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

const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
const HomePage = () => {
    const classes = useStyles();
    const buttons = buttonsStyles();
    return (
        <body className={classes.body}>
            <AppBar position={"fixed"} className={classes.navigator}>
                <Container fixed className={classes.container}>
                    <Toolbar>
                        {/*<IconButton edge="start" color="inherit" aria-label="menu>" className={buttons.menu}>*/}
                        {/*    <MenuIcon/>*/}
                        {/*</IconButton>*/}
                        <Typography className={classes.title}>Проект по проге</Typography>
                        <Box mr={3}>
                            <Button color="inherit" variant="outlined" className={buttons.navigationSecondary} href={'/login'}>Log In</Button>
                        </Box>
                        <Button color="secondary" variant="contained" className={buttons.navigationMain} href={'/register'}>Sing Up</Button>
                    </Toolbar>
                </Container>
            </AppBar>

            <main >
                <Paper className={classes.info}>
                    <Container fixed >
                        <div className={classes.infoOverlay}/>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.infoContent}>
                                    <Typography paragraph component={"h1"} variant={"h3"}>
                                        Какое то описания какого то очередного формуа
                                    </Typography>
                                    <ButtonGroup>
                                        <Button variant={"contained"} color={"secondary"} className={buttons.info} >
                                            Make post
                                        </Button>
                                        <Box mr={3}>
                                            <Button color="inherit" variant="outlined" >My profile</Button>
                                        </Box>
                                    </ButtonGroup>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <Container className={classes.cardGrid} maxWidth={"md"}>
                    <Grid container spacing={4}>
                        {cards.map((card)=>(
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image={"https://source.unsplash.com/random"} title={"Image title"} />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant={"h5"} gutterBottom className={classes.cardHeader}>
                                            Название поста
                                        </Typography>
                                        <Typography className={classes.cardText}>
                                            Текст поста
                                        </Typography>
                                        <Button variant={"contained"} color={"secondary"} className={buttons.card} href={'/post'}>
                                            View
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                </Container>
            </main>
        </body>

    )
}

export default HomePage
