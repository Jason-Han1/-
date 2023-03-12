var data = [
    {
        name: '良好',
        value:20,
    },
    {
        name: '一般',
        value: 10,
    },
    {
        name: '较差',
        value: 5,
    },
];
var colorArr = ['#138AF5', '#2CD7F9', '#20D189'];
function getRich() {
    let result = {};
    colorArr.forEach((v, i) => {
        result[`normal${i}`] = {
            fontSize: 16,
            align: 'left',
            padding: [30, 4, 0, 0],
            color: '#BDC8DC',
            fontFamily: 'PingFang',
        };
    });
    return result;
}

option = {
    color: colorArr,
    backgroundColor: '#071330',
    grid: {
        bottom: 150,
        left: 100,
        right: '10%',
    },
    series: [
        // 主要展示层的
        {
            radius: ['25%', '60%'],
            center: ['50%', '50%'],
            type: 'pie',
       startAngle: 20,
            label: {
                normal: {
                    show: true,
                    formatter: function (params, ticket, callback) {
                        aa = params.dataIndex;
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < data.length; i++) {
                            total += data[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0) + '%';
                        const index = params.dataIndex;
                        return [`{normal${index}|${params.name}：}{normal${index}|${percent}}`].join('\n');
                    },
                    padding: [0, -80],
                    rich: getRich(),
                },
                emphasis: {
                    show: true,
                },
            },
            labelLine: {
                lineStyle: {
                    color: '#124DBD',
                },
                length: 10,
                length2: 80,
            },
            name: '民警训练总量',
            data: data,
        },
        // 边框的设置
        {
            radius: ['25%', '30%'],
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
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            animation: false,
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 1,
                    itemStyle: {
                        color: 'rgba(37,109,137,0.22)',
                    },
                },
            ],
        },
        {
            name: '外边框',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['65%', '65%'],
            label: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 9,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: 'rgba(126,158,255,0.43)',
                        },
                    },
                },
            ],
        },
    ],
};
