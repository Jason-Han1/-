
/*
    首先感谢大家对我作品的喜爱，谢谢大家！
    
    *★,°*:.☆\(￣▽￣)/$:*.°★*。撒花！
    
    这里想和大家说明一下，大家做完修改后尽量不要在本作品中点击保存哈
    
    在这里点击保存会覆盖原作品的哦，之后再浏览本作品看到的将会是你保存后的版本
    
    而原作品需要切换到特定的版本才能重见天日 ????
    
    这也是怪我首发的时候选错了权限 ┭┮﹏┭┮
    
    发出来也是希望帮助更多的前端攻城狮解决echarts样式问题
    
    请大家多多理解一下 ??
    
    饼图配置有疑问的可以评论哦，我看到了会及时回复哒(◍•ᴗ•◍)
    
    最后感谢大家的理解与支持    *★,°*:.☆\(￣▽￣)/$:*.°★*。撒花！
    
    作者：suwanqing     编辑于2020-07-28
    

*/
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