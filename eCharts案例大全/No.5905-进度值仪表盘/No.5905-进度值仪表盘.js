let data = [{
    name: "达标率",
    value: 60
}];
option = {
    backgroundColor:'#1a3056',
    series: [{
        name: "Indicator",
        type: "gauge",
        endAngle: 0,
        startAngle: 180,
        min: 0,
        max: 100,
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                color: [
                    // 			颜色渐变函数 前四个参数分别表示四个位置依次为 右上左下
                    [0.6, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(0, 214, 240, 0.4)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0, 214, 240, 1)' // 100% 处的颜色
                    }], false)],
                    [1, new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0.5,
                        color: '#ccc' // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: '#ccc' // 100% 处的颜色
                    }], false)],
                ],
            },
        },
        //仪表盘轴线
        axisLabel: {
            show: true,
            color: "#ffffff",
            fontSize: 15,
        },
        title: {
            show: false,
            fontSize: 26,
            color: "#fff",
            offsetCenter: [-48, 40]
        },
        detail: {
            offsetCenter: [0, 40],
            fontSize:26,
            color:'#fff',
            formatter: function(value) {
                return '达标率\r\r{value|' + value + '}\r%';
            },
            rich: {
                value: {
                    fontSize: 51,
                    color: "rgba(0, 214, 240, 1)",
                }
            }
        },
        data: data
    }]
}