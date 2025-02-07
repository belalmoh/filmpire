import { useState, useEffect } from "react";
import { Box, CircularProgress, useMediaQuery, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";

const Movies = () => {
    const { data, isLoading } = useGetMoviesQuery();
    // const movies = data?.results || [];
    
    console.log(data);

    return (
        <div>Movies</div>
    )
}

export default Movies