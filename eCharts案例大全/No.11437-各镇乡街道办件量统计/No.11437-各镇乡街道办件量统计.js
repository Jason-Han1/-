option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:[{icon:'circle',name:'直接访问'}],
         right:'12%'
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
             splitLine:{
                lineStyle:{
                    color:'#e9e9e9'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#d0d0d0'
                },
                symbol:['none','path://M5,20 L5,5 L8,8 L5,2 L2,8 L5,5 L5.3,6 L5.3,20'],
                symbolOffset:10,
                symbolSize:[25,25]
            },
            axisLabel:{
                    textStyle:{
                        color:'#404040',
                    },
                     rotate:45,
                },
            data : ['集士港镇','古林镇','高桥镇','横街镇','鄞江镇','洞桥镇','章水镇','龙观乡']
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine:{
                lineStyle:{
                    color:'#e9e9e9'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#d0d0d0'
                },
                symbol:['none','path://M5,20 L5,5 L8,8 L5,2 L2,8 L5,5 L5.3,6 L5.3,20'],
                symbolOffset:10,
                symbolSize:[25,25]
            },
            axisLabel:{
                    textStyle:{
                        color:'#666666',
                    }
                },
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            data:[124, 950, 888, 123, 449, 260, 320,520],
            color:'#a2caff',
            barWidth:'30%',
            itemStyle:{
            normal:{
                label:{
                    show:true,
                    position:[0,-20]
                }
            }
        }
        }
    ]
};