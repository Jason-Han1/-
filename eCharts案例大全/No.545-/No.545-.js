option = {
    backgroundColor:"blurScope",
    animation: true,
    grid: {
        top: '10%',
        bottom: '15%',
        left: '18%',
        right: '5%',
    },
    tooltip: {
        show: true,
        backgroundColor: '#005ED8', //通过设置rgba调节背景颜色与透明度
        formatter: '{b}人员积分{c}',
    },
    xAxis: {
        data: [
            '国家移民管理局网络通信技术培训班',
            '国家移民管理机构信息技术应用岗位技能培训班',
            '国家移民管理机构2020年新警入警培训（云南培训点）边检专业',
            '国家移民管理机构2020年新警入警培训（云南培训点）边管专业',
        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            textStyle: {
                color: '#393952', //X轴文字颜色
            },
        },
        axisTick: {
            show: false, //隐藏X轴轴线
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 14,
            fontSize: 12,
            textStyle: {
                color: '#fff', //X轴文字颜色
            },
            formatter: function (params) {
                let paramsStr = '';
                if (params.length > 3) {
                    paramsStr = params.substring(0, 3) + '...';
                }
                return `${paramsStr}`;
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            gridIndex: 0,
            // interval: 25,
            name:'标题',
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#393952',
                },
            },
            axisLabel: {
                show: true,
                margin: 14,
                fontSize: 12,
                textStyle: {
                    color: '#909090',
                },
            },
        },
    ],
    series: [
        {
            type: 'bar',
            barWidth: 16,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#F18437',
                        },
                        {
                            offset: 1,
                            color: '#E4571B',
                        },
                    ]),
                },
            },
            data: [56, 48, 36, 26],
            z: 10,
            zlevel: 0,
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#041745',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 6,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [18, 2],
            symbolPosition: 'start',
            symbolOffset: [1, 1],
            data: [56, 48, 36, 26],
            width: 2,
            z: 0,
            zlevel: 1,
        },
    ],
    dataZoom: [
        {
            type: 'slider',
            show: false,
            xAxisIndex: [0],
            endValue: 4,
            startValue: 0,
        },
    ],
};
