import { Typography, Grid, Paper, TextField, Checkbox, FormControlLabel, Radio, RadioGroup, Switch, Slider, Select, MenuItem, Button } from '@mui/material';

export default function Page1() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Page 1</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h6" gutterBottom>TextField</Typography>
                        <TextField label="Standard" variant="standard" fullWidth />
                        <TextField label="Outlined" variant="outlined" fullWidth margin="normal" />
                        <TextField label="Filled" variant="filled" fullWidth margin="normal" />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h6" gutterBottom>Checkbox</Typography>
                        <FormControlLabel control={<Checkbox />} label="Checkbox" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Checked Checkbox" />
                        <FormControlLabel control={<Checkbox disabled />} label="Disabled Checkbox" />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h6" gutterBottom>Radio</Typography>
                        <RadioGroup>
                            <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                            <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                            <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
                        </RadioGroup>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h6" gutterBottom>Switch</Typography>
                        <FormControlLabel control={<Switch />} label="Switch" />
                        <FormControlLabel control={<Switch defaultChecked />} label="Checked Switch" />
                        <FormControlLabel control={<Switch disabled />} label="Disabled Switch" />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h6" gutterBottom>Slider</Typography>
                        <Slider defaultValue={30} />
                        <Slider defaultValue={50} disabled />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h6" gutterBottom>Select</Typography>
                        <Select defaultValue="">
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h6" gutterBottom>Button</Typography>
                        <Button variant="contained" color="primary">Primary</Button>
                        <Button variant="contained" color="secondary" style={{ marginLeft: 8 }}>Secondary</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
