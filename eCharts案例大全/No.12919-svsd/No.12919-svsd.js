option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    backgroundColor:'#FFFFFF',
    xAxis: {
         axisTick: {
            show: false
        },
        
        axisLine: {
            show:false,
            lineStyle: {
                color: '#57617B'
            }
        },
         axisLabel: {
            show: true,
            textStyle: {
                color: "#404752",
                fontSize:13
            }
        },
        data: ['3.21', '3.22', '3.23', '3.24', '3.25', '3.26','3.27']
    },
    yAxis: {
         axisTick: {
            show: false
        },
        
        axisLine: {
            show:false,
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#404752",
                fontSize:13
            }
        },
        min: 0,
        max: 300,
        interval: 50,
    },
    series: [{
        name:'累计人均流失金额',
        color:'#FF3100',
        type: 'line',
        itemStyle: {
            normal: {
                color: '#3c49ff'
            }
        },
        data:[120, 148, 141, 50, 80, 140, 130]
    },
    
    ]
};