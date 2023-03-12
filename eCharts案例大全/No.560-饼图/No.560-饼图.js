var trafficWay = [
    {
        name: '完成',
        value: 85,
    },
    {
        name: '未完成',
        value: 15,
    },
];
var nameArray = trafficWay.map((item) => {
    return item.name;
});

var data = [];
var color = ['#77FBFF', '#0F5189'];
for (var i = 0; i < trafficWay.length; i++) {
    data.push(
        {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
                normal: {
                    color: color[i],
                    borderRadius: 100,
                },
            },
        },
        {
            value: 1,
            color: '#0F5189',
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
option = {
    backgroundColor: '#0E1327',
     title: {
         text: '85%',
         textStyle: {
             color: '#ffffff',
             fontSize: 22,
             fontWeight:'normal',
             fontFamily:"PingFang",

         },
         x: 'center',
         y: 'center',
     },
    tooltip: {
        show: false,
        formatter: '{a} <br/>{b} : {c}%',
    },

    series: [
        {
            name: '',
            type: 'pie',
            startAngle: '180',
            clockWise: false,
            hoverAnimation: false,
            radius: ['54%', '56%'],
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

        {
            type: 'pie',
            name: '外层辅助',
            radius: ['74%', '74.5%'],
            center: ['50%', '50%'],
            startAngle: '360',
            endAngle: '0',
            data: [
                {
                    value: 1,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                    },
                },
            ],

            itemStyle: {
                normal: {
                    color: '#4BC2C5',
                    opacity: 0.16,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: false,
        },
        {
            type: 'pie',
            name: '外层辅助',
            radius: ['68%', '68.5%'],
            center: ['50%', '50%'],
            startAngle: '360',
            endAngle: '0',
            data: [
                {
                    value: 1,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                    },
                },
            ],

            itemStyle: {
                normal: {
                    color: '#188AED',
                    opacity: 0.45,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: false,
        },
    ],
};
