var henan = "/asset/get/s/data-1547805260773-mq8t5ZskK.json";
var option = {
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    tooltip: {
        show: false

    },
    visualMap: {
        min: 78,
        max: 93,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        show:true,
        inRange: {
            color: ['#ffffff','#ddf0fd','#bbe1fa','#90bcd9','#6597b8','#3a7297']
        }
    },
    series: [{
        type: 'map',
        map: 'henan',
        roam: false,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },

        layoutCenter: ['45%', '40%'],
        layoutSize: '90%',
        itemStyle: {
            normal: {
                areaColor: "#ffffff",
                color: "#FFF",
                label: {
                    show: true
                }
            },
        },
        data: [{name:'济源市',value:92.1329373990496},
{name:'平顶山市',value:86.4041707240286},
{name:'郑州市',value:85.1387228000631},
{name:'开封市',value:84.9299529666135},
{name:'驻马店市',value:84.6129986253718},
{name:'洛阳市',value:84.5381896667564},
{name:'漯河市',value:84.3249739841078},
{name:'南阳市',value:83.8623296947611},
{name:'三门峡市',value:82.707893190173},
{name:'信阳市',value:82.2295716426829},
{name:'周口市',value:81.6846323845046},
{name:'安阳市',value:81.5392708234654},
{name:'许昌市',value:81.1862169656123},
{name:'鹤壁市',value:80.2556108457558},
{name:'商丘市',value:80.2519060879444},
{name:'新乡市',value:79.7736202157305},
{name:'焦作市',value:78.9404207233623},
{name:'濮阳市',value:78.9134894678513}
        ],
    }]
};
$.get(henan, function(csJson) { //引入你需要绘画的地图json表
    echarts.registerMap('henan', csJson);
    var myEcharts = echarts.init(document.getElementById("chart-panel"))
    myEcharts.setOption(option)
})