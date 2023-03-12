app.title = '每日订单办结';

option = {
backgroundColor:'#fff',
    "grid": {
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    legend: {
        data: ['清库办结','当日办结','滞留办结','4小时办结率','3小时办结率','2小时办结率']
    },
    xAxis: [{
        "type": "category",
        "axisLabel": {
                "interval": 0, 
                "rotate": 45, 
                "show": true, 
                "splitNumber": 15, 
                "textStyle": {
                    //"fontFamily": "微软雅黑",
                    color:'#666666',
                    "fontSize": 12
                }
            }, 
        data: ['8点-9点','9点-10点','10点-11点','11点-12点','12点-13点','13点-14点','14点-15点','15点-16点','16点-17点','17点-18点','18点-19点','19点-20点','20点-21点','21点-22点','22点-23点','23点-0点']
    }],
    yAxis: [{
        type: 'value',
        name: '处理及时率',
        min: 0,
        position: 'right',
        axisLabel: {
            formatter: '{value} %'
        }
    }, {
        type: 'value',
        name: '办结量',
        min: 0,
        position: 'left'
       
    }],
    series: [{
        name: '4小时办结率',
        type: 'line',
        symbolSize:8,
        symbol:'circle',
        "itemStyle": {
            "normal": {
                "color": "#FEADAC",
                "barBorderRadius": 1,
                "label": {
                    "show": true,
                    "position": "top",
                    formatter: function(p) {
                        return (p.value > 0 ? (p.value) : '')+'%';
                    }
                }
            }
        },
        data: [56,67,68,78,74,68,70,66,60,58,65,64,76,80,77,63]
    },{
        name: '3小时办结率',
        type: 'line',
        symbolSize:8,
        symbol:'circle',
        "itemStyle": {
            "normal": {
                "color": "#73EC73",
                "barBorderRadius": 0,
                "label": {
                    "show": true,
                    "position": "top",
                    formatter: function(p) {
                        return (p.value > 0 ? (p.value) : '')+'%';
                    }
                }
            }
        },
        data: [34,44,40,38,42,45,54,48,44,43,42,46,48,44,38,40]
    },{
        name: '2小时办结率',
        type: 'line',
        symbolSize:8,
        symbol:'circle',
        "itemStyle": {
            "normal": {
                "color": "#FAE395",
                "barBorderRadius": 0,
                "label": {
                    "show": true,
                    "position": "top",
                    formatter: function(p) {
                        return (p.value > 0 ? (p.value) : '')+'%';
                    }
                }
            }
        },
        data: [19,23,25,24,26,20,23,19,17,22,26,27,28,24,20,19]
    }, {
        name: '清库办结',
        type: 'bar',
        yAxisIndex: 1,
        "barMaxWidth": 35,
        "barGap": "10%",
        stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            itemStyle:{normal:{color:'#9191FF'}},
        data: [234,201,168,135,123,78,35,21,1,0,0,0,0,0,0,0]
    }, {
        name: '当日办结',
        type: 'bar',
        yAxisIndex: 1,
        stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            itemStyle:{normal:{color:'#59ADF3'}},
        data: [78,134,168,190,210,245,289,311,334,368,391,420,451,435,401,410]
    }, {
        name: '滞留办结',
        type: 'bar',
        yAxisIndex: 1,
        stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            itemStyle:{normal:{color:'#A0DCA0'}},
        data: [101,92,67,54,43,23,4,0,0,0,0,0,0,0,0,0]
    }]
};