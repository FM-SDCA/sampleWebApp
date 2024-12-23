import { Container, Grid, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function Page4() {
  useEffect(() => {
    const canvas = document.getElementById('myChart');
    if (!canvas) {return;}

    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    if (!ctx) {return;}

    const existingChart = Chart.getChart(canvas as HTMLCanvasElement);
    if (existingChart) {
      existingChart.destroy();
    }

    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    (canvas as HTMLCanvasElement & { chartInstance?: Chart }).chartInstance = chartInstance;
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper>
            <canvas id="myChart" width="400" height="400"></canvas>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper>
            <Typography variant="h6" gutterBottom>
              Stats
            </Typography>
            <Typography>Some statistics here...</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
