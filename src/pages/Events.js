import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CreateEventForm from 'src/components/events/CreateEvent';



const Events = () => (
  <>
    <Helmet>
    <title>Events | BVCOENM</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <CreateEventForm />
      </Container>
    
    </Box>
  </>
);

export default Events;
