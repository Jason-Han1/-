var colors = ['rgba(31,138,248,1)', 'rgba(232,106,43,1)', 'rgba(62,189,41,1)'];

let chartData=[
        {time:"7/18",average:12,day:55,year:56},
        {time:"7/19",average:88,day:44,year:57},
        {time:"7/20",average:100,day:27,year:66},
        {time:"7/21",average:200,day:59,year:33},
        {time:"7/22",average:98,day:88,year:44},
        {time:"7/23",average:77,day:12,year:29},
        {time:"7/24",average:56,day:11,year:10}
    ]

option = {
    color: colors,
    backgroundColor:"rgba(10,12,55,1)",
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'cross',
           
        }
    },
    grid: {
        left:"8%",
        right: '15%'
    },
    legend: {
        textStyle:{
          color:'white',  
        },
        itemGap:40,
        icon :"roundRect",
        data: ['均价', '日环比', '年同比']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
             axisLabel: {
                color:"white"
            },
            data: chartData.map((it)=>{
                return it.time
            })
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '均价(元/公斤)',
            nameTextStyle:{
                color:"white"
            },
            min: 0,
            position: 'left',
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[0]
                }
            },
            splitLine: {
                 lineStyle: {
                    color: 'rgba(98,100,200,0.2)'
                }
            },
        },
        {
            type: 'value',
            name: '日环比',
            nameTextStyle:{
                color:"white"
            },
            min: 0,
            max: 100,
            position: 'right',
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[1]
                }
            },
            
            axisLabel: {
                formatter: '{value} %'
            },
            splitLine: {
                show:false
            },
        },
        {
            type: 'value',
            name: '年同比',
            nameTextStyle:{
                color:"white"
            },
            min: 0,
            max: 100,
            position: 'right',
            offset: 80,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            },
            splitLine: {
                show:false
            },
        }
        
    ],
    series: [
        {
            name: '均价',
            type: 'bar',
            yAxisIndex: 0,
            barWidth: '20px',
            itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(26,55,173,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(25,117,220,1)' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 0, 0],
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                }
            },
            data: chartData.map((it)=>{
                return {name:it.time,value:it.average}
            })
            
        },
        {
            name: '日环比',
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
                    normal: {
                        color:colors[1]
                    }
            },
            data: chartData.map((it)=>{
                return {name:it.time,value:it.day}
            })
        },
        {
            name: '年同比',
            type: 'line',
            yAxisIndex: 2,
            itemStyle: {
                    normal: {
                        color:colors[2]
                    }
            },
            data:  chartData.map((it)=>{
                return {name:it.time,value:it.year}
            })
        },
    ]
};