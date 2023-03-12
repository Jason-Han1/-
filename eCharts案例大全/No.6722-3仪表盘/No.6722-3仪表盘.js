var tTitle = '第27周';
var data = [
    { value: 98,  name: '成品合格率' },
    { value: 99,  name: '来料合格率' },
    { value: 89,  name: '过程合格率' },
]
option = {
    backgroundColor: '#031845',
    title: {
        x: 'center',
        bottom: 50,
        text: tTitle,
        textStyle: {
            fontWeight: 'normal',
            fontSize: 30,
            color: "#fff"
        },
    },
    tooltip: {
        show: false,
    },
    series: 
    [
    {
        type: 'gauge',
        name: '中，外',
        center: ['50%', '50%'], // 默认全局居中  
        radius: '50%',
        splitNumber: 10, //刻度数量
        min: 0,
        max: 100,
        startAngle: 220,
        endAngle: -40,
        clockwise: true,
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                    [1, '#468EFD']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#468EFD',
                width: 1
            },
            length: -15,
            // splitNumber: 10
        },
        splitLine: {
            show: true,
            length: -20,
            lineStyle: {
                color: '#468EFD',
            }
        },
        axisLabel: {
            distance: -20,
            textStyle: {
                color: "#468EFD",
                fontSize: 20,
                fontWeight: "bold"
            }
        },
        pointer: { //仪表盘指针
            show: 0
        },
        detail: {
            show: false
        }
    }, 
    {
        name: data[0].name,
        type: 'gauge',
        startAngle: 220,
        endAngle: -40,
        center: ['50%', '50%'], // 默认全局居中  
        radius: '45%',
        min: 0,
        max: 100,
        splitNumber: 2,
        axisLine: { // 坐标轴线  
            lineStyle: {
                color: [
                    [0.6, '#E75B64'],
                    [1, "#55CD96"]
                ], // 属性lineStyle控制线条样式  
                width: 3
            }
        },
        axisLabel: { // 坐标轴小标记 
            show: false
        },
        splitLine: { // 分隔线
            show: false,
        },
        pointer: { // 分隔线 指针 
            show: true
        },
        detail: {
            show: true,
            textStyle: {
                fontSize: 60
            },
            formatter: function(value) {
                return value + '{a|%}';
            },
            rich: {
                a: {
                    fontSize: 45
                }
            }
        },
        title: {
            show: true,
            offsetCenter: ["0", "80%"],
            color: "#C1ED84",
            // fontWeight: "bolder",
            fontSize: 27
        },
        data: [data[0]]}, 
    {
        type: 'gauge',
        name: '左，外',
        center: ['20%', '55%'], // 默认全局居中  
        radius: '35%',
        splitNumber: 5, //刻度数量
        min: 0,
        max: 100,
        endAngle: 45,
        clockwise: true,
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                    [1, '#468EFD']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#468EFD',
                width: 1
            },
            length: -15,
            splitNumber: 10
        },
        splitLine: {
            show: true,
            length: -20,
            lineStyle: {
                color: '#468EFD',
            }
        },
        axisLabel: {
            distance: -20,
            textStyle: {
                color: "#468EFD",
                fontSize: "15",
                fontWeight: "bold"
            }
        },
        pointer: { //仪表盘指针
            show: 0
        },
        detail: {
            show: false
        }}, 
    {
        type: 'gauge',
        name: data[1].name,
        center: ['20%', '55%'], // 默认全局居中  
        radius: '30%',
        min: 0,
        max: 100,
        endAngle: 45,
        splitNumber: 2,
        axisLine: { // 坐标轴线 
            lineStyle: {
                color: [
                    [0.6, '#E75B64'],
                    [1, "#55CD96"]
                ], // 属性lineStyle控制线条样式  
                width: 3
            }
        },
        axisLabel: { // 坐标轴小标记 
            show: false
        },
        splitLine: { // 分隔线
            show: false,
        },
        pointer: { // 分隔线 指针 
            show: true
        },
        detail: {
            show: true,
            offsetCenter: [0, '50%'],
            textStyle: {
                fontSize: 35
            },
            formatter: function(value) {
                return value + '{a|%}';
            },
            rich: {
                a: {
                    fontSize: 30
                }
            }
        },
        title: {
            show: true,
            offsetCenter: ["0", "80%"],
            color: "#C1ED84",
            // fontWeight: "bolder",
            fontSize: 27
        },
        data: [data[1]]}, 
    {
        type: 'gauge',
        name: '右，外',
        center: ['80%', '55%'], // 默认全局居中  
        radius: '35%',
        splitNumber: 5, //刻度数量
        min: 0,
        max: 100,
        startAngle: 140,
        endAngle: -45,
        clockwise: true,
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                    [1, '#468EFD']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#468EFD',
                width: 1
            },
            length: -15,
            splitNumber: 10
        },
        splitLine: {
            show: true,
            length: -20,
            lineStyle: {
                color: '#468EFD',
            }
        },
        axisLabel: {
            distance: -20,
            textStyle: {
                color: "#468EFD",
                fontSize: "15",
                fontWeight: "bold"
            }
        },
        pointer: { //仪表盘指针
            show: 0
        },
        detail: {
            show: false
        }}, 
    {
        type: 'gauge',
        name: data[2].name,
        center: ['80%', '55%'], // 默认全局居中  
        radius: '30%',
        min: 0,
        max: 100,
        startAngle: 140,
        endAngle: -45,
        splitNumber: 2,
        axisLine: { // 坐标轴线 
            lineStyle: {
                color: [
                    [0.6, '#E75B64'],
                    [1, "#55CD96"]
                ], // 属性lineStyle控制线条样式  
                width: 3
            }
        },
        axisLabel: { // 坐标轴小标记 
            show: false
        },
        splitLine: { // 分隔线
            show: false,
        },
        pointer: { // 分隔线 指针 
            show: true
        },
        detail: {
            show: true,
            offsetCenter: [0, '50%'],
            textStyle: {
                fontSize: 35
            },
            formatter: function(value) {
                return value + '{a|%}';
            },
            rich: {
                a: {
                    fontSize: 30
                }
            }
        },
        title: {
            show: true,
            offsetCenter: ["0", "80%"],
            color: "#C1ED84",
            // fontWeight: "bolder",
            fontSize: 27
        },
        data: [data[2]]
    }
    ]
};