var getValue = [219, 241, 174, 44, 435, 617];
var getName = ['总培训', '标准规范培训', '行业管理办法培训', '继续教育培训', '专业培训', '其他培训'];
var max = Math.max.apply(null, getValue);
var getMax = [];
for (i = 0; i < getName.length; i++) {
    getMax.push(max);
}

option = {
    backgroundColor: '#030A41',
    grid: {
        left: '8%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true,
    },
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
    yAxis: [
        {
            type: 'category',
            inverse: true,
            offset: 100,

            axisLabel: {
                show: true,
                align: 'left',
                textStyle: {
                    color: '#66cc00',
                },
                formatter: function (value, index) {
                    str = '{title|' + value + '}';
                    return str;
                },
                rich: {
                    title: {
                        color: '#64BDFF',
                        fontSize: 12,
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
            data: getName,
        },
        {
            type: 'category',
            inverse: true,
            offset: -50,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                },
                formatter: function (value, index) {
                    str = '{title|' + value + '次}';
                    return str;
                },
                rich: {
                    title: {
                        color: '#fff',
                        fontSize: 12,
                    },
                },
            },
            data: getValue,
        },
    ],
    series: [
        {
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    //     {
                    //         offset: 0,
                    //         color: '#B3F3FF',
                    //     },
                    //     {
                    //         offset: 1,
                    //         color: '#1DB9FF',
                    //     },
                    // ]),
                    color: (params) => {
                        // build a color map as your need.
                        //定义一个颜色集合
                        var colorList = ['#0080FF', '#ffcb48', '#12c9fe', '#1DB9FF'];
                        var colorList2 = ['#FFD4FF', '#ff900e', '#0599de', '#B3F3FF'];
                        //对每个bar显示一种颜色
                        var idx = params.dataIndex < 1 ? params.dataIndex : 3;
                        var colorS = colorList[idx];
                        var colorS2 = colorList2[idx];
                        return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            { offset: 0, color: colorS },
                            { offset: 1, color: colorS2 },
                        ]);
                    },
                },
            },
            barWidth: 20,
            data: getValue,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: getMax,
            itemStyle: {
                normal: {
                    color: '#334F78',
                    barBorderRadius: 30,
                },
            },
        },
    ],
};
