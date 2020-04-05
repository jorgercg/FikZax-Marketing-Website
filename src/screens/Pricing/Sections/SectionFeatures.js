import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Trans } from 'react-i18next';
import i18n from 'i18next';

import { ReactComponent as CancelSvg } from "assets/img/undraw_cancel_u1it.svg";
import { ReactComponent as ChoiceSvg } from "assets/img/undraw_choice_9385.svg";
import { ReactComponent as ContactSvg } from "assets/img/undraw_contact_us_15o2.svg";
import { ReactComponent as OnlinePaymentsSvg } from "assets/img/undraw_online_payments_luau.svg";

import { title, mlAuto, mrAuto } from "assets/jss/material-kit-pro-react.js";

const featuresStyle = {
  featuresSection: {
    padding: "30px 0px",
    marginLeft: "15px",
    marginRight: "15px",
  },
  textCenter: {
    textAlign: "center"
  },
  infoAreaPadding: {
    padding: "10px 0 10px"
  },
  title,
  mlAuto,
  mrAuto,
  tradeMarkContainer: {
    marginTop: 50,
  },
  tradeMarkText: {
    color: "inherit",
    fontWeight: "100",
    fontSize: "12px",
    textTransform: "uppercase",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
};

const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures() {
  const classes = useStyles();
  return (
    <div className={classes.featuresSection}>
      <div className={classes.textCenter}>
        <h3 className={classes.title}><Trans i18nKey="pricingFAQ.title"></Trans></h3>
      </div>
      <GridContainer>
        <GridItem md={4} sm={4} className={classes.mlAuto}>
          <InfoArea
            className={classes.infoAreaPadding}
            title={i18n.t('pricingFAQ.title10')}
            description={i18n.t('pricingFAQ.text10')}
            icon={ChoiceSvg}
            iconColor="info"
          />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.mrAuto}>
          <InfoArea
            className={classes.infoAreaPadding}
            title={i18n.t('pricingFAQ.title20')}
            description={i18n.t('pricingFAQ.text20')}
            icon={CancelSvg}
            iconColor="info"
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4} className={classes.mlAuto}>
          <InfoArea
            className={classes.infoAreaPadding}
            title={i18n.t('pricingFAQ.title30')}
            description={i18n.t('pricingFAQ.text30')}
            icon={OnlinePaymentsSvg}
            iconColor="info"
          />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.mrAuto}>
          <InfoArea
            className={classes.infoAreaPadding}
            title={i18n.t('pricingFAQ.title40')}
            description={i18n.t('pricingFAQ.text40')}
            icon={ContactSvg}
            iconColor="info"
          />
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.tradeMarkContainer}>
        <GridItem align="center">
          <span className={classes.tradeMarkText}><Trans i18nKey="pricingStoreTradeMark.text20"></Trans></span>
        </GridItem>
        <GridItem align="center">
          <span className={classes.tradeMarkText}><Trans i18nKey="pricingStoreTradeMark.text10"></Trans></span>
        </GridItem>
      </GridContainer>
    </div>
  );
}
