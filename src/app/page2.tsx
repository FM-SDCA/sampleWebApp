import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter, ComposedChart } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

export default function Page2() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* サイドバー */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          zIndex: (theme) => theme.zIndex.appBar - 1, // ナビゲーションバーより背面に配置
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <List>
            <ListItem component = "button">
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem component = "button">
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem component = "button">
                <ListItemText primary="Reports" />
            </ListItem>
            <ListItem component = "button">
                <ListItemText primary="Settings" />
            </ListItem>
        </List>
      </Drawer>

      {/* メインコンテンツ */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // ナビゲーションバーが既存なら高さを確保
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box sx={{ width: '48%' }}>
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </Box>

        <Box sx={{ width: '48%' }}>
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Box>

        <Box sx={{ width: '48%' }}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="uv"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
            />
            <Pie
              data={data}
              dataKey="pv"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </Box>

        <Box sx={{ width: '48%' }}>
          <AreaChart
            width={600}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </Box>

        <Box sx={{ width: '48%' }}>
          <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </Box>

        <Box sx={{ width: '48%' }}>
          <ScatterChart
            width={600}
            height={400}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="uv" name="uv" />
            <YAxis type="number" dataKey="pv" name="pv" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={data} fill="#8884d8" />
          </ScatterChart>
        </Box>

        <Box sx={{ width: '48%' }}>
          <ComposedChart
            width={600}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </Box>
      </Box>
    </Box>
  );
}
