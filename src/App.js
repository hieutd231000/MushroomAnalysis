import './App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import MenuItem from '@mui/material/MenuItem';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SelectBox from './components/SelectBox';
import ListBox from './components/ListSelect';
import ModalResult from './components/Modal';

function App() {
  return (
    <div className='mushroom-box'>
      <Card sx={{ maxWidth: 1045 }} >
        <CardHeader
          title="Phân loại nấm"
          className='mushroom-box--header'
        />
        <CardContent sx={{ marginTop: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            Xin hãy lựa chọn những thông tin sau đây để kiểm tra
          </Typography>
          <ListBox></ListBox>
        </CardContent>
      </Card>
    </div>

  );
}

export default App;

