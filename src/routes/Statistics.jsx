import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const assignmentData = [
    {
        "name": "assignment-1",
        "marks": 60
    },

    {
        "name": "assignment-2",
        "marks": 54
    },
    
    {
        "name": "assignment-3",
        "marks": 50
    },

    {
        "name": "assignment-4",
        "marks": 50
    },

    {
        "name": "assignment-5",
        "marks": 50
    },

    {
        "name": "assignment-6",
        "marks": 60
    },

    {
        "name": "assignment-7",
        "marks": 60
    },

    {
        "name": "assignment-8",
        "marks": 60
    }
];

const Statistics = () => {
    return <div>
    <div className="page-title">
                <h2 className="text-center fw-bold">Assignment Statistics</h2>
            </div>
    <div className="container mt-5 overflow-auto">
    <AreaChart className="mx-auto"
          width={1200}
          height={400}
          data={assignmentData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#341f97" fill="#ff6b6b" />
        </AreaChart>
    </div>
    </div>;
};

export default Statistics;
