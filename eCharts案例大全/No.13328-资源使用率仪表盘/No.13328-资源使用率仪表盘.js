option = {
    title: {
        text: '资源使用率仪表盘',
        textStyle: {
            color: '#fff'
        },
        subtext: '资源使用率仪表盘',
        subtextStyle: {
            color: '#fff'
        }
    },
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    series: [{
            name: 'CPU使用率',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            splitNumber: 5,
            radius: '50%',
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    width: 8,
                    shadowBlur: 0,
                    color: [
                        [0.6, '#67e0e3'],
                        [0.8, '#37a2da'],
                        [1, '#FF0000']
                    ]
                }
            },
            axisTick: { // 坐标轴小标记
                length: 15, // 属性length控制线长
                lineStyle: { // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
			axisLabel:{
				distance:0
			},
            splitLine: { // 分隔线
                length: 20, // 属性length控制线长
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
			pointer: {
				width: 5,
				length:'70%'
			},
            title: {
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontSize: 12,
                    padding: [200, 0, 0, 0]
                }
            },
            detail: {
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    padding: [-20, 0, 0, 0],
					fontSize:20
                },
                formatter: function (value) {
                    return value + '%';
                },
            },
            itemStyle: {
                normal: {
                    color: "#00CAFC",

                }
            },
            data: [{
                value: 80.55,
                name: 'CPU'
            }]
        },
        {
            name: '内存使用率',
            type: 'gauge',
            center: ['23%', '55%'], // 默认全局居中
            radius: '30%',
            min: 0,
            max: 100,
            endAngle: 45,
            splitNumber: 5,
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    width: 8,
                    shadowBlur: 0,
                    color: [
                        [0.6, '#67e0e3'],
                        [0.8, '#37a2da'],
                        [1, '#FF0000']
                    ]
                }
            },
            axisTick: { // 坐标轴小标记
                length: 12, // 属性length控制线长
                lineStyle: { // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
			axisLabel:{
				distance:0
			},
            splitLine: { // 分隔线
                length: 15, // 属性length控制线长
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
            	width: 4,
            	length:'60%'
            },
            title: {
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontSize: 12,
                    padding: [160, 0, 0, 0]
                }
            },
            detail: {
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    padding: [-20, 0, 0,20],
                    fontSize:20
                },
                formatter: function (value) {
                    return value + '%';
                },
            },
            itemStyle: {
                normal: {
                    color: "#00CAFC",

                }
            },
            data: [{
                value: 30.35,
                name: '内存'
            }]
        },
        {
            name: '硬盘使用率',
            type: 'gauge',
            center: ['78%', '55%'], // 默认全局居中
            radius: '30%',
            min: 0,
            max: 100,
            startAngle: 140,
            endAngle: -45,
            splitNumber: 5,
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    width: 8,
                    shadowBlur: 0,
                    color: [
                        [0.6, '#67e0e3'],
                        [0.8, '#37a2da'],
                        [1, '#FF0000']
                    ]
                }
            },
            axisTick: { // 坐标轴小标记
                length: 12, // 属性length控制线长
                lineStyle: { // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
			axisLabel:{
				distance:0
			},
            splitLine: { // 分隔线
                length: 15, // 属性length控制线长
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width: 4,
				length:'60%'
            },
            title: {
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontSize: 12,
                    padding: [160, 0, 0, 0]
                }
            },

            detail: {
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    padding: [-20, 20, 0, 0],
                    fontSize:20
                },
                formatter: function (value) {
                    return value + '%';
                },
            },
            itemStyle: {
                normal: {
                    color: "#00CAFC",

                }
            },
            data: [{
                value: 60.12,
                name: '硬盘'
            }]
        }
    ]
};