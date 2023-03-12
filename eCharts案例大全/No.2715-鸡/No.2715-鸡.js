window.dataList = [{
        name: "南海诸岛",
        value: 0
    },
    {
        name: '北京',
        value: 5100
    },
    {
        name: '天津',
        value: 13
    },
    {
        name: '上海',
        value: 250000
    },
    {
        name: '重庆',
        value: 105
    },
    {
        name: '河北',
        value: 1105
    },
    {
        name: '河南',
        value: 110005
    },
    {
        name: '云南',
        value: 45
    },
    {
        name: '辽宁',
        value: 15
    },
    {
        name: '黑龙江',
        value: 1955
    },
    {
        name: '湖南',
        value: 69
    },
    {
        name: '安徽',
        value: 60
    },
    {
        name: '山东',
        value: 39
    },
    {
        name: '新疆',
        value: 4
    },
    {
        name: '江苏',
        value: 31
    },
    {
        name: '浙江',
        value: 25000
    },
    {
        name: '江西',
        value: 36
    },
    {
        name: '湖北',
        value: 1052
    },
    {
        name: '广西',
        value: 33
    },
    {
        name: '甘肃',
        value: 7
    },
    {
        name: '山西',
        value: 9
    },
    {
        name: '内蒙古',
        value: 7
    },
    {
        name: '陕西',
        value: 22
    },
    {
        name: '吉林',
        value: 4
    },
    {
        name: '福建',
        value: 18
    },
    {
        name: '贵州',
        value: 5
    },
    {
        name: '广东',
        value: 25000
    },
    {
        name: '青海',
        value: 1
    },
    {
        name: '西藏',
        value: 0
    },
    {
        name: '四川',
        value: 44
    },
    {
        name: '宁夏',
        value: 4
    },
    {
        name: '海南',
        value: 22
    },
    {
        name: '台湾',
        value: 3
    },
    {
        name: '香港',
        value: 5
    },
    {
        name: '澳门',
        value: 5
    }
];
option = {
    tooltip: {
        triggerOn: "click",
        formatter: function(e, t, n) {
            return .5 == e.value ? e.name + "：有机器" : e.seriesName + "<br />" + e.name + "：" + e.value
        }
    },
    visualMap: {
        min: 0,
        max: 25000,
        left: 26,
        bottom: 40,
        showLabel: !0,
       // text: ["高", "低"],
        pieces: [{
            gt: 2000,
            label: "> 20000",
            color: "#018666"
        }, {
            gt: 1000,
            lt: 2000,
            label: "10000-20000",
            color: "#5EBDAD"
        },  {
            gt: 1000,
            lt: 2000,
            label: "1000-10000",
            color: "#93C3CA"
        }, {
            gte: 100,
            lt: 1000,
            label: "100-1000",
            color: "#BAB9F8"
        }, {
            gte: 50,
            lt: 100,
            label: "50-100",
            color: "#EDBAC4"
        }, {
            gt: 0,
            lt: 50,
            label: "0-50",
            color: "#FFD3A8"
        }, {
            value: 0,
            color: "#eeeeee",
            borderColor: "#B7DBD2" 
        }],
        show: !0
    },
    geo: {
        map: "china",
        roam: !1,
        scaleLimit: {
            min: 1,
            max: 2
        },
        zoom: 1.23,
        top: 120,
        label: {
            normal: {
                show: !1,  //1不显示，0显示
                fontSize: "14",
                color: "#ffffff"//字体颜色
            }
        },
        itemStyle: {
            normal: {
                //shadowBlur: 50,
                //shadowColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: "#666666"   //描边颜色
            },
            emphasis: {
                areaColor: "#B7DBD2",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 0
            }//鼠标移入颜色
        }
    },
    series: [{
        name: "IDC资源全国分布图",
        type: "map",
        geoIndex: 0,
        data: window.dataList
    }]
};