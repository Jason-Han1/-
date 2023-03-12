let index = 0;
    var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF'];
    var data = [{
        'name': '热点网格',
        'value': 5600
    }, {
        'name': '大气污染',
        'value': 3600
    }, {
        'name': '水质超标',
        'value': 1500
    }, {
        'name': '在线超标',
        'value': 2000
    }, {
        'name': '未知',
        'value': 899
    }, {
        'name': '系统对接',
        'value': 4000
    }]
    function fun() {
    var timer = setInterval(function() {
    console.log(index)
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
        dataIndex: index == 0 ? 5 : index - 1
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
    }, 3000)
    }
    fun()
    option = {
    title: {
    text: 'PieChart',
    x: 'center',
    y: 'center',
    textStyle: {
        fontSize: 20
    }
    },
    tooltip: {
    trigger: 'item'
    },
    legend: {
      type: 'scroll',
       orient: 'vertical',
       right: '5%',
       top: 'center',
      //  itemGap: 40,
       selectedMode: true,
       icon: 'pin',
       textStyle: {
         rich: {
             a: {
                 color: '#000',
                 width: 30
             },
             b0: {
                 color: '#73DDFF',
                 fontSize: 20,
                 padding: [0, 30, 0, 40]
             },
             b1: {
                 color: '#73ACFF',
                 fontSize: 20,
                 padding: [0, 30, 0, 40]
             },
             b2: {
                 color: '#FDD56A',
                 fontSize: 20,
                 padding: [0, 30, 0, 40]
             },
             b3: {
                 color: '#FDB36A',
                 fontSize: 20,
                 padding: [0, 30, 0, 40]
             },
             b4: {
                 color: '#FD866A',
                 fontSize: 20,
                 padding: [0, 30, 0, 40]
             },
             b5: {
                 color: '#9E87FF',
                 fontSize: 20,
                 padding: [0, 30, 0, 40]
             }
         }
     },
     formatter: function(name) {
         let title = ''
         var total = 0;
         var target;
         var index;
         for (var i = 0, l = data.length; i < l; i++) {
             if (data[i].name == name) {
                 target = data[i].value;
                 title = data[i].label
                 index = i < 6 ? i : 5
             }
         }
         return `{a| ${name}}{b${index}| ${target}}个`
     }
       
   },
    series: [{
    type: 'pie',
    center: ['50%', '50%'],
    radius: ['50%', '70%'],
    clockwise: true,
    avoidLabelOverlap: true,
    hoverOffset: 30,
    emphasis:{
        itemStyle:{
            borderColor: '#f3f3f3',
            borderWidth: 10
        }
    },
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
                borderRadius: 1,
                width: 1,
                height: 1,
                padding: [1, 1, 0, -4]
            },
            a: {
                padding: [-15, 7, -10, 7]
            }
        }
    },
    labelLine: {
        normal: {
            length: 10,
            length2: 15,
            lineStyle: {
                width: 1
            }
        }
    },
    data: data,
    }]
    };