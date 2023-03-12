myChart.showLoading();
$.get('https://geo.datav.aliyun.com/areas_v2/bound/100000_full.json', function(chinaJSON) {
    myChart.hideLoading();
    echarts.registerMap('newChina', chinaJSON);

    option = {
        tooltip: {
            enterable: true,
            confine: true, // 将 tooltip 框限制在图表的区域内
            textStyle: {
                color: "#fff",
                decoration: "none"
            },
            formatter: p => {
                const {
                    name,
                    value,
                    color
                } = p;
                const val = Array.isArray(value) ? value[0] : value;
                const tipHtml = `<span style="background-color: ${color};" class="tooltip-dot"></span>${name}：${val || 0}`;
                const tipNoneHtml = `<span style="background-color: ${color};" class="tooltip-dot"></span>${name}`; // 当暂无下钻数据时，只显示名称，不显示数据
                return isNaN(val) ? tipNoneHtml : tipHtml;
            }
        },
        visualMap: [{
            show: true,
            type: "continuous",
            min: 0,
            max: 3200,
            text: ["High", "Low"],
            right: 20,
            bottom: 20,
            calculable: true,
            seriesIndex: 0,
            inRange: {
                color: ["#1183f7", "#138df5", "#1598f1", "#159aec", "#169fec", "#17a5ea", "#4de9ff"]
            },
            textStyle: {
                color: "#fff",
                fontSize: 16,
                fontFamily: "Microsoft YaHei"
            }
        }],
        series: [{
            type: "map3D",
            map: "newChina",
            roam: true,
            barWidth: 20,
            label: {
                show: true,
                textStyle: {
                    color: "#fff",
                    fontSize: 12,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    lineHeight: 20,
                    padding: [2, 10]
                }
            },
            itemStyle: {
                areaColor: "red",
                borderWidth: 1,
                borderColor: "#fff"
            },
            emphasis: {
                label: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 12,
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        lineHeight: 20,
                        padding: [2, 10]
                    }
                },
                itemStyle: {
                    areaColor: "red",
                    borderWidth: 1,
                    borderColor: "#fff"
                }
            },
            light: {
                main: {
                    color: "#fff", // 光照颜色
                    intensity: 1.2, // 光照强度
                    shadowQuality: "low", // 阴影亮度
                    shadow: false, // 是否显示阴影
                    beta: 5
                },
                ambient: {
                    intensity: 0.3
                }
            },
            regionHeight: 2,
            data: [{
                    name: "北京市",
                    value: [100]
                },
                {
                    name: "天津市",
                    value: [200]
                },
                {
                    name: "河北省",
                    value: [300]
                },
                {
                    name: "山西省",
                    value: [400]
                },
                {
                    name: "内蒙古自治区",
                    value: [500]
                },
                {
                    name: "辽宁省",
                    value: [600]
                },
                {
                    name: "吉林省",
                    value: [700]
                },
                {
                    name: "黑龙江省",
                    value: [800]
                },
                {
                    name: "上海市",
                    value: [900]
                },
                {
                    name: "江苏省",
                    value: [1000]
                },
                {
                    name: "浙江省",
                    value: [1100]
                },
                {
                    name: "安徽省",
                    value: [1200]
                },
                {
                    name: "福建省",
                    value: [1300]
                },
                {
                    name: "江西省",
                    value: [1400]
                },
                {
                    name: "山东省",
                    value: [1500]
                },
                {
                    name: "河南省",
                    value: [1600]
                },
                {
                    name: "湖北省",
                    value: [1700]
                },
                {
                    name: "湖南省",
                    value: [1800]
                },
                {
                    name: "广东省",
                    value: [1900]
                },
                {
                    name: "广西壮族自治区",
                    value: [2000]
                },
                {
                    name: "海南省",
                    value: [2100]
                },
                {
                    name: "重庆市",
                    value: [2200]
                },
                {
                    name: "四川省",
                    value: [2300]
                },
                {
                    name: "贵州省",
                    value: [2400]
                },
                {
                    name: "云南省",
                    value: [2500]
                },
                {
                    name: "西藏自治区",
                    value: [2600]
                },
                {
                    name: "陕西省",
                    value: [2700]
                },
                {
                    name: "甘肃省",
                    value: [2800]
                },
                {
                    name: "青海省",
                    value: [2900]
                },
                {
                    name: "宁夏回族自治区",
                    value: [3000]
                },
                {
                    name: "新疆维吾尔自治区",
                    value: [3100]
                },
                {
                    name: "台湾省",
                    value: [3200]
                },
                {
                    name: "香港特别行政区",
                    value: [3300]
                },
                {
                    name: "澳门特别行政区",
                    value: [3400]
                }
            ]
        }]
    }
    myChart.setOption(option);
})