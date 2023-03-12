
option = {
   backgroundColor: '#101736',

    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        borderWidth: 0,
        left: '2%',
        right: '4%',
        bottom: '14%',
        top:'16%',
        textStyle: {
            color: "#fff"
        },
		containLabel: true
    },
    legend: {
        x: '20%',
        top: '2%',
        itemGap: 30,
        textStyle: {
            color: '#90979c',
			fontSize: 12
        },

    },
    calculable: true,
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: "rgba(204,187,225,0.5)",
            }
        },
        axisPointer: {
          type: "line"
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['05:00','07:00','09:00','11:00','13:00','15:00','17:00','19:00'],
    }],

    yAxis: [{
        type: "value",
        max:'100',
        "axisLine": {
            "show": false,
            lineStyle: {
                color: "rgba(204,187,225,0.5)",
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
              type:'dashed',
              color: 'rgba(1, 149, 176, 1)'
            }
        },
        "axisLabel": {
            "interval": 0,
            color: 'rgba(154, 209, 253, 1)',
            fontSize: 10
        },
        
    },{
        type: 'value',
        max:'100',
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        splitLine: {
            show: true,
            lineStyle: {
              type:'dashed',
              color: 'rgba(1, 149, 176, 1)'
            }
        },
        "axisLabel": {
            "interval": 0,
            color: 'rgba(154, 209, 253, 1)',
            fontSize: 10

        },
        }],
    series: [{
        name: "总班次  3489",
        type: "line",
        symbolSize: 1,
        symbol: 'circle',
        itemStyle: {
            color: "#C000FF",
        },
        data: [
            40, 50, 45, 30, 55, 35, 50, 35
        ],
    }, {
        name: "总里程  23432",
        type: "line",
        yAxisIndex: 1,
        symbolSize: 1,
        symbol: 'circle',
        itemStyle: {
            color: "#00A2FF",
        },
        data: [
            60,80,65,75,70,85,65,80
        ]
    }, ]
}