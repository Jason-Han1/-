var colorList = ['#22D7BB', '#24AAFF', '#5EDDF8', '#FCB840', '#F9D660'];
var data = [
    {
        value: 36,
        lr: 2435.22,
        name: '成都城电1',
    },
    {
        value: 12,
        lr: 2435.22,
        name: '成都城电2',
    },
    {
        value: 45,
        lr: 2435.22,
        name: '成都城电3',
    },
    {
        value: 60,
        lr: 2435.22,
        name: '成都城电4',
    },
    {
        value: 23,
        lr: 2435.22,
        name: '成都城电5',
    },
];
var dataChart = [];
var sum = 0;
data.forEach((item) => {
    sum += Number(item.value);
});
data.map((item,index) => {
    if (item.value != 0) {
        dataChart.push(
            {
                value: item.value,
                lr: item.lr,
                name: item.name,
                 itemStyle: {
                normal: {
                  color:colorList[index]
                },
            },
            },
            {
                value: sum / 150,
                itemStyle: {
                    normal: {
                        color: '#FFFFFF',
                    },
                },
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            }
        );
    }
});
option = {
    backgroundColor: '#FFFFFF',
    color: colorList,
    grid: {
        bottom: 150,
        left: 0,
        right: '10%',
    },

    legend: {
        show: false,
        orient: 'vertical',
        top: 'middle',
        right: '5%',
        textStyle: {
            color: '#f2f2f2',
            fontSize: 25,
        },
        icon: 'roundRect',
    },
    series: [
        // 边框设置
        {
            radius: ['45%', '58%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: false,
                },
            },
            animation: false,
            tooltip: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: 'rgba(206,213,225,0.12)',
                },
            },
            data: [1],
        },
        // 内圈
        {
            radius: ['0%', '32%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: false,
                },
            },
            animation: false,
            tooltip: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: 'rgba(206,213,225,0.3)',
                },
            },
            data: [1],
        },
        // 主要展示层的
        {
            radius: ['33%', '50%'],
            center: ['50%', '50%'],
            type: 'pie',
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },

            label: {
                show: true,
                position: 'outside',
                formatter: function (params, ticket, callback) {
                    return (
                        '{radius|■}{name|' +
                        params.name +
                        '}\n{value|' +
                        '收入：' +
                        params.value +
                        '}\n{lr|' +
                        '利润：' +
                        params.data.lr +
                        '}'
                    );
                },
                padding: [-10, -80],
                rich: {
                    radius: {
                        padding: [0, 8, 0, 0],
                        fontSize: 20,
                    },
                    name: {
                        color: '#656A73',
                        align: 'left',
                        fontSize: 16,
                        padding: [25, 0],
                    },
                    value: {
                        fontSize: 14,
                        padding: [0, 0],
                        color: '#18191B',
                        align: 'left',
                    },
                    lr: {
                        color: '#18191B',
                        align: 'left',
                        fontSize: 14,
                        padding: [7, 0],
                    },
                },
            },
            labelLine: {
                normal: {
                    length: 20,
                    length2: 150,
                    lineStyle: {
                        width: 1,
                    },
                },
            },
            // data: [
            //     {
            //         value: 12081.36,
            //         lr: 2435.22,
            //         name: '成都城电',
            //     },
            //     {
            //         value: 12081.36,
            //         lr: 2438.22,
            //         name: '四川锦能',
            //     },
            //     {
            //         value: 12081.36,
            //         lr: 2438.22,
            //         name: '四川美卓',
            //     },
            //     {
            //         value: 12081.36,
            //         lr: 2438.22,
            //         name: '乐山城电',
            //     },
            //     {
            //         value: 12081.36,
            //         lr: 2438.22,
            //         name: '四川南充',
            //     },
            // ],
            data: dataChart,
        },
    ],
};
