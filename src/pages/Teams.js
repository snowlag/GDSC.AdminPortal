import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CreateTeam from "src/components/teams/createTeam"



const Teams = () => (
  <>
    <Helmet>
    <title>Teams | BVCOENM</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <CreateTeam />
      </Container>
    
    </Box>
  </>
);

export default Teams;
