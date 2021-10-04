import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Budget from '../components/dashboard/UpcomingEvents';
import TotalCustomers from '../components/dashboard/CompletedEvents';
import TotalEvents from "src/components/dashboard/TotalEvents"

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | BVCOENM</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={4}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={4}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={4}
            xs={12}
          >
            <TotalEvents />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
