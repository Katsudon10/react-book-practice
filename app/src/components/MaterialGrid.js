import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

export default function MaterialGrid() {
    return (
        <Grid container spacing={2}>
            <Grid xs={6}>
                <Button variant="contained" fullWidth>Button 1</Button>
            </Grid>
            <Grid xs={2}>
                <Button variant="contained" fullWidth>Button 2</Button>
            </Grid>
            <Grid xs={3}>
                <Button variant="contained" fullWidth>Button 3</Button>
            </Grid>
            <Grid xs={12}>
                <Button variant="contained" fullWidth>Button 4</Button>
            </Grid>
        </Grid>
    )
}