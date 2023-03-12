chartData = [
    {
        seriesName: '设备A',
        value: [10, 20, 30, 40, 50, 60, 70],
        name: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07'],
    },
    {
        seriesName: '设备B',
        value: [50, 30, 30, 40, 50, 10, 30],
        name: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07'],
    },
    {
        seriesName: '设备C',
        value: [30, 20, 30, 40, 50, 50, 70],
        name: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07'],
    },
    {
        seriesName: '设备D',
        value: [60, 20, 30, 30, 50, 60, 70],
        name: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07'],
    },
    {
        seriesName: '设备E',
        value: [20, 60, 30, 40, 50, 10, 90],
        name: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07'],
    },
];
var series = [];
function getSeries(name) {
    return {
        name: name,
        type: 'bar',
        symbolSize: 8,
        data: [],
        smooth: true,
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    {
                        offset: 0,
                        color: 'rgba(0,0,0,0)', // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,0,0,0.4)', // 100% 处的颜色
                    },
                ],
                global: false,
            },
        },
    };
}
var xarr = [];
let selectedObj = {};
for (var i = 0; i < chartData.length; i++) {
    var item = chartData[i];
    var serie = getSeries(item.seriesName);
    serie.data = item.value;
    serie.barWidth = 20;
    series.push(serie);
    let realtimeArr = [];
    for (var j = 0; j < item.name.length; j++) {
        let realtime = item.name[j];
        realtimeArr.push(realtime);
    }
    xarr = realtimeArr;
}
option = {
    backgroundColor: '#313131',
    title: {
        show: false,
    },
    legend: {
        type: 'scroll',
        right: '60',
        selectedMode: 'single',
        bottom: '3%',
        left: 'left',
        top: 'top',
        inactiveColor: '#666',
        textStyle: {
            color: 'rgba(255,255,255,0.7)',
        },
        selected: selectedObj,
    },
    tooltip: {
        trigger: 'axis',
        show: true,
    },
    toolbox: {
        show: true,
        feature: {
            magicType: {
                type: ['line', 'bar'],
            },
        },
    },
    grid: {
        left: 10,
        right: 10,
        bottom: 0,
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: xarr,
        boundaryGap: true,
        axisTick: {
            show: false,
        },
        axisLine: {
            color: 'rgba(255,255,255,0.6)',
        },
        axisLabel: {
            margin: 30,
            color: 'rgba(255,255,255,0.7)',
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            color: 'rgba(255,255,255,0.6)',
        },
        axisLabel: {
            margin: 30,
            color: 'rgba(255,255,255,0.7)',
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: 'rgba(255,255,255,0.1)',
            },
        },
    },
    series: series,
    color: [
        '#387dff',
        '#ead656',
        '#fe7c4b',
        '#23b899',
        '#9c6cff',
        '#008ca1',
        '#dca111',
        '#00d2ec',
        '#004aa0',
        '#5e42d2',
    ],
};
