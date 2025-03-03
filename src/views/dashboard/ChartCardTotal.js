import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Merchant EDC MasterCard", value: 331, color: "#3B82F6" },
  { name: "Merchant EDC Non MasterCard", value: 19, color: "#FACC15" },
];

const ChartCard = () => {
  return (
    <div className="bg-white shadow-md p-5 rounded-lg w-full max-w-md">
      <h3 className="text-lg font-bold mb-3">Total MID</h3>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ChartCard;
