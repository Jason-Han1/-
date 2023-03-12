

option = {
    title: {
        text: '热点分析',
        link: 'https://www.baidu.com/s?wd=' + encodeURIComponent('ECharts'),
        x: 'center',
        textStyle: {
            fontSize: 23
        }

    },
    backgroundColor: '#F7F7F7',
    tooltip: {
        show: true
    },
    toolbox: {
        feature: {
            saveAsImage: {
                iconStyle: {
                    normal: {
                        color: '#FFFFFF'
                    }
                }
            }
        }
    },
    series: [{
        name: '热点分析',
        type: 'wordCloud',
        //size: ['9%', '99%'],
        sizeRange: [6, 66],
         rotationRange: [0, 90],
        rotationStep: 90,
        //textRotation: [0, 45, 90, -45],
       
        textPadding: 0,
      
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [{
            name: "Jayfee",
            value: 666
        }, {
            name: "Nancy",
            value: 520
        }]
    }]
};

var JosnList = [];

JosnList.push({
    name: "Jayfee",
    value: 666
}, {
    name: "Nancy",
    value: 520
}, {
    name: "生活资源",
    value: "999"
}, {
    name: "供热管理",
    value: "888"
}, {
    name: "供气质量",
    value: "777"
}, {
    name: "生活用水管理",
    value: "688"
}, {
    name: "一次供水问题",
    value: "588"
}, {
    name: "交通运输",
    value: "516"
}, {
    name: "城市交通",
    value: "515"
}, {
    name: "环境保护",
    value: "483"
}, {
    name: "房地产管理",
    value: "462"
}, {
    name: "城乡建设",
    value: "449"
}, {
    name: "社会保障与福利",
    value: "429"
}, {
    name: "社会保障",
    value: "407"
}, {
    name: "文体与教育管理",
    value: "406"
}, {
    name: "公共安全",
    value: "406"
}, {
    name: "公交运输管理",
    value: "386"
}, {
    name: "出租车运营管理",
    value: "385"
}, {
    name: "供热管理",
    value: "375"
}, {
    name: "市容环卫",
    value: "355"
}, {
    name: "自然资源管理",
    value: "355"
}, {
    name: "粉尘污染",
    value: "335"
});

option.series[0].data = JosnList;


 //myChart.setOption(option);
 myChart.on('click', function (params) {
                //alert((params.name));
                window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));

            });