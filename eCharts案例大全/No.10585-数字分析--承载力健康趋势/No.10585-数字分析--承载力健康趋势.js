var fontColor = '#30eee9';
var xdata = ['06.20', '06.21', '06.22', '06.23', '06.24', '06.25', '06.26']; //x轴
var dataArr = [79, 60, 80, 60, 75, 75, 53];
var seriesName = '';
option = {
    title: {
        // text: '分所销售水量占比',
        top: '5%',
        left: 'center',
        textStyle: {
            color: '#FFF',
            align: 'center',
        }
    },
    backgroundColor: '#11183c',
    grid: {
        left: "5%",
        //   right: "2%",
        bottom: "5%",
        top: "15%",
        containLabel: true
    },
    xAxis: {
        type: "category",
        //   boundaryGap: false,
        data: xdata,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff",
                fontSize:14
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
        // name: '立方米',
        min: 0,
        max: 100,
        axisLabel: {
            formatter: '{value}分',
            textStyle: {
                color: '#2ad1d2',
                fontSize:14
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
    series: [{
        name:seriesName,
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
            normal: {
                color: '#0092f6',
                lineStyle: {
                    color: "#0092f6",
                    width: 1
                },
                areaStyle: {
                    //color: '#94C9EC'
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgba(7,44,90,0.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(0,146,246,0.9)'
                    }]),
                }
            }
        },
        markPoint: {
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        },
        data:dataArr 
    }, ]
};