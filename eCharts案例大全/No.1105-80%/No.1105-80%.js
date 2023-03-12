
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
var colorList = ['#998CEF','#D9D8EB']
option = {
    title: {
        text: '80%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 14,
            color:'#2A3A77'
        }
    },
    tooltip: {
        trigger: 'item',
        show:false
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['24%', '32%'],
        clockwise: false,
        avoidLabelOverlap: false,
        hoverOffset: 0,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: false,
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
            'value':80
        },
        {
            'name': '一月',
            'value': 20
        }
        ],
    }]
};