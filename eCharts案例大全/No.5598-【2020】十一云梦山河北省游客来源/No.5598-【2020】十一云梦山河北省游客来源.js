var uploadedDataURL = "/asset/get/s/data-1526018707993-B129M3z0f.json";
var nameMap = '河北省';
window.dataList = [ {
        name: '邢台市',
        value: 808
    },
    {
        name: '石家庄市',
        value: 560
    },
    {
        name: '秦皇岛市',
        value: 189
    },
    {
        name: '张家口市',
        value: 133
    },
    {
        name: '衡水市',
        value: 108
    },
    {
        name: '沧州市',
        value: 76
    },
    {
        name: '邯郸市',
        value: 70
    },
    {
        name: '保定市',
        value: 23
    },
    {
        name: '唐山市',
        value: 11
    },
    {
        name: '廊坊市',
        value: 5
    },
    {
        name: '承德市',
        value: 3
    }
];

//GDP
var optionMap = {
    backgroundColor: "#fff",
    grid: {
        // left:'2%',
        right: '10%',
        bottom: '3%',
        width: '20%',
        height: '50%'
    },
    tooltip: {
        // triggerOn: "click",
        formatter: function(e, t, n) {
            return '.5' == e.value ? e.name + "：" : e.seriesName +
                "<br />" + e.name + "：" + (e.value ? e.value : 0) + '人'
        }
    },
    visualMap: {
        min: 0,
        max: 1000,
        left: 26,
        bottom: 30,
        showLabel: !0,
        text: ["高", "低"],
        pieces: [{
            gt: 200,
            label: "> 200人",
            color: "#7f1100"
        }, {
            gte: 100,
            lte: 200,
            label: "100 - 200人",
            color: "#ff5428"
        }, {
            gte: 50,
            lt: 100,
            label: "50 - 100人",
            color: "#ff8c71"
        }, {
            gt: 1,
            lt: 50,
            label: "1 - 50人",
            color: "#ffd768"
        }, {
            value: 0,
            color: "#ffffff"
        }],
        show: !0
    },
    geo: {
        map: nameMap,
        // center: [105.97, 30.71],
        roam: !1,
        scaleLimit: {
            min: 1,
            max: 2
        },
        zoom: 1.1,
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
                borderColor: "rgba(0, 0, 0, 0.5)"
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
        name: "十一游客来源",
        type: 'map',
        map: nameMap,
        // aspectScale: 0.75, //长宽比
        // left: '2%',
        // // right: '35%',
        // top: 10,
        // width: '90%',
        // height: '90%',
        roam: false,
        // itemStyle: {
        //     normal: {
        //         areaColor: '#fff',
        //         borderColor: '#00effc',
        //         borderWidth: 1.5,
        //         label: {
        //             show: true,
        //             color: '#fff',
        //         },

        //         emphasis: {
        //             label: {
        //                 show: true
        //             }
        //         }
        //     }
        // },
        geoIndex: 0,
        data: window.dataList
    }, ]

};

$.get(uploadedDataURL, function(gdMap) {
    echarts.registerMap(nameMap, gdMap);
    myChart.setOption(optionMap, true);
});