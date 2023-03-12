// 主要还是要感谢“K...雪”大佬的技术支持，要是没有该大佬
// 也就没有现在这个湖南省的echarts地图，有需要可以去观摩
// https://www.makeapie.com/editor.html?c=x4PnHcyVb5
// 上面是大佬的原生代码，拿来就可以使用


// 湖南省
var uploadedDataURL = "https://geo.datav.aliyun.com/areas_v2/bound/430000_full.json";
// 长沙市
var changsha = "https://geo.datav.aliyun.com/areas_v2/bound/430100_full.json";
// 株洲市
var zhuzhou = "https://geo.datav.aliyun.com/areas_v2/bound/430200_full.json";
// 湘潭市
var xiangtan = "https://geo.datav.aliyun.com/areas_v2/bound/430300_full.json";
// 常德市
var changde = "https://geo.datav.aliyun.com/areas_v2/bound/430700_full.json";
// 郴州市
var chenzhou = "https://geo.datav.aliyun.com/areas_v2/bound/431000_full.json";
// 衡阳市
var henyang = "https://geo.datav.aliyun.com/areas_v2/bound/430400_full.json";
// 怀化市
var huaihua = "https://geo.datav.aliyun.com/areas_v2/bound/431200_full.json";
// 娄底市
var loudi = "https://geo.datav.aliyun.com/areas_v2/bound/431300_full.json";
// 邵阳市
var shaoyang = "https://geo.datav.aliyun.com/areas_v2/bound/430500_full.json";
// 益阳市
var yiyang = "https://geo.datav.aliyun.com/areas_v2/bound/430900_full.json";
// 永州市
var yongzhou = "https://geo.datav.aliyun.com/areas_v2/bound/431100_full.json";
// 岳阳市
var yueyang = "https://geo.datav.aliyun.com/areas_v2/bound/430600_full.json";
// 张家界市
var zhangjiajie = "https://geo.datav.aliyun.com/areas_v2/bound/430800_full.json";
// 湘西土家族苗族自治州
var xiangxi = "https://geo.datav.aliyun.com/areas_v2/bound/433100_full.json";

// 对json数据进行处理
$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('湖南', geoJson);

    // 各市级
    var cityMap = {
        '长沙市': changsha,
        '株洲市': zhuzhou,
        '湘潭市': xiangtan,
        '常德市': changde,
        '郴州市': chenzhou,
        '衡阳市': henyang,
        '怀化市': huaihua,
        '娄底市': loudi,
        '邵阳市': shaoyang,
        '益阳市': yiyang,
        '永州市': yongzhou,
        '岳阳市': yueyang,
        '张家界市': zhangjiajie,
        '湘西土家族苗族自治州': xiangxi
    };

    // 各市级坐标，通过 http://api.map.baidu.com/lbsapi/getpoint/index.html?qq-pf-to=pcqq.group 去获取
    var gdGeoCoordMap = {
        '长沙市': [112.945358,28.234451],
        '株洲市': [113.142199,27.830501],
        '湘潭市': [112.952189,27.835703],
        '常德市': [111.706024,29.037245],
        '郴州市': [113.022608,25.777204],
        '衡阳市': [112.584198,26.900606],
        '怀化市': [110.010239,27.575161],
        '娄底市': [112.000353,27.705255],
        '邵阳市': [111.476157,27.243729],
        '益阳市': [112.367266,28.559712],
        '永州市': [111.621754,26.426899],
        '岳阳市': [113.135488,29.364184],
        '张家界市': [110.488982,29.122817],
        '湘西土家族苗族自治州': [109.74443,28.322965]
    };
    
    // 各市级站点数据
    var gdDatas = [
        [{
            name: '长沙市',
            value: 28
        }],
        [{
            name: '株洲市',
            value: 19
        }],
        [{
            name: '湘潭市',
            value: 6
        }],
        [{
            name: '常德市',
            value: 0
        }],
        [{
            name: '郴州市',
            value: 0
        }],
        [{
            name: '衡阳市',
            value: 0
        }],
        [{
            name: '怀化市',
            value: 0
        }],
        [{
            name: '娄底市',
            value: 0
        }],
        [{
            name: '邵阳市',
            value: 0
        }],
        [{
            name: '益阳市',
            value: 0
        }],
        [{
            name: '永州市',
            value: 0
        }],
        [{
            name: '岳阳市',
            value: 0
        }],
        [{
            name: '张家界市',
            value: 0
        }],
        [{
            name: '湘西土家族苗族自治州',
            value: 0
        }]
    ];

    // 长沙市站点数据
    var changshadata = [{
            name: "桔子洲",
            value: [112.970259,28.209371, 3],
        },
        {
            name: "五一大桥",
            value: [112.974812,28.201219, 2],
        },
        {
            name: "猴子石",
            value: [112.966892,28.147666, 1],
        }
    ];

    // 株洲市站点数据
    var zhuzhoudata = [{
            name: "株洲市四水厂(枫溪)",
            value: [113.795, 26.6315, 3],
        },
        {
            name: "株洲市一水厂",
            value: [113.521, 27.1174, 2],
        },
        {
            name: "株洲市二、三水厂(白石)",
            value: [113.755, 26.8041, 1],
        },
        {
            name: "炎陵泵房",
            value: [113.843, 26.3766, 0],
        }
    ];

    // 湘潭市站点数据
    var xiangtandata = [{
            name: "湘潭市三水厂",
            value: [112.892, 27.4549, 3],
        },
        {
            name: "湘潭市易俗河水厂",
            value: [112.956, 27.7689, 2],
        },
        {
            name: "涓水入湘江口",
            value: [112.782, 27.662, 0],
        }
    ];

    // 常德市站点数据
    var changdedata = [{
        name: "武陵大桥",
        value: [111.705018,29.023562, 1],
    }];

    // 郴州市站点数据
    var chenzhoudata = [{
            name: "东江",
            value: [113.183872,25.916113, 1],
        }
    ];

    // 衡阳市站点数据
    var henyangdata = [{
            name: "蒸水湘江入水口",
            value: [112.620562,26.917616, 1],
        }
    ];

    // 怀化市站点数据
    var huaihuadata = [{
            name: "舞水大桥",
            value: [109.962382,27.552532, 1],
        }
    ];

    // 娄底市站点数据
    var loudidata = [{
            name: "涟水入水口",
            value: [112.0752,27.741965, 1],
        }
    ];

    // 邵阳市站点数据
    var shaoyangdata = [{
            name: "资水",
            value: [111.497429,27.266338, 1],
        }
    ];

    // 益阳市站点数据
    var yiyangdata = [{
            name: "益阳资江二桥口",
            value: [112.381531,28.604063, 1],
        }
    ];

    // 永州市站点数据
    var yongzhoudata = [{
            name: "祁阳市湘江二桥口",
            value: [111.84403,26.572493, 1],
        }
    ];

    // 岳阳市站点数据
    var yueyangdata = [{
            name: "东洞庭湖",
            value: [113.048676,29.301209, 1],
        }
    ];

    // 张家界市站点数据
    var zhangjiajiedata = [{
            name: "张家界市大庸桥口",
            value: [110.466753,29.134629, 1],
        }
    ];

    // 湘西土家族苗族自治州
    var xiangxidata = [{
            name: "沅江武水入水口",
            value: [110.175293,28.279329, 1],
        }
    ];

    var opt = {
        bgColor: '#013954', // 画布背景色
        mapName: '湖南', // 地图名
        goDown: true, // 是否下钻
        // 下钻回调
        callback: function(name, option, instance) {
            console.log(name, option, instance);
            if (name == '湖南') {
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
            } else if (name == "长沙市") {
                option.series[0].data = convertData1(changshadata);
                option.series[1].data = changshadata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "株洲市") {
                option.series[0].data = convertData1(zhuzhoudata);
                option.series[1].data = zhuzhoudata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "湘潭市") {
                option.series[0].data = convertData1(xiangtandata);
                option.series[1].data = xiangtandata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "常德市") {
                option.series[0].data = convertData1(changdedata);
                option.series[1].data = changdedata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "郴州市") {
                option.series[0].data = convertData1(chenzhoudata);
                option.series[1].data = chenzhoudata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "衡阳市") {
                option.series[0].data = convertData1(henyangdata);
                option.series[1].data = henyangdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "怀化市") {
                option.series[0].data = convertData1(huaihuadata);
                option.series[1].data = huaihuadata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "娄底市") {
                option.series[0].data = convertData1(loudidata);
                option.series[1].data = loudidata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "邵阳市") {
                option.series[0].data = convertData1(shaoyangdata);
                option.series[1].data = shaoyangdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "益阳市") {
                option.series[0].data = convertData1(yiyangdata);
                option.series[1].data = yiyangdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "永州市") {
                option.series[0].data = convertData1(yongzhoudata);
                option.series[1].data = yongzhoudata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "岳阳市") {
                option.series[0].data = convertData1(yueyangdata);
                option.series[1].data = yueyangdata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "张家界市") {
                option.series[0].data = convertData1(zhangjiajiedata);
                option.series[1].data = zhangjiajiedata;
                myChart.setOption(option, true); // 赋值后初始化
                setTimeout(() => { // 定时后启动飞线
                    myChart.setOption(option, true);
                }, 500)
            } else if (name == "湘西土家族苗族自治州") {
                option.series[0].data = convertData1(xiangxidata);
                option.series[1].data = xiangxidata;
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
        // bgColor: '#013954', // 画布背景色
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
                "长沙市": "changsha",
                "株洲市": "zhuzhou",
                "湘潭市": "xiangtan",
                "常德市": "changde",
                "郴州市": "chenzhou",
                "衡阳市": "henyang",
                "怀化市": "huaihua",
                "娄底市": "loudi",
                "邵阳市": "shaoyang",
                "益阳市": "yiyang",
                "永州市": "yongzhou",
                "岳阳市": "yueyang",
                "张家界市": "zhangjiajie",
                "湘西土家族苗族自治州": "xiangxi"
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
            //被攻击点坐标
            var toCoord = [112.945358,28.234451];
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
        ['长沙市', gdDatas]
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

    var option = {
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
                        text: name[0] === '湖南' ? '湖南省' : name[0],
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function() {
                        handleEvents.resetOption(myChart, option, '湖南');
                    }
                }, {
                    type: 'text',
                    left: 0,
                    top: 10,
                    style: {
                        text: 'HUNAN',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function() {
                        handleEvents.resetOption(myChart, option, '湖南');
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
                "map": "湖南",
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
        };
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
