/*
https://www.makeapie.com/editor.html?c=xHfP89cuh8 参考的母版
https://echarts.apache.org/zh/option.html#series-scatter.type 散点图文档
*/
const idata = [
  [
    [1.16, 3.77, 321773631, 'Australia', 2014],
    [2.12, 3.74, 321773631, 'Canada', 2014],
    [3.52, 3.68, 321773631, 'China', 2014],
    [4.37, 3.77, 321773631, 'Cuba', 2014],
    [5.16, 3.75, 321773631, 'Finland', 2014],
    [6.15, 3.77, 321773631, 'France', 2014],
    [7.15, 3.74, 321773631, 'Germany', 2014],
    [8.87, 3.71, 321773631, 'Iceland', 2014],
  ],
  [
    [1.41, 6.81, 321773631, 'Australia', 2015],
    [2.32, 6.81, 321773631, 'Canada', 2015],
    [3.33, 6.76, 321773631, 'China', 2015],
    [4.13, 6.75, 321773631, 'Cuba', 2015],
    [5.84, 6.8, 321773631, 'Finland', 2015],
    [6.76, 6.81, 321773631, 'France', 2015],
    [7.41, 6.81, 321773631, 'Germany', 2015],
    [8.23, 6.82, 321773631, 'Iceland', 2015],
  ],
  [
    [1.41,9.81,321773631,"Australia",2016],
    [2.32,9.81,321773631,"Canada",2016],
    [3.33,9.76,321773631,"China",2016],
    [4.13,9.75,321773631,"Cuba",2016],
    [5.84,9.8,321773631,"Finland",2016],
    [6.76,9.81,321773631,"France",2016],
    [7.41,9.81,321773631,"Germany",2016],
    [8.24,9.82,321773631,"Iceland",2016]
  ],
  [
    [1.15,12.77,321773631,"Australia",2017],
    [2.12,12.74,321773631,"Canada",2017],
    [3.52,12.68,321773631,"China",2017],
    [4.37,12.76,321773631,"Cuba",2017],
    [5.85,12.75,321773631,"Finland",2017],
    [6.92,12.22,321773631,"France",2017],
    [7.15,12.74,321773631,"Germany",2017],
    [8.87,12.71,321773631,"Iceland",2017],
  ]
];

for (let i of idata) {
  for (let p of i) {
    p[4] = p[2];
    p[5] = p[3];
    
    p[2] = 17938;
    p[3] = '';
  }
}

let emphasis =  {
  focus: 'series',
  label: {
    show: true,
    formatter(param) {
      return param.data[4]+' and '+ param.data[5];
    },
    position: 'top',
  },
};

option = {
  title: {
    text: '风险热力图',
    left: '5%',
    top: '0%',
  },
  legend: {
    right: '10%',
    top: '3%',
  },
  grid: {
    left: '8%',
    top: '10%',
  },
  xAxis: {
    name: '风险发生可能性',
    splitLine: {
      lineStyle: {
        type: 'dashed',
      },
    },
  },
  yAxis: {
    name: '风险影响度',
    splitLine: {
      lineStyle: {
        type: 'dashed',
      },
    },
    scale: true,
  },
  series: [
    {
      name: 'item1',
      data: idata[0],
      type: 'scatter',
      symbol:'triangle',
      symbolSize(data1) {
        return data1[2] / 5e2;
      },
      emphasis:emphasis,
      itemStyle:{
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
        color: '#05BDB3',
      }
    },
    {
      name: 'item2',
      data: idata[1],
      type: 'scatter',
      symbolSize(data1) {
        return data1[2] / 5e2;
      },
      emphasis:emphasis,
      itemStyle:{
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
        color: '#4C21C5',
      }
    },
    {
      name: 'item3',
      data: idata[2],
      type: 'scatter',
      symbol:'roundRect',
      symbolSize(data1) {
        return data1[2] / 5e2;
      },
      emphasis:emphasis,
      itemStyle:{
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
        color: '#1DE9B6',
      }
    },
    {
      name: 'item4',
      data: idata[3],
      type: 'scatter',
      symbol:'pin',
      symbolSize(data1) {
        return data1[2] / 5e2;
      },
      emphasis:emphasis,
      itemStyle:{
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
        color: '#F4E925',
      }
    },
  ],
};
