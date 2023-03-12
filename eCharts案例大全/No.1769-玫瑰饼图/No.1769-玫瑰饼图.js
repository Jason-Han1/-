
let index = 0;
var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF']
function fun() {
        var timer = setInterval(function() {
         myChart.dispatchAction({
            type: 'hideTip',
            seriesIndex: 0,
            dataIndex: index
        });
        // 显示提示框
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: index
        });
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index === 0? 5 : index -1
        });
         myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index
        });
        index++;
        if (index > 5) {
            index = 0;
        }
    },3000)
}

//     fun()
// setTimeout(function() {fun()}, 5000);
option = {
    title: {
        text: 'pieChart',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 20
        }
    },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['12%', '45%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        roseType: 'radius',
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-30, 15, -20, 15]
                }
            }
        },
        labelLine: {
            normal: {
                length: 10,
                length2: 20,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: [{
            'name': '一月',
            'value': 1.45,
            
             label: {
            show: true,
            position: 'outside',
            formatter: '{hr|}\n{a|{d}%}\n{b|{b}}',
            color:colorList[0],
            rich: {
                hr: {
                    borderColor: colorList[0],
                    backgroundColor:'#ffffff',
                    borderWidth:1,
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-50, 15, -20, 10]
                },
                b:{
                    padding: [-25, 15, -20, 10]
                }
            }
           },
            
        }, {
            'name': '二月',
            'value': 2.93,
             label: {
            show: true,
            position: 'outside',
            formatter: '{hr|}\n{a|{d}%}\n{b|{b}}',
            color:colorList[1],
            rich: {
                hr: {
                    borderColor: colorList[1],
                    backgroundColor:'#ffffff',
                    borderWidth:1,
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-50, 15, -20, 10]
                },
                b:{
                    padding: [-25, 15, -20, 10]
                }
            }
           },
        }, {
            'name': '三月',
            'value': 3.15,
             label: {
            show: true,
            position: 'outside',
            formatter: '{hr|}\n{a|{d}%}\n{b|{b}}',
            color:colorList[2],
            rich: {
                hr: {
                    borderColor: colorList[2],
                    backgroundColor:'#ffffff',
                    borderWidth:1,
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-50, 15, -20, 10]
                },
                b:{
                    padding: [-25, 15, -20, 10]
                }
            }
           },
        }, {
            'name': '四月',
            'value': 4.78, 
             label: {
            show: true,
            position: 'outside',
            formatter: '{hr|}\n{a|{d}%}\n{b|{b}}',
            color:colorList[3],
            rich: {
                hr: {
                    borderColor: colorList[3],
                    backgroundColor:'#ffffff',
                    borderWidth:1,
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-50, 15, -20, 10]
                },
                b:{
                    padding: [-25, 15, -20, 10]
                }
            }
           },
        }, {
            'name': '五月',
            'value': 5.93,
             label: {
            show: true,
            position: 'outside',
            formatter: '{hr|}\n{a|{d}%}\n{b|{b}}',
            color:colorList[4],
            rich: {
                hr: {
                    borderColor: colorList[4],
                    backgroundColor:'#ffffff',
                    borderWidth:1,
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-50, 15, -20, 10]
                },
                b:{
                    padding: [-25, 15, -20, 10]
                }
            }
           },
        }, {
            'name': '六月',
            'value': 5.73,
             label: {
            show: true,
            position: 'outside',
            formatter: '{hr|}\n{a|{d}%}\n{b|{b}}',
            color:colorList[5],
            rich: {
                hr: {
                    borderColor: colorList[5],
                    backgroundColor:'#ffffff',
                    borderWidth:1,
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-50, 15, -20, 10]
                },
                b:{
                    padding: [-25, 15, -20, 10]
                }
            }
           }
        }
        ],
    }]
};