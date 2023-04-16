import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge, Input, InputAdornment } from '@mui/material'
import React, {useContext, useState} from 'react'
import NextLink from 'next/link'
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { UiContext } from '../context'
import { url } from 'inspector'

export const Navbar = () => {

    const {asPath} = useRouter()
    const {toggleSideMenu} = useContext( UiContext)
    const router = useRouter()

    const [searchTerm, setSearchTerm] = useState('')
    const [ isSearchVisible, setIsSearchVisible] = useState(false)
    
    const onSearchTerm =()=>{
        if( searchTerm.trim().length === 0) return 
        
        //  navigateTo(`/search/${ searchTerm }`)
         router.push(`/search/${ searchTerm }`)
    }
    
    // const navigateTo = (url:string) =>{
    //     toggleSideMenu()
    //     router.push(url)
    // }


  return (

     <AppBar>
         <Toolbar>

           <NextLink href='/'>
                 <Box display={'flex'} alignItems={'center'}>

                     <Typography variant='h6'>E-COMMERCE</Typography>
                     <Typography sx={{ml: 0.5}}>Shop</Typography>

                 </Box>
                 
             </NextLink> 

             <Box flex={ 1 }/>   

             <Box className='fadeIn' sx={{display: isSearchVisible ? 'none' : {xs:'none', sm:'flex'}, flexDirection:'row'}} >
                   <NextLink href={'/category/men'}>
                     <Box>
                         <Button color={ asPath === '/category/men' ? 'primary':'info'}>Men</Button>
                     </Box>
                    
                 </NextLink>
                 <NextLink href={'/category/women'}>
                     <Box>
                         <Button color={ asPath === '/category/women' ? 'primary':'info'}>Women</Button>
                     </Box>
                     
                 </NextLink>
                 <NextLink href={'/category/kid'}>
                     <Box>

                         <Button color={ asPath === '/category/kid' ? 'primary':'info'}>Kids</Button>
                     </Box>
                    
                 </NextLink>  
             </Box> 

              <Box flex={ 1 }/> 




            {
                isSearchVisible
                ? (
                    <Input
                    sx={{display:{ xs:'none', sm:'flex'}}}
                    className='fadeIn'
                        autoFocus
                        value={ searchTerm }
                        onChange={(e)=> setSearchTerm(e.target.value)}
                        onKeyPress={(e)=> e.key === 'Enter' ? onSearchTerm() : null}
                        type='text'
                        placeholder="Search..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={()=>setIsSearchVisible(false)}
                                >
                                    <ClearOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                )
                :(
                    <IconButton
                        className='fadeIn'
                        onClick={()=>setIsSearchVisible(true)}
                        sx={{display:{xs:'none', sm:'flex'}}}
                    >
                        <SearchOutlined/>
                    </IconButton>
                )
            }

              












              <IconButton
                sx={{display:{xs:'flex', sm:'none'}}}
                onClick={toggleSideMenu}
              >
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

              <Button onClick={toggleSideMenu}>
                 Menu
              </Button>

         </Toolbar>
     </AppBar>
  )
}


