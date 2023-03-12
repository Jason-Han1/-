var house = "image://" + "/asset/get/s/data-1592811891877-_oI8eFNbB.png";
var hangzhou = "/asset/get/s/data-1589003571047-8Xg37jcwv.json";
var mapDate = [{
        name: '江干区',
        value: [120.185, 30.274]
    },
    {
        name: '拱墅区',
        value: [120.182, 30.351]
    },
    {
        name: '西湖区',
        value: [120.091, 30.27]
    },
    {
        name: '滨江区',
        value: [120.21, 30.209]
    },
    {
        name: '萧山区',
        value: [120.254, 30.159]
    },
    {
        name: '余杭区',
        value: [120.295, 30.427]
    },
    {
        name: '富阳区',
        value: [119.956, 30.05]
    },
    {
        name: '桐庐县',
        value: [119.675, 29.784]
    },
    {
        name: '淳安县',
        value: [119.058, 29.613]
    },
    {
        name: '建德市',
        value: [119.28, 29.464]
    },
    {
        name: '临安区',
        value: [119.712, 30.227]
    },
    {
        name: '钱塘新区',
        value: [120.485, 30.284]
    }
];


var mapSelect = [ //默认选中区域
    [{
        name: '临安区',
        selected: true
    }]
]


echarts.extendsMap = function(id, opt) {
    // 实例
    var chart = this.init(document.getElementById(id));


    var defaultOpt = {
        mapName: "杭州", // 地图展示
        goDown: false, // 是否下钻
        activeArea: [{
            name: "临安区",
            selected: true
        }], // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function(name, option, instance) {},
    };
    if (opt) opt = this.util.extend(defaultOpt, opt);


    var option = {

        backgroundColor: "#336699",
        geo: {
            map: opt.mapName,
            // roam: true, 是否缩放--在移动端无效
            zoom: 1.2,
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
                        color: "#640000",
                    },
                },
            },
            itemStyle: {
                //地图颜色配置
                normal: {
                    borderColor: "#3fdaff",
                    borderWidth: 1,
                    areaColor: 'transparent',
                },
                emphasis: {
                    areaColor: "#eee", //选中地图颜色
                    borderWidth: 0,
                },
            },
            regions: mapSelect[0], //默认选中区域设置

        },
        series: [

            {
                type: "scatter",
                coordinateSystem: "geo",
                symbol: house,
                symbolSize: 20, //标记的大小
                hoverAnimation: false,
                data: mapDate,
            },
        ],
    };

    chart.setOption(option);
    return chart;
};

$.getJSON(hangzhou, function(geoJson) {
    echarts.registerMap("杭州", geoJson);
    var myChart = echarts.extendsMap("chart-panel", {

        mapName: "杭州", // 地图名
        goDown: true, // 是否下钻
        // 下钻回调
        callback: function(name, option, instance) {},
    });
});