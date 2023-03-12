//职称结构取数
var getsjjg = ['小说', '辅助教材', '期刊', '其他'];
var getsjjgrs = [30, 200, 20, 50];
//职称结构图表
var colorList = ['#507AFF', '#51D9A2', '#FFC371', '#797AFF'];
var syjgdata = [];
var list = [];
for (var i = 0; i < getsjjg.length; i++) {
    syjgdata.push({
        name: getsjjg[i],
        value: getsjjgrs[i]
    })
    list.push({
        name: getsjjg[i],
        value: getsjjgrs[i],
        labelLine: {
            lineStyle: {
                color: colorList[i]
            }
        },
        label: {
            color: colorList[i]
        }
    })
}
var rich = {
    cir: {
        padding: 0,
        align: "center",
        verticalAlign: "middle",
        fontSize: 20,
    }
}

option = {
    series: [{
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
                show: false

            }
        },
        data: syjgdata
    }, {
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
                padding: [-6, -6, -6, -6],
                formatter: params => {
                    return '{cir|●}';
                },
                rich: rich,
            }
        },

        data: syjgdata,
        z: -1
    }, {
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['0%', '57%'],
        center: ["50%", "50%"],
        hoverAnimation: false, //取消动画效果
        data: list,
        label: {
            normal: {
                show: true,
                alignTo: 'labelLine',
                color: "inherit"
            }
        },
        labelLine: {
            show: true,
            length: 20,
            length2: 100,
            // color: "inherit",
            showAbove: true
        },
        z: -1
    }]
};