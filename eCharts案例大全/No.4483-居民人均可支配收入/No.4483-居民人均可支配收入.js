//可视化作业
//2019年居民人均可支配收入
//数据来源：国家统计局（港澳台暂无数据）

//添加脚本/dep/echarts/map/js/china.js
//数据格式如下,中文名称要一致,value为数字类型,字符串的数字也可以
var mapData = [{
    name: '北京',
    value: 67755.91
}, {
    name: '天津',
    value: 42404.14
}, {
    name: '上海',
    value: 69441.56
}, {
    name: '重庆',
    value: 28920.41
}, {
    name: '河北',
    value: 25664.71
}, {
    name: '河南',
    value: 23902.68
}, {
    name: '云南',
    value: 22082.43
}, {
    name: '辽宁',
    value: 31819.75
}, {
    name: '黑龙江',
    value: 24253.59
}, {
    name: '湖南',
    value: 27679.71
}, {
    name: '安徽',
    value: 26415.09
}, {
    name: '山东',
    value: 31596.98
}, {
    name: '新疆',
    value: 23103.38
}, {
    name: '江苏',
    value: 41399.71
}, {
    name: '浙江',
    value: 49898.84
}, {
    name: '江西',
    value: 26262.45
}, {
    name: '湖北',
    value: 28319.46
}, {
    name: '广西',
    value: 23328.21
}, {
    name: '甘肃',
    value: 19139.02
}, {
    name: '山西',
    value: 23828.46
}, {
    name: '内蒙古',
    value: 30555.03
}, {
    name: '陕西',
    value: 24666.26
}, {
    name: '吉林',
    value: 24562.91
}, {
    name: '福建',
    value: 35616.09
}, {
    name: '贵州',
    value: 20397.36
}, {
    name: '广东',
    value: 39014.28
}, {
    name: '青海',
    value: 22617.68
}, {
    name: '西藏',
    value: 19501.3
}, {
    name: '四川',
    value: 24703.15
}, {
    name: '宁夏',
    value: 24411.89
}, {
    name: '海南',
    value: 26679.48
}, {
    name: '台湾',
    value: '暂无数据'
}, {
    name: '香港',
    value: '暂无数据'
}, {
    name: '澳门',
    value: '暂无数据'
}, {
    name: '南海诸岛',
    value: '暂无数据'
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
        text: '2019年居民人均可支配收入',
        subtext: '数据来源:国家统计局(单位/元)',
        itemGap: 30,
        left: 'center',
        textStyle: {
            color: '#000',

            fontStyle: 'normal',

            fontWeight: 'bold',

            fontSize: 30
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
            return `${name}:<br>人均可支配收入:${value} `
        }

    },
    //图例
    visualMap: {
        min: 19000,
        max: 70000,
        left: 16,
        bottom: 40,
        showLabel: !0,
        text: ["人均可支配收入"],
        pieces: [{
            gt: 60000,
            label: "> 60000 元",
            color: "#7f1100"
        }, {
            gte: 40000,
            lte: 50000,
            label: "40000 - 50000 元",
            color: "#ff5428"
        }, {
            gte: 30000,
            lt: 40000,
            label: "30000 - 40000 元",
            color: "#ed6d3d"
        }, {
            gt: 25000,
            lt: 30000,
            label: "25000 - 30000 元",
            color: "#ff8c71"
        }, {
            gt: 24000,
            lt: 25000,
            label: "24000 - 25000 元",
            color: "#ffd768"
        }, {
            gt: 22000,
            lt: 24000,
            label: "22000 - 24000 元",
            color: "#fddea5"
        }, {
            gt: 19000,
            lt: 22000,
            label: "< 22000 元",
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
        data: mapData
    }]
};