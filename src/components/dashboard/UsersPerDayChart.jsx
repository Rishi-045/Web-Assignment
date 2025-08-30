import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { format, subDays } from "date-fns";
import { useSelector } from "react-redux";

const UsersPerDayChart = () => {
  const users = useSelector((store) => store.user?.userData);
  const data = useMemo(() => {
    if (!users.length) return [];

    // Create map of last 30 days with 0 users
    const today = new Date();
    const daysMap = {};
    for (let i = 0; i < 30; i++) {
      const date = format(subDays(today, i), "yyyy-MM-dd");
      daysMap[date] = 0;
    }

    // Count users by createdAt date
    users.forEach((user) => {
      const createdDate = new Date(user.createdAt);
      const dateKey = format(createdDate, "yyyy-MM-dd");
      if (daysMap[dateKey] !== undefined) {
        daysMap[dateKey]++;
      }
    });


    // Convert map → array and sort by date ascending
    return Object.entries(daysMap)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [users]);


  if (!data.length) {
    return (
      <div className="h-72 flex items-center justify-center">
        <p className="text-sm text-gray-500">No data available</p>
      </div>
    );
  }

  return (
    <div className="h-72 py-4">
      <h3 className="text-xl text-center font-semibold mb-2">
        Users Created Per Day (Last 30 Days)
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#4F46E5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsersPerDayChart;
