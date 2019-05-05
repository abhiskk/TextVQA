// Copyright (c) Facebook, Inc. and its affiliates.
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link';

import Banner from './Banner';
import * as news from '../news.json';
import * as config from '../frontend_config.json';
import { ReactiveBase } from '@appbaseio/reactivesearch';


const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    mainContainer: {
        backgroundImage: 'radial-gradient( ' +
        theme.palette.primary.light + ' 20% ,' + theme.palette.primary.dark + ' 100%)',
        opacity: 0.9,
        height: '50vh'
    },
    people: {
        margin: '0 auto',
        marginTop: '1.5em'
    },
    root: {
        // flexGrow: 1,
        // marginTop: '50px'
    },
    divider: {
        color: '#888',
        width: '100%'
    },
    gridItem: {
        padding: theme.spacing.unit * 1.5
    },
    sectionHeader: {
        marginTop: '0.15em'
    },
    ulList: {
        margin: '0'
    },
    container: {
        padding: theme.spacing.unit * 2,
    },
    bannerLogo: {
        width: '100%'
    },
    spanInlineBlock: {
        display: 'inline'
    },
    greenColor: {
        color: theme.palette.primary.main
    },
    hrefGreenColor: {
        '& a': {
            color: theme.palette.primary.main,
            textDecoration: 'none'
        }
    },
    preParent: {
        backgroundColor: '#eee',
        border: '1px solid #ddd',
        borderRadius: '2px',
        '& pre': {
            whiteSpace: 'pre-wrap',
        },
        '& span': {
            padding: '1em',
        },
        '& code': {
            fontSize: '12px',
            color: '#000'
        }
    }
});

class Home extends React.Component {
    state = {
        checked: false
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid
                    container
                    justify="center"
                    alignContent="center"
                >
                    <Grid
                        item
                        xs={10}
                        md={8}
                        lg={7}
                        className={classes.people}
                    >
                        <Grid container justify="center" alignContent="center">
                            <Grid item xs={12} lg={6}>
                                <Grid container justify="flex-start" spacing={16}>
                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h4"
                                            gutterBottom
                                            align="left"
                                            >
                                            Overview
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="subtitle1"
                                            gutterBottom
                                            align="left"
                                        >
                                            TextVQA requires models to read and reason about text in images
                                            to answer questions about them. Specifically, models need to
                                            incorporate a new modality of text present in the images and
                                            reason over it to answer TextVQA questions.
                                            </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Grid container justify="flex-start" spacing={16}>
                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h4"
                                            gutterBottom
                                            align="left"
                                        >
                                        Statistics
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justify="flex-start" spacing={16}>
                                    <Grid item xs={12} className={classes.gridItem}>
                                        <ul>
                                            <li>
                                            <Typography variant="subtitle1" align="left">
                                                28,408 images from OpenImages
                                            </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="subtitle1" align="left">
                                                45,336 questions
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="subtitle1" align="left">
                                                453,360 ground truth answers
                                                </Typography>
                                            </li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <div className={classes.people}>
                            <Grid
                                container
                                justify="flex-start"
                                spacing={16}
                            >
                                <Grid item xs={12} className={classes.gridItem}>
                                    <Typography
                                        className={classes.sectionHeader}
                                        variant="h4"
                                        align="left"
                                    >
                                        News
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.gridItem}>
                                    <Typography
                                        className={classes.sectionHeader}
                                        variant="subtitle1"
                                        align="left"
                                    >
                                        Join our <Link href="https://groups.google.com/forum/#!forum/textvqa">Google Group</Link> for TextVQA release updates and announcements.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.gridItem}>
                                    <ul className={classes.ulList}>
                                        {news.news.map((obj, idx) => (
                                            <li key={idx}>
                                                <Typography
                                                    align="left"
                                                    variant="subtitle1"
                                                >
                                                    <span>[{obj.date}] </span>
                                                    <span className={classes.hrefGreenColor} dangerouslySetInnerHTML={{ __html: obj.news }} />
                                                </Typography>
                                            </li>

                                        ))}
                                    </ul>
                                </Grid>
                            </Grid>
                        </div>

                        <div className={classes.people}>
                            <Grid
                                container
                                justify="flex-start"
                                spacing={16}
                            >
                                <Grid item xs={12} className={classes.gridItem}>
                                    <Typography
                                        className={classes.sectionHeader}
                                        variant="h4"
                                        align="left"
                                    >
                                        Challenge
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.gridItem}>
                                    <Typography
                                        variant="subtitle1"
                                        align="left"
                                        >
                                        TextVQA Challenge 2019 is live! See more details
                                        on the <Link href="challenge">challenge page</Link>.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
