// mock 数据
const dataArr = {
    xdata: [
        ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
        ['01-08', '01-09', '01-10', '01-11', '01-12', '01-13', '01-14'],
    ],
    result: [
        {
            name: '天河',
            data: [
                [400, 435, 0, 340, 320, 270, 0],
                [50, 435, 490, 340, 320, 270, 50],
            ],
        },
        {
            name: '海珠',
            data: [
                [0, 220, 210, 310, 20, 180, 288],
                [1530, 220, 0, 310, 40, 180, 288],
            ],
        },
        {
            name: '荔湾',
            data: [
                [0, 120, 0, 280, 240, 180, 188],
                [250, 120, 240, 280, 0, 180, 188],
            ],
        },
    ],
};

// 头部菱形

let a = 0;
const cee = [];
dataArr.xdata.forEach((n, j) => {
    let diamondData = dataArr.result.reduce((pre, cur, index, array) => {
        pre[index] = dataArr.result[index].data[j].map((el, id) => el + (pre[index - 1] ? pre[index - 1][id] : 0));
        return pre;
    }, []);
    cee[j] = diamondData;
});

const arr = [];
// color
const color = [['#0079FA'], ['#00FD9F'], ['#00C2FF']];
const color1 = [
    [
        { offset: 0, color: '#01C3F5' },
        { offset: 0.5, color: '#01C3F5' },
        { offset: 0.5, color: '#2A69FF' },
        { offset: 1, color: '#2A69FF' },
    ],
    [
        { offset: 0, color: '#44FFBA' },
        { offset: 0.5, color: '#44FFBA' },
        { offset: 0.5, color: '#38D58C' },
        { offset: 1, color: '#38D58C' },
    ],
    [
        { offset: 0, color: '#0EEBFF' },
        { offset: 0.5, color: '#0EEBFF' },
        { offset: 0.5, color: '#00C2FF' },
        { offset: 1, color: '#00C2FF' },
    ],
];
// series
let series;
var options = [];
var yAxis;
dataArr.xdata.forEach((n, j) => {
    (yAxis = {
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
        data: n,
    }),
        (series = dataArr.result.reduce((p, c, i, array) => {
            p.push(
                {
                    z: i + 1,
                    stack: '总量',
                    type: 'bar',
                    name: c.name,
                    barGap: '-100%',
                    barWidth: 15,
                    data: dataArr.result[i].data[j],
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, color1[i]),
                        opacity: 1,
                    },
                },
                {
                    z: i + 3,
                    type: 'pictorialBar',
                    symbolPosition: 'end',
                    symbol: 'diamond',
                    symbolOffset: ['50%', 0],
                    symbolSize: [7.5, 15],
                    data: cee[j][i],
                    itemStyle: {
                        color: function (params) {
                            // console.log('params',cee[j][i],c.data[j][params.dataIndex],params,color[i]);
                            if (c.data[j][params.dataIndex] == 0) {
                                return 'rgba(0,0,0,0)';
                            } else {
                                return new echarts.graphic.LinearGradient(0, 0, 0, 1, color1[i]);

                                // return color[i];
                                // return '#ffffff'
                            }
                        },
                    },
                    tooltip: { show: false },
                }
            );
            // 是否最后一个了

            if (p.length === array.length) {
                console.log(i, j, dataArr, ' dataArr');
                //   console.log('dataArr.r',cee[j][p.length-1]);
                p.push({
                    z: array.length * 2,
                    type: 'pictorialBar',
                    symbolPosition: 'end',
                    data: cee[j][i],
                    symbol: 'diamond',
                    symbolOffset: ['50%', 0],
                    symbolSize: [7.5, 15],
                    itemStyle: {
                        color: color[i],
                    },
                    tooltip: { show: false },
                });
                return p;
            }

            return p;
        }, []));
    options.push({ yAxis, series });
});

// tooltip
const tooltip = { show: true, trigger: 'axis' };

// legend
const legend = {
    data: dataArr.result.map((item) => item.name),
    textStyle: { fontSize: 14, color: '#fff' },
    itemWidth: 25,
    itemHeight: 15,
    itemGap: 15,
    top: '5%',
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

const timeline = {
    //loop: false,
    axisType: 'category',
    show: true,
    autoPlay: true,
    playInterval: 5000,
    data: ['天河', '海珠'],
};
// 渲染
// animation: false 加载动画
var option = {
    baseOption: { animation: false, timeline, tooltip, xAxis, grid, legend, backgroundColor: 'rgba(0, 0, 0, .8)' },
    options,
};
