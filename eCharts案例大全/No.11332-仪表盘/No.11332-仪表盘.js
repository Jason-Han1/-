var myRate1 = 1000;
option = {
    backgroundColor: '#031845',

    tooltip: {
        show: true,


    },
    series: [{
        type: 'gauge',
        center: ['50%', '55%'], // 默认全局居中  
        radius: '50%',
        splitNumber: 10, //刻度数量
        min: 0,
        max: 1000,
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
            length: -15,
            splitNumber: 10
        },
        splitLine: {
            show: true,
            length: -20,
            lineStyle: {
                color: '#03B7C9',
            }
        },
        axisLabel: {
            show: false,
            distance: -20,
            textStyle: {
                color: "#03B7C9",
                fontSize: "15",
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
            value: 2000
        }]
    },{
        type: 'gauge',
        center: ['50%', '55%'], // 默认全局居中  
        radius: '40%',
        splitNumber: 10, //刻度数量
        min: 0,
        max: 1000,
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
            length: -15,
            splitNumber: 10
        },
        splitLine: {
            show: true,
            length: -20,
            lineStyle: {
                color: '#03B7C9',
            }
        },
        axisLabel: {
            show: false,
            distance: -20,
            textStyle: {
                color: "#03B7C9",
                fontSize: "15",
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
            value: 500
        }]
    },
            {
        type: 'gauge',
        radius: '50%',
        center: ['50%', '55%'], // 默认全局居中
        splitNumber: 10, //刻度数量
        min: 0,
        max: 436,  
        startAngle: 200,
        endAngle: 90,
        axisLine: {
            show: true,
            lineStyle: {
                width: 10,
                shadowBlur: 0,
                color: [
                    [1, '#03B000']
                ]
            }
        },
        axisTick: {
          show: true, lineStyle: {
                color: '#03B000',
                width: 1
            },
            length: -15,
            splitNumber: 10
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
            
                color: '#03B000', 
             
        },
        detail: {
            show: true,
            offsetCenter: [0, '30%'],
            textStyle: {
                fontSize: 30
            }
        },
        itemStyle: {
            normal: {
                color: "#03B7C9",

            }
        },
        data: [{
            value: 836
        }]
    }]
};