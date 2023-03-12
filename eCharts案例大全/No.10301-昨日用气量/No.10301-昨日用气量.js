app.title = '坐标轴刻度与标签对齐';

option = {
    backgroundColor:'#18315A',
    title:{
        text:'本年度用气量',
        left:'center',
        textStyle:{
            color:'#fff'
        }
    },
    color: ['#3398DB'],
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
            data : ['民用户','工商用户', ],
            axisTick: {
                alignWithLabel: true
            },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
                fontSize:16
            }
        },
        }
    ],
    yAxis : [
        {
            name:'m³',
            type : 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#0F55B9",
                type:'detail'
            }
        }
        }
    ],
    series : [
        {
            name:'本年度用气量',
            type:'bar',
             itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                            {
                                offset: 0.5,
                                color: '#027eff'
                            },
                            {
                                offset: 1,
                                color: '#0286ff'
                            }
                        ]
                    )
                }
            },
            barWidth: '30%',
            data:[85000,8605]
        }
    ]
};
