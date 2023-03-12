// 坐标数据
var geoCoordMap = {
    
    '港区1-作业中':[102.95,36.27],
    '港区1-等待作业':[100.95,36.27],
    '港区1-已完成':[100.95,34.27],
    '港区1-逾期':[102.95,34.27],
    
	'港区2-等待作业':[120.78,32.04],
	'港区2-作业中':[122.78,32.04],
    '港区2-已完成':[120.78,30.04],
    '港区2-逾期':[122.78,30.04]
};

// 分组数据
var data = [
     // 等待中
     {name: '港区1-等待作业', value: [0,111]},
     {name: '港区2-等待作业', value: [0,89]},
     
     // 作业中
     {name: '港区1-作业中', value: [1,42]},
     {name: '港区2-作业中', value: [1,22]},

     
     // 已完成
     {name: '港区1-已完成', value: [2,86]},
     {name: '港区2-已完成', value: [2,34]}
     
 
];

// 逾期数据
var overduedata = [
     // 逾期作业
     {name: '港区1-逾期', value: [3,11]},
     {name: '港区2-逾期', value: [3,110]}
];

// 地图打点
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name, // 城市名称
                value: geoCoord.concat(data[i].value[0]) // 坐标
            });
        }
    }
    return res;
};

option = {
    backgroundColor: '#404a59',
    title: {
        text: '船舶作业情况',
        subtext: '淡蓝色-等待作业；黄色-作业中；绿色-完成作业；红色-逾期未完成；',
        sublink: 'http://www.alipay.com', // 单击跳转
        left: 'left',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: { // 鼠标悬浮闪点图的数据填充,作者：fzhang
        trigger: 'item',
        formatter: function(params) {
            var toolTiphtml = '';
            
            for (var i = 0; i < data.length; i++) {
                if (params.name == data[i].name) {
                    toolTiphtml += data[i].name + ':<br>'
                    toolTiphtml += data[i].value[1]
                }
            }
            for (var j = 0; j < overduedata.length; j++) {
                if (params.name == overduedata[j].name) {
                    toolTiphtml += overduedata[j].name + ':<br>'
                    toolTiphtml += overduedata[j].value[1]
                }
            }

            return toolTiphtml;
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x: 'right',
        data: ['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: { //图例值控制
        min: 0,
        max: 3,
        calculable: true,
        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
            color: '#fff'
        }
    },

    geo: {
        map: 'china',
        show: true, // false为隐藏中国地图
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, // 是否可以伸缩
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
            name: '散点：',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                // return val[2] * 4 + 6 ; // 闪点图的size
                return 15;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    show: true // 是否显示地名
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 4
        },
        {
            name: '船舶作业逾期情况：',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(overduedata),
            symbolSize: function(val,params) {
                var size = 15;
                for (var i = 0; i < overduedata.length; i++) {
                    if (params.name == overduedata[i].name) {
                        if(overduedata[i].value[1] == 0){
                            size = 0;
                        }
                    }
                }
                return size; // 闪点图的size
            },
            showEffectOn: 'render',
            rippleEffect: {
                period: 1, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 3 //波纹圆环最大限制，值越大波纹越大
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    show: true // 是否显示地名
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

