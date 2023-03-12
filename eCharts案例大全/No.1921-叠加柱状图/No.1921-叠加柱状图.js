var xAxisData =  ['1','2','3','4','5','6'];

var emphasisStyle = {
    itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
    }
};

option = {
    backgroundColor:'rgba(3, 4, 24, 1)',
    color:['rgba(18, 48, 157, 1)','rgba(53, 93, 229, 1)','rgba(2, 165, 240, 1)','rgba(76, 255, 249, 1)',],
    dataZoom: {
        type: 'slider',
        show: true,
        start: 0,
        end: 100,
        height: 6, // 这里可以设置dataZoom的尺寸
        bottom: 16,
    },
    grid: {
        top: '10',
        left: '10',
        right: '10',
        bottom: '26',
        containLabel: true,
    },

    xAxis: {
        data: xAxisData,
         boundaryGap: true,
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#959FA9',
                fontSize: 14
            },
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
                    type: 'value',
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            // type: 'dashed',
                            color: 'rgba(39, 41, 58, 0.3)',
                            width: 1
                        }
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgb(2,185,208)',
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#959FA9',
                            fontSize: 14
                        },
                    },
                },

    series: [
        {
            name: 'bar',
            type: 'bar',
            stack: 'stack',
            barWidth:30,
            label: {
                show: true,
                color:'#FFFFFF',
                position: 'inside'
            },
            emphasis: emphasisStyle,
            data: [60,80,100,83,29,30,30]
        },
        {
            name: 'bar2',
            type: 'bar',
            stack: 'stack',
            barWidth:30,
            label: {
                show: true,
                color:'#FFFFFF',
                position: 'inside'
            },
            emphasis: emphasisStyle,
            data: [50,80,100,83,29,30,30]
        },
        {
            name: 'bar3',
            type: 'bar',
            stack: 'stack',
            barWidth:30,
            label: {
                show: true,
                color:'#FFFFFF',
                position: 'inside'
            },
            emphasis: emphasisStyle,
            data: [30,80,100,83,29,30,30]
        },
        {
            name: 'bar4',
            type: 'bar',
            stack: 'stack',
            barWidth:30,
            label: {
                show: true,
                color:'#FFFFFF',
                position: 'inside'
            },
            emphasis: emphasisStyle,
            data: [20,80,100,83,29,30,30]
        }
    ]
};
