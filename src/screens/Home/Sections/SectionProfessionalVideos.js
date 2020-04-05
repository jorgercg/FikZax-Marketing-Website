import React from 'react';
import ReactPlayer from 'react-player';
import classNames from "classnames";

import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"

import {
    container,
    primaryColor,
    section,
    sectionDark,
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
    sectionDark,
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

export default function SectionProfessionalVideos() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const rpYoutubeCfg = {
        youtube: {
            playerVars: { modestbranding: 1 }
        },
    };
    let profVideo00ENUS = 'https://youtu.be/EnarGgSBY2c';
    let profVideo00PTPT = 'https://youtu.be/RRuleq3JJNM';
    let profVideo00PTBR = 'https://youtu.be/hml2264Lako';
    let profVideo00 = profVideo00ENUS;
    let profVideo01ENUS = 'https://youtu.be/zTX85hXwxyA';
    let profVideo01PTPT = 'https://youtu.be/pxGghh2urx4';
    let profVideo01PTBR = 'https://youtu.be/G8rzu9mV1Gg';
    let profVideo01 = profVideo01ENUS;
    let profVideo02ENUS = 'https://youtu.be/XAERPjlzNRM';
    let profVideo02PTPT = 'https://youtu.be/jmIVuqyDEPk';
    let profVideo02PTBR = 'https://youtu.be/M0yVBsSDZMU';
    let profVideo02 = profVideo02ENUS;
    let profVideo03ENUS = 'https://youtu.be/86CsuqZMOZ4';
    let profVideo03PTPT = 'https://youtu.be/RJ9oJ-C8N08';
    let profVideo03PTBR = 'https://youtu.be/ME-ozXCJZoQ';
    let profVideo03 = profVideo03ENUS;
    switch (i18n.language) {
        case 'pt_PT':
            profVideo00 = profVideo00PTPT;
            profVideo01 = profVideo01PTPT;
            profVideo02 = profVideo02PTPT;
            profVideo03 = profVideo03PTPT;
            break;
        case 'pt_BR':
            profVideo00 = profVideo00PTBR;
            profVideo01 = profVideo01PTBR;
            profVideo02 = profVideo02PTBR;
            profVideo03 = profVideo03PTBR;
            break;
        default:
            profVideo00 = profVideo00ENUS;
            profVideo01 = profVideo01ENUS;
            profVideo02 = profVideo02ENUS;
            profVideo03 = profVideo03ENUS;
    }
    return (
        <div className={classNames(classes.section, classes.sectionDark)}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem>
                        <span className={classes.sectionTitle}>
                            {t("secProfessionalVideos.title")}
                        </span>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem>
                        <span className={classes.sectionText}>
                            {t("secProfessionalVideos.text00")}
                        </span>
                    </GridItem>
                </GridContainer>
                <GridContainer className={classes.gridContainerVideos}>
                    <GridItem lg={3} md={6} sm={6} xs={12} align="center">
                        <span className={classes.videosText}>
                            {t("secProfessionalVideos.profVideo00")}
                        </span>
                        <ReactPlayer
                            url={profVideo00}
                            config={rpYoutubeCfg}
                            width='236px'
                            height='500px'
                        />
                    </GridItem>
                    <GridItem lg={3} md={6} sm={6} xs={12} align="center">
                        <span className={classes.videosText}>
                            {t("secProfessionalVideos.profVideo01")}
                        </span>
                        <ReactPlayer
                            url={profVideo01}
                            width='236px'
                            height='500px'
                        />
                    </GridItem>
                    <GridItem lg={3} md={6} sm={6} xs={12} align="center">
                        <span className={classes.videosText}>
                            {t("secProfessionalVideos.profVideo02")}
                        </span>
                        <ReactPlayer
                            url={profVideo02}
                            width='236px'
                            height='500px'
                        />
                    </GridItem>
                    <GridItem lg={3} md={6} sm={6} xs={12} align="center">
                        <span className={classes.videosText}>
                            {t("secProfessionalVideos.profVideo03")}
                        </span>
                        <ReactPlayer
                            url={profVideo03}
                            width='236px'
                            height='500px'
                        />
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem md={9} sm={12} xs={12} align="start">
                        <Button href="/howitworks" className={classes.actionbutton} variant="outlined" color="primary">
                            <span className={classes.actionbuttontext}>
                                {t("secProfessionalVideos.text99")}
                            </span>
                        </Button>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
