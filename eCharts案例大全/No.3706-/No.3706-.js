var fontColor = '#30eee9';
var xdata = ['08点','09点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点','00点'];  //x轴
var dataArr =[22,23,25,27,27,28,27,29,30,32,30,28,27,25,24,26,25]; //value
var titleName = '预期值';
var titleNames = '温度变化曲线';
option = {
    backgroundColor: '',
    grid: {
        left: "5%",
        //   right: "2%",
        bottom: "20%",
        top: "15%",
        containLabel: true
    },
   
    xAxis: {
        type: "category",
        boundaryGap: false,
        data: xdata,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff"
            }
        },
        axisLine: {
            lineStyle: {
                color: 'transparent',
                width: 2 //这里是为了突出显示加上的
            }
        }
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#2ad1d2'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'transparent',
                width: 2 //这里是为了突出显示加上的
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#11366e'
            }
        }
    }],
    series: [
        {
            name: titleNames,
            type: 'line',
            stack: '总量',
            symbol: 'triangle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        // color: 'rgba(84,91,255,1)',
                        color: 'rgba(3,191,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(18,93,236,1)'
                    }]),
                    
                },
                emphasis: {
                    color: 'rgb(0,196,132)',
                    borderColor: 'rgba(0,196,132,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    // borderWidth: 10
                }

            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: dataArr
        },
    ]
};