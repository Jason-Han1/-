var salvProName = ['专任教师', '管理职员', '教辅人员', '工勤人员', '附校人员'];
var salvProValue = [63, 50, 42, 51, 32];
var salvProMax = [125, 125, 125, 125, 125]; //背景按最大值
for (var i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0]);
}
option = {
    grid: {
        left: '2%',
        right: '20%',
        bottom: '50%',
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
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000',
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
            data: salvProName,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true, // 显示右侧的文字
            axisLabel: {
                formatter:'{value}人',
                textStyle: {
                    color: '#818181',
                    fontSize: '12',
                },
            },
            data: salvProValue,
        },
    ],
    series: [
        {
            name: '蓝色进度条',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#3f9bee',
                        },
                        {
                            offset: 1,
                            color: '#4da4f3',
                        },
                    ]),
                },
            },
            barWidth: 20,
            data: salvProValue,
            label: {
                normal: {
                    show: true,
                    formatter:'{@salvProValue}%',
                    position: 'right',
                    textStyle: {
                        color: '#4b78a9',
                        fontSize: '16',

                    }
                }
            },
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
                normal: {
                    color: '#cae4fb',
                    barBorderRadius: 5,
                },
            },
            // label:{
            //     distance: 10,
            // }
        },
    ],
};
