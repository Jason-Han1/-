var bioAreaMapURL = "/asset/get/s/data-1545324068295-u0am6gPqS.geojson";

// var bioAreaMapURL = "/asset/get/s/data-1545322938686-I9K60gtPc.geojson";

// var bioAreaMapURL = "/asset/get/s/data-1545317702041-NWwF720GB.geojson";

var bioMapDatas = [
    {name: "云克药业核药生产基地项目", value: 1, pos:[103.980093,30.42713], status: "在建项目"},
    {name: "凤凰家园二期安置小区项目", value: 2, pos:[103.986561,30.421275], status: "拟建项目"},
    {name: "生物城污水处理厂及污水干管一期工程", value: 3, pos:[103.934099,30.458888], status: "在建项目"},
    {name: "生物城南路工程", value: 4, pos:[103.939849,30.42688], status: "完工"},
    {name: "新双黄路南段工程", value: 1, pos:[103.951606,30.405635], status: "在建项目"},
    {name: "凤凰家园二期配套工程", value: 2, pos:[103.967416,30.414232], status: "拟建项目"},
    {name: "起步区公立小学工程", value: 3, pos:[104.006079,30.427561], status: "在建项目"},
    {name: "起步区公立幼儿园工程", value: 4, pos:[103.933784,30.45247], status: "完工"},
    {name: "起步区社区综合体工程", value: 1, pos:[103.956637,30.464548], status: "在建项目"},
    {name: "起步区派出所及交警中队办公点工程", value: 2, pos:[103.916824,30.445745], status: "拟建项目"},
    {name: "永安湖景观工程一期", value: 3, pos:[103.946144,30.46791], status: "在建项目"},
    {name: "孵化园下穿隧道工程", value: 4, pos:[103.928034,30.468159], status: "完工"}
];

//在建项目、拟建项目、完工
var bioAreaMapRadiusColors = {
    "在建项目":"#fdb628",
    "拟建项目":"#06d791",
    "完工项目":"#da6c75"
};

var bioMapDataConvert = function(data){
    var res = [];
    for(var i=0,len=data.length;i<len;i++){
        res.push({
            name: data[i].name,
            value: data[i].pos.concat(data[i].value),
            itemStyle:{
                normal:{
                    color: bioAreaMapRadiusColors[data[i].status]
                }
            }
        });
    }
    return res;
};

$.getJSON(bioAreaMapURL, function(geoJson) {
    //TODO 注册地图数据
    echarts.registerMap('bio', geoJson);
    var option = {}, currentIndex = 0, intervalTime = 10000;
    option = {
        backgroundColor: '#0e2a42',
        geo: {//生物城区域地图
            map: 'bio',
            zoom: 1.3, //当前视角缩放比例
            roam: true,//鼠标缩放和平移漫游
            // left: "20px", //屏幕过大的时候控制该位置偏移
            //top: "10px",
            selectedMode: 'single',
            emphasis: {
                label: {
                    show: false //地图名称不显示
                },
                itemStyle:{
                    borderColor: 'rgba(51, 119, 254, 1)',
                    borderWidth: 1,
                    areaColor: 'rgba(17, 34, 105, .1)'
                }
            },
            itemStyle: {
                borderColor: 'rgba(51, 119, 254, 1)',
                borderWidth: 1,
                areaColor: 'rgba(17,34,105, .6)'
                //shadowColor: 'rgba(128, 217, 248, 1)',
                //shadowOffsetX: -2,
                //shadowOffsetY: 2,
                //shadowBlur: 10,
            }
        },
        series: [{ //生物城区域地图 展示数据 气泡
            type: "scatter",
            coordinateSystem: 'geo',
            symbolSize: 16,
            // label: { //鼠标移动到点位置显示的内容
            //     normal:{
            //         show: true,
            //         color: '#fff'
            //     },
            //     emphasis:{
            //         show: false
            //     }
            // },
            emphasis:{
                //选中后高亮
                itemStyle:{
                    borderColor: 'rgba(251, 243, 32, 1)',
                    borderWidth: 1,
                    shadowColor: 'rgba(251, 243, 32, 1)',
                    // shadowOffsetX: -10,
                    // shadowOffsetY: 10,
                    shadowBlur: 60
                }
            },
            hoverAnimation: true,
            data: bioMapDataConvert(bioMapDatas)
        }, {//带光圈的点--在建项目-白色
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbolSize: 20,
            showEffectOn: 'render',
            rippleEffect:{
                brushType: 'stroke'
            },
            hoverAnimation: true,
            data: bioMapDataConvert(function(){
                var res = [];
                for(var i=0,len=bioMapDatas.length;i<len;i++){
                    if(bioMapDatas[i].status === "在建项目"){
                        res.push(bioMapDatas[i]);
                    }
                }
                return res;
            }())
        }]
    };
    myChart.setOption(option);
});