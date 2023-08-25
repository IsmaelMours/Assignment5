import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const ResponseCounts = () => {
  const [responseCounts, setResponseCounts] = useState({
    agree: 0,
    neutral: 0,
    disagree: 0,
    totalQuestions: 0
  });

  useEffect(() => {
    // Fetch response counts from the server
    fetch('http://localhost:3001/responseCounts')
      .then(response => response.json())
      .then(data => {
        setResponseCounts(data);
      })
      .catch(error => {
        console.error('Error fetching response counts:', error);
      });
  }, []);

  const pieChartData = [
    { name: 'Agreements', value: responseCounts.agree },
    { name: 'Neutral', value: responseCounts.neutral },
    { name: 'Disagreements', value: responseCounts.disagree }
  ];

  const COLORS = ['#66BB6A', '#FFC107', '#EF5350'];

  return (
    <div className="response-counts">
      <div className="response-item">
        <ResponsiveContainer width={900} height={400}>
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="value"
              outerRadius={150}
              label={({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
                const RADIAN = Math.PI / 180;
                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill="black"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {`${name} (${value})`}
                  </text>
                );
              }}
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  // Apply hoverOffset to each Cell
                  strokeWidth={2}
                  stroke={'white'}
                  outerRadius={90}
                />
              ))}
            </Pie>
            <Label value="Response Counts" position="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="response-item">
        <p className="response-name">Number of Questions</p>
        <p className="count">{responseCounts.totalQuestions}</p>
      </div>
    </div>
  );
};

export default ResponseCounts;
