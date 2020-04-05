import React from 'react';

import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import { ReactComponent as BookingSvg } from "assets/img/undraw_booking_33fn.svg";
import { ReactComponent as ReminderSvg } from "assets/img/undraw_reminder_pa79.svg";
import { ReactComponent as LogoSvg } from "assets/img/undraw_logo_design_bjnx.svg";
import { ReactComponent as WebsiteSetupSvg } from "assets/img/undraw_website_setup_5hr2.svg";
import { ReactComponent as AppInstallSvg } from "assets/img/undraw_app_installation_mbdv.svg";
import { ReactComponent as MobileLifeSvg } from "assets/img/undraw_mobile_life_381t.svg";

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
    gridContainerFeatures: {
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
        fontSize: 20,
        display: "block",
        paddingLeft: 20,
        paddingRight: 20,
    },
    svgStyle1: {
        width: "80%",
        height: "80%",
    },
    cardTitle: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: "bold",
        fontSize: 20,
        color: primaryColor[2],
        display: "block",
    },
    cardText: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: "normal",
        fontSize: 16,
        display: "block",
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

export default function SectionMainFeatures() {
    const classes = useStyles();
    const { t } = useTranslation();

    function getImage(imageIndex) {
        switch (imageIndex) {
            case 0:
                return (
                    <BookingSvg className={classes.svgStyle1} />
                );
            case 1:
                return (
                    <ReminderSvg className={classes.svgStyle1} />
                );
            case 2:
                return (
                    <LogoSvg className={classes.svgStyle1} />
                );
            case 3:
                return (
                    <WebsiteSetupSvg className={classes.svgStyle1} />
                );
            case 4:
                return (
                    <AppInstallSvg className={classes.svgStyle1} />
                );
            case 5:
                return (
                    <MobileLifeSvg className={classes.svgStyle1} />
                );
            default:
                return (<div></div>);
        }
    }

    const cardTitles = [t("secMainFeatures.title00"),
    t("secMainFeatures.title10"),
    t("secMainFeatures.title20"),
    t("secMainFeatures.title30"),
    t("secMainFeatures.title40"),
    t("secMainFeatures.title50"),
    ];
    const cardTexts = [t("secMainFeatures.text00"),
    t("secMainFeatures.text10"),
    t("secMainFeatures.text20"),
    t("secMainFeatures.text30"),
    t("secMainFeatures.text40"),
    t("secMainFeatures.text50"),
    ];

    function featureCard(cardImage, cardTitle, cardText) {
        return (
            <Card profile>
                <CardHeader image>
                    {getImage(cardImage)}
                </CardHeader>
                <CardBody>
                    <h4 className={classes.cardTitle}>{cardTitle}</h4>
                    <h6 className={classes.cardText}>
                        {cardText}
                    </h6>
                </CardBody>
            </Card>
        );
    }

    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem>
                        <span className={classes.sectionTitle}>
                            {t("secMainFeatures.title")}
                        </span>
                    </GridItem>
                </GridContainer>
                <GridContainer className={classes.gridContainerFeatures}>
                    <GridItem md={4} sm={4} xs={12} align="center">
                        {featureCard(0, cardTitles[0], cardTexts[0])}
                    </GridItem>
                    <GridItem md={4} sm={4} xs={12} align="center">
                        {featureCard(1, cardTitles[1], cardTexts[1])}
                    </GridItem>
                    <GridItem md={4} sm={4} xs={12} align="center">
                        {featureCard(2, cardTitles[2], cardTexts[2])}
                    </GridItem>
                </GridContainer>
                <GridContainer className={classes.gridContainerFeatures}>
                    <GridItem md={4} sm={4} xs={12} align="center">
                        {featureCard(3, cardTitles[3], cardTexts[3])}
                    </GridItem>
                    <GridItem md={4} sm={4} xs={12} align="center">
                        {featureCard(4, cardTitles[4], cardTexts[4])}
                    </GridItem>
                    <GridItem md={4} sm={4} xs={12} align="center">
                        {featureCard(5, cardTitles[5], cardTexts[5])}
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem md={9} sm={12} xs={12} align="start">
                        <Button href="/features" className={classes.actionbutton} variant="outlined" color="primary">
                            <span className={classes.actionbuttontext}>
                                {t("secMainFeatures.text99")}
                            </span>
                        </Button>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
