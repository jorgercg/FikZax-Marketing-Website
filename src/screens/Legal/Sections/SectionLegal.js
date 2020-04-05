import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import { Trans } from 'react-i18next';

import {
    container,
} from "assets/jss/material-kit-pro-react.js";

const useStyles = makeStyles(theme => ({
    container: {
        ...container,
        zIndex: 1,
        paddingTop: 10,
        paddingBottom: 20,
    },
}));

export default function SectionLegal() {
    const classes = useStyles();
    return (
        <div className={classes.container} >
            <div>
                <Box mt={6} mb={3} fontWeight={600} fontSize={18}>
                    <Trans i18nKey="legal.policy1" >
                        Privacy Policy
                    </Trans>
                </Box>
                <Box mb={2}>
                    <Trans i18nKey="legal.policy2" >
                    </Trans>
                </Box>
                <Box mb={2} >
                    <Trans i18nKey="legal.policy4" >
                    </Trans>
                </Box>
                <Box mb={1} fontWeight={600} fontSize={16}>
                    <Trans i18nKey="legal.policy5" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy6" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy7" >
                    </Trans>
                </Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}>
                    <Trans i18nKey="legal.policy8" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy9" >
                    </Trans>
                </Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}>
                    <Trans i18nKey="legal.policy10" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy11" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy12" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy13" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy14" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy15" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy16" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy17" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy18" >
                    </Trans>
                </Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}>
                    <Trans i18nKey="legal.policy19" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy20" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy21" >
                    </Trans>
                </Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}>
                    <Trans i18nKey="legal.policy22" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy23" >
                    </Trans>
                </Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}>
                    <Trans i18nKey="legal.policy24" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy25" >
                    </Trans>
                </Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}>
                    <Trans i18nKey="legal.policy26" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy27" >
                    </Trans>
                </Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}>
                    <Trans i18nKey="legal.policy28" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy29" >
                    </Trans>
                </Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}>
                    <Trans i18nKey="legal.policy30" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy31" >
                    </Trans>
                </Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}>
                    <Trans i18nKey="legal.policy32" >
                    </Trans>
                </Box>
                <Box mb={1}>
                    <Trans i18nKey="legal.policy33" >
                    </Trans>
                </Box>
            </div>
            <div>
                <Box mt={6} mb={3} fontWeight={600} fontSize={20}>
                    <Trans i18nKey="legal.tos1" >
                        Terms of Service
                    </Trans>
                </Box>
                <Box mb={2}><Trans i18nKey="legal.tos2" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos3" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos4" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos5" ></Trans></Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}><Trans i18nKey="legal.tos6" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos7" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos8" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos9" ></Trans></Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}><Trans i18nKey="legal.tos10" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos11" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos12" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos13" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos14" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos15" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos16" ></Trans></Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}><Trans i18nKey="legal.tos17" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos18" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos19" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos20" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos21" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos22" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos23" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos24" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos25" ></Trans></Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}><Trans i18nKey="legal.tos26" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos27" ></Trans></Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}><Trans i18nKey="legal.tos28" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos29" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos30" ></Trans></Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}><Trans i18nKey="legal.tos31" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos32" ></Trans></Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}><Trans i18nKey="legal.tos33" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos34" ></Trans></Box>
                <Box mb={1} mt={2} fontWeight={600} fontSize={16}><Trans i18nKey="legal.tos35" ></Trans></Box>
                <Box mb={1}><Trans i18nKey="legal.tos36" ></Trans></Box>
            </div>
        </div>


    );
}

