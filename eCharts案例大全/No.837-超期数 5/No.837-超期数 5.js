let index = 0;
    var colorList = ['#5BCDC6', '#FDD56A', '#E3879A'];
    //var colorList = ['#124FC8', '#4D55CD', '#288AF5'];
    var data = [{
        'name': '锅炉外检',
        'value': 1
    }, {
        'name': '安全员管理证',
        'value': 2
    }, {
        'name': '转基因加工许可证',
        'value': 2
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
    // myChart.dispatchAction({
    //     type: 'highlight',
    //     seriesIndex: 0,
    //     dataIndex: index
    // });
    index++;
    if (index > 5) {
        index = 0;
    }
    }, 3000)
    }
    fun()
option = {
    backgroundColor: '#0B1A3B',
    title: {
    text: '超期数 5',
    x: 'center',
    y: 'center',
    textStyle: {
        fontSize: 20,
        color:'#FFFFFF'
    }
    },
    tooltip: {
    trigger: 'item'
    },
    legend: {
      type: 'scroll',
       orient: 'vertical',
       right: '0%',
       top: 'center',
      //  itemGap: 40,
       selectedMode: true,
       icon: 'pin',
       textStyle: {
         rich: {
             a: {
                 color: '#fff',
                 width: 30,
                 fontSize:14
             },
             b0: {
                 color: '#5BCDC6',
                 fontSize: 20,
                 padding: [0, 30, 0, 90]
             },
             b1: {
                 color: '#FDD56A',
                 fontSize: 20,
                 padding: [0, 30, 0, 90]
             },
             b2: {
                 color: '#E3879A',
                 fontSize: 20,
                 padding: [0, 30, 0, 90]
             },
             b3: {
                 color: '#FDB36A',
                 fontSize: 20,
                 padding: [0, 30, 0, 90]
             },
             b4: {
                 color: '#FD866A',
                 fontSize: 20,
                 padding: [0, 30, 0, 90]
             },
             b5: {
                 color: '#9E87FF',
                 fontSize: 20,
                 padding: [0, 30, 0, 90]
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
    radius: ['35%', '70%'], //控制外圆宽度
    clockwise: true,
    avoidLabelOverlap: true,
    hoverOffset: 30,
    emphasis:{
        itemStyle:{
            //borderColor: '#f3f3f3',
            borderColor: '#0F224C',
            borderWidth: 20
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
        fontSize:50,
        rich: {
            hr: {
                backgroundColor: 't',
                borderRadius: 1,
                width: 1,
                height: 1,
                fontSize:50,
                padding: [1, 1, 0, -4]
            },
            a: {
                padding: [-15, 7, -10, 7],
                fontSize:20, //百分比字体大小
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
    roseType: 'radius',
    data: data,
    }]
    };