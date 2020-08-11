import React from 'react'
import ImageCard from '../ImageCard/ImageCard';
import {Grid,Grow} from '@material-ui/core';
import useStyles from './styles.js';

const ImageCards = ({ results }) => {
    const classes = useStyles();
    const re = results.map((image,i)=>{
        return(
            <Grid  item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                <ImageCard image={image} i={i}/>
            </Grid>
            
        );
    }) 
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {re}
            </Grid>
            
        </Grow>
    )
}

export default ImageCards;
