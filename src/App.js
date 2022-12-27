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
          <Typography variant="body2" color="text.secondary">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <SelectBox label="Hình dạng nấm">
                    <MenuItem value={0}>Dạng hình chuông</MenuItem>
                    <MenuItem value={1}>Dạng dẹt</MenuItem>
                    <MenuItem value={2}>Dạng hình nón</MenuItem>
                  </SelectBox>
                </Grid>
                <Grid item xs={6}>
                  <SelectBox label="Màu sắc mũ nấm">
                    <MenuItem value={0}>Dạng</MenuItem>
                    <MenuItem value={1}>Dạng dẹt</MenuItem>
                    <MenuItem value={2}>Dạng hình nón</MenuItem>
                  </SelectBox>
                </Grid>
                <Grid item xs={6}>
                  <SelectBox label="Bề mặt mũ nấm"></SelectBox>
                </Grid>
                <Grid item xs={6}>
                  <SelectBox label="Mùi hương"></SelectBox>
                </Grid>
                <Grid item xs={6}>
                  <SelectBox label="Bề mặt mũ nấm"></SelectBox>
                </Grid>
                <Grid item xs={6}>
                  <SelectBox label="Mùi hương"></SelectBox>
                </Grid>
                <Grid item xs={6}>
                  <SelectBox label="Bề mặt mũ nấm"></SelectBox>
                </Grid>
                <Grid item xs={6}>
                  <SelectBox label="Mùi hương"></SelectBox>
                </Grid>
                <Grid item xs={6}>
                  <SelectBox label="Bề mặt mũ nấm"></SelectBox>
                </Grid>
                <Grid item xs={6}>
                  <SelectBox label="Mùi hương"></SelectBox>
                </Grid>
              </Grid>
            </Box>
          </Typography>
          <Typography className='mushroom-box--button'>
            <Button variant="contained" color="success">
              Kiểm tra
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </div>

  );
}

export default App;

