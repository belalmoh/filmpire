import { CssBaseline } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import useStyles from "./styles"

import {Actors, Movies, MovieInformation, Navbar, Profile} from "./";

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navbar />
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/movies/:id" element={<MovieInformation />} />
                    <Route path="/actors/:id" element={<Actors />} />
                    <Route path="/profile" element={<Profile />} />

                </Routes>
            </main>
        </div>
    )
}

export default App