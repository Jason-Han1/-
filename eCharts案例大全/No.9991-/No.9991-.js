let data = [{
    "name": "测量工",
    "value": 3
}, {
    "name": "电焊工",
    "value": 2
}, {
    "name": "钢筋工",
    "value": 26
}, {
    "name": "沥青工",
    "value": 24
}, {
    "name": "安装工",
    "value": 12
}, {
    "name": "起重工",
    "value": 11
}, {
    "name": "养护工",
    "value": 3
}, {
    "name": "其它",
    "value": 2
}];
let Type = [];
data.forEach(function(item, index) {
    Type.push(item.name)

});
let color = ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"];


option = {
    backgroundColor: '#000',
    animation: true,

    legend: {
        width: "70%",
        left: "center",
        textStyle: {
            color: "#fff",
            fontSize: 16
        },
        icon: "circle",
        right: "0",
        bottom: "0",
        padding: [20, 10],
        itemGap: 20,
        data: Type,
    },
    series: [{
        type: "pie",
        center: ["50%", "50%"],
        radius: ["40%", "53%"],
        color: color,
        startAngle: 0,
        label: {
            "normal": {
                formatter: "{b|{b}}{per|{d}%} ",
                rich: {
                    b: {
                        color: "#b3e5ff",
                        fontSize: 14,
                    },
                    per: {
                        color: "#FDF44E",
                        fontSize: 14,
                        padding: [5, 5]
                    }
                },
                textStyle: {
                    color: "#fff",
                    fontSize: 16
                }
            }
        },
        emphasis: {
            label: {
                show: true,
                formatter: "{per|{d}%}",
                rich: {
                    per: {
                        color: "#FDF44E",
                        fontSize: 18,
                        padding: [5, 5]
                    }
                }
            }
        },
        data: data
    }]
}