/*---------------------数据----------------------------*/
var exemptData = [{
    value: 48,
    name: '免考人数'
}, {
    value: 70,
    name: '',
    labelLine: {
        normal: {
            show: false
        }
    }
}];
var examNum = [{
    value: 48,
    name: '正常考试'
}, {
    value: 28,
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
        offset: 0.2,
        color: 'rgba(235,41,125,0.1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(235,41,125,0.8)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, 'none'];

var examNumcolor = [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0.3,
        color: 'rgba(63,218,255,0.1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(63,218,255,0.8)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, 'none'];
/*---------------------富文本----------------------------*/
var rich = {
    exemptname: {
        color: '#115b70',
        fontSize: 14 * scale,
        padding: [0, 0]
    },
    examptdata: {
        color: '#eb297d',
        fontSize: 30 * scale,
        padding: [0, 0],
        fontWeight: 'bold'
    },
    exemname: {
        color: '#115b70',
        fontSize: 14 * scale,
        padding: [0, 0]
    },
    examdata: {
        color: '#3fdaff',
        fontSize: 30 * scale,
        padding: [0, 0],
        fontWeight: 'bold'
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
    title: [{
        text: '整体考试情况',
        x: 'center',
        y: 'top',
        textStyle: {
            color: '#fff',
            textAlign: 'center',
            fontSize: 24 * scale,
            fontWeight: 'bold'
        },
    }],
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
        //内圈圆环
        {
            name: '内边框',
            type: 'pie',
            startAngle: 260,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '55%'],
            radius: ['40%', '40%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 10,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: '#0b5263'
                    }
                }
            }, {
                value: 2,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        borderColor: 'none'
                    }
                }
            }]
        },
        //免考人数圆环
        {
            name: '免考人数',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            startAngle: 270,
            center: ['50%', '55%'],
            radius: ['60%', '50%'],
            color: exemptcolor,
            label: {
                normal: {
                    formatter: function(params) {
                        if (params.dataIndex === 0) {
                            return '{examptdata|' + params.value + '}\n{exemptname|' + params.name + '}';
                        }
                    },
                    rich: rich
                }
            },
            labelLine: {
                normal: {
                    length: 90,
                    length2: 20,
                    lineStyle: {
                        color: '#eb297d',
                    }
                }
            },
            data: exemptData,
        },
        //正常考试人数圆环
        {
            name: '正常考试',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '55%'],
            radius: ['75%', '65%'],
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
                    length: 70,
                    length2: 20,
                    lineStyle: {
                        color: '#3fdaff',
                    }
                }
            },
            data: examNum,
        },
        //内圈圆环
        {
            name: '外边框',
            type: 'pie',
            // startAngle: 260,
            clockWise: false, //顺时加载
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
                        borderColor: '#0b5263'
                    }
                }
            }, {
                value: 2,
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