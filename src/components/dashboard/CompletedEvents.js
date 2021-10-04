import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const CompltetedEvents = (props) => (
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
            Completed Events
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            3
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: pink[600],
              height: 56,
              width: 56
            }}
          >
            <CheckCircleIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default CompltetedEvents;
