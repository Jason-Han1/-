option = {
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true,
            },
            restore: {
                show: true,
            },
            saveAsImage: {
                show: true,
            },
        },
    },
};

//各省份的数据
var allData = [
    { name: '内蒙古', value: 0 },
    { name: '青海', value: 0 },
    { name: '吉林', value: 0 },
    { name: '甘肃', value: 0 },
    { name: '黑龙江', value: 0 },
    { name: '山东', value: 0 },
    { name: '天津', value: 0 },
    { name: '新疆', value: 0 },
    { name: '云南', value: 150000 },
    { name: '浙江', value: 3380000 },
    { name: '江苏', value: 300000 },
    { name: '河北', value: 0 },
    { name: '北京', value: 2563455 },
    { name: '河南', value: 980000 },
    { name: '宁夏', value: 0 },
    { name: '上海', value: 380300 },
    { name: '辽宁', value: 0 },
    { name: '江西', value: 0 },
    { name: '山西', value: 0 },
    { name: '福建', value: 1418900 },
    { name: '重庆', value: 0 },
    { name: '四川', value: 286917 },
    { name: '湖南', value: 256096 },
    { name: '安徽', value: 0 },
    { name: '湖北', value: 0 },
    { name: '陕西', value: 0 },
    { name: '贵州', value: 98000 },
    { name: '广东', value: 1188980 },
    { name: '广西', value: 286889 },
    { name: '西藏', value: 0 },
    { name: '台湾', value: 0 },
    { name: '海南', value: 336126 },
];
loadMap('/asset/get/s/data-1527045631990-r1dZ0IM1X.json', 'china'); //初始化全国地图

var timeFn = null;

//单击切换到省级地图，当mapCode有值,说明可以切换到下级地图
myChart.on('click', function (params) {
    clearTimeout(timeFn);
    //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
    timeFn = setTimeout(function () {
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

/**
获取对应的json地图数据，然后向echarts注册该区域的地图，最后加载地图信息
@params {String} mapCode:json数据的地址
@params {String} name: 地图名称
*/
function loadMap(mapCode, name) {
    $.get(mapCode, function (data) {
        if (data) {
            echarts.registerMap(name, data);
            var option = {
                tooltip: {
                    show: true,
                    formatter: function (params) {
                        if (params.data) return params.name + '：' + params.data['value'];
                    },
                },
                visualMap: {
                    type: 'continuous',
                    text: ['', ''],
                    showLabel: true,
                    left: '50',
                    min: 0, //最小值，根据项目需要进行修改
                    max: 2400000, //最大值，根据项目需要进行修改
                    calculable: true,
                    label: ['0', '24000000'],
                    inRange: {
                        color: ['#ffffff', '#A2CFD9', '#5593B2', '#1A527F', '#113F67'], //可以更换颜色
                    },
                    splitNumber: 0,
                },
                series: [
                    {
                        name: 'MAP',
                        type: 'map',
                        mapType: name,
                        selectedMode: 'false', //是否允许选中多个区域
                        label: {
                            normal: {
                                show: true,
                            },
                            emphasis: {
                                show: true,
                            },
                        },
                        data: allData,
                    },
                ],
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
