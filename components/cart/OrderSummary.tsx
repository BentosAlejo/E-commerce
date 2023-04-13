import { Grid, Typography } from "@mui/material"


export const OrderSummary = () => {
  return (
    <Grid container display={'flex'} justifyContent={'start'}>

        <Grid item xs={6}>
            <Typography>Products</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>3 items</Typography>
        </Grid>

        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>Subtotal</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>{`$${155.56}`}</Typography>
        </Grid>

        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>Taxes(15%)</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'}>
            <Typography>{`$${35.6}`}</Typography>
        </Grid>

        <Grid item xs={6} display={'flex'} justifyContent={'end'} mt={2}>
            <Typography>Total:</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'end'} mt={2}>
            <Typography variant="subtitle1">{`$${205.3}`}</Typography>
        </Grid>
    </Grid>
  )
}


