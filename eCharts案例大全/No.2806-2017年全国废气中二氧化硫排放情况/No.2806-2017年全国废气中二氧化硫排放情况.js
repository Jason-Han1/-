var data = [{
    name: '北京',
    value: 2.01
}, {
    name: '天津',
    value: 5.56
}, {
    name: '上海',
    value: 1.85
}, {
    name: '重庆',
    value: 25.34
}, {
    name: '河北',
    value: 60.24
}, {
    name: '河南',
    value: 28.63
}, {
    name: '云南',
    value: 38.44
}, {
    name: '辽宁',
    value: 38.97
}, {
    name: '黑龙江',
    value: 29.37
}, {
    name: '湖南',
    value: 21.64
}, {
    name: '安徽',
    value: 23.54
}, {
    name: '山东',
    value:73.91
}, {
    name: '新疆',
    value: 41.82
}, {
    name: '江苏',
    value: 41.07
}, {
    name: '浙江',
    value: 19.05
}, {
    name: '江西',
    value: 21.55
}, {
    name: '湖北',
    value: 22.01
}, {
    name: '广西',
    value: 17.73
}, {
    name: '甘肃',
    value: 25.88
}, {
    name: '山西',
    value: 57.31
}, {
    name: '内蒙古',
    value: 54.63
}, {
    name: '陕西',
    value: 27.94
}, {
    name: '吉林',
    value: 16.61
}, {
    name: '福建',
    value: 13.39
}, {
    name: '贵州',
    value: 68.75
}, {
    name: '广东',
    value: 27.68
}, {
    name: '青海',
    value: 9.24
}, {
    name: '西藏',
    value: 0.35
}, {
    name: '四川',
    value: 38.91
}, {
    name: '宁夏',
    value: 20.75
}, {
    name: '海南',
    value: 1.43
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
        text: '2017年全国废气中二氧化硫排放情况',
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
            return `${name}:<br>二氧化硫排放量:${value}（万吨） `
        }

    },
    //图例
    visualMap: {
        min: 19000,
        max: 70000,
        left: 16,
        bottom: 40,
        showLabel: !0,
        text: ["二氧化硫排放量"],
        pieces: [{
            gt: 60,
            label: "> 60 万吨",
            color: "#7f1100"
        }, {
            gte: 50,
            lte: 60,
            label: "50-60 万吨",
            color: "#ff5428"
        }, {
            gte: 40,
            lt: 50,
            label: "40-50 万吨",
            color: "#ed6d3d"
        }, {
            gt: 30,
            lt: 40,
            label: "30-40 万吨",
            color: "#ff8c71"
        }, {
            gt: 20,
            lt: 30,
            label: "20-30 万吨",
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