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
import moment from "moment"


const CreateEvent = (props) => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        postedBy: '',
        isCompleted: false,
        hasEpisodes: false,
        category: '',
        featured: false,
        startTime: new Date(), //event planned date
        endTime: new Date(),
        eventLink: "",
        startTime: null,
        endTime: null,
        videoLink: null
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

        if (event.target.name == "startTime" || event.target.name == "endTime") {
            console.log(new Date(event.target.value).getTime())
            setValues({
                ...values,
                [`${event.target.name}Timestamp`]: new Date(event.target.value).getTime()
            });
        }
    };

    const handleBoolChange = (event) => {
        let val = false
        if (event.target.value == false || event.target.value == "false") {
            val = true
        }
        console.log(val)
        setValues({
            ...values,
            [event.target.name]: val
        });

    }

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
                    subheader="Create new Event"
                    title="Event"
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Event Name"
                                margin="normal"
                                name="name"
                                onChange={handleChange}
                                type="text"
                                value={values.name}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Category"
                                margin="normal"
                                name="category"
                                onChange={handleChange}
                                type="text"
                                value={values.category}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={8}>
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
                        <Grid item xs={4}>
                            <TextField
                                required
                                fullWidth
                                label="Posted by"
                                margin="normal"
                                name="postedBy"
                                onChange={handleChange}
                                type="text"
                                value={values.postedBy}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Video Link"
                                helperText="Optional (Add if event is completed)"
                                margin="normal"
                                name="video"
                                onChange={handleChange}
                                type="text"
                                value={values.videoLink}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Event Link"
                                helperText="Event Page Link"
                                margin="normal"
                                name="eventLink"
                                onChange={handleChange}
                                type="text"
                                value={values.eventLink}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                helperText="Start time"
                                margin="normal"
                                name="startTime"
                                onChange={handleChange}
                                type="datetime-local"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                helperText="End time"
                                margin="normal"
                                name="endTime"
                                onChange={handleChange}
                                type="datetime-local"
                                variant="outlined"
                                inputProps={
                                    {
                                        min: moment(new Date(values.startTime).getTime()).format('YYYY-MM-DDTHH:mm')
                                    }
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                required
                                control={(
                                    <Checkbox
                                        color="primary"
                                        name="isCompleted"
                                        name="isCompleted"
                                        value={values.isCompleted}
                                        onChange={handleBoolChange}

                                    />
                                )}
                                label="Completed"
                            />
                            <FormControlLabel
                                required
                                control={(
                                    <Checkbox
                                        color="primary"
                                        name="featured"
                                        value={values.featured}
                                        onChange={handleBoolChange}
                                    />
                                )}
                                label="Featured"
                            />
                            <FormControlLabel
                                required
                                control={(
                                    <Checkbox
                                        color="primary"
                                        name="hasEpidsodes"
                                        value={values.hasEpisodes}
                                        onChange={handleBoolChange}
                                    />
                                )}
                                label="Has Episodes"
                            />
                        </Grid>
                        <Grid item xs={6}>
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

export default CreateEvent;
