let v2L2Chart = {
    xData: ['2018年', '2019年', '2020年', '2021年'],
    data: [212, 305, 260, 283],
    max: 500,
    color:['rgba(253, 221, 97,  1)','rgba(107, 255, 243,  1)','rgba(119, 191, 255, 1)','rgba(0, 72, 203,1)',]
};
option = {
    backgroundColor: '#000',
    grid: {
        top: '5%',
        left: '10%',
        right: '9%',
        bottom: '40%',
    },
    tooltip: {
        show: true,
          formatter: function (params) {
                let text = '<p  style="font-size:16px;font-weight: 400;color:rgba(255, 255, 255, 1);margin-bottom: 20px;"><span style="display:inline-block;width:10px;height: 10px;background: ' +v2L2Chart.color[params.dataIndex] + ';border-radius: 50%;margin-right: 10px;"></span>' +v2L2Chart.xData[params.dataIndex] +'：'+v2L2Chart.data[params.dataIndex] + '万</p>';
                return text
            },
        // formatter: (params) => {
        //     return v2L2Chart.xData[params.dataIndex] + ':' + v2L2Chart.data[params.dataIndex] + '万';
            
        // },
        backgroundColor: 'rgba(38, 68, 110, 0.8)',
        padding: 10,
        borderColor: 'rgba(38, 68, 110, 1)',
        textStyle:{
            color: '#fff',
        }
    },

    xAxis: {
        offset: 20,
        data: v2L2Chart.xData,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        //'最低下的圆片',
        {
            name: '最低下的圆片',
            stack: 'a',
            // type: 'pictorialBar',
            // symbolSize: [66, 12],
            // symbolOffset: [0, 6],
            type: 'effectScatter',
            symbolSize: [62, 12],
            symbolOffset: [0,0],
            z: 22,
            data: [
                {
                    name: '',
                    value: '0',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(253, 221, 97,  1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(251, 171, 88,   1)',
                                },
                            ]),
                        },
                    },
                },
                {
                    name: '',
                    value: '0',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(107, 255, 243,  1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(8, 177, 255, 1)',
                                },
                            ]),
                        },
                    },
                },
                {
                    name: '',
                    value: '0',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(119, 191, 255, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(102, 155, 255, 1)',
                                },
                            ]),
                        },
                    },
                },
                {
                    name: '',
                    value: '0',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(14, 195, 255, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0, 72, 203,  1)',
                                },
                            ]),
                        },
                    },
                },
            ],
        },
        //下半截柱状图
        {
            name: '下半截柱状图',
            stack: 'a',
            type: 'bar',
            barWidth: 66,
            z: 2,
            barGap: '-100%',
            data: [
                {
                    name: '',
                    value: '212',
                    itemStyle: {
                        normal: {
                            color: {
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                type: 'linear',
                                global: false,
                                colorStops: [
                                    {
                                        //第一节下面
                                        offset: 0,
                                        color: 'rgba(251, 171, 88, 0.8)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(253, 227, 100,0.8)',
                                    },
                                ],
                            },
                        },
                    },
                },
                {
                    name: '',
                    value: '305',
                    itemStyle: {
                        normal: {
                            color: {
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                type: 'linear',
                                global: false,
                                colorStops: [
                                    {
                                        //第二个柱状图下面

                                        offset: 0,
                                        color: 'rgba(8, 177, 255, 0.8)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(107, 255, 243, 0.8)',
                                    },
                                ],
                            },
                        },
                    },
                },
                {
                    name: '',
                    value: '260',
                    itemStyle: {
                        normal: {
                            color: {
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                type: 'linear',
                                global: false,
                                colorStops: [
                                    {
                                        //第三个柱状图下半截
                                        offset: 0,
                                        color: 'rgba(119, 191, 255, 0.8)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(102, 155, 255, 0.8)',
                                    },
                                ],
                            },
                        },
                    },
                },
                {
                    name: '',
                    value: '283',
                    itemStyle: {
                        normal: {
                            color: {
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                type: 'linear',
                                global: false,
                                colorStops: [
                                    {
                                        //第三个柱状图下半截
                                        offset: 0,
                                        color: 'rgba(0, 72, 203,0.8)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(14, 195, 255, 0.8)',
                                    },
                                ],
                            },
                        },
                    },
                },
            ],
        },
        //替代柱状图 默认不显示颜色，是最下方柱图的value值 - 20'
        {
            name: '替代柱状图 默认不显示颜色，是最下方柱图的value值 - 20',
            stack: 'a',
            type: 'bar',
            barWidth: 66,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
                color: 'transparent',
            },
            data: [212, 305, 260, 283],
        },
        //头部1
        {
            name: '头部1',
            stack: 'a',
            type: 'pictorialBar',
            symbolSize: [66, 12],
            symbolOffset: [0, -6],
            z: 22,
            data: [
                {
                    name: '',
                    value: '212',
                    symbolPosition: 'end',
                    label: {
                        formatter: '{c} 万',
                        color: '#fff',
                        offset: [0, -5],
                        show: true,
                        position: 'top',
                        fontSize: 18,
                        fontWeight: 400,
                        fontFamily: 'zcool-gdh',
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: 'rgba(251, 171, 88, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(253, 227, 100,  1)',
                                    },
                                ],
                                false
                            ),
                        },
                    },
                },
                {
                    name: '',
                    value: '305',
                    symbolPosition: 'end',
                    label: {
                        formatter: '{c} 万',
                        color: '#fff',
                        offset: [0, -5],
                        show: true,
                        position: 'top',
                        fontSize: 18,
                        fontWeight: 400,
                        fontFamily: 'zcool-gdh',
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: 'rgba(8, 177, 255,   1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(107, 255, 243,    1)',
                                    },
                                ],
                                false
                            ),
                        },
                    },
                },
                {
                    name: '',
                    value: '260',
                    symbolPosition: 'end',
                    label: {
                        formatter: '{c} 万',
                        color: '#fff',
                        offset: [0, -5],
                        show: true,
                        position: 'top',
                        fontSize: 18,
                        fontWeight: 400,
                        fontFamily: 'zcool-gdh',
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: 'rgba(119, 191, 255,  1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(102, 155, 255,    1)',
                                    },
                                ],
                                false
                            ),
                        },
                    },
                },
                {
                    name: '',
                    value: '283',
                    symbolPosition: 'end',
                    label: {
                        formatter: '{c} 万',
                        color: '#fff',
                        offset: [0, -5],
                        show: true,
                        position: 'top',
                        fontSize: 18,
                        fontWeight: 400,
                        fontFamily: 'zcool-gdh',
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: 'rgba(0, 72, 203,  1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(14, 195, 255,  1)',
                                    },
                                ],
                                false
                            ),
                        },
                    },
                },
            ],
        },
        //头部2
        {
            name: '头部2',
            stack: 'a',
            type: 'pictorialBar',
            symbolSize: [66, 12],
            symbolOffset: [0, -6],
            z: 22,
            data: [
                {
                    name: '',
                    value: v2L2Chart.max,
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.6,
                                r: 0.5,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(253, 224, 99, 0.8)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.4,
                                        color: 'rgba(253, 224, 99, 0.8)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(253, 179, 88, 0.6)', // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺省为 false
                            },
                        },
                    },
                },
                {
                    name: '',
                    value: v2L2Chart.max,
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.6,
                                r: 0.5,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(31, 194, 252, 0.8)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.4,
                                        color: 'rgba(31, 194, 252, 0.8)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(31, 194, 252, 0.6)', // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺省为 false
                            },
                        },
                    },
                },
                {
                    name: '',
                    value: v2L2Chart.max,
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.6,
                                r: 0.5,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(115, 182, 255, 0.8)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.4,
                                        color: 'rgba(115, 182, 255, 0.8)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(115, 182, 255, 0.6)', // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺省为 false
                            },
                        },
                    },
                },
                {
                    name: '',
                    value: v2L2Chart.max,
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.6,
                                r: 0.5,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(1, 80, 207, 0.8)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.4,
                                        color: 'rgba(1, 80, 207, 0.8)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(1, 80, 207, 0.6)', // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺省为 false
                            },
                        },
                    },
                },
            ],
        },
        //底色
        {
            name: '底色',
            stack: 'a',
            type: 'bar',
            barWidth: 66,
            z: 2,
            barGap: '-100%',
            stack: '广告',
            data: [
                {
                    name: '',
                    value: v2L2Chart.max - v2L2Chart.data[0],
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(253, 179, 88, 0.4)',
                        },
                    },
                },
                {
                    name: '',
                    value: v2L2Chart.max - v2L2Chart.data[1],
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(31, 194, 252, 0.4)',
                        },
                    },
                },
                {
                    name: '',
                    value: v2L2Chart.max - v2L2Chart.data[2],
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(115, 182, 255, 0.4)',
                        },
                    },
                },
                {
                    name: '',
                    value: v2L2Chart.max - v2L2Chart.data[3],
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(1, 80, 207,  0.4)',
                        },
                    },
                },
            ],
        },
    ],
};
