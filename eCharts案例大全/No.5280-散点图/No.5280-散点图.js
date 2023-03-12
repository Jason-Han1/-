option = {
    backgroundColor: "#fff",
    legend: {
        bottom: 10,
        left:'center',
        itemWidth:9,
        itemHeight:9,
        data: ['2018溢价率', '2019溢价率']
    },
    xAxis: {
        axisLine: { //  改变x轴颜色
            show:false,
            lineStyle: {
                color: '#26D9FF',
            }
        },
      axisTick: {
            show: false
        },
        axisLabel: { //  改变x轴字体颜色和大小
            textStyle: {
                color: "#333",
                fontSize: 12
            },
        },
        splitLine: {
            show:false,
        },
    },
    yAxis: {
        name:'%',
        nameTextStyle: {
            color: '#8998AC',
            padding: [0, 25, 0, 0]
        },
        axisLine: { //  改变y轴颜色
            lineStyle: {
                color: '#ccc'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: { //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: "#333",
                fontSize: 12
            },
        },
        splitLine: {
            lineStyle: {
                color: "#E9E9E9"
            }
        },
    },
    series: [{
        name: '2018溢价率',
        type: 'scatter',
        itemStyle: {
            color: "#3E9FFF",
        },
        symbolSize: 12,
        data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
        ],
    }, {
        name: '2019溢价率',
         type: 'scatter',
        itemStyle: {
            color: "#F7B500",
        },
        symbolSize: 12,
        data: [
            [9.0, 5.04],
            [11.0, 7.95],
            [12.0, 8.58],
            [5.0, 11.81],
            [7.0, 12.33],
            [11.0, 7.96],
            [7.0, 9.24],
            [6.0, 8.26],
            [10.0, 11.84],
            [7.0, 3.82],
            [6.0, 4.68]
        ],
    }]
}