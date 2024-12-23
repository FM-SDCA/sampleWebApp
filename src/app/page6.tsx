import { Bar, Line, Pie, Doughnut, Radar, PolarArea, Bubble, Scatter } from 'react-chartjs-2';

export default function Page6() {
    const data = {
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
    };

    const bubbleData = {
        datasets: [
            {
                label: 'Bubble Dataset',
                data: [
                    { x: 20, y: 30, r: 15 },
                    { x: 40, y: 10, r: 10 },
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const scatterData = {
        datasets: [
            {
                label: 'Scatter Dataset',
                data: [
                    { x: -10, y: 0 },
                    { x: 0, y: 10 },
                    { x: 10, y: 5 },
                    { x: 0.5, y: 5.5 },
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                <div style={{ width: '500px', height: '300px' }}>
                    <h2>Bar Chart</h2>
                    <Bar data={data} />
                </div>
                <div style={{ width: '500px', height: '300px' }}>
                    <h2>Line Chart</h2>
                    <Line data={data} />
                </div>
                <div style={{ width: '330px', height: '200px' }}>
                    <h2>Pie Chart</h2>
                    <Pie data={data} />
                </div>
                <div style={{ width: '330px', height: '200px' }}>
                    <h2>Doughnut Chart</h2>
                    <Doughnut data={data} />
                </div>
                <div style={{ width: '330px', height: '300px' }}>
                    <h2>Radar Chart</h2>
                    <Radar data={data} />
                </div>
                <div style={{ width: '300px', height: '200px' }}>
                    <h2>Polar Area Chart</h2>
                    <PolarArea data={data} />
                </div>
                <div style={{ width: '300px', height: '200px' }}>
                    <h2>Bubble Chart</h2>
                    <Bubble data={bubbleData} />
                </div>
                <div style={{ width: '300px', height: '200px' }}>
                    <h2>Scatter Chart</h2>
                    <Scatter data={scatterData} />
                </div>
                <div style={{ width: '500px', height: '400px' }}>
                    <h2>Horizontal Bar Chart</h2>
                    <Bar data={data} options={{ indexAxis: 'y' }} />
                </div>
            </div>
        </div>
    );
}
