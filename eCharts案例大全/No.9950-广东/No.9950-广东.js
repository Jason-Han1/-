var uploadedDataURL = "/asset/get/s/data-1520166901794-HJRxuDtOG.json";
var bg = '<div class="bg-tooltip"></div>'

$.get(uploadedDataURL, function(as) {
    echarts.registerMap('gd', as); //利用json引入示例
    option = {
        tooltip: { //提示框的内容
            formatter: function() {

            },
            enterable: true,
            padding: 0,
            zlevel: 500,
            transitionDuration: 1,
            textStyle: {
                color: '#000',
                decoration: 'none',
            },

        },
        geo: {
            map: 'gd',
            roam:'false',
            layoutCenter:["50%","55%"],
            layoutSize:"90%",
            aspectScale: 0.75, //scale地图的长宽比
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147,235,248,1)',
                    borderWidth: 0.5,
                    color: '#203b50',
                    opacity: 0.5,

                },
                emphasis: {

                    areaColor: 'rgba(147,235,248,0)'
                }
            },
            z: 2
        },

        series: [{
            type: 'map',
            map: 'gd', //地图的类型

            label: { //图形上的文本标签
                normal: {
                    show: true
                }
            },
            top: '13%',
            left: '15%',
            aspectScale: 0.75, //scale地图的长宽比 
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: { //地图区域的多边形  图形样式
                normal: {

                    borderColor: 'rgba(147,235,248,0.6)',
                    borderWidth: 0.8,

                    areaColor: {
                        type: 'linear-gradient',
                        x: 0,
                        y: 30,
                        x2: 7,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#009DA1' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#005B9E' // 50% 处的颜色
                        }],
                        global: true // 缺省为 false
                    },
                    opacity: 1,
                },
                emphasis: {
                    areaColor: 'rgba(147,235,248,0)' //高亮状态下的多边形和便签样式
                }


            },
            zlevel: 1


        },
        {
            name:"错误图标",
            coordinateSystem:"geo",  //使用地理坐标系
            type:"effectScatter", //涟漪散点图 
            symbol:""
        }
        ]
    };
    myChart.setOption(option);

});