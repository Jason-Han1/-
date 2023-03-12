const data = [{
        area_name: '浙江省',
        sum_cnt: 82476,
        cnt: 20949,
        per: 0.254,
    },
    {
        area_name: '江苏省',
        sum_cnt: 82476,
        cnt: 8383,
        per: 0.1016,
    },
    {
        area_name: '安徽省',
        sum_cnt: 82476,
        cnt: 8332,
        per: 0.101,
    },
    {
        area_name: '河南省',
        sum_cnt: 82476,
        cnt: 6760,
        per: 0.082,
    },
    {
        area_name: '上海市',
        sum_cnt: 82476,
        cnt: 5416,
        per: 0.0657,
    },
];
const xAxisData = data.map(item => item.area_name);
const seriesData = data.map(item => `${item.cnt}人 （${(item.per * 100).toFixed(2)}%）`);
const detailData = data.map(item => item.cnt);
const totalSeriesData = data.map(item => item.sum_cnt);
const attackSourcesColor = [
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [{
            offset: 0,
            color: '#8b2806',
        },
        {
            offset: 1,
            color: '#f03e00',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [{
            offset: 0,
            color: '#856f17',
        },
        {
            offset: 1,
            color: '#eaba15',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [{
            offset: 0,
            color: '#017778',
        },
        {
            offset: 1,
            color: '#01e3e5',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [{
            offset: 0,
            color: '#007d5b  ',
        },
        {
            offset: 1,
            color: '#00ecac',
        },
    ]),
];

function rankBarColor(cData) {
    let tempData = [];
    cData.forEach((item, index) => {
        tempData.push({
            value: item,
            itemStyle: {
                color: index > 3 ? attackSourcesColor[3] : attackSourcesColor[index],
            },
        });
    });
    return tempData;
}
option = {
    backgroundColor:'#071347',
    grid: {
        left: 50,
        right: 20,
        bottom: 0,
        top: 10,
        // grid 区域是否包含坐标轴的刻度标签。
        containLabel: false,
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        max: totalSeriesData[0],
    },
    yAxis: [{
            type: 'category',
            // 是否是反向坐标轴
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            data: xAxisData,
            axisLabel: {
                padding: [0, 0, 20, 0],
                rich: {
                    nt1: {
                        color: '#fff',
                        backgroundColor: 'rgba(239,62,0,0.3)',
                        borderColor: '#f03e00',
                        borderWidth: 1,
                        width: 20,
                        height: 20,
                        fontSize: 14,
                        align: 'center',
                        lineHeight: '20',
                        padding: [0, 1, 2, 1],
                    },
                    nt2: {
                        color: '#fff',
                        backgroundColor: 'rgba(233,186,21,0.3)',
                        borderColor: '#eaba15',
                        borderWidth: 1,
                        width: 20,
                        height: 20,
                        fontSize: 14,
                        align: 'center',
                        lineHeight: '20',
                        padding: [0, 1, 2, 1],
                    },
                    nt3: {
                        color: '#fff',
                        backgroundColor: 'rgba(0,236,236,0.3)',
                        borderColor: '#01e3e5',
                        borderWidth: 1,
                        width: 20,
                        height: 20,
                        fontSize: 14,
                        align: 'center',
                        lineHeight: '20',
                        padding: [0, 1, 2, 1],
                    },
                    nt: {
                        color: '#fff',
                        backgroundColor: 'rgba(0,237,173,0.3)',
                        borderColor: '#00edad',
                        borderWidth: 1,
                        width: 20,
                        height: 20,
                        fontSize: 14,
                        align: 'center',
                        lineHeight: '20',
                        padding: [0, 1, 2, 1],
                    },
                },
                formatter: function(value, index) {
                    let idx = index + 1;
                    if (idx <= 3) {
                        return ['{nt' + idx + '|' + idx + '}'].join('\n');
                    } else {
                        return ['{nt|' + idx + '}'].join('\n');
                    }
                },
            },
        },
        {
            //名称
            type: 'category',
            // Y 轴相对于默认位置的偏移，在相同的 position 上有多个 Y 轴的时候有用。
            offset: -10,
            position: 'left',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#fff',
                align: 'left',
                // 文字垂直对齐方式，默认自动。
                verticalAlign: 'bottom',
                lineHeight: 25,
                fontSize: 16,
            },
            data: xAxisData,
        },
        {
            //名称
            type: 'category',
            offset: 0,
            position: 'right',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#fff',
                align: 'right',
                verticalAlign: 'bottom',
                lineHeight: 25,
                fontSize: 16,
            },
            data: seriesData,
        },
    ],
    series: [{
            zlevel: 1,
            type: 'bar',
            barWidth: 3,
            // barGap: 50,
            data: rankBarColor(detailData),
            // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
            label: {
                show: false,
            },
        },
        {
            type: 'bar',
            barWidth: 3,
            // 不同系列的柱间距离，为百分比（如 '30%'，表示柱子宽度的 30%）如果想要两个系列的柱子重叠，可以设置 barGap 为 '-100%'。这在用柱子做背景的时候有用。
            barGap: '-100%',
            // barMinHeight: 500,
            itemStyle: {
                normal: {
                    color: '#134a61',
                },
            },
            data: totalSeriesData,
        },
    ],
}