
/*
    作者：suwanqing   
*/
let index = 0;
var colorList = ['#07d8a8', '#05aad3', '#0011da', '#1e30ff', '#6571fc', '#fda436', '#fed816']
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
            dataIndex: index == 0? 5 : index -1
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

    fun()
setTimeout(function() {fun()}, 5000);
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
        radius: ['24%', '45%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
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
                    /*
            再次声明一下，大家在这里修改之后不要点击上面的保存！
    不要点击保存！不要点击保存！重要的事情说三遍！
    你的修改会覆盖我的原代码的！感谢理解！
                                --2020/8/4  by--suwanqing
                    */
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
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: [{
            'name': '一月',
            'value': 1.45
        }, {
            'name': '二月',
            'value': 2.93
        }, {
            'name': '三月',
            'value': 3.15
        }, {
            'name': '四月',
            'value': 4.78
        }, {
            'name': '五月',
            'value': 5.93
        }, {
            'name': '六月',
            'value': 5.73
        }
        ],
    }]
};