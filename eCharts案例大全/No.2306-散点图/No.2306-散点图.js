var data = [
    [
        [34, 77, '第1部门', '第一季度'],
        [43, 37.4, '第2部门', '第一季度'],
        [23, 68, '第3部门', '第一季度'],
        [54, 44.7,'第4部门', '第一季度'],
        [23, -15, '第5部门', '第一季度'],
        [87, 27.1,'第6部门', '第一季度'],
        [67, 65.4, '第7部门', '第一季度'],
        [97, 86.1, '第8部门', '第一季度'],
        [56, -57.7, '第9部门', '第一季度'],
        [35, 35.1, '第10部门', '第一季度'],
        [46, -67.9, '第11部门', '第一季度']
    ],
    [
        [86, 86.8,'第1部门', '第二季度'],
        [56, -41.7, '第2部门', '第二季度'],
        [34, 26.9, '第3部门', '第二季度'],
        [76, 88.5, '第4部门', '第二季度'],
        [24, -20.8, '第5部门', '第二季度'],
        [86, -41.9,'第6部门', '第二季度'],
        [23, -61.1, '第7部门', '第二季度'],
        [46, 82.8, '第8部门', '第二季度'],
        [75, -73.8, '第9部门', '第二季度'],
        [24, 53.5, '第10部门', '第二季度'],
        [86, 29.4, '第11部门', '第二季度']
    ],
];

option = {
    backgroundColor: 'rgba(7, 29, 29,1)',
    grid: {
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '10%',
    },
    title: {
        top: '2%',
        left: 'center',
        textStyle: {
            fontSize: 14,
            color: '#ffffff',
        },
        text: '第一季度和第二季度各部门XXXXXXX比',
    },
    tooltip:{
        show:true
    },
    legend: {
        right: 'center',
        top:'5%',
        textStyle: {
            fontSize: 12,
            color: 'rgba(255,255,255,.8)',
        },
        data: ['第一季度','第二季度'],
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.2)',
            },
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)',
            },
        },
        axisLabel: {
            color: 'rgba(255,255,255,.7)',
        },
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.2)',
            },
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)',
            },
        },
        axisLabel: {
            color: 'rgba(255,255,255,.7)',
        },

        scale: true,
    },
    series: [
        {
            name:'第一季度',
            data: data[0],
            type: 'scatter',
            symbolSize: function (data) {
                return data[1];
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2];
                    },
                    position: 'top',
                    color:'#fff',
                    fontSize:'14'
                },
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                        {
                            offset: 0,
                            color: 'rgb(251, 118, 123)',
                        },
                        {
                            offset: 1,
                            color: 'rgb(204, 46, 72)',
                        },
                    ]),
                },
            },
        },
        {
            name: '第二季度',
            data: data[1],
            type: 'scatter',
            symbolSize: function (data) {
                return data[0];
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2];
                    },
                    position: 'top',
                    color:'#fff',
                    fontSize:'14'
                },
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                        {
                            offset: 0,
                            color: 'rgb(129, 227, 238)',
                        },
                        {
                            offset: 1,
                            color: 'rgb(25, 183, 207)',
                        },
                    ]),
                },
            },
        },
    ],
};
