import React from 'react'
import {Card,CardActionArea,CardMedia,CardContent} from '@material-ui/core';
import useStyles from './styles.js';

const ImageCard = ({image: {webformatURL} , i}) => {
    const classes = useStyles();
    return (
        <Card>
            <CardActionArea>
                <CardMedia className={classes.media} image={webformatURL} />
            </CardActionArea>
        </Card>
    )
}

export default ImageCard
