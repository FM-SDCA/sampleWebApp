// src/app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Container, Box} from '@mui/material';
import './globals.css';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
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
  const [currentPage, setCurrentPage] = useState('page1');
  const [showAppBar, setShowAppBar] = useState(true);

  // Function to navigate to a page
  const navigate = (page : string) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    let timer : NodeJS.Timeout;

    // Show AppBar on mouse move and hide after 3 seconds
    const handleMouseMove = () => {
      setShowAppBar(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowAppBar(false), 3000);
    };

    // Add event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);
    timer = setTimeout(() => setShowAppBar(false), 3000);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);


  return (
    <div>
      {showAppBar && (
        <AppBar position="fixed">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate('page1')}>MUI1</Button>
            <Button color="inherit" onClick={() => navigate('page2')}>MUI2</Button>
            <Button color="inherit" onClick={() => navigate('page3')}>MUI3</Button>
            <Button color="inherit" onClick={() => navigate('page4')}>MUI4</Button>
            <Button color="inherit" onClick={() => navigate('page5')}>Chart.js</Button>
            <Button color="inherit" onClick={() => navigate('page6')}>Page6</Button>
            <Button color="inherit" onClick={() => navigate('page7')}>Page7</Button>
            <Button color="inherit" onClick={() => navigate('page8')}>Page8</Button>
            <Button color="inherit" onClick={() => navigate('page9')}>Page9</Button>
            <Button color="inherit" onClick={() => navigate('page10')}>Page10</Button>
            <Button color="inherit" onClick={() => navigate('page11')}>Page11</Button>
            <Button color="inherit" onClick={() => navigate('page12')}>Page12</Button>
            <Button color="inherit" onClick={() => navigate('page13')}>Page13</Button>
            <Button color="inherit" onClick={() => navigate('page14')}>Page14</Button>
            <Button color="inherit" onClick={() => navigate('page15')}>Page15</Button>
          </Toolbar>
        </AppBar>
      )}
      <Toolbar /> {/* Add this to offset the content for the fixed AppBar */}
      <Container
        maxWidth={false} // Containerのデフォルト幅を無効化
        sx={{
            width: '100%', // 横幅を100%に拡張
            px: 0, // 不要なパディングを削除
        }}
        >
        <Box my={2} p={2} bgcolor="background.red">
          {currentPage === 'page1' && <Page1 />}
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
