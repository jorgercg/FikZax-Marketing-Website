import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import i18n from 'i18next';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Trans } from 'react-i18next';

import {
  mrAuto,
  mlAuto,
  cardTitle,
  secondaryColor,
  whiteColor,
  infoColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.js";

import { ReactComponent as AppStoreBadgeENUSSvg } from "assets/img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import { ReactComponent as AppStoreBadgePTBRSvg } from "assets/img/Download_on_the_App_Store_Badge_PTBR_RGB_blk_092917.svg";
import { ReactComponent as AppStoreBadgePTPTSvg } from "assets/img/Download_on_the_App_Store_Badge_PTPT_RGB_blk_100317.svg";
import { ReactComponent as GooglePlayBadgeENUSSvg } from "assets/img/google-play-badge_enUS.svg";
import { ReactComponent as GooglePlayBadgePTBRSvg } from "assets/img/google-play-badge_ptBR.svg";
import { ReactComponent as GooglePlayBadgePTPTSvg } from "assets/img/google-play-badge_ptPT.svg";

const pricingStyle = {
  mrAuto,
  mlAuto,
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + " !important",
    "& small": {
      color: "rgba(" + hexToRgb(whiteColor) + ",0.8)!important"
    }
  },
  textCenter: {
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  },
  pricingSection: {
    padding: "40px 0px"
  },
  pricingCountrySelector: {
    justify: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    border: `2px solid ${secondaryColor}`
  },
  pricingTables: {
    marginLeft: "15px",
    marginRight: "15px",
  },
  textInfo: {
    color: infoColor[0] + " !important"
  },
  svgStyleGoogle: {
    cursor: "pointer",
    width: "80%",
    height: "80%",
    marginTop: 10,
    marginBottom: 10,
  },
  svgStyleApple: {
    cursor: "pointer",
    width: "80%",
    height: "80%",
    marginTop: 10,
    marginBottom: 10,
  },
};

const useStyles = makeStyles(pricingStyle);

var cookieCountry = document.cookie.replace(/(?:(?:^|.*;\s*)fikzaxCountry\s*=\s*([^;]*).*$)|^.*$/, "$1");

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function localizeCountryName(countryCode) {
  switch (countryCode) {
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

function getAppleStoreApp() {
  var url = "https://apps.apple.com/app/id1481999838";
  window.open(url, "_blank","noopener noreferrer");
}

function getGoogleStoreApp() {
  var url = "https://play.google.com/store/apps/details?id=com.fikzax";
  window.open(url, "_blank", "noopener noreferrer");
}

function getGoogleStoreImg(classes) {
  switch (i18n.language) {
    case 'pt_PT':
      return (<GooglePlayBadgePTPTSvg className={classes.svgStyleGoogle} onClick={getGoogleStoreApp} />);
    case 'pt_BR':
      return (<GooglePlayBadgePTBRSvg className={classes.svgStyleGoogle} onClick={getGoogleStoreApp} />);
    default:
      return (<GooglePlayBadgeENUSSvg className={classes.svgStyleGoogle} onClick={getGoogleStoreApp} />);
  }
}

function getAppStoreImg(classes) {
  switch (i18n.language) {
    case 'pt_PT':
      return (<AppStoreBadgePTPTSvg className={classes.svgStyleApple} onClick={getAppleStoreApp} />);
    case 'pt_BR':
      return (<AppStoreBadgePTBRSvg className={classes.svgStyleApple} onClick={getAppleStoreApp} />);
    default:
      return (<AppStoreBadgeENUSSvg className={classes.svgStyleApple} onClick={getAppleStoreApp} />);
  }
}

export default function SectionPricing() {
  const classes = useStyles();

  var currentCountryList = [
    `${i18n.t('pricingCountry.text10')}`,
    `${i18n.t('pricingCountry.text20')}`,
    `${i18n.t('pricingCountry.text30')}`,
    `${i18n.t('pricingCountry.text40')}`,
    `${i18n.t('pricingCountry.text50')}`,
    `${i18n.t('pricingCountry.text60')}`,
    `${i18n.t('pricingCountry.text70')}`,
    `${i18n.t('pricingCountry.text80')}`,
    `${i18n.t('pricingCountry.text90')}`,
    `${i18n.t('pricingCountry.text100')}`,
    `${i18n.t('pricingCountry.text110')}`,
  ];

  var currentCountrySelected = localizeCountryName(cookieCountry);

  const [countrySelected, setCountrySelected] = React.useState(currentCountrySelected);

  function countrySelection(index) {
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

  function selectedCountryPrice(pricePlan) {
    switch (countrySelected) {
      case "Australia":
        switch (pricePlan) {
          case 1:
            return `AUD 13,99/${i18n.t('pricing.period')}`;
          case 2:
            return `AUD 28,99/${i18n.t('pricing.period')}`;
          case 3:
            return `AUD 42,99/${i18n.t('pricing.period')}`;
          default:
            return `${i18n.t('pricing.error')}`;
        }
      case "Brazil":
        switch (pricePlan) {
          case 1:
            return `BRL 49,90/${i18n.t('pricing.period')}`;
          case 2:
            return `BRL 99,90/${i18n.t('pricing.period')}`;
          case 3:
            return `BRL 149,90/${i18n.t('pricing.period')}`;
          default:
            return `${i18n.t('pricing.error')}`;
        }
      case "CanadaEnglish":
        switch (pricePlan) {
          case 1:
            return `CAD 11,99/${i18n.t('pricing.period')}`;
          case 2:
            return `CAD 22,99/${i18n.t('pricing.period')}`;
          case 3:
            return `CAD 34,99/${i18n.t('pricing.period')}`;
          default:
            return `${i18n.t('pricing.error')}`;
        }
      case "India":
        switch (pricePlan) {
          case 1:
            return `INR 749/${i18n.t('pricing.period')}`;
          case 2:
            return `INR 1449/${i18n.t('pricing.period')}`;
          case 3:
            return `INR 2199/${i18n.t('pricing.period')}`;
          default:
            return `${i18n.t('pricing.error')}`;
        }
      case "Ireland":
        switch (pricePlan) {
          case 1:
            return `EUR 9,99/${i18n.t('pricing.period')}`;
          case 2:
            return `EUR 19,99/${i18n.t('pricing.period')}`;
          case 3:
            return `EUR 29,99/${i18n.t('pricing.period')}`;
          default:
            return `${i18n.t('pricing.error')}`;
        }
      case "NewZealand":
        switch (pricePlan) {
          case 1:
            return `NZD 15,99/${i18n.t('pricing.period')}`;
          case 2:
            return `NZD 30,99/${i18n.t('pricing.period')}`;
          case 3:
            return `NZD 46,99/${i18n.t('pricing.period')}`;
          default:
            return `${i18n.t('pricing.error')}`;
        }
      case "Portugal":
        switch (pricePlan) {
          case 1:
            return `EUR 9,99/${i18n.t('pricing.period')}`;
          case 2:
            return `EUR 19,99/${i18n.t('pricing.period')}`;
          case 3:
            return `EUR 29,99/${i18n.t('pricing.period')}`;
          default:
            return `${i18n.t('pricing.error')}`;
        }
      case "Singapore":
        switch (pricePlan) {
          case 1:
            return `SGD 12,98/${i18n.t('pricing.period')}`;
          case 2:
            return `SGD 25,98/${i18n.t('pricing.period')}`;
          case 3:
            return `SGD 38,98/${i18n.t('pricing.period')}`;
          default:
            return `${i18n.t('pricing.error')}`;
        }
      case "SouthAfrica":
        switch (pricePlan) {
          case 1:
            return `ZAR 149,99/${i18n.t('pricing.period')}`;
          case 2:
            return `ZAR 299,99/${i18n.t('pricing.period')}`;
          case 3:
            return `ZAR 449,99/${i18n.t('pricing.period')}`;
          default:
            return `${i18n.t('pricing.error')}`;
        }
      case "UK":
        switch (pricePlan) {
          case 1:
            return `GBP 7,99/${i18n.t('pricing.period')}`;
          case 2:
            return `GBP 15,99/${i18n.t('pricing.period')}`;
          case 3:
            return `GBP 23,99/${i18n.t('pricing.period')}`;
          default:
            return `${i18n.t('pricing.error')}`;
        }
      case "USA":
        switch (pricePlan) {
          case 1:
            return `USD 8.49/${i18n.t('pricing.period')}`;
          case 2:
            return `USD 16.99/${i18n.t('pricing.period')}`;
          case 3:
            return `USD 25.99/${i18n.t('pricing.period')}`;
          default:
            return `${i18n.t('pricing.error')}`;
        }
      default:
        switch (pricePlan) {
          case 1:
            return `USD 8.49/${i18n.t('pricing.period')}`;
          case 2:
            return `USD 16.99/${i18n.t('pricing.period')}`;
          case 3:
            return `USD 25.99/${i18n.t('pricing.period')}`;
          default:
            return `${i18n.t('pricing.error')}`;
        }
    }
  }
 

  return (
    <div className={classes.pricingSection}>
      <h1 align="center">
        <Trans i18nKey="pricing.text00"></Trans>
      </h1>
      <GridContainer>
        <GridItem md={3} sm={3}></GridItem>
        <GridItem md={3} sm={3} align="center">
          {getAppStoreImg(classes)}
        </GridItem>
        <GridItem md={3} sm={3} align="center">
          {getGoogleStoreImg(classes)}
        </GridItem>
        <GridItem md={3} sm={3}></GridItem>
      </GridContainer>
      <GridContainer className={classes.pricingCountrySelector}>
        <GridItem md={6} sm={6} xs={6} className={classes.textRight}>
          <span>
            <Trans i18nKey="pricingCountry.text00"></Trans>
          </span>
        </GridItem>
        <GridItem md={6} sm={6} xs={6} className={classes.mlAuto}>
          <CustomDropdown
            dropup={false}
            hoverColor="primary"
            buttonText={localizeCountryName(countrySelected)}
            buttonProps={{
              color: "secondary"
            }}
            dropPlacement="top"
            dropdownList={currentCountryList}
            onClick={(fikzaxCountry) => { countrySelection(currentCountryList.indexOf(fikzaxCountry)) }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.pricingTables}>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h4 className={classes.textInfo}><Trans i18nKey="pricing.text10"></Trans></h4>
              <h1 className={classes.cardTitle}>
                {selectedCountryPrice(1)}
              </h1>
              <ul>
                <li>
                  <b>1 </b><Trans i18nKey="pricing.text11"></Trans>
                </li>
                <li>
                  <b><Trans i18nKey="pricing.text40"></Trans></b><Trans i18nKey="pricing.text12"></Trans>
                </li>
                <li>
                  <b><Trans i18nKey="pricing.text40"></Trans></b><Trans i18nKey="pricing.text13"></Trans>
                </li>
                <li>
                  <b><Trans i18nKey="pricing.text40"></Trans></b><Trans i18nKey="pricing.text14"></Trans>
                </li>
                <li>
                  <b>1 </b><Trans i18nKey="pricing.text15"></Trans>
                </li>
              </ul>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card raised pricing color="primary">
            <CardBody pricing>
              <h4 className={classes.textInfo}><Trans i18nKey="pricing.text20"></Trans></h4>
              <h1 className={classes.cardTitleWhite}>
                {selectedCountryPrice(2)}
              </h1>
              <ul>
                <li>
                  <b>3 </b><Trans i18nKey="pricing.text21"></Trans>
                </li>
                <li>
                  <b><Trans i18nKey="pricing.text40"></Trans></b><Trans i18nKey="pricing.text12"></Trans>
                </li>
                <li>
                  <b><Trans i18nKey="pricing.text40"></Trans></b><Trans i18nKey="pricing.text13"></Trans>
                </li>
                <li>
                  <b><Trans i18nKey="pricing.text40"></Trans></b><Trans i18nKey="pricing.text14"></Trans>
                </li>
                <li>
                  <b>1 </b><Trans i18nKey="pricing.text15"></Trans>
                </li>
              </ul>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h4 className={classNames(classes.cardCategory, classes.textInfo)}>
                <Trans i18nKey="pricing.text30"></Trans>
              </h4>
              <h1 className={classes.cardTitle}>
                {selectedCountryPrice(3)}
              </h1>
              <ul>
                <li>
                  <b>5 </b><Trans i18nKey="pricing.text21"></Trans>
                </li>
                <li>
                  <b><Trans i18nKey="pricing.text40"></Trans></b><Trans i18nKey="pricing.text12"></Trans>
                </li>
                <li>
                  <b><Trans i18nKey="pricing.text40"></Trans></b><Trans i18nKey="pricing.text13"></Trans>
                </li>
                <li>
                  <b><Trans i18nKey="pricing.text40"></Trans></b><Trans i18nKey="pricing.text14"></Trans>
                </li>
                <li>
                  <b>1 </b><Trans i18nKey="pricing.text15"></Trans>
                </li>
              </ul>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
