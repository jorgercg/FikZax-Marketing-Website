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
    },
    gridContainerVideos: {
        justify: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
        paddingTop: 0,
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
    videosText: {
        color: primaryColor[1],
        fontWeight: "normal",
        fontSize: 14,
        paddingLeft: 20,
        paddingRight: 20,
        "@media (max-width: 600px)": {
            display: "block",
            paddingBottom: 20,
            paddingTop: 20,
        },
        "@media (min-width: 601px)": {
            display: "inline-block",
            height: 170,
            paddingTop: 20,
        },
        "@media (min-width: 960px)": {
            display: "inline-block",
            height: 140,
            paddingTop: 30,
        },
        "@media (min-width: 1280px)": {
            display: "inline-block",
            height: 170,
            paddingTop: 0,
        }
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

export default function SectionClientVideos() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const rpYoutubeCfg = {
        youtube: {
            playerVars: { modestbranding: 1 }
        },
    };
    let clientVideo00ENUS = 'https://youtu.be/vjC0Pib9Mlo';
    let clientVideo00PTPT = 'https://youtu.be/NjTOa2W40SA';
    let clientVideo00PTBR = 'https://youtu.be/RRuleq3JJNM';
    let clientVideo00 = clientVideo00ENUS;
    let clientVideo01ENUS = 'https://youtu.be/5gUHUK76-QA';
    let clientVideo01PTPT = 'https://youtu.be/pEDzLs1_0bg';
    let clientVideo01PTBR = 'https://youtu.be/rLyPX74to0Q';
    let clientVideo01 = clientVideo01ENUS;
    let clientVideo02ENUS = 'https://youtu.be/i0xEH3aroVg';
    let clientVideo02PTPT = 'https://youtu.be/mZIiALNe9UU';
    let clientVideo02PTBR = 'https://youtu.be/GO8KAOOBt-k';
    let clientVideo02 = clientVideo02ENUS;
    let clientVideo03ENUS = 'https://youtu.be/q5TqgNkNyU8';
    let clientVideo03PTPT = 'https://youtu.be/bqZKcSm_axw';
    let clientVideo03PTBR = 'https://youtu.be/1s3DRKlb0Go';
    let clientVideo03 = clientVideo03ENUS;
    switch (i18n.language) {
        case 'pt_PT':
            clientVideo00 = clientVideo00PTPT;
            clientVideo01 = clientVideo01PTPT;
            clientVideo02 = clientVideo02PTPT;
            clientVideo03 = clientVideo03PTPT;
            break;
        case 'pt_BR':
            clientVideo00 = clientVideo00PTBR;
            clientVideo01 = clientVideo01PTBR;
            clientVideo02 = clientVideo02PTBR;
            clientVideo03 = clientVideo03PTBR;
            break;
        default:
            clientVideo00 = clientVideo00ENUS;
            clientVideo01 = clientVideo01ENUS;
            clientVideo02 = clientVideo02ENUS;
            clientVideo03 = clientVideo03ENUS;
    }
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem>
                        <span className={classes.sectionTitle}>
                            {t("secClientVideos.title")}
                        </span>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem>
                        <span className={classes.sectionText}>
                            {t("secClientVideos.text00")}
                        </span>
                    </GridItem>
                </GridContainer>
                <GridContainer className={classes.gridContainerVideos}>
                    <GridItem lg={3} md={6} sm={6} xs={12} align="center">
                        <span className={classes.videosText}>
                            {t("secClientVideos.clientVideo00")}
                        </span>
                        <ReactPlayer
                            url={clientVideo00}
                            config={rpYoutubeCfg}
                            width='236px'
                            height='500px'
                        />
                    </GridItem>
                    <GridItem lg={3} md={6} sm={6} xs={12} align="center">
                        <span className={classes.videosText}>
                            {t("secClientVideos.clientVideo01")}
                        </span>
                        <ReactPlayer
                            url={clientVideo01}
                            width='236px'
                            height='500px'
                        />
                    </GridItem>
                    <GridItem lg={3} md={6} sm={6} xs={12} align="center">
                        <span className={classes.videosText}>
                            {t("secClientVideos.clientVideo02")}
                        </span>
                        <ReactPlayer
                            url={clientVideo02}
                            width='236px'
                            height='500px'
                        />
                    </GridItem>
                    <GridItem lg={3} md={6} sm={6} xs={12} align="center">
                        <span className={classes.videosText}>
                            {t("secClientVideos.clientVideo03")}
                        </span>
                        <ReactPlayer
                            url={clientVideo03}
                            width='236px'
                            height='500px'
                        />
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem md={9} sm={12} xs={12} align="start">
                        <Button href="/howitworks" className={classes.actionbutton} variant="outlined" color="primary">
                            <span className={classes.actionbuttontext}>
                                {t("secClientVideos.text99")}
                            </span>
                        </Button>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
