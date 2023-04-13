import React from 'react'
import { AuthLayout } from '../../components/layaouts/AuthLayout'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import NextLink from 'next/link'

const login = () => {
  return (
    <AuthLayout title='Login'>
        <Box sx={{width:350, padding:'10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1' component={'h1'}>Log In</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Email' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Password' type='password' variant='filled' fullWidth/>
                </Grid>

                <Grid item xs={12}>
                    <Button color='secondary' className='circular-btn' size='large' fullWidth>
                        Log In
                    </Button>
                </Grid>
                <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                    <NextLink href={'/auth/register'} passHref>
                        <Typography>Don't have an account?</Typography>
                    </NextLink>
                </Grid>
            </Grid>

        </Box>
    </AuthLayout>
  )
}

export default login
