import React from 'react';
import { makeStyles } from '@material-ui/core';

import { container, section } from "assets/jss/material-kit-pro-react.js";
import { ReactComponent as NotFoundSvg } from "assets/img/undraw_not_found_60pq.svg";

const useStyles = makeStyles(theme => ({
    container: {
        ...container,
        zIndex: 1
    },
    section,
    svgStyle: {
        width: "100%",
        height: "100%",
        marginTop: 30,
        marginBottom: 30,
    }
}));

export default function SectionFeaturesItems() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container} >

                <NotFoundSvg className={classes.svgStyle} />

            </div>

        </div>

    );
}
