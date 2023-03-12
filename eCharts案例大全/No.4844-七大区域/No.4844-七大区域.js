var uploadedDataURL = "/asset/get/s/data-1606468024616-H0BU73v2g.png";
let dataset = {
    source: [
        ["省份", "大区名", "补货绿", "日环比", "渐变色"],
        ["新疆", "新疆大区", "64", "10", "45"],
        ["山东", "山东大区", "96", "61", "67"],
        ["云南", "西南大区", "34", "69", "89"],
        ["西藏", "西南大区", "34", "69", "46"],
        ["重庆", "西南大区", "34", "69", "89"],
        ["四川", "西南大区", "34", "69", "28"],
        ["贵州", "西南大区", "34", "69", "46"],
        ["河北", "北方大区", "67", "8", "57"],
        ["北京", "北方大区", "67", "8", "28"],
        ["天津", "北方大区", "67", "8", "48"],
        ["辽宁", "东北大区", "56", "39", "98"],
        ["吉林", "东北大区", "56", "39", "23"],
        ["黑龙江", "东北大区", "56", "39", "6"],
        ["山西", "华北大区", "86", "87", "12"],
        ["内蒙古", "华北大区", "86", "87", "67"],
        ["宁夏", "华北大区", "86", "87", "38"],
        ["陕西", "华中大区", "68", "95", "93"],
        ["江西", "华中大区", "68", "95", "48"],
        ["河南", "华中大区", "68", "95", "28"],
        ["湖北", "华中大区", "68", "95", "67"],
        ["湖南", "华中大区", "68", "95", "57"],
        ["甘肃", "华中大区", "68", "95", "28"],
        ["青海", "华中大区", "68", "95", "89"],
        ["台湾", "华东大区", "90", "28", "29"],
        ["江苏", "华东大区", "90", "28", "18"],
        ["浙江", "华东大区", "90", "28", "89"],
        ["安徽", "华东大区", "90", "28", "77"],
        ["福建", "华东大区", "90", "28", "67"],
        ["广东", "华东大区", "90", "28", "78"],
        ["广西", "华东大区", "90", "28", "10"],
        ["海南", "华东大区", "90", "28", "47"],
        ["上海", "华东大区", "90", "28", "38"],
        ["香港", "华东大区", "90", "28", "90"],
        ["澳门", "华东大区", "90", "28", "26"]
    ]
}
option = {
    dataset: dataset,
    tooltip: {
        triggerOn: "mousemove",
        backgroundColor: "transparent",
        alwaysShowContent: true,
        formatter: function(params) {
            let html = `<div style="width:140px;height:80px;background-image:url(${uploadedDataURL});background-size:100% 100%;background-repeat:no-repeat;background-position:center;padding-top:5px;padding-left:10px;box-sizing:border-box;">
                      <div style="width:130px;height:20px;color:#f9f500">${params.data[1]}<div>
                      <div style="width:130px;height:10px;">
                          <div style="width:120px;display:flex;justify-content:space-between;">
                              <span style="color:#fff">补货可得率</span>
                              <span style="color:#0ae9ff">${params.data[2]}%</span>
                          </div>
                      <div>
                      <div style="width:100px;height:10px;">
                          <div style="width:120px;display:flex;justify-content:space-between;">
                              <span style="color:#fff">日环比</span>
                              <span style="color:#0ae9ff">${params.data[3]}%</span>
                          </div>
                      <div>
                  </div>`
            return html;
        },

    },
    visualMap: {
        min: 0,
        max: 100,
        left: 26,
        bottom: 40,
        showLabel: !0,
        text: ["高", "低"],
        "inRange": {
            "color": [
                "#124754",
                "#4ed9f0"
            ]
        },
        show: false
    },
    geo: {
        map: "china",
        roam: 1,
        scaleLimit: {
            min: 1,
            max: 2
        },
        zoom: 1,
        label: {
            show: true,
            color: "#fff"
        },
        emphasis: {
            label: {
                show: true,
                color: "#fff"
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 1,
                shadowColor: 'rgba(18, 32, 70,0.4)',
                borderColor: "rgba(255,255,255)"
            },
            emphasis: {
                areaColor: "#f9f500",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 0
            }
        },
        regions: [{
            name: "南海诸岛",
            itemStyle: {
                // 隐藏地图
                normal: {
                    opacity: 0, // 为 0 时不绘制该图形
                }
            },
            label: {
                show: false // 隐藏文字
            }
        }]
    },
    series: [{
        name: "地域分布",
        type: "map",
        geoIndex: 0
    }]
};
myChart.setOption(option);

myChart.on('mouseover', function(params) {
    var city = params.name;
    let t = dataset.source.find(e => e[0] === city)[1]
    for (let i = 0; i < dataset.source.length; i++) {
        if (dataset.source[i][1] == t) {
            myChart.dispatchAction({
                type: 'highlight',
                name: dataset.source[i][0]
            });
        }
    }
});

myChart.on('mouseout', function(params) {
    var city = params.name;
    let t = dataset.source.find(e => e[0] === city)[1]
    for (let i = 0; i < dataset.source.length; i++) {
        if (dataset.source[i][1] == t) {
            myChart.dispatchAction({
                type: 'downplay',
                name: dataset.source[i][0]
            });
        }
    }
});