var getsjjg = ['普通教师', '专任教师'];
var getsjjgrs = [40, 60];
var getzrjs=[40,60]
var syjgdata = [];
for (var i = 0; i < getsjjg.length; i++) {
    syjgdata.push({
        name: getsjjg[i],
        value: getsjjgrs[i]
    })
}
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
var colorList = ['#FFB93E', 'transparent'];
var colorList1 = ['#FF821D', 'transparent'];
option = {
    backgroundColor:'#fff',
    legend: {
        show:false,
          data: ['青年专任教师','专任教师'],
          right: "2%",
          top:'2%',
          icon: "circle",
          itemWidth: 16, // 设置宽度
          itemHeight: 16, // 设置高度
          textStyle: {
              color: "#666666",
              fontSize: 13,
              padding: [2, 0, 0, 0]
          },
      },
    series: [{
        name:'专任教师',
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            },
        },
        type: 'pie',
        radius: ['0%', '52%'],
        center: ["50%", "50%"],
        startAngle:70,
        label: {
            show:false},
        data: getzrjs,
        z:0,
    },{
        name:'青年专任教师',
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList1[params.dataIndex]
                }
            },
        },
        type: 'pie',
        radius: ['0%', '40%'],
        center: ["50%", "50%"],
        startAngle:70,
        label: {
            show:false},
        data: getzrjs,
        z:1,
    },{
        itemStyle: {
            normal: {
                color: '#FFF7E9'
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['0%', '57%'],
        center: ["50%", "50%"],
        label: {
            show:false},
        hoverAnimation: false, //取消动画效果
        data: syjgdata,
        z: -1
    }, {
        itemStyle: {
            normal: {
                color: '#FFE2AF'
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['0%', '47%'],
        center: ["50%", "50%"],
        label: {
            show:false},
        hoverAnimation: false, //取消动画效果
        data: syjgdata,
        z: -1
    }]
};