
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
// var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF'];
var colorList = ['#FC4567', '#2F8DF4', '#C25EC4', '#58B19F', '#FF7F50'];
// waiter
// var data = [1391231, 141762, 164198, 66648, 35105];  // 20
// var data = [1396862, 141617, 164038, 69025, 36493];  // 21
// var data = [1398716, 139421, 166447, 67258, 36768];  // 22
// var data = [1393900, 139971, 165810, 67709, 37151];  // 23
// var data = [1381632, 140186, 161122, 67227, 38679];  // 24
// var data = [1231406, 128631, 143157, 68235, 33084];  // 25
// var data = [1122837, 121164, 129767, 65409, 30698];  // 26

// custom
// var data = [1759740, 86592, 174207, 18872, 5465];  // 20
// var data = [1744634, 88511, 173538, 19213, 5498];  // 21
// var data = [1772186, 85624, 174658, 18930, 5443];  // 22
// var data = [1785246, 88365, 176026, 19058, 5515];  // 23
// var data = [1742280, 88874, 173725, 19899, 5225];  // 24
// var data = [1555056, 80284, 153120, 19261, 5035];  // 25
// var data = [1439605, 74312, 141818, 18136, 4677];  // 26

// var data = [4941038, 228510, 461277, 43364, 16019];    // 06.01  waiter
// var data = [4724678, 358421, 483038, 186433, 130956];  // 06.01 custom

var names = ['情绪状态: 正', '情绪状态: 负', '情绪状态: 由正变负', '情绪状态: 由负变正', '情绪状态: 未知']
var data = [911117, 46010, 83354, 105529, 329718]   

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
        text: '2020年6月1日 顾客 情绪统计',
        x: 'center',
        y: '14%',
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
        data: [
            {
                value: data[0],
                name: names[0]
            }, 
            {
                value: data[1],
                name: names[1]
            },
            {
                value: data[2],
                name: names[2]
            },
            {
                value: data[3],
                name: names[3]
            },
            {
                value: data[4],
                name: names[4]
            }
            ],
        
        label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 14,
                    fontWeight: 'bold',
                    // color: 'red',
                }
            },
    }]
};