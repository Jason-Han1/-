// 双Y轴，分割线不一致问题,且每个刻度都是非零散数值

var series = [{
        name: '直接访问',
        type: 'bar',
        stack: '总量',
        label: {
            show: true,
            position: 'insideRight'
        },
        data: [2, 2, 2, 2, 2, 2, 1]
    },
    {
        name: '邮件营销',
        type: 'bar',
        stack: '总量',
        label: {
            show: true,
            position: 'insideRight'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
        name: '联盟广告',
        type: 'bar',
        stack: '总量',
        label: {
            show: true,
            position: 'insideRight'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
        name: '视频广告',
        type: 'bar',
        stack: '总量',
        label: {
            show: true,
            position: 'insideRight'
        },
        data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
        name: '搜索引擎',
        type: 'bar',
        stack: '总量',
        label: {
            show: true,
            position: 'insideRight'
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
    },
    {
        name: '转化率',
        type: 'line',
        data: [90, 60, 80, 30, 15, 68, 77],
        yAxisIndex: 1
    }
]

function getSeriesItemMax(array) {
    console.log(array)
    var res = [];
    array.forEach((item) => {
        item.forEach((i, idx) => {
            if (!res[idx]) {
                if (isNaN(i / 1)) {
                    res[idx] = 0
                } else {
                    res[idx] = i / 1
                }
            } else {
                if (isNaN(i / 1)) {
                    res[idx] += 0
                } else {
                    res[idx] += i / 1
                }
            }
        })
    });
    return Math.max.apply(null, res)
}


// 刻度最大值
function yAxisMax(maxValue) {
    if (isNaN(maxValue / 1) || maxValue / 1 < 10) {
        return 10
    }
    const max = Math.ceil(maxValue) + '';
    const itemValue = Math.ceil(max / 5) + '';
    const mins = Math.ceil((itemValue / Math.pow(10, itemValue.length - 1)))
    const item = mins * Math.pow(10, itemValue.length - 1) + '';
    // item 需要是5的整数倍
    const res = Math.ceil(item / 5) * 5 * 5;
    return res
}




var y1DataList = [];
var y2DataList = []

series.forEach((item) => {
    if (item.type === 'bar') {
        y1DataList.push(item.data)
    } else if (item.type === 'line') {
        y2DataList.push(item.data)
    }
})

var y1MaxValue = getSeriesItemMax(y1DataList) // 柱状图最大值
var y2MaxValue = getSeriesItemMax(y2DataList) // 折线图最大值

var y1Max = yAxisMax(y1MaxValue);
var y2Max = yAxisMax(y2MaxValue);

var yAxis = [{
    type: 'value',
    min: 0,
    max: y1Max,
    splitNumber: 5,
    interval: y1Max / 5

}, {
    type: 'value',
    splitNumber: 5,
    min: 0,
    max: y2Max,
    interval: y2Max / 5,
    axisLabel: {
        formatter: '{value}%'
    }
}]


option = {
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

    },
    tooltip: {
        trigger: 'item'
    },
    yAxis: yAxis,
    series: series
};