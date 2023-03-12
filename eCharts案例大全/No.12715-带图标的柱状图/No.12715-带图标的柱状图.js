var china = "image:///asset/get/s/data-1544512860249-jhLmLqJBi.png";

var xianggang = "image:///asset/get/s/data-1544512856326-WqkOSJVhO.png";

var america = "image:///asset/get/s/data-1544512851819-OI3g2Tb7t.png";
// var china = 'image://img/external_attack/china.png';
// var america = 'image://img/external_attack/america.png';
// var xianggang = 'image://img/external_attack/aomen.png';
//攻击来源，全世界，最后一小屏的第一屏
var myBarColor = ["#21b4f6", "#fba790", '#39cad4'];
var _should = [3211, 112, 38];
var _shouldPrev = [38, 112, 3211];
var _actual = [50, 100, 100];
//	var maxArr = [100, 100, 100]
var colorArr = [new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
        offset: 1,
        color: '#51ebb3'
    }, {
        offset: 0,
        color: '#9dfeda'
    }]),
    new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
        offset: 1,
        color: '#c1fc7f'
    }, {
        offset: 0,
        color: '#cff4ac'
    }]),
    new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
        offset: 1,
        color: '#dfc328'
    }, {
        offset: 0,
        color: '#f1ea72'
    }]),
    new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
        offset: 1,
        color: '#f67f4a'
    }, {
        offset: 0,
        color: '#fcc27e'
    }]),
    new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
        offset: 1,
        color: '#ff6a5d'
    }, {
        offset: 0,
        color: '#fe8d82'
    }])
];

//	var myBarColor = ["#c78148","#84e2a6","#8bb5ee","#23ddd7","#40b2f6"];
// 指定图表的配置项和数据
var option = {
    backgroundColor:"#013954",
    grid: {
        top: '21%',
        left: '25%',
        right: '10%',
        bottom: '32%',
    },
    yAxis: {
        data: ['江苏', '香港', '北京', '美国', '广东'],
        offset: 5,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16
        }
    },
    xAxis: {
        min: 0,
        max: 100,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'right',
                fontSize: 18,
                color: "#fff"
            }
        },
        itemStyle: {
            normal: {
                color: function(params) {
                    var num = colorArr.length;
                    return colorArr[params.dataIndex % num];
                }
            }
        },
        barWidth: '40%',
        data: [30, 40, 60, 70, 100],
        z: 10
    }, {
        name: 'glyph',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'start',
        symbolSize: [32, 23],
        symbolOffset: ['-250%', 0],
        data: [{
            value: 100,
            symbol: china,
        }, {
            value: 100,
            symbol: xianggang,
        }, {
            value: 100,
            symbol: china,
        }, {
            value: 100,
            symbol: america,
        }, {
            value: 100,
            symbol: china,
        }]
    }]
};