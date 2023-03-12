var list = [{
    "count": 3,
    "province": "北京"
}, {
    "count": 10,
    "province": "天津"
}, {
    "count": 60,
    "province": "河北"
}];

function min(array) {
    var min = array[0];
    var len = array.length;
    for (var i = 1; i < len; i++) {
        if ((array[i] && array[i] < min) || array[i] == 0 && array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function max(array) {
    var max = array[0];
    var len = array.length;
    for (var i = 0; i < len; i++) {
        if ((array[i] && array[i] > max) || array[i] == 0 && array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
var xAxis = new Array();
var data = new Array();
list.forEach((value, index, arr) => {
    xAxis.push(value.province);
    data.push(value.count);
})

var minarr = Number(min(data)),
    maxarr = Number(max(data)),
    min, max;
min = minarr / 1.2, max = maxarr * 1.2;
/**
 * 柱状图比例
 * @param count
 * @returns {string}
 */
function percent(count) {
    var a = (count / 100) * 4 * 100;
    return a.toFixed(0) + "%";
}
var name = "数量";

var barWidth = percent(xAxis.length);
option = {
    backgroundColor: "#000C3B",
    color: ['#38b3f1'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    textStyle: {
        color: '#ccc'
    },
    grid: {
        top: '10%',
        left: '3%',
        right: '3%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#83c7e3'
            }
        },
        //	data: xAxis
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#83c7e3'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        },

        min: min.toFixed(0) < 10 ? 0 : min.toFixed(0),
        max: max.toFixed(0) < 10 ? 10 : max.toFixed(0)
    }],
    series: [{
        name: name,
        type: 'bar',
        barWidth: barWidth,
        data: [3]
    }]
};