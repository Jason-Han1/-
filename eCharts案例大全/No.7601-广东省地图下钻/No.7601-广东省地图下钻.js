var sz = "/asset/get/s/data-1590372928763--kKLg0YPC.json";

var gd = "/asset/get/s/data-1590372918278-Y1gVzx6pR.json";

myChart.showLoading();
var data = [];
var max = 100;

function getOption(nameLocation, scatterData) {
    return {
        backgroundColor: '#404a59', // 背景
        tooltip: { // 窗口外框
            backgroundColor: 'rgba(0,0,0,0)',
            trigger: 'item',
        },

        visualMap: {
            min: 0,
            max: max,
            calculable: true,
            inRange: {
                color: ['#50a3ba', '#eac736', '#d94e5d']
            }
        },
        geo: {
            show: true,
            map: nameLocation,
            roam: true,
            label: { // 文字
                show: true,
                color: '#fff',
                fontSize: 10
            },
            itemStyle: { //地图样式
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
            layoutCenter: ['50%','50%'],
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
            geoIndex: 0,
            data: data,
        }, {
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: function(val) {
                return val[2] / max * 25;
            },
            data: scatterData
        }],
    }
}

function getGDMap() {
    myChart.off('dblclick');
    $.getJSON(gd, function(geoJson) {
        echarts.registerMap('gd', geoJson);
        data = geoJson.features.map((item) => { // 显示窗口的数据转换
            return {
                value: (Math.random() * 1000).toFixed(2),
                name: item.properties.name
            }
        });
        myChart.hideLoading();
        myChart.setOption(getOption('gd', [{
            value: [114.105946, 22.610125, 10]
        }, {
            value: [113.3965, 23.118422, 88]
        }, {
            value: [114.648666, 23.90841, 55]
        }, {
            value: [114.386505, 23.089702, 23]
        }]),true);
        myChart.on('click', getSZMap);
    });
}

function getSZMap() {
    myChart.off('click');
    $.getJSON(sz, function(geoJson) {
        echarts.registerMap('sz', geoJson);
        data = geoJson.features.map((item) => { // 显示窗口的数据转换
            return {
                value: (Math.random() * 1000).toFixed(2),
                name: item.properties.name
            }
        });
        myChart.hideLoading();
        myChart.setOption(getOption('sz', [{
            value: [114.105946, 22.610125, 10]
        }]),true);
        myChart.on('dblclick', getGDMap);
    });
}

(getGDMap())();