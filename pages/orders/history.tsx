import React from 'react'
import { ShopLayout } from '../../components/layaouts'
import { Typography, Grid, Chip, Button } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  {field:'id', headerName:'ID', width:100},
  {field:'fullname', headerName:'Full Name', width:300},
  {
    field:'paid',
    headerName:'Paid',
    description:'Show info if the order is paid or not',
    width:200,
    renderCell:(params:GridRenderCellParams)=>{
      return (
        params.row.paid 
        ? <Chip color='success' label='Paid' variant='outlined'/> 
        : <Chip color='error' label='Not Paid' variant='outlined'/>
      )
    }
  },
  {
    field:'link2order', 
    headerName:'Link to your order', 
    width:150,
    renderCell:(params:GridRenderCellParams)=>{
      return (
        params &&  <Button href={`/orders/${params.row.id}`}>Go to your order</Button> 
      )
    }
    
  }

];

const rows: GridRowsProp = [
  { id: 1, paid:false ,fullname: 'Sweeny Todd' },
  { id: 2, paid:true , fullname: 'Tomas Diez' },
  { id: 3, paid:true , fullname: 'Gaston Gomez' },
  { id: 4, paid:false , fullname: 'Will Smith' },
  { id: 5, paid:true , fullname: 'Lio Messi' },
  { id: 6, paid:true , fullname: 'Cristiano Ronaldo' },
  { id: 7, paid:false , fullname: 'Sergio Berni' },
  
];

const HistoryPage = () => {
  return (
    <ShopLayout title="Order's History" pageDescription="Customer's orders history">
      <Typography variant='h1' component={'h1'}>Order's history</Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height:650, width:'100%'}}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[10]}
            
          />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoryPage
