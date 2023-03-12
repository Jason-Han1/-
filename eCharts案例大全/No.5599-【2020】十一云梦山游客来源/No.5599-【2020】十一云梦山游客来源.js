window.dataList = [
    {name: "河北", value: 1986},
    {name: "山西", value: 213},
    {name: "山东", value: 133},
    {name: "河南", value: 71},
    {name: "天津", value: 40},
    {name: "北京", value: 25},
    {name: "江苏", value: 13},
    {name: "广东", value: 10},
    {name: "移动", value: 7},
    {name: "陕西", value: 6},
    {name: "重庆", value: 4},
    {name: "四川", value: 4},
    {name: "广西", value: 3},
    {name: "云南", value: 3},
    {name: "浙江", value: 3},
    {name: "安徽", value: 3},
    {name: "湖北", value: 2},
    {name: "江西", value: 2},
    {name: "青海", value: 2},
    {name: "内蒙古", value: 2},
    {name: "甘肃", value: 1},
    {name: "福建", value: 1},
    {name: "黑龙江", value: 1},
    {name: "湖南", value: 1},
    {name: "吉林", value: 1},
    {name: "辽宁", value: 1},
];
option = {
    tooltip: {
        // triggerOn: "click",
        formatter: function(e, t, n) {
            return '.5' == e.value ? e.name + "：" : e.seriesName 
            + "<br />" + e.name + "：" + (e.value?e.value:0) + '人'
        }
    }, 
    //右边那三个图标
    toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false,title:'hello',textColor:"#777"},
                restore: {},
                saveAsImage: {}
            }
        },
    //左边的图标
    visualMap: {
        min: 0,
        max: 100000,
        left: 26,
        bottom: 30,
        showLabel: !0,
        text: ["高", "低"],
        pieces: [{
            gt: 10000,
            label: "> 10000人",
            color: "#7f1100"
        }, {
            gte: 1000,
            lte: 10000,
            label: "1000 - 10000人",
            color: "#ff5428"
        }, {
            gte: 100,
            lt: 1000,
            label: "100 - 1000人",
            color: "#ff8c71"
        }, {
            gt: 1,
            lt: 100,
            label: "1 - 100人",
            color: "#ffd768"
        }, {
            value: 0,
            color: "#ffffff"
        }],
        show: !0
    },
    grid: [{
                right: '5%',
                top: '20%',
                bottom: '10%',
                width: '20%'
            },
        
        ],
    
    geo: {
        map: "china",
        center: [105.97, 30.71],
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
        type: "map",
        geoIndex: 0,
        data: window.dataList}]
};