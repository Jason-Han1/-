let color = ['#ffffff', '#36fff6', '#ffe93a', '#67f95f'];
let oneArr = [{
    name: '图谱圆盘',
    type: 0,
    symbol: '',
    symbolSize: 190,
    itemStyle: {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#ffe93a' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#36fff6' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }
    }
}];
const data1 = [
    [19, 22, '农业调查', '#BF54Fb', 65, 1600],
    [19, 35, '农村调查', '#e456a0', 40, 90],
    [10, 37, '居民收支调查', '#5b6dc4', 50, 180],
    [24, 38, '住户监测调查', '#874ad2', 55, 80, 80],
    [26, 33, '劳动力调查', '#874ad2', 55, 80, 80],
    [19, 26, '生产价格调查', '#874ad2', 55, 80, 80],
    [32, 28, '消费价格调查', '#e85411', 45, 100],
    [32, 24, '专项调查', '#e85411', 45, 100],
    [34, 15, '社会调查', '#e85411', 45, 100],
    [24, 30, '制度方法', '#874ad2', 55, 80, 80],
    [26, 25, '综合', '#874ad2', 55, 80, 80],  
    [23, 12, '办公室', '#874ad2', 55, 80, 80],
    [16, 40, '机关党委', '#874ad2', 55, 80, 80],
    [22, 18, '纪检监察', '#874ad2', 55, 80, 80],  
    [16, 29, '人事教育', '#e456a0', 40, 90],
    [5, 34, '执法监督', '#e456a0', 40, 90],
    [24, 22, '财务', '#BF54Fb', 60, 960],
    [12, 33, '信息技术应用', '#BF54Fb', 60, 960],
    [28, 15, '业务应用', '#BF54Fb', 60, 960],
    [31, 19, '系统运维管理', '#BF54Fb', 60, 960],
];
const data3 = [
    [-19, 23, '农业调查', '#BF54Fb', 65, 1600],
    [-19, 35, '农村调查', '#e456a0', 40, 90],
    [-8, 37, '居民收支调查', '#5b6dc4', 50, 180],
    [-24, 39, '住户监测调查', '#874ad2', 55, 80, 80],
    [-23, 32, '劳动力调查', '#874ad2', 55, 80, 80],
    [-37, 16, '生产价格调查', '#874ad2', 55, 80, 80],
    [-33, 28, '消费价格调查', '#e85411', 45, 100],
    [-33, 23, '专项调查', '#e85411', 45, 100],
    [-31, 19, '社会调查', '#e85411', 45, 100],
    [-21, 28, '制度方法', '#874ad2', 55, 80, 80],
    [-26, 25, '综合', '#874ad2', 55, 80, 80],  
    [-23, 15, '办公室', '#874ad2', 55, 80, 80],
    [-16, 38, '机关党委', '#874ad2', 55, 80, 80],
    [-24, 20, '纪检监察', '#874ad2', 55, 80, 80],  
    [-15, 28, '人事教育', '#e456a0', 40, 90],
    [-5, 34, '执法监督', '#e456a0', 40, 90],
    [-39, 21, '财务', '#BF54Fb', 60, 960],
    [-12, 32, '信息技术应用', '#BF54Fb', 60, 960],
    [-29, 13, '业务应用', '#BF54Fb', 60, 960],
    [-29, 35, '系统运维管理', '#BF54Fb', 60, 960],
];
const data4 = [
    [-25, 0, '农业调查', '#BF54Fb', 65, 1600],
    [-25, -17, '农村调查', '#e456a0', 40, 90],
    [-35, 5, '居民收支调查', '#5b6dc4', 50, 180],
    [-27, -20, '住户监测调查', '#874ad2', 55, 80, 80],
    [-32, -15, '劳动力调查', '#874ad2', 55, 80, 80],
    [-33, -7, '生产价格调查', '#874ad2', 55, 80, 80],
    [-30, -3, '消费价格调查', '#e85411', 45, 100],
    [-30, -23, '专项调查', '#e85411', 45, 100],
    [-30, 1, '社会调查', '#e85411', 45, 100],
    [-30, -12, '制度方法', '#874ad2', 55, 80, 80],
    [-24, -25, '综合', '#874ad2', 55, 80, 80],  
    [-19, -18, '办公室', '#874ad2', 55, 80, 80],
    [-23, -10, '机关党委', '#874ad2', 55, 80, 80],
    [-24, -5, '纪检监察', '#874ad2', 55, 80, 80],  
    [-39, -14, '人事教育', '#e456a0', 40, 90],
    [-38, -4, '执法监督', '#e456a0', 40, 90],
    [-21, -23, '财务', '#BF54Fb', 60, 960],
    [-23, -14, '信息技术应用', '#BF54Fb', 60, 960],
    [-27, 5, '业务应用', '#BF54Fb', 60, 960],
    [-33, -26, '系统运维管理', '#BF54Fb', 60, 960],
];
const data5 = [
    [-13, -31, '农业调查', '#BF54Fb', 65, 1600],
    [3, -39, '农村调查', '#e456a0', 40, 90],
    [-10, -41, '居民收支调查', '#5b6dc4', 50, 180],
    [-5, -45, '住户监测调查', '#874ad2', 55, 80, 80],
    [8, -36, '劳动力调查', '#874ad2', 55, 80, 80],
    [-6, -33, '生产价格调查', '#874ad2', 55, 80, 80],
    [10, -45, '消费价格调查', '#e85411', 45, 100],
    [15, -28, '专项调查', '#e85411', 45, 100],
    [14, -39, '社会调查', '#e85411', 45, 100],
    [9, -32, '制度方法', '#874ad2', 55, 80, 80],
    [-11, -38, '综合', '#874ad2', 55, 80, 80],  
    [8, -41, '办公室', '#874ad2', 55, 80, 80],
    [2, -43, '机关党委', '#874ad2', 55, 80, 80],
    [15, -33, '纪检监察', '#874ad2', 55, 80, 80],  
    [1, -33, '人事教育', '#e456a0', 40, 90],
    [-19, -38, '执法监督', '#e456a0', 40, 90],
    [-16, -28, '财务', '#BF54Fb', 60, 960],
    [-4, -38, '信息技术应用', '#BF54Fb', 60, 960],
    [17, -36, '业务应用', '#BF54Fb', 60, 960],
    [-14, -35, '系统运维管理', '#BF54Fb', 60, 960],
];
const data6 = [
    [35, -1, '农业', '#BF54Fb', 65, 1600],
    [20, -15, '农村', '#e456a0', 40, 90],
    [30, -16, '居民收支', '#5b6dc4', 50, 180],
    [25, -18, '住户监测', '#874ad2', 55, 80, 80],
    [22, -13, '劳动力', '#874ad2', 55, 80, 80],
    [39,-7, '生产价格', '#874ad2', 55, 80, 80],
    [30, -8, '消费价格', '#e85411', 45, 100],
    [32, -4, '专项调查', '#e85411', 45, 100],
    [29, 1, '社会调查', '#e85411', 45, 100],
    [23, -10, '制度方法', '#874ad2', 55, 80, 80],
    [24, -5, '综合', '#874ad2', 55, 80, 80],  
    [23, 4, '办公室', '#874ad2', 55, 80, 80],
    [36, -18, '机关党委', '#874ad2', 55, 80, 80],
    [24, 0, '纪检监察', '#874ad2', 55, 80, 80],  
    [36, -9, '人事教育', '#e456a0', 40, 90],
    [35, -24, '执法监督', '#e456a0', 40, 90],
    [31, -23, '财务', '#BF54Fb', 60, 960],
    [32, -13, '信息技术应用', '#BF54Fb', 60, 960],
    [27, 6, '业务应用', '#BF54Fb', 60, 960],
    [33, 4, '系统运维管理', '#BF54Fb', 60, 960],
];
let erArr = [{
    name: '1',
    type: 1
}, {
    name: '2',
    type: 2
}, {
    name: '3',
    type: 1
}, {
    name: '4',
    type: 1
}, {
    name: '5',
    type: 1
} ];
let allArr = [...oneArr, ...erArr],
    dataArr = [];
// 点
allArr.forEach((el, ind) => {
    if (el.type > 0) {
        el.symbolSize = 50;
        el.symbol = "path://M544 552.325V800a32 32 0 0 1-32 32 31.375 31.375 0 0 1-32-32V552.325L256 423.037a32 32 0 0 1-11.525-43.512A31.363 31.363 0 0 1 288 368l224 128 222.075-128a31.363 31.363 0 0 1 43.525 11.525 31.988 31.988 0 0 1-11.525 43.513L544 551.038z m0 0,M64 256v512l448 256 448-256V256L512 0z m832 480L512 960 128 736V288L512 64l384 224z m0 0";
        el.itemStyle = {
            color: color[el.type],
        };
    }
    el.label = {
        normal: {
            show: true,
            position: "bottom",
            distance: 10,
            color: color[el.type],
        },
    };

});

// 圆形分区
function group(arr, r) {
    const newArray = [];
    const {
        length: arLen
    } = arr;
    arr.forEach((e, ind) => {
        // 按角度均匀分布
       const ang = 90 - (360 / arLen).toFixed(2) * (ind + 1);
                const x = (Math.cos(ang * Math.PI / 180)).toFixed(2) * r;
                const y = (Math.sin(ang * Math.PI / 180)).toFixed(2) * r;
                const x1 = (Math.cos(ang * Math.PI / 180)).toFixed(2) * (r - 5);
                const y1 = (Math.sin(ang * Math.PI / 180)).toFixed(2) * (r - 5);
                const x0 = (Math.cos(ang * Math.PI / 180)).toFixed(2) * (r - 40);
                const y0 = (Math.sin(ang * Math.PI / 180)).toFixed(2) * (r - 40);
                e.value = [x.toFixed(2), y.toFixed(2)]
                e.twoPoint = [[x1.toFixed(2), y1.toFixed(2)], [x0.toFixed(2), y0.toFixed(2)]];
        newArray.push(e);
    });
    return newArray;
}

// 线配置
function linesConfig(arr) {
    const [dataArr, targetCoord] = [
        [],
        [0, 0]
    ];
    arr.forEach((el) => {
        function getFormatItem(start, end) {
                    let item = [
                        {coord: el.twoPoint[start]},// 起点
                        {
                            coord: el.twoPoint[end],
                            lineStyle: {
                                color: color[el.type],
                                curveness: el.type === 3 ? 0.1 : 0,
                            },
                            effect: {
                                color: color[el.type]
                            }
                        }, // 终点
                    ]
                    return item
                }
                switch (el.type) {
                    case 0:
                        break;
                    case 1:
                        dataArr.push(getFormatItem(0, 1));
                        break;
                    case 2:
                        dataArr.push(getFormatItem(1, 0));
                        break;
                    case 3:
                        dataArr.push(getFormatItem(0, 1));
                        dataArr.push(getFormatItem(1, 0));
                        break;
                }
    });
    return dataArr;
}

// 点分布
oneArr = group(oneArr, 0);
erArr = group(erArr, 50);

allArr = [...oneArr, ...erArr];
// 线坐标和配置
dataArr = linesConfig(allArr);

function generateData(totalNum, bigvalue, smallvalue, color) {
    let dataArr = [];
    for (var i = 0; i < totalNum; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: bigvalue,
                itemStyle: {
                    normal: {
                        color: color,
                        borderWidth: 0,
                    }
                }
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: smallvalue,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                    }
                }
            });
        }

    }
    return dataArr;
}

let dolitData = generateData(1, 25, 20, 'rgb(126,190,255)');
let threeData = generateData(6, 40, 10, '#2dc0c9');
const data2 = [
    [-15, -5, '专题数据库', '#f1b536', 80, 9000],
    [-10, 15, '基础数据库', '#29bc40', 60, 7000],
    [10,15, '原始数据库', '#e456a0', 70, 1000],
    [15,-5, '工作数据库', '#e456a0', 70, 1000],
    [0,-20, '应用数据库', '#e456a0', 70, 1000],
];
function getOption(startAngle, radius) {
    let option = {
        backgroundColor: '#081c47',
        title: {
            text: '',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: {
            show: false,
            type: "value",
            max: 50,
            min: -51,
        },
        grid: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
        },
        yAxis: {
            show: false,
            type: "value",
            max: 50,
            min: -50,
        },
        series: [
        {
            zlevel: 20,
            name: '数据库',
            type: 'scatter',
            symbol: 'roundRect',
            symbolSize: [120,20],
            itemStyle: {
                color: function (param) {
                    return param.data[3];
                },
            },
            tooltip: {
                formatter: function (param) {
                    const { seriesName, marker, data } = param;
                    return (
                        ''
                    );
                },
            },
            label: {
                show: true,
                textStyle: {
                    fontSize: 12,
                },
                formatter: function (param) {
                    return param.data[2];
                },
            },
            data: data2,
        },
        
        {
            zlevel: 20,
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 155,
            label: {
                normal: {
                    show: true,
                    fontSize: 20,
                    formatter: function (param) {
                        return param.data[2];
                    },
                },
            },
            tooltip: {
                formatter: function (param) {
                    return param.data[2] + '： 共有' + data1AllNum + '亩' + list1;
                },
            },
            itemStyle: {
                normal: {
                    color: '#5A9FF2',
                },
            },
            data: [[0, 0, '', '#5A9FF2', 10]],
        },
        {
            zlevel: 20,
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 130,
            label: {
                normal: {
                    show: true,
                    fontSize: 20,
                    formatter: function (param) {
                        return param.data[2];
                    },
                },
            },
            tooltip: {
                formatter: function (param) {
                    return param.data[2] + '： 共有' + data1AllNum + '亩' + list1;
                },
            },
            itemStyle: {
                normal: {
                    color: '#2554A3',
                },
            },
            data: [[0, 0, '某某信息\n资源中心', '#2554A3', 10]],
        },
        {
                name: "线图",
                type: "lines",
                hoverAnimation: false,
                silent: false,
                cursor: 'default',
                coordinateSystem: "cartesian2d",
                polyline: true, // 多线段
                z: 1,
                lineStyle: {
                    width: 2,
                    type: 'solid',
                    curveness: 0,
                },
              
                emphasis: {
                    lineStyle: {
                        type: 'dashed',
                    }
                },
                data: dataArr,
            },
        {
                name: '不动外圆',
                type: 'pie',
                zlevel: 4,
                silent: true,
                radius: ['60%', '59%'],
                label: {
                    normal: {
                        show: false
                    },
                },
                itemStyle:{
                  color:"red",
                  borderColor:"red"
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: dolitData
            },
        {
            zlevel: 20,
            name: '专业原始数据库',
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 1,
            itemStyle: {
                color: function (param) {
                    return param.data[3];
                },
            },
            tooltip: {
                formatter: function (param) {
                    const { seriesName, marker, data } = param;
                    return (
                        seriesName +
                        '</br>' +
                        marker +
                        data[2] +
                        '：' +
                        data[5] +
                        ' 亩(' +
                        ((data[5] / data1AllNum) * 100).toFixed(2) +
                        '%)'
                    );
                },
            },
            label: {
                show: true,
                textStyle: {
                    fontSize: 12,
                },
                formatter: function (param) {
                    return param.data[2];
                },
            },
            emphasis:{
				scale:false,
				label: {
    				show: true,
    				textStyle: {
    					fontSize: 14,
    				},
    				formatter: function (param) {
    					return param.data[5].value;
    				},
    			},
			},
            data: data1,
        },
        {
            zlevel: 20,
            name: '基础数据库',
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 1,
            itemStyle: {
                color: function (param) {
                    return param.data[3];
                },
            },
            tooltip: {
                formatter: function (param) {
                    const { seriesName, marker, data } = param;
                    return (
                        ''
                    );
                },
            },
            label: {
                show: true,
                textStyle: {
                    fontSize: 12,
                },
                formatter: function (param) {
                    return param.data[2];
                },
            },
            emphasis:{
				scale:false,
				label: {
    				show: true,
    				textStyle: {
    					fontSize: 14,
    				},
    				formatter: function (param) {
    					return param.data[5].value;
    				},
    			},
			},
            data: data3,
        },
        {
            zlevel: 20,
            name: '主题数据库',
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 1,
            itemStyle: {
                color: function (param) {
                    return param.data[3];
                },
            },
            tooltip: {
                formatter: function (param) {
                    const { seriesName, marker, data } = param;
                    return (
                        seriesName +
                        '</br>' +
                        marker +
                        data[2] +
                        '：' +
                        data[5] +
                        ' 亩(' +
                        ((data[5] / data1AllNum) * 100).toFixed(2) +
                        '%)'
                    );
                },
            },
            label: {
                show: true,
                textStyle: {
                    fontSize: 12,
                },
                formatter: function (param) {
                    return param.data[2];
                },
            },
              emphasis:{
				scale:false,
				label: {
    				show: true,
    				textStyle: {
    					fontSize: 14,
    				},
    				formatter: function (param) {
    					return param.data[5].value;
    				},
    			},
			},
            data: data4,
        },
        {
            zlevel: 20,
            name: '综合数据库',
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 1,
            itemStyle: {
                color: function (param) {
                    return param.data[3];
                },
            },
            tooltip: {
                formatter: function (param) {
                    const { seriesName, marker, data } = param;
                    return (
                       ''
                    );
                },
            },
            label: {
                show: true,
                textStyle: {
                    fontSize: 12,
                },
                formatter: function (param) {
                    return param.data[2];
                },
            },
              emphasis:{
				scale:false,
				label: {
    				show: true,
    				textStyle: {
    					fontSize: 14,
    				},
    				formatter: function (param) {
    					return param.data[5].value;
    				},
    			},
			},
            data: data5,
        },
        {
            zlevel: 20,
            name: '专业工作数据库',
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 1,
            itemStyle: {
                color: function (param) {
                    return param.data[3];
                },
            },
            tooltip: {
                formatter: function (param) {
                    const { seriesName, marker, data } = param;
                    return (
                        ''
                    );
                },
            },
            label: {
                show: true,
                textStyle: {
                    fontSize: 12,
                },
                formatter: function (param) {
                    return param.data[2];
                },
            },
              emphasis:{
				scale:false,
				label: {
    				show: true,
    				textStyle: {
    					fontSize: 14,
    				},
    				formatter: function (param) {
    					return param.data[5].value;
    				},
    			},
			},
            data: data6,
        },  
        ],
    };
    return option;
}

let startAngle = 50; // 初始旋转角度
let [minradius, radius, maxradius] = [24, 24, 28] // 初始缩放尺寸
        let isBig = true // 缩放动画 标识

        function draw() {
            startAngle = startAngle - 5
            if (isBig) {
                radius = radius + 0.5
                if (radius > maxradius) {
                    isBig = false
                }
            } else {
                radius = radius - 0.5
                if (radius < minradius) {
                    isBig = true
                }
            }
            let option = getOption(startAngle, radius)
            myChart.setOption(option, true);
        }
myChart.on('mouseover', function (params) {
    console.log(params);
});
timer = setInterval(draw, 200);