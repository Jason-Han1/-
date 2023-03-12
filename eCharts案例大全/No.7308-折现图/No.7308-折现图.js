function min(array) {
    var min = array[0];
    var len = array.length;
    for (var i = 1; i < len; i++) {
        if ((array[i] && array[i] < min) || (array[i] == 0 && array[i] < min)) {
            min = array[i];
        }
    }
    return min;
}

function max(array) {
    var max = array[0];
    var len = array.length;
    for (var i = 0; i < len; i++) {
        if ((array[i] && array[i] > max) || (array[i] == 0 && array[i] > max)) {
            max = array[i];
        }
    }
    return max;
}

function percent(count) {
    var a = (count / 100) * 2 * 100;
    return a.toFixed(0) + '%';
}

var data = {
    text: '综评 (分)',
    xAxis: [
        '2019-01',
        '2019-02',
        '2019-03',
        '2019-04',
        '2019-05',
        '2019-06',
        '2019-07',
        '2019-08',
        '2019-09',
        '2019-10',
        '2019-11',
        '2019-12',
    ],
    data: [81, 88, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

var minarr = Number(min(data.data)),
    maxarr = Number(max(data.data)),
    min,
    max;
(min = minarr / 1.5), (max = maxarr * 1.2);

// 如果数据条数为1个，坐标标记出来，否则看不见
var siglePoint = {};
if (data.xAxis.length == 1) {
    siglePoint = {
        data: [
            {
                value: data.data[0].value || data.data[0],
                xAxis: data.xAxis[0],
                yAxis: data.data[0].value || data.data[0],
            },
        ],
    };
}

option = {
    backgroundColor: '#22252D',
    title: {
        text: '患者数量',
        textStyle: {
            color: '#FFFFFF',
            fontSize: 12,
            fontWeight: 'normal',
        },
        top: '2%',
        left: '3%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#999999',
            },
        },
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 10,
        data: ['新增'],
        right: '10px',
        top: '0px',
        show: false,
        textStyle: {
            fontSize: 12,
            color: '#fff',
        },
    },
    grid: {
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '6%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#999999',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#999999',
                },
            },
            data: data.xAxis,
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#34373E',
                },
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 12,
                },
                textStyle: {
                    color: '#999999',
                },
                formatter: '{value}',
            },
            splitLine: {
                lineStyle: {
                    color: '#34373E',
                },
            },
            min: min.toFixed(0) < 10 ? 0 : min.toFixed(0),
            max: max.toFixed(0) < 10 ? 10 : max.toFixed(0),
        },
    ],
    series: [
        {
            name: '新增',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 3,
                },
            },
            yAxisIndex: 0,
            symbolSize: 10,
            symbol: 'circle',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0.5,
                                color: 'rgba(0, 166, 255, 0.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0, 166, 255, 0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10,
                },
            },
            itemStyle: {
                normal: {
                    color: '#00A0FF',
                },
            },
            markPoint: siglePoint,
            data: data.data,
        },
    ],
};
