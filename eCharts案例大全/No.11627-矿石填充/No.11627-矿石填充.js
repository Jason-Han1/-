var data = {
    "masterRoomCnt": 7000,
    "receiveRoomCnt": 5000,
    "title": "年 Kg"
}
var textData, receiveRoomCnt, masterRoomCnt, faultRoomCnt, titleText;

receiveRoomCnt = data.receiveRoomCnt;
masterRoomCnt = data.masterRoomCnt;
faultRoomCnt = 0;
textData = receiveRoomCnt + masterRoomCnt;
titleText = data.title;

var faultMax = Math.max.call(receiveRoomCnt, masterRoomCnt, faultRoomCnt);
faultMax = faultMax * 1.2;
var circleData = function(val) {
    let total = faultMax;
    let count = val;
    let shadeCount;
    let noneCount = faultMax * 0.25;
    if (val > total) {
        count = total;
        shadeCount = 0;
    } else if (val == 0) {
        total = 1;
        shadeCount = total * 0.75;
        count = 0;
        noneCount = total * 0.25
    } else {
        shadeCount = total - val;
    }
    return {
        count: count,
        shadeCount: shadeCount,
        noneCount: noneCount,
    }
};

placeHolderStyle = {
    normal: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#181977'
        }, {
            offset: 1,
            color: '#02013B'
        }])
    }
};

option = {
    backgroundColor: '#0B1A32',
    color: ['#88B3FD', '#2C58C8'],
    title: {
        text: titleText,
        x: 'center',
        y: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 30,
            fontWeight: 'normal'
        },
        subtextStyle: {
            color: "rgba(255,255,255,.45)",
            fontSize: 14,
            fontWeight: 'normal'
        }
    },
    tooltip: {
        show: false,
        trigger: 'item'
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        left: '51%',
        top: '26%',
        itemWidth: 10,
        itemHeight: 5,
        itemGap: 30,
        textStyle: {
            color: ['#1bbcfa', '#5beca0'],
            fontSize: 12
        },
        data: ['矿石' + masterRoomCnt + 't', '毛石' + receiveRoomCnt + 't']
    },
    series: [{
        name: '矿石' + masterRoomCnt + 't',
        type: 'pie',
        clockWise: false,
        radius: ['40%', '45%'],
        center: ['50%', '50%'],
        hoverAnimation: false, //鼠标移入变大
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        data: [{
                value: circleData(masterRoomCnt).count,
                name: '矿石',
                itemStyle: {

                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#88B3FD'
                    }, {
                        offset: 1,
                        color: '#57FCE9'
                    }])
                }
            },
            {
                value: circleData(masterRoomCnt).shadeCount,
                name: '',
                itemStyle: placeHolderStyle
            },
            {
                value: circleData(masterRoomCnt).noneCount,
                name: '',
                itemStyle: {
                    normal: {
                        color: 'none',
                        borderColor: 'none'
                    }
                }
            }
        ]
    }, {
        name: '毛石' + receiveRoomCnt + 't',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: ['30%', '35%'],
        center: ['50%', '50%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        data: [{
                value: circleData(receiveRoomCnt).count,
                name: '毛石',
                itemStyle: {

                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#2C58C8'
                    }, {
                        offset: 1,
                        color: '#665AFA'
                    }])
                }
            },
            {
                value: circleData(receiveRoomCnt).shadeCount,
                name: '',
                itemStyle: placeHolderStyle
            },
            {
                value: circleData(receiveRoomCnt).noneCount,
                name: '',
                itemStyle: {
                    normal: {
                        color: 'none',
                        borderColor: 'none'
                    }
                }
            }
        ]
    }]
};