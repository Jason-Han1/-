const result = {
    indicator: [
        {
            indicator_name: 'Mon',
            indicator_value: '150',
        },
        {
            indicator_name: 'Tue',
            indicator_value: '230',
        },
        {
            indicator_name: 'Web',
            indicator_value: '224',
        },
        {
            indicator_name: 'Thu',
            indicator_value: '218',
        },
        {
            indicator_name: 'Fri',
            indicator_value: '135',
        },
        {
            indicator_name: 'Sat',
            indicator_value: '147',
        },
        {
            indicator_name: 'Sun',
            indicator_value: '260',
        },
    ],
};
var xAxisData = ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'];
var yAxisData = [150, 230, 224, 218, 135, 147, 260];

var series = [];

var indicator = [
    {
        indicator_name: '周',
        indicator_value: '指标值',
    },
];
if (result.indicator) {
    for (const iterator of result.indicator) {
        indicator.push({
            indicator_name: iterator.indicator_name,
            indicator_value: parseFloat(iterator['indicator_value']).toFixed(3),
        });
    }
}

series.push({
    name: '指标',
    type: 'custom',
    data: indicator,
    coordinateSystem: 'none',
    renderItem: function renderItem(params, api) {
        const style = api.style({
            stroke: 'black',
            fill: params.dataIndex === 0 ? '#dcdcdc' : null,
        });
        const apiWidth = api.getWidth();
        const apiHeight = api.getHeight();
        let font;
        let height;
        let y0;
        debugger;
        if (params.dataIndex === 0) {
            font = 'bolder 1.5em "Microsoft YaHei", sans-serif';
            height = apiHeight * 0.07;
            y0 = apiHeight * 0.07 + 1;
        } else {
            font = '1.1em "Microsoft YaHei", sans-serif';
            height = apiHeight * 0.052;
            y0 = apiHeight * 0.088 + params.dataIndex * height + 1;
        }
        const x0 = apiWidth * 0.54;
        const value = indicator[params.dataIndex];
        return {
            type: 'group',
            children: [
                {
                    type: 'rect',
                    shape: {
                        x: x0,
                        y: y0,
                        width: 0.29 * apiWidth,
                        height: height,
                    },
                    style: style,
                },
                {
                    type: 'text',
                    style: {
                        text: value['indicator_name'],
                        font: font,
                        x: x0 + 3,
                        y: y0 + height / 3,
                    },
                },
                {
                    type: 'rect',
                    shape: {
                        x: x0 + 0.29 * apiWidth,
                        y: y0,
                        width: 0.1 * apiWidth,
                        height: height,
                    },
                    style: style,
                },
                {
                    type: 'text',
                    style: {
                        text: value.indicator_value,
                        font: font,
                        x: x0 + 0.29 * apiWidth + 3,
                        y: y0 + height / 3,
                    },
                },
            ],
        };
    },
});

option = {
    title: [
        {
            text: '周图表',
        },
    ],
    tooltip: {
        formatter: '{a}: {c}',
    },
    toolbox: {
        show: true,
        feature: {
            myTool: {
                show: true,
                title: '导出Excel',
                icon: 'image://http://echarts.baidu.com/images/favicon.png',
                onclick: function () {
                    alert('导出成功！');
                },
            },
            magicType: {
                show: true,
                type: ['line'],
            },
        },
        top: '10',
        right: '50',
    },
    series: series,
};
option1 = {
    title: [
        {
            text: '周折线图',
            x: '23%',
            y: '50%',
            textAlign: 'center',
        },
    ],
    tooltip: {
        formatter: '{a}: {c}',
    },
    toolbox: {
        show: true,
        feature: {
            myTool: {
                show: true,
                title: '数据视图',
                icon: 'image://http://echarts.baidu.com/images/favicon.png',
                onclick: function () {
                    myChart.clear();
                    myChart.setOption(option);
                },
            },
            dataZoom: { show: true, title: { zoom: '区域缩放', back: '区域缩放还原' } },
        },
        top: '10',
        right: '50',
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
        },
    ],
};
myChart.on('magictypechanged', function () {
    console.log('sasda');
    myChart.clear();
    myChart.setOption(option1);
});
