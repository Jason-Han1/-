var gujiaoshi = '/asset/get/s/data-1625208670498-SKRJclMQB.json';
var jiancaopingqu = '/asset/get/s/data-1625208708262-boKm1A6PD.json';
var jinyuanqu = '/asset/get/s/data-1625208718941-PoBtZhqxM.json';
var loufanxian = '/asset/get/s/data-1625208727346-JTXJHhHQz.json';
var qingxuxian = '/asset/get/s/data-1625208742104-xNQI5eRpO.json';
var taiyuanshi = '/asset/get/s/data-1625214372297-4TvnpZjw0.json';
var wanbolinqu = '/asset/get/s/data-1625208774016-t1TTxt8gA.json';
var xiaodianqu = '/asset/get/s/data-1625208783562-nfaMGou7A.json';
var xinghualingqu = '/asset/get/s/data-1625208789097-xflm8U4oL.json';
var yangquxian = '/asset/get/s/data-1625208795375-coGKLP5vv.json';
var yingzequ = '/asset/get/s/data-1625208800471-OnOQxGuBi.json';

echarts.extendsMap = function (id, opt) {
    // 实例
    var chart = this.init(document.getElementById(id));

    var curGeoJson = {};
    var cityMap = {
        //"太原市": taiyuanshi,
        "古交市": gujiaoshi,
        "尖草坪区": jiancaopingqu,
        "晋源区": jinyuanqu,
        "娄烦县": loufanxian,
        "清徐县": qingxuxian,
        "万柏林区": wanbolinqu,
        "小店区": xiaodianqu,
        "杏花岭区": xinghualingqu,
        "阳曲县": yangquxian,
        "迎泽区": yingzequ,
    };
    var geoCoordMap = {
        '杏花岭区':[112.6442,37.9228],
        '尖草坪区':[112.4959,37.9810],
        '万柏林区':[112.4004,37.8689],
        '晋源区':[112.4355,37.7349],
        '清徐县':[112.4176,37.5337],
        '阳曲县':[112.6717,38.1389],
        '娄烦县':[111.7937,38.0660],
        '古交市':[112.174353,37.908534],
        '小店区':[112.564273,37.817974],
        '迎泽区':[112.6895,37.8662]
    };
    var levelColorMap = {
        1: 'rgba(241, 109, 115, .8)',
        2: 'rgba(255, 235, 59, .7)',
        3: 'rgba(147, 235, 248, 1)',
    };

    var defaultOpt = {
        mapName: 'china', // 地图展示
        goDown: false, // 是否下钻
        bgColor: '#404a59', // 画布背景色
        activeArea: [], // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function (name, option, instance) {},
    };
    if (opt) opt = this.util.extend(defaultOpt, opt);

    // 层级索引
    var name = [opt.mapName];
    var idx = 0;
    var pos = {
        leftPlus: 115,
        leftCur: 150,
        left: 198,
        top: 50,
    };

    var line = [
        [0, 0],
        [8, 11],
        [0, 22],
    ];
    // style
    var style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: '#eee',
        lineColor: 'rgba(147, 235, 248, .8)',
    };

    var handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
         **/
        resetOption: function (i, o, n) {
            var breadcrumb = this.createBreadcrumb(n);

            var j = name.indexOf(n);
            var l = o.graphic.length;
            if (j < 0) {
                o.graphic.push(breadcrumb);
                o.graphic[0].children[0].shape.x2 = 145;
                o.graphic[0].children[1].shape.x2 = 145;
                if (o.graphic.length > 2) {
                    for (var x = 0; x < opt.data.length; x++) {
                        if (n === opt.data[x].name + '市') {
                            o.series[0].data = handleEvents.initSeriesData([opt.data[x]]);
                            break;
                        } else o.series[0].data = [];
                    }
                }
                name.push(n);
                idx++;
            } else {
                o.graphic.splice(j + 2, l);
                if (o.graphic.length <= 2) {
                    o.graphic[0].children[0].shape.x2 = 60;
                    o.graphic[0].children[1].shape.x2 = 60;
                    o.series[0].data = handleEvents.initSeriesData(opt.data);
                }
                name.splice(j + 1, l);
                idx = j;
                pos.leftCur -= pos.leftPlus * (l - j - 1);
            }

            o.geo.map = n;
            o.geo.zoom = 0.4;
            i.clear();
            i.setOption(o);
            this.zoomAnimation();
            opt.callback(n, o, i);
        },

        /**
         * name 地图名
         **/
        createBreadcrumb: function (name) {
            var cityToPinyin = {
                "古交市": "gujiaoshi",
                "尖草坪区": "jiancaopingqu",
                "晋源区": "jinyuanqu",
                "娄烦县": "loufanxian",
                "清徐县": "qingxuxian",
                "万柏林区": "wanbolinqu",
                "小店区": "xiaodianqu",
                "杏花岭区": "xinghualingqu",
                "阳曲县": "yangquxian",
                "迎泽区": "yingzequ"
            };
            var breadcrumb = {
                type: 'group',
                id: name,
                left: pos.leftCur + pos.leftPlus,
                top: pos.top + 3,
                children: [
                    {
                        type: 'polyline',
                        left: -90,
                        top: -5,
                        shape: {
                            points: line,
                        },
                        style: {
                            stroke: '#fff',
                            key: name,
                            // lineWidth: 2,
                        },
                        onclick: function () {
                            var name = this.style.key;
                            handleEvents.resetOption(chart, option, name);
                        },
                    },
                    {
                        type: 'text',
                        left: -68,
                        top: 'middle',
                        style: {
                            text: name,
                            textAlign: 'center',
                            fill: style.textColor,
                            font: style.font,
                        },
                        onclick: function () {
                            var name = this.style.text;
                            handleEvents.resetOption(chart, option, name);
                        },
                    },
                    {
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
                        onclick: function () {
                            // console.log(this.style);
                            var name = this.style.name;
                            handleEvents.resetOption(chart, option, name);
                        },
                    },
                ],
            };

            pos.leftCur += pos.leftPlus;

            return breadcrumb;
        },

        // 设置effectscatter
        initSeriesData: function (data) {
            var temp = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    temp.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value, data[i].level),
                    });
                }
            }
            return temp;
        },

        zoomAnimation: function () {
            var count = null;
            var zoom = function (per) {
                if (!count) count = per;
                count = count + per;
                // console.log(per,count);
                chart.setOption({
                    geo: {
                        zoom: count,
                    },
                });
                if (count < 1)
                    window.requestAnimationFrame(function () {
                        zoom(0.2);
                    });
            };
            window.requestAnimationFrame(function () {
                zoom(0.2);
            });
        },
    };

    var option = {
        backgroundColor: opt.bgColor,
        graphic: [
            {
                type: 'group',
                left: pos.left,
                top: pos.top - 4,
                children: [
                    {
                        type: 'line',
                        left: 0,
                        top: -20,
                        shape: {
                            x1: 0,
                            y1: 0,
                            x2: 60,
                            y2: 0,
                        },
                        style: {
                            stroke: style.lineColor,
                        },
                    },
                    {
                        type: 'line',
                        left: 0,
                        top: 20,
                        shape: {
                            x1: 0,
                            y1: 0,
                            x2: 60,
                            y2: 0,
                        },
                        style: {
                            stroke: style.lineColor,
                        },
                    },
                ],
            },
            {
                id: name[idx],
                type: 'group',
                left: pos.left + 2,
                top: pos.top,
                children: [
                    {
                        type: 'polyline',
                        left: 90,
                        top: -12,
                        shape: {
                            points: line,
                        },
                        style: {
                            stroke: 'transparent',
                            key: name[0],
                        },
                        onclick: function () {
                            var name = this.style.key;
                            handleEvents.resetOption(chart, option, name);
                        },
                    },
                    {
                        type: 'text',
                        left: 0,
                        top: 'middle',
                        style: {
                            text: name[0] === '太原' ? '太原市' : name[0],
                            textAlign: 'center',
                            fill: style.textColor,
                            font: style.font,
                        },
                        onclick: function () {
                            handleEvents.resetOption(chart, option, '太原');
                        },
                    },
                    {
                        type: 'text',
                        left: 0,
                        top: 10,
                        style: {
                            text: 'TAIYUAN',
                            textAlign: 'center',
                            fill: style.textColor,
                            font: '12px "Microsoft YaHei", sans-serif',
                        },
                        onclick: function () {
                            handleEvents.resetOption(chart, option, '太原');
                        },
                    },
                ],
            },
        ],
        geo: {
            map: opt.mapName,
            // roam: true,
            zoom: 1,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#fff',
                    },
                },
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10,
                },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0,
                },
            },
            regions: opt.activeArea.map(function (item) {
                if (typeof item !== 'string') {
                    return {
                        name: item.name,
                        itemStyle: {
                            normal: {
                                areaColor: item.areaColor || '#389BB7',
                            },
                        },
                        label: {
                            normal: {
                                show: item.showLabel,
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                        },
                    };
                } else {
                    return {
                        name: item,
                        itemStyle: {
                            normal: {
                                borderColor: '#91e6ff',
                                areaColor: '#389BB7',
                            },
                        },
                    };
                }
            }),
        },
        series: [
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                // symbol: 'diamond',
                showEffectOn: 'render',
                rippleEffect: {
                    period: 15,
                    scale: 6,
                    brushType: 'fill',
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return levelColorMap[params.value[3]];
                        },
                        shadowBlur: 10,
                        shadowColor: '#333',
                    },
                },
                data: handleEvents.initSeriesData(opt.data),
            },
        ],
    };

    chart.setOption(option);
    // 添加事件
    chart.on('click', function (params) {
        var _self = this;
        if (opt.goDown && params.name !== name[idx]) {
            if (cityMap[params.name]) {
                var url = cityMap[params.name];
                $.get(url, function (response) {
                    // console.log(response);
                    curGeoJson = response;
                    echarts.registerMap(params.name, response);
                    handleEvents.resetOption(_self, option, params.name);
                });
            }
        }
    });

    chart.setMap = function (mapName) {
        var _self = this;
        if (mapName.indexOf('市') < 0) mapName = mapName + '市';
        var citySource = cityMap[mapName];
        if (citySource) {
            var url = './map/' + citySource + '.json';
            $.get(url, function (response) {
                // console.log(response);
                curGeoJson = response;
                echarts.registerMap(mapName, response);
                handleEvents.resetOption(_self, option, mapName);
            });
        }
        // handleEvents.resetOption(this, option, mapName);
    };

    return chart;
};

$.getJSON(taiyuanshi, function (geoJson) {
    echarts.registerMap('太原', geoJson);
    var myChart = echarts.extendsMap('chart-panel', {
        bgColor: '#154e90', // 画布背景色
        mapName: '太原', // 地图名
        goDown: true, // 是否下钻
        // 下钻回调
        callback: function (name, option, instance) {
            console.log(name, option, instance);
        },
        // 数据展示
        data: [
            {
                name: '古交市',
                value: 10,
                level: 1,
            },
            {
                name: '阳曲县',
                value: 12,
                level: 2,
            },
            {
                name: '万柏林区',
                value: 11,
                level: 3,
            },
            {
                name: '晋源区',
                value: 16,
                level: 2,
            },
            {
                name: '娄烦县',
                value: 12,
                level: 1,
            },
        ],
    });
});
