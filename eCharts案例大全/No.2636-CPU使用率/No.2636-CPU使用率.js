let colors = ['#67E0E3', '#37A2DA', '#FD666D'];

option = {
    backgroundColor:'#fff',
    title: {
        text: "CPU使用率",
        top: '4%',
        x: 'center',
        textStyle: {
            color: "#808080",
            fontSize: 24,
            fontWeight: "normal",

        }
    },
    series: [{
        // name: 'CPU使用率',
        type: 'gauge',
        // center: ["50%", "50%"], // 仪表位置
        // radius: "75%", //仪表大小
        min: 0,
        max: 100,
        axisLine: {
            // 仪表盘
            lineStyle: {
                width: 20,
                color: [
                    [0.3, colors[0]],
                    [0.7, colors[1]],
                    [1, colors[2]]
                ]
            }
        },
        splitLine: {
            // 分隔线样式
            length: "12%"
        },
        axisTick: {
            // 刻度样式
            show: false
        },
        axisLabel: {
            // 刻度标签
            fontSize: 16,
            fontWeight: 'bold',
            distance: 10
        },
        pointer: {
            // 仪表盘指针
            icon:'none',
            width: 10,
            length: "60%"
        },
        markPoint: {
            // 仪表盘指针圆
            animation: false,
            silent: true,
            data: [{
                x: '50%',
                y: '50%',
                symbol: 'circle',
                symbolSize: 50,
                // itemStyle: {
                //     color: '#1890ff',
                // },
            }, {
                x: '50%',
                y: '50%',
                symbol: 'circle',
                symbolSize: 30,
                itemStyle: {
                    color: '#fff'
                },
            }]
        },
        detail: {
            // 仪表盘 显示数据
            formatter: '{value}Mbps',
            fontSize: 14,
            fontWeight: 'bold'

        },
        data: [{
            value: 85.66,
            // name: ""
        }],
    }]
};