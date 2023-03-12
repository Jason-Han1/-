lineChartOption= {
    // 数值
    list: [],
    // x轴值
    xLabel: [
        {
            name: '余额',
            value: ['230', '333', '1213', '434', '3232']
        }],
    // 颜色
    colorArray: ['255, 180, 51', '51, 255, 228', '63, 140, 255'],
    // 单位
    yAxisuint: '/就餐人数',
    // 图例的位置
    legendOption: {
        right: '3.1%',
        top: '0%',
        itemGap: 41,
        itemWidth: 6,
        itemHeight: 9,
    },
    // y轴名称的位置
    yAxisNamepadding: [0, 0, -2, -53],
    // echarts图的布局
    grid: {
        top: '23%',
        left: '17%',
        right: '4%',
        bottom: '11%',
    },
    // y轴与x值之前是否有间隙
    boundaryGap: true,
}
option = {
    backgroundColor: '#4c4645',
    // 动画
    animation: true,
    animationDuration: 2000,
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'transparent',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(217, 244, 255, 0)', // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'rgba(217, 244, 255, .32)', // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(217, 244, 255, .32)', // 100% 处的颜色
                    }],
                    global: false, // 缺省为 false
                },
            },
        },
        formatter: function formatter(params) {
            let dom = `${params[0].name}`;
            params.forEach((i) => {
                const spamdom = `<span style="display:inline-block; width: 4.5px;height:9px;border-radius: 3px; background-color: ${i.color}"></span>`;
                dom += `<br>${spamdom}&nbsp;&nbsp;${i.seriesName}: ${i.value}人`;
            });
            return dom;
        },
    },
    legend: {
        align: 'right',
        right: lineChartOption.legendOption.right,
        top: lineChartOption.legendOption.top,
        type: 'plain',
        textStyle: {
            color: 'rgba(217, 244, 255, .8)',
            fontSize: 13,
            fontFamily: 'REEJI',
            fontWeight: 400,
        },
        // 每个legend的间隔
        itemGap: lineChartOption.legendOption.itemGap,
        itemWidth: lineChartOption.legendOption.itemWidth,
        itemHeight: lineChartOption.legendOption.itemHeight,
        // svg的path路径
        icon: 'path://M190.15616 0m256 0l0 0q256 0 256 256l0 512q0 256-256 256l0 0q-256 0-256-256l0-512q0-256 256-256Z',
    },
    grid: lineChartOption.grid,
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisLine: { // 坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: 'rgba(98, 105, 115, .8)',
                    width: 2,
                },
            },
            axisLabel: { // 坐标轴刻度标签的相关设置
                textStyle: {
                    color: 'rgba(217, 244, 255,.8)',
                    fontSize: 14,
                    fontFamily: 'REEJI',
                    fontWeight: 400,
                },
                formatter: function formatter(data) {
                    return data;
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#192a44',
                },
            },
            axisTick: {
                show: false,
            },
            data: ['星期一', '星期二', '星期三', '星期四','星期五'],
        }],
    yAxis: [
        {
            name: '余额',
            min: 0,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#192a44',
                },
            },
            splitNumber: 4,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#233653',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgba(217, 244, 255,.8)',
                    fontSize: 14,
                    fontFamily: 'REEJI',
                    fontWeight: 400,
                },
                margin: '3',
                formatter: function formatter(value) {
                    if (value === 0) {
                        return value;
                    }
                    return value;
                },
            },
            axisTick: {
                show: false,
            },
            nameLocation: 'end',
            nameTextStyle: {
                padding: [0, 0, -2, -53],
                color: 'rgba(217, 244, 255,.8)',
                fontSize: 14,
                fontFamily: 'REEJI',
                fontWeight: 400,
            },
        },
    ],
    series: [
        {
            name: '呼呼',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showSymbol: false,
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1.5,
                    color: `rgba(64, 158, 255, .9)`, // 线条颜色
                },
                borderColor: 'rgba(0, 0, 0, .4)',
            },
            itemStyle: {
                color: `rgba(64, 158, 255, 1)`,
                borderColor: 'rgba(255, 255, 255, .5)',
                borderWidth: 6,
            },
            areaStyle: { // 区域填充样式
                normal: {
                    // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: `rgba(64, 158, 255, .23)`,
                    },
                    {
                        offset: 1,
                        color: `rgba(64, 158, 255, 0)`,
                        // color: `rgba(255, 255, 255, 0)`,
                    },
                    ], false),
                    shadowColor: `rgba(64, 158, 255, .1)`, // 阴影颜色
                    shadowBlur: 0, // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
            },
            data: ['230', '333', '1213', '434', '3232'],
        }
    ],
};
