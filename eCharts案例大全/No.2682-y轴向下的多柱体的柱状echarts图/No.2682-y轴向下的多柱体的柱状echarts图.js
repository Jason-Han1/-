histogramEchartOption = {
    // 数值
    list: [],
    // x轴值
    xLabel: [],
    // 颜色
    colorArray: ['255, 180, 51', '51, 255, 228', '63, 140, 255'],
    // 单位
    yAxisuint: '/消费额',
    // y轴名称的位置
    yAxisNamepadding: [0, 0, -26, -70],
    // echarts图的布局
    grid: {
        top: '6px',
        left: '17%',
        right: '4%',
        bottom: '49px',
    },
},
option = {
    backgroundColor: '#4d4746',
    // 动画
    animation: true,
    animationDuration: 3000,
    title: {
        show: false,
    },
    tooltip: {
        trigger: 'axis', // 触发类型；轴触发，axis则鼠标hover到一条柱状图显示全部数据，item则鼠标hover到折线点显示相应数据，
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'none', // 默认为直线，可选为：'line' | 'shadow' | 'cross' , shadow表示阴影，cross为十字准星
        },
        backgroundColor: 'rgba(13, 36, 78, .6)',
        formatter: function formatter(params) {
            let dom = `${params[0].name}`;
            params.forEach((i) => {
                const spamdom = `<span style="display:inline-block; width: 4px;height:8px;border-radius: 3px; background-color: ${i.color.colorStops[1].color}"></span>`;
                dom += `<br>${spamdom}&nbsp;&nbsp;${i.seriesName}: ${-i.value}元`;
            });
            return dom;
        },
    },
    legend: {
        show: false,
    },
    grid: {
        top: '10%',
        left: '17%',
        right: '10%',
        bottom: '10%',
        // containLabel: true, // grid 区域是否包含坐标轴的刻度标签。false可能溢出，默认为false
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: histogramEchartOption.xLabel,
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false, // y轴坐标点消失
            },
            axisLine: { // 坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: 'rgba(98, 105, 115, .8)',
                    width: 2,
                },
            },
        },
    ],
    yAxis: [
        {
            name: histogramEchartOption.yAxisuint,
            nameLocation: 'start',
            nameTextStyle: {
                padding: histogramEchartOption.yAxisNamepadding,
                color: 'rgba(217, 244, 255,.8)',
                fontSize: 14,
                fontFamily: 'REEJI',
                fontWeight: 400,
            },
            type: 'value',
            axisTick: {
                show: false,
            },
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#192a44',
                },
            },
            axisLabel: { // ,让x轴左边的数显示为正数
                formatter: function formatter(v) {
                    return v > 0 ? v : -v;
                },
                margin: '3',
                textStyle: {
                    color: 'rgba(217, 244, 255,.8)',
                    fontSize: 14,
                    fontFamily: 'REEJI',
                    fontWeight: 400,
                },
            },
        },
    ],
    series: [
        {
            name: '花花',
            type: 'bar',
            barWidth: '12%',
            // bar条之间的间隙
            barGap: '80%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: `rgba(92, 123, 217, .5)`,
                    }, {
                        offset: 1,
                        color: `rgba(92, 123, 217, 1)`,
                    }]),
                    barBorderRadius: 10,
                },
            },
            data: ['-123', '-333', '-222', '-111', '-444'],
        },
        {
            name: '狗狗',
            type: 'bar',
            barWidth: '12%',
            // bar条之间的间隙
            barGap: '80%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: `rgba(255, 180, 51, .5)`,
                    }, {
                        offset: 1,
                        color: `rgba(255, 180, 51, 1)`,
                    }]),
                    barBorderRadius: 10,
                },
            },
            data: ['-123', '-333', '-222', '-111', '-444'],
        },
        {
            name: '洋洋',
            type: 'bar',
            barWidth: '12%',
            // bar条之间的间隙
            barGap: '80%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: `rgba(252, 85, 49, .5)`,
                    }, {
                        offset: 1,
                        color: `rgba(252, 85, 49, 1)`,
                    }]),
                    barBorderRadius: 10,
                },
            },
            data: ['-22', '-333', '-222', '-13', '-78'],
        },
    ],
};
