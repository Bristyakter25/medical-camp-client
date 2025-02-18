import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer, Sector } from "recharts";

const COLORS = ["#6A5ACD", "#00C49F", "#FFBB28", "#FF8042", "#FF5252", "#0088FE", "#AA00FF", "#82CA9D"];

const renderActiveShape = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, percent } = props;

  const sin = Math.sin((Math.PI * midAngle) / 180);
  const cos = Math.cos((Math.PI * midAngle) / 180);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;

  return (
    <g>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <text x={mx} y={my} textAnchor={cos >= 0 ? "start" : "end"} fill={fill} fontSize={14} fontWeight="bold">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    </g>
  );
};

const ChartForShow = () => {
  const [campData, setCampData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch("https://medical-camp-server-five.vercel.app/addCamp")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((camp, index) => ({
          name: camp.name,
          fees: Number(camp.fees),
          color: COLORS[index % COLORS.length], // Assign unique colors
        }));
        setCampData(formattedData);
      });
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-center text-xl lg:text-3xl font-bold text-[#6A5ACD] mb-6">Camp Fees Distribution</h2>
      <div className="lg:flex  justify-center">
        <ResponsiveContainer width="90%" height={400}>
          <PieChart >
            <Pie
            
              data={campData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              dataKey="fees"
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={(_, index) => setActiveIndex(index)}
            >
              {campData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`$${value}`, "Camp Fees"]} />
            <Legend verticalAlign="bottom" align="center" iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartForShow;
