import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const SignupTimeChart = () => {
  const users = useSelector((store) => store.user?.userData);

  const data = useMemo(() => {
    const distribution = {
      "12AM-6AM": 0,
      "6AM-12PM": 0,
      "12PM-6PM": 0,
      "6PM-12AM": 0,
    };

    users.forEach((user) => {
      const date = new Date(user.createdAt);
      const hours = date.getUTCHours();

      if (hours >= 0 && hours < 6) distribution["12AM-6AM"] += 1;
      else if (hours >= 6 && hours < 12) distribution["6AM-12PM"] += 1;
      else if (hours >= 12 && hours < 18) distribution["12PM-6PM"] += 1;
      else distribution["6PM-12AM"] += 1;
    });

    return Object.entries(distribution).map(([name, value]) => ({
      name,
      value,
    }));
  }, [users]);

  return (
    <>
      <h3 className="text-xl text-center font-semibold mb-4 text-black">
        Signup Time of Day Distribution{" "}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default SignupTimeChart;
