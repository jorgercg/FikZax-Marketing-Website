import React from 'react';
import classNames from "classnames";

import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Parallax from "components/Parallax/Parallax.js";

import AppFooter from 'screens/Layouts/AppFooter';
import AppHeader from 'screens/Layouts/AppHeader';

import SectionContactUs from "./Sections/SectionContactUs.js";

import {
    container,
    main,
    mainRaised,
    whiteColor
} from "assets/jss/material-kit-pro-react.js";

const useStyles = makeStyles(theme => ({
    main,
    mainRaised,
    parallax: {
        height: "50vh",
        overflow: "hidden"
    },
    container: {
        ...container,
        zIndex: 1
    },
    brand: {
        color: whiteColor,
        textAlign: "center",
        "& h1": {
            fontSize: "3rem",
            fontWeight: "600",
            display: "inline-block",
            position: "relative"
        }
    },
}));

function ContactUsComponent() {
    const [t] = useTranslation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    return (
        <div>
            <AppHeader />
            <Parallax
                image={require("assets/img/robotbkg4.png")}
                className={classes.parallax}
            >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1>
                                    {t("contactus.title")}
                                </h1>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <SectionContactUs />
            </div>
            <AppFooter />
        </div>
    );
}

export default ContactUsComponent;
