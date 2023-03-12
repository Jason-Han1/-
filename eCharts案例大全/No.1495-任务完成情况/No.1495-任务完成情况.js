var myRate1 = 1000;
var option = {
    backgroundColor: '#252625',
    title: [
        {
            x: '16%',
            bottom: '25%',
            text: '累计完成',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 20,
                color: '#696969',
            },
        },
        {
            x: '44%',
            bottom: '35%',
            text: '累计创建',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 20,
                color: '#696969',
            },
        },
        {
            x: '74%',
            bottom: '25%',
            text: '未完成',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 20,
                color: '#696969',
            },
        },
    ],
    tooltip: {
        show: true,
        formatter: function (params) {
            return params.marker + params.seriesName + '作业任务：' + params.value + '个';
        },
    },
    series: [
        {
            type: 'gauge',
            center: ['50%', '40%'], // 默认全局居中
            radius: '50%',
            splitNumber: 10, //刻度数量
            min: 0,
            max: 500,
            startAngle: 195,
            endAngle: -15,
            clockwise: true,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [[1, '#03B7C9']],
                },
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#03B7C9',
                    width: 1,
                },
                length: -15,
                splitNumber: 10,
            },
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: '#03B7C9',
                },
            },
            axisLabel: {
                distance: -20,
                textStyle: {
                    color: '#03B7C9',
                    fontSize: '15',
                    fontWeight: 'bold',
                },
            },
            pointer: {
                //仪表盘指针
                show: 0,
            },
            detail: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: myRate1,
                },
            ],
        },
        {
            startAngle: 195,
            endAngle: -15,
            type: 'gauge',
            center: ['50%', '40%'], // 默认全局居中
            radius: '45%',
            min: 0,
            max: 500,
            splitNumber: 0,
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    color: [
                        [0.66, '#a5e7f0'],
                        [1, '#a5e7f0'],
                    ], // 属性lineStyle控制线条样式
                    width: 4,
                },
            },
            axisLabel: {
                // 坐标轴小标记
                textStyle: {
                    // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    fontSize: 16,
                    color: 'rgba(30,144,255,0)',
                },
            },
            splitLine: {
                // 分隔线
                length: 10, // 属性length控制线长
                lineStyle: {
                    // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 0,
                    color: '#444',
                },
            },
            pointer: {
                // 分隔线 指针
                color: '#666666',
                width: 0,
                length: 230,
            },
            detail: {
                show: false,
            },
        },
        {
            name: '累计创建',
            type: 'gauge',
            startAngle: 195,
            endAngle: -15,
            radius: '40%',
            center: ['50%', '40%'], // 默认全局居中

            min: 0,
            max: 500,

            axisLine: {
                show: false,
                lineStyle: {
                    width: 25,
                    shadowBlur: 0,
                    color: [[1, '#03B7C9']],
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 20,
            },

            axisLabel: {
                show: false,
            },
            pointer: {
                show: true,
                length: '95%',
                width: 6,
            },
            detail: {
                show: true,
                offsetCenter: [0, '45%'],
                textStyle: {
                    fontSize: 20,
                },
            },
            itemStyle: {
                normal: {
                    color: '#03B7C9',
                },
            },
            data: [
                {
                    value: 436,
                },
            ],
        },
        {
            type: 'gauge',
            center: ['18%', '50%'], // 默认全局居中
            radius: '35%',
            splitNumber: 5, //刻度数量
            min: 0,
            max: 500,
            startAngle: 200,
            endAngle: 50,
            clockwise: true,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [[1, '#32CD32  ']],
                },
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#32CD32  ',
                    width: 1,
                },
                length: -15,
                splitNumber: 10,
            },
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: '#32CD32  ',
                },
            },
            axisLabel: {
                distance: -20,
                textStyle: {
                    color: '#32CD32  ',
                    fontSize: '15',
                    fontWeight: 'bold',
                },
            },
            pointer: {
                //仪表盘指针
                show: 0,
            },
            detail: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: myRate1,
                },
            ],
        },
        {
            type: 'gauge',
            center: ['18%', '50%'], // 默认全局居中
            radius: '30%',
            min: 0,
            max: 500,
            startAngle: 200,
            endAngle: 50,
            splitNumber: 0,
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    color: [
                        [0.66, '#98FB98'],
                        [1, '#98FB98'],
                    ], // 属性lineStyle控制线条样式
                    width: 4,
                },
            },

            axisLabel: {
                // 坐标轴小标记
                textStyle: {
                    // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    fontSize: 16,
                    color: 'rgba(30,144,255,0)',
                },
            },
            splitLine: {
                // 分隔线
                length: 10, // 属性length控制线长
                lineStyle: {
                    // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 0,
                    color: '#444',
                },
            },
            pointer: {
                // 分隔线 指针
                color: '#666666',
                width: 0,
                length: 230,
            },
            detail: {
                show: false,
            },
        },
        {
            name: '累计完成',
            type: 'gauge',
            startAngle: 200,
            endAngle: 50,
            radius: '25%',
            center: ['18%', '50%'], // 默认全局居中

            min: 0,
            max: 500,

            axisLine: {
                show: false,
                lineStyle: {
                    width: 25,
                    shadowBlur: 0,
                    color: [[1, '#32CD32']],
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 20,
            },

            axisLabel: {
                show: false,
            },
            pointer: {
                show: true,
                length: '80%',
                width: 4,
            },
            detail: {
                show: true,
                offsetCenter: [0, '60%'],
                textStyle: {
                    fontSize: 20,
                },
            },
            itemStyle: {
                normal: {
                    color: '#32CD32',
                },
            },
            data: [
                {
                    value: 245,
                },
            ],
        },
        {
            type: 'gauge',
            center: ['83%', '50%'], // 默认全局居中
            radius: '35%',
            splitNumber: 5, //刻度数量
            min: 0,
            max: 500,
            startAngle: 130,
            endAngle: -20,
            clockwise: true,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [[1, '#DC143C']],
                },
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#DC143C',
                    width: 1,
                },
                length: -15,
                splitNumber: 10,
            },
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: '#DC143C',
                },
            },
            axisLabel: {
                distance: -20,
                textStyle: {
                    color: '#DC143C',
                    fontSize: '15',
                    fontWeight: 'bold',
                },
            },
            pointer: {
                //仪表盘指针
                show: 0,
            },
            detail: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: myRate1,
                },
            ],
        },
        {
            type: 'gauge',
            center: ['83%', '50%'], // 默认全局居中
            radius: '30%',
            min: 0,
            max: 500,
            startAngle: 130,
            endAngle: -20,
            splitNumber: 0,
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    color: [
                        [0.66, '#FFC0CB'],
                        [1, '#FFC0CB'],
                    ], // 属性lineStyle控制线条样式
                    width: 4,
                },
            },

            axisLabel: {
                // 坐标轴小标记
                textStyle: {
                    // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    fontSize: 16,
                    color: 'rgba(30,144,255,0)',
                },
            },
            splitLine: {
                // 分隔线
                length: 10, // 属性length控制线长
                lineStyle: {
                    // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 0,
                    color: '#444',
                },
            },
            pointer: {
                // 分隔线 指针
                color: '#666666',
                width: 0,
                length: 230,
            },
            detail: {
                show: false,
            },
        },
        {
            name: '未完成',
            type: 'gauge',
            startAngle: 130,
            endAngle: -20,
            radius: '25%',
            center: ['83%', '50%'], // 默认全局居中

            min: 0,
            max: 500,

            axisLine: {
                show: false,
                lineStyle: {
                    width: 25,
                    shadowBlur: 0,
                    color: [[1, '#DC143C']],
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 20,
            },

            axisLabel: {
                show: false,
            },
            pointer: {
                show: true,
                length: '80%',
                width: 4,
            },
            detail: {
                show: true,
                offsetCenter: [0, '60%'],
                textStyle: {
                    fontSize: 20,
                },
            },
            itemStyle: {
                normal: {
                    color: '#DC143C',
                },
            },
            data: [
                {
                    value: 191,
                },
            ],
        },
    ],
};
return option;
