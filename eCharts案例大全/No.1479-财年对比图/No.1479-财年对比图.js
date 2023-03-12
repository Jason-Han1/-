// 此图表是用来做本财年与前三年，去年的数据对比
var xdata = ['FY17/18', 'FY18/19', 'FY19/20', 'Oct 20', 'Nov 20',
'Dec 20','Jan 21','Feb 21','Mar 21','Apr 21','May 21','Jun 21','Jul 21',
'Aug 21','Sep 21' ,'FY 20/21','Target'];
var ydata1 = [89, 88, 85, 92, 94,92,91,92,89,92,93,94,96,95,97,96,97,92,94];
var ydata2 = [2845, 2191, 1848,];
var ydata3 = [null, null, null,1602,2198,942,1455,2089,2011,
1875,1952,1391,1322,1458,2315];
var ydata4 = [null, null, null,2706,2198,1788,2229,2286,1586,770,878,
1391,2713,1661,2311];
var colorList=['#005AA1','#005AA1','#005AA1','#F2C80F','#F2C80F',
'#F2C80F','#F2C80F','#F2C80F','#F2C80F','#F2C80F','#F2C80F','#F2C80F',
'#F2C80F','#F2C80F','#F2C80F','#B93333','#015C55',];

option = {
    legend: {
        right: 30,
        top: 0,
    },
    grid: {
        left: '3%',
        right: '3%',
        top: '7%',
        bottom: '5%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        data: xdata,
        axisLine: {
                show: false,
                lineStyle: {
                    color: '#333',
                    fontSize:'11px'
                }
            },
        axisLabel: {
            interval:0,
            
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#333',
                    
                }
            },
            name: "%",
            max: 100,
            min: 0,
            axisLabel: {
                // interval:0,
                // formatter: (value) => {
                //     console.log(value);
                //     return `${value}%`;
                // },
            },
        },
        {
            type: 'value',
            
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            
        },
    ],
    series: [
        {
            name: '前三年数据柱状图',
            type: 'bar',
            data: ydata1,
            barWidth: '28px',
             itemStyle: {
                normal: {
                     color: (params) => {
					return colorList[params.dataIndex]
				},
                    label: {
                        show: true, //开启显示
                        position:"inside", //在上方显示
                        textStyle: { //数值样式
                            color: "#FFFFFF",
                            fontSize: 12,
                            fontWeight: 600
                        }
                    },},
        },
        },
        {
            name: '前三年数据折线图蓝色',
            type: 'line',
            data: ydata2,
            yAxisIndex: 1,
            symbolSize: 10,
            symbol: 'circle',
            lineStyle: {
                normal: {
                    color: "#64b0e2",
                   width:3//设置线条粗细
                },
            },
            itemStyle: {
                color: "#64b0e2",
               
            },
            label: {
                show: true,
                position: 'top',
                   color:'#fff',
                fontSize:'10px'
           },
            
        },
        {
            name: '本年财年折线图黄色',
            type: 'line',
            data: ydata3,
            yAxisIndex: 1,
            symbolSize: 10,
            symbol: 'circle',
            lineStyle: {
                normal: {
                    color: "#FF8629",
                   width:3//设置线条粗细
                },
            },
            itemStyle: {
                color: "#FF8629",
               
            },
            label: {
                show: true,
                position: 'top',
                   color:'#333',
                fontSize:'10px'
           },
        },{
            name: '去年对比折线图黑色',
            type: 'line',
            data: ydata4,
            yAxisIndex: 1,
            symbolSize: 10,
            symbol: 'circle',
            lineStyle: {
                normal: {
                    color: "#555",
                   width:3//设置线条粗细
                },
            },
            itemStyle: {
                color: "#555",
               
            },
            label: {
                show: true,
                position: 'bottom',
                   color:'#333',
                fontSize:'10px'
           },
        },
        //散点图
        {
            name: '同年对比散点图',
          symbolSize: 15,
          yAxisIndex: 0,
          data: [
            ['Oct 20', 85.8],
            ['Nov 20', 89.8],
            ['Dec 20', 87.0],
            ['Jan 21', 83.1],
            ['Feb 21', 89.8],
            ['Mar 21', 86.5],
            ['Apr 21', 84.3],
            ['May 21', 85.3],
            ['Jun 21', 86.5],
            ['Jul 21', 87.9],
            ['Aug 21', 89.4],
            ['Sep 21', 91.9],
            
          ],
          type: 'scatter',
           itemStyle:{ //当前数据的样式
             normal:{color:'#666'
                 
             }
           },
           label: {
            show: true,
            position: 'top'
               
           },
        },
          //散点图
        {
            name: '今年散点线图黑色',
          symbolSize: 15,
          yAxisIndex: 1,
          data: [
            ['FY 20/21', 1743],
          ],
          type: 'scatter',
           itemStyle:{ //当前数据的样式
             normal:{color:'#ff1a00'}
           },
           label: {
            show: true,
            position: 'top',
            color:'#000',
            fontSize:'10px'
           },
        },
        
    ],
};
