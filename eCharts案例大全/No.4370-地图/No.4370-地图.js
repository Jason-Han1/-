loadMap('/asset/get/s/data-1591152454850-nnifVpUft.json', 'china'); //初始化全国地图
let provincesName = [
    '上海',
    '河北',
    '山西',
    '内蒙古',
    '辽宁',
    '吉林',
    '黑龙江',
    '江苏',
    '浙江',
    '安徽',
    '福建',
    '江西',
    '山东',
    '河南',
    '湖北',
    '湖南',
    '广东',
    '广西',
    '海南',
    '四川',
    '贵州',
    '云南',
    '西藏',
    '陕西',
    '甘肃',
    '青海',
    '宁夏',
    '新疆',
    '北京',
    '天津',
    '重庆',
    '香港',
    '澳门',
    '台湾',
];
let item=[];
provincesName.map(it => {
    let obj = {
        "code": "12",
        "area": it,
        "board_num":Math.random()*100,
        "ask_num": 500+Math.random()*1000,
        "sign_num": Math.random()*10
    };
    item.push(obj);
})

item.map(function(i) {
    i.name = i.area;
    i.value = i.ask_num; //这个参数决定颜色深浅
    return i
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
                        color: ['#A5DCF4', '#006edd', ]
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