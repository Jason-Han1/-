var getsjjg = ['普通教师', '专任教师'];
//var getsjjgrs=[35,65];
var getzrjs=[36,63]
/*var syjgdata = [];
for (var i = 0; i < getsjjg.length; i++) {
    syjgdata.push({
        name: getsjjg[i],
        value: getsjjgrs[i]
    })
}*/
var rich = {
    name: {
        color: "#666666",
        fontSize: 14,
        padding: [8, 30, 0, 30],
        fontWeight: '400',
        align: 'left'
    },
    value: {
        color: "#333",
        fontSize: 15,
        padding: [0, 30, 8, 30],
        fontWeight: '500',
        align: 'left'
    },
    percent: {
        color: "#FFF",
        align: 'right',
        fontSize: 15,
        fontWeight: '500',
        //padding: [0, 5]
    },
    hr: {
        borderColor: '#DFDFDF',
        width: '100%',
        borderWidth: 1,
        height: 0,
    },
    cir: {
        fontSize: 26,
    }
}
//职称结构图表
var colorList = ['#FFB026', 'rgba(255,226,175,.0)'];
var colorList1 = ['rgba(255,226,175,.0)', '#FFE2AF'];
var colorList2 = ['#FFF7E9', '#FFF7E9'];
var colorList3 = ['#FF821D', 'rgba(255,226,175,.0)'];
option = {
    // backgroundColor:'#fff',
    series: [{
        itemStyle: {
            normal: {
                // "borderWidth": 50, // 间距的宽度
                // "borderColor": 'rgba(255,226,175,.1)', //背景色
                // shadowColor: 'rgba(255,226,175,.4)',
                // shadowBlur: 50,
                color: function(params) {
                    return colorList3[params.dataIndex]
                }
            },
        },

        type: 'pie',
        radius: ['0%', '38%'],
        center: ["50%", "50%"],
        startAngle:70,
        label: {
            show:false},
        data: getzrjs,
        z: 0
    },{
        itemStyle: {
            normal: {
                // "borderWidth": 50, // 间距的宽度
                // "borderColor": 'rgba(255,226,175,.1)', //背景色
                // shadowColor: 'rgba(255,226,175,.4)',
                // shadowBlur: 50,
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            },
        },

        type: 'pie',
        radius: ['0%', '50%'],
        center: ["50%", "50%"],
        startAngle:70,
        label: {
            show:false},
        data: getzrjs,
        z: -1
    },
    {
        itemStyle: {
            normal: {
                // shadowColor: 'rgba(0, 0, 0, 0.5)',
                // shadowBlur: 50,
                // "borderWidth": 10, // 间距的宽度
                // "borderColor": '#000', //背景色
                 color: function(params) {
                    return colorList1[params.dataIndex]
                }
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['0%', '45%'],
        center: ["49%", "50%"],
        startAngle:70,
        label: {
            show:false},
        hoverAnimation: false, //取消动画效果
        data: getzrjs,
        z: -1
    },
    {
        itemStyle: {
            normal: {
                // shadowColor: 'rgba(0, 0, 0, 0.5)',
                // shadowBlur: 50,
                // "borderWidth": 10, // 间距的宽度
                // "borderColor": '#000', //背景色
                 color: function(params) {
                    return colorList2[params.dataIndex]
                }
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['0%', '55%'],
        center: ["50%", "50%"],
        startAngle:70,
        label: {
            show:false},
        hoverAnimation: false, //取消动画效果
        data: getzrjs,
        z: -2
    }
    ]
};