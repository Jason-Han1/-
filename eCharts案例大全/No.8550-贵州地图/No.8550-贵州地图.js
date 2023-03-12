var uploadedDataURL = "/asset/get/s/data-1623054469980-RoWoKFH3M.geojson";

window.dataList = [{ //地图注册统计分析
    "name": "贵阳市",
    "value": "100"
}, {
    "name": "六盘水市",
    "value": "50"
}, {
    "name": "遵义市",
    "value": "0"
}, {
    "name": "安顺市",
    "value": "0"
}, {
    "name": "毕节市",
    "value": "0"
}, {
    "name": "铜仁市",
    "value": "0"
}, {
    "name": "黔西南州",
    "value": "0"
}, {
    "name": "黔东南州",
    "value": "0"
}, {
    "name": "黔南州",
    "value": "0"
}];
option = {
    backgroundColor: '#041c4e',
    title: {
        top: 10,
        text: '贵州地图',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        show: true,
        formatter: function(params) {
            return params.name + '：' + params.data['value'] + '人'
        },
        textStyle: {
            fontSize: 25
        }
    },
    // visualMap: {
    //     min: 0,
    //     max: 1000,
    //     left: 56,
    //     bottom: 40,
    //      itemGap:50,
    //     orient: 'horizontal',
    //     itemWidth: 10,
    //     itemHeight: 10,
    //     showLabel: !0,
    //     text: ["高", "低"],
    //     pieces: [{
    //         gt: 100,
    //         label: "> 100 人",
    //         color: "#7f1100"
    //     }, {
    //         gte: 10,
    //         lte: 100,
    //         label: "10 - 100 人",
    //         color: "#ff5428"
    //     }, {
    //         gte: 1,
    //         lt: 10,
    //         label: "1 - 9 人",
    //         color: "#ff8c71"
    //     }, {
    //         gt: 0,
    //         lt: 1,
    //         label: "疑似",
    //         color: "#ffd768"
    //     }, {
    //         value: 0,
    //         color: "rgba(26,82,231, 1)"
    //     }],
    //     show: !0
    // },
    
      visualMap: {
        type: 'continuous',
        orient: 'horizontal',
        itemWidth: 10,
        itemHeight: 80,
        text: ['高', '低'],
        showLabel: true,
        seriesIndex: [0],
        min: 0,
        max: 100,
        inRange: {
            color: ['rgba(26,82,231, 1)', 'rgba(255,163,54, 1)', 'rgba(254,100,70, 1)']
        },
        textStyle: {
            color: '#7B93A7'
        },
        bottom: 30,
        left: 'left',
    },
    // visualMap: {
    //     min: 0,
    //     max: 1000,
    //     left: "center",
    //     bottom: 40,
    //     orient: 'horizontal',
    //     itemWidth: 20,
    //     itemHeight: 20,
    //     itemGap: 30,
    //     showLabel: !0,
    //     text: ["高", "低 "],
    //     textStyle: {
    //         color: '#fff',
    //         fontSize: 25
    //     },
    //     pieces: [{
    //         gt: 100,
    //         label: "> 100 ",
    //         color: "#7f1100"
    //     }, {
    //         gte: 10,
    //         lte: 100,
    //         label: "10 - 100 ",
    //         color: "#ff5428"
    //     }, {
    //         gte: 1,
    //         lt: 10,
    //         label: "1 - 9 ",
    //         color: "#ff8c71"
    //     }, {
    //         gt: 0,
    //         lt: 1,
    //         label: "意向 ",
    //         color: "#ffd768"
    //     }, {
    //         value: "0 ",
    //         color: "rgba(26,82,231, 1)"
    //     }],
    //     show: !0
    // },
    geo: {
        map: "贵州",
        aspectScale: 1.23,
        roam: !1,
        right: '30',
        scaleLimit: {
            min: 1,
            max: 2
        },
        zoom: 1.23,
        // top: 120,
        label: {
            normal: {
                show: !0,
                fontSize: "25",
                color: "#fff"
            },
            emphasis: {
                color: 'white',
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1,
                // shadowColor: 'rgba(128, 217, 248, .2)',
                shadowOffsetX: -12,
                shadowOffsetY: 12,
                shadowBlur: 1,
            },
            emphasis: {
                areaColor: '#0b38b0'
            }
        },
    },
    series: [{
        name: "确诊病例",
        type: "map",
        geoIndex: 0,
        data: window.dataList
    }]
};