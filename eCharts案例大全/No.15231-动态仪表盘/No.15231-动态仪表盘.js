var data = {
    score: 516.5,
    baseInfo: "河南/文科",
    school: [1, 14, 15]
};
var schoolData = data.school;

// 数值动画 CountUp
var countUpOptions = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.'
};
// new CountUp("J_score", 0, data.score, 0, 2.5, countUpOptions).start(function(a, s, f) {
//     $("#J_score").html(data.score);
// });
// new CountUp("J_level0", 0, schoolData[0], 0, 2.5, countUpOptions).start();
// new CountUp("J_level1", 0, schoolData[1], 0, 2.5, countUpOptions).start();
// new CountUp("J_level2", 0, schoolData[2], 0, 2.5, countUpOptions).start();

$(".J_chartClass").html(data.baseInfo);

// 累加器
function getSum(arr) {
    var sum = 0;
    arr.forEach(function(item, index) {
        sum += parseFloat(item);
    });
    return sum;
}

//计算图表数据
function getPieSchoolArr(arr) {
    var array = [];
    var sumNum = getSum(schoolData);
    arr.forEach(function(item, index) {
        array.push(parseFloat(item) / sumNum * 75);
    });
    return array;
}

var pieSchoolArr = getPieSchoolArr(schoolData);
var startAngle = 315; //起始角度
var option = {
    series: [{
        "name": 'noha111',
        "type": 'pie',
        "radius": ['69%', '85%'],
        "avoidLabelOverlap": false,
        "startAngle": startAngle,
        "color": ["#9f8fc1"],
        "hoverAnimation": false,
        "legendHoverLink": false,
        "label": {
            "normal": {
                "show": false,
                "position": 'center'
            },
            "emphasis": {
                "show": false
            }
        },
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "data": [{
            "value": 25,
            itemStyle: {
                normal: {
                    color: "transparent"
                }
            }

        }, {
            "value": pieSchoolArr[0],
            itemStyle: {
                normal: {
                    color: "#fc8249"
                }
            }
        }, {
            "value": pieSchoolArr[1],
            itemStyle: {
                normal: {
                    color: "#a4e83f"
                }
            }
        }, {
            "value": pieSchoolArr[2],
            "name": '4',
            itemStyle: {
                normal: {
                    color: "#ffff50"
                }
            }
        }]
    }, {
        "name": 'noha',
        "type": 'pie',
        "radius": ['63%', '65%'],
        "avoidLabelOverlap": false,
        "startAngle": startAngle,
        "color": ["#9f8fc1"],
        "hoverAnimation": false,
        "legendHoverLink": false,
        "label": {
            "normal": {
                "show": false,
                "position": 'center'
            },
            "emphasis": {
                "show": false
            }
        },
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "data": [{
            "value": 25,
            "name": '1',
            itemStyle: {
                normal: {
                    color: "transparent"
                }
            }
        }, {
            "value": 75,
            "name": '2',
            itemStyle: {
                normal: {
                    color: "#4ac493"
                }
            }
        }]
    }]
};

app.timeTicket = setInterval(function() {
    var ran = Math.random();
    var value1 = parseInt(ran * 75),
        value2 = 75 - value1;
    option.series[0].data[1].value = value1 / 2;
    option.series[0].data[2].value = value1 / 2;
    option.series[0].data[3].value = value2;
    myChart.setOption(option, true);
}, 1000);