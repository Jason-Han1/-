function colorAreaObj(name, color) {
    this.name = name;
    this.itemStyle = {
        normal: {
            color: color,
            show: false,
        },
        emphasis: {
            color: color,
            show: false,
        }
    };
    this.label = {
        normal: {
            show: true,
        },
        emphasis: {
            show: true,
        }
    }
}

var colorAreaConfig = [
    //西北
    {
        name: '甘肃',
        color: "rgba(161,132,98, 1)"
    },
    {
        name: '新疆',
        color: "rgba(161,132,98, 1)"
    },
    {
        name: '青海',
        color: "rgba(161,132,98, 1)"
    },
    //北方
    {
        name: '宁夏',
        color: "#cb5764"
    },
    {
        name: '内蒙古',
        color: "#cb5764"
    },
    {
        name: '河北',
        color: "#cb5764"
    },
    {
        name: '北京',
        color: "#cb5764"
    },
    {
        name: '天津',
        color: "#cb5764"
    },
    //东北
    {
        name: '黑龙江',
        color: "#ab6b5f"
    },
    {
        name: '吉林',
        color: "#ab6b5f"
    },
    {
        name: '辽宁',
        color: "#ab6b5f"
    },
    //中部
    {
        name: '山西',
        color: "#d2b01b"
    },
    {
        name: '湖北',
        color: "#d2b01b"
    },
    {
        name: '陕西',
        color: "#d2b01b"
    },
    {
        name: '湖南',
        color: "#d2b01b"
    },
    {
        name: '河南',
        color: "#d2b01b"
    },
    //南方
    {
        name: '广西',
        color: "#48bfdf"
    },
    {
        name: '广东',
        color: "#48bfdf"
    },
    {
        name: '海南',
        color: "#48bfdf"
    },
    //西南
    {
        name: '四川',
        color: "#332c70"
    },
    {
        name: '重庆',
        color: "#332c70"
    },
    {
        name: '云南',
        color: "#332c70"
    },
    {
        name: '贵州',
        color: "#332c70"
    },
    {
        name: '西藏',
        color: "#332c70"
    },
    //东部
    {
        name: '江苏',
        color: "#72c39a"
    },
    {
        name: '江西',
        color: "#72c39a"
    },
    {
        name: '安徽',
        color: "#72c39a"
    },
    {
        name: '山东',
        color: "#72c39a"
    },
    {
        name: '福建',
        color: "#72c39a"
    },
    {
        name: '浙江',
        color: "#72c39a"
    },
    {
        name: '上海',
        color: "#72c39a"
    },
    {
        name: '台湾',
        color: "#72c39a"
    },
];

var data = [];

data = colorAreaConfig.map(function(v, i) {
    return new colorAreaObj(v.name, v.color)
})

option = {
    legend: {
        orient: 'horizontal',
        left: '160',
        data: []
    },
    "series": [{
        "name": "中国",
        "type": "map",
        "mapType": "china",
        "zoom": 1.2,
        roam: true,
        "selectedMode": false,
        "layoutCenter": ['50%', '53%'],
        "layoutSize": "102%",
        "label": {
            "normal": {
                "show": true,
                "textStyle": {
                    "color": "#fff",
                    "fontSize": "12",
                    'fontFamily': 'Microsoft YaHei'
                }
            },
            "emphasis": {
                "show": true,
                "textStyle": {
                    "color": "#fff",
                    "fontSize": "12"
                }
            }
        },
        "itemStyle": {
            "normal": {
                //"areaColor": "rgba(51, 69, 89, .5)",
                "borderWidth": 1.5,
                "borderColor": "#fff",
                "textStyle": {
                    "color": "#fff",
                    "fontSize": "12"
                }
            },
            "emphasis": {
                "areaColor": "rgba(51, 69, 89, .5)",
                "textStyle": {
                    "color": "#fff",
                    "fontSize": "18"
                },
                "opacity": 1
            }
        },
        "data": data
    }]
}