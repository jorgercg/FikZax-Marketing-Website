import React from 'react';
import classNames from "classnames";
import { makeStyles } from '@material-ui/core';
import { Trans } from 'react-i18next';
import i18n from 'i18next';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Paper from '@material-ui/core/Paper';
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"

import { ReactComponent as QuestionsSvg } from "assets/img/undraw_questions_75e0.svg";
import { ReactComponent as UserFlowSvg } from "assets/img/undraw_user_flow_vr6w.svg";
import fbpagemessage_en_US from "assets/img/mymfbcover_en_US.png";
import fbpagemessage_pt_PT from "assets/img/mymfbcover_pt_PT.png";
import fbpagemessage_pt_BR from "assets/img/mymfbcover_pt_BR.png";
import mssgGetStarted_en_US from "assets/img/mssg_getstarted_en_US.PNG";
import mssgGetStarted_pt_BR from "assets/img/mssg_getstarted_pt_BR.png";
import mssgGetStarted_pt_PT from "assets/img/mssg_getstarted_pt_PT.png";
import mssgGetStartedResponse_en_US from "assets/img/mssg_getstartedresponse_en_US.PNG";
import mssgGetStartedResponse_pt_BR from "assets/img/mssg_getstartedresponse_pt_BR.png";
import mssgGetStartedResponse_pt_PT from "assets/img/mssg_getstartedresponse_pt_PT.png";
import mssgMenu_en_US from "assets/img/mssg_menu_en_US.PNG";
import mssgMenu_pt_BR from "assets/img/mssg_menu_pt_BR.png";
import mssgMenu_pt_PT from "assets/img/mssg_menu_pt_PT.png";
import mssgSchedule_en_US from "assets/img/mssg_schedule_en_US.PNG";
import mssgSchedule_pt_BR from "assets/img/mssg_schedule_pt_BR.png";
import mssgSchedule_pt_PT from "assets/img/mssg_schedule_pt_PT.png";
import mmemessenger from "assets/img/mmemessenger.png";
import qrcodemessenger from "assets/img/qrcodemessenger.png";

import {
    container,
    hexToRgb,
    primaryColor,
    blackColor,
} from "assets/jss/material-kit-pro-react.js";

const backgroundColor = deepPurple[100];

const boxShadow = {
    boxShadow:
        "0 10px 30px -12px rgba(" +
        hexToRgb(blackColor) +
        ", 0.42), 0 4px 25px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(blackColor) +
        ", 0.2)"
};

const useStyles = makeStyles({
    container: {
        ...container,
        paddingLeft: 0,
        paddingRight: 0,
        zIndex: 1
    },
    howitwkTitleSectionText: {
        color: primaryColor,
        fontSize: 45,
        letterSpacing: 2,
    },
    howitwkEvenSection: {
        background: backgroundColor,
    },
    howitwkOddSectionTitle: {
        color: primaryColor,
        fontWeight: "bold",
        fontSize: 40,
        display: "block",
        paddingLeft: 15,
    },
    howitwkOddSectionText: {
        color: primaryColor,
        fontWeight: "normal",
        fontSize: 22,
    },
    howitwkEvenSectionText: {
        color: primaryColor,
        fontWeight: "normal",
        fontSize: 22,
    },
    howitwksec1: {
        paddingTop: 60,
        paddingBottom: 60,
    },
    howitwksec2: {
        paddingTop: 60,
        paddingBottom: 60,
    },
    svgStyle1: {
        width: "60%",
        height: "60%",
        marginTop: 5,
        marginBottom: 5,
    },
    gridContainer1: {
        justify: "center",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15,
    },
    gridContainer2: {
        justify: "center",
        alignItems: "center",
        paddingTop: 30,
        marginBottom: 30,
    },
    gridContainerDiscoveryItems: {
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
    pngStyle: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        width: "100%",
        height: "auto",
        ...boxShadow,
    },
    paperStyle: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 15,
        marginRight: 15,
    },
});

function getSendMessageBtnImage() {
    switch (i18n.language) {
        case 'pt_PT':
            return fbpagemessage_pt_PT;
        case 'pt_BR':
            return fbpagemessage_pt_BR;
        default:
            return fbpagemessage_en_US;
    }
}

function getMssgGetStartedResponseImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return mssgGetStartedResponse_pt_PT;
        case 'pt_BR':
            return mssgGetStartedResponse_pt_BR;
        default:
            return mssgGetStartedResponse_en_US;
    }
}

function getMssgMenuImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return mssgMenu_pt_PT;
        case 'pt_BR':
            return mssgMenu_pt_BR;
        default:
            return mssgMenu_en_US;
    }
}

function getMssgGetStartedImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return mssgGetStarted_pt_PT;
        case 'pt_BR':
            return mssgGetStarted_pt_BR;
        default:
            return mssgGetStarted_en_US;
    }
}

function getMssgScheduleImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return mssgSchedule_pt_PT;
        case 'pt_BR':
            return mssgSchedule_pt_BR;
        default:
            return mssgSchedule_en_US;
    }
}

export default function SectionHowItWorksClients() {
    const classes = useStyles();
    return (
        <div>
            <div className={classNames(classes.container, classes.howitwksec1)}>
                <GridContainer>
                    <GridItem>
                        <span className={classes.howitwkOddSectionTitle}>
                            <Trans i18nKey="howItWorks.client.sec1title"></Trans>
                        </span>
                    </GridItem>
                </GridContainer>
                <GridContainer className={classes.gridContainer1}>
                    <GridItem md={8} sm={8} xs={12}>
                        <span className={classes.howitwkOddSectionText}>
                            <Trans i18nKey="howItWorks.client.sec1text10"></Trans>
                        </span>
                    </GridItem>
                    <GridItem md={4} sm={4} xs={12} align="center">
                        <QuestionsSvg className={classes.svgStyle1} />
                    </GridItem>
                </GridContainer>
                <Paper elevation={6} className={classes.paperStyle}>
                    <GridContainer className={classes.gridContainerDiscoveryItems}>
                        <GridItem md={3} sm={3} xs={12} align="center">

                            <img src={getSendMessageBtnImage()} alt="" className={classes.pngStyle}></img>

                        </GridItem>
                        <GridItem md={9} sm={9} xs={12} align="center">
                            <span align="start" className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.client.sec1text30"></Trans>
                            </span>
                        </GridItem>
                    </GridContainer>
                </Paper>
                <Paper elevation={6} className={classes.paperStyle}>
                    <GridContainer className={classes.gridContainerDiscoveryItems}>
                        <GridItem md={3} sm={3} xs={12} align="center">
                            <img src={mmemessenger} alt="" className={classes.pngStyle}></img>
                        </GridItem>
                        <GridItem md={9} sm={9} xs={12} align="center">
                            <span align="start" className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.client.sec1text40"></Trans>
                            </span>
                        </GridItem>
                    </GridContainer>
                </Paper>
                <Paper elevation={6} className={classes.paperStyle}>
                    <GridContainer className={classes.gridContainerDiscoveryItems}>
                        <GridItem md={3} sm={3} xs={12} align="center">
                            <img src={qrcodemessenger} alt="" className={classes.pngStyle}></img>
                        </GridItem>
                        <GridItem md={9} sm={9} xs={12} align="center">
                            <span align="start" className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.client.sec1text50"></Trans>
                            </span>
                        </GridItem>
                    </GridContainer>
                </Paper>
            </div>
            <div className={classes.howitwkEvenSection}>
                <div className={classNames(classes.container, classes.howitwksec2)}>
                    <GridContainer>
                        <GridItem>
                            <span align="start" className={classes.howitwkOddSectionTitle}>
                                <Trans i18nKey="howItWorks.client.sec2title"></Trans>
                            </span>
                        </GridItem>
                    </GridContainer>
                    <GridContainer className={classes.gridContainer1}>
                        <GridItem md={8} sm={8} xs={12}>
                            <span className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.client.sec2text10"></Trans>
                            </span>
                        </GridItem>
                        <GridItem md={3} sm={3} xs={12} align="center">
                            <UserFlowSvg className={classes.svgStyle1} />
                        </GridItem>
                    </GridContainer>
                    <Paper elevation={6} className={classes.paperStyle}>
                        <GridContainer className={classes.gridContainerDiscoveryItems}>
                            <GridItem md={3} sm={3} xs={12} align="center">
                                <img src={getMssgGetStartedImg()} alt="" className={classes.pngStyle}></img>
                            </GridItem>
                            <GridItem md={9} sm={9} xs={12} align="center">
                                <span align="start" className={classes.howitwkOddSectionText}>
                                    <Trans i18nKey="howItWorks.client.sec2text20"></Trans>
                                    <br />
                                    <Trans i18nKey="howItWorks.client.sec2text21"></Trans>
                                </span>
                            </GridItem>
                        </GridContainer>
                    </Paper>
                    <Paper elevation={6} className={classes.paperStyle}>
                        <GridContainer className={classes.gridContainerDiscoveryItems}>
                            <GridItem md={3} sm={3} xs={12} align="center">
                                <img src={getMssgGetStartedResponseImg()} alt="" className={classes.pngStyle}></img>
                            </GridItem>
                            <GridItem md={9} sm={9} xs={12} align="center">
                                <span align="start" className={classes.howitwkOddSectionText}>
                                    <Trans i18nKey="howItWorks.client.sec2text30"></Trans>
                                </span>
                            </GridItem>
                        </GridContainer>
                    </Paper>
                    <Paper elevation={6} className={classes.paperStyle}>
                        <GridContainer className={classes.gridContainerDiscoveryItems}>
                            <GridItem md={3} sm={3} xs={12} align="center">
                                <img src={getMssgMenuImg()} alt="" className={classes.pngStyle}></img>
                            </GridItem>
                            <GridItem md={9} sm={9} xs={12} align="center">
                                <span align="start" className={classes.howitwkOddSectionText}>
                                    <Trans i18nKey="howItWorks.client.sec2text40"></Trans>
                                </span>
                            </GridItem>
                        </GridContainer>
                    </Paper>
                    <Paper elevation={6} className={classes.paperStyle}>
                        <GridContainer className={classes.gridContainerDiscoveryItems}>
                            <GridItem md={3} sm={3} xs={12} align="center">
                                <img src={getMssgScheduleImg()} alt="" className={classes.pngStyle}></img>
                            </GridItem>
                            <GridItem md={9} sm={9} xs={12} align="center">
                                <span align="start" className={classes.howitwkOddSectionText}>
                                    <Trans i18nKey="howItWorks.client.sec2text50"></Trans>
                                    <br />
                                    <Trans i18nKey="howItWorks.client.sec2text51"></Trans>
                                    <br />
                                    <Trans i18nKey="howItWorks.client.sec2text52"></Trans>
                                </span>
                            </GridItem>
                        </GridContainer>
                    </Paper>
                </div>
            </div>
        </div>
    );
}
