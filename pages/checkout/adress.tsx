import React from 'react'
import { ShopLayout } from '../../components/layaouts'
import { Typography, Grid, TextField, FormControl,  Select, MenuItem, Box, Button } from '@mui/material'

 const AdressPage = () => {
  return (
    <ShopLayout title='Adress' pageDescription='Confirm Adress'>
        <Typography variant='h1' component={'h1'}>Adress</Typography>
        
        <Grid container spacing={2} sx={{mt:3}}>

          <Grid item xs={12} sm={6}>
            <TextField label='Name' variant='filled' fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label='Last Name' variant='filled' fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label='Adress' variant='filled' fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label='Second Adress(optional)' variant='filled' fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label='Area code' variant='filled' fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label='City' variant='filled' fullWidth/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Select
                variant='filled'
                label='Counrty'
                value={1}
              >
                <MenuItem value={1}>Galapagos</MenuItem>
                <MenuItem value={2}>Montenegro</MenuItem>
                <MenuItem value={3}>Alaska</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField label='Phone Number' variant='filled' fullWidth/>
          </Grid>
        </Grid>

        <Box sx={{mt:5}} display={'flex'} justifyContent={'center'}>
          <Button color='secondary' className='circular-btn' size='large'>
            Review Order
          </Button>
        </Box>

    </ShopLayout>
  )
}

export default AdressPage


