var uploadedDataURL = "/asset/get/s/data-1469178154210-H1GNZvkO.json";

function randomData() {
    return Math.round(Math.random() * 1000);
}
$.get(uploadedDataURL, function(d) {
    echarts.registerMap('china', d);
    option = {
        title: {
            text: '获取地图缩放事件的例子',
            subtext: 'data-visual.cn',
            sublink: 'http://data-visual.cn',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
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
            name: 'iphone3',
            type: 'map',
            mapType: 'china',
            roam: true,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                    name: '北京',
                    value: randomData()
                },
                {
                    name: '天津',
                    value: randomData()
                },
                {
                    name: '上海',
                    value: randomData()
                },
                {
                    name: '重庆',
                    value: randomData()
                },
                {
                    name: '河北',
                    value: randomData()
                },
                {
                    name: '河南',
                    value: randomData()
                },
                {
                    name: '云南',
                    value: randomData()
                },
                {
                    name: '辽宁',
                    value: randomData()
                },
                {
                    name: '黑龙江',
                    value: randomData()
                },
                {
                    name: '湖南',
                    value: randomData()
                },
                {
                    name: '安徽',
                    value: randomData()
                },
                {
                    name: '山东',
                    value: randomData()
                },
                {
                    name: '新疆',
                    value: randomData()
                },
                {
                    name: '江苏',
                    value: randomData()
                },
                {
                    name: '浙江',
                    value: randomData()
                },
                {
                    name: '江西',
                    value: randomData()
                },
                {
                    name: '湖北',
                    value: randomData()
                },
                {
                    name: '广西',
                    value: randomData()
                },
                {
                    name: '甘肃',
                    value: randomData()
                },
                {
                    name: '山西',
                    value: randomData()
                },
                {
                    name: '内蒙古',
                    value: randomData()
                },
                {
                    name: '陕西',
                    value: randomData()
                },
                {
                    name: '吉林',
                    value: randomData()
                },
                {
                    name: '福建',
                    value: randomData()
                },
                {
                    name: '贵州',
                    value: randomData()
                },
                {
                    name: '广东',
                    value: randomData()
                },
                {
                    name: '青海',
                    value: randomData()
                },
                {
                    name: '西藏',
                    value: randomData()
                },
                {
                    name: '四川',
                    value: randomData()
                },
                {
                    name: '宁夏',
                    value: randomData()
                },
                {
                    name: '海南',
                    value: randomData()
                },
                {
                    name: '台湾',
                    value: randomData()
                },
                {
                    name: '香港',
                    value: randomData()
                },
                {
                    name: '澳门',
                    value: randomData()
                }
            ]
        }]
    };
    if (option && typeof option === "object") {
        var startTime = +new Date();
        myChart.setOption(option, true);
        var endTime = +new Date();
        var updateTime = endTime - startTime;
        console.log("Time used:", updateTime);
    }
});

myChart.on('georoam', function(params) {
    // 控制台打印数据的名称
    console.log(params);
});