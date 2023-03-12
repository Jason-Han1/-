//山科大2020年分省本科招生计划（青岛校区）
//数据来源：山东科技大学官网
//添加脚本/dep/echarts/map/js/china.js
//数据格式如下,中文名称要一致,value为数字类型,字符串的数字也可以
var mapData = [{
    name: '北京',
    value: 5
}, {
    name: '天津',
    value: 30
}, {
    name: '上海',
    value: 10
}, {
    name: '重庆',
    value: 40
}, {
    name: '河北',
    value: 145
}, {
    name: '河南',
    value: 92
}, {
    name: '云南',
    value: 100
}, {
    name: '辽宁',
    value: 35
}, {
    name: '黑龙江',
    value: 60
}, {
    name: '湖南',
    value: 50
}, {
    name: '安徽',
    value: 80
}, {
    name: '山东',
    value:3825
}, {
    name: '新疆',
    value: 32
}, {
    name: '江苏',
    value: 55
}, {
    name: '浙江',
    value: 40
}, {
    name: '江西',
    value: 75
}, {
    name: '湖北',
    value: 40
}, {
    name: '广西',
    value: 100
}, {
    name: '甘肃',
    value: 60
}, {
    name: '山西',
    value: 100
}, {
    name: '内蒙古',
    value: 40
}, {
    name: '陕西',
    value: 100
}, {
    name: '吉林',
    value: 40
}, {
    name: '福建',
    value: 60
}, {
    name: '贵州',
    value: 135
}, {
    name: '广东',
    value: 10
}, {
    name: '青海',
    value: 20
}, {
    name: '西藏',
    value: 25
}, {
    name: '四川',
    value: 112
}, {
    name: '宁夏',
    value: 110
}, {
    name: '海南',
    value: 92
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
        text: '山科大2020年分省本科招生计划（青岛校区）',
        subtext: '数据来源:山东科技大学官网(单位/人)',
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
            return `${name}:<br>拟招生人数:${value} `
        }

    },
    //图例
    visualMap: {
        min: 19000,
        max: 70000,
        left: 16,
        bottom: 40,
        showLabel: !0,
        text: ["拟招生人数"],
        pieces: [{
            gt: 1000,
            label: "> 1000人",
            color: "#7f1100"
        }, {
            gte: 100,
            lte: 200,
            label: "100 - 200 人",
            color: "#ff5428"
        }, {
            gte: 80,
            lt: 100,
            label: "80 - 100 人",
            color: "#ed6d3d"
        }, {
            gt: 60,
            lt: 80,
            label: "60 - 80 人",
            color: "#ff8c71"
        }, {
            gt: 40,
            lt: 60,
            label: "40 - 60 人",
            color: "#ffd768"
        }, {
            gt: 20,
            lt: 40,
            label: "20 - 40 人",
            color: "#fddea5"
        }, {
            gt: 0,
            lt: 20,
            label: "< 20 人",
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