var lineColor = '#2F5384';
var labelColor = '#74BFE7';
var fontSize = '16';
option = {
        backgroundColor:'#000',
        tooltip: {
            trigger: 'axis',
            textStyle:{
                fontSize:fontSize
            }
        },
        legend: {
            data: ['高损', '负损', '异常高损'],
            left: 'center',
            top: '5%',
            textStyle:{
                color:'fff',
                fontSize:fontSize
            },
            itemWidth:35,
            itemHeight:18,
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '23%',
            top:'15%',
            height: '80%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: [1,2,3,4,5,6],
            axisLine: {
                lineStyle: {
                    color: lineColor
                }
            },
            axisLabel:{
                show:true,
                textStyle:{
                    color:labelColor,
                    fontSize:fontSize
                }
            }
        },
        yAxis: {
            type: 'value',
            name:'单位(万千瓦)',
            nameTextStyle: {
                color: "#fff",
                fontSize:fontSize
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: '#DDD'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: lineColor
                },
            },
            axisLabel:{
                show:true,
                textStyle:{
                    color:labelColor,
                    fontSize:fontSize
                }
            },
            
            splitArea: {
                show: false
            }
        },
        series: [{
            name: '高损',
            type: 'line',
            data: [80,60,20,30,60,129],
            color: "#1890FF",
            lineStyle: {
                normal: {
                    width: 1,

                }
            },
            symbolSize:5,
            smooth: true
        },
            {
                name: '负损',
                type: 'line',
                color:'#2FC25B',
                data: [23,58,11,22,13,56],
                lineStyle: {
                    normal: {
                        width: 1,
                    }
                },
                symbolSize:5,
                smooth: true
            },
            {
                name: '异常高损',
                type: 'line',
                color:'#FACC14',
                data: [12,48,25,36,74,56],
                lineStyle: {
                    normal: {
                        width: 1,
                    }
                },
                symbolSize:5,
                smooth: true
            }
        ]
    };