
var geoCoordMap = {
    满洲里: [120.37973, 50.610341],
    俄罗斯: [105.781411, 65.063433],
    德国: [10.238245, 49.602718],
    波兰: [18.238245, 51.602718],
    白俄罗斯: [28.238245, 53.602718],
    法国: [1.238245, 45.602718],
    西班牙: [-4.238245, 40.602718],
    英国: [-3.238245, 55.602718],
    匈牙利: [19.238245, 47.02718],
    意大利: [12.238245, 43.02718],
    荷兰: [5.238245, 52.602718]
};
var BJData = [
    [{ name: '俄罗斯', value: 1000 }, {name: '满洲里'}],
    [{ name: '德国', value: 400 }, {name: '满洲里'}],
    [{ name: '波兰', value: 150 }, {name: '满洲里'}],
    [{ name: '白俄罗斯', value: 400 }, {name: '满洲里'}],
    [{ name: '法国', value: 200 }, {name: '满洲里'}],
    [{ name: '西班牙', value: 230 }, {name: '满洲里'}],
    [{ name: '英国', value: 500 }, {name: '满洲里'}],
    [{ name: '匈牙利', value: 10 }, {name: '满洲里'}],
    [{ name: '意大利', value: 120 }, {name: '满洲里'}],
    [{ name: '荷兰', value: 10 }, {name: '满洲里'}]
];
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([
                {
                    coord: fromCoord,
                    value: dataItem[0].value,
                },
                {
                    coord: toCoord,
                },
            ]);
        }
    }
    return res;
};
var convertData2 = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[1].name];
        var toCoord = geoCoordMap[dataItem[0].name];
        if (fromCoord && toCoord) {
            res.push([
                {
                    coord: fromCoord,
                    value: dataItem[0].value,
                },
                {
                    coord: toCoord,
                },
            ]);
        }
    }
    return res;
};

var series = [];
[['满洲里', BJData]].forEach(function (item, i) {
    series.push(
        {
            name: '运输线路',
            type: 'lines',
            zlevel: 2,
            // 箭头效果
            effect: {
                show: true,
                color: '#FF0000',
                period: 5, //箭头指向速度，值越小速度越快
                trailLength: 0.05, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 6, //图标大小
            },
            // 箭头轨迹，透明化处理
            lineStyle: {
                normal: {
                    color: '#FF0000',
                    width: 1, //尾迹线条宽度
                    opacity: 0, //尾迹线条透明度
                    curveness: -0.3, //尾迹线条曲直度
                },
            },
            data: convertData2(item[1]),
        },
        {
            // 目的地点效果
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 3, //波纹圆环最大限制，值越大波纹越大
            },
            // 文字标记
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [15, 0], //偏移设置
                    formatter: '{b}', //圆环显示文字
                    fontSize: 10,
                    //color: '#fff',
                },
                emphasis: {
                    show: true,
                    color: '#FF6A6A',
                },
            },
            symbol: 'circle',
            symbolSize: function (val) {
                return 8 + val[2] / 1000; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: true,
                    color: '#FF6A6A',
                },
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
                };
            }),
        },
        //被攻击点
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4,
            },
            label: {
                normal: {
                    show: true,
                    color: 'red',
                    position: 'right',
                    formatter: '{b}',
                    fontSize: 15,
                    color: '#fff',
                },
                emphasis: {
                    show: true,
                    color: '#FF6A6A',
                },
            },
            symbol: 'pin',
            symbolSize: 35,
            itemStyle: {
                normal: {
                    show: true,
                    color: 'red',
                },
                emphasis: {
                    show: true,
                    color: '#FF6A6A',
                },
            },
            data: [
                {
                    name: item[0],
                    value: geoCoordMap[item[0]].concat([100]),
                    visualMap: false,
                },
            ],
        }
    );
});
var svg =
    'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

option = {
    backgroundColor: '#000',
    tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: '#1540a1',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function (params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = '';
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res = "<span style='color:#fff;'>" + name + '</span><br/>数据：' + value;
            return res;
        },
    },
    visualMap: {
        //图例值控制
        show: false,
        type: 'piecewise',
        pieces: [
            {max: 100, color: '#ADFF2F'},
            {min: 100, max: 200, color: '#00FF00'},
            {min: 200, max: 300, color: 'yellow'},
            {min: 300, max: 400, color: '#FF4500'},
            {min: 500, color: 'red'}
        ],
        calculable: true,
    },
    geo: {
        map: 'world',
        show: true,
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: true, //是否允许缩放
        layoutCenter: ['50%', '50%'], //地图位置
        layoutSize: '150%',
        itemStyle: {
            normal: {
                show: 'true',
                color: '#04284e', //地图背景色
                //borderColor: '', //省市边界线，默认#5bc1c9
            },
            emphasis: {
                show: 'true',
                color: 'rgba(37, 43, 61, .5)', //悬浮背景
            },
        },
    },
    legend: {
        orient: 'vertical',
        top: '30',
        left: 'center',
        align: 'right',
        data: [
            { name: '运输线路', icon: svg },
        ],
        textStyle: {
            color: '#fff',
            fontSize: 26,
        },
        itemWidth: 50,
        itemHeight: 30,
        selectedMode: 'multiple',
    },
    series: series,
};
