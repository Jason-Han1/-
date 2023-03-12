
// 指定图表的配置项和数据
var option = {
    tooltip: {
        show: false
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        // boundaryGap: 100,
        min: -1,
        max: 7,
        axisLine: {
            lineStyle: {
                color: '#4bbbf8',
                shadowColor: 'rgba(75, 211, 255, 0.5)',
                shadowBlur: 5
            }
        },
        axisTick: {
            interval: (index) => {
                if (index === -1 || index === 9) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        axisLabel: {
            color: '#34A6D2',
            fontSize: 20,
            fontWeight:400,
            fontFamily:'SourceHanSansCN-Regular'
        },
        splitLine: {
            show: false
        },
        data: [9.12, 9.13, 9.14, 9.15, 9.16, 9.17, 9.18],

    },
    yAxis: [{
        max: 120,
        min: 0,
        axisLine: {
            lineStyle: {
                color: '#34A6D2',
                shadowColor: 'rgba(75, 211, 255, 0.5)',
                shadowBlur: 5
            }
        },
        axisLabel: {
            color: '#34A6D2',
            fontSize: 20,
            fontWeight:400,
            fontFamily:'SourceHanSansCN-Regular'
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(75, 211, 255, 0.2)',
                type: 'solid'
            }
        }
    }],
    series: [{
        name: '充电量',
        type: 'pictorialBar',
        // barCategoryGap: '-60%',
        symbol: 'path://d="M150 0 L75 200 L225 200 Z"',
        itemStyle: {
            color: '#34A6D2'
        },
        data: [75, 36, 56, 98, 29, 41, 102]
    }],
    backgroundColor: "#190c12",
};

myChart.setOption(option);
var key = 0;
