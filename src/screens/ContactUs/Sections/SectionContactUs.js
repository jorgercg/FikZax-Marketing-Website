import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from "classnames";
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import deepPurple from '@material-ui/core/colors/deepPurple';
import Slide from "@material-ui/core/Slide";
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Close from "@material-ui/icons/Close";
import ReCAPTCHA from "react-google-recaptcha";
import { db } from "../../../firebase.js"

import {
    container,
    whiteColor
} from "assets/jss/material-kit-pro-react.js";

import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.js";

const primaryColor = deepPurple[800];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

var cookieCountry = document.cookie.replace(/(?:(?:^|.*;\s*)fikzaxCountry\s*=\s*([^;]*).*$)|^.*$/, "$1");

var cookieContactReason = document.cookie.replace(/(?:(?:^|.*;\s*)contactReason\s*=\s*([^;]*).*$)|^.*$/, "$1");

var locale = document.cookie.replace(/(?:(?:^|.*;\s*)locale\s*=\s*([^;]*).*$)|^.*$/, "$1");

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
    formTitle: {
        fontSize: 20,
        color: whiteColor
    },
    card1: {
        marginTop: "30px",
    },
    textCenter: {
        textAlign: "center"
    },
    questionSelector: {
        display: "inline",
    },
    countrySelector: {
        display: "inline",
    },
    ...modalStyle(theme),
    cardFooterStyle: {
        alignItems: "center",
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30,
    }
}));

export default function SectionContactUs() {
    const { t, i18n } = useTranslation();
    const [isVerified, setIsVerified] = React.useState(false);
    const [recaptchaValue, setRecaptchaValue] = React.useState('');
    const [isVerifiedAndOk, setIsVerifiedAndOk] = React.useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [firstNameError, setFirstNameError] = React.useState(false);
    const [lastNameError, setLastNameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [dialogOKOpen, setDialogOKOpen] = React.useState(false);
    const [dialogFailedOpen, setDialogFailedOpen] = React.useState(false);

    let localizeCountryName = (fikzaxCountry) => {
        switch (fikzaxCountry) {
            case "Australia":
                return i18n.t('pricingCountry.text10');
            case "Brazil":
                return i18n.t('pricingCountry.text20');
            case "CanadaEnglish":
                return i18n.t('pricingCountry.text30');
            case "India":
                return i18n.t('pricingCountry.text40');
            case "Ireland":
                return i18n.t('pricingCountry.text50');
            case "NewZealand":
                return i18n.t('pricingCountry.text60');
            case "Portugal":
                return i18n.t('pricingCountry.text70');
            case "Singapore":
                return i18n.t('pricingCountry.text80');
            case "SouthAfrica":
                return i18n.t('pricingCountry.text90');
            case "UK":
                return i18n.t('pricingCountry.text100');
            case "USA":
                return i18n.t('pricingCountry.text110');
            default:
                return i18n.t('pricingCountry.text110');
        }
    }


    var currentCountryList = [
        `${i18n.t('contactus.text09') + i18n.t('pricingCountry.text10')}`,
        `${i18n.t('contactus.text09') + i18n.t('pricingCountry.text20')}`,
        `${i18n.t('contactus.text09') + i18n.t('pricingCountry.text30')}`,
        `${i18n.t('contactus.text09') + i18n.t('pricingCountry.text40')}`,
        `${i18n.t('contactus.text09') + i18n.t('pricingCountry.text50')}`,
        `${i18n.t('contactus.text09') + i18n.t('pricingCountry.text60')}`,
        `${i18n.t('contactus.text09') + i18n.t('pricingCountry.text70')}`,
        `${i18n.t('contactus.text09') + i18n.t('pricingCountry.text80')}`,
        `${i18n.t('contactus.text09') + i18n.t('pricingCountry.text90')}`,
        `${i18n.t('contactus.text09') + i18n.t('pricingCountry.text100')}`,
        `${i18n.t('contactus.text09') + i18n.t('pricingCountry.text110')}`,
    ];

    var contactReasonList = [
        `${i18n.t('contactReason.text10')}`,
        `${i18n.t('contactReason.text12')}`,
        `${i18n.t('contactReason.text20')}`,
        `${i18n.t('contactReason.text30')}`,
        `${i18n.t('contactReason.text40')}`,
        `${i18n.t('contactReason.text99')}`,
    ];

    var currentContactReason = `${i18n.t('contactReason.text10')}`;

    if (contactReasonList.includes(cookieContactReason)) {
        currentContactReason = cookieContactReason;
    }

    const [contactReason, setContactReason] = React.useState(currentContactReason);

    var currentCountrySelected = localizeCountryName(cookieCountry);

    const [countrySelected, setCountrySelected] = React.useState(currentCountrySelected);

    function fikzaxCountrySelection(index) {
        switch (index) {
            case 0:
                setCookie('fikzaxCountry', 'Australia', 30);
                setCountrySelected('Australia');
                break;
            case 1:
                setCookie('fikzaxCountry', 'Brazil', 30);
                setCountrySelected('Brazil');
                break;
            case 2:
                setCookie('fikzaxCountry', 'CanadaEnglish', 30);
                setCountrySelected('CanadaEnglish');
                break;
            case 3:
                setCookie('fikzaxCountry', 'India', 30);
                setCountrySelected('India');
                break;
            case 4:
                setCookie('fikzaxCountry', 'Ireland', 30);
                setCountrySelected('Ireland');
                break;
            case 5:
                setCookie('fikzaxCountry', 'NewZealand', 30);
                setCountrySelected('NewZealand');
                break;
            case 6:
                setCookie('fikzaxCountry', 'Portugal', 30);
                setCountrySelected('Portugal');
                break;
            case 7:
                setCookie('fikzaxCountry', 'Singapore', 30);
                setCountrySelected('Singapore');
                break;
            case 8:
                setCookie('fikzaxCountry', 'SouthAfrica', 30);
                setCountrySelected('SouthAfrica');
                break;
            case 9:
                setCookie('fikzaxCountry', 'UK', 30);
                setCountrySelected('UK');
                break;
            case 10:
                setCookie('fikzaxCountry', 'USA', 30);
                setCountrySelected('USA');
                break;
            default:
                setCookie('fikzaxCountry', 'USA', 30);
                setCountrySelected('USA');
        }
    }

    const onChange = (value) => {
        setIsVerified(true);
        setRecaptchaValue(value);
    }

    const isEmailValid = (email) => {
        var regexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return regexp.test(email);
    }

    React.useEffect(() => {
        if ((firstName.length < 2) && (firstName !== '')) {
            setFirstNameError(true);
        } else {
            setFirstNameError(false);
        }
        if ((lastName.length < 2) && (lastName !== '')) {
            setLastNameError(true);
        } else {
            setLastNameError(false);
        }
        if ((!isEmailValid(email)) && (email !== '')) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        if ((isVerified === true) && (firstName.length > 1) && (lastName.length > 1) && (isEmailValid(email)) && (message.length > 1)) {
            setIsVerifiedAndOk(true);
        } else {
            setIsVerifiedAndOk(false);
        }
    }, [firstName, lastName, email, message, isVerified]);

    const handleSubmission = async (event) => {
        event.preventDefault();
        var docRef = db.collection('contactmessages').doc();
        var docData = {
            ctcmsgID: docRef.id,
            ctcmsgClientType: 'webReact',
            ctcmsgCountry: countrySelected,
            ctcmsgLocale: locale,
            ctcmsgFirstName: firstName,
            ctcmsgLastName: lastName,
            ctcmsgEmail: email,
            ctcmsgReason: contactReason,
            ctcmsgMessageBody: message,
            ctcmsgRecaptchaValue: recaptchaValue,
            ctcmsgTimeStamp: `${Date.now()}`,
            ctcmsgSentToSupportEmail: false,
        }
        db.runTransaction(async (transaction) => transaction.set(docRef, docData))
            .then(() => setDialogOKOpen(true))
            .catch((error) => setDialogFailedOpen(true));
        ;
    }

    const classes = useStyles();
    let history = useHistory();
    return (
        <div className={classNames(classes.container, classes.section1)}>
            <Dialog
                classes={{
                    root: classes.modalRoot,
                    paper: classes.modal + " " + classes.modalLarge
                }}
                open={dialogOKOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => {
                    setDialogOKOpen(false);
                    history.push('/');
                }}
                aria-labelledby="large-modal-slide-titleOK"
                aria-describedby="Your contact message was sent"
            >
                <DialogTitle
                    id="large-modal-slide-titleOK"
                    disableTypography
                    className={classes.modalHeader}
                >
                    <Button
                        simple
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        onClick={() => {
                            setDialogOKOpen(false)
                            history.push('/');
                        }}
                    >
                        {" "}
                        <Close className={classes.modalClose} />
                    </Button>
                    <h4 className={classes.modalTitle}>{t("contactus.text60")}</h4>
                </DialogTitle>
                <DialogContent
                    id="large-modal-slide-descriptionOK"
                    className={classes.modalBody}
                >
                    <p>{t("contactus.text70")}</p>
                </DialogContent>
            </Dialog>
            <Dialog
                classes={{
                    root: classes.modalRoot,
                    paper: classes.modal + " " + classes.modalLarge
                }}
                open={dialogFailedOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => {
                    setDialogFailedOpen(false);
                }}
                aria-labelledby="large-modal-slide-titleFailed"
                aria-describedby="COntact Data could not be sent"
            >
                <DialogTitle
                    id="large-modal-slide-titleFailed"
                    disableTypography
                    className={classes.modalHeader}
                >
                    <Button
                        simple
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        onClick={() => {
                            setDialogFailedOpen(false)
                        }}
                    >
                        {" "}
                        <Close className={classes.modalClose} />
                    </Button>
                    <h4 className={classes.modalTitle}>{t("contactus.text80")}</h4>
                </DialogTitle>
                <DialogContent
                    id="large-modal-slide-descriptionFailed"
                    className={classes.modalBody}
                >
                    <p>{t("contactus.text90")}</p>
                </DialogContent>
            </Dialog>
            <GridContainer>
                <GridItem>
                    <Card className={classes.card1}>
                        <form>
                            <CardHeader
                                contact
                                color="primary"
                                className={classes.textCenter}
                            >
                                <h4 className={classes.formTitle}>{t("contactus.text00")}</h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem md={6} sm={6} xs={12} >
                                        <CustomDropdown
                                            dropup={false}
                                            hoverColor="primary"
                                            buttonText={contactReason}
                                            buttonProps={{
                                                color: "secondary"
                                            }}
                                            dropPlacement="top"
                                            dropdownList={contactReasonList}
                                            onClick={(reason) => {
                                                setContactReason(reason);
                                                setCookie('contactReason', reason, 1);
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem md={6} sm={6} xs={12} >
                                        <CustomDropdown
                                            dropup={false}
                                            hoverColor="primary"
                                            buttonText={i18n.t('contactus.text09') + currentCountrySelected}
                                            buttonProps={{
                                                color: "secondary"
                                            }}
                                            dropPlacement="top"
                                            dropdownList={currentCountryList}
                                            onClick={(fikzaxCountry) => {
                                                fikzaxCountrySelection(currentCountryList.indexOf(fikzaxCountry));
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={6} md={6}>
                                        <CustomInput
                                            labelText={i18n.t('contactus.text10')}
                                            id="first"
                                            value={firstName}
                                            error={firstNameError}
                                            inputProps={{
                                                onChange: (value) => setFirstName(value.target.value)
                                            }}
                                            formControlProps={{
                                                fullWidth: true,
                                                error: firstNameError
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={6} md={6}>
                                        <CustomInput
                                            labelText={i18n.t('contactus.text20')}
                                            id="last"
                                            value={lastName}
                                            error={lastNameError}
                                            inputProps={{
                                                onChange: (value) => setLastName(value.target.value)
                                            }}
                                            formControlProps={{
                                                fullWidth: true,
                                                error: lastNameError
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <CustomInput
                                    labelText={i18n.t('contactus.text30')}
                                    id="email-address"
                                    value={email}
                                    error={emailError}
                                    inputProps={{
                                        onChange: (value) => setEmail(value.target.value)
                                    }}
                                    formControlProps={{
                                        fullWidth: true,
                                        error: emailError
                                    }}
                                />
                                <CustomInput
                                    labelText={i18n.t('contactus.text40')}
                                    id="message"
                                    value={message}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        onChange: (value) => setMessage(value.target.value),
                                        multiline: true,
                                        rows: 5,
                                    }}
                                />
                            </CardBody>
                            <GridContainer className={classes.cardFooterStyle} spacing={3}>
                                <GridItem xs={12} sm={6} md={6} >
                                    <Button color="primary" disabled={!isVerifiedAndOk} onClick={handleSubmission}>
                                        {t("contactus.text50")}
                                    </Button>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6} align="right">
                                    <ReCAPTCHA
                                        sitekey="6LcAadIUAAAAABDosEtKnfHcdDeBDecDir9fKsoU"
                                        hl={locale}
                                        size="normal"
                                        onChange={onChange}
                                    />
                                </GridItem>
                            </GridContainer>
                        </form>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
};