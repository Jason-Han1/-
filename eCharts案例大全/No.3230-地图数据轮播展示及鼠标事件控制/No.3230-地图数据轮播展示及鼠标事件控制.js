var uploadedDataURL = "/asset/get/s/data-1623313392107-yFmJKvlk0.json";
myChart.showLoading();
var data = [];
$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('广州', geoJson);
    data = geoJson.features.map((item) => {
        return {
            value: (Math.random() * 1000).toFixed(2),
            name: item.properties.name,
        };
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
        series: [
            {
                tooltip: {
                    trigger: 'item',
                    formatter: function (item) {
                        var tipHtml = '';
                        tipHtml =
                            '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                            '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' +
                            item.data.name +
                            '</div>' +
                            '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                            '<span style="font-size:18px;font-weight:bold;">' +
                            item.data.value +
                            ' ' +
                            '</span>' +
                            '</div>' +
                            '</div>';
                        return tipHtml;
                    },
                },
                name: '广州市数据',
                type: 'map',
                map: '广州', // 自定义扩展图表类型
                aspectScale: 1,
                zoom: 0.6, //缩放
                showLegendSymbol: false,
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10,
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
                        fontSize: 10,
                    },
                    itemStyle: {
                        areaColor: '#fff040',
                        borderColor: '#fff',
                        borderWidth: 1,
                    },
                },
                layoutCenter: ['50%', '50%'],
                layoutSize: '160%',
                markPoint: {
                    symbol: 'none',
                },
                data: data,
            },
        ],
    };
    myChart.setOption(option);

    // 依次跳转显示 - begin
    var arr = [
        '花都区',
        '从化区',
        '增城区',
        '黄埔区',
        '白云区',
        '天河区',
        '越秀区',
        '荔湾区',
        '海珠区',
        '番禺区',
        '南沙区',
    ];
    var index = 0;
    var timer = setInterval(function () {
        index = index < arr.length ? index : 0;
        showTips(arr[index++]);
    }, 1000);

    myChart.on('mouseover', function () {
        clearInterval(timer);
    });

    myChart.on('mouseout', function () {
        clearInterval(timer);
        timer = setInterval(function () {
            index = index < arr.length ? index : 0;
            showTips(arr[index++]);
        }, 1000);
    });
    // 依次跳转显示 - end
});

function showTips(name) {
    data.forEach((item, i) => {
        myChart.dispatchAction({
            type: 'mapUnSelect',
            seriesIndex: 0,
            dataIndex: i,
        });
        if (item.name.includes(name)) {
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: i,
            });
            myChart.dispatchAction({
                type: 'mapSelect',
                seriesIndex: 0,
                dataIndex: i,
            });
        }
    });
}
