//职称结构取数
var getsjjg = ['0~5人', '6~10人', '11~15人', '>15人'];
var getsjjgrs = [300, 200, 100, 150];
var syjgdata = [];
for (var i = 0; i < getsjjg.length; i++) {
    syjgdata.push({
        name: getsjjg[i],
        value: getsjjgrs[i]
    })
}
var rich = {
    name: {
        color: "#fff",
        fontSize: 12,
        padding: [8, 0, 0, 0],
        fontWeight: '400',
        align: 'left'
    },
    value: {
        color: "#fff",
        fontSize: 12,
        padding: [0, 0, 0, 0],
        fontWeight: '500',
        align: 'left'
    },
    percent: {
        color: "#FFF",
        align: 'right',
        fontSize: 12,
        fontWeight: '500',
        // padding: [0, 5]
    },
}
//职称结构图表
var colorList = ['#D87A80', '#2EC7C9', '#FFB980', '#5AB1EF'];
option = 
{
    backgroundColor: '#2c343c',
    title: {
        text: '候车人数分析',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    series: [
        {
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        radius: ['0%', '50%'],
        center: ["50%", "50%"],
        label: {
            normal: {
                position: 'inner',
                formatter: params => {
                    return (
                        '{percent|' + params.percent.toFixed(0) + '%}'
                    );
                },
                rich: rich,
            }
        },
        data: syjgdata,
        roseType: 'radius',
    }, 
    {
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['0%', '50%'],
        center: ["50%", "50%"],
        roseType: 'radius',
        labelLine: {
            normal: {
                length: 30,
                length2: 0,
                lineStyle: {
                    color: 'transparent'
                }
            }
        },
        label: {
            normal: {

                formatter: params => {
                    return '{name|' + params.name + '}\n{value|' + '站点数：' + params.value + '}';
                },
                rich: rich,
                // padding: [2, 25, 0, 25]
            }
        },
        labelLine: {
            
        },
        data: syjgdata,
        z: -1
    }, 
    ]
};