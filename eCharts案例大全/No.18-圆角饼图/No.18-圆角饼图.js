var trafficWay = [
    {
        name: '病假',
        value: 20,
    },
    {
        name: '事假',
        value: 10,
    },
    {
        name: '婚假',
        value: 30,
    },
    {
        name: '丧假',
        value: 40,
    },
    {
        name: '年休假',
        value: 40,
    },
    {
        name: '产假',
        value: 40,
    },
    {
        name: '调休',
        value: 40,
    },
    {
        name: '陪产假',
        value: 40,
    },
];

var data = [];
var color = ['#2ca1ff', '#0adbfa', '#febe13', '#65e5dd', '#7b2cff', '#fd5151', '#f071ff', '#85f67a'];
for (var i = 0; i < trafficWay.length; i++) {
    data.push(
        {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    shadowBlur: 20,
                    borderRadius: 20, // 圆角
                    borderColor: color[i],
                    shadowColor: color[i],
                },
            },
        },
        {
            value: 8,
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
var seriesOption = [
    {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [105, 109],
        hoverAnimation: false,
        center: ['50%', '50%'],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                },
            },
        },
        data: data,
    },
];
option = {
    backgroundColor: '#0A2E5D',
    color: color,
    tooltip: {
        show: false,
    },
    toolbox: {
        show: false,
    },
    series: seriesOption,
};
