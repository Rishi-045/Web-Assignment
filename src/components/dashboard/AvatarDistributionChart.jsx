import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AvatarDistributionChart = () => {
  const users = useSelector((store) => store.user?.userData);

  const data = useMemo(() => {
    let withAvatar = 0;
    let withoutAvatar = 0;

    for (const u of users) {
      const a = u?.avatar;
      const hasAvatar = typeof a === "string" ? a.trim().length > 0 : !!a;
      hasAvatar ? withAvatar++ : withoutAvatar++;
    }

    return [
      { name: "With Avatar", value: withAvatar },
      { name: "No Avatar", value: withoutAvatar },
    ];
  }, [users]);

  const total = data.reduce((sum, d) => sum + d.value, 0);
  if (total === 0) {
    return (
      <div className="h-64 flex items-center justify-center">
        <p className="text-sm text-gray-500">No data to display yet.</p>
      </div>
    );
  }

  const COLORS = ["#4F46E5", "#CBD5E1"];

  return (
    <div className="h-64">
      <h3 className="text-xl font-semibold mb-2">Avatar Distribution</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={50}
            outerRadius={80}
            label={({ name, value }) =>
              `${name} (${Math.round((value / total) * 100)}%)`
            }
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [value, "Users"]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AvatarDistributionChart;
