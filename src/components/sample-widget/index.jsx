import React from 'react';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import styles from '../../styles/styles';

import Copyright from '../copyright';

const dashboard = function Dashboard(props) {
  // const classes = useStyles();
  const fixedHeightPaper = clsx(props.classes.paper, props.classes.fixedHeight);

  return (
    <>
      <main className={props.classes.content}>
        <div className={props.classes.appBarSpacer} />
        <Container maxWidth="lg" className={props.classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                className={props.classes.paper}
                style={{ 'min-height': '240px' }}
              >
                {/* Not working:  */}
                {/* <Chart /> */}
                <div style={{ flex: 1 }}>
                  As you can see, the widget components currently built out in this portal
                  are simply composed of dummy data.
                  <br />
                  <br />
                  Currently this is merely a container written in React using material ui
                  and react-router and served by express (node.js) on a Docker container
                  running on Heroku.
                  <br />
                  <br />
                  I am in the process of rewritting a couple versions of this to optimize
                  the code: for instance, using next.js for server side rendering.
                  I also have the firebase authentication
                  code written out, but am currently having fun theming it so I
                  { ' haven\'t ' }
                  deployed that yet either.
                </div>
                <br />
                <span>
                  See
                  { ' ' }
                  <a href="https://desolate-journey-88560.herokuapp.com/">here</a>
                  { ' ' }
                  for an example of the authentication, unstyled.
                </span>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={props.classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Copyright />
        </Container>
      </main>
    </>
  );
};

export default withStyles(styles)(dashboard);
