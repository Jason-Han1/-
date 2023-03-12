var ccqdcl = 4571; //长春-青岛数据
var cctjcl = 0; //长春-天津数据
var shqdcl = 2338; //上海-青岛数据
var shtjcl = 3450; //上海-天津数据

//长春-青岛坐标
var ccqd = [
    [125.81, 44.25],
    [120.33, 36.07]
];
//长春-天津坐标
var cctj = [
    [125.81, 44.25],
    [117.20, 39.12]
];
//上海-青岛坐标
var shqd = [
    [121.46, 31.28],
    [120.33, 36.07]
];
//上海-天津坐标
var shtj = [
    [121.46, 31.28],
    [117.20, 39.12]
];

//加逗号函数
function toThousands(num) {
    var res = num.toString().replace(/\d+/, function(n) { // 先提取整数部分
        return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
            return $1 + ",";
        });
    })
    return res;
}



var geoCoordMap = {
    '上海': [121.46, 31.28],
    '长春': [125.81, 44.25],
    '天津': [117.20, 39.12],
    '青岛': [120.33, 36.07],
};

var CCData = [
    [{
        name: '长春'
    }, {
        name: '青岛',
        value: ccqdcl
    }],
    [{
        name: '长春'
    }, {
        name: '天津',
        value: cctjcl
    }],
];

var SHData = [
    [{
        name: '上海'
    }, {
        name: '青岛',
        value: shqdcl
    }],
    [{
        name: '上海'
    }, {
        name: '天津',
        value: shtjcl
    }],
];

var planePath = 'path://M39.883,27.852h-0.959V16.795H24.632l-0.002,7.509l-0.186-0.002v-4.995h-6.446l-2.897,5.002h-4.262v3.543h-0.723v2h0.723v1.25h2.514c0.234,1.197,1.289,2.104,2.556,2.104c1.265,0,2.317-0.905,2.553-2.104h12.326c0.234,1.197,1.289,2.104,2.553,2.104c1.268,0,2.32-0.905,2.557-2.104h3.027v-1.25h0.959V27.852L39.883,27.852z M15.908,32.205c-0.887,0-1.605-0.721-1.605-1.604s0.721-1.604,1.605-1.604c0.884,0,1.604,0.721,1.604,1.604S16.792,32.205,15.908,32.205z M33.34,32.205c-0.885,0-1.604-0.721-1.604-1.604s0.719-1.604,1.604-1.604c0.887,0,1.605,0.721,1.605,1.604S34.227,32.205,33.34,32.205zM37.924,30.102h-2.029c-0.234-1.197-1.289-2.104-2.555-2.104s-2.318,0.906-2.553,2.104H18.46c-0.234-1.197-1.288-2.104-2.553-2.104c-1.266,0-2.32,0.906-2.555,2.104h-1.514v-4.793h3.837l2.898-5.002h4.87v4.984l2.186,0.021l0.002-7.519h12.291V30.102L37.924,30.102z M19.152,21.307h3.354v3.896h-5.612L19.152,21.307z';


var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];

        if (geoCoord) {
            res.push({
                value: geoCoord.concat(data[i].value),
                name: data[i].name
            });
        }
    }
    return res;
};

var shqdzhuanhuan = function(data) {
    var res = [];
    if (data !== 0) {
        res.push({
            fromName: "上海",
            toName: "青岛",
            coords: shqd,
            value: shqdcl
        })
        return res;
    } else {
        return null;
    }

};

var cctjzhuanhuan = function(data) {
    var res = [];
    if (data !== 0) {
        res.push({
            fromName: "长春",
            toName: "天津",
            coords: cctj,
            value: cctjcl
        })
        return res;
    } else {
        return null;
    }
};
var ccqdzhuanhuan = function(data) {
    var res = [];
    if (data !== 0) {
        res.push({
            fromName: "长春",
            toName: "青岛",
            coords: ccqd,
            value: ccqdcl
        })
        return res;
    } else {
        return null;
    }
};
var shtjzhuanhuan = function(data) {
    var res = [];
    if (data !== 0) {
        res.push({
            fromName: "上海",
            toName: "天津",
            coords: shtj,
            value: shtjcl
        });
        return res;
    } else {
        return null;
    }
};


var color = ['#1B4F93', '#1B4F93'];

var series = [];
[
    ['长春', CCData],
    ['上海', SHData]
].forEach(function(item, i) {
    series.push({
        name: "长春-青岛",
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 15, //箭头大小
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15 //飞机大小
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 4,
                opacity: 0.6,
                curveness: 0.3
            }
        },
        data: ccqdzhuanhuan(ccqdcl)


    }, {
        name: "长春-天津",
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 15, //箭头大小
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15 //飞机大小
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 4,
                opacity: 0.6,
                curveness: 0.3
            }
        },
        data: cctjzhuanhuan(cctjcl)

    }, {
        name: "上海-天津",
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 15, //箭头大小
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15 //飞机大小
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 4,
                opacity: 0.6,
                curveness: 0.3
            }
        },
        data: shtjzhuanhuan(shtjcl)


    }, {
        name: "上海-青岛",
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 15, //箭头大小
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15 //飞机大小
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 4,
                opacity: 0.6,
                curveness: 0.3
            }
        },
        data: shqdzhuanhuan(shqdcl)


    }, {
        name: "青岛和天津",
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function(val) {
            if (val[2] > 200) {
                return 20;
            } else {
                return val[2] / 10;
            }
        },
        itemStyle: {
            normal: {
                color: '#EE7700' //修改地区颜色
            }
        },
        data: convertData([{
                name: '青岛',
                value: 150
            },
            {
                name: '天津',
                value: 150
            }
        ])

    }, {
        name: '长春和上海',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },

        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },

        itemStyle: {
            normal: {
                color: '#EE7700' //修改地区颜色
            }
        },
        data: convertData([{
                name: '长春',
                value: 80
            },
            {
                name: '上海',
                value: 80
            }
        ])


    });


});
option = {
    title: [{
            text: '运输图',
            x: 'center',
            textStyle: {
                fontSize: 20,
                color: '#1e56a0',
                fontWeight: 'bold',
            }
        }, {
            text: '{words|\n长春-天津运输量:  }' + toThousands(cctjcl),
            x: '40%',
            top: '1%',
            textStyle: {
                rich: {
                    words: {
                        fontSize: 15,
                        fontWeight: 'normal'
                    }
                }
            }

        },
        {
            text: '{words|\n\n长春-青岛运输量:  }' + toThousands(ccqdcl),
            x: '40%',
            top: '2%',
            textStyle: {
                rich: {
                    words: {
                        fontSize: 15,
                        fontWeight: 'normal'
                    }
                }
            }
        },
        {
            text: '{words|\n\n\n上海-天津运输量:  }' + toThousands(shtjcl),
            x: '40%',
            top: '3%',
            textStyle: {
                rich: {
                    words: {
                        fontSize: 15,
                        fontWeight: 'normal'
                    }
                }
            }

        },
        {
            text: '{words|\n\n\n\n上海-青岛运输量:  }' + toThousands(shqdcl),
            x: '40%',
            top: '4%',
            textStyle: {
                rich: {
                    words: {
                        fontSize: 15,
                        fontWeight: 'normal'
                    }
                }
            }

        },
    ],

    backgroundColor: '#cecece', //背景颜色
    tooltip: {
        show: true,
        trigger: 'item',
        // triggerOn: 'click',
        formatter: function(params) {
            if (params.seriesType == "effectScatter") {
                if (params.data.name == '上海' || params.data.name == '长春') {
                    return '始发站：' + params.data.name
                } else if (params.data.name == '天津') {
                    return '终到站：' + params.data.name + '<br />' + '共计' + (shtjcl + cctjcl)
                } else if (params.data.name == '青岛') {
                    return '终到站：' + params.data.name + '<br />' + '共计' + (shqdcl + ccqdcl)
                }
            } else if (params.seriesType == "lines") {
                return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
            } else {
                return params.name;
            }
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false,

            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#C2C2C2', //地图块颜色
                borderColor: '#868686' //地图框颜色
            },
            emphasis: {
                areaColor: '#FDDD31' //鼠标移入地图块颜色
            }
        },

    },
    series: series
};