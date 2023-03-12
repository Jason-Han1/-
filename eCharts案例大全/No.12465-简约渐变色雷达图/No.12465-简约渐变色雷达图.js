var list = [
    [20, 80, 30, 65, 70, 75, 55, 65], 100, [{
        "name": "小张",
        "max": 100
    }, {
        "name": "小王",
        "max": 100
    }, {
        "name": "小李",
        "max": 100
    }, {
        "name": "小赵",
        "max": 100
    }, {
        "name": "小高",
        "max": 100
    }, {
        "name": "小明",
        "max": 100
    }, {
        "name": "小于",
        "max": 100
    }, {
        "name": "小刘",
        "max": 100
    }]
];
var seriesData = list[0];
var maxValue = list[1];
var radarData = list[2];
var background = "#0e2147"; //背景 

var option = {
    backgroundColor: background,
    radar: [{
        indicator: radarData,
        center: ['50%', '50%'],
        shape: 'polygon',
        radius: '60%',
        nameGap: 5,
        axisLine: {
            lineStyle: {
                color: '#FFFFFF'
            }
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        }
    }],
    series: [{
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                    [{
                        offset: 0,
                        color: '#06d3d8'
                    }, {
                        offset: 1,
                        color: '#0018ff'
                    }], false)
            }
        },
        lineStyle: {
            normal: {
                color: '#0018ff',
                type: 'solid',
                width: 1
            }
        },
        data: [{
            value: seriesData,
            label: {
                show: 'true'
            }
        }]
    }]
};