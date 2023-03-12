var labelData = ['学分过低', '出勤率过低', '挂科', '绩点过低', '考试违纪'];
var womanData = [85, 188, 138, 111,21];
var manData = [-51, -168, -147, -131,-19];
var seriescolor = ['#4B96F3', '#fec87f'];
option = {
    legend: {
        data: ['男生', '女生'],
        type: 'scroll',
        //icon: 'ret',
        height: '88%',
        right: '20',
        top: '10',
        itemGap: 25,
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
            fontSize: '14',
            color: '#999',
        },
    },
    tooltip: {
        trigger: 'axis',
        extraCssText:
            'padding-left:8px;line-height:25px;width:170px;height:60px;background:rgba(0,0,0,0.7);border-radius:6px;',
        axisPointer: {
            type: 'none',
        },
        textStyle: {
            fontSize: '14',
            color: '#fff',
        },
        formatter: function (params) {
            var str = ''; //声明一个变量用来存储数据
            str += '<div>' + params[0].name + '</div>';
            for (var i = 0; i < params.length; i++) {
                if (params[i].seriesName == '男生') {
                    str +=
                        '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' +
                        seriescolor[0] +
                        ';"></span>' +
                        params[i].seriesName +
                        '</span> : <span>' +
                        -params[i].value +
                        '人</br>';
                } else if (params[i].seriesName == '女生') {
                    str +=
                        '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' +
                        seriescolor[1] +
                        ';"></span>' +
                        params[i].seriesName +
                        '</span> : <span>' +
                        params[i].value +
                        '人</br>';
                }
            }
            return str;
        },
    },
    xAxis: [
        {
            type: 'value',
            gridIndex: 0,
            axisTick: {
                show: false,
                inside: false,
            },
            axisLabel: {
                show: true,
                // 修改x轴上面显示为负数的刻度标签
                formatter: (value) => {
                    // 负数取反 显示的就是正数了
                    if (value < 0) return -value;
                    else return value;
                },
            },
            axisLine: {
                // x轴轴线样式
                show: false,
                lineStyle: {
                    color: '#000',
                },
            },
            // 显示x轴的分割线
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#cedbe9',
                    type: 'dashed',
                },
            },
        },
        {
            type: 'value',
            gridIndex: 1,
            axisTick: {
                show: false,
            }, //是否显示刻度
            axisLabel: {
                show: true, //是否显示X轴内容
            },
            axisLine: {
                // x轴轴线样式
                show: false, // 是否显示X轴
                lineStyle: {
                    color: '#000',
                },
            },
            // 显示x轴的分割线
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#cedbe9',
                    type: 'dashed',
                },
            },
        }, {
        type: 'value',
        gridIndex: 2,
        axisTick: {
            show: false
        }, //是否显示刻度
        axisLine: { // Y轴轴线样式
            show: false, // 是否显示X轴
            lineStyle: {
                color: '#000',
            }
        },
        axisLabel: {
            show: false //是否显示X轴内容
        },
        splitLine: {
            show: false
        }
    }
    ],
    yAxis: [
        {
            type: 'category',
            gridIndex: 0,
            inverse: true,
            height: '20%',
            data: labelData,
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisLine: {
                // Y轴轴线样式
                show: false,
                // lineStyle: {
                //     color: '#D9D9D9',
                // },
            },
        },
        {
            type: 'category',
            gridIndex: 1,
            inverse: true,
            data: labelData,
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false, //是否显示轴线
            },
        },
        {
            type: 'category',
            gridIndex: 2,
            inverse: true,
            data: labelData,
            position: 'left',
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#666',
                textStyle: {
                    fontSize: 14,
                },
            },
            axisLine: {
                show: false, //是否显示轴线
            },
        },
    ],
    grid: [
        {
            top: 50,
            width: '34%',
            // 定义柱状图摆放的高度
            height: '20%',
            left: '10%',
            bottom: 30,
        },
        {
            top: 50,
            width: '34%',
            height: '20%',
            right: '10%',
            bottom: 30,
        },
        {
            top: 50,
            height: '20%',
            left: '52%',
            bottom: 30,
        },
    ],
    color: ['#2FACFA', '#F5A623'],
    series: [
        {
            name: '男生',
            type: 'bar',
            barWidth: '14',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [
                            {
                                offset: 0,
                                color: '#5ccdff',
                            },
                            {
                                offset: 1,
                                color: '#53a7fc',
                            },
                        ],
                        false
                    ),
                    barBorderRadius: [6, 0, 0, 6],
                    label: {
                        show: true,
                        position: 'left',
                        formatter: (value) => {
                            // 值都是负数的 所以需要取反一下
                            return -value.data;
                        },
                        // formatter: function(params) {
                        //     return (params.value * -1);
                        // },
                        textStyle: {
                            fontSize: 14,
                            color: '#666',
                        },
                    },
                },
            },
            data: manData,
        },
        {
            name: '女生',
            type: 'bar',
            barWidth: '14',
            // 不同系列柱子之间的距离
            // barGap: '0%',
            // barCategoryGap : '100%',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(
                        1,
                        0,
                        0,
                        0,
                        [
                            {
                                offset: 0,
                                color: '#fecb84',
                            },
                            {
                                offset: 1,
                                color: '#febe71',
                            },
                        ],
                        false
                    ),
                    barBorderRadius: [0, 6, 6, 0],
                    label: {
                        show: true,
                        position: 'right',
                        formatter: function (params) {
                            return params.value;
                        },
                        textStyle: {
                            fontSize: 14,
                            color: '#666',
                        },
                    },
                },
            },
            data: womanData,
        },
    ],
};
return option;
