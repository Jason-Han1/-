
//模仿的浙江下钻地图  自用备份 小白多多关照
// json下载地址：https://datav.aliyun.com/tools/atlas

// 省
var zhejiang = "/asset/get/s/data-1588901828820-ymVHvaRtU.json";
// 市
var hangzhou = "/asset/get/s/data-1589003571047-8Xg37jcwv.json";
var zhoushan = "/asset/get/s/data-1589003566916-ohp8QsNF9.json";
var jiaxin = "/asset/get/s/data-1589003552334-5OQ_uGIPs.json";
var ningbo = "/asset/get/s/data-1589003540474-BkDTACUUL.json";
var taizhou = "/asset/get/s/data-1589003536896-6DDlyRZab.json";
var wenzhou = "/asset/get/s/data-1589003533265-AkeJlc9Ps.json";
var lishui = "/asset/get/s/data-1589003526529-SQeTLEaOJ.json";
var huzhou = "/asset/get/s/data-1589003522912-OrPXCa6ye.json";
var quzhou = "/asset/get/s/data-1589003519348-WpDW6vYTD.json";
var jinhua = "/asset/get/s/data-1589003512597-pX-ocI1Wr.json";
var shaoxing = "/asset/get/s/data-1589003496398-Qbj2FVpud.json";

// 杭州市各区
var yuhang = "/asset/get/s/data-1589002810673-aR1YzRH61.json";
var xihu = "/asset/get/s/data-1589002855913-aEdHbUtV1.json";
var shangcheng = "/asset/get/s/data-1589002846878-tS3MyeChU.json";
var xiacheng = "/asset/get/s/data-1589002861672-GBErE4ZQK.json";
var binjiang = "/asset/get/s/data-1589002818402-wXtY_arX7.json";
var tonglu = "/asset/get/s/data-1589002851190-IGhlcvixI.json";
var fuyang = "/asset/get/s/data-1589002828168-4oGOJElFc.json";
var jiande = "/asset/get/s/data-1589002832817-Lx7Zqmlzg.json";
var xiaoshan = "/asset/get/s/data-1616576317566-dNbbL-2Um.json";
var gongshu = "/asset/get/s/data-1589002980875-rbR_QPOcH.json";
var linan = "/asset/get/s/data-1589002842369-20yopBJgF.json";
var jianggan = "/asset/get/s/data-1589002837571-4zlnwvYh0.json";
var chunan = "/asset/get/s/data-1589002822195-Zm_Tq0ACJ.json";

// 区域分块
var zhuchengqu = "/asset/get/s/data-1588930596592-U3Cbn2KuL.json";


// 模拟点数据——数据点位无实际意义 仅供参考
var mapArr = {
    浙江省: [{
            name: "杭州",
            value: [120.210896, 30.246036, 1],
        },
        {
            name: "湖州",
            value: [120.086881, 30.894178, 0],
        },
        {
            name: "嘉兴",
            value: [120.755623, 30.746814, 0],
        },
        {
            name: "绍兴",
            value: [120.583305, 30.051136, 0],
        },
        {
            name: "宁波",
            value: [121.62454, 29.860258, 0],
        },
        {
            name: "舟山",
            value: [122.207395, 29.985578, 0],
        },
        {
            name: "衢州",
            value: [118.859307, 28.970229, 0],
        },
        {
            name: "金华",
            value: [119.647265, 29.079195, 0],
        },
        {
            name: "台州",
            value: [121.42079, 28.655716, 0],
        },
        {
            name: "丽水",
            value: [119.923249, 28.467694, 0],
        },
        {
            name: "温州",
            value: [120.699279, 27.993849, 0],
        },
    ],
    杭州市: [{
            name: "余杭区",
            value: [120.3060892965, 30.4244838332, 1],
        },
        {
            name: "西湖区",
            value: [120.1371565592, 30.2651970958, 0],
        },
        {
            name: "拱墅区",
            value: [120.1484873743, 30.324906244, 0],
        },
        {
            name: "上城区",
            value: [120.2040848844, 30.2328603996, 0],
        },
        {
            name: "下城区",
            value: [120.1876141702, 30.28673585, 0],
        },
        {
            name: "江干区",
            value: [120.2114310483, 30.2628716672, 0],
        },
        {
            name: "滨江区",
            value: [120.2184566077, 30.2143928485, 0],
        },
        {
            name: "萧山区",
            value: [120.2708053894, 30.1895246409, 0],
        },
        {
            name: "临安区",
            value: [119.7313212674, 30.239743139, 0],
        },
        {
            name: "富阳区",
            value: [119.9671985789, 30.0539026103, 0],
        },
        {
            name: "桐庐区",
            value: [119.6981058619, 29.7988325149, 0],
        },
        {
            name: "建德区",
            value: [119.287548962, 29.4813766767, 0],
        },
        {
            name: "淳安区",
            value: [119.0484695874, 29.6152091789, 0],
        },
    ],
    上城区: [{
            name: "33011003",
            value: [120.18915669224, 30.237287162543, 0],
        },
        {
            name: "33015057",
            value: [120.19922034051, 30.235133348706, 0],
        },
    ],
    下城区: [{
            name: "33010127",
            value: [120.1671967765, 30.266743852496, 0],
        },
        {
            name: "33019028",
            value: [120.19384385251, 30.342224566937, 0],
        },
    ],
    江干区: [{
            name: "33010164",
            value: [120.197120989581, 30.2722505771474, 0],
        },

        {
            name: "33015265",
            value: [120.26602565373, 30.3175431482886, 0],
        },
    ],
    拱墅区: [{
            name: "33010487",
            value: [120.151508870388, 30.2850301964867, 0],
        },
        {
            name: "33014148",
            value: [120.173834955998, 30.3708542283502, 0],
        },
        {
            name: "33010164",
            value: [120.197120989581, 30.2722505771474, 0],
        },

        {
            name: "33015265",
            value: [120.26602565373, 30.3175431482886, 0],
        },
    ],
    西湖区: [{
            name: "33010216",
            value: [120.14096678401, 30.273505030871, 0],
        },
        {
            name: "33014161",
            value: [120.10112323964, 30.29794196665, 0],
        },
        {
            name: "33011003",
            value: [120.18915669224, 30.237287162543, 0],
        },
        {
            name: "33015057",
            value: [120.19922034051, 30.235133348706, 0],
        },
    ],
    滨江区: [{
            name: "33011065",
            value: [120.2151700964, 30.199560551644, 0],
        },
        {
            name: "33019249",
            value: [120.13585717584, 30.16852739334, 0],
        },
    ],
    萧山区: [{
            name: "33017388",
            value: [120.24728418493, 30.180294169914, 0],
        },
        {
            name: "33015378",
            value: [119.033746561182, 29.6055595157275, 0],
        },
    ],
    余杭区: [{
            name: "33015501",
            value: [120.29494435694, 30.412715702058, 0],
        },
        {
            name: "33014521",
            value: [120.29659123326, 30.501453905111, 0],
        },
    ],
    富阳区: [{
            name: "33011406",
            value: [119.94520844126, 30.053833453656, 0],
        },
        {
            name: "33015403",
            value: [119.66472313905, 29.985457240343, 0],
        },
    ],
    淳安县: [{
            name: "33011922",
            value: [119.043620031871, 29.6058306092139, 0],
        },
        {
            name: "33019919",
            value: [119.046607704754, 29.6038488141601, 0],
        },
    ],
    临安区: [{
            name: "33011601",
            value: [119.70560939215, 30.229842691419, 0],
        },
        {
            name: "33019608",
            value: [119.7051829209, 30.231791316266, 0],
        },
    ],
    主城区: [{
            name: "33010216",
            value: [120.14096678401, 30.273505030871, 0],
        },
        {
            name: "33014161",
            value: [120.10112323964, 30.29794196665, 0],
        },
        {
            name: "33011003",
            value: [120.18915669224, 30.237287162543, 0],
        },
        {
            name: "33015057",
            value: [120.19922034051, 30.235133348706, 0],
        },
        {
            name: "33010127",
            value: [120.1671967765, 30.266743852496, 0],
        },
        {
            name: "33019028",
            value: [120.19384385251, 30.342224566937, 0],
        },
        {
            name: "33010487",
            value: [120.151508870388, 30.2850301964867, 0],
        },
        {
            name: "33014148",
            value: [120.173834955998, 30.3708542283502, 0],
        },
        {
            name: "33010164",
            value: [120.197120989581, 30.2722505771474, 0],
        },

        {
            name: "33015265",
            value: [120.26602565373, 30.3175431482886, 0],
        },
    ],
};

// 鼠标悬浮显示元素
$(`<div id="hoverBox" style="width: 200px;height: 80px;background-color: pink;position:absolute;z-index: 999;border-radius: 5px;display:none;justify-content: center;align-items: center;">自定义内容</div>`).appendTo(
    $('#chart-panel')
);

// 模拟动态修改点级别
// 修改浙江-杭州/湖州/嘉兴
let arrZj = mapArr['浙江省'];
arrZj.forEach(function(item, index, arrZj) {
    arrZj[0].value[2] = 2;
    arrZj[1].value[2] = 3;
    arrZj[2].value[2] = 3;
})
//修改杭州-余杭区/拱墅区/西湖区
let arrHz = mapArr['杭州市'];
arrHz.forEach(function(item, index, arrHz) {
    arrHz[0].value[2] = 2;
    arrHz[1].value[2] = 3;
    arrHz[2].value[2] = 2;
})

echarts.extendsMap = function(id, opt) {
    // 实例
    var chart = this.init(document.getElementById(id));

    var curGeoJson = {};
    var cityMap = {
        '杭州市': hangzhou,
        '舟山市': zhoushan,
        '嘉兴市': jiaxin,
        '宁波市': ningbo,
        '台州市': taizhou,
        '温州市': wenzhou,
        '丽水市': lishui,
        '湖州市': huzhou,
        '衢州市': quzhou,
        '金华市': jinhua,
        '绍兴市': shaoxing
    };

    var quyMap = {
        '余杭区': yuhang,
        '西湖区': zhuchengqu,
        '上城区': zhuchengqu,
        '下城区': zhuchengqu,
        '滨江区': binjiang,
        '桐庐县': tonglu,
        '富阳区': fuyang,
        '建德市': jiande,
        '萧山区': xiaoshan,
        '拱墅区': zhuchengqu,
        '临安区': linan,
        '江干区': zhuchengqu,
        '淳安县': chunan,

    };
    var geoCoordMap = {
        '余杭': [120.3060892965, 30.4244838332],
        '西湖': [120.1371565592, 30.2651970958],
        '拱墅': [120.1484873743, 30.324906244],
        '上城': [120.2040848844, 30.2328603996],
        '下城': [120.1876141702, 30.28673585],
        '江干': [120.2114310483, 30.2628716672],
        '滨江': [120.2184566077, 30.2143928485],
        '萧山': [120.2708053894, 30.1895246409],
        '临安': [119.7313212674, 30.239743139],
        '富阳': [119.9671985789, 30.0539026103],
        '桐庐': [119.6981058619, 29.7988325149],
        '建德': [119.287548962, 29.4813766767],
        '淳安': [119.0484695874, 29.6152091789],
    };
    var levelColorMap = {
        "0": "#fff",
        "1": "#26cff3",
        "2": "#f0fb30",
        "3": "#d11864",
    };


    var defaultOpt = {
        mapName: "zhejiang", // 地图展示
        goDown: false, // 是否下钻
        activeArea: [], // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function(name, option, instance) {},
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
        [8, 8],
        [0, 16],
    ];
    // style
    var style = {
        font: '14px "Microsoft YaHei", sans-serif',
        textColor: "#0ab7ff",
        lineColor: "rgba(147, 235, 248, 0.5)",
    };

    var handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
         **/
        resetOption: function(i, o, n) {
            console.log("看我一下呗")

            var breadcrumb = this.createBreadcrumb(n);


            var j = name.indexOf(n);
            console.log(i);
            console.log(o);
            console.log("这是n" + n);
            console.log(j);
            var l = o.graphic.length;
            if (j < 0) {
                o.graphic.push(breadcrumb);
                o.graphic[0].children[0].shape.x2 = 140;
                o.graphic[0].children[1].shape.x2 = 140;
                //     o.series[0].data = [];
                if (n === "杭州市") {
                    o.series[0].data = arrHz;

                }
                // else o.series[0].data = [];

                //   if(o.graphic.length > 2){
                //         for(var x = 0; x < opt.data.length; x++){
                //             console.log(opt.data[0])
                //             if(n === opt.data[x].name + '市'){
                //                 o.series[0].data =handleEvents.initSeriesData([mapArr["杭州市"]])
                //                 break;
                //             }
                //             else o.series[0].data = [];
                //         }
                //     };

                name.push(n)
                idx++;
            } else {
                o.graphic.splice(j + 2, l);
                if (o.graphic.length <= 2) {
                    o.graphic[0].children[0].shape.x2 = 50;
                    o.graphic[0].children[1].shape.x2 = 50;
                    o.series[0].data = arrZj;
                    //  o.series[0].data = handleEvents.initSeriesData(opt.data);
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
        createBreadcrumb: function(name) {
            var cityToPinyin = {
                杭州市: "hangzhou",
                舟山市: "zhoushan",
                嘉兴市: "jiaxing",
                温州市: "wenzhou",
                衢州市: "quzhou",
                丽水市: "lishui",
                金华市: "jinhua",
                台州市: "taizhou",
                宁波市: "ningbo",
                绍兴市: "shaoxing",
                湖州市: "huzhou",
            };

            // 固定杭州市 下钻区县 标题显示为杭州市
            var nameText = "";
            if (
                name == "临安区" ||
                name == "余杭区" ||
                name == "上城区" ||
                name == "下城区" ||
                name == "江干区" ||
                name == "滨江区" ||
                name == "西湖区" ||
                name == "拱墅区" ||
                name == "萧山区" ||
                name == "桐庐县" ||
                name == "建德市" ||
                name == "富阳区" ||
                name == "淳安县"
            ) {
                nameText = "杭州市";
            } else {
                nameText = name;
            }

            var breadcrumb = {
                //标题市级样式
                type: "group",
                id: name,
                left: 80,
                top: 30,
                children: [{
                        type: "polyline",
                        left: -90,
                        top: 0,
                        shape: {
                            points: line,
                        },
                        style: {
                            stroke: "#0ab7ff",
                            key: name,

                            // lineWidth: 2,
                        },
                        onclick: function() {
                            var name = this.style.key;

                            handleEvents.resetOption(chart, option, name);
                        },
                    },
                    {
                        type: "text",
                        left: -68,
                        top: 0,
                        style: {
                            text: nameText,
                            textAlign: "center",
                            fill: style.textColor,
                            font: '12px "Microsoft YaHei", sans-serif',
                        },
                        onclick: function() {
                            var name = this.style.text;
                            handleEvents.resetOption(chart, option, name);
                        },
                    },
                    {
                        // 标题市级拼音
                        type: "text",
                        left: -68,
                        top: 15,
                        style: {
                            name: name,
                            text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : "",
                            textAlign: "center",
                            fill: style.textColor,
                            font: '10px "Microsoft YaHei", sans-serif',
                        },
                        onclick: function() {
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
        initSeriesData: function(data) {
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

        zoomAnimation: function() {
            var count = null;
            var zoom = function(per) {
                if (!count) count = per;
                count = count + per;
                // console.log(per,count);
                chart.setOption({
                    geo: {
                        zoom: count,
                    },
                });
                if (count < 1)
                    window.requestAnimationFrame(function() {
                        zoom(0.7);
                    });
            };
            window.requestAnimationFrame(function() {
                zoom(0.2);
            });
        },
    };

    var option = {

        backgroundColor: "#336699",
        graphic: [{
                //标题的线
                type: "group",
                left: 15,
                top: 20,
                children: [{
                        type: "line",
                        left: 0,
                        top: -20,
                        shape: {
                            x1: 0,
                            y1: 0,
                            x2: 50,
                            y2: 0,
                        },
                        style: {
                            stroke: style.lineColor,
                        },
                    },
                    {
                        type: "line",
                        left: 0,
                        top: 20,
                        shape: {
                            x1: 0,
                            y1: 0,
                            x2: 50,
                            y2: 0,
                        },
                        style: {
                            stroke: style.lineColor,
                        },
                    },
                ],
            },
            {
                //省级标题样式
                id: name[idx],
                type: "group",
                left: 20,
                top: 30,
                children: [{
                        type: "polyline",
                        left: 90,
                        top: 0,
                        shape: {
                            points: line,
                        },
                        style: {
                            stroke: "transparent",
                            key: name[0],
                        },
                        onclick: function() {
                            var name = this.style.key;
                            handleEvents.resetOption(chart, option, name);
                        },
                    },
                    {
                        type: "text",
                        left: 0,
                        top: 0,
                        style: {
                            text: name[0] === "浙江" ? "浙江省" : name[0],
                            textAlign: "center",
                            fill: style.textColor,
                            font: '12px "Microsoft YaHei", sans-serif',
                        },
                        onclick: function() {
                            handleEvents.resetOption(chart, option, "浙江");
                        },
                    },
                    {
                        //省份拼音
                        type: "text",
                        left: 0,
                        top: 15,
                        style: {
                            text: "ZHEJIANG",
                            textAlign: "center",
                            fill: style.textColor,
                            font: '10px "Microsoft YaHei", sans-serif',
                        },
                        onclick: function() {
                            handleEvents.resetOption(chart, option, "浙江");
                        },
                    },
                ],
            },
        ],
        geo: {
            map: opt.mapName,
            // roam: true, 是否缩放--在移动端无效
            zoom: 1,
            // selectedMode:true,  //多选地图区域
            label: {
                normal: {
                    //地图名字
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 10,
                    },
                },
                emphasis: {
                    //选中后颜色
                    textStyle: {
                        color: "#fff",
                    },
                },
            },
            itemStyle: {
                //地图颜色配置
                normal: {
                    borderColor: "rgba(147, 235, 248, 1)",
                    borderWidth: 1,
                    areaColor: {
                        type: "radial",
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                                offset: 0,
                                color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: "rgba(128, 217, 248, 1)",
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10,
                },
                emphasis: {
                    areaColor: "#389BB7", //选中地图颜色
                    borderWidth: 0,
                },
            },
            regions: opt.activeArea.map(function(item) {
                if (typeof item !== "string") {
                    return {
                        name: item.name,
                        itemStyle: {
                            normal: {
                                areaColor: item.areaColor || "#389BB7",
                            },
                        },
                        label: {
                            normal: {
                                show: item.showLabel,
                                textStyle: {
                                    color: "#fff",
                                },
                            },
                        },
                    };
                } else {
                    return {
                        name: item,
                        itemStyle: {
                            normal: {
                                borderColor: "#91e6ff",
                                areaColor: "#389BB7",
                            },
                        },
                    };
                }
            }),
        },
        series: [{
            type: "effectScatter", //涟漪特效
            coordinateSystem: "geo",
            // symbol: 'diamond',
            symbolSize: 5, //标记的大小
            showEffectOn: "render",
            rippleEffect: {
                //涟漪特效相关配置。
                period: 5, //动画的周期，秒数。
                scale: 10, //波纹的最大缩放比例。
                brushType: "stroke", //波纹的绘制方式，可选 'stroke' 和 'fill'。
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: function(params) {
                        return levelColorMap[params.value[2]];
                    },
                    shadowBlur: 5,
                    shadowColor: "#333",
                },
            },
            // data: handleEvents.initSeriesData(opt.data),
            data: arrZj,
        }, ],
    };

    chart.setOption(option);
    // 添加事件
    chart.on("click", function(params) {

        var _self = this;
        if (opt.goDown && params.name !== name[idx]) {
            if (cityMap[params.name]) {


                var url = cityMap[params.name];
                $.get(url, function(response) {
                    // console.log(response);
                    curGeoJson = response;
                    echarts.registerMap(params.name, response);
                    handleEvents.resetOption(_self, option, params.name);
                    if (params.name == "杭州市") {
                        chart.setOption({
                            series: [{
                                type: "effectScatter", //涟漪特效
                                coordinateSystem: "geo",
                                // symbol: 'diamond',
                                symbolSize: 5, //标记的大小
                                showEffectOn: "render",
                                rippleEffect: {
                                    //涟漪特效相关配置。
                                    period: 5, //动画的周期，秒数。
                                    scale: 5, //波纹的最大缩放比例。
                                    brushType: "stroke", //波纹的绘制方式，可选 'stroke' 和 'fill'。
                                },
                                hoverAnimation: true,
                                itemStyle: {
                                    normal: {
                                        color: function(params) {
                                            return levelColorMap[params.value[2]];
                                        },
                                        shadowBlur: 5,
                                        shadowColor: "#333",
                                    },
                                },
                                data: arrHz
                                // data:arrHz

                                // handleEvents.initSeriesData([opt.arrHz[x]]);
                            }, ],
                        });

                    } else {
                        chart.setOption({
                            series: {
                                data: []
                            }
                        })
                    }



                });
            }
            if (quyMap[params.name]) {
                var url = quyMap[params.name];
                $.get(url, function(response) {
                    curGeoJson = response;
                    // params.name.substring(0,params.name.length-1)
                    var testname = params.name.substring(0, params.name.length - 1)
                    console.log("区域后的" + testname);


                    echarts.registerMap(params.name, response);
                    handleEvents.resetOption(_self, option, params.name);
                    // 如果是主城区 显示主城区的点位
                    if (params.name == "西湖区" || params.name == "拱墅区" || params.name == "上城区" || params.name == "下城区" || params.name == "江干区") {
                        params.name = "主城区"
                    }

                    if (params.name) {

                        chart.setOption({
                            series: [{
                                type: "effectScatter", //涟漪特效
                                coordinateSystem: "geo",
                                // symbol: 'diamond',
                                symbolSize: 5, //标记的大小
                                showEffectOn: "render",
                                rippleEffect: {
                                    //涟漪特效相关配置。
                                    period: 5, //动画的周期，秒数。
                                    scale: 2.5, //波纹的最大缩放比例。
                                    brushType: "stroke", //波纹的绘制方式，可选 'stroke' 和 'fill'。
                                },
                                hoverAnimation: true,
                                itemStyle: {
                                    normal: {
                                        color: function(params) {
                                            return levelColorMap[params.value[2]];
                                        },
                                        shadowBlur: 5,
                                        shadowColor: "#333",
                                    },
                                },
                                data: mapArr[params.name]

                            }, ],
                        });

                    }
                });



            }

        }


    });

    chart.on("mouseover", function(params) {
        var city = params.name; //当前城市
        $("#hoverBox").css("display", "flex");
        $("#hoverBox").html(city);
        $("#hoverBox").show();

        var layerX = params.event.offsetX;
        var layerY = params.event.offsetY;

        $("#hoverBox").css({
            top: layerY + 10,
            left: layerX + 10,
        });
    });
    chart.on("mouseout", function(params) {
        $("#hoverBox").hide();
    });


    return chart;
};

$.getJSON(zhejiang, function(geoJson) {
    echarts.registerMap("浙江", geoJson);
    var myChart = echarts.extendsMap("chart-panel", {

        mapName: "浙江", // 地图名
        goDown: true, // 是否下钻
        // 下钻回调
        callback: function(name, option, instance) {
            // console.log(name, option, instance);
        },
        // 数据展示
        data: arrZj
    });
});