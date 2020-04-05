import React from 'react';
import ReactPlayer from 'react-player';

import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"

import {
    container,
    primaryColor,
    section,
} from "assets/jss/material-kit-pro-react.js";


const useStyles = makeStyles(theme => ({
    container: {
        ...container,
        paddingLeft: 0,
        paddingRight: 0,
        zIndex: 1
    },
    section: {
        ...section,
        paddingTop: 60,
        paddingBottom: 30,
        marginBottom: -15,
    },
    gridContainerVideos: {
        justify: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        align: "center",
    },
    sectionTitle: {
        color: primaryColor[0],
        fontWeight: "bold",
        fontSize: 40,
        display: "block",
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    sectionText: {
        color: primaryColor[1],
        fontWeight: "normal",
        fontSize: 22,
        display: "block",
        paddingLeft: 20,
        paddingRight: 20,
    },
    playerWrapper: {
        position: 'relative',
        paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */
    },
    reactPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    actionbutton: {
        marginTop: "0px",
        marginLeft: "20px",
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

export default function SectionExplainerVideo() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const rpYoutubeCfg = {
        youtube: {
            playerVars: { modestbranding: 1 }
        },
    };
    let explainerVideoURL = 'https://youtu.be/19cHVCj-ag8';
    switch (i18n.language) {
        case 'pt_PT':
            explainerVideoURL = 'https://youtu.be/T9_Ear1BJNw';
            break;
        case 'pt_BR':
            explainerVideoURL = 'https://youtu.be/rhgBy1OtdWg';
            break;
        default:
            explainerVideoURL = 'https://youtu.be/19cHVCj-ag8';
    }
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem>
                        <span className={classes.sectionTitle}>
                            {t("secExplainerVideo.title")}
                        </span>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem>
                        <span className={classes.sectionText}>
                            {t("secExplainerVideo.text00")}
                        </span>
                    </GridItem>
                </GridContainer>
                <GridContainer className={classes.gridContainerVideos}>
                    <GridItem md={12} sm={12} xs={12} align="center">
                        <div className={classes.playerWrapper}>
                            <ReactPlayer
                                className={classes.reactPlayer}
                                url={explainerVideoURL}
                                config={rpYoutubeCfg}
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem md={9} sm={12} xs={12} align="start">
                        <Button href="/pricing" className={classes.actionbutton} variant="outlined" color="primary">
                            <span className={classes.actionbuttontext}>
                                {t("description.part3")}
                            </span>
                        </Button>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
