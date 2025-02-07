import { useEffect } from "react";
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyles from "./styles";

const categories = [
    {label: 'Popular', value: 'popular'},
    {label: 'Top Rated', value: 'top_rated'},
    {label: 'Upcoming', value: 'upcoming'},
]

const demoCategories = [
    {label: 'Action', value: 'action'},
    {label: 'Comedy', value: 'comedy'},
    {label: 'Thriller', value: 'thriller'},
    {label: 'Horror', value: 'horror'},
    {label: 'Romance', value: 'romance'},
    {label: 'Documentary', value: 'documentary'},
    {label: 'Drama', value: 'drama'},
    {label: 'Fantasy', value: 'fantasy'},
    {label: 'History', value: 'history'},
    {label: 'Music', value: 'music'},
    {label: 'Mystery', value: 'mystery'},
    {label: 'Sci-Fi', value: 'sci-fi'},
    {label: 'War', value: 'war'},
    {label: 'Western', value: 'western'},
]

const Sidebar = ({ setMobileOpen }) => {
    
    const theme = useTheme();
    const classes = useStyles();

    const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
    const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';




    useEffect(() => {

    }, []);

    return (
        <>
            <Link to={`/`} className={classes.imageLink}>
                <img className={classes.image} src={theme.palette.mode === 'light' ? redLogo : blueLogo} alt="Filmpire Logo" />
            </Link>
            <Divider />
            <List>
                <ListSubheader>Categories</ListSubheader>
                {categories.map(({label, value}) => (
                    <Link key={value} to={`/movies/${value}`} className={classes.links}>
                        <ListItem button key={value}>
                            {/* <ListItemIcon>
                                <img src={redLogo} className={classes.genre} height={30}/>
                            </ListItemIcon> */}
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                <ListSubheader>Genres</ListSubheader>
                {demoCategories.map(({label, value}) => (
                    <Link key={value} to={`/movies/${value}`} className={classes.links}>
                        <ListItem button key={value}>
                            {/* <ListItemIcon>
                                <img src={redLogo} className={classes.genre} height={30}/>
                            </ListItemIcon> */}
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </>
    )
}

export default Sidebar