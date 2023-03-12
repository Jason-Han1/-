// mock数据
const dataArr = {
    xdata: ['2020年3月', '2020年6月', '2020年9月', '2020年12月'],
    vaccination: [1000, 800, 600, 700], // 第一条柱图数据
    unvaccinated: [ 900, 500, 300, 400], // 第二条柱状图
    unvaccinatedTwo: [400, 300, 500, 200], // // 第三条柱状图
    rateDataOne: [98, 96, 95, 100],  // 一线
    rateDataTwo: [88, 86, 85, 95], // 二线
    unvaccinatedTwo1:[344,110,113,554],
};

// tooltip
const tooltip = {
    trigger: 'axis',
    textStyle: { fontSize: '100%' },
    formatter: (params) => {
        let rander = params
            .map((item) =>
                item.seriesType !== 'pictorialBar'
                    ? `<div>${item.seriesName}: ${item.seriesType !== 'line' ? item.value : item.value + '%'}</div>`
                    : ''
            )
            .join('');
        return `
            <div>${params[0].axisValue}</div>
            ${rander}
        `;
    },
};
const legend = {
    data: ['中国银行', '农业银行', '工商银行', '建设银行', '中长期贷款比重',"制造业贷款比重"],
    textStyle: { fontSize: 14, color: '#fff' },
    width: "50%",
    itemWidth: 25,
    itemHeight: 15,
    itemGap: 20,
    selectedMode: true, // 控制图例不可点击
    bottom: '5%',
};
const grid = { top: '18%', left: '10%', right: '6%', bottom: '25%' };
// xAxis
const xAxis = {
    axisTick: { show: true },
    axisLine: { lineStyle: { color: 'rgba(255,255,255, .2)' } },
    axisLabel: { textStyle: { fontSize: 12, color: '#fff' } },
    data: dataArr.xdata,
};

// yAxis
const yAxis = [
    {
        axisTick: { show: false },
        axisLine: { show: false },
        splitLine: { lineStyle: { color: 'rgba(255,255,255, .05)' } },
        axisLabel: { textStyle: { fontSize: 16, color: '#fff' } },
    },
    {
        show: true,
        max: 100,
        splitLine: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
            textStyle: { fontSize: 16, color: '#fff' },
            formatter: (params) => {
                return `${params}%`;
            },
        },
    },
];

// series
const series = [
    { // 第一条柱状图顶部方块
        z: 1,
        name: '上部1',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: dataArr.vaccination,
        symbol: 'diamond',
        symbolOffset: ['-80%', '-50%'],
        symbolSize: [29, 19],
        itemStyle: {
            borderColor: '#ff524c',
            color: '#ff524c',
        },
    },
    {
        z: 1,
        type: 'bar',
        name: '中国银行',
        barWidth: 30,
        barGap: '-50%',
        data: dataArr.vaccination,
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                x2: 1,
                y: 0,
                y2: 0,
                colorStops: [
                    { offset: 0, color: 'rgba(255, 82, 76, .7)' },
                    { offset: 0.5, color: 'rgba(255, 82, 76, .7)' },
                    { offset: 0.5, color: 'rgba(255, 82, 76, .3)' },
                    { offset: 1, color: 'rgba(255, 82, 76, .3)' },
                ],
            },
        },
    },
    {// 第二条柱状图顶部方块
        z: 2,
        name: '上部1',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: dataArr.unvaccinated,
        symbol: 'diamond',
        symbolOffset: ["-25%", '-50%'],
        symbolSize: [29, 19],
        itemStyle: {
            borderColor: '#00F2EF',
            color: '#00F2EF',
        },
    },
    {
        z: 2,
        type: 'bar',
        name: '农业银行',
        barWidth: 30,
        data: dataArr.unvaccinated,
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                x2: 1,
                y: 0,
                y2: 0,
                colorStops: [
                    { offset: 0, color: 'rgba(0, 242, 239, .7)' },
                    { offset: 0.5, color: 'rgba(0, 242, 239, .7)' },
                    { offset: 0.5, color: 'rgba(0, 242, 239, .3)' },
                    { offset: 1, color: 'rgba(0, 242, 239, .3)' },
                ],
            },
        },
    },
    {// 第三条柱状图顶部方块
        z: 3,
        name: '上部1',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: dataArr.unvaccinatedTwo,
        symbol: 'diamond',
        symbolOffset: ['28%', '-50%'],
        symbolSize: [29, 19],
        itemStyle: {
            borderColor: '#FFDB2B',
            color: '#FFDB2B',
        },
    },
    {
        z: 3,
        type: 'bar',
        name: '工商银行',
        barWidth: 30,
        data: dataArr.unvaccinatedTwo,
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                x2: 1,
                y: 0,
                y2: 0,
                colorStops: [
                    { offset: 0, color: 'rgba(255, 219, 43, .7)' },
                    { offset: 0.5, color: 'rgba(255, 219, 43, .7)' },
                    { offset: 0.5, color: 'rgba(255, 219, 43, .3)' },
                    { offset: 1, color: 'rgba(255, 219, 43, .3)' },
                ],
            },
        },
    },
    {// 第四条柱状图顶部方块
        z: 4,
        name: '上部1',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: dataArr.unvaccinatedTwo1,
        symbol: 'diamond',
        symbolOffset: ['80%', '-50%'],
        symbolSize: [29, 19],
        itemStyle: {
            borderColor: '#0091FF',
            color: '#0091FF',
        },
    },
    {
        z: 4,
        type: 'bar',
        name: '建设银行',
        barWidth: 30,
        data: dataArr.unvaccinatedTwo1,
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                x2: 1,
                y: 0,
                y2: 0,
                colorStops: [
                    { offset: 0, color: 'rgba(0, 145, 255, .7)' },
                    { offset: 0.5, color: 'rgba(0, 145, 255, .7)' },
                    { offset: 0.5, color: 'rgba(0, 145, 255, .3)' },
                    { offset: 1, color: 'rgba(0, 145, 255, .3)' },
                ],
            },
        },
    },
    // 两根儿折线图
    {
        z: 9,
        yAxisIndex: 1,
        name: '中长期贷款比重',
        type: 'line',
        symbol: `path://M9.312,4.594 C12.074,4.594 14.313,6.832 14.313,9.594 C14.313,12.355 12.074,14.594 9.312,14.594 C6.551,14.594 4.312,12.355 4.312,9.594 C4.312,6.832 6.551,4.594 9.312,4.594 Z`,
        symbolSize: [10, 10],
        color: {
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            // 0% 处的颜色                           // 100% 处的颜色
            colorStops: [
                { offset: 0, color: '#32ffee' },
                { offset: 1, color: '#8afff5' },
            ],
            global: false, // 缺省为 false
        },
        lineStyle: {
            color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                // 0% 处的颜色                           // 100% 处的颜色
                colorStops: [
                    { offset: 0, color: '#32ffee' },
                    { offset: 1, color: '#8afff5' },
                ],
                global: false, // 缺省为 false
            },
        },
        // 修改的是线下区域的颜色
        areaStyle: {
            color: new echarts.graphic.LinearGradient(
                // 右/下/左/上
                0,
                0,
                0,
                1,
                [
                    { offset: 0, color: 'rgba(50, 255, 238, .1)' },
                    { offset: 1, color: 'transparent' },
                ]
            ),
        },
        label: {
            show: true,
            position: 'insideBottomLeft',
            formatter: (params) => {
                return `${params.value}%`;
            },
            textStyle: { fontSize: 16, color: '#32ffee' },
        },
        data: dataArr.rateDataOne,
    },
    {
        z: 9,
        yAxisIndex: 1,
        name: '制造业贷款比重',
        type: 'line',
        symbol: `path://M9.312,4.594 C12.074,4.594 14.313,6.832 14.313,9.594 C14.313,12.355 12.074,14.594 9.312,14.594 C6.551,14.594 4.312,12.355 4.312,9.594 C4.312,6.832 6.551,4.594 9.312,4.594 Z`,
        symbolSize: [10, 10],
        color: {
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            // 0% 处的颜色                           // 100% 处的颜色
            colorStops: [
                { offset: 0, color: '#ffd11a' },
                { offset: 1, color: '#fff5cc' },
            ],
            global: false, // 缺省为 false
        },
        lineStyle: {
            color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                // 0% 处的颜色                           // 100% 处的颜色
                colorStops: [
                    { offset: 0, color: '#ffd11a' },
                    { offset: 1, color: '#fff5cc' },
                ],
                global: false, // 缺省为 false
            },
        },
        // 修改的是线下区域的颜色
        areaStyle: {
            color: new echarts.graphic.LinearGradient(
                // 右/下/左/上
                0,
                0,
                0,
                1,
                [
                    { offset: 0, color: 'rgba(255, 209, 26, .2)' },
                    { offset: 1, color: 'transparent' },
                ]
            ),
        },
        label: {
            show: true,
            position: 'insideBottomRight',
            formatter: (params) => {
                return `${params.value}%`;
            },
            textStyle: { fontSize: 16, color: '#ffd11a' },
        },
        data: dataArr.rateDataTwo,
    },
];
option = { tooltip, xAxis, yAxis, series, grid, legend, backgroundColor: 'rgba(0, 0, 0, .7)' };
