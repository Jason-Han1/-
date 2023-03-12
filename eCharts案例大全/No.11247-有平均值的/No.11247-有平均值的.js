

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['成都', '成都', '成都', '成都', '成都', '成都', '成都'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            max:100,
            min:0,
            type : 'value',
            
            "axisLabel": {
                "textStyle": {
                },
                "formatter": "{value}%"
            },
        },
        {
            type: 'value',
            gridIndex: 0,
            min: 0,
            max: 100,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '45%',
            // max:100,
            // min:50,
            yAxisIndex: 0,
            data:[99, 88, 99, 85, 80, 90, 95],
            color:'#F9B54E',
            markLine:{
                symbol:'none',//去掉箭头
                data:[
                        {type:'average',name:'平均值'}
                    ],
                label:{
                    position:'start',
                    formatter:'{c}%'
                },
                lineStyle:{
                    color:'red'
                }
            },
            zlevel: 0
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '45%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-100%',
            data: [100, 100, 100, 100,100,100,100,],
            itemStyle: {
                normal: {
                    color: '#535C6D'
                }
            },
            color:'#FFE3B9',
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor:"#F9B54E"
                }
            },
            zlevel: -1
        },
    ]
};
