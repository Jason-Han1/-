var xData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var yData = [220, 182, 191, 234, 290, 330, 310]



option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(13,5,30,.6)',
        borderColor: ' rgba(255,255,255,.2)',
        borderWidth: 1,
        padding: 5
    },
    legend: {
        show: false
    },
    grid: {
        left: '3%',
        right: '8%',
        bottom: '0%',
        top: ' 15%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: xData,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            // interval: '0',//X轴坐标全显示
            textStyle: {
                color: "#fff"
            }
        }
    }],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff"
            }
        }
    }],
    series: [{
        name: name,
        type: 'bar',
        // barWidth: 15,
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
            barBorderRadius: 20,
            normal: {
                barBorderRadius: 10,
                color: function(params) {
                    // console.log(params);
                    // if(params.dataIndex == maxIndex){
                    //     colors= ["#fc532d","#fe7018","#ff8706"]
                    // }else{
                    colors = ["#00aef2", "#0077fe", "#0072ff"]
                    // }
                    return new echarts.graphic.LinearGradient(0, 0, 1, 0,
                        [{
                                offset: 0,
                                color: colors[0]
                            },
                            {
                                offset: 0.5,
                                color: colors[1]
                            },
                            {
                                offset: 1,
                                color: colors[2]
                            }
                        ]);
                }
            },
            emphasis: {
                color: "#fc532d"
            }
        },
        zlevel: 11,
        data: yData
    }]
};