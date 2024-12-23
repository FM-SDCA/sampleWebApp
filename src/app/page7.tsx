// src/app/page.tsx
'use client';
import { useState } from 'react';
import { AppBar, Toolbar, Button, Container, Typography, Box } from '@mui/material';
import './globals.css';
import Page2 from './page2';
import Page3 from './page4';
import Page4 from './page4';
import Page5 from './page5';
import Page6 from './page6';
import Page7 from './page7';
import Page8 from './page8';
import Page9 from './page9';
import Page10 from './page10';
import Page11 from './page11';
import Page12 from './page12';
import Page13 from './page13';
import Page14 from './page14';
import Page15 from './page15';

export default function Page() {
  const [currentPage, setCurrentPage] = useState('page');

  const navigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate('page')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('page2')}>Page 2</Button>
          <Button color="inherit" onClick={() => navigate('page3')}>Page 3</Button>
          <Button color="inherit" onClick={() => navigate('page4')}>Page 4</Button>
          <Button color="inherit" onClick={() => navigate('page5')}>Page 5</Button>
          <Button color="inherit" onClick={() => navigate('page6')}>Page 6</Button>
          <Button color="inherit" onClick={() => navigate('page7')}>Page 7</Button>
          <Button color="inherit" onClick={() => navigate('page8')}>Page 8</Button>
          <Button color="inherit" onClick={() => navigate('page9')}>Page 9</Button>
          <Button color="inherit" onClick={() => navigate('page10')}>Page 10</Button>
          <Button color="inherit" onClick={() => navigate('page11')}>Page 11</Button>
          <Button color="inherit" onClick={() => navigate('page12')}>Page 12</Button>
          <Button color="inherit" onClick={() => navigate('page13')}>Page 13</Button>
          <Button color="inherit" onClick={() => navigate('page14')}>Page 14</Button>
          <Button color="inherit" onClick={() => navigate('page15')}>Page 15</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          {currentPage === 'page' && (
            <div>
              <Typography variant="h4" gutterBottom>Home Page</Typography>
              <Typography>Welcome to the home page!</Typography>
            </div>
          )}
          {currentPage === 'page2' && <Page2 />}
          {currentPage === 'page3' && <Page3 />}
          {currentPage === 'page4' && <Page4 />}
          {currentPage === 'page5' && <Page5 />}
          {currentPage === 'page6' && <Page6 />}
          {currentPage === 'page7' && <Page7 />}
          {currentPage === 'page8' && <Page8 />}
          {currentPage === 'page9' && <Page9 />}
          {currentPage === 'page10' && <Page10 />}
          {currentPage === 'page11' && <Page11 />}
          {currentPage === 'page12' && <Page12 />}
          {currentPage === 'page13' && <Page13 />}
          {currentPage === 'page14' && <Page14 />}
          {currentPage === 'page15' && <Page15 />}
        </Box>
      </Container>
    </div>
  );
}
