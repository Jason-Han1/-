var uploadedDataURL = "/asset/get/s/data-1520166901794-HJRxuDtOG.json";
myChart.showLoading();
var data = [];
$.getJSON(uploadedDataURL, function(geoJson) { 
    echarts.registerMap('广东', geoJson);
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
        legend: {
            show: false,
        },
        series: [{
            tooltip: { // 显示的窗口
                trigger: 'item',
                formatter: function(item) {
                    var tipHtml = '';
                    tipHtml = '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                        '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' + item.data.name + '</div>' +
                        '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                        '<span style="font-size:18px;font-weight:bold;">' + '测试设备：' + item.data.value + ' ' + '</span>' +
                        '</div>' + '</div>';
                    return tipHtml;
                }
            },
            name: '广东省数据',
            type: 'map',
            map: '广东', // 自定义扩展图表类型
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
    showTips('广州市');
})