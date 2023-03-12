var uploadedDataURL = "/asset/get/s/data-1519188124693-rkro_O5vz.json";
// var uploadedDataURL = "/asset/get/s/data-1519004377467-ByWkioPwf.json";

myChart.showLoading();
cityname=[];
$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('chinacity', geoJson);
    var mapFeatures = echarts.getMap('chinacity').geoJson.features;
    console.log('==========mapFeatures==============')
    console.log(mapFeatures)
    mapFeatures.forEach(function(v) {
        // 地区名称
        var name = v.properties.name;
        cityname.push(name)
    });
    console.log(cityname)
    myChart.setOption(option = {
        // backgroundColor: '#021926',
        title: {
            text: '2021年11月6日全国新型冠状病毒本土现存确诊情况',
            left: 'center',
        },
        visualMap: {
        show: true,
        type:'piecewise',
        pieces:[
            {min: 300, max: 500,},
            {min: 20, max: 300},
            {min: 1, max: 10},
           
        ],
        showLabel:true,
        right: '15%',
        bottom:'20%',
        // top: 'bottom',
        text: ['现存确诊病例'], // 文本，默认为数值文本
        calculable: true,
        inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            color:['#1488CC','#A5CC82']//蓝红
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['white','#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
        // geo: {
        //     show: true,
        //     map: 'chinacity',
        //     label: {
        //         normal: {
        //             show: false,
        //         },
        //         emphasis: {
        //             show: false,
        //         }
        //     },
        //     roam: true,
        // },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c}(人)'
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {
                    pixelRatio: 4
                }
            }
        },
        series: [{
                name: '总人口',
                type: 'map',
                mapType: 'chinacity',
                label: {
                    normal: {
                        show: false
                    }
                },
                roam:true,
                // itemStyle: {
                //     normal: {
                //         borderColor: '#CD4F39',
                //         areaColor: '#54FF9F',
                //         borderWidth: 4,
                //         opacity: 0.2
                //     }
                // },
                data:[
    {name:"黑河市",value:212},
    {name:"哈尔滨市",value:5},
    {name:"阿拉善盟",value:126},
    {name:"锡林郭勒盟",value:10},
    {name:"呼和浩特市",value:2},
    {name:"鄂尔多斯市",value:1},
    {name:"兰州市",value:73},
    {name:"天水市",value:38},
    {name:"张掖市",value:13},
    {name:"嘉峪关市",value:5},
    {name:"陇南市",value:2},
    {name:"香港特别行政区",value:112},
    {name:"德宏傣族景颇族自治州",value:8},
    {name:"石家庄市",value:62},
    {name:"邢台市",value:2},
    {name:"保定市",value:2},
    {name:"上海市",value:61},
    {name:"杭州市",value:1},
    {name:"银川市",value:29},
    {name:"吴忠市",value:11},
    {name:"中卫市",value:1},
    {name:"中山市",value:1},
    {name:"日照市",value:14},
    {name:"郑州市",value:15},
    {name:"开封市",value:5},
    {name:"商丘市",value:5},{name:"驻马店市",value:4},{name:"安阳市",value:1},
    {name:"周口市",value:1},{name:"许昌市",value:1},{name:"西安市",value:1},
    {name:"成都市",value:1},{name:"宜宾市",value:1},{name:"自贡市",value:1},
    {name:"长沙市",value:3},{name:"株洲市",value:1},{name:"常州市",value:3},
    {name:"两江区",value:1},{name:"九龙坡区",value:1},{name:"长寿区",value:1},
    {name:"巴南区",value:1},{name:"沙坪呗区",value:1},{name:"上饶市",value:6},
    {name:"九江市",value:1},{name:"遵义市",value:8},{name:"天门市",value:2},
    {name:"大连市",value:8},{name:"西宁市",value:11},{name:"海东市",value:1},
  
]
            },

        ]
    });
});

