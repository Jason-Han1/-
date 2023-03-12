var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
option = {
    backgroundColor: '#0e2147',
    grid: {
        left: '2%',
        top: '12%',
        right: '10%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [
        {
            show: false,
        }
    ],
    yAxis: [
        {
            axisTick: 'none',
            axisLine: 'none',
            offset: '2',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                }
            },
            data: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10','M11']
        }, 
        {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                }
            },
            data: ['4','13', '25', '29', '38', '44', '50', '52', '60', '72', '50']
        }, 
        {
            nameTextStyle: {
                color: '#ffffff',
                fontSize: '12',
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [],
        }
    ],
    series: [
        {
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [4, 13, 25, 29, 38, 44, 50, 52, 60, 72,50],
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '12',
                    }
                }
            },
            barWidth: 4,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2,
            animation: true,
            animationEasing:'cubicOut'
        },
         {
            type: 'scatter',
            yAxisIndex: 0,
            symbol: 'rect',
            symbolSize: [2,4],
            data: [4, 13, 25, 29, 38, 44, 50, 52, 60, 72,50],
            itemStyle: {
                normal: {
                    borderColor: '#E2F2FF',
                    color: '#E2F2FF',
                }
            },
            z: 2
        },
        {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            // barGap: '-100%',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100,100],
            barWidth: 6,
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.2)'
                }
            },
            z: 0
        },
       
    ]
};