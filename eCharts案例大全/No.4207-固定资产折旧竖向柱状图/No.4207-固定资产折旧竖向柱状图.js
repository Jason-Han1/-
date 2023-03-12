option = {
    backgroundColor:'#030F35',
    tooltip:{
      trigger:'axis'  
    },
    legend: {
        data: ['资产原值', '累计折旧'],
        textStyle:{
            color:'#fff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'category',
        data: ['房屋','建筑物','机械设备','运输工具'],
        axisTick: { show: false },
        axisLine: {
            show: true,
            lineStyle:{
                color:'#01F3F5'
            },
        },
        axisLabel: { 
            show:true,
            textStyle:{
                color:'#01F3F5',
                fontSize:12,
            },
            //rotate:30
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {show: true,
            lineStyle:{
                color:'#04295E'
            }
        },
        axisTick: { show: false },
        axisLine: { 
            show: true,
            lineStyle:{
                color:'#01F3F5'
            }
        },
    },
    series: [
        {
            name: '资产原值',
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            itemStyle:{
                normal: {
                    color: '#6601FF',
                }
            },
            label: {
                normal: {
                    show: true,
                    position:'inside'
                }
            },
            z:  10,
            data: [320, 302, 301, 543]
        },
        {
            name: '累计折旧',
            type: 'bar',
            stack: '总量',
            itemStyle:{
                normal: {
                    color: '#00F0FF'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    textStyle:{
                        color:'#6601FF'
                    }
                }
            },
            z: 5,
            data: [90, 230, 210, 432]
        },
    ]
};