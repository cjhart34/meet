import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const EventGenre = ({events}) => {
  const [data, setData] = useState([]);
  useEffect(() => { setData(() => getData()); }, [events]);
  const colors = ['#c97484', '#808080', '#7daafb', '#65cca9', '#f79e69'];

  const getData = ()=>{
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const summaries=events.map(event=> event.summary);
    const rawResults= genres.map((genre)=>{
        const value=summaries.filter((summary)=>summary.includes(genre)).length;
        return {
          name: genre,
          value
        }
      });
    const results=rawResults.filter((element)=>element.value!==0);  
    return results;
  }

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
      <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
          label={({ name, percent }) =>`${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign='bottom' height={36}/>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;