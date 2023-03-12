var geoCoordMap = {
    '黑龙江': [127.9688, 45.368, 28374, 2847, 3948],
    '内蒙古': [110.3467, 41.4899, 23748, 9358, 8463],
    "吉林": [125.8154, 44.2584, 183757, 9837, 6862],
    '北京': [116.4551, 40.2539, 25749, 10284, 10285, 7564, 4543, 5643, 7445, 6245, 4542, '首都国际机场', '波音747'],
    "辽宁": [123.1238, 42.1216, 19293, 7373, 6742],
    "河北": [114.4995, 38.1006, 16648, 6476, 6738],
    "天津": [117.4219, 39.4189, 12574, 73658, 5382],
    "山西": [112.3352, 37.9413, 13282, 4432, 4347],
    "陕西": [109.1162, 34.2004, 18595, 4375, 4374],
    "甘肃": [103.5901, 36.3043, 15764, 4342, 4133],
    "宁夏": [106.3586, 38.1775, 16758, 4473, 4254],
    "青海": [101.4038, 36.8207, 19385, 5848, 5231],
    "新疆": [87.9236, 43.5883, 18374, 8764, 8213],
    "西藏": [91.11, 29.97, 17337, 9374, 8973],
    "四川": [103.9526, 30.7617, 20583, 10283, 9323],
    "重庆": [108.3843, 30.4397, 19337, 9833, 9321, 4542, 5453, 5736, 8573, 6526, 5632, '重庆江北国际机场', '波音747'],
    "山东": [117.1582, 36.8701, 19242, 7764, 7353],
    "河南": [113.4668, 34.6234, 18475, 7623, 6922],
    "江苏": [118.8062, 31.9208, 21233, 8634, 3232],
    "安徽": [117.29, 32.0581, 17233, 7321, 7239],
    "湖北": [114.3896, 30.6628, 19264, 8325, 8121],
    "浙江": [119.5313, 29.8773, 22323, 9423, 8480],
    "福建": [119.4543, 25.9222, 21483, 9973, 9742],
    "江西": [116.0046, 28.6633, 19843, 8756, 8324],
    "湖南": [113.0823, 28.2568, 20757, 8534, 8135],
    "贵州": [106.6992, 26.7682, 18346, 9323, 8323],
    "云南": [102.9199, 25.4663, 19964, 7562, 6232],
    "广东": [113.1224, 23.0095, 24832, 10254, 9934],
    "广西": [108.479, 23.1152, 17838, 7472, 7123],
    "海南": [110.3893, 19.8516, 22957, 10247, 9873],
    '上海': [121.4648, 31.2891, 25839, 11857, 1032],
    '台湾': [121.5651, 25.0377, 9738, 58944, 5231],
    '香港': [114.1466, 22.2701, 18894, 9873, 9621],
    '澳门': [113.5495, 22.1918, 18573, 9432, 2484]
};

var BJData = [
    [{
        name: '北京'
    }, {
        name: '上海',
        value: 1
    }]
];

var CQData = [
    [{
        name: '重庆'
    }, {
        name: '上海',
        value: 1
    }]
]



var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData2 = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem[1].value
            }, {
                coord: toCoord
            }]);
        }
    }
    return res;
};

var color = ['#a6c84c', ];
var series = [];
[
    ['北京', BJData],
    ['重庆', CQData]
].forEach(function(item, i) {
    series.push({
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 5, //箭头指向速度，值越小速度越快
            trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: planePath, //箭头图标
            symbolSize: 15, //图标大小
            color: '#00eaff'
        },
        lineStyle: {
            normal: {
                width: 1, //尾迹线条宽度
                opacity: 1, //尾迹线条透明度
                curveness: .3 //尾迹线条曲直度
            }
        },
        data: convertData2(item[1])
    }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            period: 5, //动画时间，值越小速度越快
            brushType: 'stroke', //波纹绘制方式 stroke, fill
            scale: 3 //波纹圆环最大限制，值越大波纹越大
        },
        label: {
            normal: {
                show: true,
                position: 'right', //显示位置
                offset: [5, 0], //偏移设置
                formatter: function(params) { //圆环显示文字
                    return params.data.name;
                },
                fontSize: 13
            }
        },
        symbol: 'circle',
        symbolSize: function(val) {
            return 5 + val[5] * 0.01;
        },
        itemStyle: {
            normal: {
                show: true,
                color: color[i]
            }
        },
        data: item[1].map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    }, {
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            period: 4,
            brushType: 'stroke',
            scale: 4
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                //offset:[5, 0],
                color: '#0f0',
                formatter: '{b}',
                textStyle: {
                    color: "#0f0"
                }
            },
            emphasis: {
                show: true,
                color: "#f60"
            }
        },
        symbol: 'pin',
        symbolSize: 50,
        data: [{
            name: item[0],
            value: geoCoordMap[item[0]].concat([10]),
        }],
    });
});

option = {
    backgroundColor: '#ffffff',
    title: {
        text: '相同机型飞往上海细节成本',
        left: '1%',
        top: '6%',
        textStyle: {
            color: '#000000'
        }
    },
    tooltip: {
        // trigger: 'item'
        trigger: 'item',
        backgroundColor: 'rgba(166, 200, 76, 0.82)',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            if (params.seriesType == "effectScatter") {
                return "降落机场：" + params.data.name + "，航班数：2" + '<br/>变动成本:' + params.data.value[2] + '<br/>固定成本:' + params.data.value[3] + '<br/>期间成本:' + params.data.value[4];
            } else if (params.seriesType == "lines") {
                console.log(params.data.value);
                return "航班数:" + params.data.value + "<br/>航班型号：波音747";
            }
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res = "<span style='color:#fff;'> 起飞机场：" + params.data.value[11] + "</span><br/>飞机型号：" + params.data.value[12] +
                "<br/>地面服务费：" + params.data.value[2] + "<br/>货物处理费费：" + params.data.value[3] + "<br/>过站服务费：" + params.data.value[4] +
                "<br/>机场公共服务设施费：" + params.data.value[5] + "<br/>出入境检疫费：" + params.data.value[6] + "<br/>飞机清洁：" + params.data.value[7] +
                "<br/>安检费：" + params.data.value[8] + "<br/>旅客运送费：" + params.data.value[9] + "<br/>特车费：" + params.data.value[10];
            return res;
        }
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    visualMap: { //图例值控制
        min: 0,
        max: 1,
        calculable: false,
        show: false,
        color: ['#f44336', '#fc9700', '#ffde00', '#3cfc01', '#00eaff'],
        textStyle: {
            color: '#000000'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false, //是否允许缩放
        itemStyle: {
            normal: {
                color: 'rgba(46, 63, 81, 127)', //地图背景色
                borderColor: '#445973', //省市边界线00fcff 516a89
                borderWidth: 1
            },
            emphasis: {
                color: 'rgba(35, 41, 58, 127)' //悬浮背景
            }
        }
    },
    series: series
};