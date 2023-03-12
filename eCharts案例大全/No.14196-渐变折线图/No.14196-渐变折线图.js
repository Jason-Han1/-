option = {
    backgroundColor:'#011e48',
    xAxis: {
        data: ['01-03', '01-04', '01-05', '01-06', '01-07', '01-08', '01-09'],
        axisLine:{
            lineStyle:{
                color:'#006cc2'
            }
        },
        axisLabel:{
            color:'#fff',
            fontSize:16
        },
        splitLine:{
            lineStyle:{
                color:'#fff'
            }
        }
    },
    yAxis: {
        name:"（件）",
        nameTextStyle:{
            color:'#fff',
            fontSize:16
        },
        min:10000,
        max:30000,
        axisLine:{
            lineStyle:{
                color:'#006cc2'
            }
        },
        axisLabel:{
            color:'#fff',
            fontSize:16
        },
        splitLine:{
            lineStyle:{
                color:'#0469bf'
            }
        }
    },
    series: [{
        type: 'line',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: '#069ff2'
                }, {
                    offset: 0.2,
                    color: '#65dfe5'
                }, {
                    offset: 0.4,
                    color: '#5cc83e'
                }, {
                    offset: 0.6,
                    color: '#f6f874'
                }, {
                    offset: 0.8,
                    color: '#f8923a'
                }, {
                    offset: 1,
                    color: '#fb291b'
                }], false),
                borderColor: '#fff',
                borderWidth: 6
            }
        },
        symbolSize:6,
                lineStyle:{
                normal:{
                    width:3
                }
            },
        data: [22132, 21532, 20032, 20012, 18720, 21120, 21320]
    }]
};