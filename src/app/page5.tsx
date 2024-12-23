'use client';

import { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function Page5() {
    useEffect(() => {
        if (typeof window !== 'undefined') { // クライアントサイドでのみ実行
            const canvas = document.getElementById('myChart') as HTMLCanvasElement | null;
            if (!canvas) { return; }
            const ctx = (canvas as HTMLCanvasElement).getContext('2d');

            // 既存のチャートが存在する場合は破棄する
            if ((canvas as HTMLCanvasElement & { chartInstance?: Chart }).chartInstance) {
                const existingChartInstance = (canvas as HTMLCanvasElement & { chartInstance?: Chart }).chartInstance;
                if (existingChartInstance) {
                    existingChartInstance.destroy();
                }
            }

            if (!ctx) { return; }
            const chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
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
                    }],
                },
                options: {
                    responsive: true, // レスポンシブ設定
                    maintainAspectRatio: false, // アスペクト比を無効化
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            // canvasにchartInstanceを保存する
            (canvas as HTMLCanvasElement & { chartInstance?: Chart }).chartInstance = chartInstance;
        }
    }, []);

    return (
        <div
            style={{
                width: '100%',
                height: '800px', // 高さを固定値で設定
                maxWidth: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <canvas id="myChart" style={{ width: '100%', height: '100%' }}></canvas>
        </div>
    );
}

