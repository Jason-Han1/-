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
var item = [
    { name: '北京', value: 11.481 },
    { name: '天津', value: 15.4 },
    { name: '河北', value: 10 },
    { name: '山西', value: 12.353 },
    { name: '内蒙古', value: 7.833 },
    { name: '安徽', value: 9.952 },
    { name: '上海', value: 8.652 },
    { name: '江苏', value: 8 },
    { name: '浙江', value: 7.406 },
    { name: '江西', value: 8.889 },
    { name: '福建', value: 13.857 },
    { name: '山东', value: 8.286 },
    { name: '河南', value: 11.25 },
    { name: '湖北', value: 6.867 },
    { name: '湖南', value: 11.933 },
    { name: '广东', value: 7.84 },
    { name: '广西', value: 10.444 },
    { name: '海南', value: 4 },
    { name: '陕西', value: 8.714 },
    { name: '甘肃', value: 10 },
    { name: '宁夏', value: 8 },
    { name: '青海', value: 11.6 },
    { name: '新疆', value: 9.308 },
    { name: '黑龙江', value: 11.5 },
    { name: '吉林', value: 10.111 },
    { name: '辽宁', value: 9 },
    { name: '云南', value: 11.692 },
    { name: '重庆', value: 12.556 },
    { name: '四川', value: 9.522 },
    { name: '西藏', value: 2.5 },
    { name: '贵州', value: 9.143 },

]

function loadMap(mapCode, name) {
    $.get(mapCode, function(data) {
        if (data) {
            echarts.registerMap(name, data);
            var option = {
                title: {
                    text: '2008年',
                    left: 'center',
                },
                tooltip: {
                    formatter: function(params) {
                        if (params.data) {
                            return `${params.name} ${params.value}`
                        } 
                    }

                },
                visualMap: {
                    min: 0,
                    max: 38,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    calculable: true,
                    inRange: {
                        color: ['#fff', '#f00']
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