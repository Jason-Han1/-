var  xLabel=['黄浦区','徐汇区','长宁区','静安区','虹口区','闵行区','宝山区'];
var  getwkrs=[1400,1615,1680,1537,1540,1525,1640];
var  getlkrs=[686,703,788,882,779,785];
option= {
    backgroundColor:'#000',
    grid: {
        top: '20%',
        left: '7%',
		right: '2%',
        bottom: '3%',
        containLabel: true
    }, 
    tooltip: {
        // 格式化提示内容
        formatter: function (params) {
            return params.name + 
                ' : ' + params.value + 'mm'
        }
    },
   xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisLine: {
                //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: 'rgb(41,188,245,.3)',
                },
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置
                textStyle: {
                    color: 'rgb(188,217,230)',
                    fontSize: 14,
                },
                formatter: function (data) {
                    return data;
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#233653',
                },
            },
            axisTick: {
                show: false,
            },
            data: xLabel,
        },
    ],
   yAxis: [
        {
            min:1200,
            max:1700,
            interval:100,
            type:'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgb(41,188,245,.3)',
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#233653',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgb(188,217,230)',
                },
                formatter: function (value, index) {
                    // value大于1000时除以1000并拼接k，小于1000按原格式显示
                    if (value >= 100) {
                      value = value/100  + "00";
                    }else if(value < 100){
                      value;
                    }
                return value;
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
	{
		name: "",		
        type: 'bar',
        z:1,
        data: getwkrs,
        barWidth: '12px',
        itemStyle: {
            normal: {
                color: function(params) {
                            var maxIndex = 2;
                            if(params.dataIndex == maxIndex){
                                colors= ['rgb(211,230,41)','rgb(211,230,41)','transparent']
                            }else{
                            colors=['rgba(44,181,233,0.9)','rgba(44,181,233,0.9)','transparent'];
                            }
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                [
                                    {offset: 0, color: colors[0]},
                                    {offset: 0.3, color: colors[1]},
                                    {offset: 1, color: colors[2]}
                                ]);
                        }
            }
        },
    },
    {
		name: "",	
		barGap: '-250%',
        type: 'bar',
        z:0,
        data: [1700,1700,1700,1700,1700,1700,1700],
        barWidth: '48px',
        itemStyle: {
            normal: {
                 color: 'rgba(4,22,34,0.9)' // 0% 处的颜色
            }
        },
   
    },
    {
        data: [{
            value: 1700,
            symbolPosition: 'end'
        }, {
            value: 1700,
            symbolPosition: 'end'
        }, {
            value: 1700,
            symbolPosition: 'end'
        }, {
            value: 1700,
            symbolPosition: 'end'
        }, {
            value: 1700,
            symbolPosition: 'end'
        }, {
            value: 1700,
            symbolPosition: 'end'
        }, {
            value: 1700,
            symbolPosition: 'end'
        }],
        type: 'pictorialBar',
        symbolSize: [48, 2],
        symbolOffset: [-7, -2],
        // symbol: 'image://' + huanlan,
        z: 12,
         itemStyle: {
            normal: {
                 color: 'rgba(44,181,233,0.9)' // 0% 处的颜色
            }
        },
    },
    {
        data: [{
            value: 1200,
            symbolPosition: 'end'
        }, {
            value: 1200,
            symbolPosition: 'end'
        }, {
            value: 1200,
            symbolPosition: 'end'
        }, {
            value: 1200,
            symbolPosition: 'end'
        }, {
            value: 1200,
            symbolPosition: 'end'
        }, {
            value: 1200,
            symbolPosition: 'end'
        }, {
            value: 1200,
            symbolPosition: 'end'
        }],
        type: 'pictorialBar',
        symbolSize: [48, 4],
        symbolOffset: [-7, -2],
        // symbol: 'image://' + huanlan,
        z: 12,
         itemStyle: {
            normal: {
                 color: 'rgba(44,181,233,0.9)' // 0% 处的颜色
            }
        },
    },
    ]
}