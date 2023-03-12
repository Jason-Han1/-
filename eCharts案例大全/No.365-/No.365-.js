const seriesData = [
    { name: 'A', data: [320, 302, 301, 334, 390, 330, 320, 301, 334, 390] },
    { name: 'B', data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134] },
    { name: 'C', data: [220, 182, 191, 234, 290, 330, 310, 191, 234, 290] },
    { name: 'D', data: [150, 212, 201, 154, 190, 330, 410, 201, 154, 190] },
    { name: 'E', data: [820, 832, 901, 934, 1290, 1330, 1320, 832, 901, 934] },
];
const legnedList = seriesData.map((v) => v.name);
const nameList = [
    'https://test-micro-open-biyi-admin-api-project-wzc.entry.ctbiyi.com/swagger-ui/index.html',
    'https://echarts.apache.org/examples/zh/editor.html?c=bar-y-category-stackcategory-stack',
    'https://echarts.apache.org/examples/zh/editor.html?c=bar-y',
    'https://echarts.apache.org/examples/zh/editor.html?c=bar-y-category-stackcategory-stack',
    'https://echarts.apache.org/examples/zh/editor.html?c=bar-y',
    'https://echarts.apache.org/examples/',
    'https://echarts.apache.org/examples/zh/editor.html?c=bar-y-category-stackzh/editor.html?c=bar-y-category-tack',
    'https://echarts.apache.org/examples/',
    'https://echarts.apache.org/examples/zh/editor.html?c=bar-y',
    'https://echarts.apache.org/examples/',
];
const maxNameLen = nameList.reduce((prev, curr) => {
    return prev.length > curr.length ? prev : curr;
}).length;
const toolTipPanel = function ({ color, seriesName, value }) {
    const item =
        '<div style="display: flex; justify-content: space-between; align-items: center; line-height: 1.5rem"><div style="display: flex; align-items: center">' +
        `<div style="width: 10px; height: 10px; border-radius: 10px; background-color:` +
        color +
        `"></div><div style="margin-left: 5px;">${seriesName}</div></div><div style="font-weight: bold; color:` +
        color +
        `">${value}</div></div>`;
    return item;
};
option = {
    color: ['rgba(255,0,0,0.0)', '#ccc', '#5470c6', '#fbcf6d', '#ee6666', '#73c0de'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        confine: true,
        formatter: function (params) {
            let title = `<div>${params[0].name}</div>`;
            params.slice(1).forEach((c) => {
                title += toolTipPanel(c);
            });
            return title;
        },
    },
    legend: {
        data: legnedList,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: true,
            interval: 5,
            lineStyle: {
                type: [5, 5],
                dashOffset: 15,
                cap: 'round',
                join: 'miter',
            },
        },
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            show: false,
        },
        axisTick: {
            inside: true,
        },
        data: nameList,
    },
    series: [
        {
            name: '',
            type: 'bar',
            barWidth: 15,
            label: {
                show: true,
                color: '#000',
                fontSize: 12,
                width: 600,
                overflow: 'truncate',
                align: 'left',
                formatter: function (params) {
                    return nameList[params.dataIndex];
                },
            },
            data: new Array(nameList.length).fill(100),
        },
        ...seriesData.map((v) => {
            return {
                name: v.name,
                type: 'bar',
                stack: 'total',
                barWidth: 20,
                barCategoryGap : 20,
                label: {
                    show: false,
                },
                emphasis: {
                    focus: 'series',
                },
                data: v.data,
            };
        }),
    ],
};
