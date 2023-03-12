// mock 数据
const dataArr = {
    xdata: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
    result: [
        { name: '天河', data: [0, 435, 490, 340, 320, 270, 0] },
        { name: '海珠', data: [150, 220, 210, 310, 0, 180, 288] },
        // { name: '荔湾', data: [250, 120, 240, 280, 240, 180, 188] },
    ],
};
// 头部菱形
const diamondData = dataArr.result.reduce((pre, cur, index) => {
    pre[index] = cur.data.map((el, id) => el + (pre[index - 1] ? pre[index - 1][id] : 0));
    return pre;
}, []);

// color
const color = [['#0079FA'], ['#00FD9F'], ['#00C2FF'], ['#0EEBFF']];
const color1 = [
    [
        { offset: 0, color: '#0079FA' },
        { offset: 0.5, color: '#009AFF' },
        { offset: 1, color: '#0079FF' },
    ],
    [
        { offset: 0, color: '#00FD9F' },
        { offset: 0.5, color: '#44FFBA' },
        { offset: 1, color: '#00FD9F' },
    ],
    [
        { offset: 0, color: '#00C2FF' },
        { offset: 0.5, color: '#0EEBFF' },
        { offset: 1, color: '#00C2FF' },
    ],
];
// series
let series = dataArr.result.reduce((p, c, i, array) => {
    p.push(
        {
            z: i + 1,
            stack: '总量',
            type: 'bar',
            name: c.name,
            barGap: '-100%',
            barWidth: 15,
            data: c.data,
            itemStyle: { 
                // borderRadius:i==0?[5,0,0,5]:[0,0,0,0],
                color: new echarts.graphic.LinearGradient(0, 1, 1, 0, color1[i]), opacity: 1 },
        },
        {
            z: i + 10,
            type: 'pictorialBar',
            symbolPosition: 'end',
            symbol: 'circle',
            symbolOffset: ['50%', 0],
            symbolSize: [7, 15],
            data: diamondData[i],
            itemStyle: { 
                color:function(params){
                    console.log('params',params)
                if(c.data[params.dataIndex]==0){
                    return 'rgba(0,0,0,0)'
                }else{
                   return new echarts.graphic.LinearGradient(0, 1, 1, 0, color1[i])}; 
                }
            }, 
            tooltip: { show: false },
        }
    );

    // 是否最后一个了？
    // if (p.length === array.length * 2) {
    //     p.push({
    //         z: array.length * 2,
    //         type: 'pictorialBar',
    //         symbolPosition: 'start',
    //         data: dataArr.result[0].data,
    //         symbol: 'circle',
    //         // symbolOffset: ['-50%', '0'],
    //         symbolSize: [7, 15],
    //         itemStyle: { color:new echarts.graphic.LinearGradient(0, 1, 1, 0, color1[0])},
    //         tooltip: { show: false },
    //     });
    //     return p;
    // }

    return p;
}, []);

// tooltip
const tooltip = { show: true, trigger: 'axis' };

// legend
const legend = {
    data: dataArr.result.map((item) => item.name),
    textStyle: { fontSize: 14, color: '#fff' },
    itemWidth: 25,
    itemHeight: 15,
    itemGap: 15,
    bottom: '5%',
    // 禁止点击
    selectedMode: false,
};
// grid
const grid = { top: '10%', left: '10%', right: '3%', bottom: '15%' };

// xAxis
const xAxis = {
    // boundaryGap:[0,2],
    axisLabel: {
        color: '#fff',
        textStyle: {
            fontSize: '13',
        },
    },
    splitLine: {
        show: true,
        lineStyle: {
            type: 'dashed',
            color: 'rgba(255,255,255,0.2)',
        },
    },
    axisLine: {
        show: false,
        lineStyle: {
            color: '#fff',
            width: 1,
            opacity: 0.3,
        },
    },
    axisTick: {
        show: false,
    },
    // data: dataArr.xdata,
};

// yAxis
const yAxis = [
    {
        inverse: true,
        // position:'bottom',
        // offset:'10',
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                // color: '#fff',
                color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                        offset: 0,
                        color: 'rgba(255,255,255,0.8)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(255,255,255,0)',
                    },
                ]),
                width: 1,
            },
        },
        axisLabel: { textStyle: { fontSize: 16, color: '#fff' } },
        data: dataArr.xdata,
    },
];

// 渲染
option = { tooltip, xAxis, yAxis, series, grid, legend, backgroundColor: 'rgba(0, 0, 0, .8)' };
