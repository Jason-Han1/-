// 颜色设置
var backgroundColor = '#021547';
var fontColor = '#B3B3B3';
var color3 = ['#24B2D1'];

var g_airport = "ZBAD,ZSHC,ZUCK,ZLXY,ZPPP,ZGSZ,ZUUU,ZGGG,ZSPD,ZBAA";
var positionLeft = 23;

var result = {
    "ZBAD": "84",
    "ZSHC": "76",
    "ZUCK": "91",
    "ZLXY": "82",
    "ZPPP": "70",
    "ZGSZ": "79",
    "ZUUU": "88",
    "ZGGG": "75",
    "ZSPD": "80.64",
    "ZBAA": "95"
};

var airportList = g_airport.split(",");
var seriesData = [];
var vdata = [];

$.each(airportList, function(i, val) {
    seriesData.push(result[val] == undefined ? 0 : result[val]);
});

$.each(seriesData, function(idx, valx) {
    vdata.push({
        value: valx,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                offset: 0,
                color: Number(valx) < 50 ? 'rgba(255, 25, 25, 1)' : (Number(valx) > 70 ? 'rgba(55, 201, 255, 1)' : 'rgba(255, 150, 37, 1)') // 顶端处的颜色
            }, {
                offset: 0.9,
                color: 'rgba(20, 24, 58, 0.5)' // 底端处的颜色
            }], false),
            borderColor: Number(valx) < 50 ? 'rgba(242, 96, 57, 1)' : (Number(valx) > 70 ? 'rgba(57, 205, 242, 1)' : 'rgba(251, 230, 54, 1)')
        }
    });
});

option = {
    backgroundColor: backgroundColor,
    color: color3,
    textStyle: {
        fontSize: 17,
        color: fontColor
    },
    grid: {
        left: '3%',
        top: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: false
    },
    xAxis: {
        show: false
    },
    yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                inside: true,
                align: 'left',
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 16
                }
            },
            z: 10,
            data: ['大兴机场', '萧山机场', '江北机场', '咸阳机场', '长水机场', '宝安机场', '双流机场', '白云机场', '浦东机场', '首都机场']
        },
        {
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                inside: true,
                align: 'right',
                formatter: function(param) {
                    var data = Number(param);
                    return data < 50 ? '{redColor|' + data + '%' + '}' : (data > 70 ? '{normal|' + data + '%' + '}' : '{orangeColor|' + data + '%' + '}');
                },
                rich: {
                    normal: {
                        color: '#2DC5FE'
                    },
                    redColor: {
                        color: 'rgba(188,27,65,1)'
                    },
                    orangeColor: {
                        color: 'rgba(255,182,54,1)'
                    }
                }
            },
            z: 10,
            data: seriesData
        },
        {
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: []
        }
    ],
    series: [{
            type: 'bar',
            name: '间距',
            barWidth: 15,
            stack: 'a',
            legendHoverLink: false,
            itemStyle: {
                color: 'rgba(0,0,0,0)'
            },
            z: 3,
            data: new Array(10).fill(positionLeft)
        },
        {
            name: '条',
            type: 'bar',
            stack: 'a',
            data: vdata,
            label: {
                show: false
            },
            barWidth: 15,
            itemStyle: {
                barBorderRadius: [0, 30, 30, 0],
                borderWidth: 0.3
            },
            z: 3
        },
        {
            name: '底框透明',
            type: 'bar',
            stack: 'b',
            barGap: '-100%',
            data: new Array(10).fill(positionLeft),
            label: {
                show: false
            },
            barWidth: 15,
            itemStyle: {
                color: 'rgba(0,0,0,0)'
            },
            z: 2
        },
        {
            name: '底框',
            type: 'bar',
            stack: 'b',
            barGap: '-100%',
            data: new Array(10).fill(100),
            label: {
                show: false
            },
            barWidth: 15,
            itemStyle: {
                color: '#121439'
            },
            z: 2
        },
        {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: new Array(10).fill(150),
            barWidth: 40,
            itemStyle: {
                color: '#0E0B26',
                barBorderRadius: [10, 0, 0, 0]
            },
            z: 1
        },
        {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: new Array(10).fill(150),
            barWidth: 40,
            itemStyle: {
                color: 'rgba(49,214,255,1)',
                borderColor: 'rgba(49,214,255,0.3)'
            },
            z: 0
        }
    ]
};