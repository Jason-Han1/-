//各省份的地图json文件
var provinces = {
    '浙江': '/asset/get/s/data-1482909960637-rkZMYkZBx.json',
    '安徽': '/asset/get/s/data-1482909768458-HJlU_yWBe.json',
    '湖南': '/asset/get/s/data-1482909818685-H17FOkZSl.json',
    '上海': '/asset/get/s/data-1482909900836-H1BC_1WHg.json',
};

// '上海': '/mapjson/shanghai.json',
//     '河北': '/mapjson/hebei.json',
//     '山西': '/asset/get/s/data-1591153103530-woA5PfbnV.json',
//     '内蒙古': '/mapjson/neimeng.json',
//     '辽宁': '/mapjson/liaoning.json',
//     '吉林': '/mapjson/jilin.json',
//     '黑龙江': '/mapjson/heilongjiang.json',
//     '江苏': '/mapjson/jiangsu.json',
//     '浙江': '/mapjson/zhejiang.json',
//     '安徽': '/mapjson/anhui.json',
//     '福建': '/mapjson/fujian.json',
//     '江西': '/mapjson/jiangxi.json',
//     '山东': '/mapjson/shandong.json',
//     '河南': '/mapjson/hainan.json',
//     '湖北': '/mapjson/hubei.json',
//     '湖南': '/mapjson/hunan.json',
//     '广东': '/mapjson/guangdong.json',
//     '广西': '/mapjson/guangxi.json',
//     '海南': '/mapjson/hainan.json',
//     '四川': '/mapjson/sichuan.json',
//     '贵州': '/mapjson/guizhou.json',
//     '云南': '/mapjson/yunnan.json',
//     '西藏': '/mapjson/xizang.json',
//     '陕西': '/mapjson/shanxi.json',
//     '甘肃': '/mapjson/gansu.json',
//     '青海': '/mapjson/qinghai.json',
//     '宁夏': '/mapjson/ningxia.json',
//     '新疆': '/mapjson/xinjiang.json',
//     '北京': '/mapjson/beijing.json',
//     '天津': '/mapjson/tianjin.json',
//     '重庆': '/mapjson/chongqing.json',
//     '香港': '/mapjson/xiangang.json',
//     '澳门': '/mapjson/aomen.json'

//各省份的数据
var allData = [{
    name: '浙江'
}, {
    name: '湖南'
}, {
    name: '杭州'
}, {
    name: '安徽'
}, {
    name: '上海'
}];
for (var i = 0; i < allData.length; i++) {
    allData[i].value = Math.round(Math.random() * 100);
}


loadMap('/asset/get/s/data-1527045631990-r1dZ0IM1X.json', 'china');//初始化全国地图

var timeFn = null;

//单击切换到省级地图，当mapCode有值,说明可以切换到下级地图
myChart.on('click', function(params) {
    clearTimeout(timeFn);
    //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
    timeFn = setTimeout(function() {
        var name = params.name; //地区name
        var mapCode = provinces[name]; //地区的json数据
        if (!mapCode) {
            alert('无此区域地图显示');
            return;
        }

        loadMap(mapCode, name);
        
    }, 250);
});


// 绑定双击事件，返回全国地图
myChart.on('dblclick', function(params) {
    //当双击事件发生时，清除单击事件，仅响应双击事件
    clearTimeout(timeFn);
    
    //返回全国地图
    loadMap('/asset/get/s/data-1527045631990-r1dZ0IM1X.json', 'china');
});

/**
 获取对应的json地图数据，然后向echarts注册该区域的地图，最后加载地图信息
 @params {String} mapCode:json数据的地址
 @params {String} name: 地图名称
 */
function loadMap(mapCode, name) {
    $.get(mapCode, function(data) {
        if (data) {
            echarts.registerMap(name, data);
            var option = {
                tooltip: {
                    show: true,
                    formatter: function(params) {
                        if (params.data) return params.name + '：' + params.data['value']
                    },
                },
                visualMap: {
                    type: 'continuous',
                    text: ['', ''],
                    showLabel: true,
                    left: '50',
                    min: 0,
                    max: 100,
                    inRange: {
                        color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096', ]
                    },
                    splitNumber: 0
                },
                series: [{
                    name: 'MAP',
                    type: 'map',
                    mapType: name,
                    itemStyle: {
                      borderColor: 'rgba(147, 235, 248, 1)',
                      borderWidth: 0,
                    },
                    selectedMode: 'false',//是否允许选中多个区域
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: allData
                }]
            };
            myChart.setOption(option);
            // curMap = {
            //     mapCode: mapCode,
            //     mapName: name
            // };
        } else {
            alert('无法加载该地图');
        }
    });
}