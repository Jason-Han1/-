option = {
    backgroundColor: "#000",
    title: {
        text: '实时更新',
        textStyle: {
            color: "#fff"
        },
        show: true
    },
    tooltip:{show:false,trigger:'item'},
    xAxis: {
        show: false
    },
    yAxis: [{
        show: false,
        data: []
    }, {
        show: false,
        data: []
    }],
    series: [{
        name: '辅助1',
        type: 'bar',
        barGap: '-100%',
        yAxisIndex: 0,
        stack: 'a',
        data: [2],
        barWidth: 40,
        itemStyle: {
            normal: {
                color: 'none',
                barBorderRadius: 40,
            }
        }
    }, {
        name: '数据数据',
        type: 'bar',
        yAxisIndex: 0,
        stack: 'a',
        data: [0 * 1.46],
        barWidth: 40,
        itemStyle: {
            normal: {
                color: 'orange',
                barBorderRadius: 40,
            }
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                offset: [82, 0],
                textStyle: {
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: 600
                },
                formatter: function(e) {
                    return (e.value / 1.46).toFixed(0) + "%";
                }
            },

        },
    }, {
        name: '数据数据',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        stack: 'b',
        data: [{
            name: "数据数据数",
            value: 150
        }],
        zlevel: 2,
        barWidth: 55,
        label: {
            normal: {
                show: true,
                position: 'insideLeft',
                formatter: function(e) {
                    return e.name
                },
                offset: [10, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 600
                },
            },

        },
        itemStyle: {
            normal: {
                color: 'none',
                borderColor: 'orange',
                borderWidth: 5,
                barBorderRadius: [55, 0, 0, 55],
            }
        }
    }, {
        name: '辅助2',
        type: 'bar',
        yAxisIndex: 1,
        stack: 'b',
        barGap: '-100%',
        data: [{
            name: 'i',
            value: 10
        }],
        barWidth: 55,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(e) {
                    return '{icon|' + e.name + '}';
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 600
                },
                rich: {
                    icon: {
                        color: '#fff',
                        padding: [5, 10],
                        borderRadius: 100,
                        borderColor: '#fff',
                        borderWidth: 1,
                        fontSize: 16,
                        fontStyle: 'bold'
                    }
                }
            },

        },
        itemStyle: {
            normal: {
                color: 'orange',
                borderColor: 'orange',
                borderWidth: 5,
                barBorderRadius: [0, 55, 55, 0],
            }
        },
        tooltip:{
            show:true,
            backgroundColor:"darkgreen",
            formatter:function(e){
                return "提示说明:<br>实时更新(/秒)!"
            }
        }
    }]
};
myChart.setOption(option);
clearInterval(timeTicket);
var timeTicket = setInterval(function() {
    let tempData= Math.random()*100;
    option.series[1].data=[tempData * 1.46];
    option.series[1].label.normal.position= tempData < 90 ? 'right' : "insideRight";
    option.series[1].label.normal.offset=tempData < 20 ? [80 - tempData * 4, 0] : [0, 0];
    myChart.setOption(option);
}, 1000);