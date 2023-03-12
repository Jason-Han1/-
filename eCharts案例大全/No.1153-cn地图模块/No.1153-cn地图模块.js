//数据
var cyfztx_date_n = {
    geoCoordMap: {
        沈阳: [123.46417, 41.6775],
        中国台湾: [120.96, 23.7],
        中国香港: [114.195466, 22.282751],
        中国澳门: [113.54, 22.2],
        甘肃: [103.73, 36.03],
        四川: [104.06, 30.67],
        河北: [114.48, 38.03],
        湖北: [114.31, 30.52],
        安徽: [117.27, 31.86],
        浙江: [120.19, 30.26],
        湖南: [113, 28.21],
        黑龙江: [126.63, 45.75],
        陕西: [108.95, 34.27],
        北京: [116.46, 39.92],
        上海: [121.48, 31.22],
        重庆: [106.54, 29.59],
        天津: [117.2, 39.13],
    },
    BJData: [
        [{ name: '中国台湾', value: 21 }, { name: '沈阳' }],
        [{ name: '中国香港', value: 101 }, { name: '沈阳' }],
        [{ name: '中国澳门', value: 2 }, { name: '沈阳' }],
        [{ name: '北京', value: 12 }, { name: '沈阳' }],
        [{ name: '上海', value: 1 }, { name: '沈阳' }],
        [{ name: '重庆', value: 1 }, { name: '沈阳' }],
        [{ name: '天津', value: 1 }, { name: '沈阳' }],
        [{ name: '陕西', value: 3 }, { name: '沈阳' }],
        [{ name: '甘肃', value: 4 }, { name: '沈阳' }],
        [{ name: '四川', value: 1 }, { name: '沈阳' }],
        [{ name: '河北', value: 6 }, { name: '沈阳' }],
        [{ name: '湖北', value: 7 }, { name: '沈阳' }],
        [{ name: '湖南', value: 1 }, { name: '沈阳' }],
        [{ name: '浙江', value: 3 }, { name: '沈阳' }],
        [{ name: '安徽', value: 8 }, { name: '沈阳' }],
        [{ name: '黑龙江', value: 7 }, { name: '沈阳' }],
    ],
};

// 辽宁地图模块

var datemap = cyfztx_date_n.geoCoordMap;
var datevalue = cyfztx_date_n.BJData;
var convertData = function (datemap, datevalue) {
    var res = [];
    for (var i = 0; i < datevalue.length; i++) {
        var dataItem = datevalue[i];
        var fromCoord = datemap[dataItem[0].name];
        var toCoord = datemap[dataItem[1].name];
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
var convertData2 = function (datemap, datevalue) {
    var res = [];
    for (var i = 0; i < datevalue.length; i++) {
        var dataItem = datevalue[i];
        var fromCoord = datemap[dataItem[1].name];
        var toCoord = datemap[dataItem[0].name];
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
[['沈阳', datemap, datevalue]].forEach(function (item, i) {
    series.push(
        {
            name: '进口',
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                color: '#0bc7f3',
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    color: '#0bc7f3',
                    width: 1, //尾迹线条宽度
                    opacity: 0, //尾迹线条透明度
                    curveness: 0.3, //尾迹线条曲直度
                },
            },
            data: convertData(item[1], item[2]),
        },
        {
            name: '出口',
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                color: '#FF0000',
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    color: '#FF0000',
                    width: 1, //尾迹线条宽度
                    opacity: 0, //尾迹线条透明度
                    curveness: -0.3, //尾迹线条曲直度
                },
            },
            data: convertData2(item[1], item[2]),
        },
        {
            //城市坐标点动画
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 4, //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: '{b}', //圆环显示文字
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
            data: item[2].map(function (dataItem) {
                return {
                    name: dataItem[0].name,
                    value: datemap[dataItem[0].name].concat([dataItem[0].value]),
                };
            }),
        },
        //进口点
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
                },
                emphasis: {
                    show: true,
                    color: '#FF6A6A',
                },
            },
            symbol: 'pin',
            symbolSize: 30,
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
                    value: datemap[item[0]].concat([100]),
                    visualMap: false,
                },
            ],
        }
    );
});
var svg ='path://M32.597,9.782 L30.475,11.904 C30.085,12.294 29.452,12.294 29.061,11.904 C28.671,11.513 28.671,10.880 29.061,10.489 L31.182,8.368 C31.573,7.978 32.206,7.978 32.597,8.368 C32.987,8.759 32.987,9.392 32.597,9.782 ZM30.000,30.500 C30.000,31.328 29.329,32.000 28.500,32.000 L5.500,32.000 C4.672,32.000 4.000,31.328 4.000,30.500 C4.000,29.672 4.672,29.000 5.500,29.000 L8.009,29.000 L8.009,18.244 C8.009,13.139 12.034,9.000 17.000,9.000 C21.966,9.000 25.992,13.139 25.992,18.244 L25.992,29.000 L28.500,29.000 C29.329,29.000 30.000,29.672 30.000,30.500 ZM17.867,14.444 L13.000,22.000 L17.000,22.000 L17.133,26.556 L21.000,20.000 L17.000,20.000 L17.867,14.444 ZM25.221,6.327 C25.033,6.846 24.459,7.113 23.940,6.924 C23.421,6.735 23.153,6.162 23.342,5.643 L24.368,2.823 C24.557,2.304 25.131,2.037 25.650,2.226 C26.169,2.415 26.436,2.989 26.248,3.508 L25.221,6.327 ZM17.000,5.000 C16.448,5.000 16.000,4.552 16.000,4.000 L16.000,1.000 C16.000,0.448 16.448,0.000 17.000,0.000 C17.552,0.000 18.000,0.448 18.000,1.000 L18.000,4.000 C18.000,4.552 17.552,5.000 17.000,5.000 ZM10.028,7.197 C9.509,7.386 8.935,7.118 8.746,6.599 L7.720,3.780 C7.532,3.261 7.799,2.687 8.318,2.498 C8.837,2.309 9.411,2.577 9.600,3.096 L10.626,5.915 C10.815,6.434 10.547,7.008 10.028,7.197 ZM3.354,12.268 L1.232,10.146 C0.842,9.756 0.842,9.123 1.232,8.732 C1.623,8.342 2.256,8.342 2.646,8.732 L4.768,10.854 C5.158,11.244 5.158,11.877 4.768,12.268 C4.377,12.658 3.744,12.658 3.354,12.268 Z';

option = {
    backgroundColor: '#0d0e1a',
    tooltip: {
        trigger: 'item',
        backgroundColor: '#1540a1',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function (params) {
            console.log(params);
            //根据业务自己拓展要显示的内容
            var res = '';
            var name = params.name;
            var value = params.value[2];
            if (name != '') {
                res = "<span style='color:#fff;'>" + name + '</span><br/>项目数：' + value;
                return res;
            }
        },
    },
    visualMap: {
        //图例值控制
        show: false,
        type: 'piecewise',
        pieces: [
            {
                max: 5,
                color: '#e67817',
            },
            {
                min: 5,
                max: 10,
                color: 'red',
            },
            {
                min: 10,
                color: 'yellow',
            },
        ],
        calculable: false,
    },
    geo: {
        map: 'china',
        show: true,
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: true, //是否允许缩放
        layoutCenter: ['49%', '50%'], //地图位置
        layoutSize: '120%',
        itemStyle: {
            normal: {
                show: 'true',
                color: '#04284e', //地图背景色
                borderColor: '#5bc1c9', //省市边界线
            },
            emphasis: {
                show: 'true',
                color: 'rgba(37, 43, 61, .5)', //悬浮背景
            },
        },
    },
    legend: {
        orient: 'horizontal',
        left: 'center',
        // align: 'right',
        data: [
            { name: '进口', icon: svg },
            { name: '出口', icon: svg },
        ],
        textStyle: {
            color: '#fff',
            fontSize: 20,
        },
        itemWidth: 50,
        itemHeight: 30,
        selectedMode: 'multiple',
    },
    series: series,
};
