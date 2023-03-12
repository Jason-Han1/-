// http://datav.aliyun.com/tools/atlas 阿里云地图选择器 下载需要的数据包
// 左上角 导入数据 插入到代码

var uploadedDataURL = "/asset/get/s/data-1565258572056-CxztNlcgK.json";


// 标记点
var chinaGeoCoordMap = {
    '黑龙江': [127.9688, 45.368],
    '加拿大': [-106.346771, 56.130366],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京市': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
    "江苏": [118.8062, 31.9208],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    "江西": [116.0046, 28.6633],
    "湖南": [113.0823, 28.2568],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "广东": [113.12244, 23.009505],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],
    '上海': [121.4648, 31.2891]
};
var chinaDatas = [
    [{
        name: '黑龙江',
        value: 10
    }, {
        name: "天津",
    }],
    [{
        name: '天津',
        value: 20
    }, {
        name: "黑龙江",
    }],
    [{
        name: '吉林',
        value: 30
    }, {
        name: "加拿大",
    }],
    [{
        name: '辽宁',
        value: 40
    }, {
        name: "上海",
    }],
    [{
        name: '河北',
        value: 50
    }, {
        name: "上海",
    }],
    [{
        name: '天津',
        value: 60
    }, {
        name: "上海",
    }],
    [{
        name: '山西',
        value: 70
    }, {
        name: "上海",
    }],
    [{
        name: '陕西',
        value: 80
    }, {
        name: "上海",
    }],
    [{
        name: '甘肃',
        value: 90
    }, {
        name: "上海",
    }],
    [{
        name: '宁夏',
        value: 100
    }, {
        name: "上海",
    }],
    [{
        name: '青海',
        value: 110
    }, {
        name: "上海",
    }],
    [{
        name: '新疆',
        value: 120
    }, {
        name: "青海",
    }]
];

//function randomValue() {
//    return Math.ceil(Math.random() * 10000 + 1)
//}

// 输出json对象数组res,包含source,target,value
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = chinaGeoCoordMap[dataItem[0].name];
        var toCoord = chinaGeoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                // value: dataItem[0].value
                value: dataItem[0].value
            }, {
                coord: toCoord,
            }]);
        }
    }
    return res;
};
var series = [];


//控制整个贸易数据的显示，删除后图片只有地图
[
    ['北京市', chinaDatas]
].forEach(function(item, i) {
    series.push({
            // 设置连线
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 0, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: .3 //尾迹线条曲直度
                }
            },
            data: convertData(item[1])   //读数据
        }, {
            //设置节点
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
                //period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                //scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            // 设置节点标签
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [2, 0], //偏移设置
                    formatter: function(params) { //圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 10
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function(val) {
                return 1 + val[2] / 6000; //圆环大小
            },
            // symbolSize: 8,
            itemStyle: {
                normal: {
                    show: false,
                    color: '#f00'
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            }),
        },
        //设置bj节点的显示
        {
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
                    position: 'left',
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
                value: chinaGeoCoordMap[item[0]].concat([item[0].value]),  
            }],
        }
    );
});

// 解析地图数据包
$.get(uploadedDataURL, function(json){
	// 注册地图，传入数据
	echarts.registerMap('world', json);
    console.log(json)
    
    option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(166, 200, 76, 0.82)',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function(params) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value[params.seriesIndex + 1];
                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + params.value;   //鼠标移动显示标签
                return res;
            }
        },
        backgroundColor: "#013954",
        visualMap: { //图例值控制
            min: 0,
            max: 10000,
            calculable: true,
            show: true,
            color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
            textStyle: {
                color: '#fff'
            }
        },
        
        geo: {
            map: 'world',
            zoom: 5,
            center: [104.2978515625, 35.8544921875],
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true, //是否允许缩放
            itemStyle: {
                normal: {
                    color: 'rgba(51, 69, 89, .5)', //地图背景色
                    borderColor: '#516a89', //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(37, 43, 61, .5)' //悬浮背景
                }
            },
            
        },
        series: series
    };
    myChart.setOption(option)
})
