import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CreateMember from '../components/members/createmember';
import Table from '../components/Table';

const Members = () => (
  <>
    <Helmet>
      <title>Members | BVCOENM</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <CreateMember />
        <Table />
      </Container>
    </Box>
  </>
);

export default Members;
