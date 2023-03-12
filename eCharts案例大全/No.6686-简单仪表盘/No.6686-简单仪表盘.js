option = {
    backgroundColor: '#0E1327',
    grid: {
        top: 10,
    },
    series: [{
        type: 'gauge',
        startAngle: 225, //起始角度，同极坐标
        endAngle: -45, //终止角度，同极坐标
        radius: '50%',
        center: ['50%', '50%'],
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            color: '#666',
            show: false,
            padding: [20, 0, 0, 0],
            fontSize: 12,
            distance: -20,
            formatter(value) {
                if (value === 0 || value === 100) {
                    return value;
                }
            }
        },
        pointer: {
            show: false
        },
        itemStyle: {
            normal: {
                color: "#323232",
            }
        },
        min: 0,
        max: 100,
        axisLine: {
            lineStyle: {
                width: 40,
                color: [
                    //改变这个地方可以修改进度
                    [0.8, 'rgba(162, 89, 252, 1)'],
                    [1, 'RGBA(21, 34, 65, 1)']
                ]
            }
        },
        detail: {
            formatter: function(e) {
                return "这个仪表盘的标题";
            },
            color: "#fff",
            fontSize: 14,
            offsetCenter: [0, 200],
            borderRadius: 8
        },
        title: {
            offsetCenter: [0, 0],
            color: '#FFFFFF',
            fontSize: 20,
            fontWeight: 500,
            rich: {
                a: {
                    fontWeight: 'normal',
                    fontSize: 16,
                    color: '#FFF',
                    padding: [0, 0, 10, 40]
                }
            }
        },
        data: [{
            name: '111',
            value: 99
        }]
    }]
}