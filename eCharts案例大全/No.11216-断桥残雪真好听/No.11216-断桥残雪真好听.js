var positive = [
    { name: '校园文明班级', value: 12},
    { name: '洁净班级', value: 18},
    { name: '好人好事', value: 6},
    { name: '担任学校学生会干部', value: 3},
    { name: '年段竞赛', value: 1},
];

var yData = [], seriesData = [];
positive.map(function(item) {
    yData.push(item.name);
    seriesData.push(item.value);
})

option = {
    backgroundColor: '#0e4b86',
    color: ['#FF5252'],
    title: {
        text: '负向考评行为（前五名）',
        top: 15,
        right: '9%',
        textStyle: {
            color: '#52FFFF',
            fontSize: 16,
            fontWeight: 'bold'
        }
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: "none" // shadow
        },
        textStyle: {
            fontSize: 16
        },
        formatter: function(e) {
            var v = e[0];
            return v.marker + v.name + '：' + v.value + ' 次';
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '3%',
        height: '90%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        inverse: true, // 水平翻转(左侧靠齐转为右侧靠齐)
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        inverse: true, // 是否反向坐标
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: yData
    },
    series: [seriesFn(1), seriesFn(0, '{b}')]
};

/**
 * @param {Boolean} bool
 * @param {String | 不传} forma
 * @returns Object
 */
function seriesFn(bool, forma) {
    var obj = {
        name: '正向考评',
        type: 'bar',
        label: {
            show: true,
            color: '#fff',
            fontSize: 14,
            formatter: forma || '{c}次'
        },
        barWidth: 20, // 柱宽度
        itemStyle: {
            normal: {
                barBorderRadius: [15, 0, 0, 15],
                borderWidth: 0
            }
        },
        data: seriesData
    }
    if (bool) {
        obj.label.position = 'left'; // 数值位置
        obj.label.distance = 10 // 数值跟柱子之间的间距
    } else {
        obj.label.align = 'right';
        obj.label.padding = [0, 10, 50, 0];
        obj.label.position = 'right';
        obj.barGap = '-100%' // 设置重叠
        obj.borderColor = 'rgba(255,255,255, 0)'
    }
    return obj;
}