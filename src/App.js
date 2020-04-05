import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MUICookieConsent from 'material-ui-cookie-consent';
import i18n from 'i18next';

import FeaturesComponent from 'screens/Features/Features';
import HomeComponent from 'screens/Home/Home.js';
import HowItWorksComponent from 'screens/Howitworks/Howitworks.js';
import LegalComponent from 'screens/Legal/Legal.js';
import PricingComponent from 'screens/Pricing/Pricing.js';
import AboutUsComponent from 'screens/AboutUs/AboutUs.js';
import ContactUsComponent from 'screens/ContactUs/ContactUs.js';
import HelpComponent from 'screens/Help/Help.js';
import NotFoundComponent from 'screens/NotFound/NotFound.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/howitworks" exact component={HowItWorksComponent} />
        <Route path="/features" exact component={FeaturesComponent} />
        <Route path="/pricing" exact component={PricingComponent} />
        <Route path="/legal" exact component={LegalComponent} />
        <Route path="/aboutus" exact component={AboutUsComponent} />
        <Route path="/contactus" exact component={ContactUsComponent} />
        <Route path="/help" exact component={HelpComponent} />
        <Route path="/" exact component={HomeComponent} />
        <Route path="*" component={NotFoundComponent} />
        <MUICookieConsent
          cookieName="fikzaxCookieConsent"
          message={i18n.t("cookieConsent.text10")}
          acceptOnScroll={false}
          hideOnAccept={true}
          acceptButtonLabel={i18n.t("cookieConsent.text20")}
          snackbarAnchor={{
            horizontal: "right",
            vertical: "bottom",
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
