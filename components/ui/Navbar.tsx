import { AppBar, Toolbar, Typography, Link, Box, Button, IconButton, Badge } from '@mui/material'
import React from 'react'
import NextLink from 'next/link'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>


            <NextLink href='/'>
                <Link display={'flex'} alignItems={'center'}>
                    <Typography variant='h6'>E-COMMERCE</Typography>
                    <Typography sx={{ml: 0.5}}>Shop</Typography>
                </Link>
            </NextLink>


            {/* todo flex */}
            <Box flex={ 1 }/>


            <Box sx={{display:{xs:'none', sm:'block'}}}>
                <NextLink href={'/categoty/men'} passHref>
                    <Link>
                        <Button>Men</Button>
                    </Link>
                </NextLink>
                <NextLink href={'/categoty/women'} passHref>
                    <Link>
                        <Button>Women</Button>
                    </Link>
                </NextLink>
                <NextLink href={'/categoty/kids'} passHref>
                    <Link>
                        <Button>Kids</Button>
                    </Link>
                </NextLink>
            </Box>


             {/* todo flex */}
             <Box flex={ 1 }/>

             <IconButton>
                <SearchOutlined/>
             </IconButton>

             <NextLink href={'/cart'}>
                <Link>
                    <IconButton>
                        <Badge badgeContent={2} color='secondary'>
                            <ShoppingCartOutlined/>
                        </Badge>
                    </IconButton>
                </Link>
             </NextLink>


             <Button>
                Menu
             </Button>


        </Toolbar>
    </AppBar>
  )
}

export default Navbar
