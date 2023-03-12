// 颜色设置
var backgroundColor = '#021547';
var fontColor = '#B3B3B3';
var lineColor = 'rgba(50, 68, 73, 1)';
var color4 = ['#7EE1DE', '#4F6EE0', '#7870C5', '#2F8973', '#27AE60', '#4FB9FF', '#DAB772'];
var color6 = ['#59E1FF', '#0B1B27', '#193A4D', '#0B1B27'];
var upImg = "/asset/get/s/data-1603518592129-n8znKjxq4.png";
var downImg = "/asset/get/s/data-1603518596377-RnJ6_xbsf.png";

var result = {
    "delayTotalNum": 1000,
    "delayAveTime": 50,
    "pieData": [36, 28, 15, 17, 9],
    "prepieData": [40, 45, 13, 11, 9],
    "time": [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23"
    ],
    "delayNum": [
        70,
        60,
        20,
        15,
        12,
        20,
        40,
        180,
        190,
        230,
        320,
        270,
        330,
        200,
        157,
        408,
        500,
        530,
        610,
        600,
        567,
        300,
        204,
        100
    ],
    "delayTime": [
        170,
        160,
        120,
        115,
        112,
        120,
        140,
        1180,
        1190,
        1230,
        1320,
        1270,
        1330,
        1200,
        1157,
        1408,
        1500,
        1530,
        1610,
        1600,
        1567,
        1300,
        1204,
        1100
    ]
};
var val = result.pieData[0];

var timeList = deepCopy(result.time);
timeList.push('00');

function deepCopy(o) {
    if (o instanceof Array) {
        var n = [];
        for (var i = 0; i < o.length; ++i) {
            n[i] = deepCopy(o[i]);
        }
        return n;

    } else if (o instanceof Object) {
        var n = {};
        for (var i in o) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    } else {
        return o;
    }
}

option = {
    backgroundColor: backgroundColor,
    color: color6,
    textStyle: {
        fontSize: 14,
        color: '#3FDBFF',
        fontFamily: '苹方-简'
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '5',
        bottom: '5',
        containLabel: false
    },
    series: [{
            type: 'pie',
            radius: [50, 60],
            startAngle: 360,
            label: {
                show: true,
                position: 'center',
                formatter: function(param) {
                    var minus = Number(val) - Number(result.prepieData[0]);
                    return '{normal|' + val + '%}\n{level|' + '' + '}\n' + (minus > 0 ? '{upImg|' + '' + '}{up|' + minus + '%}' : (minus < 0 ? '{downImg|' + '' + '}{down|' + Math.abs(minus) + '%}' : '{evelx|-}'));
                },
                rich: {
                    normal: {
                        fontSize: 18,
                        height: 25
                    },
                    up: {
                        color: '#FFAB3F',
                        height: 25,
                        padding: [-5, 0, 0, 2]
                    },
                    down: {
                        height: 25,
                        padding: [-5, 0, 0, 2]
                    },
                    evelx: {
                        height: 25,
                        padding: [-5, 0, 0, 2]
                    },
                    level: {
                        borderColor: 'rgba(58, 153, 175, 1)',
                        borderWidth: 0.35,
                        width: 40,
                        height: 0.7
                    },
                    upImg: {
                        backgroundColor: {
                            image: upImg
                        },
                        height: 15,
                        width: 10,
                        borderWidth: 0,
                        padding: [-5, 0, 5, 0]
                    },
                    downImg: {
                        backgroundColor: {
                            image: downImg
                        },
                        height: 15,
                        width: 10,
                        borderWidth: 0,
                        padding: [-5, 0, 5, 0]
                    }
                }
            },
            labelLine: {
                show: false
            },
            hoverAnimation: false,
            data: [{
                    value: val,
                    itemStyle: {
                        color: color6[0]
                    }
                },
                {
                    value: 100 - Number(val),
                    itemStyle: {
                        color: color6[1]
                    }
                }
            ]
        },
        {
            type: 'pie',
            radius: [37, 47],
            startAngle: 360,
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            hoverAnimation: false,
            data: [{
                    value: result.prepieData[0],
                    itemStyle: {
                        color: color6[2]
                    }
                },
                {
                    value: 100 - Number(result.prepieData[0]),
                    itemStyle: {
                        color: color6[3]
                    }
                }
            ]
        }
    ]
};