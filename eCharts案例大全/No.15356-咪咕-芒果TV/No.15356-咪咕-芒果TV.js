var hours = ['1', '2', '3',
    '4', '5', '6', '7', '8', '9', '10'
];
var days = ['央视频道', '', '卫视频道', '', '湖南频道', '',
    '其他', '', '', ''
];

var data = [
    [0, 0, 5],
    [0, 1, 1],
    [0, 2, 4],
    [0, 3, 5],
    [0, 4, 78],
    [0, 5, 78],
    [0, 6, 78],
    [0, 7, 78],
    [0, 8, 78],
    [0, 9, 78],
    [1, 0, 7],
    [1, 1, 78],
    [1, 2, 78],
    [1, 3, 78],
    [1, 4, 78],
    [1, 5, 78],
    [1, 6, 78],
    [1, 7, 78],
    [1, 8, 78],
    [1, 9, 0],
    [2, 0, 1],
    [2, 1, 1],
    [2, 2, 78],
    [2, 3, 78],
    [2, 4, 78],
    [2, 5, 78],
    [2, 6, 78],
    [2, 7, 78],
    [2, 8, 78],
    [2, 9, 78],
    [3, 0, 7],
    [3, 1, 3],
    [3, 2, 78],
    [3, 3, 78],
    [3, 4, 78],
    [3, 5, 78],
    [3, 6, 78],
    [3, 7, 78],
    [3, 8, 1],
    [3, 9, 78],
    [4, 0, 1],
    [4, 1, 3],
    [4, 2, 78],
    [4, 3, 78],
    [4, 4, 78],
    [4, 5, 1],
    [4, 6, 78],
    [4, 7, 78],
    [4, 8, 78],
    [4, 9, 2],
    [5, 0, 2],
    [5, 1, 1],
    [5, 2, 78],
    [5, 3, 3],
    [5, 4, 78],
    [5, 5, 78],
    [5, 6, 78],
    [5, 7, 78],
    [5, 8, 2],
    [5, 9, 78],
    [6, 0, 1],
    [6, 1, 78],
    [6, 2, 78],
    [6, 3, 78],
    [6, 4, 78],
    [6, 5, 78],
    [6, 6, 78],
    [6, 7, 78],
    [6, 8, 78],
    [6, 9, 78],
    [7, 0, 65],
    [7, 1, 3],
    [7, 2, 2],
    [7, 3, 1],
    [7, 4, 1],
    [7, 5, 3],
    [7, 6, 4],
    [7, 7, 6],
    [7, 8, 4],
    [7, 9, 4],
    [8, 0, 3],
    [8, 1, 2],
    [8, 2, 1],
    [8, 3, 9],
    [8, 4, 8],
    [8, 5, 178],
    [8, 6, 6],
    [8, 7, 5],
    [8, 8, 5],
    [8, 9, 5],
    [9, 0, 5],
    [9, 1, 4],
    [9, 2, 7],
    [9, 3, 14],
    [9, 4, 13],
    [9, 5, 12],
    [9, 6, 9],
    [9, 7, 5],
    [9, 8, 5],
    [9, 9, 178],
];

data = data.map(function(item) {
    //alert(item[2]);
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});

var data1 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data2 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data3 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data4 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data5 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data6 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data7 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data8 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data9 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data10 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data11 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data12 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data13 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data14 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});
var data15 = data.map(function(item) {
    return [item[1], item[0], Math.round(Math.random() * 100) || '-'];
});


options = [{
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            realtime: true,
            x: '5%',
            x2: '5%',
            loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 3000,
            controlStyle: {
                position: 'left'
            },
            //type: 'number',
            height: '30',
            symbol: 'circle',
            symbolSize: '8',
            lineStyle: {
                // show: false,
                width: 1
            },
            padding: [
                0, // 上
                0, // 右
                0, // 下
                0, // 左
            ],
            data: ['0点', '1点', '2点', '3点', '4点', '5点', '7点', '8点',
                '9点', '10点', '11点', '12点', '13点', '14点', '15点',
                '16点', '17点', '18点', '19点', '20点', '21点', '22点',
                '23点'
            ]
        },
        title: {
            text: '咪咕-芒果TV',
            subtext: '5月1日 1点：良好;质差频道1个 质差占比4%'
        },
        tooltip: {
            //position: 'top',
            /*axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },*/
            trigger: 'item',
            formatter: function(params, ticket, callback) {

                return '5月1日 10点<br>央视频道 CCTV1：良好'+'<br>'+' 健康度:99分';
            },
            axisPointer: {
                show:false,
                type: 'shadow' //shadow  cross line
            },
            backgroundColor: 'rgba(245, 245, 245, 0.8)',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: {
                color: '#000'
            },
            /*position: function(pos, params, el, elRect, size) {
                var obj = {
                    top: 10
                };
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                return obj;
            },*/
            //extraCssText: 'width: 170px'
        },
        animation: true,
        grid: {
            //height: '50%',
            y: '80',
            y2:'40',
            x: '70',
            x2: '10%'
        },
        xAxis: {
            type: 'category',
            data: hours,
            position: 'top',
            splitArea: {
                show: true
            }
        },
        yAxis: {
            inverse: true,
            type: 'category',
            data: days,
            splitArea: {
                show: true
            }
        },
        visualMap: {
            type: 'piecewise',
            splitNumber: 2,
            min: 0,
            max: 100,
            itemWidth: '20',
            itemHeight: '140',
            align: 'left',
            show: false,
            calculable: true,
            orient: 'vertical', //'vertical'  horizontal
            left: 'right', //center   
            top: 'middle',
            bottom: '15%'
        },
        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: false,//是否显示叉叉
                    formatter: function(v) {
                        //alert(v.value);
                        
                        if (v.value[2] > 50) {
                            return 'X';
                        } else {
                            return ' ';
                        }
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    },
    options: [{
        title: {
            subtext: '5月1日 1点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data1
        }]
    }, {
        title: {
            subtext: '5月1日 2点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data2
        }]
    }, {
        title: {
            subtext: '5月1日 3点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data3
        }]
    }, {
        title: {
            subtext: '5月1日 4点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data4
        }]
    }, {
        title: {
            subtext: '5月1日 5点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data5
        }]
    }, {
        title: {
            subtext: '5月1日 6点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data6
        }]
    }, {
        title: {
            subtext: '5月1日 7点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data7
        }]
    }, {
        title: {
            subtext: '5月1日 8点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data8
        }]
    }, {
        title: {
            subtext: '5月1日 9点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data9
        }]
    }, {
        title: {
            subtext: '5月1日 10点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data10
        }]
    }, {
        title: {
            subtext: '5月1日 11点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data11
        }]
    }, {
        title: {
            subtext: '5月1日 12点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data2
        }]
    }, {
        title: {
            subtext: '5月1日 13点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data3
        }]
    }, {
        title: {
            subtext: '5月1日 14点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data4
        }]
    }, {
        title: {
            subtext: '5月1日 15点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data5
        }]
    }, {
        title: {
            subtext: '5月1日 16点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data6
        }]
    }, {
        title: {
            subtext: '5月1日 17点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data7
        }]
    }, {
        title: {
            subtext: '5月1日 18点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data8
        }]
    }, {
        title: {
            subtext: '5月1日 19点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data9
        }]
    }, {
        title: {
            subtext: '5月1日 20点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data10
        }]
    }, {
        title: {
            subtext: '5月1日 21点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data11
        }]
    }, {
        title: {
            subtext: '5月1日 22点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data2
        }]
    }, {
        title: {
            subtext: '5月1日 23点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data3
        }]
    }]
}, {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            realtime: true,
            x: '5%',
            x2: '5%',
            loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 3000,
            controlStyle: {
                position: 'left'
            },
            //type: 'number',
            height: '30',
            symbol: 'circle',
            symbolSize: '8',
            lineStyle: {
                show: true,
                width:1,
            },
            padding: [
                0, // 上
                0, // 右
                0, // 下
                0, // 左
            ],
            data: ['0点', '1点', '2点', '3点', '4点', '5点', '7点', '8点',
                '9点', '10点', '11点', '12点', '13点', '14点', '15点',
                '16点', '17点', '18点', '19点', '20点', '21点', '22点',
                '23点'
            ]
        },
        title: {
            text: '咪咕-未来电视',
            subtext: '劣化：质差频道 10个 质差占比20%'
        },
        tooltip: {
            position: 'top',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params, ticket, callback) {

                return '5月1日 10点<br>卫视频道 辽宁卫视：劣化'+'<br>'+' 健康度:59分';
            }
        },
        animation: true,
        grid: {
            //height: '50%',
            y: '80',
            y2:'40',
            x: '70',
            x2: '10%'
        },
        xAxis: {
            type: 'category',
            data: hours,
            position: 'top',
            splitArea: {
                show: true
            }
        },
        yAxis: {
            inverse: true,
            type: 'category',
            data: days,
            splitArea: {
                show: true
            }
        },
        visualMap: {
            type: 'piecewise',
            splitNumber: 2,
            min: 0,
            max: 100,
            itemWidth: '20',
            itemHeight: '140',
            align: 'left',
            show: false,
            calculable: true,
            orient: 'vertical', //'vertical'  horizontal
            left: 'right', //center   
            top: 'middle',
            bottom: '15%'
        },
        series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#CC3366'
                    },
                    formatter: function(v) {
                        // alert(v.value);
                        if (v.value[2] > 50) {
                            return 'X';
                        } else {
                            return ' ';
                        }
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    },
    options: [{
        title: {
            subtext: '5月1日 1点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data1
        }]
    }, {
        title: {
            subtext: '5月1日 2点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data2
        }]
    }, {
        title: {
            subtext: '5月1日 3点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data3
        }]
    }, {
        title: {
            subtext: '5月1日 4点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data4
        }]
    }, {
        title: {
            subtext: '5月1日 5点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data5
        }]
    }, {
        title: {
            subtext: '5月1日 6点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data6
        }]
    }, {
        title: {
            subtext: '5月1日 7点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data7
        }]
    }, {
        title: {
            subtext: '5月1日 8点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data8
        }]
    }, {
        title: {
            subtext: '5月1日 9点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data9
        }]
    }, {
        title: {
            subtext: '5月1日 10点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data10
        }]
    }, {
        title: {
            subtext: '5月1日 11点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data11
        }]
    }, {
        title: {
            subtext: '5月1日 12点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data2
        }]
    }, {
        title: {
            subtext: '5月1日 13点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data3
        }]
    }, {
        title: {
            subtext: '5月1日 14点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data4
        }]
    }, {
        title: {
            subtext: '5月1日 15点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data5
        }]
    }, {
        title: {
            subtext: '5月1日 16点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data6
        }]
    }, {
        title: {
            subtext: '5月1日 17点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data7
        }]
    }, {
        title: {
            subtext: '5月1日 18点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data8
        }]
    }, {
        title: {
            subtext: '5月1日 19点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data9
        }]
    }, {
        title: {
            subtext: '5月1日 20点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data10
        }]
    }, {
        title: {
            subtext: '5月1日 21点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data11
        }]
    }, {
        title: {
            subtext: '5月1日 22点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data2
        }]
    }, {
        title: {
            subtext: '5月1日 23点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data3
        }]
    }]
}, {
     baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            realtime: true,
            x: '5%',
            x2: '5%',
            loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 3000,
            controlStyle: {
                position: 'left'
            },
            //type: 'number',
            height: '30',
            symbol: 'circle',
            symbolSize: '8',
            lineStyle: {
                // show: false,
                width: 1
            },
            padding: [
                0, // 上
                0, // 右
                0, // 下
                0, // 左
            ],
            data: ['0点', '1点', '2点', '3点', '4点', '5点', '7点', '8点',
                '9点', '10点', '11点', '12点', '13点', '14点', '15点',
                '16点', '17点', '18点', '19点', '20点', '21点', '22点',
                '23点'
            ]
        },
    title: {
        text: '芒果TV',
        subtext: '良好：质差频道2个 质差占比1%'
    },
    tooltip: {
        position: 'top',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params, ticket, callback) {

            return 'CCTV1：合格\n 99分';
        }
    },
    animation: true,
    grid: {
            //height: '50%',
            y: '80',
            y2:'40',
            x: '70',
            x2: '10%'
        },
    xAxis: {
        type: 'category',
        data: hours,
        position: 'top',
        splitArea: {
            show: true
        }
    },
    yAxis: {
        inverse: true,
        type: 'category',
        data: days,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 100,
        itemWidth: '20',
        itemHeight: '140',
        align: 'left',
        show: false,
        calculable: true,
        orient: 'vertical', //'vertical'  horizontal
        left: 'right', //center   
        top: 'middle',
        bottom: '15%'
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#CC3366'
                    },
                    formatter: function(v) {
                        // alert(v.value);
                        if (v.value[2] > 50) {
                            return 'X';
                        } else {
                            return ' ';
                        }
                    }
                }
            },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]},options: [{
        title: {
            subtext: '5月1日 1点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data1
        }]
    }, {
        title: {
            subtext: '5月1日 2点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data2
        }]
    }, {
        title: {
            subtext: '5月1日 3点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data3
        }]
    }, {
        title: {
            subtext: '5月1日 4点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data4
        }]
    }, {
        title: {
            subtext: '5月1日 5点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data5
        }]
    }, {
        title: {
            subtext: '5月1日 6点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data6
        }]
    }, {
        title: {
            subtext: '5月1日 7点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data7
        }]
    }, {
        title: {
            subtext: '5月1日 8点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data8
        }]
    }, {
        title: {
            subtext: '5月1日 9点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data9
        }]
    }, {
        title: {
            subtext: '5月1日 10点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data10
        }]
    }, {
        title: {
            subtext: '5月1日 11点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data11
        }]
    }, {
        title: {
            subtext: '5月1日 12点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data2
        }]
    }, {
        title: {
            subtext: '5月1日 13点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data3
        }]
    }, {
        title: {
            subtext: '5月1日 14点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data4
        }]
    }, {
        title: {
            subtext: '5月1日 15点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data5
        }]
    }, {
        title: {
            subtext: '5月1日 16点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data6
        }]
    }, {
        title: {
            subtext: '5月1日 17点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data7
        }]
    }, {
        title: {
            subtext: '5月1日 18点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data8
        }]
    }, {
        title: {
            subtext: '5月1日 19点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data9
        }]
    }, {
        title: {
            subtext: '5月1日 20点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data10
        }]
    }, {
        title: {
            subtext: '5月1日 21点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data11
        }]
    }, {
        title: {
            subtext: '5月1日 22点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data2
        }]
    }, {
        title: {
            subtext: '5月1日 23点：良好;质差频道1个 质差占比4%'
        },
        series: [{
            data: data3
        }]
    }]
}];