import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useTheme } from '@mui/material/styles';

const ProductCard = ({ product }) => {
 const dispatch = useDispatch();
 const theme = useTheme();

 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5 }}
 >
 <Card sx={{ maxWidth: 345, height: '400px', margin: 2, boxShadow: 3 }}>
 <CardMedia
 component="img"
 height="210"
 image={product.image}
 alt={product.title}
 />
 <CardContent sx={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
 <div style={{ flexGrow: 1 }}>
 <Typography variant="h6">{product.title}</Typography>
 <Typography variant="body2">{product.description}</Typography>
 <Typography variant="h5">{product.price} ₽</Typography>
 </div>
 <Button
 variant="contained"
 onClick={() => dispatch(addToCart(product))}
 sx={{ 
    marginBottom: 'auto',
    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#D8CFC4' : '#4E3B31',
    '&:hover': { 
     backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#C2B2A2' : '#3B2A24'
   } 
 }}
 >
 Добавить в корзину
 </Button>
 </CardContent>
 </Card>
 </motion.div>
 );
};

export default ProductCard;
