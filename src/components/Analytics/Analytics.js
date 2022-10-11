import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const Analytics = () => {
    const quizQuestions = useLoaderData();
    const quizTotal = quizQuestions.data;
    // console.log(quizTotal);
    return (
        <div>
            <h1 className='text-4xl font-bold p-10 text-sky-800'>Chart analysis of total questions</h1>

            <div className='flex justify-center m-6'>
                <ComposedChart width={500}
                    height={400}
                    data={quizTotal}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}>
                    <CartesianGrid stroke="#8BBCCC"  ></CartesianGrid>
                    <XAxis dataKey="name" scale="band" ></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey="total" barSize={20} fill="#BCCEF8" ></Bar>
                    <Line type="monotone" dataKey="total" stroke="#4C6793"></Line>

                </ComposedChart>
            </div>

        </div>
    );
};

export default Analytics;