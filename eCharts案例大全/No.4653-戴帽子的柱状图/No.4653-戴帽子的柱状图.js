const data = [20, 82, 91, 34, 90, 30, 10]

option = {
    backgroundColor: "#041730",
    tooltip: {
        trigger: 'axis',
        formatter: "{b} : {c}",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
                color: "rgba(53, 72, 105, 1)",
                opacity: 0.3
            }
        }
    },
    xAxis: {
        data: ['功能1', '功能2', '功能3', '功能4', '功能5', '功能6', '功能7'],
        //坐标轴
        axisLine: {
            show: false
        },
        //坐标值标注
        axisLabel: {
            show: true,
            textStyle: {
                color: '#B3D6FF',
            },
            rotate: -90
        },
        axisTick: {
          show: false
        }
    },
    yAxis: {
        //坐标轴
        axisLine: {
            show: false,
        },
        //坐标值标注
        axisLabel: {
            show: false
        },
        //分格线
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [
        {
            name: 'a',
            tooltip: {
                show: false
            },
            type: 'bar',
            barWidth: 7,
            itemStyle: {
                color: '#8AA7D8',
                opacity: 0.6
            },
            emphasis: {
              label: {
                show: true,
                position: "top",
                offset: [0, -5],
                color: "#FFB977"
              }
            },
            data: data,
            barGap: 0
        },
        {
            name: 'b',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                color: '#CCDEF6'
            },
            symbol: 'rect',
            symbolSize: ['7', '3'],
            symbolOffset: ['0' , '-5'],
            symbolPosition: 'end',
            data: data
        }
    ]
};