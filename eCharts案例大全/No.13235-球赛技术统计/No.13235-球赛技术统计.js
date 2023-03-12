

var data = {
    "_type": "statistics",
    "_title": "中超#2018-05-13#江苏苏宁vs大连一方",
    "_data": [
        {
            "_name": "进球",
            "_left": "1",
            "_right": "0"
        },
        {
            "_name": "控球率",
            "_left": "42.5%",
            "_right": "57.5%"
        },
        {
            "_name": "助攻",
            "_left": "1",
            "_right": "0"
        },
        {
            "_name": "射正",
            "_left": "4",
            "_right": "1"
        },
        {
            "_name": "射门",
            "_left": "15",
            "_right": "13"
        },
        {
            "_name": "传球",
            "_left": "281",
            "_right": "369"
        },
        {
            "_name": "抢断",
            "_left": "21",
            "_right": "13"
        },
        {
            "_name": "角球",
            "_left": "2",
            "_right": "8"
        },
        {
            "_name": "任意球",
            "_left": "20",
            "_right": "13"
        },
        {
            "_name": "越位",
            "_left": "1",
            "_right": "0"
        },
        {
            "_name": "犯规",
            "_left": "13",
            "_right": "20"
        },
        {
            "_name": "黄牌",
            "_left": "2",
            "_right": "4"
        },
        {
            "_name": "红牌",
            "_left": "3",
            "_right": "3"
        }
    ],
    "_teams": [
        "江苏苏宁",
        "大连一方"
    ],
    "_league_name": "中超"
}




var uploadedDataURL1 = "/asset/get/s/data-1534230068281-ry3ERxeU7.jpg";
var uploadedDataURL2 = "/asset/get/s/data-1534230056221-B1xEAgxU7.jpg"
var zongjine = [0];
var team = [];
var myData = [];
var myData_l = [];
var myData_r = [];
var garybar = [];
var data_l = [];
var data_r = [];
var colorList1 = [];
var colorList2 = [];

function dataConvert(data) {
    team = data['_teams'];
    for(var i = 0;i < data['_data'].length;i++) {
        myData.push(data['_data'][i]['_name']);
        var l = parseFloat(data['_data'][i]['_left']);
        var r = parseFloat(data['_data'][i]['_right']);
        myData_l.push(data['_data'][i]['_left']);
        myData_r.push(data['_data'][i]['_right']);
        garybar.push(1);
        var l2 = l/(l+r);
        var r2 = r/(l+r);
        data_l.push(l2);
        data_r.push(r2);
        if(l2 > r2) {
            colorList1.push('#53a748');
            colorList2.push('#888888');
        }
        else if(l2 == r2) {
            colorList1.push('#53a748');
            colorList2.push('#53a748');
        }
        else {
            colorList1.push('#888888');
            colorList2.push('#53a748');
        };

    }
    console.log(colorList1);
    
}
dataConvert(data);
option = {
    textStyle: {
        fontFamily: 'PingFangSC-Medium, sans-serif'
    },
    title : {
        text: '技术统计',
        x: 'center',
        align: 'right',
        textStyle: {
            fontSize: 24,
            color: '#4a4a4a',
        }


    },
        
    grid: [{
        show: false,
        left: '3%',
        top: 120,
        bottom: 10,
        width: '0%',
    }, {
        show: false,
        left: '10%',
        top: 120,
        bottom: 10,
        containLabel: true,
        width: '34%',
    }, {
        show: false,
        left: '49%',
        top: 120,
        bottom: 10,
        width: '0%',
    }, {
        show: false,
        right: '10%',
        top: 120,
        bottom: 10,
        containLabel: true,
        width: '34%',
    }, {
        show: false,
        right: '3%',
        top: 120,
        bottom: 10,
        width: '0%',
    },
    {
        show: false,
        left: '23%',
        top: 5,
        bottom: 10,
        containLabel: true,
        width: '10%',
    },
    {
        show: false,
        left: '68%',
        top: 5,
        bottom: 10,
        containLabel: true,
        width: '10%',
    }],

    xAxis: [
        {

            show: false,
        },
        {
            gridIndex: 1,
            type: 'value',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#B2B2B2',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, {
            gridIndex: 2,
            show: false,
        }, {
            gridIndex: 3,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#B2B2B2',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, {
            gridIndex: 4,
            show: false,
        },{
            gridIndex: 5,
            show: false,
        },{
            gridIndex: 6,
            show: false,
        }],
    yAxis: [
        {

            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#4b4b4b',
                    fontSize: 16,
                },

            },
            data: myData_l.map(function (value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        }, 
        {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                margin: 8,
                textStyle: {
                    color: '#4b4b4b',
                    fontSize: 12,
                },

            },
            data: myData,
        }, 
        {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#4b4b4b',
                    fontSize: 16,
                },

            },
            data: myData.map(function (value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        }, 
        {
            gridIndex: 3,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#4b4b4b',
                    fontSize: 12,
                },

            },
            data: myData,
        }, 
        {
            gridIndex: 4,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#4b4b4b',
                    fontSize: 16,
                },

            },
            data: myData_r.map(function (value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        },
        {
            gridIndex: 5,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#4b4b4b',
                    fontSize: 16,
                },

            },
            data: myData_r.map(function (value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        },
        {
            gridIndex: 6,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#4b4b4b',
                    fontSize: 16,
                },

            },
            data: myData_r.map(function (value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        }
    ],
    series: [
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#ddd'
                }
            },
            silent: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            barWidth: 20,
            barGap: '-100%', // Make series be overlap
            data: garybar
        }, {
            type: 'bar',
            itemStyle: {
                color: function (params){
                    var colorList = colorList1;
                    return colorList[params.dataIndex];
                }
            },
            xAxisIndex: 1,
            yAxisIndex: 1,

            barWidth: 20,
            z: 10,
            data: data_l
        },

        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#ddd'
                }
            },
            silent: true,
            barWidth: 20,
            barGap: '-100%', // Make series be overlap
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: garybar
        }, {
            type: 'bar',
            itemStyle: {
                color: function (params){
                    var colorList = colorList2;
                    return colorList[params.dataIndex];
                }
            },
            barWidth: 20,
            xAxisIndex: 3,
            yAxisIndex: 3,
            z: 10,
            data: data_r
        },
        {
            type: 'bar',
            xAxisIndex: 5, 
            yAxisIndex: 5,
            barGap: '-100%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: '#fff'
                },
            },
            label: {
                normal: {
                    show: true,
                    //label 的position位置可以是top bottom left,right,也可以是固定值
                    //在这里需要上下统一对齐,所以用固定值
                    position: [0, '-100%'],
                    rich: { //富文本
                        
                        start1: {
                            backgroundColor: {
                                image: uploadedDataURL1,
                            },
                            width: 60,
                            height: 60,
                            align: 'center',
                        },
                        black: {
                            color: '#4b4b4b',
                            lineHeight: 50,
                            align: 'center',
                            fontSize: 18,
                        },
                    },
                    formatter: function(value) {
                        //富文本固定格式{colorName|这里填你想要写的内容}
                        return '{start1|}\n{black|' + team[0]+'}';
                    },
                }
            },
            data: zongjine
        },
        {
            type: 'bar',
            xAxisIndex: 6, 
            yAxisIndex: 6,
            barGap: '-100%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: '#fff'
                },
            },
            label: {
                normal: {
                    show: true,
                    //label 的position位置可以是top bottom left,right,也可以是固定值
                    //在这里需要上下统一对齐,所以用固定值
                    position: [0, '-100%'],
                    rich: { //富文本
                        
                        start1: {
                            backgroundColor: {
                                image: uploadedDataURL2,
                            },
                            width: 60,
                            height: 60,
                            align: 'center',
                        },
                        black: {
                            color: '#4b4b4b',
                            lineHeight: 50,
                            align: 'center',
                            fontSize: 18,
                        },
                    },
                    formatter: function(value) {
                        //富文本固定格式{colorName|这里填你想要写的内容}
                        return '{start1|}\n{black|' + team[1]+'}';
                    },
                }
            },
            data: zongjine
        }

    ]

};
