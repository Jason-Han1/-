let xData = ['2016', '2017', '2018', '2019', '2020']
let yData = [25, 100, 50, 45, 75]
let barData = [25, 60, 50, 45, 75]

function calMax(arr) {
    let max = 0;
    arr.forEach((el) => {
        el.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
                if (Number(max) < Number(el1)) {
                    max = Number(el1);
                }
            }
        })
    })
    let maxint = Math.ceil(max / 9.5);
    //不让最高的值超过最上面的刻度    
    let maxval = maxint * 10;
    //让显示的刻度是整数    
    return maxval;
}


var max = Math.ceil(calMax([yData])/50)*50 ;
var max1 = Math.ceil(calMax([barData])/50)*50 ;

var option = {
    legend:{
        left:'1%'
    },
    grid: {
        left: '1%',
        top: 60,
        right: 0,
        bottom: 0,
        containLabel: true
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: xData,
        axisTick: {
            show: false
        },
        axisLabel: {
            color: 'rgba(204, 234, 255, 1)'
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(18, 255, 255, 0.5)'
            }
        }
    },
    yAxis: [{
        max:max1,
        name: '数量（个）',
        nameTextStyle: {
            align: 'left',
            color: 'rgba(204, 234, 255, 1)'
        },
        axisLabel: {
            color: 'rgba(204, 234, 255, 1)'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(18, 255, 255, 0.5)'
            }
        }
    }, {
        max:max,
        name: '金额（万元）',
        position: 'right',
        nameTextStyle: {
            align: 'right',
            color: 'rgba(204, 234, 255, 1)'
        },
        axisLabel: {
            color: 'rgba(204, 234, 255, 1)'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(18, 255, 255, 0.5)'
            }
        }
    }],
    series: [
        {
        name:'数量',
        type: 'bar',
        data: barData,
        barWidth: 15,
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#1D82FF'
                }, {
                    offset: 1,
                    color: '#00FFF6'
                }]),
                barBorderRadius: [4, 4, 0, 0]
            }
        }
    },{
        name:'金额',
        type: 'line',
        data: yData,
        yAxisIndex: 1,
        smooth: true,
        symbol: 'none',
        itemStyle: {
            normal: {
                lineStyle: {
                    color:{
                        type:'linear',
                        // 两端添加透明度,模拟两端线收缩
                        colorStops:[{
                            offset: 0,
                            color: 'rgba(255, 227, 168, 0)' // 0% 处的颜色
                        }, {
                            offset: 0.2,
                            color: 'rgba(255, 227, 168, 1)' // 100% 处的颜色
                        },{
                            offset: 0.8,
                            color: 'rgba(255, 227, 168, 1)' // 100% 处的颜色
                        },{
                            offset:1,
                            color:  'rgba(255, 227, 168, 0)'
                        }]
                    },
                    shadowColor: 'rgba(255, 120, 0, 1)',
                    shadowBlur: 8
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(197, 106, 255, 0.6)'
                    }, {
                        offset: 0.6,
                        color: 'rgba(255, 120, 0, 0)'
                    }]),
                }
            }
        }
    }]
};