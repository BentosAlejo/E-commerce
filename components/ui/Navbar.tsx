import { AppBar, Toolbar, Typography, Link, Box, Button, IconButton, Badge } from '@mui/material'
import React from 'react'
 import NextLink from 'next/link'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

export const Navbar = () => {
  return (
    // <Typography>hi</Typography>
     <AppBar>
         <Toolbar>


           <NextLink href='/'>
                 <Box display={'flex'} alignItems={'center'}>

                     <Typography variant='h6'>E-COMMERCE</Typography>
                     <Typography sx={{ml: 0.5}}>Shop</Typography>

                 </Box>
                 
             </NextLink> 


           
             <Box flex={ 1 }/> 


             <Box display={{xs:'none', sm:'flex'}} flexDirection={{sm:'row'}}>
                   <NextLink href={'/categoty/men'}>
                     <Box>
                         <Button>Men</Button>
                     </Box>
                    
                 </NextLink>
                 <NextLink href={'/categoty/women'}>
                     <Box>
                         <Button>Women</Button>
                     </Box>
                     
                 </NextLink>
                 <NextLink href={'/categoty/kids'}>
                     <Box>

                         <Button>Kids</Button>
                     </Box>
                    
                 </NextLink>  
             </Box> 


                
              <Box flex={ 1 }/> 

              <IconButton>
                 <SearchOutlined/>
              </IconButton> 
 
               <NextLink href={'/cart'}>
                    <Box>

                     <IconButton>
                         <Badge badgeContent={2} color='secondary'>
                             <ShoppingCartOutlined/>
                         </Badge>
                     </IconButton>
                    </Box>
                
              </NextLink> 


              <Button>
                 Menu
              </Button>


         </Toolbar>
     </AppBar>
  )
}


