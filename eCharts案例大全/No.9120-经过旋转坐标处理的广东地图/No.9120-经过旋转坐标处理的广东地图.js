var uploadedDataURL = "/asset/get/s/data-1576655009916-by_DuGU2.json";
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
    myChart.hideLoading();
    option = {
        tooltip: {
            backgroundColor: 'rgba(0,0,0,0)',
            trigger: 'item',
        },
        legend: {
            show: false,
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
            name: '广东省数据',
            type: 'map',
            map: '广东', // 自定义扩展图表类型
            aspectScale: 1,
            zoom: 0.65, //缩放
            showLegendSymbol: false,
            label: {
                show: true,
                color: '#fff',
                fontSize: 10
            },
            itemStyle: {
                areaColor: '#0E95F1',
                borderColor: '#e9e9e9',
                borderWidth: 1,
                shadowColor: '#0E95F1',
                shadowBlur: 20,
            },
            emphasis: {
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10
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
    }
    myChart.setOption(option);
    showTips('广州市');
})
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
}