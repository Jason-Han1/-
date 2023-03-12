var uploadedDataURL = "/asset/get/s/data-1497842267980-HJ4Pz6V7b.json";
var name = 'jingjinji';


$.get(uploadedDataURL, function(geoJson) {


    echarts.registerMap(name, geoJson);
    myChart.setOption(option = {

        title: {
            text: "京津冀数量分布",
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },

        visualMap: {
            min: 0,
            max: 100,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: true,
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
        series: [{
            type: 'map',
            mapType: name,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {

                normal: {
                    borderColor: '#389BB7',
                    areaColor: '#fff',
                },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            },
            animation: false,

            data: [{
                    name: '张家口市',
                    value: 100
                }, {
                    name: '房山区',
                    value: 10
                }, {
                    name: '宁河县',
                    value: 20
                }, {
                    name: '保定市',
                    value: 30
                }, {
                    name: '石家庄市',
                    value: 40
                }, {
                    name: '廊坊市',
                    value: 41
                }, {
                    name: '延庆县',
                    value: 15
                }, {
                    name: '密云县',
                    value: 25
                }, {
                    name: '武清区',
                    value: 35
                }, {
                    name: '北辰区',
                    value: 35
                }, {
                    name: '门头沟区',
                    value: 35
                }, {
                    name: '蓟县',
                    value: 35
                }, {
                    name: '秦皇岛市',
                    value: 35
                }, {
                    name: '通州区',
                    value: 35
                }, {
                    name: '昌平区',
                    value: 35
                }, {
                    name: '怀柔区',
                    value: 35
                }, {
                    name: '衡水市',
                    value: 35
                }, {
                    name: '邯郸市',
                    value: 35
                }, {
                    name: '邢台市',
                    value: 45
                }, {
                    name: '承德市',
                    value: 20
                }, {
                    name: '唐山市',
                    value: 35
                }, {
                    name: '沧州市',
                    value: 15
                }, {
                    name: '宝坻区',
                    value: 45
                },

            ]

        }],

    });
});