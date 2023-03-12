var myRate1 = 100;
option = {
    backgroundColor: '#141845',
    grid: {
        top: '15%',
        left: '6%',
        right: '5.6%',
        bottom: '6%',
        containLabel: true
    },
    title: [{
        x: "6%",
        bottom: '5%',
        text: '诉求工单月满意度',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: "#fff"
        },
    }, {
        x: "40%",
        bottom: '5%',
        text: '电话评价',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: "#fff"
        },
    }, {
        x: "70%",
        bottom: '5%',
        text: '网站评价',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: "#fff"
        },
    }],
    tooltip: {
        show: true,


    },
    series: [{
        type: 'gauge',
        center: ['50%', '55%'], // 默认全局居中  
        radius: '42%',
        splitNumber: 5, //刻度数量
        min: 0,
        max: 100,
        startAngle: 200,
        endAngle: -20,
        clockwise: true,
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                    [1, '#03B7C9']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#03B7C9',
                width: 1
            },
            length: -5,
            splitNumber: 10
        },
        splitLine: {
            show: true,
            length: -10,
            lineStyle: {
                color: '#03B7C9',
            }
        },
        axisLabel: {
            distance: -18,
            textStyle: {
                color: "#03B7C9",
                fontSize: "12",
                fontWeight: "bold"
            }
        },
        pointer: { //仪表盘指针
            show: 0
        },
        detail: {
            show: false
        },
        data: [{
            name: "",
            value: myRate1
        }]
    }, {
        startAngle: 200,
        endAngle: -20,
        type: 'gauge',
        center: ['50%', '55%'], // 默认全局居中  
        radius: '0%', //白线条
        min: 0,
        max: 110,
        splitNumber: 0,
        axisLine: { // 坐标轴线  
            lineStyle: {
                color: [
                    [0.66, '#dddddd'],
                    [1, '#dddddd']
                ], // 属性lineStyle控制线条样式  
                width: 4
            }
        },


        axisLabel: { // 坐标轴小标记  
            textStyle: { // 属性lineStyle控制线条样式  
                fontWeight: 'bolder',
                fontSize: 12,
                color: 'rgba(30,144,255,0)',
            }
        },
        splitLine: { // 分隔线  
            length: 26, // 属性length控制线长  
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                width: 0,
                color: '#444'
            }
        },
        pointer: { // 分隔线 指针  
            color: '#666666',
            width: 0,
            length: 230
        },
        detail: {
            show: false
        },

    }, {
        name: '电话评价',
        type: 'gauge',
        startAngle: 200,
        endAngle: -20,
        radius: '38%',
        center: ['50%', '55%'], // 默认全局居中  

        min: 0,
        max: 100,

        axisLine: {
            show: false,
            lineStyle: {
                width: 5,
                shadowBlur: 0,
                color: [
                    [0.2, '#00FAFC'],
                    [0.4, '#3BD542'],
                    [0.6, '#E3F424'],
                    [0.8, '#7E48DA'],
                    [1, '#E531A8']
                ]
            }
        },
        axisTick: {
            show: false,

        },
        splitLine: {
            show: false,
            length: 5,

        },

        axisLabel: {
            show: false
        },
        pointer: {
            show: true,
        },
        detail: {
            show: true,
            offsetCenter: [0, '70%'],
            textStyle: {
                fontSize: 14
            }
        },
        itemStyle: {
            normal: {
                color: "#03B7C9",

            }
        },
        data: [{
            value: 80
        }]
    }, {
        type: 'gauge',
        center: ['20%', '55%'], // 默认全局居中  
        radius: '42%',
        splitNumber: 5, //刻度数量
        min: 0,
        max: 100, //在线交流评价刻度
        endAngle: 45,
        clockwise: true,
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                    [1, '#03B7C9']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#03B7C9',
                width: 1
            },
            length: -5,
            splitNumber: 10
        },
        splitLine: {
            show: true,
            length: -10,
            lineStyle: {
                color: '#03B7C9',
            }
        },
        axisLabel: {
            distance: -20,
            textStyle: {
                color: "#03B7C9",
                fontSize: "12",
                fontWeight: "bold"
            }
        },
        pointer: { //仪表盘指针
            show: 0
        },
        detail: {
            show: false
        },
        data: [{
            name: "",
            value: myRate1
        }]
    }, {
        type: 'gauge',
        center: ['30%', '55%'], // 默认全局居中  
        radius: '0%',
        min: 0,
        max: 100,
        endAngle: 45,
        splitNumber: 0,
        axisLine: { // 坐标轴线  
            lineStyle: {
                color: [
                    [0.66, '#dddddd'],
                    [1, '#dddddd']
                ], // 属性lineStyle控制线条样式  
                width: 4
            }
        },


        axisLabel: { // 坐标轴小标记  
            textStyle: { // 属性lineStyle控制线条样式  
                fontWeight: 'bolder',
                fontSize: 16,
                color: 'rgba(30,144,255,0)',
            }
        },
        splitLine: { // 分隔线  
            length: 10, // 属性length控制线长  
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                width: 0,
                color: '#444'
            }
        },
        pointer: { // 分隔线 指针  
            color: 'red',
            width: 0,
            length: 50
        },
        detail: {
            show: false
        },

    }, {
        name: '在线交流评价',
        type: 'gauge',
        endAngle: 45,
        radius: '38%', //有颜色的半径
        center: ['20%', '55%'], // 默认全局居中  

        min: 0,
        max: 100,

        axisLine: {
            show: false,
            lineStyle: {
                width: 5,
                shadowBlur: 0,
                color: [
                    [0.2, '#00FAFC'],
                    [0.4, '#3BD542'],
                    [0.6, '#E3F424'],
                    [0.8, '#7E48DA'],
                    [1, '#E531A8']
                ]
            }
        },
        axisTick: {
            show: false,

        },
        splitLine: {
            show: false,
            length: 20,

        },

        axisLabel: {
            show: false
        },
        pointer: {
            show: true,
        },
        detail: { //仪表盘数字的位置
            show: true,
            offsetCenter: [0, '70%'],
            textStyle: {
                fontSize: 14
            }
        },
        itemStyle: {
            normal: {
                color: "#03B7C9",

            }
        },
        data: [{
            value: 65
        }]
    }, {
        type: 'gauge',
        center: ['80%', '55%'], // 默认全局居中  
        radius: '42%',
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
                    [1, '#03B7C9']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#03B7C9',
                width: 1
            },
            length: -5,
            splitNumber: 10
        },
        splitLine: {
            show: true,
            length: -10,
            lineStyle: {
                color: '#03B7C9',
            }
        },
        axisLabel: {
            distance: -15,
            textStyle: {
                color: "#03B7C9",
                fontSize: "12",
                fontWeight: "bold"
            }
        },
        pointer: { //仪表盘指针
            show: 0
        },
        detail: {
            show: false
        },
        data: [{
            name: "",
            value: myRate1
        }]
    }, {
        type: 'gauge',
        center: ['80%', '55%'], // 默认全局居中  
        radius: '0%',
        min: 0,
        max: 100,
        startAngle: 140,
        endAngle: -45,
        splitNumber: 0,
        axisLine: { // 坐标轴线  
            lineStyle: {
                color: [
                    [0.66, '#dddddd'],
                    [1, '#dddddd']
                ], // 属性lineStyle控制线条样式  
                width: 1
            }
        },


        axisLabel: { // 坐标轴小标记  
            textStyle: { // 属性lineStyle控制线条样式  
                fontWeight: 'bolder',
                fontSize: 16,
                color: 'rgba(30,144,255,0)',
            }
        },
        splitLine: { // 分隔线  
            length: 10, // 属性length控制线长  
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                width: 0,
                color: '#444'
            }
        },
        pointer: { // 分隔线 指针  
            color: '#666666',
            width: 0,
            length: 20
        },
        detail: {
            show: false
        },

    }, {
        name: '网站评价',
        type: 'gauge',
        startAngle: 140,
        endAngle: -45,
        radius: '38%',
        center: ['80%', '55%'], // 默认全局居中  

        min: 0,
        max: 100,

        axisLine: {
            show: false,
            lineStyle: {
                width: 5,
                shadowBlur: 0,
                color: [
                    [0.2, '#00FAFC'],
                    [0.4, '#3BD542'],
                    [0.6, '#E3F424'],
                    [0.8, '#7E48DA'],
                    [1, '#E531A8']
                ]
            }
        },
        axisTick: {
            show: false,

        },
        splitLine: {
            show: false,
            length: 20,

        },

        axisLabel: {
            show: false
        },
        pointer: {
            show: true,
        },
        detail: {
            show: true,
            offsetCenter: [0, '70%'],
            textStyle: {
                fontSize: 14
            }
        },
        itemStyle: {
            normal: {
                color: "#03B7C9",

            }
        },
        data: [{
            value: 50
        }]
    }]
};