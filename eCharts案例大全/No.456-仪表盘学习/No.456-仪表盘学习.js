option = {
    series: [
        {
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '50%',
            min: 0,
            max: 200,
            startAngle: 220,
            endAngle: -40,
            clockwise: true,
            data: [  // 指针数据
                {
                    name: '数据1',
                    value: 10,
                    title: {
                        show: true,
                        color: 'skyblue'
                    },
                    itemStyle: {
                        color: 'red',
                        borderColor: 'orange'
                    }
                },
                {
                    name: '数据2',
                    value: 30,
                    itemStyle: {
                        color: 'green',
                        borderColor: 'orange'
                    }
                } 
            ],
            splitNumber: 5,
            axisLine: {  // 轴线
                roundCap: false,
                lineStyle: {
                    // color: '#f21125',
                    color: [
                        [0.2, '#f21225'],
                        [0.4, '#12f225'],
                        [0.6, '#1225f1'],
                        [0.8, '#e8e2a1'],
                        [1, '#23f9a5']
                    ],
                    width: 20
                }
            },
            progress: {     // 进度条（指针指向的范围）
                show: true,
                itemStyle: {
                    borderColor: '#f2f2f2',
                    borderWidth: 4
                }
            },
            splitLine: {    // 分割线
                show: true,
                length: 15,
                distance: 10,
                lineStyle: {
                    width: 5,
                    color: 'skyblue'
                }
            },
            axisTick: {     // 子分割线
                splitNumber: 3,
                length: 15,
                distance: -40
            },
            axisLabel: {    // 刻度 label
                distance: -100,
                formatter: '{value} km/h',
                color: '#e4ae92'
            },
            pointer: {      // 指针
                showAbove: false,
                // show: false,
                // icon: 'rect',
                offsetCenter: [20, 20],
                length: 100,
                width: 10
            },
            anchor: {       // 表盘中指针的固定点
                // showAbove: true,
                size: 50,
                icon: 'circle',
                itemStyle: {
                    color: '#1289a1',
                    borderWidth: 10
                }
            },
            itemStyle: {    // 指针和进度条
                borderType: 'dashed',
                borderColor: '#000'
            },
            emphasis: {     // 指针高亮设置
                itemStyle: {
                    color: '#002391'
                }
            },
            title: {    // 标题
                show: true,
                offsetCenter: [30, -30]
            },
            detail: {   // 数值
                color: '#89f910'
            }
            
        }    
    ]
};
