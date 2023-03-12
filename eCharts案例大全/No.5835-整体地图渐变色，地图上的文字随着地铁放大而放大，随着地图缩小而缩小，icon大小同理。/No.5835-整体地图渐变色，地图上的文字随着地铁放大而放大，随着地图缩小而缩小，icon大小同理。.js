option = {
    title: {
        top: 10,
        text: '整体地图渐变色，地图上的文字随着地图放大而放大，随着地图缩小而缩小，icon大小同理。',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    backgroundColor: 'rgba(0, 10, 52, 1)',
    series: [{
        type: 'map',
        map: 'china',
        tooltip: {
            show: false
        },
        label: {
            show: true,
            color: '#FFFFFF',
            fontSize: 16
        },
        aspectScale: 0.75,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: '100%',
        roam: true,
        geoIndex: 0,
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 0.6)',
                borderWidth: 0.8,
                areaColor: {
                    type: 'linear-gradient',
                    x: 0,
                    y: 1200,
                    x2: 1000,
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
            },
            emphasis: {
                areaColor: 'rgba(147, 235, 248, 0)'
            }
        },
        zlevel: 1
    }]
};

var myZoom;
myChart.on('georoam', function(params) {
    if (params.dy || params.dx) {
        return;
    }
    var _zoom = myChart.getOption().geo[0].zoom;
    if (myZoom == _zoom) {
        return;
    }
    option = myChart.getOption();
    if (_zoom > myZoom) {
        option.legend.selected = tempLegend;
        var fontSize = option.series[0].label.fontSize;
        if (fontSize + 1 > 26) {
            option.series[0].label.fontSize = 26;
        } else {
            option.series[0].label.fontSize = fontSize + 1;
        }
        myChart.setOption(option);
    } else {
        var fontSize = option.series[0].label.fontSize;
        if (fontSize - 1 < 12) {
            option.series[0].label.fontSize = 12;
        } else {
            option.series[0].label.fontSize = fontSize - 1;
        }
        myChart.setOption(option);
    }
    myZoom = _zoom;
});