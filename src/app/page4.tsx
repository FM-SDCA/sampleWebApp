import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from 'recharts';

const minTemp = -10;
const maxTemp = 50;

const normalizeTemperature = (temp: number) => {
    // 温度を 0～100 の範囲に正規化
    return ((temp - minTemp) / (maxTemp - minTemp)) * 100;
};

// カスタム目盛りの描画
const renderCustomTick = ({ payload, cx, cy, radius }: { payload: { coordinate: number; value: number }; cx: number; cy: number; radius: number }) => {
    if (!payload || payload.coordinate === undefined) return <></>;

    const angle: number = (payload.coordinate * Math.PI) / 180; // ラジアンに変換

    // 目盛り線の位置を計算
    const x1 = cx + (radius - 12) * Math.cos(angle); // 外側の座標
    const y1 = cy - 1 - (radius - 12) * Math.sin(angle); // 外側の座標
    const x2 = cx + (radius - 25) * Math.cos(angle); // 内側の座標
    const y2 = cy - 1 - (radius - 25) * Math.sin(angle); // 内側の座標
    // 短い目盛り線の位置を計算
    const x3 = cx + (radius - 18) * Math.cos(angle);
    const y3 = cy - 1 - (radius - 18) * Math.sin(angle);

    // 温度ラベル
    const temperature = ((payload.value / 100) * (maxTemp - minTemp)) + minTemp;
    const roundedTemperature = Math.round(temperature);

    // ラベル位置を計算
    const labelX = cx + (radius + 18) * Math.cos(angle);
    const labelY = cy - (radius + 6) * Math.sin(angle);

    return (
        <g>
            {/* 目盛り線 */}
            {roundedTemperature % 10 === 0 ? (
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth={2} />
            ) : (
                <line x1={x2} y1={y2} x2={x3} y2={y3} stroke="black" strokeWidth={1} />
            )}

            {/* ラベル */}
            {roundedTemperature % 10 === 0 ? (
                <text x={labelX} y={labelY} textAnchor="middle" fill="#666" fontSize={12}>
                    {`${Math.round(roundedTemperature) + "°C"}`}
                </text>
            ) : ""}
        </g>
    );
};

export default function Page4() {
    const [currentTemp, setCurrentTemp] = useState(0);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.2966&longitude=135.1265&current_weather=true&timezone=Asia%2FTokyo');
                const data = await response.json();
                console.log(data);
                setCurrentTemp(data.current_weather.temperature);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
        const intervalId = setInterval(fetchWeatherData, 900000); // 15minごとに天気情報を更新(APIは1hr更新)

        return () => clearInterval(intervalId); // クリーンアップ
    }, []);

    return (
        <RadialBarChart
            width={500}
            height={200}
            cx="50%"
            cy="95%"
            innerRadius="80%"
            outerRadius="100%"
            barSize={15}
            data={[
                { name: 'Temperature', uv: normalizeTemperature(currentTemp), fill: '#FF4500' }
            ]}
            startAngle={180}
            endAngle={0}
        >
            <RadialBar
                background
                dataKey="uv"
            />
            <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                // 目盛りの値を明示的に指定
                tick={renderCustomTick} // カスタム目盛りを適用
                tickLine={false} // デフォルトの目盛り線を無効化
            />
            <Legend
                iconSize={10}
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                formatter={() => `${currentTemp}°C`}
            />
        </RadialBarChart>
    );
}
