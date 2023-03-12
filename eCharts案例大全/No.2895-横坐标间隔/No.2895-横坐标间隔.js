const totalData = [
    {
        year: '2004',
        data: [
            { name: '未知', value: '29.5' },
            { name: '男性', value: '55.4' },
            { name: '女性', value: '1.8' },
        ],
    },
    {
        year: '2007',
        data: [
            { name: '未知', value: '25.9' },
            { name: '男性', value: '49.2' },
            { name: '女性', value: '0.9' },
        ],
    },
    {
        year: '2010',
        data: [
            { name: '未知', value: '25.2' },
            { name: '男性', value: '47.7' },
            { name: '女性', value: '1.8' },
        ],
    },
    {
        year: '2013',
        data: [
            { name: '未知', value: '22.4' },
            { name: '男性', value: '43.1' },
            { name: '女性', value: '1.4' },
        ],
    },
    {
        year: '2015',
        data: [
            { name: '未知', value: '23.4' },
            { name: '男性', value: '44.7' },
            { name: '女性', value: '0.8' },
        ],
    },
];

const newSeriesData = [];
const xData = totalData
    .map((x) => x.year)
    .sort(function (a, b) {
        return a - b;
    });
const legendData = totalData[0]['data'].map((x) => x.name);
const formatXData = [+xData[0]];
while (+formatXData[formatXData.length - 1] <= +xData[xData.length - 1]) {
    const s = +formatXData[formatXData.length - 1] + 1;
    formatXData.push(s);
}
totalData.forEach((item) => {
    item.data.forEach((x) => {
        const idx = newSeriesData.findIndex((d) => d.name === x.name);
        if (idx >= 0) {
            newSeriesData[idx].data.push([item.year, x.value]);
        } else {
            const para = {
                name: x.name,
                type: 'line',
                data: [],
            };
            para.data.push([item.year, x.value]);
            newSeriesData.push(para);
        }
    });
});
const Xlabels = newSeriesData[0].data.map((item) => item[0]); // 用于筛选有数据的横坐标

option = {
    tooltip: {
        trigger: 'axis',
        formatter(params) {
            let res = params[0].data[0]+'年';
            for (let i = 0; i < params.length; i++) {
                res += '<br>' + params[i].marker + params[i].seriesName + ': ' + 
                params[i].data[1]+"%";
            }
            return res;
        },
    },
    color: ['red', 'blue', 'green', 'purple'],
    legend: {
        orient: 'vertical',
        itemHeight: 15,
        itemWidth: 15,
        icon: 'rect',
        itemGap: 10,
        data: legendData,
        left: '91%',
        x: 'right',
        y: 'center',
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: 70,
        containLabel: true
    },
    toolbox: {
        feature: {},
    },
    xAxis: {
        name: '年份',
        // type: 'year',
        type: 'category',
        boundaryGap: true,
        // splitNumber: xData.length - 1 || 0,
        axisTick: {
            // show: true
            alignWithLabel: true,
        },
        // offset: '10%',
        splitLine: {
            //网格线
            show: false,
        },
        axisLabel: {
            // 横坐标间隔
            interval(index, value) {
                if (Xlabels.includes(value)) {
                    return true;
                }
            },
            show: true,
            textStyle: {
                fontSize: 16,
            }
        },
        data: formatXData,
    },
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: 14,
                },
            },
        },
        {
            name: '（%）',
            position: 'left',
            nameLocation: 'center',
            nameGap: 40, //与轴线间距
            nameTextStyle: {
                fontSize: 16,
            },
        },
    ],
    series: newSeriesData,
};
