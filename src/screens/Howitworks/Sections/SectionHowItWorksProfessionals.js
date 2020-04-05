import React from 'react';
import classNames from "classnames";
import { makeStyles } from '@material-ui/core';
import { Trans } from 'react-i18next';
import i18n from 'i18next';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Paper from '@material-ui/core/Paper';
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"

import { ReactComponent as ProcessSvg } from "assets/img/undraw_process_e90d.svg";
import { ReactComponent as ChatBotSvg } from "assets/img/undraw_chat_bot_kli5.svg";

import fz_mthview_en_US from "assets/img/fz_mthview_en_US.png";
import fz_mthview_pt_BR from "assets/img/fz_mthview_pt_BR.png";
import fz_mthview_pt_PT from "assets/img/fz_mthview_pt_PT.png";
import fz_schdview_en_US from "assets/img/fz_schdview_en_US.png";
import fz_schdview_pt_BR from "assets/img/fz_schdview_pt_BR.png";
import fz_schdview_pt_PT from "assets/img/fz_schdview_pt_PT.png";
import fz_schdviewlocal_en_US from "assets/img/fz_schdviewlocal_en_US.png";
import fz_schdviewlocal_pt_BR from "assets/img/fz_schdviewlocal_pt_BR.png";
import fz_schdviewlocal_pt_PT from "assets/img/fz_schdviewlocal_pt_PT.png";
import fz_schdviewlocalconfirmed_en_US from "assets/img/fz_schdviewlocalconfirmed_en_US.png";
import fz_schdviewlocalconfirmed_pt_BR from "assets/img/fz_schdviewlocalconfirmed_pt_BR.png";
import fz_schdviewlocalconfirmed_pt_PT from "assets/img/fz_schdviewlocalconfirmed_pt_PT.png";
import fz_schdviewlocalverified_en_US from "assets/img/fz_schdviewlocalverified_en_US.png";
import fz_schdviewlocalverified_pt_BR from "assets/img/fz_schdviewlocalverified_pt_BR.png";
import fz_schdviewlocalverified_pt_PT from "assets/img/fz_schdviewlocalverified_pt_PT.png";
import fz_schdviewrobot_en_US from "assets/img/fz_schdviewrobot_en_US.png";
import fz_schdviewrobot_pt_BR from "assets/img/fz_schdviewrobot_pt_BR.png";
import fz_schdviewrobot_pt_PT from "assets/img/fz_schdviewrobot_pt_PT.png";
import fz_schdviewrobotconfirmed_en_US from "assets/img/fz_schdviewrobotconfirmed_en_US.png";
import fz_schdviewrobotconfirmed_pt_BR from "assets/img/fz_schdviewrobotconfirmed_pt_BR.png";
import fz_schdviewrobotconfirmed_pt_PT from "assets/img/fz_schdviewrobotconfirmed_pt_PT.png";
import fz_schdviewrobotverified_en_US from "assets/img/fz_schdviewrobotverified_en_US.png";
import fz_schdviewrobotverified_pt_BR from "assets/img/fz_schdviewrobotverified_pt_BR.png";
import fz_schdviewrobotverified_pt_PT from "assets/img/fz_schdviewrobotverified_pt_PT.png";
import fz_slotedit_en_US from "assets/img/fz_slotedit_en_US.png";
import fz_slotedit_pt_BR from "assets/img/fz_slotedit_pt_BR.png";
import fz_slotedit_pt_PT from "assets/img/fz_slotedit_pt_PT.png";
import fz_verifydialoglocal_en_US from "assets/img/fz_verifydialoglocal_en_US.png";
import fz_verifydialoglocal_pt_BR from "assets/img/fz_verifydialoglocal_pt_BR.png";
import fz_verifydialoglocal_pt_PT from "assets/img/fz_verifydialoglocal_pt_PT.png";
import fz_verifydialogrobot_en_US from "assets/img/fz_verifydialogrobot_en_US.png";
import fz_verifydialogrobot_pt_BR from "assets/img/fz_verifydialogrobot_pt_BR.png";
import fz_verifydialogrobot_pt_PT from "assets/img/fz_verifydialogrobot_pt_PT.png";
import fz_verifylocal_en_US from "assets/img/fz_verifylocal_en_US.png";
import fz_verifylocal_pt_BR from "assets/img/fz_verifylocal_pt_BR.png";
import fz_verifylocal_pt_PT from "assets/img/fz_verifylocal_pt_PT.png";
import fz_verifylocalsuccess_en_US from "assets/img/fz_verifylocalsuccess_en_US.png";
import fz_verifylocalsuccess_pt_BR from "assets/img/fz_verifylocalsuccess_pt_BR.png";
import fz_verifylocalsuccess_pt_PT from "assets/img/fz_verifylocalsuccess_pt_PT.png";
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

const useStyles = makeStyles(theme => ({
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
        ...boxShadow,
    },
    paperStyle: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 15,
        marginRight: 15,
    },
}));

function getfz_mthviewImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return fz_mthview_pt_PT;
        case 'pt_BR':
            return fz_mthview_pt_BR;
        default:
            return fz_mthview_en_US;
    }
}

function getfz_schdviewImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return fz_schdview_pt_PT;
        case 'pt_BR':
            return fz_schdview_pt_BR;
        default:
            return fz_schdview_en_US;
    }
}

function getfz_schdviewlocalImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return fz_schdviewlocal_pt_PT;
        case 'pt_BR':
            return fz_schdviewlocal_pt_BR;
        default:
            return fz_schdviewlocal_en_US;
    }
}

function getfz_schdviewlocalconfirmedImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return fz_schdviewlocalconfirmed_pt_PT;
        case 'pt_BR':
            return fz_schdviewlocalconfirmed_pt_BR;
        default:
            return fz_schdviewlocalconfirmed_en_US;
    }
}

function getfz_schdviewlocalverifiedImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return fz_schdviewlocalverified_pt_PT;
        case 'pt_BR':
            return fz_schdviewlocalverified_pt_BR;
        default:
            return fz_schdviewlocalverified_en_US;
    }
}

function getfz_schdviewrobotImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return fz_schdviewrobot_pt_PT;
        case 'pt_BR':
            return fz_schdviewrobot_pt_BR;
        default:
            return fz_schdviewrobot_en_US;
    }
}

function getfz_schdviewrobotconfirmedImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return fz_schdviewrobotconfirmed_pt_PT;
        case 'pt_BR':
            return fz_schdviewrobotconfirmed_pt_BR;
        default:
            return fz_schdviewrobotconfirmed_en_US;
    }
}

function getfz_schdviewrobotverifiedImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return fz_schdviewrobotverified_pt_PT;
        case 'pt_BR':
            return fz_schdviewrobotverified_pt_BR;
        default:
            return fz_schdviewrobotverified_en_US;
    }
}

function getfz_sloteditImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return fz_slotedit_pt_PT;
        case 'pt_BR':
            return fz_slotedit_pt_BR;
        default:
            return fz_slotedit_en_US;
    }
}

function getfz_verifydialoglocalImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return fz_verifydialoglocal_pt_PT;
        case 'pt_BR':
            return fz_verifydialoglocal_pt_BR;
        default:
            return fz_verifydialoglocal_en_US;
    }
}

function getfz_verifydialogrobotImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return fz_verifydialogrobot_pt_PT;
        case 'pt_BR':
            return fz_verifydialogrobot_pt_BR;
        default:
            return fz_verifydialogrobot_en_US;
    }
}

function getfz_verifylocalImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return fz_verifylocal_pt_PT;
        case 'pt_BR':
            return fz_verifylocal_pt_BR;
        default:
            return fz_verifylocal_en_US;
    }
}

function getfz_verifylocalsuccessImg() {
    switch (i18n.language) {
        case 'pt_PT':
            return fz_verifylocalsuccess_pt_PT;
        case 'pt_BR':
            return fz_verifylocalsuccess_pt_BR;
        default:
            return fz_verifylocalsuccess_en_US;
    }
}

export default function SectionHowItWorksProfessionals() {
    const classes = useStyles();
    return (
        <div>
            <div className={classNames(classes.container, classes.howitwksec1)}>
                <GridContainer>
                    <GridItem>
                        <span align="start" className={classes.howitwkOddSectionTitle}>
                            <Trans i18nKey="howItWorks.professional.sec1title"></Trans>
                        </span>
                    </GridItem>
                </GridContainer>
                <GridContainer className={classes.gridContainer1}>
                    <GridItem md={8} sm={8} xs={12}>
                        <span className={classes.howitwkOddSectionText}>
                            <Trans i18nKey="howItWorks.professional.sec1text10"></Trans>
                        </span>
                    </GridItem>
                    <GridItem md={4} sm={4} xs={12} align="center">
                        <ProcessSvg className={classes.svgStyle1} />
                    </GridItem>
                </GridContainer>
                <Paper elevation={6} className={classes.paperStyle}>
                    <GridContainer className={classes.gridContainerDiscoveryItems}>
                        <GridItem md={3} sm={3} xs={12} align="center">
                            <img src={getfz_mthviewImg()} alt="" className={classes.pngStyle}></img>
                        </GridItem>
                        <GridItem md={9} sm={9} xs={12} align="center">
                            <span align="start" className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.professional.sec1text20"></Trans>
                                <br />
                                <Trans i18nKey="howItWorks.professional.sec1text21"></Trans>
                                <br />
                                <Trans i18nKey="howItWorks.professional.sec1text22"></Trans>
                            </span>
                        </GridItem>
                    </GridContainer>
                </Paper>
                <Paper elevation={6} className={classes.paperStyle}>
                    <GridContainer className={classes.gridContainerDiscoveryItems}>
                        <GridItem md={3} sm={3} xs={12} align="center">
                            <img src={getfz_schdviewImg()} alt="" className={classes.pngStyle}></img>
                        </GridItem>
                        <GridItem md={9} sm={9} xs={12} align="center">
                            <span align="start" className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.professional.sec1text30"></Trans>
                                <br />
                                <Trans i18nKey="howItWorks.professional.sec1text31"></Trans>
                                <br />
                                <Trans i18nKey="howItWorks.professional.sec1text32"></Trans>
                                <br />
                                <Trans i18nKey="howItWorks.professional.sec1text33"></Trans>
                                <br />
                                <Trans i18nKey="howItWorks.professional.sec1text34"></Trans>
                                <br />
                                <Trans i18nKey="howItWorks.professional.sec1text35"></Trans>
                            </span>
                        </GridItem>
                    </GridContainer>
                </Paper>
                <Paper elevation={6} className={classes.paperStyle}>
                    <GridContainer className={classes.gridContainerDiscoveryItems}>
                        <GridItem md={3} sm={3} xs={12} align="center">
                            <img src={getfz_sloteditImg()} alt="" className={classes.pngStyle}></img>
                        </GridItem>
                        <GridItem md={9} sm={9} xs={12} align="center">
                            <span align="start" className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.professional.sec1text40"></Trans>
                                <br />
                                <Trans i18nKey="howItWorks.professional.sec1text41"></Trans>
                            </span>
                        </GridItem>
                    </GridContainer>
                </Paper>
                <Paper elevation={6} className={classes.paperStyle}>
                    <GridContainer className={classes.gridContainerDiscoveryItems}>
                        <GridItem md={3} sm={3} xs={12} align="center">
                            <img src={getfz_schdviewlocalImg()} alt="" className={classes.pngStyle}></img>
                        </GridItem>
                        <GridItem md={9} sm={9} xs={12} align="center">
                            <span align="start" className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.professional.sec1text50"></Trans>
                                <br />
                                <Trans i18nKey="howItWorks.professional.sec1text51"></Trans>
                            </span>
                        </GridItem>
                    </GridContainer>
                </Paper>
                <Paper elevation={6} className={classes.paperStyle}>
                    <GridContainer className={classes.gridContainerDiscoveryItems}>
                        <GridItem md={3} sm={3} xs={12} align="center">
                            <img src={getfz_verifydialoglocalImg()} alt="" className={classes.pngStyle}></img>
                        </GridItem>
                        <GridItem md={9} sm={9} xs={12} align="center">
                            <span align="start" className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.professional.sec1text60"></Trans>
                            </span>
                        </GridItem>
                    </GridContainer>
                </Paper>
                <Paper elevation={6} className={classes.paperStyle}>
                    <GridContainer className={classes.gridContainerDiscoveryItems}>
                        <GridItem md={3} sm={3} xs={12} align="center">
                            <img src={getfz_verifylocalImg()} alt="" className={classes.pngStyle}></img>
                        </GridItem>
                        <GridItem md={9} sm={9} xs={12} align="center">
                            <span align="start" className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.professional.sec1text70"></Trans>
                                <br />
                                <Trans i18nKey="howItWorks.professional.sec1text71"></Trans>
                            </span>
                        </GridItem>
                    </GridContainer>
                </Paper>
                <Paper elevation={6} className={classes.paperStyle}>
                    <GridContainer className={classes.gridContainerDiscoveryItems}>
                        <GridItem md={3} sm={3} xs={12} align="center">
                            <img src={getfz_verifylocalsuccessImg()} alt="" className={classes.pngStyle}></img>
                        </GridItem>
                        <GridItem md={9} sm={9} xs={12} align="center">
                            <span align="start" className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.professional.sec1text80"></Trans>
                            </span>
                        </GridItem>
                    </GridContainer>
                </Paper>
                <Paper elevation={6} className={classes.paperStyle}>
                    <GridContainer className={classes.gridContainerDiscoveryItems}>
                        <GridItem md={3} sm={3} xs={12} align="center">
                            <img src={getfz_schdviewlocalverifiedImg()} alt="" className={classes.pngStyle}></img>
                        </GridItem>
                        <GridItem md={9} sm={9} xs={12} align="center">
                            <span align="start" className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.professional.sec1text90"></Trans>
                            </span>
                        </GridItem>
                    </GridContainer>
                </Paper>
                <Paper elevation={6} className={classes.paperStyle}>
                    <GridContainer className={classes.gridContainerDiscoveryItems}>
                        <GridItem md={3} sm={3} xs={12} align="center">
                            <img src={getfz_schdviewlocalconfirmedImg()} alt="" className={classes.pngStyle}></img>
                        </GridItem>
                        <GridItem md={9} sm={9} xs={12} align="center">
                            <span align="start" className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.professional.sec1text100"></Trans>
                                <br />
                                <Trans i18nKey="howItWorks.professional.sec1text101"></Trans>
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
                                <Trans i18nKey="howItWorks.professional.sec2title"></Trans>
                            </span>
                        </GridItem>
                    </GridContainer>
                    <GridContainer className={classes.gridContainer1}>
                        <GridItem md={8} sm={8} xs={12}>
                            <span className={classes.howitwkOddSectionText}>
                                <Trans i18nKey="howItWorks.professional.sec2text10"></Trans>
                            </span>
                        </GridItem>
                        <GridItem md={3} sm={3} xs={12} align="center">
                            <ChatBotSvg className={classes.svgStyle1} />
                        </GridItem>
                    </GridContainer>
                    <Paper elevation={6} className={classes.paperStyle}>
                        <GridContainer className={classes.gridContainerDiscoveryItems}>
                            <GridItem md={3} sm={3} xs={12} align="center">
                                <img src={getfz_schdviewrobotImg()} alt="" className={classes.pngStyle}></img>
                            </GridItem>
                            <GridItem md={9} sm={9} xs={12} align="center">
                                <span align="start" className={classes.howitwkOddSectionText}>
                                    <Trans i18nKey="howItWorks.professional.sec2text20"></Trans>
                                    <br />
                                    <Trans i18nKey="howItWorks.professional.sec2text21"></Trans>
                                </span>
                            </GridItem>
                        </GridContainer>
                    </Paper>
                    <Paper elevation={6} className={classes.paperStyle}>
                        <GridContainer className={classes.gridContainerDiscoveryItems}>
                            <GridItem md={3} sm={3} xs={12} align="center">
                                <img src={getfz_verifydialogrobotImg()} alt="" className={classes.pngStyle}></img>
                            </GridItem>
                            <GridItem md={9} sm={9} xs={12} align="center">
                                <span align="start" className={classes.howitwkOddSectionText}>
                                    <Trans i18nKey="howItWorks.professional.sec2text30"></Trans>
                                    <br />
                                    <Trans i18nKey="howItWorks.professional.sec2text31"></Trans>
                                </span>
                            </GridItem>
                        </GridContainer>
                    </Paper>
                    <Paper elevation={6} className={classes.paperStyle}>
                        <GridContainer className={classes.gridContainerDiscoveryItems}>
                            <GridItem md={3} sm={3} xs={12} align="center">
                                <img src={getfz_schdviewrobotverifiedImg()} alt="" className={classes.pngStyle}></img>
                            </GridItem>
                            <GridItem md={9} sm={9} xs={12} align="center">
                                <span align="start" className={classes.howitwkOddSectionText}>
                                    <Trans i18nKey="howItWorks.professional.sec2text40"></Trans>
                                </span>
                            </GridItem>
                        </GridContainer>
                    </Paper>
                    <Paper elevation={6} className={classes.paperStyle}>
                        <GridContainer className={classes.gridContainerDiscoveryItems}>
                            <GridItem md={3} sm={3} xs={12} align="center">
                                <img src={getfz_schdviewrobotconfirmedImg()} alt="" className={classes.pngStyle}></img>
                            </GridItem>
                            <GridItem md={9} sm={9} xs={12} align="center">
                                <span align="start" className={classes.howitwkOddSectionText}>
                                    <Trans i18nKey="howItWorks.professional.sec2text50"></Trans>
                                    <br />
                                    <Trans i18nKey="howItWorks.professional.sec2text51"></Trans>
                                </span>
                            </GridItem>
                        </GridContainer>
                    </Paper>
                </div>
            </div>
        </div>
    );
}
