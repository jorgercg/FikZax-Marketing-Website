import React from 'react';
import classNames from "classnames";

import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Parallax from "components/Parallax/Parallax.js";

import AppFooter from 'screens/Layouts/AppFooter.js';
import AppHeader from 'screens/Layouts/AppHeader.js';

import SectionClientVideos from './Sections/SectionClientVideos.js';
import SectionProfessionalVideos from './Sections/SectionProfessionalVideos.js';
import SectionMainFeatures from './Sections/SectionMainFeatures.js';
import SectionWhoUses from './Sections/SectionWhoUses.js';
import SectionExplainerVideo from './Sections/SectionExplainerVideo.js';

import {
    container,
    main,
    mainRaised,
    title,
    primaryColor
} from "assets/jss/material-kit-pro-react.js";

const useStyles = makeStyles(theme => ({
    main,
    mainRaised,
    parallax: {
        height: "100vh",
        overflow: "hidden",
    },
    container: {
        ...container,
        zIndex: 1
    },
    sectionTitle: {
        ...title,
        textAlign: "start",
        fontWeight: "600",
        fontFamily: "Roboto",
        fontSize: "2rem",
        color: primaryColor[0],
        "@media (max-width: 600px)": {
            fontSize: "2rem",
            marginTop: 80,
        },
        "@media (min-width: 601px)": {
            fontSize: "2rem",
            marginTop: 80,
        },
        "@media (min-width: 768px)": {
            fontSize: "2rem",
            marginTop: 80,
        },
        "@media (min-width: 992px)": {
            fontSize: "3rem",
            marginTop: 80,
        },
        "@media (min-width: 1200px)": {
            fontSize: "3rem",
            marginTop: 80,
        }
    },
    brand: {
        color: primaryColor[0],
        textAlign: "start",
        "& span": {
            fontSize: "1rem",
            fontWeight: "500",
            display: "inline-block",
            position: "relative"
        },
        "@media (min-width: 576px)": {
            "& span": {
                fontSize: "1rem",
            },
        },
        "@media (min-width: 768px)": {
            "& span": {
                fontSize: "1rem",
            },
        },
        "@media (min-width: 992px)": {
            "& span": {
                fontSize: "1.5rem",
            },
        },
        "@media (min-width: 1200px)": {
            "& span": {
                fontSize: "1.5rem",
            },
        }
    },
    actionbutton: {
        marginTop: "40px",
    },
    actionbuttontext: {
        fontSize: "1.2rem",
        fontWeight: "500",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "30px",
        marginRight: "30px",
    },
}));

function HomeComponent() {
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
                        <GridItem md={9} sm={12} xs={12} align="start">
                            <div className={classes.sectionTitle}>
                                <span >
                                    {t("description.part0")}
                                </span>
                            </div>
                            <div className={classes.brand}>
                                <span>
                                    {t("description.part1")}
                                </span>
                            </div>
                        </GridItem>
                        <GridItem md={9} sm={12} xs={12} align="start">
                            <Button href="/pricing" className={classes.actionbutton} variant="outlined" color="primary">
                                <span className={classes.actionbuttontext}>
                                    {t("description.part3")}
                                </span>
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <SectionClientVideos />
                <SectionProfessionalVideos />
                <SectionMainFeatures />
                <SectionWhoUses />
                <SectionExplainerVideo />
            </div>
            <AppFooter />
        </div>
    );
}

export default HomeComponent;
