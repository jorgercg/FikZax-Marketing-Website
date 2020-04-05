import React from 'react';
import classNames from "classnames";
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridContainer.js";

import {
    whiteColor
} from "assets/jss/material-kit-pro-react.js";

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

const style = {
    pullCenter: {
        display: "inline-block",
        float: "none"
    },
    linksVertical: {
        "& li": {
            display: "block !important",
            marginLeft: "-5px",
            marginRight: "-5px",
            "& a": {
                padding: "5px !important"
            }
        }
    },
    footer: {
        "& h4, & h5": {
            color: whiteColor,
            paddingBottom: "0px",
            textDecoration: "none"
        },
        "& ul:not($socialButtons) li a": {
            color: "inherit",
            padding: "0.9375rem",
            fontWeight: "500",
            fontSize: "12px",
            textTransform: "uppercase",
            borderRadius: "3px",
            textDecoration: "none",
            position: "relative",
            display: "block"
        },
        "& small": {
            fontSize: "75%",
            color: whiteColor
        },
        "& $pullCenter": {
            display: "inline-block",
            float: "none"
        }
    },
    copyRight: {
        padding: "15px 0px"
    },
    socialButtons: {
        "& ul li": {
            display: "inline-block"
        },
    },
};

const useStyles = makeStyles(style);

function AppFooter() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    var currentLanguageList = [
        "Português",
        "Português - Brasil",
        "English",
    ];

    function languageSelection(language) {
        switch (language) {
            case "Português":
                setCookie('locale', 'pt_PT', 30);
                i18n.changeLanguage('pt_PT');
                break;
            case "Português - Brasil":
                setCookie('locale', 'pt_BR', 30);
                i18n.changeLanguage('pt_BR');
                break;
            case "English":
                setCookie('locale', 'en_US', 30);
                i18n.changeLanguage('en_US');
                break;
            default:
                setCookie('locale', 'en_US', 30);
                i18n.changeLanguage('en_US');
        }
    }

    function selectedLanguage() {
        switch (i18n.language) {
            case "pt_PT":
                return "Português";
            case "pt_BR":
                return "Português - Brasil";
            case "en_US":
                return "English";
            default:
                return "English";
        }
    }

    return (
        <div>
            <Footer
                theme="primary"
                content={
                    <div>
                        <div className={classes.footer}>
                            <GridContainer
                                direction="row"
                                justify="center"
                                alignItems="flex-start"
                            >
                                <GridItem item={true} xs={12} sm={2} md={2} direction="column">
                                    <h4>
                                        {t("footerTitles.item1")}
                                    </h4>
                                    <ul className={classes.linksVertical}>
                                        <li>
                                            <a href="/howitworks">{t("footerTitles.item11")}</a>
                                        </li>
                                        <li>
                                            <a href="/features">{t("footerTitles.item12")}</a>
                                        </li>
                                        <li>
                                            <a href="/pricing">{t("footerTitles.item13")}</a>
                                        </li>
                                    </ul>
                                </GridItem>
                                <GridItem item={true} xs={12} sm={2} md={2} direction="column">
                                    <h4>{t("footerTitles.item2")}</h4>
                                    <ul className={classes.linksVertical}>
                                        <li>
                                            <a href="/help">{t("footerTitles.item21")}</a>
                                        </li>
                                    </ul>
                                </GridItem>
                                <GridItem item={true} xs={12} sm={2} md={2} direction="column">
                                    <h4>{t("footerTitles.item3")}</h4>
                                    <ul className={classes.linksVertical}>
                                        <li>
                                            <a href="/aboutus">{t("footerTitles.item31")}</a>
                                        </li>
                                        <li>
                                            <a href="/contactus">{t("footerTitles.item33")}</a>
                                        </li>
                                        <li>
                                            <a href="/legal">{t("footerTitles.item32")}</a>
                                        </li>
                                    </ul>
                                </GridItem>
                            </GridContainer>
                            <div className={classes.socialButtons}>
                                <ul>
                                    <li>
                                        <Button justIcon simple target="_blank" href="https://facebook.com/fikzax" color="facebook">
                                            <i className="fab fa-facebook-square" />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button justIcon simple target="_blank" href="https://www.youtube.com/channel/UCMD24JoSyXDQmB0swe9ggqg" color="youtube">
                                            <i className="fab fa-youtube" />
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <CustomDropdown
                                    dropup={true}
                                    hoverColor="primary"
                                    buttonText={selectedLanguage()}
                                    buttonProps={{
                                        color: "secondary"
                                    }}
                                    dropPlacement="top"
                                    dropdownList={currentLanguageList}
                                    onClick={(language) => {
                                        languageSelection(language);
                                        setCookie('contactReason', `${i18n.t('contactReason.text10')}`, 1);
                                    }}
                                />
                            </div>
                            <div className={classNames(classes.pullCenter, classes.copyRight)}>
                                Copyright &copy; {1900 + new Date().getYear()}{" "}
                                <a href="https://www.fikzax.com">fikZax</a> All Rights Reserved.
                            </div>
                        </div>
                    </div>

                }
            />
        </div>
    );
}

export default AppFooter;