option = {
    title: {
        text: '单条柱状图测试',
        subtext: '单条柱状图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['测试']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: getDateArr(14)
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '数据',
        type: 'bar',
        data: getRndArr(14),
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }]
};

// 获取日期集合
function getDateArr(day) {
    dateArr = [];
    for (i = 0; i < day; i++) {
        dateArr.unshift(getDay(-i))
    }
    return dateArr;
}

// 获取日期
function getDay(day) {
    var today = new Date();
    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);
    return tMonth + "-" + tDate;
}

// 日期补0
function doHandleMonth(month) {
    var m = month;
    if (month.toString().length == 1) {
        m = "0" + month;
    }
    return m;
}

// 获取随机数集合
function getRndArr(day) {
    dateArr = [];
    for (i = 0; i < day; i++) {
        dateArr.unshift(RndNum(3))
    }
    return dateArr;
}

//产生随机数函数
function RndNum(n) {
    var rnd = "";
    for (var i = 0; i < n; i++)
        rnd += Math.floor(Math.random() * 10);
    return rnd;
}