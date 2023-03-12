const dataSJB = [
  [1981, 1, 3.33, 24.3, ],

  [1985, 1, 2.25, 22.2, ],
  [1989, 3, 1.08, 21.7, ],
  [1991, 2, 2.25, 22.9,],
  [1995, 3, 2, 21.5, ],
  [1999, 5, 2.92, 22.9, ],
  [2003, 1, 3.83, 23.8, ],
  [2011, 3, 2.36, 21.8, ],
  [2015, 1, 3.14, 23.7, ],
  [2019, 1, 5.25, 25.3, ],
  
  
];
const dataSJS = [
  [1982, 1, 3.5, 23.8, ],
  [1986, 1, 2.75, 22.9,],
  [1990, 2, 2.17, 23.1, ],
  [1994, 8, 2.92, 22.9, ],
  [1998, 2, 4.08, 23.5, ],
  [2002, 4, 3, 23.5, ],
  [2006, 5, 5.08, 24.4, ],
  [2010, 10, 4.08, 22.8, ],
  [2014, 2, 3.14, 22.7, ],
  [2018, 3, 4.21, 24.5, ],
  
  
];
const dataAYH= [
  [1984, 1, 3.5, 23.4, ],
  [1988, 3, 3, 23.5,],
  [1992, 7, 3, 23.6, ],
  [1996, 2, 2.75, 22.2, ],
  [2000, 5, 4.69, 23.5, ],
  [2004, 1, 4.83, 24.9, ],
  [2008, 3, 6, 25.1, ],
  [2012, 7, 4.33, 23.8, ],
  [2016, 1, 4.42, 24.3, ],
  [2020, 9, 6.33, 27.1, ],
  
];
const dataDJS= [
  [1993, 2, 2.45, 23.3, ],
  [1994, 3, 3, 23.3,],
  [1995, 4, 2, 21.5, ],
  [1996, 4, 2.75, 22.2, ],
  [1997, 5, 1.92, 21.9, ],
  [1998, 4, 3.2, 22.7, ],
  [1999, 3, 2.75, 22.1, ],
  [2000, 4, 3.72, 24.3, ],
  [2001, 2, 2.2, 22.8, ],
  [2002, 2, 2.56, 23.1, ],
  [2003, 1, 3.75, 24.1, ],
  [2004, 5, 4.38, 24.7, ],
  [2005, 3, 2.67, 22.6, ],
  [2006, 5, 4.67, 24, ],
  [2007, 2, 3.87, 23.8, ],
  [2008, 5, 6, 25.1, ],
  [2009, 5, 2, 21.8, ],
  [2010, 4, 2.44, 21.9, ],
  [2011, 8, 2.3, 21.9, ],
  [2012, 5, 3.52, 23, ],
  [2013, 2, 2.72, 23.5, ],
  [2014, 5, 2.38, 22.7, ],
  [2015, 4, 2.6, 22.4, ],
  [2016, 2, 3.95, 24.2, ],
  [2017, 4, 2.29, 22.7, ],
  [2018, 3, 3.22, 23.7, ],
  [2019, 3, 2.86, 23.9, ],
  [2021, 5, 5.56, 26, ],
  
];
const schema = [
  { name: 'date', index: 0, text: '年' },
  { name: 'RANK', index: 1, text: '成绩排名' },
  { name: 'DURATION', index: 2, text: '平均服役年限' },
  { name: 'YEARS', index: 3, text: '平均年龄' },
  
];
const itemStyle = {
  opacity: 1,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: 'rgba(0,0,0,0.3)'
};
//上面的四大赛选项
option = {
  color: ['#ed9140', '#f9d27d', '#56aac5','#ed4845'],
  legend: {
    top: '12%',
    data: ['奥运会', '世界杯', '世锦赛','世界排球联赛（原世界女排大奖赛）'],
    textStyle: {
      color: '#424242',
      fontSize: 16
    }
  },
  title: [
        {
          text: '中国女排历届国家队成绩与参赛球员平均年龄、平均服役年限关联图',
          //历届中国女排国家队球员平均服役年限、平均年龄与球队成绩关联
          left: '4%',
          top: '7%',
          textStyle: {
            color: '#424242',
            fontSize: 20,
          }
        }
      ],
  grid: {
    left: '10%',
    right: 150,
    top: '22%',
    bottom: '10%'
  },
  tooltip: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderColor:'rgba(237, 72, 69, 0.3)',		//tooltip边框颜色
    borderWidth:2,
    textStyle: {
      color: '#424242',
    },
    formatter: function (param) {
      var value = param.value;
      // prettier-ignore
      return '<div style="border-bottom: 1px dotted rgba(237, 72, 69, 0.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[0] + '年' + param.seriesName + ' ' 
                + '中国女排服役数据'
                + '</div>'
                + schema[1].text + '：' + '第'+ value[1] + '名'+'<br>'
                + schema[2].text + '：' + value[2]+ '年' + '<br>'
                + schema[3].text + '：' + value[3]+ '岁'  + '<br>';
    }
  },
  

  xAxis: {
    type: 'value',
    name: '年份',
    min:1980,
    max:2021,
    splitNumber:10,
    axisLabel: {
      formatter: '{value}年',
      align: '',
    },
    nameTextStyle: {
      fontSize: 16,
    },
    splitLine: {
      show: false
    }

  },
  yAxis: {
    type: 'value',
    inverse: true,
    name: '成绩排名',
    nameGap: 30,
    nameTextStyle: {
      fontSize: 16,
      padding: [-540, 0, 0, -60],
    },
    min:1,
    max:10,
    splitNumber:10,
    axisLabel: {
      formatter: '第 {value} 名',
      align: 'right'
    },
    splitLine: {
      show: false,
      lineStyle: {
                color: 'rgba(39, 57, 75, 0.05)',
                width: 1,
                type: 'solid',
      }
    }
  },
  visualMap: [
    {
      left: 'right',
      top: '20%',
      dimension: 2,
      min: 0,
      max: 10,
      itemWidth: 30,
      itemHeight: 120,
      calculable: true,
      precision: 0.01,
      text: ['圆形大小：平均服役年限'],
      textGap: 20,
      inRange: {
        symbolSize: [0, 70]
      },
      outOfRange: {
        symbolSize: [0, 70],
        color: ['rgba(255,255,255,0)']
      },
      controller: {
        inRange: {
          color: ['#f9d27d'] 
        },
        outOfRange: {
          color: ['#999']
        }
      }
    },
    {
      left: 'right',
    
      bottom: '10%',
      dimension: 3,
      min: 21,
      max: 28,
      itemHeight: 120,
      calculable: true,
      precision: 0.01,
      text: ['圆形明暗：平均年龄'],
      textGap: 20,
      inRange: {
        colorLightness: [0.9, 0.5]
      },
      outOfRange: {
         color: ['rgba(255,255,255,0.1)']
       
      },
      controller: {
        inRange: {
          color: ['#ed4845'] 
        },
        outOfRange: {
          color: ['#999']
        }
      }
    }
  ],
  series: [
    {
      name: '世界杯',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataSJB
    },
    {
      name: '世界杯',
      type: 'line',
      smooth: false,
      //加上不显示圆圈
      symbol: 'circle',
      lineStyle: {
                normal: {
                   color: 'rgba(237, 145, 64, 0.3)',
                   type: 'dotted',
                },
     },
    
      data: dataSJB
    },
    {
      name: '世锦赛',
      type: 'scatter',
      itemStyle: itemStyle,
    
      data: dataSJS
    },
    {
      name: '世锦赛',
      type: 'line',
      smooth: false,
      //加上不显示圆圈
      symbol: 'circle',
      lineStyle: {
                normal: {
                   color: 'rgba(249, 210, 125, 0.3)',
                   type: 'dotted',
                },
     },
    
      data: dataSJS
    },
    {
      name: '奥运会',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataAYH
    },
    {
      name: '奥运会',
      type: 'line',
      smooth: false,
      //加上不显示圆圈
      symbol: 'circle',
      lineStyle: {
                normal: {
                    color: 'rgba(86, 169, 197, 0.3)',
                    type: 'dotted',
                },
     },
    
      data: dataAYH
    },
    {
      name: '世界排球联赛（原世界女排大奖赛）',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataDJS
    },
    {
      name: '世界排球联赛（原世界女排大奖赛）',
      type: 'line',
      smooth: false,
      //加上不显示圆圈
      symbol: 'circle',
      lineStyle: {
                normal: {
                    color: 'rgba(237, 72, 69, 0.3)',
                    type: 'dotted',
                },
     },
    
      data: dataDJS
    },
  ]
};