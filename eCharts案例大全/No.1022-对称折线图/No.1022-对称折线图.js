option = {
    tooltip: {
        trigger: 'axis', //触发类型；轴触发，axis则鼠标hover到一条柱状图显示全部数据，item则鼠标hover到折线点显示相应数据，
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow' | 'cross' , shadow表示阴影，cross为十字准星
        },
        formatter: function (params) {
            return (
                params[0].name +
                '<br>' +
                params[0].marker +
                '今年:' +
                params[0].value +
                '<br>' +
                params[1].marker +
                '去年:' +
                Math.abs(params[1].value)
            );
        },
    },
    legend: {
        data: ['今年', '去年'],
        orient: 'vertical',
        textStyle: {
            color: '#FFFFFF',
            fontSize: '14px',
        },
        // left: "5%" //组件离容器左侧的距离，可以是left,center,right，也可以是像素px和百分比10%
        right: 0,
    },
    backgroundColor: '#0e0f21',//整个绘图背景色
    grid: {
        left: '3%',
        containLabel: true, //grid 区域是否包含坐标轴的刻度标签。false可能溢出，默认为false
    },
    xAxis: [
        {
            show: true,
            name: '日期',
            nameTextStyle: {
                color: '#FFFFFF',
                fontSize: 16,
            },
            axisTick: {
                show: true,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#FFFFFF',
                    fontSize: 16,
                },
            },
            // offset: -80,
            // position: "center",
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#ffffff',
                },
            },
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '金额',
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#FFFFFF',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#FFFFFF',
                    fontSize: 16,
                },
            },
            splitLine: {
                show: false,
            },
            nameTextStyle: {
                color: '#FFFFFF',
                fontSize: 16,
            },
            axisLabel: {
                //让x轴左边的数显示为正数
                formatter: function (v) {
                    return v > 0 ? v : -v;
                },
            },
        },
    ],
    series: [
        {
            name: '今年',
            type: 'line',
            stack: '总量',
            smooth: true,
            itemStyle: {
                normal: {
                    color: '#39FDA1',
                },
            },
            lineStyle: {
                normal: {
                    width: 3,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(85,254,139,1)', // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(7,252,202,1)', // 100% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(14,245,210,1)', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                },
            },
            label: {
                show: true,
                color: 'rgba(255,255,255,1)',
                fontSize: 16,
                position: 'top',
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(102,153,255,1)',
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(102,153,255,0.08)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(9,173,208,0.15)',
                            },
                        ],
                        false
                    ),
                    // shadowColor: "rgba(14,245,210,1)", //阴影颜色
                    // shadowBlur: 20
                },
            },
            data: [320, 302, 341, 374, 390, 450, 420],
        },
        {
            name: '去年',
            type: 'line',
            stack: '总量',
            smooth: true,
            label: {
                show: true, //控制柱状图是否显示数值
                color: 'rgba(255,255,255,1)',
                fontSize: 16,
                position: 'bottom',
                formatter: function (params) {
                    //格式化柱状图里的数字
                    return -params.value;
                },
            },
            itemStyle: {
                normal: {
                    color: '#C8EE55',
                },
            },
            lineStyle: {
                normal: {
                    width: 3,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(157,169,36,1)', // 0% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(157,169,36,1)', // 100% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(157,169,36,1)', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        1,
                        0,
                        0,
                        [
                            {
                                offset: 0,
                                color: 'rgba(157,169,36,1)',
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(102,153,255,0.08)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(157,169,36,0.15)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: [-220, -332, -301, -434, -290, -230, -510],
        },
    ],
};
