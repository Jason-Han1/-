var data = [{
    name: '北京',
    value: 14.45
}, {
    name: '天津',
    value: 14.23
}, {
    name: '上海',
    value: 19.39
}, {
    name: '重庆',
    value: 20.4
}, {
    name: '河北',
    value: 105.6
}, {
    name: '河南',
    value: 66.29
}, {
    name: '云南',
    value: 26.88
}, {
    name: '辽宁',
    value: 60.51
}, {
    name: '黑龙江',
    value: 40.96
}, {
    name: '湖南',
    value: 36.57
}, {
    name: '安徽',
    value: 49
}, {
    name: '山东',
    value:115.86
}, {
    name: '新疆',
    value: 38.84
}, {
    name: '江苏',
    value: 90.72
}, {
    name: '浙江',
    value: 43.2
}, {
    name: '江西',
    value: 35.54
}, {
    name: '湖北',
    value: 37.67
}, {
    name: '广西',
    value: 34.56
}, {
    name: '甘肃',
    value: 21.25
}, {
    name: '山西',
    value: 52.1
}, {
    name: '内蒙古',
    value: 50.55
}, {
    name: '陕西',
    value: 33.98
}, {
    name: '吉林',
    value: 25.54
}, {
    name: '福建',
    value: 27.72
}, {
    name: '贵州',
    value: 35.97
}, {
    name: '广东',
    value: 82.97
}, {
    name: '青海',
    value: 7.23
}, {
    name: '西藏',
    value: 3.02
}, {
    name: '四川',
    value: 45.76
}, {
    name: '宁夏',
    value: 16.17
}, {
    name: '海南',
    value: 6.01
}]

myChart.setOption({
    series: [{
        type: 'map',
        map: 'china'
    }]
});



option = {

    //标题
    title: {
        text: '2017年全国废气中氮氧化物排放情况',
        subtext: '单位/万吨',
        itemGap: 30,
        left: 'center',
        textStyle: {
            color: '#000',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 20
        },
        subtextStyle: {
            color: '#646464',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 16
        }
    },
    //地图显示：移动鼠标，显示数据
    tooltip: {
        trigger: 'item',
        formatter: function(e) {
            console.log(e)
            var name = e.name ? e.name : '获取中';
            var value = e.value ? e.value : '暂无数据'
            return `${name}:<br>氮氧化物排放量:${value}（万吨） `
        }

    },
    //图例
    visualMap: {
        min: 19000,
        max: 70000,
        left: 16,
        bottom: 40,
        showLabel: !0,
        text: ["氮氧化物排放量"],
        pieces: [{
            gt: 100,
            label: "> 100 万吨",
            color: "#7f1100"
        }, {
            gte: 80,
            lte: 100,
            label: "80-100 万吨",
            color: "#ff5428"
        }, {
            gte: 60,
            lt: 80,
            label: "60-80 万吨",
            color: "#ed6d3d"
        }, {
            gt:40,
            lt: 60,
            label: "40-60 万吨",
            color: "#ff8c71"
        }, {
            gt: 20,
            lt: 40,
            label: "20-40 万吨",
            color: "#ffd768"
        }, {
            gt: 10,
            lt: 20,
            label: "10-20 万吨",
            color: "#fddea5"
        }, {
            gt: 0,
            lt: 10,
            label: "< 10 万吨",
            color: "#fff1cf"
        }],
        show: !0
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    geo: {
        map: 'china',
        zoom: 1.2,
        label: {
            normal: {

                show: true,
                color: '#000000'
            },
            emphasis: {
                show: false,
                color: '#292929'
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#fbfbfb',
                borderColor: '#3399FF'

            },
            emphasis: {
                areaColor: '#CC9933'
            }
        }
    },
    series: [{
        type: 'map',
        mapType: 'china',
        geoIndex: 0,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        data: data
    }]
};