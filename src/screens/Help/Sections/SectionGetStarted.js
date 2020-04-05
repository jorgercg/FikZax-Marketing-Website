import React from 'react';
import classNames from "classnames";
import { makeStyles } from '@material-ui/core';
import { Trans } from 'react-i18next';
import i18n from 'i18next';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Accordion from "components/Accordion/Accordion.js";
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"

import { container } from "assets/jss/material-kit-pro-react.js";
const primaryColor = deepPurple[800];

const useStyles = makeStyles(theme => ({
    container: {
        ...container,
        paddingLeft: 0,
        paddingRight: 0,
        zIndex: 1
    },
    sectionTitle: {
        color: primaryColor,
        fontWeight: "bold",
        fontSize: 40,
        display: "block",
        paddingLeft: 15,
    },
    section1: {
        paddingTop: 60,
        paddingBottom: 60,
    },
    internalacordion: {
        marginLeft: 0,
    }
}));

function getStartedTitle1(classes) {
    return i18n.t('help.title110');
}

function getStartedText1(classes) {
    return (
        <div>
            <Trans i18nKey="help.text110"></Trans>
            <a href="https://www.facebook.com/help/135275340210354/?helpref=hc_fnav" rel="noopener noreferrer" target="_blank">
                <Trans i18nKey="help.text111"></Trans></a>
            <br />
            <br />
            <Trans i18nKey="help.text112"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text113"></Trans>
            <a href="https://www.facebook.com/help/994476827272050/?helpref=hc_fnav" rel="noopener noreferrer" target="_blank">
                <Trans i18nKey="help.text114"></Trans></a>
            <br />
            <br />
            <Trans i18nKey="help.text115"></Trans>
        </div>);
}

function getStartedTitle2(classes) {
    return i18n.t('help.title120');
}

function getStartedText2(classes) {
    return (
        <div>
            <Trans i18nKey="help.text120"></Trans>
            <a href="https://play.google.com/store/apps/details?id=com.fikzax" rel="noopener noreferrer" target="_blank">
                <Trans i18nKey="help.text121"></Trans></a>
            <Trans i18nKey="help.text122"></Trans>
            <a href="https://apps.apple.com/app/id1481999838" rel="noopener noreferrer" target="_blank">
                <Trans i18nKey="help.text123"></Trans></a>
            <Trans i18nKey="help.text124"></Trans>
        </div>);
}

function getStartedTitle3(classes) {
    return i18n.t('help.title130');
}

function getStartedText3(classes) {
    return (
        <div>
            <Trans i18nKey="help.text130"></Trans>
            <a href="https://fikzax.com/legal" rel="noopener noreferrer" target="_blank">
                <Trans i18nKey="help.text131"></Trans></a>
            <Trans i18nKey="help.text132"></Trans>
            <br /><br />
            <Trans i18nKey="help.text133"></Trans>
            <br /><br />
            <Trans i18nKey="help.text134"></Trans>
            <br /><br />
            <Trans i18nKey="help.text134a"></Trans>
            <br /><br />
            <Trans i18nKey="help.text135"></Trans>
            <br /><br />
            <Trans i18nKey="help.text136"></Trans>
            <br /><br />
            <Trans i18nKey="help.text137"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text137a"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text137b"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text138"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text139"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text139a"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text139b"></Trans>
        </div>);
}

function getStartedTitle4(classes) {
    return i18n.t('help.title140');
}

function getStartedText4(classes) {
    return (
        <div>
            <Trans i18nKey="help.text140"></Trans>
            <br /><br />
            <Trans i18nKey="help.text141"></Trans>
            <br /><br />
            <Trans i18nKey="help.text142"></Trans>
            <br /><br />
            <Trans i18nKey="help.text143"></Trans>
            <br /><br />
            <Trans i18nKey="help.text144"></Trans>
        </div>);
}

function getStartedTitle5(classes) {
    return i18n.t('help.title150');
}

function getStartedText5(classes) {
    return (
        <div>
            <Trans i18nKey="help.text150"></Trans>
            <br /><br />
            <Trans i18nKey="help.text151"></Trans>
            <br /><br />
            <Trans i18nKey="help.text152"></Trans>
            <br /><br />
            <div className={classes.internalacordion}>
                <Accordion
                    collapses={[
                        {
                            title: getStartedTitle50(),
                            content: getStartedText50()
                        },
                        {
                            title: getStartedTitle51(),
                            content: getStartedText51()
                        }
                    ]}
                /></div>
        </div>);
}

function getStartedTitle50(classes) {
    return i18n.t('help.title153-00');
}

function getStartedText50(classes) {
    return (
        <div>
            <Trans i18nKey="help.text153-00"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-01"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-02"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-03"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-04"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-05"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-06"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-07"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-08"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-09"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-09a"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-09b"></Trans>
            <br /><br />
        </div>
    );
}

function getStartedTitle51(classes) {
    return i18n.t('help.title153-10');
}

function getStartedText51(classes) {
    return (
        <div>
            <Trans i18nKey="help.text153-10"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-11"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-12"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-13"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-14"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-15"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-16"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-17"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-18"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-19"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-19a"></Trans>
            <br /><br />
            <Trans i18nKey="help.text153-19b"></Trans>
        </div>
    );
}

export default function SectionGetStared() {
    const classes = useStyles();
    return (
        <div className={classNames(classes.container, classes.section1)}>
            <GridContainer>
                <GridItem md={12} sm={12} xs={12}>
                    <span align="start" className={classes.sectionTitle}>
                        <Trans i18nKey="help.title100"></Trans>
                    </span>
                </GridItem>
                <GridItem md={12} sm={12} xs={12}>
                    <Accordion
                        collapses={[
                            {
                                title: getStartedTitle1(classes),
                                content: getStartedText1(classes)
                            },
                            {
                                title: getStartedTitle2(classes),
                                content: getStartedText2(classes)
                            },
                            {
                                title: getStartedTitle3(classes),
                                content: getStartedText3(classes)
                            },
                            {
                                title: getStartedTitle4(classes),
                                content: getStartedText4(classes)
                            },
                            {
                                title: getStartedTitle5(classes),
                                content: getStartedText5(classes)
                            }
                        ]}
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
};