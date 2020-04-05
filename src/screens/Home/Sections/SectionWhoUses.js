import React from 'react';
import classNames from "classnames";
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Accordion from "components/Accordion/Accordion.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
//Health
import { ReactComponent as ReikiSvg } from "assets/img/undraw_japan_ubgk.svg";
import { ReactComponent as DoctorsSvg } from "assets/img/undraw_doctors_hwty.svg";
import { ReactComponent as StabilityBallSvg } from "assets/img/undraw_Stability_ball_b4ia.svg";
import { ReactComponent as PilatesSvg } from "assets/img/undraw_pilates_gpdb.svg";
import { ReactComponent as YogaSvg } from "assets/img/undraw_yoga_248n.svg";
import { ReactComponent as MeditationSvg } from "assets/img/undraw_Meditation_o89g.svg";
//Beauty
import { ReactComponent as MakeupArtistSvg } from "assets/img/undraw_makeup_artist_rxn8.svg";
import { ReactComponent as BarberSvg } from "assets/img/undraw_barber_3uel.svg";
//Exercise
import { ReactComponent as PersonalTrainerSvg } from "assets/img/undraw_personal_trainer_ote3.svg";
import { ReactComponent as HealthyHabitSvg } from "assets/img/undraw_healthy_habit_bh5w.svg";
import { ReactComponent as WorkoutSvg } from "assets/img/undraw_workout_gcgu.svg";
import { ReactComponent as WorkingOutSvg } from "assets/img/undraw_working_out_6psf.svg";
//Services
import { ReactComponent as CoachingSvg } from "assets/img/undraw_things_to_say_ewwb.svg";
import { ReactComponent as FinanceSvg } from "assets/img/undraw_personal_finance_tqcd.svg";
import { ReactComponent as ProfessorSvg } from "assets/img/undraw_professor_8lrt.svg";
import { ReactComponent as DogWalkingSvg } from "assets/img/undraw_dog_walking_0jpt.svg";

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
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    tabSection: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    tabSubtitle: {
        paddingTop: 0,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: "normal",
        fontSize: 22,
        display: "block",
    },
    tabItems: {
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: "normal",
        fontSize: 18,
    },
    actionbutton: {
        marginTop: "40px",
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
    svgStyle1: {
        width: "30%",
        height: "30%",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    svgStyle2: {
        width: "45%",
        height: "45%",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    svgStyle3: {
        width: "35%",
        height: "35%",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    svgStyle4: {
        width: "35%",
        height: "35%",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
}));


export default function SectionWhoUses() {
    const classes = useStyles();
    const { t } = useTranslation();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const tabTitles = [t("secWhoUses.text10"),
    t("secWhoUses.text20"),
    t("secWhoUses.text30"),
    t("secWhoUses.text40"),
    ];
    const tabSubTitles = [t("secWhoUses.text11"),
    t("secWhoUses.text21"),
    t("secWhoUses.text31"),
    t("secWhoUses.text41"),
    ];
    const tabItems = [[t("secWhoUses.text101"), t("secWhoUses.text102"), t("secWhoUses.text103")],
    [t("secWhoUses.text201"), t("secWhoUses.text202"), t("secWhoUses.text203")],
    [t("secWhoUses.text301"), t("secWhoUses.text302"), t("secWhoUses.text303")],
    [t("secWhoUses.text401"), t("secWhoUses.text402"), t("secWhoUses.text403")],
    ];

    function getIlustration(tabIndex) {
        switch (tabIndex) {
            case 0:
                return (<div>
                    <DoctorsSvg className={classes.svgStyle1} />
                    <YogaSvg className={classes.svgStyle1} />
                    <StabilityBallSvg className={classes.svgStyle1} />
                    <MeditationSvg className={classes.svgStyle1} />
                    <PilatesSvg className={classes.svgStyle1} />
                    <ReikiSvg className={classes.svgStyle1} />
                </div>);
            case 1:
                return (<div>
                    <MakeupArtistSvg className={classes.svgStyle2} />
                    <BarberSvg className={classes.svgStyle2} />
                </div>);
            case 2:
                return (<div>
                    <PersonalTrainerSvg className={classes.svgStyle3} />
                    <WorkoutSvg className={classes.svgStyle3} />
                    <WorkingOutSvg className={classes.svgStyle3} />
                    <HealthyHabitSvg className={classes.svgStyle3} />
                </div>);
            case 3:
                return (<div>
                    <ProfessorSvg className={classes.svgStyle4} />
                    <CoachingSvg className={classes.svgStyle4} />
                    <FinanceSvg className={classes.svgStyle4} />
                    <DogWalkingSvg className={classes.svgStyle4} />
                </div>);
            default:
                return (<div></div>);
        }
    }

    function tabContents(tabSubTitle, tabItems, tabIndex) {
        return (
            <div className={classNames(classes.container, classes.tabSection)}>
                <GridContainer alignItems="center">
                    <GridItem md={6} sm={6} xs={12}>
                        <span className={classes.tabSubtitle}>{tabSubTitle}</span>
                        <ul >
                            <li className={classes.tabItems}>
                                {tabItems[0]}
                            </li>
                            <li className={classes.tabItems}>
                                {tabItems[1]}
                            </li>
                            <li className={classes.tabItems}>
                                {tabItems[2]}
                            </li>
                        </ul>
                        <Button href="/pricing" className={classes.actionbutton} variant="outlined" color="primary">
                            <span className={classes.actionbuttontext}>
                                {t("description.part3")}
                            </span>
                        </Button>
                    </GridItem>
                    <GridItem md={6} sm={6} xs={12}>
                        {getIlustration(tabIndex)}
                    </GridItem>

                </GridContainer>

            </div>
        );
    }

    function whoUsesContents(tabTitle, tabSubTitle, tabItems) {
        if (matches === true) {
            return (
                <CustomTabs
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: tabTitle[0],
                            tabContent: (
                                tabContents(tabSubTitle[0], tabItems[0], 0)
                            )
                        }, {
                            tabName: tabTitle[1],
                            tabContent: (
                                tabContents(tabSubTitle[1], tabItems[1], 1)
                            )
                        }, {
                            tabName: tabTitle[2],
                            tabContent: (
                                tabContents(tabSubTitle[2], tabItems[2], 2)
                            )
                        }, {
                            tabName: tabTitle[3],
                            tabContent: (
                                tabContents(tabSubTitle[3], tabItems[3], 3)
                            )
                        }
                    ]}
                />
            );
        } else {
            return (
                <Accordion
                        collapses={[
                            {
                                title: tabTitle[0],
                                content: tabContents(tabSubTitle[0], tabItems[0], 0)
                            },
                            {
                                title: tabTitle[1],
                                content: tabContents(tabSubTitle[1], tabItems[1], 1)
                            },
                            {
                                title: tabTitle[2],
                                content: tabContents(tabSubTitle[2], tabItems[2], 2)
                            },
                            {
                                title: tabTitle[3],
                                content: tabContents(tabSubTitle[3], tabItems[3], 3)
                            }
                        ]}
                    />
            );
        }
    }

    return (
        <div className={classNames(classes.section, classes.sectionDark)}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem>
                        <span className={classes.sectionTitle}>
                            {t("secWhoUses.title")}
                        </span>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem>
                        <span className={classes.sectionText}>
                            {t("secWhoUses.text00")}
                        </span>
                    </GridItem>
                </GridContainer>
                {whoUsesContents(tabTitles, tabSubTitles, tabItems)}
            </div>
        </div>
    );
}
