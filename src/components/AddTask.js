import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button  } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: theme.spacing(2),
    },
    formInput: {
      margin: theme.spacing(1),
      width: "100%",
    },
    formButton: {
      margin: theme.spacing(1),
    },
}));

const AddTask = ({ onSave }) => {
    const classes = useStyles();

    const [issueType, setIssueType] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (!issueType || !name || !description || !deadline) {
            alert('Please fill all the fields')
        } else {
            const id = uuidv4();

            onSave({
                id,
                issueType,
                name,
                description,
                deadline,
                component: "React App", // Set the task component
            });

            setIssueType('');
            setName('');
            setDescription('');
            setDeadline('');
        }
    }

    return (
        <form className={classes.formContainer} onSubmit={onSubmit}>
            <h2>New Task</h2>
            <FormControl fullWidth>
                <InputLabel id="issue-type-label">Issue Type</InputLabel>
                <Select
                    labelId="issue-type-label"
                    id="issue-type"
                    value={issueType}
                    label="issue-type"
                    onChange={(e) => setIssueType(e.target.value)}
                    data-testid="issue-type"
                >
                    <MenuItem value={'Task'}>Task</MenuItem>
                    <MenuItem value={'Story'}>Story</MenuItem>
                    <MenuItem value={'Bug'}>Bug</MenuItem>
                </Select>
            </FormControl>
            <TextField
                className={classes.formInput}
                label="Name"
                value={name}
                id="name"
                onChange={(e) => setName(e.target.value)}
                data-testid="name"
            />
            <TextField
                className={classes.formInput}
                label="Description"
                value={description}
                maxRows={4}
                multiline
                onChange={(e) => setDescription(e.target.value)}
                data-testid="description"
            />
            <TextField
                className={classes.formInput}
                label="Deadline"
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
                data-testid="deadline"
            />
            <Button
                className={classes.formButton}
                variant="contained"
                color="primary"
                type="submit"
            >
            Create Task
            </Button>
        </form>
    );
};

export default AddTask