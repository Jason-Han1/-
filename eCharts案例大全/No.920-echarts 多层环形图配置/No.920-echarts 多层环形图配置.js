var trafficWay = [
    {
        name: '正常',
        value: 14294,
    },
    {
        name: '报警',
        value: 314,
    },
    {
        name: '离线',
        value: 5137,
    },
    {
        name: '故障',
        value: 245,
    },
];

var data = [];
var color = ['#00ffff', '#409B5C', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000'];
for (var i = 0; i < trafficWay.length; i++) {
    data.push(
        {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor: color[i],
                    shadowColor: color[i],
                },
            },
        },
        {
            value: 2,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0,
                },
            },
        }
    );
}
var scaleData = [20, 20, 27, 23];

var placeHolderStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0,
    },
};
var datas = [];
for (var i = 0; i < scaleData.length; i++) {
    datas.push(
        {
            value: scaleData[i],
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 30,
                    borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                        {
                            offset: 0,
                            color: '#F3C004',
                        },
                        {
                            offset: 1,
                            color: '#F3C004',
                        },
                    ]),
                    shadowColor: 'rgba(142, 152, 241, 0.6)',
                },
            },
        },
        {
            value: 4,
            itemStyle: placeHolderStyle,
        }
    );
}
var seriesOption = [
    {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: ['45%', '46%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#ddd',
                    formatter: function (params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < trafficWay.length; i++) {
                            total += trafficWay[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            return '设备状态：' + params.name + '\n' + '\n' + '占百分比：' + percent + '%';
                        } else {
                            return '';
                        }
                    },
                },
                labelLine: {
                    length: 30,
                    length2: 100,
                    show: true,
                    color: '#00ffff',
                },
            },
        },
        data: data,
    },
    {
        name: '',
        type: 'pie',
        clockWise: true,
        radius: ['35%', '36%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#ddd',
                },
                labelLine: {
                    show: false,
                },
            },
        },
        data: datas,
    },
];
option = {
    backgroundColor: '#0A2E5D',
    color: color,
    title: {
        text: '设备状态',
        top: '48%',
        textAlign: 'center',
        left: '49%',
        textStyle: {
            color: '#fff',
            fontSize: 22,
            fontWeight: '400',
        },
    },

    legend: {
        icon: 'circle',
        orient: 'horizontal',
        // x: 'left',
        data: ['正常', '报警', '离线', '故障'],
        right: 320,
        bottom: 120,
        align: 'right',
        textStyle: {
            color: '#fff',
        },
        itemGap: 20,
    },

    series: seriesOption,
};
