import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/* Minimal “Card” components for layout/styling */
function Card({ children }) {
  return <div className="card-container">{children}</div>;
}
function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}
function CardTitle({ children }) {
  return <h2 className="card-title">{children}</h2>;
}
function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}

/* The same monthly data array from your screenshot/code */
const monthlyData = [
  { month: "Jan", boxes: 6593, revenue: 72037, surcharge: 2370, total: 72827 },
  { month: "Feb", boxes: 6100, revenue: 66896, surcharge: 11543, total: 70744 },
  { month: "Mar", boxes: 7338, revenue: 82028, surcharge: 13947, total: 86677 },
  { month: "Apr", boxes: 8342, revenue: 84996, surcharge: 36506, total: 97165 },
  { month: "May", boxes: 7232, revenue: 76686, surcharge: 13974, total: 81344 },
  { month: "Jun", boxes: 5586, revenue: 59481, surcharge: 6859, total: 66339 },
  { month: "Jul", boxes: 4925, revenue: 51632, surcharge: 622, total: 52254 },
  { month: "Aug", boxes: 5945, revenue: 61591, surcharge: 3654, total: 65246 },
  {
    month: "Sep",
    boxes: 9886,
    revenue: 101482,
    surcharge: 9377,
    total: 110859,
  },
  { month: "Oct", boxes: 8407, revenue: 88043, surcharge: 5193, total: 93236 },
  {
    month: "Nov",
    boxes: 11374,
    revenue: 119378,
    surcharge: 7197,
    total: 126575,
  },
  {
    month: "Dec",
    boxes: 9741,
    revenue: 111994,
    surcharge: 9179,
    total: 121173,
  },
];

export default function App() {
  return (
    <div className="dashboard-page">
      {/* === Card #1: Volume & Revenue (LineChart) === */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Delivery Volume and Revenue Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <LineChart
                data={monthlyData}
                margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                {/* boxes on left axis, revenue on right axis */}
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                {/* place legend at bottom / center to match screenshot */}
                <Legend verticalAlign="bottom" align="center" />
                {/* Purple line for boxes */}
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="boxes"
                  name="Boxes"
                  stroke="#7A76EF"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
                {/* Green line for revenue */}
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="revenue"
                  name="Revenue (AED)"
                  stroke="#53BF9D"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* === Card #2: Stacked Bar (Revenue + Surcharge) === */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Components Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <BarChart
                data={monthlyData}
                margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="bottom" align="center" />
                {/* Purple bar for base revenue */}
                <Bar
                  dataKey="revenue"
                  stackId="a"
                  name="Base Revenue"
                  fill="#7A76EF"
                />
                {/* Green bar for surcharge */}
                <Bar
                  dataKey="surcharge"
                  stackId="a"
                  name="Surcharge"
                  fill="#53BF9D"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
