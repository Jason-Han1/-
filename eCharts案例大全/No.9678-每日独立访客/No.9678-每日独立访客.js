//图表所需数据区
var charts = {
    names: ['点击量', '访客'],
    lineX: ['2018-11-11 17:01', '2018-11-11 17:02', '2018-11-11 17:03', '2018-11-11 17:04', '2018-11-11 17:05', '2018-11-11 17:06', '2018-11-11 17:07', '2018-11-11 17:08', '2018-11-11 17:09', '2018-11-11 17:10', '2018-11-11 17:11', '2018-11-11 17:12', '2018-11-11 17:13', '2018-11-11 17:14', '2018-11-11 17:15', '2018-11-11 17:16', '2018-11-11 17:17', '2018-11-11 17:18', '2018-11-11 17:19', '2018-11-11 17:20'],
    useNum:[4.51, 3.52, 3.03, 5.34, 0.95, 2.36, 2.17, 3.28, 1.59, 1.51, 2.31, 1.92, 4.53, 5.24, 1.65, 2.36, 5.27, 3.28, 1.29, 5.3],
    visitorNum:[360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98],
}
var color = ['rgba(23, 255, 243', 'rgba(255,100,97']

//y轴样式  arrIndex相关目标数组的index值，lineYData目标y轴值
function getLineYSeries(arrIndex,lineYData){
    var data = {
        name: charts.names[arrIndex],
        type: 'line',
        yAxisIndex: arrIndex,//使用相对的y轴
        color: color[arrIndex] + ')',
        smooth: true,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color[arrIndex] + ', 0.3)'
                }, {
                    offset: 0.8,
                    color: color[arrIndex] + ', 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        symbol: 'circle',
        symbolSize: 5,
        data: lineYData
    }
    
    return data;
}

var lineY = [getLineYSeries(0,charts.useNum),getLineYSeries(1,charts.visitorNum)]



//图表配置
var option = {
    title: {
	        text: '每日独立访客-包括网络机器人',
	        subtext: '来自同一IP、时间和HTTP用户代理的多次点击被视作一次访问',
	        textStyle: {
	        	align: 'center',
	            color: '#fff',
	            fontSize: 20,
	        },
	        subtextStyle:{
	            color: '#fff'
	        },
	        top: '3%',
	        left: '1%'
	    },
    backgroundColor:'#0099CC',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: charts.names,
        textStyle: {
            fontSize: 12,
            color: 'rgb(0,253,255,0.6)'
        },
        bottom: '4%'
    },
    grid: {
        top: '30%',
        left: '4%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: charts.lineX,
        axisLabel: {
            textStyle: {
                color: 'rgb(255,255,255)'
            },
            formatter: function(params) {
                return params.split(' ')[0] + '\n' + params.split(' ')[1]
            }
        },
        splitLine: {
            show:true,
            lineStyle: {
                color: 'rgb(255,255,255,0.4)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgb(255,255,255)'
            }
        }
    },
    yAxis: [{
        name: '点击量（k）',
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: 'rgb(255,255,255)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(255,255,255,0.4)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgb(255,255,255)'
            }
        }
    },{
        name: '访客',
        type: 'value',
        axisLabel: {
            show:true,
            formatter: '{value}',
            textStyle: {
                color: 'rgb(255,255,255)'
            }
        },
        splitLine: {
            show:false,
        },
        axisLine: {
            lineStyle: {
                color: 'rgb(255,255,255)'
            }
        }
    }],
    series: lineY
}



//动态变化
setInterval(() => {
    myChart.setOption({
      legend: {
        selected: {
          '点击量': false,
          '访客': false
        }
      }
    })
    myChart.setOption({
      legend: {
        selected: {
          '点击量': true,
          '访客': true
        }
      }
    })
},10000)