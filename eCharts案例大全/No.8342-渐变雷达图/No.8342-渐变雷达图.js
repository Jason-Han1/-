var list = [
    [1, 2, 3, 1, 2, 3, 3], 3, [{
        "name": "工程质量",
        "max": 3,
        color: "#F84C0B"
    }, {
        "name": "运行管理",
        "max": 3,
        color: "#00CF75"
    }, {
        "name": "防洪能力复核",
        "max": 3,
        color: "#0099FF"
    }, {
        "name": "结构安全",
        "max": 3,
        color: "#0099FF"
    }, {
        "name": "渗流安全",
        "max": 3,
        color: "#0099FF"
    }, {
        "name": "抗震安全",
        "max": 3,
        color: "#0099FF"
    }, {
        "name": "金属结构安全",
        "max": 3,
        color: "#0099FF"
    }]
];
var seriesData = list[0];
var maxValue = list[1];
var radarData = list[2];
var background = "#0e2147"; //背景 

var option = {
    title: {
        text: '基础雷达图'
    },

    radar: {
        indicator: radarData,
        center: ['50%', '50%'],
        shape: 'polygon',
        radius: '60%',
        nameGap: 20,
        splitNumber: 3,
        axisLine: {
            lineStyle: {
                color: '#447AB5'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#447AB5'
            }
        },
        splitArea: {
            show:true,
            areaStyle: {
                color: ['rgba(68,122,181,0.7)', 'rgba(68,122,181,0.7)']
            }
        },
        axisLabel: {
            fontSize: 0
        }
    },
    series: [{
        type: 'radar',
        symbolSize: 1,

        lineStyle: {
            normal: {
                color: '#0018ff',
                type: 'solid',
                width: 0
            }
        },
        data: [{
            value: seriesData,
            label: {
                show: false
            },
            areaStyle: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.66,
                    colorStops: [{
                        offset: 0,
                        color: '#F84C0B' // 0% 处的颜色
                    }, {
                        offset: 0.66,
                        color: '#00CF75' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: '#0099FF' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }]
    }]
};