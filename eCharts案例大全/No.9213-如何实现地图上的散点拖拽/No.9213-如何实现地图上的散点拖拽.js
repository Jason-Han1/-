var uploadedDataURL = "/asset/get/s/data-1576202066788-p99qv08m.json";

$.get(uploadedDataURL, function(as) {
    echarts.registerMap('empty', as);
    var geoCoordMap = {
        "北京": [116.4551, 40.2539],
        "廊坊": [116.521, 39.0509],
        "太原": [112.3352, 37.9413],
        "兰州": [103.5901, 36.3043],
        "杭州": [119.5313, 29.8773],
        "四川": [103.9526, 30.7617],
        "重庆": [107.7539, 30.1904],
        "库尔勒": [86.85, 47.70],
        "克拉玛依": [79.92, 37.12],
        "金华": [120.0037, 29.1028],
        "舟山": [122.2559, 30.2234]
    }

    var datas = [{
            name: "北京",
            value: 0,
            symbol: "",
            id: 1,
            pid: 0,
            ip: ""
        },
        {
            symbol: "",
            name: "廊坊",
            value: 0,
            belong: '北京',
            id: 2,
            pid: 1,
            ip: ""
        },
        {
            symbol: "",
            name: "太原",
            category: 0,
            value: 0,
            belong: '北京',
            id: 3,
            pid: 1,
            ip: ""
        },
        {
            symbol: "",
            name: "兰州",
            value: 1,
            belong: '北京',
            id: 4,
            pid: 1,
            ip: ""
        },
        {
            symbol: "",
            name: "杭州",
            value: 0,
            belong: '北京',
            id: 5,
            pid: 1,
            ip: ""
        },
        {
            symbol: "",
            name: "四川",
            value: 0,
            belong: '北京',
            id: 6,
            pid: 1,
            ip: ""
        },
        {
            symbol: "",
            name: "重庆",
            value: 2,
            belong: '四川',
            id: 7,
            pid: 6,
            ip: ""
        },
        {
            symbol: "",
            name: "库尔勒",
            value: 1,
            belong: '北京',
            id: 8,
            pid: 1,
            ip: ""
        },
        {
            level: 0,
            symbol: "",
            name: "克拉玛依",
            value: 3,
            belong: '北京',
            id: 9,
            pid: 1,
            ip: ""
        },
        {
            symbol: '',
            name: '金华',
            value: 0,
            belong: '杭州',
            id: 10,
            pid: 5,
            ip: ""
        },
        {
            symbol: '',
            name: '舟山',
            value: 0,
            belong: '杭州',
            id: 11,
            pid: 5,
            ip: ""
        }
    ];

    var pdatas = ['北京', '兰州', '四川', '杭州'];
    // var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

    var dataArr = [];

    var converData1 = function(name, data) {
        var res = [];
        var coores = [];
        $.each(data, function(i, item) {
            if (name == item.belong) {
                if (i == 1) {
                    coores.push([{
                        name: name,
                    }, {
                        name: name,
                        value: 0
                    }]);
                } else {
                    coores.push([{
                        name: name
                    }, {
                        name: item.name,
                        value: item.value
                    }]);
                }
                i++;

            }
        });

        res = [name, coores];
        return res;
    };

    $.each(pdatas, function(i, item) {
        var dd = converData1(item, datas);
        dataArr.push(dd);
    });

    var convertData = function(data) {
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

    var series = [];
    dataArr.forEach(function(item, i) {
        // console.log(item)
        series.push({
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 8, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: .3 //尾迹线条曲直度
                }
            },
            data: convertData(item[1])
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
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
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    show: false,
                    color: '#f00'
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            }),
        });
    });

    var option = {
        tooltip: {
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
                var res = "";
                var name = params.name;
                var value = params.value[params.seriesIndex + 1];

                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                return res;
            }
        },
        backgroundColor: "#013954",
        visualMap: { //图例值控制
            //min: 0,
            //max: 1,
            splitList: [{
                    start: 1,
                    end: 1,
                    label: '紧急',
                    color: '#f44336'
                }, //绿色：正常  橙色：预警  红色：故障  柠檬黄色：其他
                {
                    start: 2,
                    end: 2,
                    label: '重要',
                    color: '#fc9700'
                },
                {
                    start: 3,
                    end: 3,
                    label: '一般',
                    color: '#ffde00'
                },
                {
                    start: 0,
                    end: 0,
                    label: '正常',
                    color: '#22FF0F'
                }

            ],
            calculable: false,
            show: true,
            color: ['#f44336', '#fc9700', '#ffde00', '#22FF0F'],
            //color: ['red', 'orange', 'yellow', 'lime'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'empty',
            zoom: 1, //放大比例
            label: {
                emphasis: {
                    show: false
                }
            },
            center: [116.4551, 40.2539], //当前视角的中心点，用经纬度表示
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
            }
        },
        series: series
    };
    
     myChart.setOption(option);
});