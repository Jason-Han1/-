var dataList = [{
        name: '广东',
        value: 623.1
    },
    {
        name: '江西',
        value: 615.6
    },
    {
        name: '安徽',
        value: 731.1
    },
    {
        name: '四川',
        value: 834.6
    },
    {
        name: '江苏',
        value: 400.6
    },
    {
        name: '吉林',
        value: 813.9
    },
    {
        name: '河北',
        value: 648
    },
    {
        name: '山东',
        value: 50.9
    },
    {
        name: '上海',
        value: 774.7
    },
    {
        name: '北京',
        value: 725.7
    }
];
var provincedata = ["北京", "上海", "天津", "重庆", "香港", "澳门"];
option = {
    tooltip: {
        triggerOn: "click",
        formatter: function(e, t, n) {

            if (provincedata.indexOf(e.data.name) > -1) {
                return .5 == e.value ? e.name + "：销售额" : e.data.name + "<br />" + "销售额" + "：" + e.value
            } else {
                return .5 == e.value ? e.name + "：销售额" : e.data.name + "省<br />" + "销售额" + "：" + e.value
            }
        }

    },
    visualMap: {
        min: 0,
        max: 1000,
        left: 26,
        bottom: 40,
        showLabel: true,
        text: ["高", "低"],
        pieces: [{
            gt: 700,
            label: "> 700",
            color: "#57B8F6"
        }, {
            gte: 500,
            lte: 700,
            label: "500 - 700 ",
            color: "#62BDF6"
        }, {
            gte: 200,
            lt: 500,
            label: "200 - 500",
            color: "#9FD7F8"
        }, {
            gt: 0,
            lt: 200,
            label: "0 - 200",
            color: "#B6E0F6"
        }, {
            value: 0,
            color: "#D3D8D2"
        }],
        show: false
    },
    series: [{
        hoverAnimation: false,
        name: 'chinaMap',
        type: 'map',
        map: 'world',
        roam: true,
        itemStyle: {
            normal: {
                borderColor: '#FFFFFF',
                areaColor: "#D3D8D2"
            },
            emphasis: {
                label: {
                    show: false
                },
                areaColor: "#D3D8D2"
            }
        },
        center: [115.97, 29.71],
        zoom: 3,
        data: dataList,
        zlevel: 1
    }]
}
var chart = echarts.init(document.getElementById('chart-panel'));
chart.on("mouseover", function(params) {
    var name = params.name;
    var pLength = dataList.length;
    for (var i = 0; i < pLength; i++) {
        var pArr = dataList[i];
        if (pArr.name.indexOf(name) == -1) {
            continue;
        } else {
            chart.dispatchAction({
                type: "geoUnSelect",
                name: pArr.name
            });
        }
    }

});