var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
var chart = echarts.init(document.getElementById('chart-panel'));
$("body").css("background", "#333");
var provinces = {
    //23个省
    "台湾": "taiwan",
    "河北": "hebei",
    "山西": "shanxi",
    "辽宁": "liaoning",
    "吉林": "jilin",
    "黑龙江": "heilongjiang",
    "江苏": "jiangsu",
    "浙江": "zhejiang",
    "安徽": "anhui",
    "福建": "fujian",
    "江西": "jiangxi",
    "山东": "shandong",
    "河南": "henan",
    "湖北": "hubei",
    "湖南": "hunan",
    "广东": "guangdong",
    "海南": "hainan",
    "四川": "sichuan",
    "贵州": "guizhou",
    "云南": "yunnan",
    "陕西": "shanxi1",
    "甘肃": "gansu",
    "青海": "qinghai",
    //5个自治区
    "新疆": "xinjiang",
    "广西": "guangxi",
    "内蒙古": "neimenggu",
    "宁夏": "ningxia",
    "西藏": "xizang",
    //4个直辖市
    "北京": "beijing",
    "天津": "tianjin",
    "上海": "shanghai",
    "重庆": "chongqing",
    //2个特别行政区
    "香港": "xianggang",
    "澳门": "aomen"
};
//直辖市和特别行政区-只有二级地图，没有三级地图
var special = ["北京", "天津", "上海", "重庆", "香港", "澳门"];
var mapdata = [];
//绘制全国地图，获取全国地图的json
$.getJSON(uploadedDataURL, function(data) {
    //新建一个空数组
    d = [];
    //循环遍历
    for (var i = 0; i < data.features.length; i++) {
        //将数据中的name，push到新数组中
        d.push({
            name: data.features[i].properties.name
        })
    }
    //把这个数组赋给全局的mapdata
    mapdata = d;
    //注册地图
    echarts.registerMap('china', data);
    //绘制地图
    renderMap('china', d);
});
var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
};

function renderMap(map, data) {
    // option.title.subtext = map;
    option.series = [{
        name: map,
        type: 'map',
        mapType: map,
        roam: false,
        nameMap: {
            'china': '中国'
        },
        left: 'left',
        top: 'top',
        label: {
            normal: {
                show: false,
                textStyle: {
                    color: '#999',
                    fontSize: 13
                }
            },
            emphasis: {
                show: false,
                textStyle: {
                    color: '#fff',
                    fontSize: 13
                }
            }
        },
        itemStyle: {
            normal: {
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(147, 235, 248, .3)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(147, 235, 248, .6)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderColor: 'dodgerblue',
                borderWidth: 2,
                shadowColor: 'rgba(63, 218, 255, 0.5)',
                shadowBlur: 20
            },
            emphasis: {
                areaColor: 'darkorange'
            }
        },
        data: data
    }];
    //渲染地图
    chart.setOption(option);
}