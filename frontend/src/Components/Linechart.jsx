import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
const weeklyData = [
  { day: "Monday", users: 45 },
  { day: "Tuesday", users: 60 },
  { day: "Wednesday", users: 35 },
  { day: "Thursday", users: 75 },
  { day: "Friday", users: 90 },
  { day: "Saturday", users: 120 },
  { day: "Sunday", users: 80 }
];

export default function Linechart() {
  return (
    <div className="w-full h-96">
        <h1 className='w-full text-center font-bold'>This Week</h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={weeklyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#0088FE" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
