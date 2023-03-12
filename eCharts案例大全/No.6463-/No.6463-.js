data = [{
        name: "工程进度",
        value: 57.87
    },
    {
        name: "支付进度",
        value: 14.18
    },

];


option = {
    backgroundColor: 'RGB(8,20,67)',
    color: [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(10,31,95,1)'
        }, {
            offset: 1,
            color: 'rgba(1,232,254,1)'
        }],
        global: false
    }],
    grid: {
        top: '16%',
        bottom: '54%',
        left: "50%",
        containLabel: false
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        z: 3,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            inside: false,
            textStyle: {
                color:'#4EB8FC',
                fontSize: 25,
            },
            show: false
        },
        data: ['工程进度', '支付进度']
    }],
    xAxis: [{
        show: false
    }],
    series: [{
            name: '进度',
            type: 'pie',
            z: 2,
            hoverAnimation: false,
            radius: ['58%', '54%'],
            center: ["50%", "55%"],
            label: {
                show: true,
                formatter: '{d}%',
                color:'#F6AF65',
                fontSize: 20,
                position: 'inside'
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 57.87,
                name: '工程进度'
            }, {
                value: 100 - 57.87,
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 50
                },
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                hoverAnimation: false
            }]
        },
        {
            name: '背景线',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: true,
            hoverAnimation: false,
            radius: ['71%', '69%'],
            center: ["50%", "55%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
            },
            data: [{
                value: 100,
                itemStyle: {
                    color: "RGB(12,64,128)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }]
        },
        {
            name: '进度',
            type: 'pie',
            clockWise: true,
            z: 2,
            hoverAnimation: false,
            radius: ['73%', '68%'],
            center: ["50%", "55%"],
            label: {
                show: true,
                formatter: '{d}%',
                color: 'RGB(246,175,101)',
                fontSize: 20,
                position: 'inside'
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 14.18,
                name: '支付进度'
            }, {
                value: 100 - 14.18,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                hoverAnimation: false
            }]
        },
        {
            name: '背景线',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: true,
            hoverAnimation: false,
            radius: ['56%', '54%'],
            center: ["50%", "55%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
            },
            data: [{
                value: 100,
                itemStyle: {
                    color: "RGB(12,64,128)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }]
        },
    ],
};