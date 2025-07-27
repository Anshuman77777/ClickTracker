
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
const COLORS = [
  "#0088FE", // Blue
  "#00C49F", // Teal
  "#FFBB28", // Yellow-orange
  "#FF8042", // Orange
  "#A28DFF", // Soft purple
  "#FF66B2", // Pink
  "#82CA9D", // Light green
  "#FF4444", // Red
  "#7FDBFF", // Sky blue
  "#B19CD9"  // Lavender
];

export default function Piechart({data}) {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

