import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import UpdateIcon from '@material-ui/icons/Update';
import { blue } from '@material-ui/core/colors';

const UpcomingEvents = (props) => (
  <Card
  sx={{ height: '100%' }}
  {...props}
>
  <CardContent>
    <Grid
      container
      spacing={3}
      sx={{ justifyContent: 'space-between' }}
    >
      <Grid item>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="h6"
        >
          Upcoming Events
        </Typography>
        <Typography
          color="textPrimary"
          variant="h3"
        >
          1
        </Typography>
      </Grid>
      <Grid item>
        <Avatar
          sx={{
            backgroundColor: blue[600],
            height: 56,
            width: 56
          }}
        >
          <UpdateIcon   />
        </Avatar>
      </Grid>
    </Grid>
  </CardContent>
</Card>
);

export default UpcomingEvents;
