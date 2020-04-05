import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { Trans } from 'react-i18next';
import { Carousel } from "react-responsive-carousel";
import i18n from 'i18next';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from 'assets/img/Braga_portanova.jpg';
import image2 from "assets/img/Braga_largodopaco.jpg";
import image3 from "assets/img/Braga_stabarbara.jpg";
import image4 from "assets/img/Braga_arcada.jpg";

const legend1 = 'aboutUs.legend1';
const legend2 = 'aboutUs.legend2';
const legend3 = 'aboutUs.legend3';
const legend4 = 'aboutUs.legend4';


const useStyles = makeStyles(theme => ({
    sectionCarousel: {
        marginTop: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    sectionText: {
        marginTop: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));

export default function SectionAboutUs() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.sectionCarousel}>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} interval='6000' >
                <div>
                    <img src={image1} alt={i18n.t(legend1)} />
                    <p className="legend"><Trans i18nKey={legend1}></Trans></p>
                </div>
                <div>
                    <img src={image2} alt={i18n.t(legend2)} />
                    <p className="legend"><Trans i18nKey={legend2}></Trans></p>
                </div>
                <div>
                    <img src={image3} alt={i18n.t(legend3)} />
                    <p className="legend"><Trans i18nKey={legend3}></Trans></p>
                </div>
                <div>
                    <img src={image4} alt={i18n.t(legend4)} />
                    <p className="legend"><Trans i18nKey={legend4}></Trans></p>
                </div>
            </Carousel>
            <div className={classes.sectionText}>
                <Typography variant="h6" align="center">
                    <Trans i18nKey="aboutUs.text1"></Trans>
                </Typography>
                <Typography variant="h6" align="center">
                    <Trans i18nKey="aboutUs.text2"></Trans>
                </Typography>
            </div>
        </Container>

    );
}
