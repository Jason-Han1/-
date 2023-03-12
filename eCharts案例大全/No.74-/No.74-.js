var yData = [
    '浙江省档案馆',
    '杭州市档案馆',
    '宁波市档案馆',
    '温州市档案馆',
    '嘉兴市档案馆',
    '湖州市档案馆',
    '绍兴市档案馆',
    '金华市档案馆',
    '丽水市档案馆',
    '舟山市档案馆',
];
var data = ['2000', '1800', '1600', '1000', '800', '600', '400', '300', '200', '200'];
data.sort((a, b) => b - a);
var max = Math.max.apply(null, data);
var getMax = [];
for (let i = 0; i < yData.length; i++) {
    getMax.push(max);
}

option = {
    backgroundColor: '#0b1751',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return params[0].name + ' : ' + params[0].value;
        },
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    grid: {
        right: '12%',
        left: '20%',
        top: '4%',
        bottom: '1%',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            offset: 120,
            axisLabel: {
                show: true,
                align: 'left',
                textStyle: {
                    color: '#fff',
                    fontSize: '14',
                },
                formatter: function (value, index) {
                    var num = '';
                    var str = '';
                    num = index + 1;
                    if (index === 0) {
                        str = '{no1|' + '} {num1|' + num + '} {title1| ' + value + '}';
                    } else if (index === 1) {
                        str = '{no2|' + '} {num2|' + num + '} {title2| ' + value + '}';
                    } else if (index === 2) {
                        str = '{no3|' + '} {num3|' + num + '} {title3| ' + value + '}';
                    } else {
                        str = ' {num|' + num + '} {title| ' + value + '}';
                    }
                    return str;
                },
                rich: {
                    num: {
                        color: '#387ec1',
                        backgroundColor: '#112b67',
                        width: 10,
                        height: 10,
                        fontSize: 14,
                        padding: [6, 5, 3, 5],
                        align: 'center',
                        shadowColor: '#3374ba',
                        borderColor: '#3374ba',
                        borderWidth: 1,
                    },
                    num1: {
                        color: '#51aff8',
                        backgroundColor: '#112b67',
                        width: 10,
                        height: 10,
                        fontSize: 14,
                        padding: [7, 5, 3, 5],
                        align: 'center',
                        shadowColor: '#4db2ff',
                        borderColor: '#4db2ff',
                        borderWidth: 1,
                    },
                    num2: {
                        color: '#51aff8',
                        backgroundColor: '#112b67',
                        width: 10,
                        height: 10,
                        fontSize: 14,
                        padding: [7, 5, 3, 5],
                        align: 'center',
                        shadowColor: '#4db2ff',
                        borderColor: '#4db2ff',
                        borderWidth: 1,
                    },
                    num3: {
                        color: '#51aff8',
                        backgroundColor: '#112b67',
                        width: 10,
                        height: 10,
                        fontSize: 14,
                        padding: [7, 5, 3, 5],
                        align: 'center',
                        shadowColor: '#4db2ff',
                        borderColor: '#4db2ff',
                        borderWidth: 1,
                    },
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: yData,
        },
        {
            type: 'category',
            inverse: true,
            offset: 0,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: '14',
                },
            },
            data: data,
        },
    ],
    series: [
        {
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    // barBorderRadius: 30,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'transparent', //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: '#00d0ff', //  100%  处的颜色
                            },
                        ],
                        global: false, //  缺省为  false
                    },
                },
            },
            barWidth: 20,
            data: data,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: getMax,
            itemStyle: {
                color: '#152448',
                // barBorderRadius: 30,
            },
        },
    ],
};
