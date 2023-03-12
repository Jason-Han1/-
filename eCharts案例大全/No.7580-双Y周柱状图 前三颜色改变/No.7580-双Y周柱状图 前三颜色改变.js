var barindex = 0;
var colorList = ['#d24d57', '#f19d11', '#5047f7', '#31abf7'];
var  echartReportbar1Data = ['杭州市', '宁波市', '温州市', '湖州市', '嘉兴市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市'];
option = {
  backgroundColor:'#003366',
    legend: {
        show: false
    },
    grid: {
       
    },
   
    xAxis: {
        type: 'value',

        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }

    },
    yAxis: 
   [ {
        type: 'category',
        inverse: true,
        
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
      hoverAnimation:false,
        data:echartReportbar1Data,
        axisLabel: {
            margin: 20,
            fontSize: 14,
            align: 'right',
            color: '#333',
            rich: {
                a1: {
                    color: colorList[0],
                   
                    align: 'right',
                },
                a2: {
                    color:  colorList[1],
                   align: 'right',
                },
                a3: {
                    color: colorList[2],
                   align: 'right',
                },
                b: {
                    color:  '#fff',
                    align: 'right',
                }
            },
            formatter: function(params) {
                if (barindex == echartReportbar1Data.length) {
                    barindex = 0;
                }
                barindex++;
                if (barindex - 1 < 3) {
                    return [
                        '{a' + barindex + '|' + params + '}' 
                    ].join('\n')
                } else {
                    return [
                        '{b|' + params + '}' 
                    ].join('\n')
                }
            }
        }
    },
    
     {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    
        data: echartReportbar1Data,
        axisLabel: {
            margin: 100,
            fontSize: 14,
            align: 'right',
            rich: {
                a1: {
                    color: '#fff',
                    backgroundColor: colorList[0],
                    width: 30,
                    height: 30,
                    align: 'center',
                    borderRadius: 50
                },
                a2: {
                    color: '#fff',
                    backgroundColor: colorList[1],
                    width: 30,
                    height: 30,
                    align: 'center',
                   borderRadius: 50
                },
                a3: {
                    color: '#fff',
                    backgroundColor: colorList[2],
                    width: 30,
                    height: 30,
                    align: 'center',
                  borderRadius: 50
                },
                b: {
                    color: '#fff',
                    backgroundColor: colorList[3],
                    width: 30,
                    height: 30,
                    align: 'center',
                    borderRadius: 50
                }
            },
            formatter: function(params) {
                if (barindex == echartReportbar1Data.length) {
                    barindex = 0;
                }
                barindex++;
                if (barindex - 1 < 3) {
                    return [
                        '{a' + barindex + '|' + barindex + '}' 
                    ].join('\n')
                } else {
                    return [
                        '{b|' + barindex + '}' 
                    ].join('\n')
                }
            }
        }
    },
    ],
    series: [{
            z: 2,
            name: 'value',
            type: 'bar',
            barWidth:40,
           
            data: [200,150,100,50,60,50,14,64,34,55,34].map((item, i) => {
                itemStyle = {
                    color: i > 3 ? colorList[3] : colorList[i]
                }
                return {
                    value: item,
                    itemStyle: itemStyle
                };
            }),
            label: {
                show: true,
                position: 'insideRight',
                color: '#fff',
                fontSize: 12,
                // offset: [10, 0]
            },
                  itemStyle: {
            barBorderRadius: [2],
        }
        }

    ]
};