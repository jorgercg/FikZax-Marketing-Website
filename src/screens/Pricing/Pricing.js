import React from 'react';
import classNames from "classnames";

import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Parallax from "components/Parallax/Parallax.js";

import AppFooter from 'screens/Layouts/AppFooter';
import AppHeader from 'screens/Layouts/AppHeader';

import SectionPricing from './Sections/SectionPricing.js';
import SectionFeatures from './Sections/SectionFeatures.js';

import {
    container,
    main,
    mainRaised,
    title,
    secondaryColor,
    whiteColor,
    mrAuto,
    mlAuto
} from "assets/jss/material-kit-pro-react.js";

const useStyles = makeStyles({
    main,
    mainRaised,
    mrAuto,
    mlAuto,
    parallax: {
        height: "50vh",
    },
    container: {
        ...container,
        paddingLeft: 0,
        paddingRight: 0,
        zIndex: 1
    },
    title: {
        ...title,
        color: whiteColor
    },
    textCenter: {
        textAlign: "center"
    },
    brand: {
        color: whiteColor,
        textAlign: "center",
        "& h1": {
            fontSize: "3rem",
            fontWeight: "600",
            display: "inline-block",
            position: "relative"
        }
    },
    divisor: {
        border: `2px solid ${secondaryColor}`,
        marginLeft: "15px",
        marginRight: "15px",
    }
});

function PricingComponent() {
    const [t] = useTranslation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    return (
        <div>
            <AppHeader />
            <Parallax
                image={require("assets/img/robotbkg4.png")}
                className={classes.parallax}
            >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1>
                                    {t("pricing.title")}
                                </h1>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <SectionPricing />
                    <hr className={classes.divisor} />
                    <SectionFeatures />

                </div>
            </div>
            <AppFooter />
        </div>
    );
}

export default PricingComponent;
