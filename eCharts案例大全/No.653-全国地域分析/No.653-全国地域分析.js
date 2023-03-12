// https://github.com/apache/incubator-echarts/tree/master/map/json 下载全省的json文件 维护常量
var provinces = {
    '上海': '/mapjson/shanghai.json',
    '河北': '/mapjson/hebei.json',
    '山西': '/asset/get/s/data-1591153103530-woA5PfbnV.json',
    '内蒙古': '/mapjson/neimeng.json',
    '辽宁': '/mapjson/liaoning.json',
    '吉林': '/mapjson/jilin.json',
    '黑龙江': '/mapjson/heilongjiang.json',
    '江苏': '/mapjson/jiangsu.json',
    '浙江': '/mapjson/zhejiang.json',
    '安徽': '/mapjson/anhui.json',
    '福建': '/mapjson/fujian.json',
    '江西': '/mapjson/jiangxi.json',
    '山东': '/mapjson/shandong.json',
    '河南': '/mapjson/hainan.json',
    '湖北': '/mapjson/hubei.json',
    '湖南': '/mapjson/hunan.json',
    '广东': '/mapjson/guangdong.json',
    '广西': '/mapjson/guangxi.json',
    '海南': '/mapjson/hainan.json',
    '四川': '/mapjson/sichuan.json',
    '贵州': '/mapjson/guizhou.json',
    '云南': '/mapjson/yunnan.json',
    '西藏': '/mapjson/xizang.json',
    '陕西': '/mapjson/shanxi.json',
    '甘肃': '/mapjson/gansu.json',
    '青海': '/mapjson/qinghai.json',
    '宁夏': '/mapjson/ningxia.json',
    '新疆': '/mapjson/xinjiang.json',
    '北京': '/mapjson/beijing.json',
    '天津': '/mapjson/tianjin.json',
    '重庆': '/mapjson/chongqing.json',
    '香港': '/mapjson/xiangang.json',
    '澳门': '/mapjson/aomen.json'
};

loadMap('/asset/get/s/data-1591152454850-nnifVpUft.json', 'china'); //初始化全国地图
// 先请求全国数据
var item = [{
    "code": "11",
    "area": "北京",
    "board_num": "8",
    "ask_num": "14",
    "sign_num": "1"
}, {
    "code": "14",
    "area": "山西",
    "board_num": "5",
    "ask_num": "900",
    "sign_num": "1"
}, {
    "code": "15",
    "area": "内蒙古",
    "board_num": "1",
    "ask_num": "1",
    "sign_num": "1"
}, {
    "code": "34",
    "area": "安徽",
    "board_num": "2",
    "ask_num": "5",
    "sign_num": "1"
}, {
    "code": "35",
    "area": "福建",
    "board_num": "1",
    "ask_num": "1",
    "sign_num": "1"
}];
item.map(function(i) {
    i.name = i.area;
    i.value = i.ask_num;
    return i
});
myChart.on('click', function(params) {
    if (params.data) {
        item = [{
            "code": "1407",
            "area": "晋中市",
            "board_num": "5",
            "ask_num": "9",
            "sign_num": "1"
        }];
        item.map(function(i) {
            i.name = i.area;
            i.value = i.ask_num;
            return i
        })
        var name = params.name; //地区name
        var mapCode = provinces[name]; //地区的json数据                    
        loadMap(mapCode, name);

    } else {
        alert('无此区域地图显示')
    }
});

function loadMap(mapCode, name) {
    $.get(mapCode, function(data) {
        if (data) {
            echarts.registerMap(name, data);
            var option = {
                title: {
                    text: '全国地域分析',
                    left: 'center',
                },
                tooltip: {
                    formatter: function(params) {
                        if (params.data) {
                            return params.name + '<br>' + '咨询数:' + params.data.ask_num + '<br>' + '留言数:' + params.data.board_num + '<br>' + '用户数:' + params.data.sign_num + '<br>';
                        } else {
                            return params.name + '<br>' + '咨询数:' + 0 + '<br>' + '留言数:' + 0 + '<br>' + '用户数:' + 0 + '<br>';
                        }
                    }

                },
                visualMap: {
                    min: 0,
                    max: 1500,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    calculable: true,
                    // seriesIndex: [1],
                    inRange: {
                        color: ['#e0ffff', '#006edd']
                    },
                    show: true
                },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {
                            pixelRatio: 4
                        }
                    }
                },
                series: [{
                    type: 'map',
                    mapType: name,
                    selectedMode: 'false', //是否允许选中多个区域
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: item
                }]
            };
            myChart.setOption(option);
        } else {
            alert('无法加载该地图');
        }
    });
}