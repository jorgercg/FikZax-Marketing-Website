import React from 'react';
import { Trans } from 'react-i18next';
import deepPurple from '@material-ui/core/colors/deepPurple';
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import { makeStyles } from '@material-ui/core';

import { container, section } from "assets/jss/material-kit-pro-react.js";
import { ReactComponent as FishingSvg } from "assets/img/undraw_fishing_hoxa.svg";
import { ReactComponent as MobileAppSvg } from "assets/img/undraw_Mobile_app_p3ts.svg";
import { ReactComponent as RealTimeSyncSvg } from "assets/img/undraw_real-time_sync_o57k.svg";
import { ReactComponent as CloudSyncSvg } from "assets/img/undraw_cloud_sync_2aph.svg";
import { ReactComponent as ScheduleSvg } from "assets/img/undraw_schedule_pnbk.svg";
import { ReactComponent as LogoSvg } from "assets/img/undraw_logo_design_bjnx.svg";
import { ReactComponent as TravelBookingSvg } from "assets/img/undraw_travel_booking_6koc.svg";
import { ReactComponent as TaskChangeSvg } from "assets/img/undraw_task_31wc.svg";

const primaryColor = deepPurple[800];
const backgroundColor = deepPurple[100];

const useStyles = makeStyles(theme => ({
    container: {
        ...container,
        zIndex: 1
    },
    gridContainer: {
        justify: "center",
        alignItems: "center",
    },
    section,
    featuresTitleSectionText: {
        color: primaryColor,
        fontSize: 45,
        letterSpacing: 2,
        marginTop: 0,
        marginBottom: 0,
    },
    featuresEvenSection: {
        background: backgroundColor,
    },
    featuresOddSectionText: {
        color: primaryColor,
        fontWeight: "normal",
        fontSize: 22,
        textAlign: "center",
    },
    featuresEvenSectionText: {
        color: primaryColor,
        fontWeight: "normal",
        fontSize: 22,
        textAlign: "center",
    },
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
                <GridContainer className={classes.gridContainer}>
                    <GridItem md={8} sm={8} xs={11} >
                        <h4 className={classes.featuresOddSectionText}>
                            <Trans i18nKey="features.text10"></Trans>
                        </h4>
                    </GridItem>
                    <GridItem md={3} sm={3} xs={11} >
                        <FishingSvg className={classes.svgStyle} />
                    </GridItem>
                </GridContainer>
            </div>
            <div className={classes.featuresEvenSection}>
                <div className={classes.container} >
                    <GridContainer className={classes.gridContainer}>
                        <GridItem md={3} sm={3} xs={11} >
                            <MobileAppSvg className={classes.svgStyle} />
                        </GridItem>
                        <GridItem md={8} sm={8} xs={11} >
                            <h4 align="center" className={classes.featuresEvenSectionText}>
                                <Trans i18nKey="features.text20"></Trans>
                            </h4>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
            <div className={classes.container} >
                <GridContainer className={classes.gridContainer}>
                    <GridItem md={8} sm={8} xs={11} >
                        <h4 align="center" className={classes.featuresOddSectionText}>
                            <Trans i18nKey="features.text30"></Trans>
                        </h4>
                    </GridItem>
                    <GridItem md={3} sm={3} xs={11} >
                        <RealTimeSyncSvg className={classes.svgStyle} />
                    </GridItem>
                </GridContainer>
            </div>
            <div className={classes.featuresEvenSection}>
                <div className={classes.container} >
                    <GridContainer className={classes.gridContainer}>
                        <GridItem md={3} sm={3} xs={11} >
                            <CloudSyncSvg className={classes.svgStyle} />
                        </GridItem>
                        <GridItem md={8} sm={8} xs={11} >
                            <h4 align="center" className={classes.featuresEvenSectionText}>
                                <Trans i18nKey="features.text40"></Trans>
                            </h4>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
            <div className={classes.container} >
                <GridContainer className={classes.gridContainer}>
                    <GridItem md={8} sm={8} xs={11} >
                        <h4 align="center" className={classes.featuresOddSectionText}>
                            <Trans i18nKey="features.text50"></Trans>
                        </h4>
                    </GridItem>
                    <GridItem md={3} sm={3} xs={11} >
                        <ScheduleSvg className={classes.svgStyle} />
                    </GridItem>
                </GridContainer>
            </div>
            <div className={classes.featuresEvenSection}>
                <div className={classes.container} >
                    <GridContainer className={classes.gridContainer}>
                        <GridItem md={3} sm={3} xs={11} >
                            <LogoSvg className={classes.svgStyle} />
                        </GridItem>
                        <GridItem md={8} sm={8} xs={11} >
                            <h4 align="center" className={classes.featuresEvenSectionText}>
                                <Trans i18nKey="features.text60"></Trans>
                            </h4>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
            <div className={classes.container} >
                <GridContainer className={classes.gridContainer}>
                    <GridItem md={8} sm={8} xs={11} >
                        <h4 align="center" className={classes.featuresOddSectionText}>
                            <Trans i18nKey="features.text70"></Trans>
                        </h4>
                    </GridItem>
                    <GridItem md={3} sm={3} xs={11} >
                        <TravelBookingSvg className={classes.svgStyle} />
                    </GridItem>
                </GridContainer>
            </div>
            <div className={classes.featuresEvenSection}>
                <div className={classes.container} >
                    <GridContainer className={classes.gridContainer}>
                        <GridItem md={3} sm={3} xs={11} >
                            <TaskChangeSvg className={classes.svgStyle} />
                        </GridItem>
                        <GridItem md={8} sm={8} xs={11} >
                            <h4 align="center" className={classes.featuresEvenSectionText}>
                                <Trans i18nKey="features.text80"></Trans>
                            </h4>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>

    );
}
