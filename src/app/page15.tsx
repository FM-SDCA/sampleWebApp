import { useState } from 'react';
import { Container, Typography, Grid, Paper, TextField, FormControl, InputLabel, Select, MenuItem, Button, SelectChangeEvent } from '@mui/material';

export default function Page15() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 5,
  });

  const handleChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailtoLink = `mailto:makimori@sumnet.co.jp?subject=Survey%20Feedback&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nFeedback: ${formData.feedback}\nRating: ${formData.rating}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Survey Form</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Rating</InputLabel>
                <Select
                    name="rating"
                    value={formData.rating}
                    onChange={(event: SelectChangeEvent<number>) => {
                        setFormData((prevData) => ({
                        ...prevData,
                        rating: event.target.value as number, // 型を明示的に数値
                        }));
                    }}
                    displayEmpty
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
              <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
