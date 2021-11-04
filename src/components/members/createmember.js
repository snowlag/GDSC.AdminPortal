import React, { useState } from 'react';
//image upload library
import ImageUploader from 'react-images-upload';
//v4
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Grid,
  Select,
  MenuItem
} from '@material-ui/core';
//mock data
import teams from '../../__mocks__/teams';
import positions from '../../__mocks__/positions';

const CreateTeam = (props) => {
  const [values, setValues] = useState({
    name: '',
    subtitle: '',
    githubUrl: null,
    instagramUrl: null,
    linkedinUrl: null,
    team: '',
    position: ''
  });

  //hooks
  const [imagePreview, setImagePreview] = React.useState(false);
  const [File, setFile] = React.useState(null);

  const OnImageInput = (file) => {
    console.log('Triggered');
    setImagePreview(true);
    setFile(file[0]);
  };

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  //Add custom validation here if needed
  const customValidator = () => {
    //file validation
    let result = true;
    console.log(File);
    if (!File) {
      result = false;
    }
    return result;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (customValidator()) {
      console.log(values);
    }
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      <Card>
        <CardHeader subheader="Create new member" title="Member" />
        <Divider />
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <TextField
                required
                fullWidth
                label="Member Name"
                margin="normal"
                name="name"
                onChange={handleChange}
                type="text"
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                required
                fullWidth
                label="Subtitle"
                margin="normal"
                name="subtitle"
                onChange={handleChange}
                type="text"
                value={values.description}
                variant="outlined"
                multiline
                maxRows={2}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="LinkedIn URL"
                margin="normal"
                name="linkedinUrl"
                onChange={handleChange}
                type="text"
                value={values.linkedinUrl}
                variant="outlined"
                helperText="Optional"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Instagram URL"
                margin="normal"
                name="instagramUrl"
                onChange={handleChange}
                type="text"
                value={values.instagramUrl}
                variant="outlined"
                helperText="Optional"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Github Profile"
                margin="normal"
                name="githubUrl"
                onChange={handleChange}
                type="text"
                value={values.githubUrl}
                variant="outlined"
                helperText="Optional"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="Team"
                select
                name="team"
                label="Team"
                value={values.team}
                onChange={handleChange}
                helperText="Please select the team of the member"
              >
                {teams.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="Position"
                select
                label="Position"
                name="position"
                value={values.position}
                onChange={handleChange}
                helperText="Please select the member position"
              >
                {positions.map((option) => (
                  <MenuItem key={option.id} value={option.position}>
                    {option.position}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={6}>
              <ImageUploader
                singleImage={true}
                buttonText="Choose Profile image"
                onChange={OnImageInput}
                label="Max image size 2mb , Accepted format png , jpg"
                imgExtension={['.jpg', '.png']}
                maxFileSize={5242880}
                withPreview={imagePreview}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button color="primary" variant="contained" type="submit">
            Create
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default CreateTeam;
