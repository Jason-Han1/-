
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
var colorList = ['#135fdc','#0281DB','#20a7df', '#58D5FF','#73DDFF','#91f0fb']
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
    // backgroundColor:'#060b16',
    backgroundColor:'transparent',
    title: {
        text: '59 Pcs',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 14,
            color:'#08f1f8',
            fontFamily:'微软雅黑',
            fontWeight:600,
        }
    },
     toolbox: {
            left: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['25%', '35%'],
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
            fontSize:12,
            fontFamily:'微软雅黑',
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
                length: 5,
                length2: 8,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: [{
            'name': '3D',
            'value': 26
        }, {
            'name': '大面',
            'value': 28
            
        }, {
            'name': '阴阳/底部',
            'value': 7
        }
        ],
    }]
};