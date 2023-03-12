var areaList = [
    "三元里街道", "松洲街道", "景泰街道",
    "同德街道", "黄石街道", "棠景街道",
    "新市街道", "同和街道", "京溪街道",
    "永平街道", "嘉禾街道", "均禾街道",
    "石井街道", "金沙街道", "云城街道",
    "鹤龙街道", "白云湖街道", "石门街道",
    "人和镇", "太和镇", "钟落潭镇", "江高镇"
];

var arr = [1, 1, 1, 2, 1, 1, 2, 0, 1, 2, 0, 1, 2, 1, 2,
    1, 1, 2, 1, 1, 2
];
var arr2 = [1, 1, 1, 2, 1, 1, 2, 0, 1, 2, 0, 1, 2, 1, 2,
    1, 1, 2, 1, 1, 2
];
var arr3 = [1, 1, 1, 2, 1, 1, 2, 0, 1, 2, 0, 1, 2, 1, 2,
    1, 1, 2, 1, 1, 2
];
var arr4 = [1, 1, 1, 2, 1, 1, 2, 0, 1, 2, 0, 1, 2, 1, 2,
    1, 1, 2, 1, 1, 2
];
var arr5 = [1, 1, 1, 2, 1, 1, 2, 0, 1, 2, 0, 1, 2, 1, 2,
    1, 1, 2, 1, 1, 2
];

var displayNum = screen.width > 1500 ? 25 : 7; //每次显示数据条数
var groupNum = Math.ceil(arr.length / displayNum);
var arrGroup = [];
var arrGroup2 = [];
var arrGroup3 = [];
var arrGroup4 = [];
var arrGroup5 = [];
for (var i = 0; i < arr.length; i += displayNum) { //数据按个数分组存储
    arrGroup.push(arr.slice(i, i + displayNum));
}
for (var i = 0; i < arr2.length; i += displayNum) { //数据按个数分组存储
    arrGroup2.push(arr2.slice(i, i + displayNum));
}
for (var i = 0; i < arr3.length; i += displayNum) { //数据按个数分组存储
    arrGroup3.push(arr3.slice(i, i + displayNum));
}
for (var i = 0; i < arr4.length; i += displayNum) { //数据按个数分组存储
    arrGroup4.push(arr4.slice(i, i + displayNum));
}
for (var i = 0; i < arr5.length; i += displayNum) { //数据按个数分组存储
    arrGroup5.push(arr5.slice(i, i + displayNum));
}
var areaGroup = [];
for (var i = 0; i < areaList.length; i += displayNum) { //区域名称按个数分组存储
    areaGroup.push(areaList.slice(i, i + displayNum));
}
var groupOption = [];
for (var i = 0; i < groupNum; i++) {
    var temp = {
        yAxis: [{
            type: 'category',
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: 0,
                // textStyle: {
                //     color: '#ccc'
                // }
                textStyle: {
                    color: '#7e878e',
                    fontSize: 12
                }

            },
            data: areaGroup[i]
        }],
        series: [{
                name: '低保低收入',
                type: 'bar',
                stack: '总量',
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: '#0DC758',

                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                z: 10,
                data: arrGroup[i]
            },
            {
                name: '特困',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#1AF1DB'
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                z: 5,
                data: arrGroup2[i]
            },
            {
                name: '计生',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#1AADF1'
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                z: 3,
                data: arrGroup3[i]
            },
            {
                name: '独居老人',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#A31AF1'
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                z: 2,
                data: arrGroup4[i]
            },
            {
                name: '独居智障人员',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#FF9600'
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                z: 1,
                data: arrGroup5[i]
            }
        ]
        // xAxis: [{
        //     type: 'category',
        //     axisLabel: {
        //         show: true,
        //         textStyle: {
        //             color: '#7e878e',
        //             fontSize: 12
        //         },
        //         interval: 0,
        //         rotate: displayNum > 13 ? 25 : 0, //数据超过13条时，横坐标标签斜置
        //     },
        //     data: areaGroup[i],
        //     splitLine: {
        //         show: false
        //     },

        // }],
        // series: [{
        //     data: arrGroup[i]
        // }, ]
    };
    groupOption.push(temp);
}


option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            //yAxisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 2000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: areaGroup,
            label: {
                formatter: function(s) {
                    return '';
                },
                
            },
            // show:false
        },
        legend: {
            data: ['低保低收入', '特困', '计生', '独居老人', '独居智障人员'],
            top: 10,
            left: 0,
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                color: ['#0DC758', '#0EB1AD', '#178DCE', '#AE2AF5', '#FE9601'],
                fontSize: 10
            }
        },
        grid: {
            left: '0',
            right: '10',
            bottom: '50',
            top: '15%',
            containLabel: true
        },
        title: {
            subtext: ''
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        calculable: true,
        // grid: {
        //     top: 80,
        //     bottom: 100
        // },
        xAxis: [{
            type: 'value',
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        }],
        yAxis: [{
            type: 'category',
            data: areaList,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                    color: '#ccc'
                }
            },
        }],
        series: [{
                name: '低保低收入',
                type: 'bar',
                stack: '总量',
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: '#0DC758',

                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                z: 10,
                data: arr
            },
            {
                name: '特困',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#1AF1DB'
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                z: 5,
                data: arr2
            },
            {
                name: '计生',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#1AADF1'
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                z: 3,
                data: arr3
            },
            {
                name: '独居老人',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#A31AF1'
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                z: 2,
                data: arr4
            },
            {
                name: '独居智障人员',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#FF9600'
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                z: 1,
                data: arr5
            }
        ]
    },
    options: groupOption,
};