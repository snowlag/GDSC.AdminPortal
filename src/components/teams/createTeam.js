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
    FormControlLabel,
    Checkbox
} from '@material-ui/core';

//v5

const CreateTeam = (props) => {
    const [values, setValues] = useState({
       name: '',
       description: '',
    });

    //hooks
    const [imagePreview, setImagePreview] = React.useState(false)
    const [File, setFile] = React.useState(null);


    const OnImageInput = (file) => {
        console.log("Triggered")
        setImagePreview(true)
        setFile(file[0]);

    }

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

      //Add custom validation here if needed
      const customValidator = () => {
        //file validation
        let result = true;
        console.log(File)
        if (!File) {
            result = false
        }
        return result
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (customValidator()) {
            console.log(values)
        }

    }

    return (
        <form onSubmit={handleSubmit} {...props}>
            <Card>
                <CardHeader
                    subheader="Create new team"
                    title="Team"
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Team Name"
                                margin="normal"
                                name="name"
                                onChange={handleChange}
                                type="text"
                                value={values.name}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Short Description"
                                margin="normal"
                                name="description"
                                onChange={handleChange}
                                type="text"
                                value={values.description}
                                variant="outlined"
                                multiline
                                rows={2}
                            />
                        </Grid>       
                        <Grid item xs={12}>
                            <ImageUploader
                                singleImage={true}
                                buttonText='Choose image'
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
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                    >
                        Create
                    </Button>
                </Box>
            </Card>
        </form>
    );
};

export default CreateTeam;
