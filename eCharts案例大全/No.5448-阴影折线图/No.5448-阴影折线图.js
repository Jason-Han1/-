let xData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let yData = [
    [820, 932, 901, 934, 1290, 1330, 1320],
    [901, 94, 1290, 130, ]
];
let seriesColor = ['#ABB8D7', '#ABB8D7']

let showArea = true;
let showCenterSplit = true;
let showMinorYAxis = true;

let markLineOption = {}
let areaOption = {}
if (showArea) {
    areaOption = {
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: seriesColor[0] // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#ffffff00' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }
}
if (showCenterSplit) {
    markLineOption = {
        markLine: {
            silent: true,
            symbol: 'none',
            label: {
                show: false
            },
            lineStyle: {
                color: '#eee'
            },
            data: [{
                xAxis: 'Thu'
            }]
        }
    }
}


option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#565656'
        },
        data: xData
    },
    yAxis: [{
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 10,
            color: '#929292',
            height: 0,
            padding: [-10, 0, 0, -8],
            inside: true
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(238,238,238,0.50)'
            }
        }

    }, {
        show: showMinorYAxis,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            fontSize: 10,
            color: '#929292',
            height: 0,
            padding: [-10, 0, 0, -8],
            inside: true
        }
    }],
    tooltip: {
        show: true,
        trigger: 'axis',
        showContent: false,
        axisPointer: {
            lineStyle: {
                color: 'rgba(86,86,86,0.50)'
            }
        }
    },
    series: yData.map((item, i) => {
        return {
            yAxisIndex: i,
            data: item,
            type: 'line',
            symbol: 'circle',
            hoverAnimation: false,
            itemStyle: {
                color: '#000'  
            },
            showSymbol: false,
            lineStyle: {
                color: seriesColor[i]
            },
            ...markLineOption,
            ...areaOption
        }
    })
};