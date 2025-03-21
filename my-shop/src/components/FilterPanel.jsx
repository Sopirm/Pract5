import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

const FilterPanel = ({ onFilterChange }) => {
 const categories = [
  { label: 'Все', value: 'Все' },
  { label: 'Электроника', value: 'electronics' },
  { label: 'Одежда', value: 'clothing' },
  { label: 'Книги', value: 'books' },
 ];
 return (
 <ButtonGroup 
   variant="contained" 
   sx={{ my: 2, '& .MuiButton-root': { borderColor: '#000000' } }}
 >
 {categories.map(({ label, value }) => (
 <Button 
   key={value} 
   onClick={() => onFilterChange(value)} 
   sx={{ 
     backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#D8CFC4' : '#4E3B31',
     '&:hover': { 
       backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#C2B2A2' : '#3B2A24'
     },
     borderColor: '#4E3B31',
     '&:not(:last-child)': { borderRight: '2px solid #4E3B31' }
   }}
 >
 {label}
 </Button>
 ))}
 </ButtonGroup>
 );
};
export default FilterPanel;