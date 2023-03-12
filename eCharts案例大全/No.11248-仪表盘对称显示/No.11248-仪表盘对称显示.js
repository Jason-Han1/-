//zhuxj
option = {
    tooltip: {
        formatter: "{a} : {c}%"
    },
    series: [{
            name: '分配率',
            type: 'gauge',
            center: ['50%', '50%'], // 默认全局居中
            radius: '80%',
            // min: 0,
            // max: 2,
            startAngle: 170,
            endAngle: 10,
            splitNumber: 2,
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.7, '#4AC18E'],
                        [0.9, '#FEA246'],
                        [1, '#ED6167']
                    ],
                    width: 20
                }
            },
            axisTick: { // 坐标轴小标记
                show: false
                // splitNumber: 5,
                // length: 10,        // 属性length控制线长
                // lineStyle: {        // 属性lineStyle控制线条样式
                //   color: 'auto'
                // }
            },
            axisLabel: {
                formatter: function(v) {
                    switch (v + '') {
                        case '0':
                            return '0%';
                        case '50':
                            return '分配率';
                        case '100':
                            return '100%';
                    }
                }
            },
            splitLine: { // 分隔线
                length: 25, // 属性length控制线长
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                length: '50%',
                width: 2,
                // color : '#25EBED'
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 71,
                name: 'CPU'
            }]
        },
        {
            name: '使用率',
            type: 'gauge',
            center: ['50%', '50%'], // 默认全局居中
            radius: '80%',
            // min: 0,
            // max: 2,
            startAngle: 350,
            endAngle: 190,
            splitNumber: 2, //分割等分
            axisLine: { // 坐标轴线
                lineStyle: {
                    color: [
                        [0.7, '#4AC18E'],
                        [0.9, '#FEA246'],
                        [1, '#ED6167']
                    ],
                    width: 20
                }
            },
            axisTick: { // 坐标轴小标记
                show: false
            },
            axisLabel: {
                formatter: function(v) {
                    switch (v + '') {
                        case '0':
                            return '0%';
                        case '50':
                            return '使用率';
                        case '100':
                            return '100%';
                    }
                }
            },
            splitLine: { // 分隔线
                length: 25, // 属性length控制线长
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                length: '50%',
                width: 2,
                // color : '#25EBED'
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 91,
                name: 'CPU'
            }]
        }
    ]
};