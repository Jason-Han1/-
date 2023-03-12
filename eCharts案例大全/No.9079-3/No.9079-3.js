var uploadedDataURL = "/asset/get/s/data-1576908029500-ZPtATW1R.json";

myChart.showLoading();
var data = [];
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('广东', geoJson);
    data = geoJson.features.map((item) => {
        return {
            value: (Math.random() * 1000).toFixed(2),
            name: item.properties.name
        }
    });
    for(var i=0;i<data.length;i++){
        if(data[i].name=='济宁市'){
            data[i].itemStyle={
                color: '#5cd2c3',
                opacity: 0.3,
                borderWidth: 0.4,
                borderColor: '#5cd2c3'
            };
        }else{
            var co = color16();
            data[i].itemStyle={
                areaColor:co
            };
        }
    }
    myChart.hideLoading();
    option = {
        tooltip: {
            backgroundColor: 'rgba(0,0,0,0)',
            trigger: 'item',
        },
        legend: {
            show: false,
        },
        visualMap: { //颜色的设置  dataRange
                show: false,
                x: 'left',
                y: 'center',
                seriesIndex: [1],
                min: 70,
                max: 90,
                text: ['高', '低'], // 文本，默认为数值文本
                textStyle: {
                    color: '#fff'
                },
                inRange: {
                    color: ['#5cd2c3','#419bd3','#7a95d2','#5dcbdc','#838dcd','#5de9b1','#5dc6df','#5db8ea','#2bbc90','#5dc4e3']

                }
            },
        series: [{
            tooltip: {
                trigger: 'item',
                formatter: function(item) {
                    var tipHtml = '';
                    tipHtml = '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                        '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' + item.data.name + '</div>' +
                        '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                        '<span style="font-size:18px;font-weight:bold;">' + item.data.value + ' ' + '</span>' +
                        '</div>' + '</div>';
                    return tipHtml;
                }
            },
            type: 'map3D', // 系列类型
            name: 'map3D', // 系列名称
            map: '广东', // 自定义扩展图表类型
            // 环境贴图，支持純颜色值，渐变色，全景贴图的 url。默认为 'auto'，在配置有 light.ambientCubemap.texture 的时候会使用该纹理作为环境贴图。否则则不显示环境贴图。
            environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 配置为垂直渐变的背景
                offset: 0, color: '#00aaff' // 天空颜色
                }, {
                    offset: 0.7, color: '#998866' // 地面颜色
                }, {
                offset: 1, color: '#998866' // 地面颜色
            }], false),
            aspectScale: 1,
            label: { // 标签的相关设置
                show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
                //distance: 50, // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
                //formatter:, // 标签内容格式器
                textStyle: { // 标签的字体样式
                    color: '#fff', // 地图初始化区域字体颜色
                    fontSize: 10, // 字体大小
                    opacity: 1, // 字体透明度
                    backgroundColor: 'rgba(0,23,11,0)' // 字体背景色
                },
            },
            zoom: 0.65, //缩放
            showLegendSymbol: false,
            /*
            label: {
                show: true,
                color: '#fff',
                fontSize: 10
            },*/
            itemStyle: {
                areaColor: '#0E95F1',
                borderColor: '#e9e9e9',
                borderWidth: 1,
                shadowColor: '#0E95F1',
                shadowBlur: 18,
            },
            emphasis: {
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 8
                },
                itemStyle: {
                    areaColor: '#FFD181',
                    borderColor: '#fff',
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
    };
    
    myChart.setOption(option);
    showTips('广州市');
});
// 默认鼠标移出canvas后显示广州的tooltip信息
myChart.on("globalout", () => {
    setTimeout(() => {
        showTips('广州市')
    }, 5000)
})

function showTips(name) {
    data.forEach((item, i) => {
        if (item.name.includes(name)) {
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: i
            });
            myChart.dispatchAction({
                type: 'mapSelect',
                seriesIndex: 0,
                dataIndex: i
            });
        }
    })
};

function color16(){//十六进制颜色随机
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
	return color;
}