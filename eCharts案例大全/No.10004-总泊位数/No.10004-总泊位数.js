/*---------------------数据----------------------------*/
var exemptData = [{
    value: 132,
    name: '空闲'
}, {
    value: 256,
    name: '',
    labelLine: {
        normal: {
            show: false
        }
    }
}];
var examNum = [{
    value: 1254,
    name: '已泊'
}, {
    value: 280,
    name: '',
    labelLine: {
        normal: {
            show: false
        }
    }
}];
var scale = 1;
/*---------------------颜色配置----------------------------*/
var exemptcolor = [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgba(27, 152, 189, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(7, 53, 71, 0.01)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, 'none'];

var examNumcolor = ['rgba(52, 166, 210, 1)', 'none'];
/*---------------------富文本----------------------------*/
var rich = {
    exemptname: {
        color: "#34A6D2",
        fontSize: 32,
        fontWeight: 500,
        align: 'center',
        verticalAlign: 'bottom',
        padding: 15
    },
    examptdata: {
        color: "#FFFFFF",
        fontSize: 40,
        fontWeight: 500,
        align: 'center',
        verticalAlign: 'middle',
    },
    exemname: {
        color: "#34A6D2",
        fontSize: 32,
        fontWeight: 500,
        align: 'center',
        verticalAlign: 'bottom',
        padding: 15
    },
    examdata: {
        color: "#FFFFFF",
        fontSize: 40,
        fontWeight: 500,
        align: 'center',
        verticalAlign: 'middle',
    },
    rectblue: {
        width: 14,
        height: 14,
        borderRadius:3,
        backgroundColor: "#3fdaff",
    },
    rectred: {
        width:14,
        height:14,
        borderRadius:3,
        backgroundColor:'#eb297d'
    },
    space: {
        padding: [0, 10, 0, 0]
    }
}


option = {
    backgroundColor: '#031f2d',
    title: {
        text: '总泊位数',
        subtext: '1386',
        x: 'center',
        y: '50%',
        textStyle: {
            fontWeight: '500',
            fontFamily: 'SourceHanSansCN-Medium',
            fontSize: 26,
            color:'rgba(76, 177, 255, 1)',
        },
        subtextStyle: {
            fontWeight: '500',
            fontFamily: 'SourceHanSansCN-Medium',
            fontSize: 32,
            color:'rgba(229, 244, 255, 1)',
        },
    },
    legend: {
        itemGap: 12,
        right: 10,
        bottom: 10,
        icon: 'none',
        align: 'left',
        orient: 'vertical',
        textStyle: {
            color: '#115b70',
            fontSize: 14 * scale,
            rich: rich
        },
        data: ['正常考试', '免考人数'],
        formatter: function(name) {
            if(name==='正常考试'){
              return '{rectblue|}' + '{space|}' + name 
            }else{
              return '{rectred|}' + '{space|}' + name
            }
        }
    },
    series: [
        //免考人数圆环
        {
            name: '免考人数',
            type: 'pie',
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            startAngle: 90,
            center: ['50%', '55%'],
            radius: ['65%', '60%'],
            color: exemptcolor,
            label: {
                normal: {
                    formatter: function(params) {
                        if (params.dataIndex === 0) {
                            return '{exemptname|' + params.name + '}\n{examptdata|' + params.value + '}';
                        }
                    },
                    rich: rich
                }
            },
            labelLine: {
                normal: {
                    length: 120,
                    length2: 20,
                    lineStyle: {
                        color: 'rgba(52, 166, 210, 1)',
                        width:3
                    }
                }
            },
            data: exemptData,
        },
        //正常考试人数圆环
        {
            name: '已泊',
            type: 'pie',
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '55%'],
            radius: ['75%', '70%'],
            color: examNumcolor,
            label: {
                normal: {
                    formatter: function(params) {
                        if (params.dataIndex === 0) {
                            return '{examdata|' + params.value + '}\n{exemname|' + params.name + '}';
                        }
                    },
                    rich: rich
                }
            },
            labelLine: {
                normal: {
                    length: 120,
                    length2: 20,
                    lineStyle: {
                        color: 'rgba(52, 166, 210, 1)',
                        width:3
                    }
                }
            },
            data: examNum,
        },
        //外圈圆环
        {
            name: '外边框',
            type: 'pie',
            // startAngle: 260,
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '55%'],
            radius: ['85%', '85%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 9,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: 'rgba(7, 53, 71, 0.74)'
                    }
                }
            }, {
                value: 0,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        borderColor: 'none'
                    }
                }
            }]
        },
    ]
};