 var xData =['FY17/18', 'FY18/19', 'FY19/20', 'Oct 20', 'Nov 20',
  'Dec 20','Jan 21','Feb 21','Mar 21','Apr 21','May 21','Jun 21','Jul 21',
  'Aug 21','Sep 21' ,'FY 20/21','Target'];
//前三个良率 
var ydata = [99,98,85,null,null,null,null,null,null,null,null,
   null,null,null,null,null];
//中间12个月 
var ydata1 = [null, null, null,1702,2098,982,1458,2019,2021,
1875,1952,1391,1322,1589,2311,null];
//本财年2021
var ydata3 = [null, null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, 98, null];
//Budget
// var budgetData = [null, null, null, null, null, null, null, null, null, 
//     null, null, null, null, null, null, null, 92.5,null];
//Target
var targetData = [null, null, null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null,98];
//前三投入量 折线图
var lineData = [2552,1929,2195,null,null,null,null,null,null,null,null,
null,null,null,null,null,null,];
//本财年良率
var lineData2 = [null, null, null,94, 92,96,99,90,88,98,95,94,96,92,93];
//去年投入量
var ydata4 = [null, null, null,2716,2998,1888,2239,2086,1386,870,898,
1491,2513,1961,2211];


 option = {
        backgroundColor:'#fff',
        legend: {
        
          left: '8%',
          bottom: 30,
          itemWidth: 16.7,
          itemHeight: 7.6,
          type: 'plain',
          textStyle: {
            color: '#333',
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            textStyle: {
              color: '#fff',
            },
          },
        },
        grid: {
          borderWidth: 0,
          top: 20,
          bottom: 120,
          left: 55,
          right: 45,
          textStyle: {
            color: '#fff',
          },
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.5)',
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: '#333',
              fontSize: 10.5,
            },
            data: xData,
          },
        ],
        yAxis: [
          {
            name: 'input',
            nameTextStyle: {
              color: '#FDFDFD',
              padding: [0, 0, 0, -50],
            },
            nameGap: 15,
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: '#333',
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: '#333',
              fontSize: 10,
            },
            splitArea: {
              show: false,
            },
          },
          {
            name: 'yeild',
            nameTextStyle: {
              color: '#FDFDFD',
              padding: [0, 0, 0, 35],
            },
            type: 'value',
            splitLine: {
              show: false,
            },
            min: 0,
            axisLabel: {
              interval: 0,
              color: '#333',
              fontSize: 10,
              formatter: '{value}%',
            },
          },
        ],
        series: [
          //本财年投入量
          {
            name: 'Input volume of this fiscal year',
            type: 'bar',
            stack: '1',
            barMaxWidth: 18,
            barGap: '10%',
            label: {
                        show: true,
                        position: 'inside',
                        color:'#333',
                        fontSize:'10px'
                   },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#F2b80e', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#F2C80e', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 1,
              },
            },
            data: ydata1,
          },
        //前三年良率数据
          {
            name: 'Yield data of this previous fiscal years',
            type: 'bar',
            stack: '1',
            barMaxWidth: 18,
            yAxisIndex: 1,
            label: {
                        show: true,
                        position: 'top',
                        color:'#000',
                        fontSize:'10px'
                   },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#005Ac1', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#005Ac1', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 0.9,
                barBorderRadius: 0,
              },
            },
            data:ydata,
          },
          //本财年平均良率 FY20/21
          {
            name: 'Average yield of this fiscal year',
            type: 'bar',
            barMaxWidth: 18,
            stack: '1',
            yAxisIndex: 1,
            label: {
                        show: true,
                        position: 'inside',
                        color:'#000',
                        fontSize:'10px'
                   },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#B93333', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#B93333', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 0.9,
                barBorderRadius: 0,
              },
            },
            data:ydata3,
          },
          
          {
            name: 'Target yeild of this fiscal year',
            type: 'bar',
            barMaxWidth: 18,
            stack: '1',
            yAxisIndex: 1,
            label: {
                        show: true,
                        position: 'top',
                        color:'#000',
                        fontSize:'10px'
                   },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'green', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'green', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 0.9,
                barBorderRadius: 0,
              },
            },
            data:targetData,
          },
          
          
          //本财年良率
          {
            name: 'Yield of this fiscal year',
            type: 'line',
            yAxisIndex: 1,
            symbolSize: 10,
            symbol: 'circle',
            label: {
                        show: true,
                        position: 'top',
                        color:'#222',
                        fontSize:'10px'
                   },
            lineStyle: {
                        normal: {
                            color: "yellow",
                           width:3//设置线条粗细
                        },
                    },
                    itemStyle: {
                        color: "yellow",
                    },
            // smooth: true,
            
            data: lineData2,
          },
         
           //散点图 black 上个财年成材率数据
                {
                    name: 'Yield  of last fiscal year',
                    symbolSize: 15,
                    yAxisIndex: 1,
                    data: [
                        ['Oct 20', 86.8],
                        ['Nov 20', 89.0],
                        ['Dec 20', 89.0],
                        ['Jan 21', 87.1],
                        ['Feb 21', 89.2],
                        ['Mar 21', 89.5],
                        ['Apr 21', 83.3],
                        ['May 21', 80.3],
                        ['Jun 21', 86.0],
                        ['Jul 21', 89.9],
                        ['Aug 21', 85.4],
                        ['Sep 21', 91.0],
                      ],
                  type: 'scatter',
                   itemStyle:{ //当前数据的样式
                     normal:{color:'#000'}
                   },
                   label: {
                    show: true,
                    position: 'bottom',
                    color:'#000',
                    fontSize:'10px'
                   },
                },
                 //散点图 红色 良率本财年
                {
                    name: 'Average yield of this fiscal year',
                    yAxisIndex: 1,
                    symbolSize: 15,
                    data: [
                        ['FY 20/21', 93],
                    ],
                    type: 'scatter',
                    itemStyle:{ //当前数据的样式
                        normal:{color:'red'}
                    },
                    label: {
                        show: true,
                        position: 'top',
                        color:'#000',
                        fontSize:'10px'
                   },
                },
        ],
      }