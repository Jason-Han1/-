var data = [0, 1682,0,2791,0, 3000, 0,4090, 0,3230, 0];
var xdata = ['','Sun','','Mon', '','Tue', '','Wed', '','Thu', ''];
var option = {
    grid: {
        left: 30,
        right: 50,
        top: 50,
        bottom: 30,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: xdata,
        triggerEvent: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: 'rgba(255,255,255,.6)'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
            textShadowColor: '#000',
            textShadowOffsetY: 2
        }
    },
    yAxis: {
        name: '单位（千）',
        nameTextStyle: {
            color: '#fff',
            fontSize: 16,
            textShadowColor: '#000',
            textShadowOffsetY: 2
        },
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,.2)'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: 'rgba(255,255,255,.6)'
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16,
            textShadowColor: '#000',
            textShadowOffsetY: 2,

        }
    },
    series: [{
        data: data,
        type: 'line',
        symbolSize:0.1,
        smooth: true,
        lineStyle: {
            color: "#03E0F2"
        },
        label: {
            show: true,
            position: 'top',
            offset:[0,100],
            textStyle: {
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold'
            }
        },
        areaStyle: {
            color: '#03E0F2'
        }
    }]
}