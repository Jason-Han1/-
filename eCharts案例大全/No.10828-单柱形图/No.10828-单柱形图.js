let data = [{
    brief: 'faf',
    sqlcount: 1000
}];
let color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: '#21c6f4'
                }, {
                    offset: 1,
                    color: '#0f9def'
                }]);
option = {
    backgroundColor: '#FFF',
    color: ['yellow'], // echarts采用dataset渲染数据的形式，series.itemStyle.color 会失效，必须设置此项为[]
    grid: {
        left: 50,
        right: 50,
        top: 100,
        bottom: 100,
        containLabel: true
    },
    dataset:{
        source: data
    },
    title: {
        text: '表',
        top: '50%'
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisLabel: { // 轴文字
            show: false
        },
        splitLine: {
            show: false
        },
        min: 0,
        max: 1547
    },
    yAxis: {
        type: 'category',
        show: true,
        axisLine: {
            show: true
        },
        axisLabel: { // 轴文字
            show: true
        }
    },
    series: [
        { // For shadow
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                color: 'red',
                barBorderRadius: 15
            },
            label: {
                show: true,
                position: 'right',
                formatter: function(){
                    return '60%'
                },
                textStyle: {
                    color: '#333'
                }
            },
            barGap:'-100%',
            data: [1547]
        },
        {
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                barBorderRadius: 15,
                emphasis: {
                    color: 'yellow'
                }
            },
            dimensions: ['sqlcount', 'brief'],
            encode: { // 映射x、y轴对应字段
                x: 'sqlcount',
                y: 'brief'
            }
        }
    ]
};