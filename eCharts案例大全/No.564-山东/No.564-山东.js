var uploadedDataURL = "/asset/get/s/data-1601021532008-U4ZFkS5F6.json";

var binzhou = "/asset/get/s/data-1601021540178-NiBsf8MaK.json";

var dezhou = "/asset/get/s/data-1601021547981-xolcQQS1D.json";

var dongying = "/asset/get/s/data-1601021556252-ESxdx992q.json";

var heze = "/asset/get/s/data-1601021563431-m3hYupITe.json";

var jinan = "/asset/get/s/data-1601021569915-1-ngeLwCt.json";

var jining = "/asset/get/s/data-1601021577714-cacGjTBsc.json";

var liaocheng = "/asset/get/s/data-1601021586973-WB2Kffdki.json";

var linyi = "/asset/get/s/data-1601021594426-EW-H7jDah.json";

var qingdao = "/asset/get/s/data-1601021607761-cQcitEozj.json";

var rizhao = "/asset/get/s/data-1601021619254-rPoZAKGBW.json";

var taian = "/asset/get/s/data-1601021628580-fYXBtMSrC.json";

var weihai = "/asset/get/s/data-1601021640122-Kr919ft63.json";

var yantai = "/asset/get/s/data-1601021647171-vp0ep01T5.json";

var yongfang = "/asset/get/s/data-1601021654936-PLnJUWQZP.json";

var zaozhuang = "/asset/get/s/data-1601021660971-AJ2g1_9r9.json";

var zibo = "/asset/get/s/data-1601021666722-_IBRD8nVV.json";

$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('山东', geoJson);

    var cityMap = {
        '济南市': jinan,
        '菏泽市': heze,
        '德州市': dezhou,
        '聊城市': liaocheng,
        '泰安市': taian,
        '临沂市': linyi,
        '淄博市': zibo,
        '枣庄市': zaozhuang,
        '滨州市': binzhou,
        '潍坊市': yongfang,
        '东营市': dongying,
        '青岛市': qingdao,
        '烟台市': yantai,
        '威海市': weihai,
        '日照市': rizhao,
        '济宁市': jining
    };

    var gdGeoCoordMap = {
        '济南市': [117.121225, 36.66466],
        '菏泽市': [115.480656, 35.23375],
        '德州市': [116.39, 37.45],
        '聊城市': [115.97, 36.45],
        '泰安市': [117.13, 36.18],
        '临沂市': [118.35, 35.05],
        '淄博市': [118.05, 36.78],
        '枣庄市': [117.57, 34.86],
        '滨州市': [118.03, 37.36],
        '潍坊市': [119.1, 36.62],
        '东营市': [118.49, 37.46],
        '青岛市': [120.3, 36.62],
        '烟台市': [120.9, 37.32],
        '威海市': [122.1, 37.2],
        '日照市': [119.1, 35.62],
        '济宁市': [116.7, 35.42],
    };
    var gdDatas = [
        [{
            name: '济南市',
            value: 10
        }],
        [{
            name: '菏泽市',
            value: 0
        }],
        [{
            name: '德州市',
            value: 0
        }],
        [{
            name: '聊城市',
            value: 0
        }],
        [{
            name: '泰安市',
            value: 1.3
        }],
        [{
            name: '临沂市',
            value: 0.2
        }],
        [{
            name: '淄博市',
            value: 0.4
        }],
        [{
            name: '枣庄市',
            value: 0.6
        }],
        [{
            name: '滨州市',
            value: 0.8
        }],
        [{
            name: '潍坊市',
            value: 0.4
        }],
        [{
            name: '东营市',
            value: 0.8
        }],
        [{
            name: '青岛市',
            value: 0.2
        }],
        [{
            name: '烟台市',
            value: 1.3
        }],
        [{
            name: '威海市',
            value: 0
        }],
        [{
            name: '日照市',
            value: 0
        }],
        [{
            name: '济宁市',
            value: 0
        }]
    ];

    var dongguandata = [{
        name: "中国铁路济南局集团有限公司济南供电段",
        value: [116.98, 36.67, 0.5],
    }]

    var foshandata = [{
        name: "菏泽供电公司万福供电所",
        value: [115.38, 35.28, 0.5],
    }]

    var guangzhoudata = [{
            name: "德州袁桥供电所",
            value: [116.40, 37.44, 0.5],
        },
        {
            name: "长官供电所",
            value: [116.92, 37.79, 1],
        },
        {
            name: "德州赵虎供电所",
            value: [116.49, 37.51, 1],
        },
        {
            name: "尚堂供电所",
            value: [117.41, 37.71, 0.1],
        },
        {
            name: "尹屯供电所",
            value: [116.57, 37.13, 0.4],
        }
    ]

    var zhongshandata = [{
        name: "聊城供电公司沙镇供电所",
        value: [115.80, 36.34, 0.5],
    }]

    var zhuhaidata = [{
            name: "泰安徂徕供电所",
            value: [117.28, 36.11, 0.5],
        },
        {
            name: "泰安道朗供电所",
            value: [116.92, 36.21, 1],
        },
        {
            name: "泰安崅峪供电所",
            value: [117.42, 36.18, 1],
        }
    ]

    var jiangmendata = [{
            name: "山东省临沂市蒙阴县野店供电所",
            value: [118.10, 35.88, 0.5],
        },
        {
            name: "山东省临沂市蒙阴县岱崮供电所",
            value: [118.17, 35.95, 1],
        },
        {
            name: "山东省临沂市兰山区城西供电所",
            value: [118.31, 35.10, 1],
        }
    ]

    var yangjiangdata = [{
            name: "金岭供电所",
            value: [118.23, 36.80, 0.5],
        },
        {
            name: "唐坊供电所",
            value: [118.00, 37.19, 1],
        },
        {
            name: "博山源泉供电所",
            value: [118.05, 36.43, 1],
        }
    ]

    var maomingdata = [{
            name: "枣庄供电公司",
            value: [117.32, 34.80, 0.5],
        },
        {
            name: "国家电网枣庄市中供电",
            value: [117.55, 34.87, 1],
        }
    ]

    var qingyuandata = [{
            name: "滨州无棣县供电公司",
            value: [117.61, 37.74, 0.5],
        },
        {
            name: "滨州沾化区供电公司",
            value: [118.12, 37.69, 1],
        }
    ]

    var zhanjiangdata = [{
            name: "潍坊开发区供电所",
            value: [119.41, 36.82, 0.5],
        },
        {
            name: "国网潍坊市寒亭区供电",
            value: [119.20, 36.77, 1],
        }
    ]

    var yunfudata = [{
            name: "东营市广北供电所",
            value: [118.68, 37.26, 0.5],
        },
        {
            name: "东营港供电",
            value: [118.92, 38.08, 1],
        }
    ]

    var zhaoqingdata = [{
            name: "国网青岛市黄岛区供电公司",
            value: [120.04, 35.87, 0.5],
        },
        {
            name: "国网山东省电力公司青岛市黄岛区供电公司",
            value: [120.04, 35.87, 1],
        }
    ]

    var shaoguandata = [{
            name: "国网烟台供电公司",
            value: [121.40, 37.54, 0.5],
        },
        {
            name: "烟台开发区供电公司",
            value: [121.26, 37.56, 1],
        }, {
            name: "国网烟台市福山区供电公司",
            value: [121.28, 37.51, 1],
        }
    ]

    var huizhoudata = [{
            name: "国网威海供电公司",
            value: [122.11, 37.51, 0.5],
        },
        {
            name: "威海乳山市供电公司",
            value: [121.52, 36.92, 1],
        }
    ]

    var shenzhendata = [{
            name: "日照岚山供电营业厅",
            value: [119.32, 35.12, 0.5],
        },
        {
            name: "国家电网日照城关供电营业厅",
            value: [119.44, 35.44, 1],
        }
    ]

    var heyuandata = [{
            name: "济宁嘉祥供电营业厅",
            value: [116.34, 35.41, 0.5],
        },
        {
            name: "济宁金乡供电营业厅",
            value: [116.30, 35.08, 1],
        }
    ]

    var opt = {
        bgColor: '#013954', // 画布背景色
        mapName: '山东', // 地图名
        goDown: true, // 是否下钻
        // 下钻回调
        callback: function(name, option, instance) {
            console.log(name, option, instance);
            if (name == '山东') {
                option.series[0].data = convertData(gdDatas);
                option.series[1].data = gdDatas.map(function(dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: gdGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                });
                myChart.setOption(option, true);
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "济南市") {
                option.series[0].data = convertData1(dongguandata);
                option.series[1].data = dongguandata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "菏泽市") {
                option.series[0].data = convertData1(foshandata);
                option.series[1].data = foshandata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "德州市") {
                option.series[0].data = convertData1(guangzhoudata);
                option.series[1].data = guangzhoudata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "聊城市") {
                option.series[0].data = convertData1(zhongshandata);
                option.series[1].data = zhongshandata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "泰安市") {
                option.series[0].data = convertData1(zhuhaidata);
                option.series[1].data = zhuhaidata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "临沂市") {
                option.series[0].data = convertData1(jiangmendata);
                option.series[1].data = jiangmendata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "淄博市") {
                option.series[0].data = convertData1(yangjiangdata);
                option.series[1].data = yangjiangdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "枣庄市") {
                option.series[0].data = convertData1(maomingdata);
                option.series[1].data = maomingdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "滨州市") {
                option.series[0].data = convertData1(qingyuandata);
                option.series[1].data = qingyuandata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "潍坊市") {
                option.series[0].data = convertData1(zhanjiangdata);
                option.series[1].data = zhanjiangdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "东营市") {
                option.series[0].data = convertData1(yunfudata);
                option.series[1].data = yunfudata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "青岛市") {
                option.series[0].data = convertData1(zhaoqingdata);
                option.series[1].data = zhaoqingdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "烟台市") {
                option.series[0].data = convertData1(shaoguandata);
                option.series[1].data = shaoguandata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "威海市") {
                option.series[0].data = convertData1(huizhoudata);
                option.series[1].data = huizhoudata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "日照市") {
                option.series[0].data = convertData1(shenzhendata);
                option.series[1].data = shenzhendata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "济宁市") {
                option.series[0].data = convertData1(heyuandata);
                option.series[1].data = heyuandata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            }
        },
        // 数据展示            	
        data: []
    };


    var levelColorMap = { // level颜色
        '1': '#f44336',
        '2': '#fc9700',
        '3': '#ffde00',
        '4': '#00eaff'
    };

    var defaultOpt = {
        mapName: 'china', // 地图展示
        goDown: false, // 是否下钻
        bgColor: '#013954', // 画布背景色
        activeArea: [], // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function(name, option, instance) {}
    };
    if (opt) {
        opt1 = $.extend(defaultOpt, opt);
    }

    // 层级索引
    var name = [opt1.mapName];
    var idx = 0;
    var pos = { //层级位置
        leftPlus: 55,
        leftCur: 50,
        left: 10,
        top: 10
    };

    var line = [ //箭头
        [0, 0],
        [8, 11],
        [0, 22]
    ];

    // style样式
    var style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: '#eee',
        lineColor: 'rgba(147, 235, 248, .8)'
    };


    var handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
         **/
        resetOption: function(i, o, n) {
            console.log(i)
            console.log(o)
            console.log(n)
            var breadcrumb = this.createBreadcrumb(n);

            var j = name.indexOf(n);
            var l = o.graphic.length;
            if (j < 0) {
                console.log('jinru1')
                o.graphic.push(breadcrumb);
                o.graphic[0].children[0].shape.x2 = 195;
                o.graphic[0].children[1].shape.x2 = 195;
                if (o.graphic.length > 2) {
                    for (var x = 0; x < opt1.data.length; x++) {
                        if (n === opt1.data[x].name + '市') {
                            o.series[0].data = handleEvents.initSeriesData(opt1.data[x].data);
                            break;
                        } else o.series[0].data = [];
                    }
                }
                name.push(n);
                idx++;
            } else {
                console.log('jinru2', j)
                o.graphic.splice(j + 2, l);
                if (o.graphic.length <= 2) {
                    o.graphic[0].children[0].shape.x2 = 85;
                    o.graphic[0].children[1].shape.x2 = 85;
                    o.series[0].data = handleEvents.initSeriesData(gdDatas);
                }
                name.splice(j + 1, l);
                idx = j;
                pos.leftCur -= pos.leftPlus * (l - j - 1);
            }

            o.geo.map = n;
            o.geo.zoom = 1;
            i.clear();
            i.setOption(o);
            this.zoomAnimation();
            opt1.callback(n, o, i);
        },

        /**
         * name 地图名
         **/
        createBreadcrumb: function(name) {
            var cityToPinyin = {
                "济南市": "jinan",
                "菏泽市": "heze",
                "德州市": "dezhou",
                "聊城市": "liaocheng",
                "泰安市": "taian",
                "临沂市": "linyi",
                "淄博市": "zibo",
                "枣庄市": "zaozhuang",
                "滨州市": "binzhou",
                "潍坊市": "yongfang",
                "东营市": "dongying",
                "青岛市": "qingdao",
                "烟台市": "yantai",
                "威海市": "weihai",
                "日照市": "rizhao",
                "济宁市": "jining"
            };
            var breadcrumb = {
                type: 'group',
                id: name,
                left: pos.leftCur + pos.leftPlus,
                top: pos.top + 3,
                children: [{
                    type: 'polyline',
                    left: -90,
                    top: -5,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: '#fff',
                        key: name,
                    },
                    onclick: function() {
                        var name = this.style.key;
                        handleEvents.resetOption(myChart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 'middle',
                    style: {
                        text: name,
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function() {
                        var name = this.style.text;
                        handleEvents.resetOption(myChart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 10,
                    style: {

                        name: name,
                        text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function() {
                        // console.log(this.style);
                        var name = this.style.name;
                        handleEvents.resetOption(myChart, option, name);
                    }
                }]
            }

            pos.leftCur += pos.leftPlus;

            return breadcrumb;
        },

        // 设置effectscatter
        initSeriesData: function(data) {
            console.log(data, '22222222222')
            var temp = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = gdGeoCoordMap[data[i].name];
                if (geoCoord) {
                    temp.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value, data[i].level)
                    });
                }
            }
            return temp;
        },

        zoomAnimation: function() {
            var count = null;
            var zoom = function(per) {
                if (!count) count = per;
                count = count + per;
                // console.log(per,count);
                myChart.setOption({
                    geo: {
                        zoom: count
                    }
                });
                if (count < 1) window.requestAnimationFrame(function() {
                    zoom(0.2);
                });
            };
            window.requestAnimationFrame(function() {
                zoom(0.2);
            });
        }
    };

    var convertData = function(data) {

        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var name = dataItem[0].name
            var fromCoord = gdGeoCoordMap[dataItem[0].name];
            //var toCoord = [113.307649675, 23.1200491021]; //被攻击点坐标
            var toCoord = [117.000923, 36.675807];
            if (fromCoord && toCoord) {
                res.push([{
                    name: name,
                    coord: fromCoord,
                    value: dataItem[0].value
                }, {
                    coord: toCoord,
                }]);
            }
        }
        return res;
    };

    var convertData1 = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var name = dataItem.name
            var fromCoord = data[0].value.slice(0, 2)
            var toCoord = dataItem.value.slice(0, 2)
            if (fromCoord && toCoord) {
                res.push([{
                    name: name,
                    coord: fromCoord,
                    value: dataItem.value[2],
                }, {
                    coord: toCoord,
                }]);
            }
        }
        return res;
    };

    var series = [];
    [
        ['济南市', gdDatas]
    ].forEach(function(item, i) {
        console.log(item)
        series.push({
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 3, //箭头指向速度，值越小速度越快
                    trailLength: 0.7, //特效尾迹长度[0,1]值越大，尾迹越长重
                    color: '#fff', //箭头图标
                    symbolSize: 3, //图标大小
                },
                lineStyle: {
                    normal: {
                        width: 0.1, //尾迹线条宽度
                        opacity: 0.2, //尾迹线条透明度
                        curveness: 0.3 //尾迹线条曲直度
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
                        show: false,
                        position: 'right', //显示位置
                        offset: [5, 0], //偏移设置
                        formatter: function(params) { //圆环显示文字
                            return params.data.name;
                        },
                        fontSize: 19
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: 'circle',
                symbolSize: function(val) {
                    return 10 + val[2] * 0; //圆环大小
                },
                itemStyle: {
                    normal: {
                        show: false,
                        color: '#f00'
                    }
                },
                data: item[1].map(function(dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: gdGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                }),
            },
            //被攻击点
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
                        show: false,
                        position: 'right',
                        //offset:[5, 0],
                        color: '#0f0',
                        formatter: '{b}',
                        textStyle: {
                            color: "#0f0"
                        }
                    },
                    emphasis: {
                        show: false,
                        color: "#f60"
                    }
                },
                // symbol: 'pin',
                // symbolSize: 50,
                // data: [{
                //     name: item[0],
                //     value: gdGeoCoordMap[item[0]].concat([10]),
                // }],
            }
        );
    });









    option = {
            "tooltip": {
                trigger: 'item',
                backgroundColor: 'rgba(0,0,0,0)',
                formatter: function(item) {
                    console.log(item, 'item!!!!')
                    if (item.componentSubType === 'lines') {
                        var tipHtml1 = '';
                        tipHtml1 = '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                            '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' + item.data.name + '</div>' +
                            '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                            '<span style="font-size:18px;font-weight:bold;">' + '总测试设备：' + item.data.value + ' ' + '</span>' +
                            '</div>' + '</div>';
                        return tipHtml1;
                    } else if (item.componentSubType === 'effectScatter') {
                        var tipHtml2 = '';
                        tipHtml2 = '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                            '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' + item.data.name + '</div>' +
                            '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                            '<span style="font-size:18px;font-weight:bold;">' + '总测试设备：' + item.data.value[2] + ' ' + '</span>' +
                            '</div>' + '</div>';
                        return tipHtml2;
                    } else if (item.componentSubType === 'scatter') {
                        var tipHtml3 = '';
                        tipHtml3 = '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                            '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' + item.data.name + '</div>' +
                            '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                            '<span style="font-size:18px;font-weight:bold;">' + '总测试设备：' + item.data.value[2] + ' ' + '</span>' +
                            '</div>' + '</div>';
                        return tipHtml3;
                    }
                }
            },
            backgroundColor: "#013954",
            "graphic": [{
                type: 'group',
                left: pos.left,
                top: pos.top - 4,
                children: [{
                    type: 'line',
                    left: 0,
                    top: -20,
                    shape: {
                        x1: 0,
                        y1: 0,
                        x2: 85,
                        y2: 0
                    },
                    style: {
                        stroke: style.lineColor,
                    }
                }, {
                    type: 'line',
                    left: 0,
                    top: 20,
                    shape: {
                        x1: 0,
                        y1: 0,
                        x2: 85,
                        y2: 0
                    },
                    style: {
                        stroke: style.lineColor,
                    }
                }]
            }, {
                id: name[idx],
                type: 'group',
                left: pos.left + 2,
                top: pos.top,
                children: [{
                    type: 'polyline',
                    left: 90,
                    top: -12,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: 'transparent',
                        key: name[0]
                    },
                    onclick: function() {
                        var name = this.style.key;
                        console.log(name, '111111')
                        handleEvents.resetOption(myChart, option, name);
                    }
                }, {
                    type: 'text',
                    left: 0,
                    top: 'middle',
                    style: {
                        text: name[0] === '山东' ? '山东省' : name[0],
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function() {
                        handleEvents.resetOption(myChart, option, '山东');
                    }
                }, {
                    type: 'text',
                    left: 0,
                    top: 10,
                    style: {
                        text: 'SHANDONG',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function() {
                        handleEvents.resetOption(myChart, option, '山东');
                    }
                }]
            }],
            visualMap: { //图例值控制
                min: 0,
                max: 1,
                calculable: true,
                show: false,
                color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
                textStyle: {
                    color: '#fff'
                }
            },
            "geo": {
                "map": "山东",
                "layoutCenter": ["55%", "50%"],
                "layoutSize": "109%",
                "label": {
                    "normal": {
                        "show": true,
                        "textStyle": {
                            "color": '#fff'
                        }
                    },
                    "emphasis": {
                        "textStyle": {
                            "color": '#fff'
                        }
                    }
                },
                "roam": true, //是否允许缩放
                "mapLocation": {
                    "width": "110%",
                    "height": "97%"
                },

                "itemStyle": {
                    "normal": {
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    "emphasis": {
                        itemStyle: {
                            areaColor: '#FFD181',
                            borderColor: '#404a59',
                            borderWidth: 1
                        }
                    }
                }
            },
            series: series
        },
        myChart.setOption(option);
    myChart.on('click', function(params) {
        console.log(params)
        var _self = this;
        if (cityMap[params.name]) {
            var url = cityMap[params.name];
            $.get(url, function(response) {
                //console.log(response, 'res');
                curGeoJson = response;
                echarts.registerMap(params.name, response);
                handleEvents.resetOption(_self, option, params.name);
            });
        }
    });
});