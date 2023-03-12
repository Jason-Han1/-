var week = new Date().getDay();
var a = 0;
var classDatas1 = [{
    value: ['8:30-9:10', '周一', '英语\n1栋306'],
}, {
    value: ['9:20-10:00', '周一', '高数\n12栋110'],
}, {
    value: ['10:20-11:00', '周一', 'C语言\n10栋603'],
}, {
    value: ['11:10-11:50', '周二', '马克思主义概论\n10栋501'],
}, {
    value: ['11:10-11:50', '周三', '体育\n12栋106'],
}, {
    value: ['14:30-15:10', '周三', 'C语言\n10栋603'],
}, {
    value: ['16:20-17:00', '周四', '高数\n12栋110'],
}, {
    value: ['17:10-17:50', '周四', '毛邓论\n10栋312'],
}, {
    value: ['15:20-16:00', '周五', '心理学\n3栋201'],
}, ];

var classDatas2 = [{
    value: ['8:30-9:10', '周一', '英语\n1栋306'],
}, {
    value: ['9:20-10:00', '周一', '体育\n12栋106'],
}, {
    value: ['10:20-11:00', '周二', 'C语言\n10栋301'],
}, {
    value: ['11:10-11:50', '周二', '马克思主义概论\n10栋501'],
}, {
    value: ['11:10-11:50', '周三', '计算机基础\n10栋412'],
}, {
    value: ['14:30-15:10', '周三', '毛邓论\n10栋312'],
}, {
    value: ['16:20-17:00', '周四', '高数\n12栋110'],
}, {
    value: ['17:10-17:50', '周四', '毛邓论\n10栋312'],
}, {
    value: ['14:30-15:10', '周五', 'C语言\n6栋301'],
}, {
    value: ['15:20-16:00', '周五', '心理学\n10栋201'],
}];

switch (week) {
    case 1:
        a = '周一'
        break;
    case 2:
        a = '周二'
        break;
    case 3:
        a = '周三'
        break;
    case 4:
        a = '周四'
        break;
    case 5:
        a = '周五'
        break;
    default:
}
for (var i = 0; i < classDatas1.length; i++) {
    if (a == classDatas1[i].value[1]) {
        classDatas1[i].symbolSize = 40;
        classDatas1[i].symbolOffset = [0, '-10%'];
        classDatas1[i].itemStyle = {
            normal: {
                color: '#FF83FA'
            }
        };
    }
}
for (var i = 0; i < classDatas2.length; i++) {
    if (a == classDatas2[i].value[1]) {
        classDatas2[i].symbolSize = 40;
        classDatas2[i].symbolOffset = [0, '-10%'];
        classDatas2[i].itemStyle = {
            normal: {
                color: '#FF83FA'
            }
        };
    }
}

var ydata = [{
    value: '周一',
}, {
    value: '周二',
}, {
    value: '周三',
}, {
    value: '周四',
}, {
    value: '周五',
}, ''];
if (week == 0) {
    week = 6;
}

function sparea() {
    var areas = {
        color: ['#F0F8FF', '#F0F8FF', '#F0F8FF', '#F0F8FF', '#F0F8FF']
    };
    areas.color[week - 1] = '#feeeed';
    return areas;
}
var spareas = sparea();
ydata[week - 1].textStyle = {
    color: '#FF1493'
};
option = {
    backgroundColor: 'RGB(240, 248, 255)',
    title: {
        text: 'XX专业大一课程表',
        subtext: '数据虚构',

    },
    legend: {
        top: 20,
        right: 80,
        selectedMode: 'single',
        data: ['单周', '双周'],
        inactiveColor: '#9FB6CD',
        textStyle: {
            color: '#6495ED'
        }

    },
    grid: {},
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    tooltip: {
        show: true,
        formatter: '{c}',
        //trigger:'axis',
        hideDelay: 300,
    },
    xAxis: {
        type: 'category',
        data: ['', '8:30-9:10', '9:20-10:00', '10:20-11:00', '11:10-11:50', '14:30-15:10', '15:20-16:00', '16:20-17:00', '17:10-17:50', '19:10-20:50'],
        boundaryGap: false,
        splitLine: {
            //show: true
        },
        axisLabel: {
            interval: 0,
            rotate: 30
        }

    },

    yAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: true
        },
        splitArea: {
            show: true,
            areaStyle: spareas
        },
        axisLine: {
            show: false
        },
        data: ydata
    },
    series: [{
        name: '单周',
        type: 'scatter',
        symbol: 'pin',
        symbolSize: 20,
        //symbolOffset: [0, '-10%'],
        //symbolRotate:-30,
        label: {
            normal: {
                show: true,
                position:'top',
                rotate: 0,
                backgroundColor: 'rgb(224,255,255)',
                borderColor: '#aaa',
                fontWeight: 100,
                borderWidth: 1,
                borderRadius: 4,
                // formatter: [
                //     '{a|{c}}'
                // ].join('\n'),
                formatter:function(params){
                  return `{a|${params.data.value[2]}}`  
                },
                rich: {
                    a: {
                        align: 'center',
                        color: '#1E90FF',
                        fontSize: 12,
                        textShadowBlur: 0,
                        //textShadowColor: '#7A67EE',
                        textBorderColor: '#1E90EF',
                        textBorderWidth: 1
                    },
                }
            },
            emphasis: {
                show: true,
                //rotate: 30,
                backgroundColor: 'rgb(224,255,255)',
                borderColor: '#aaa',
                fontWeight: 200,
                borderWidth: 2,
                borderRadius: 4,
                // formatter: [
                //     '{a|{c}}'
                // ].join('\n'),
                formatter:function(params){
                  return `{a|${params.data.value[2]}}`  
                },
                rich: {
                    a: {
                        align: 'center',
                        color: '#1E90FF',
                        fontSize: 18,
                        textShadowBlur: 0,
                        //textShadowColor: '#7A67EE',
                        textBorderColor: '#9F79EE',
                        textBorderWidth: 0
                    },
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#f58f98',
            }
        },
        coordinateSystem: 'cartesian2d',
        data: classDatas1

    }, {
        name: '双周',
        type: 'scatter',
        symbol: 'pin',
        symbolSize: 20,
        //symbolOffset: [0, '-10%'],
        //symbolRotate:30,
        label: {
            normal: {
                show: true,
                rotate: 0,
                position:'top',
                backgroundColor: 'rgb(224,255,255)',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                fontWeight: 100,
                // formatter: [
                //     '{a|{c}}'
                // ].join('\n'),
                formatter:function(params){
                  return `{a|${params.data.value[2]}}`  
                },
                rich: {
                    a: {
                        align: 'center',
                        color: '#1E90FF',
                        fontSize: 12,
                        textShadowBlur: 0,
                        //textShadowColor: '#7A67EE',
                        textBorderColor: '#1E90FF',
                        textBorderWidth: 0
                    },
                }
            },
            emphasis: {
                show: true,
                //rotate: 30,
                backgroundColor: 'rgb(224,255,255)',
                borderColor: '#aaa',
                fontWeight: 200,
                borderWidth: 2,
                borderRadius: 4,
                // formatter: [
                //     '{a|{c}}'
                // ].join('\n'),
                formatter:function(params){
                  return `{a|${params.data.value[2]}}`  
                },
                rich: {
                    a: {
                        align: 'center',
                        color: '#1E90FF',
                        fontSize: 18,
                        textShadowBlur: 0,
                        //textShadowColor: '#7A67EE',
                        textBorderColor: '#9F79EE',
                        textBorderWidth: 0
                    },
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#f58f98',
            }
        },
        coordinateSystem: 'cartesian2d',
        data: classDatas2

    }]
};