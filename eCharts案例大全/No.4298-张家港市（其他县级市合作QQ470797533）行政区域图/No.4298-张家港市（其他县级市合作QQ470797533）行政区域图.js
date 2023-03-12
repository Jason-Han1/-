var uploadedDataURL = "/asset/get/s/data-1610354742423-MrhSQAkdn.geojson";




myChart.showLoading();
var data = [];
$.getJSON(uploadedDataURL, function(geoJson) { 
    echarts.registerMap('mp', geoJson);
    data = geoJson.features.map((item) => { // 显示窗口的数据转换
        return {
            value: (Math.random() * 1000).toFixed(2),
            name: item.properties.name
        }
    });
    myChart.hideLoading();
    option = {
        backgroundColor: '#404a59', // 背景
        tooltip: { // 窗口外框
            backgroundColor: 'rgba(0,0,0,0)',
            trigger: 'item',
        },
         title: {
            show: true,
            x: "center",
          
            text: "江苏省张家港市行政区域图（其他县级市合作QQ470797533）",
            textStyle: {
                color: "#2980b9",
                fontSize: 16
            }
        },
        legend: {
            show: false,
        },
        series: [{
            tooltip: { // 显示的窗口
                trigger: 'item',
               
            },
            name: '',
            type: 'map',
            map: 'mp', // 自定义扩展图表类型
            zoom: 0.65, //缩放
            showLegendSymbol: true,
            label: { // 文字
                show: true,
                color: '#fff',
                fontSize: 10
            },
            itemStyle: {  //地图样式
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0, 
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1, 
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                }
            },
            emphasis: { //鼠标移入动态的时候显示的默认样式
                itemStyle: {
                    areaColor: '#FFD181',
                    borderColor: '#404a59',
                    borderWidth: 1
                }
            },
            layoutCenter: ['50%', '50%'],
            layoutSize: '160%',
            markPoint: {
                symbol: 'none'
            },
            data: data,
        }],
    }
    myChart.setOption(option);
   
})