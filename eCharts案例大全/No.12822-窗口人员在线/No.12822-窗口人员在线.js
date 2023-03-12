//获取当前日期
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "/";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}


var data = [];
//开始时间和结束时间
var endTime = getNowFormatDate() + ' 18:00';
var startTime = getNowFormatDate() + ' 8:00';

//Y 坐标的值
var categories = ['王伟', '李明', '张三', '李四', '王五']
// 人员状态
var types = [{
        name: '在线',
        color: '#46BCFF'
    },
    {
        name: '离线',
        color: '#FF5959'
    },
    {
        name: '暂停',
        color: '#D9D9D9'
    },
    {
        name: '延时服务在线',
        color: '#00FAFC'
    }
];
//服务端获取数据组装数据

// data.push({
//     name: typeItem.name,
//     value: [
//         index,
//         baseTime,
//         baseTime += duration,
//         duration
//     ],
//     itemStyle: {
//         normal: {
//             color: typeItem.color
//         }
//     }
// });


//模拟数据
data = [{
        name: '在线',
        value: [0, '2018/12/4 8:00', '2018/12/4 9:12'],
        itemStyle: {
            normal: {
                color: '#46BCFF'
            }
        }
    },
    {
        name: '离线',
        value: [0, '2018/12/4 9:12', '2018/12/4 9:30'],
        itemStyle: {
            normal: {
                color: '#FF5959'
            }
        }
    },
    {
        name: '暂停',
        value: [0, '2018/12/4 9:30', '2018/12/4 10:30'],
        itemStyle: {
            normal: {
                color: '#D9D9D9'
            }
        }
    },
    {
        name: '延时服务在线',
        value: [0, '2018/12/4 10:30', '2018/12/4 19:00'],
        itemStyle: {
            normal: {
                color: '#00FAFC'
            }
        }
    },

    {
        name: '在线',
        value: [1, '2018/12/4 8:00', '2018/12/4 9:12'],
        itemStyle: {
            normal: {
                color: '#46BCFF'
            }
        }
    },
    {
        name: '离线',
        value: [1, '2018/12/4 9:12', '2018/12/4 9:30'],
        itemStyle: {
            normal: {
                color: '#FF5959'
            }
        }
    },
    {
        name: '暂停',
        value: [1, '2018/12/4 9:30', '2018/12/4 10:30'],
        itemStyle: {
            normal: {
                color: '#D9D9D9'
            }
        }
    },
    {
        name: '延时服务在线',
        value: [1, '2018/12/4 10:30', '2018/12/4 12:00'],
        itemStyle: {
            normal: {
                color: '#00FAFC'
            }
        }
    }, {
        name: '在线',
        value: [1, '2018/12/4 14:00', '2018/12/4 18:12'],
        itemStyle: {
            normal: {
                color: '#46BCFF'
            }
        }
    },
    {
        name: '暂停',
        value: [1, '2018/12/4 12:00', '2018/12/4 14:00'],
        itemStyle: {
            normal: {
                color: '#D9D9D9'
            }
        }
    },


    {
        name: '在线',
        value: [2, '2018/12/4 8:00', '2018/12/4 9:12'],
        itemStyle: {
            normal: {
                color: '#46BCFF'
            }
        }
    },
    {
        name: '离线',
        value: [2, '2018/12/4 9:12', '2018/12/4 9:30'],
        itemStyle: {
            normal: {
                color: '#FF5959'
            }
        }
    },
    {
        name: '暂停',
        value: [2, '2018/12/4 9:30', '2018/12/4 10:30'],
        itemStyle: {
            normal: {
                color: '#D9D9D9'
            }
        }
    },
    {
        name: '延时服务在线',
        value: [2, '2018/12/4 10:30', '2018/12/4 12:00'],
        itemStyle: {
            normal: {
                color: '#00FAFC'
            }
        }
    }, {
        name: '在线',
        value: [2, '2018/12/4 14:00', '2018/12/4 18:12'],
        itemStyle: {
            normal: {
                color: '#46BCFF'
            }
        }
    },
    {
        name: '暂停',
        value: [2, '2018/12/4 12:00', '2018/12/4 14:00'],
        itemStyle: {
            normal: {
                color: '#D9D9D9'
            }
        }
    }, {
        name: '在线',
        value: [3, '2018/12/4 8:00', '2018/12/4 12:00'],
        itemStyle: {
            normal: {
                color: '#46BCFF'
            }
        }
    },
    {
        name: '离线',
        value: [3, '2018/12/4 12:00', '2018/12/4 13:30'],
        itemStyle: {
            normal: {
                color: '#FF5959'
            }
        }
    },
    {
        name: '暂停',
        value: [3, '2018/12/4 13:30', '2018/12/4 14:00'],
        itemStyle: {
            normal: {
                color: '#D9D9D9'
            }
        }
    },
    {
        name: '延时服务在线',
        value: [3, '2018/12/4 14:00', '2018/12/4 14:02'],
        itemStyle: {
            normal: {
                color: '#00FAFC'
            }
        }
    }, {
        name: '在线',
        value: [3, '2018/12/4 14:02', '2018/12/4 17:12'],
        itemStyle: {
            normal: {
                color: '#46BCFF'
            }
        }
    },
    {
        name: '离线',
        value: [3, '2018/12/4 17:12', '2018/12/4 18:00'],
        itemStyle: {
            normal: {
                color: '#D9D9D9'
            }
        }
    },


    {
        name: '在线',
        value: [4, '2018/12/4 8:00', '2018/12/4 9:00'],
        itemStyle: {
            normal: {
                color: '#46BCFF'
            }
        }
    },
    {
        name: '离线',
        value: [4, '2018/12/4 9:00', '2018/12/4 10:30'],
        itemStyle: {
            normal: {
                color: '#FF5959'
            }
        }
    },
    {
        name: '暂停',
        value: [4, '2018/12/4 10:30', '2018/12/4 11:00'],
        itemStyle: {
            normal: {
                color: '#D9D9D9'
            }
        }
    },
    {
        name: '延时服务在线',
        value: [4, '2018/12/4 11:00', '2018/12/4 13:00'],
        itemStyle: {
            normal: {
                color: '#00FAFC'
            }
        }
    }, {
        name: '在线',
        value: [4, '2018/12/4 13:00', '2018/12/4 14:00'],
        itemStyle: {
            normal: {
                color: '#46BCFF'
            }
        }
    },
    {
        name: '离线',
        value: [4, '2018/12/4 14:00', '2018/12/4 15:00'],
        itemStyle: {
            normal: {
                color: '#D9D9D9'
            }
        }
    }, {
        name: '延时服务在线',
        value: [4, '2018/12/4 15:00', '2018/12/4 16:00'],
        itemStyle: {
            normal: {
                color: '#00FAFC'
            }
        }
    }, {
        name: '在线',
        value: [4, '2018/12/4 16:00', '2018/12/4 18:00'],
        itemStyle: {
            normal: {
                color: '#46BCFF'
            }
        }
    },

]


function renderItem(params, api) {
    var categoryIndex = api.value(0);
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var height = api.size([0, 1])[1] * 0.6;

    return {
        type: 'rect',
        shape: echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - height / 2,
            width: end[0] - start[0],
            height: height
        }, {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
        }),
        style: api.style()
    };
}

option = {
    //提示框组件
    tooltip: {
        formatter: function(params) {
            //拼接显示参数
            return params.marker + params.name + ' : ' + params.value[1] + ' - ' + params.value[2];
        }
    },

    title: {
        text: '',
        left: 'center'
    },
    //图例相关属性
    legend: {
        data: types,
        selectedMode: false,
    },
    //区域缩放 （请勿修改）
    dataZoom: [{
        type: 'slider',
        filterMode: 'weakFilter',
        showDataShadow: false,
        top: 400,
        height: 10,
        borderColor: 'transparent',
        backgroundColor: '#e2e2e2',
        handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
        handleSize: 20,
        handleStyle: {
            shadowBlur: 6,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
            shadowColor: '#aaa'
        },
        labelFormatter: ''
    }, {
        type: 'inside',
        filterMode: 'weakFilter'
    }],
    //图表高
    grid: {
        height: 300
    },
    //X轴属性
    xAxis: {
        type: 'time',
        min: startTime,
        max: endTime,
        scale: true

    },
    //Y轴属性
    yAxis: {
        data: categories
    },
    series: [{
            name: types[0].name,
            type: 'bar',
            data: [],
            color: '#46BCFF'
        },
        {
            name: types[1].name,
            type: 'bar',
            data: [],
            color: '#FF5959'
        },
        {
            name: types[2].name,
            type: 'bar',
            data: [],
            color: '#D9D9D9'
        },
        {
            name: types[3].name,
            type: 'bar',
            data: [],
            color: '#00FAFC'
        },
        {
            type: 'custom',
            //开发者自己提供图形渲染的逻辑。这个渲染逻辑一般命名为 renderItem
            renderItem: renderItem,
            itemStyle: {
                normal: {
                    //图形透明度
                    opacity: 1.0
                }
            },
            encode: {
                // 表示维度 1、2映射到 x 轴。
                x: [1, 2],
                y: 0,
            },
            data: data
        }
    ]
};