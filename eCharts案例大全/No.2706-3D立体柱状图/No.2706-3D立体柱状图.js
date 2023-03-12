yListData=['154','121','146','135','115']
xList = ['第一部门', '第二部门', '第三部门', '第四部门', '第五部门'];
color = ['#FF9A40', '#F3CD48', '#20D6B3', '#4BE6E6', '#4BE6E6'];
xData = xList.map((item, index) => {
    return {
        value: item,
        textStyle: {
            color: color[index],
        },
    };
});
colors = [
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0.5,
                color: 'rgba(255, 154, 64, 0.7)',
            },
            {
                offset: 0.5,
                color: 'rgba(255, 154, 64, 0.4)',
            },
            {
                offset: 0.5,
                color: 'rgba(255, 154, 64, 0.6)',
            },
            {
                offset: 1,
                color: 'rgba(255, 154, 64, 0.4)',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0.5,
                color: 'rgba(243, 205, 72, 0.7)',
            },
            {
                offset: 0.5,
                color: 'rgba(243, 205, 72, 0.4)',
            },
            {
                offset: 0.5,
                color: 'rgba(243, 205, 72, 0.6)',
            },
            {
                offset: 1,
                color: 'rgba(243, 205, 72, 0.4)',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0.5,
                color: 'rgba(32, 214, 179, 0.7)',
            },
            {
                offset: 0.5,
                color: 'rgba(32, 214, 179, 0.4)',
            },
            {
                offset: 0.5,
                color: 'rgba(32, 214, 179, 0.6)',
            },
            {
                offset: 1,
                color: 'rgba(32, 214, 179, 0.4)',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0.5,
                color: 'rgba(75, 230, 230, 0.7)',
            },
            {
                offset: 0.5,
                color: 'rgba(75, 230, 230, 0.4)',
            },
            {
                offset: 0.5,
                color: 'rgba(75, 230, 230, 0.6)',
            },
            {
                offset: 1,
                color: 'rgba(75, 230, 230, 0.4)',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0.5,
                color: 'rgba(75, 230, 230, 0.4)',
            },
            {
                offset: 0.5,
                color: 'rgba(75, 230, 230, 0.4)',
            },
            {
                offset: 0.5,
                color: 'rgba(75, 230, 230, 0.6)',
            },
            {
                offset: 1,
                color: 'rgba(75, 230, 230, 0.4)',
            },
        ],
    },
];
option = {
    backgroundColor: 'rgba(7, 29, 29,1)',
    title: {
        text: '各部门一月份完成项目数',
        textStyle: {
            color: '#FFFFFF',
            fontWeight: '800',
            fontSize: `20`,
        },
        left: 'center',
        top: '2%',
    },
    tooltip: {
        show: true,
    },
    grid: {
        left: '10%',
        right: '10%',
        top: '20%',
        bottom: '10%',
    },
    xAxis: {
        nameTextStyle: {
            color: '#FFFFFF',
            padding: [0, 0, 0, 20],
        },
        data: xData, //{}
        show: true,
        type: 'category',
        axisLine: {
            show: true,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)',
            },
        },
        axisLabel: {
            fontSize: 12,
            margin: 20,
        },
    },
    yAxis: {
        show: true,
        splitNumber: 8,
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(76, 230, 231, 0.1)',
            },
        },
        axisLabel: {
            color: 'rgba(157, 207, 207, 1)',
        },
    },
    series: [
        {
            type: 'bar',
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colors[params.dataIndex % 7];
                    },
                },
            },
            label: {
                show: true,
                position: [20, -30],
                color: '#ffffff',
                fontSize: 12,
                align: 'center',
            },
            data:yListData,
        },
        {
            z: 2,
            type: 'pictorialBar',
            data:yListData,
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [40, 20],
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colors[params.dataIndex % 7];
                    },
                },
            },
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data:yListData,
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [40, 20],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function (params) {
                        return colors[params.dataIndex % 7].colorStops[0].color;
                    },
                },
            },
        },
    ],
};
