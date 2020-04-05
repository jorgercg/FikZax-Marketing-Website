import React from 'react';
import classNames from "classnames";
import { makeStyles } from '@material-ui/core';
import { Trans } from 'react-i18next';
import i18n from 'i18next';
import Accordion from "components/Accordion/Accordion.js";
import deepPurple from '@material-ui/core/colors/deepPurple';
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

const faqTitle1 = (classes) => {
    return i18n.t('help.title210');
}

const faqText1 = (classes) => {
    return (
        <div>
            <Trans i18nKey="help.text210"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text211"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text212"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text213"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text214"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text215"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text216"></Trans>
        </div>);
}

const faqTitle2 = (classes) => {
    return i18n.t('help.title220');
}

const faqText2 = (classes) => {
    return (
        <div>
            <Trans i18nKey="help.text220"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text221"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text222"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text223"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text224"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text225"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text226"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text227"></Trans>
        </div>);
}

const faqTitle3 = (classes) => {
    return i18n.t('help.title230');
}

const faqText3 = (classes) => {
    return (
        <div>
            <Trans i18nKey="help.text230"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text231"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text232"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text233"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text234"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text235"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text236"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text237"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text238"></Trans>
        </div>);
}

const faqTitle4 = (classes) => {
    return i18n.t('help.title240');
}

const faqText4 = (classes) => {
    return (
        <div>
            <Trans i18nKey="help.text240"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text241"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text242"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text243"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text244"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text245"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text246"></Trans>
        </div>);
}

const faqTitle5 = (classes) => {
    return i18n.t('help.title250');
}

const faqText5 = (classes) => {
    return (
        <div>
            <Trans i18nKey="help.text250"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text251"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text252"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text253"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text254"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text255"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text256"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text257"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text258"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text259"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text259a"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text259b"></Trans>
        </div>);
}

const faqTitle6 = (classes) => {
    return i18n.t('help.title260');
}

const faqText6 = (classes) => {
    return (
        <div>
            <Trans i18nKey="help.text260"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text261"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text262"></Trans>
            <br />
            <br />
            <Trans i18nKey="help.text263"></Trans>
        </div>);
}

export default function SectionFAQ() {
    const classes = useStyles();
    return (
        <div className={classNames(classes.container, classes.section1)}>
            <GridContainer>
                <GridItem>
                    <span align="start" className={classes.sectionTitle}>
                        <Trans i18nKey="help.title200"></Trans>
                    </span>
                </GridItem>
                <GridItem md={12} sm={12} xs={12}>
                    <Accordion
                        collapses={[
                            {
                                title: faqTitle1(classes),
                                content: faqText1(classes)
                            },
                            {
                                title: faqTitle2(classes),
                                content: faqText2(classes)
                            },
                            {
                                title: faqTitle3(classes),
                                content: faqText3(classes)
                            },
                            {
                                title: faqTitle4(classes),
                                content: faqText4(classes)
                            },
                            {
                                title: faqTitle5(classes),
                                content: faqText5(classes)
                            },
                            {
                                title: faqTitle6(classes),
                                content: faqText6(classes)
                            }
                        ]}
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
};