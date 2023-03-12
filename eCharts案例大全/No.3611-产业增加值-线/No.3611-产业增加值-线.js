option = {
    backgroundColor: "#fff",
    tooltip: {
        trigger: 'axis',
        show: true,
    },
    legend: {
        show: false,
        icon: 'circle',
        top: 20,
        textStyle: {
            fontSize: 12,
            color: '#c8c8c8'
        },
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '15%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        axisLine: {
            show: true,
            lineStyle:{
                color:'#E4E4E4'
            }
        },
        splitLine:{
          show:true,
          lineStyle:{
              color:'#E4E4E4',
              opacity:0.5
          }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle:{
                color:'#A9A9A9'
            },
            rotate:45
        },
        data: ['二九零', '江滨', '宝泉岭', '新华', '友谊', '八五二', '八五三']
    },
    yAxis: {
        axisLine: {
            show: true,
            lineStyle:{
                color:'#E4E4E4'
            }
        },
        axisLabel:{
            textStyle:{
                color:'#666666',
            }
        },
        axisTick: {
            show: false
        },
    },
    series: [{
        name:'自年初累计',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#FFC600',
                }
            },
            itemStyle: {
                color: '#FF7200',
                borderColor: "#fff",
                borderWidth: 3,
            },
            data: [5, 10, 41, 35, 51, 49, 62]
        },
        {
            name:'上年同期',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#00B7EE',
                }
            },
            itemStyle: {
                color: '#0DB4EE',
                borderColor: "#fff",
                borderWidth: 3,
            },
            data: [50, 20, 35, 20, 75, 30, 60]
        },
    ]
};