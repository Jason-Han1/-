option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ["周一","周二","周三","周四","周五","周六","周日"],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine:{
                lineStyle:{
                    color:"#3cceff",
                    opacity:0.3,
                    width:1
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine:{
                lineStyle:{
                    color:"#3cceff",
                    opacity:0.3,
                    width:1
                }
            }
        },
        legend: {
            data: ['UV','PV','支付'],
            itemWidth: 20,
            itemHeight: 10,
            itemGap: 10,
            left:135,
            top:2,
            icon: 'stack',
            textStyle: {
                fontSize:14,
                fontWeight:"bolder",
                color: '#fff'
            }
        },

        series: [{
            name:"UV",
            data: [200,500,300,600,700,400,900],
            type: 'line',
            symbolSize:10, //折线点的大小
            lineStyle:{
                normal:{
                    color:"#f00",
                    width:2
                }
            },
            itemStyle : { 
                normal: {
                    label : {show: false},
                    color:"#f00"
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 0, 0,0.2)'
                }, {
                    offset: 1,
                    color: 'rgba(255, 0, 0,0)'
                }])
            }
        },
        {
            name:"PV",
            data: [120,400,250,490,600,310,760],
            type: 'line',
            symbolSize:6, //折线点的大小
            lineStyle:{
                normal:{
                    color:"#0f0",
                    width:2
                }
            },
            itemStyle : { 
                normal: {
                    label : {show: false},
                    color:"#0f0"
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 255, 0,0.2)'
                }, {
                    offset: 1,
                    color: 'rgba(0, 255, 0,0)'
                }])
            }
        },
        {
            name:"支付",
            data: [20,80,100,150,160,120,200],
            type: 'line',
            symbolSize:6, //折线点的大小
            lineStyle:{
                normal:{
                    color:"#0ff",
                    width:2
                }
            },
            itemStyle : { 
                normal: {
                    label : {show: false},
                    color:"#0ff"
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 255, 255,0.2)'
                }, {
                    offset: 1,
                    color: 'rgba(0, 255, 255,0)'
                }])
            }
        }]
    }