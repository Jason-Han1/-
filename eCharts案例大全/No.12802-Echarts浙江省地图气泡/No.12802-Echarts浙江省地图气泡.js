var uploadedDataURL = "/asset/get/s/data-1543561856764-h-LwAMlm2.json"; //浙江省

$.get(uploadedDataURL, function(geoJson) {
    echarts.registerMap("浙江", geoJson); //注册地图
    var geoCoordMap = {
        "杭州市": [119.47, 29.90],
        "宁波市": [121.539029, 29.736103],
        "温州市": [120.61, 27.85],
        "绍兴市": [120.701386, 29.74081],
        "湖州市": [119.92, 30.70],
        "嘉兴市": [120.78, 30.58],
        "金华市": [119.94, 29.10],
        "衢州市": [118.80, 28.84],
        "舟山市": [122.10, 30.07],
        "台州市": [121.08, 28.78],
        "丽水市": [119.50, 28.07]
    };
    var data = [{
            name: "杭州市",
            value: 152
        },
        {
            name: "宁波市",
            value: 153
        },
        {
            name: "温州市",
            value: 154
        },
        {
            name: "绍兴市",
            value: 157
        },
        {
            name: "湖州市",
            value: 159
        },
        {
            name: "嘉兴市",
            value: 160
        },
        {
            name: "金华市",
            value: 152
        },
        {
            name: "衢州市",
            value: 153
        },
        {
            name: "舟山市",
            value: 154
        },
        {
            name: "台州市",
            value: 157
        },
        {
            name: "丽水市",
            value: 159
        }
    ]
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push(geoCoord.concat(data[i].value));
            }
        }
        return res;
    };
    zjMapOption = {
        tooltip: {
            trigger: 'item',
            formatter: function(params, ticket, callback) {
                var datasCssStyle = '<div style="text-align:center;float:right;margin:0 0.75vw">';
                var initCssStyle = '<div style="text-align:center;float:right;margin:0 2.75vw">';
                var lineName = 'xxxxxx1' + ':' + datasCssStyle + 0 + '</div>' + '<br>' +
                    'xxxxxx2' + ':' + datasCssStyle + 0 + '</div>' + '<br>' +
                    'xxxxxx3' + ':' + datasCssStyle + 0 + '</div>' + '<br>' +
                    'xxxxxx4' + ':' + datasCssStyle + 0 + '</div>' + '<br>';
                return lineName;
            },
            //showDelay:1000,                                  //浮层显示的延迟，单位为 ms
            //hideDelay:100,                                //浮层隐藏的延迟，单位为 ms
            //enterable:true,                             //鼠标是否可进入提示框浮层中
            //confine:false,                               //是否将 tooltip 框限制在图表的区域内
            //transitionDuration:10,                      //提示框浮层的移动动画过渡时间，单位是 s,设置为 0 的时候会紧跟着鼠标移动
            //虚化悬浮窗
            extraCssText: 'pointer-events:none;width:20.58vw;height:10.81vw;background:#FFDEAD;color:#333333;line-height:1.9vw;font-size:1.04vw;border-radius:0;'
        },
        visualMap: {
            type: 'continuous',
            calculable: true,
            show: false,
            realtime: false,
            inRange: {
                color: '#F4A460',
                borderColor: "white", //边框颜色
                borderWidth: 10
            }
        },
        geo: {
            map: '浙江',
            label: {
                normal: {
                    show: true,
                    color: 'black'
                },
                emphasis: {
                    show: true,
                    color: 'black'
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#dedede',
                    borderColor: 'white',
                    borderWidth: 1
                },
                emphasis: { //地图选中（地图鼠标悬浮）
                    label: {
                        show: true
                    },
                    areaColor: '#FFD700'
                }
            },
            "left": '32%',
            "right": '1.5%',
            "top": '3%',
            "bottom": '7%'
        },
        series: [{
            name: '省市数据',
            mapType: '浙江', // 自定义扩展图表类型
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: "circle",
            data: convertData(data),
            symbolSize: 15,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'white',
                    borderWidth: 2,
                },
                emphasis: {
                    color: '#5ccbb1'
                }
            },
        }]
    }
    myChart.setOption(zjMapOption, true);
})