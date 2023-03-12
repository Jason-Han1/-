var uploadedDataURL = "/asset/get/s/data-1555315257733-csgpAyN4z.json";
var coords = {
    "北片": [
        [116.3864, 40.0018],
        [116.4407, 40.0171]
    ],
    "中北片": [
        [116.5169, 39.9819],
        [116.5821, 39.9750]
    ],
    "中南片": [
        [116.5100, 39.9250],
        [116.5855, 39.9060]
    ],
    "南片": [
        [116.5011, 39.8333],
        [116.5402, 39.8660]
    ],
    "外区": [
        [116.5965, 40.0565],
        [116.5903, 40.0807]
    ],

};
var ponitSymbolColors = ['red', 'yellow']; //地图上标记点标记图形的颜色数组

//本地模拟数据
var data = [{
    "name": "北片",
    "info": [{
        "name": "其他类",
        "value": "407"
    }, {
        "name": "交通事故",
        "value": "169"
    }]
}, {
    "name": "南片",
    "info": [{
        "name": "交通事故",
        "value": "230"
    }, {
        "name": "其他类",
        "value": "608"
    }]
}, {
    "name": "中北片",
    "info": [{
        "name": "其他类",
        "value": "674"
    }, {
        "name": "交通事故",
        "value": "223"
    }]
}, {
    "name": "中南片",
    "info": [{
        "name": "交通事故",
        "value": "141"
    }, {
        "name": "其他类",
        "value": "604"
    }]
}]

$.get(uploadedDataURL, function(geoJson) {
    echarts.registerMap('chaoyang', geoJson, {});
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>'
        },
        series: [{
            name: '朝阳120各分区突发事件统计',
            type: 'map',
            // top:100,
            map: 'chaoyang',
            aspectScale: 1, //地图长度比,默认0.75
            label: { //图形上的文本标签---对应json数据上的多边形分区name值
                normal: { //正常时的样式
                    show: false,
                    textStyle: {
                        // color: '#ef5400',
                        color: '#333',
                        fontSize: 18,
                    }
                },
                emphasis: { //高亮时的样式设置
                    show: true,
                    textStyle: {
                        color: 'red',
                        fontSize: 20,
                    }
                }
            },
            emphasis: { //高亮状态下的样式---2019-03-22 plq 循环高亮效果添加
                itemStyle: { //多边形样式
                    areaColor: "#36c5d8",
                }
            },
            data: [{
                    name: '北部', //只有与json数据上的多边形分区name值对应才可以显示颜色
                    value: 50, //value值对应颜色映射的取值
                    itemStyle: {
                        areaColor: '#0c254d' //区域颜色
                    }
                },
                {
                    name: '中北',
                    value: 100,
                    itemStyle: {
                        areaColor: '#0c254d '
                    }
                },
                {
                    name: '中南',
                    value: 180,
                    itemStyle: {
                        areaColor: '#0c254d'
                    }
                },
                {
                    name: '南部',
                    value: 220,
                    itemStyle: {
                        areaColor: '#0c254d'
                    }
                },
            ],
            itemStyle: { //地图区域的多边形 图形样式。
                borderColor: '#fff', //图形的描边颜色
                borderWidth: 1,
                borderType: 'dashed',
            },
            markPoint: { //默认情况下，标记会居中置放在数据对应的位置，
                symbol: 'path://m 0,0 h 48 v 20 h -30 l -6,10 l -6,-10 h -6 z',
                symbolSize: 20,
                // symbolSize:(rawValue, params) => {   //回调函数实现每个数据图形大小不一样
                //     params.symbolSize = rawValue*5;
                //     return params.symbolSize
                // },
                itemStyle: { //全局标注样式
                    // normal: {
                    //     // color:'#70b218' //貌似标记的颜色只能统一设置一个。。。回调无效？？
                    // },
                    emphasis: {
                        color: '#f16d02',
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                label: { //标注的文本。
                    normal: {
                        show: true,
                        position: 'top',
                        distance: 0,
                        offset: [0, 2],
                        // formatter: function (d) { //文本 回调函数格式：(params: Object|Array) => string
                        //     return d.name + "\n" + d.value + "起"
                        // },
                        formatter: '{styleA|{b}\t}{styleB|{c}}',
                        textStyle: {
                            fontFamily: '微软雅黑',
                            align: 'center',
                            color: '#fff',
                            // backgroundColor:"31b573",
                            padding: 4,
                        },
                        rich: {
                            styleA: {
                                fontSize: 18,
                                // color: "#4b96ff",
                                color: '#fff'
                            },
                            styleB: {
                                fontSize: 20,
                                color: "#fff",
                                lineHeight: 30,
                            },
                        }
                    }
                },
                animation: true, //开启动画
                data: getMarkPointData(data),
            },
        }]
    };
    myChart.setOption(option);

    //2019-03-22 plq 区域循环高亮
    autoDispatchMapAction(myChart, option);

});

//function:解析后台传递的数据，结合经纬度坐标数据及标记图形颜色数组解析成echarts可用数据
function getMarkPointData(data) {
    var arr = [];
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i]["info"].length; j++) {
            var obj = {};
            obj.name = data[i]["info"][j]["name"];
            obj.value = data[i]["info"][j]["value"];
            obj.coord = coords[data[i]["name"]][j];
            obj.itemStyle = {};
            obj.itemStyle.color = ponitSymbolColors[j];
            arr.push(obj);
        }
    }
    console.log(arr);
    return arr;
}

//function: 主动触发echarts实例高亮行为，实现高亮自动切换。参数1：echarts实例；参数2：option配置对象
function autoDispatchMapAction(myChart, option) {
    var app = {
        currentIndex: -1 //初始数据索引值---通过其指定高亮的某个数据
    };

    timeId = setInterval(function() {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'mapUnSelect', //取消高亮指定的数据图形。
            seriesIndex: 0, // 可选，系列 index，在 tooltip 的 trigger 为 axis 的时候可选。
            dataIndex: app.currentIndex // 可选，数据的 index
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        // 高亮当前图形---通过seriesName或者seriesIndex指定系列。通过指定dataIndex或者name再指定某个数据。
        myChart.dispatchAction({
            type: 'mapSelect',
            seriesIndex: 0,
            dataIndex: app.currentIndex
        });
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0, //这行不能省
            dataIndex: app.currentIndex
            // name:"北部"
        });

    }, 5000);
}