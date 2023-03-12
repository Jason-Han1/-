networkCenterLevel = [{
        "count": 25,
        "label": "中央",
        "value": "1"
    },
    {
        "count": 12,
        "label": "省",
        "value": "2"
    },
    {
        "count": 8,
        "label": "地区",
        "value": "3"
    },
    {
        "count": 3,
        "label": "县",
        "value": "4"
    },
    {
        "count": 2,
        "label": "乡镇",
        "value": "5"
    },
    {
        "count": 2,
        "label": "村",
        "value": "6"
    }
]
const getmydmc = []
const getmyd = []
networkCenterLevel.forEach((item) => {
    getmydmc.push(item.label)
    getmyd.push(item.count)
})

// 计算最大值
function calMax(arr) {
    let max = 0
    arr.forEach((el) => {
        el.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
                if (max < el1) {
                    max = el1
                }
            }
        })
    })
    const maxint = Math.ceil(max / 9.5)
    // 不让最高的值超过最上面的刻度
    const maxval = maxint * 10
    // 让显示的刻度是整数
    return maxval
}

max = Math.ceil(calMax([getmyd]) / 10) * 10

option = {
    tooltip: { // 提示框组件
        trigger: 'axis',
        backgroundColor: '#fff',
        axisPointer: {
            type: 'shadow',
            show: true,
            status: 'shadow',
            z: -1,
            shadowStyle: {
                color: '#DAE7FF',
            },
            label: { // 文字的颜色
                textStyle: {
                    color: '#2A70F1',
                },
            },
        },
        position: function(point, params, dom, rect, size) {
            return [point[0] - 60, point[1] - 80]
        },
        padding: 0,
        enterable: true,
        formatter: function(params) {
            const name = params[0].name
            const acceptNum = params[0].value // 总数
            const res = ' <div class=\'tooltips\' id=\'tooltips\' style=\'position: relative;\n' +
                '        display: inline-block;\n' +
                '        background: #FFFFFF;\n' +
                '        box-shadow: 0 -3px 10px 0 rgba(206,211,212,0.45), 2px 10px 13px 0 rgba(0,0,0,0.04);\n' +
                '        padding: 0.1rem 0.2rem;\n' +
                '        border-radius: 0.04rem;\'>' +
                '<div class=\'\' style=\'opacity: 0.7;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.14rem;\n' +
                '        color: #222222;\n' +
                '        padding: 0 0 0.05rem 0;\'>' + name + '</div>' +
                '<div class=\'\' style=\'color: #2A70F1;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.13rem;\'>' + '总数' + '：' + acceptNum + '</div>' +

                '<div class=\'\' style=\'width: 0;\n' +
                '        height: 0;\n' +
                '        border-left: 7px solid transparent;\n' +
                '        border-right: 7px solid transparent;\n' +
                '        border-top: 7px solid #ffffff;\n' +
                '        position: absolute;\n' +
                '        left: 42%;\n' +
                '        bottom: -11%;\'></div>' +
                '</div>'
            return res
        },
        textStyle: {
            color: '#222',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 13,
        },
    },
    grid: {
        left: 10,
        right: 10,
        bottom: 0,
        top: 60,
        containLabel: true,
    },
    xAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: { // 坐标轴刻度标签的相关设置。
            // interval: 1, // 设置为 1，表示『隔一个标签显示一个标签』
            rotate: 30,
            textStyle: {
                color: '#AAAAAA',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            },
        },
        axisTick: { // 坐标轴刻度相关设置。
            show: false,
        },
        axisLine: { // 坐标轴轴线相关设置
            lineStyle: {
                color: '#03286E',
                opacity: 0.3,
            },
        },
        splitLine: { // 坐标轴在 grid 区域中的分隔线。
            show: false,
        },
        data: getmydmc,
    }],
    yAxis: [{
        type: 'value',
        name: '（个）',
        nameTextStyle: { // 单位字体样式设置
            color: 'rgba(34,34,34,0.5)',
            fontSize: 14,
            padding: [3, 0, 5, -29],
        },
        axisLabel: {
            margin: 5,
            color: 'rgba(34,34,34,0.5)',
            textStyle: {
                fontSize: '13',
            },
        },
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#e1e8ec',
            },
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    }],
    dataZoom: [{
            type: 'inside',
            show: true,
        },
        {
            show: true,
            height: 5,
            xAxisIndex: [0],
            bottom: 15,
            right: 10,
            left: 20,
            startValue: 0,
            endValue: 8,
            handleSize: '100%',
            handleStyle: {
                color: 'transparent',
            },
            backgroundColor: 'transparent',
            fillerColor: 'transparent',
            dataBackground: {
                lineStyle: {
                    color: 'transparent',
                },
                areaStyle: {
                    color: 'transparent',
                },
            },
            borderColor: 'transparent',
        }
    ],
    series: [{
        name: '值',
        type: 'bar',
        zlevel: 1,
        xAxisIndex: 0,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: '#5273DE',
                }, {
                    offset: 0,
                    color: 'rgba(90, 115, 244, 0.71)',
                }], false),
            },
        },
        barWidth: 10,
        data: getmyd,
    }],
};