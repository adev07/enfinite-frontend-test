import React from 'react';
import { Line } from '@ant-design/plots';

export const LineCharts = ({data, config}) => {
  
  return <Line {...config} />;
};