import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { ShopLayout } from "../../components/layaouts"
import { Box, Typography } from "@mui/material"
import NextLink from 'next/link'


export const EmptyPage = () => {
  return (
    <ShopLayout title="Empty Cart" pageDescription="There are no items in the shopping cart">
         <Box sx={{
            display:'flex', 
            justifyContent:'center', 
            alignItems:'center', 
            height:'calc(100vh - 200px)' ,
            flexDirection:{xs:'column',sm:'row' }
            }}>
                <RemoveShoppingCartOutlined sx={{fontSize:100}}/>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Typography ml={2}>Your cart is empty</Typography>
                    <NextLink href={'/'}>
                        <Typography color={'secondary'}>
                            Go back
                        </Typography>
                    </NextLink>
                </Box>

        </Box>
    </ShopLayout>
  )
}


