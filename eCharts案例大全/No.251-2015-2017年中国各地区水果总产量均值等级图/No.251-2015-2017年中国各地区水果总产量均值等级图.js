var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
var geoGpsMap = [121.4648, 31.2891];
var t = 1;
var r = 1;
//所有地点坐标
var geoCoordMap = {
    江苏: [118.8062, 31.9208],
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
    西藏: [91.11, 29.97],
};
window.dataList = [
    {
        name: '北京',
        value:81
    },
    {
        name: '天津',
        value: 60
    },
    {
        name: '上海',
        value: 54
    },
    {
        name: '重庆',
        value: 390
    },
    {
        name: '河北',
        value: 1741
    },
    {
        name: '河南',
        value: 2634

    },
    {
        name: '云南',
        value: 755
    },
    {
        name: '辽宁',
        value: 826
    },
    {
        name: '黑龙江',
        value: 225
    },
    {
        name: '湖南',
        value: 969
    },
    {
        name: '安徽',
        value: 818
    },
    {
        name: '山东',
        value: 3011
    },
    {
        name: '新疆',
        value: 1528
    },
    {
        name: '江苏',
        value: 929
    },
    {
        name: '浙江',
        value:746
    },
    {
        name: '江西',
        value: 667
    },
    {
        name: '湖北',
        value: 957
    },
    {
        name: '广西',
        value: 1810
    },
    {
        name: '甘肃',
        value: 655
    },
    {
        name: '山西',
        value: 843
    },
    {
        name: '内蒙古',
        value: 310
    },
    {
        name: '陕西',
        value: 1926
    },
    {
        name: '吉林',
        value: 149
    },
    {
        name: '福建',
        value: 741
    },
    {
        name: '贵州',
        value: 252
    },
    {
        name: '广东',
        value: 1594
    },
    {
        name: '青海',
        value: 4
    },
    {
        name: '西藏',
        value: 1
    },
    {
        name: '四川',
        value: 971
    },
    {
        name: '宁夏',
        value: 255
    },
    {
        name: '海南',
        value: 406
    },
];
$(function () {
    var year = ['2003']
    var mapData = [[]];

    $.getJSON(uploadedDataURL, function (geoJson) {
        $('body').css({
            background:
                'url(https://corgixuoos.oss-cn-shanghai.aliyuncs.com/soc/0623%E4%BF%AE%E6%94%B9%E5%A4%A7%E5%B1%8F-%E6%95%B4%E4%BD%93-Recovered.png) repeat-y', //'#2a6d87',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        });

        echarts.registerMap('china', geoJson);
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        };

       

        optionXyMap01 = {
           
               
            baseOption: {
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                grid: {
                    right: '2%',
                    top: '10%',
                    bottom: '10%',
                    width: '18%',
                },
tooltip: {
        triggerOn: "click",
        formatter: function(e, t, n) {
            return .5 == e.value ? e.name + "：水果总产量" : e.seriesName + "<br />" + e.name + "：" + e.value
        }
    },
                visualMap: {
                   min: 0,
        max: 1000,
        left: 26,
        bottom: 45,
        showLabel: !0,
        text: ["高", "低"],
        pieces: [{
            gt: 2000,
            label: "> 2000 万吨",
            color: "#7f1100"
        }, {
            gte: 1000,
           lte: 2000,
            label: "1000-2000万吨",
            color: "#ff5428"
        }, {
            gte: 100,
            lt: 1000,
            label: "100-1000万吨",
            color: "#ff8c71"
        }, {
            gt: 0,
            lt: 100,
            label: "0-100万吨",
            color: "#ffd768"
        }],
                },
   geo: {
        map: "china",
        roam: !1,
        scaleLimit: {
            min: 1,
            max: 2
        },
        zoom: 1.15,
         center: [105.83531246, 34.0267395887],
        top: 120,
        label: {
            normal: {
                show: !0,
                fontSize: "14",
                color: "rgba(0,0,0,0.7)"
            }
        },
        itemStyle: {
            normal: {
                //shadowBlur: 50,
                //shadowColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
                areaColor: "#f2d5ad",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 0
            }
        }
    },
     series: [{
        name: "2015-2017年水果总产量均值（万吨）",
        type: "map",
        geoIndex: 0,
        data: window.dataList
    }]
            },
            options: [],
        };

        
        myChart.setOption(optionXyMap01);
    });
});
