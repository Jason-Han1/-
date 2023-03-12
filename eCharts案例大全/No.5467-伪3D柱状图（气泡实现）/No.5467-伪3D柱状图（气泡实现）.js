var data = [100,120,105];
var dataName = ['item1', 'item2', 'item3']
var maxData = [150,150,150]
var barWidth = 100,

option = {
    backgroundColor: '#333',
    xAxis: {
        data: dataName,
        axisLine: {show: 0},
        axisTick: {show: 0},
        axisLabel: {
            margin: barWidth/3,
            fontSize: 16
        }
    },
    yAxis: {show: 0},
    grid: {
        top: 120,
        left: 30,
        right: 30,
        bottom: 80,
        containLabel: false
    },
    series: [{
        type: 'bar',
        itemStyle: {
            color: {
                type: 'linear',x:0,y:0,x2:0,y2:1,
                colorStops:[
                    {offset: 0, color: '#0C76FD'},
                    {offset: 1, color: '#149BFF'}
                ]
            }
        },
        barWidth: barWidth,
        data: data
    },{
        type: 'bar',
        itemStyle: {
            color: {
                type: 'linear',x:0,y:0,x2:0,y2:1,
                colorStops:[
                    {offset: 1, color: 'rgba(7, 49, 147, .2)'},
                    {offset: 0, color: 'rgba(37, 84, 195, .5)'}
                ]
            },
        },
        barWidth: barWidth,
        barGap: '-100%',
        data: maxData
    },{
        type: 'scatter',
        data: maxData,
        symbolSize: [barWidth, barWidth/2],
        itemStyle: {
            color: '#0058A5',
            opacity: 1
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 16,
            formatter: p => {
                return data[p.dataIndex] + ' 万元'
            }
        }
    },{
        type: 'scatter',
        data: data,
        symbolSize: [barWidth, barWidth/2],
        itemStyle: {
            color: {
                type: 'linear',x:0,y:0,x2:0,y2:1,
                colorStops:[
                    {offset: 1, color: '#37E2FF'},
                    {offset: 0, color: '#1BBAFF'}
                ]
            },
            shadowColor: '#0D73FE',
            shadowBlur: barWidth/5,
            shadowOffsetY: barWidth/10,
            opacity: 1
        }
    },{
        type: 'scatter',
        data: [0,0,0],
        symbolSize: [barWidth, barWidth/2],
        itemStyle: {
            color: '#0869CB',
            shadowColor: '#004D9A',
            shadowBlur: 10,
            shadowOffsetY: -barWidth/20,
            opacity: 1
        }
    }]
    /*background-image: linear-gradient(180deg, #37E2FF 0%, #1BBAFF 100%);
box-shadow: 0 2px 2px 0 #0D73FE;
    */
};