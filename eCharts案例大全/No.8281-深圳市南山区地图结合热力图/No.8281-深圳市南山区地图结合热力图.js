var uploadedDataURL = "/asset/get/s/data-1585121033146-muyk7nt9x.json";
$.get(uploadedDataURL, function(geoJson) {
    // console.log(geoJson)
    echarts.registerMap('nanshan', geoJson);
    let data = [
        ['113.92706199999998', '22.542736', 41334],
        ['113.93299300000001', '22.507888', 7883],
        ["113.99469899999997", "22.523346", 5598],
        ["113.99408900000003", "22.52308", 16346],
        ["113.87163800000008", "22.474423", 11346],
        ['98.277304', '39.786529', 2686],
        ['114.017382', '22.604341', 2468],
        ['113.99033800000007', '22.62961', 11202],
        ['113.99033800000007', '22.72961', 6202],
        ['113.91535099999999', '22.483534', 1036],
        ['113.90857800000003', '22.478785', 11936],
        ['113.92434300000002', '22.529534', 21713],
        ['113.95341200000007', '22.556386', 702],
        ['114.204648', '22.601526', 702]
    ];
    let areaData = [];
    data.map(item => { // 扩大热力图效果
        areaData.push(...new Array(3).fill(item));
    });
    let mapMax = Math.max(...data.map(item => item[2]));
    let mapMin = Math.min(...data.map(item => item[2]));
    myChart.setOption(option = {
    backgroundColor: '#ccc',
    tooltip: {
        show: false,
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },

    visualMap: {
        bottom: 20,
        left: 200,
        show: true,
        color: ['#ff4601', '#fffc00', '#87cffa'],
        min: mapMin,
        max: mapMax,
        calculable: true,
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    },

    grid: {
        height: '100%',
        width: '100%'
    },

    geo: {
        map: 'nanshan',
        label: {
            show: true
        },
        top: 'center',
        left: '35%',
        roam: false,
        width: '90%',
        height: '95%',
        zoom: 1.01,
        label: {
            normal: {
                show: true,
                color: '#fff'
            },
            emphasis: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#76b1ff',
                borderColor: '#eee',
                shadowColor: '#76b1ff',
                shadowBlur: 10,
                borderWidth: 1
            },
            emphasis: {
                // 鼠标移入颜色
                areaColor: '#409EFF',
                borderWidth: 0
            }
        }
    },

    series: [{
        mapType: 'nanshan',
        top: 'center',
        left: 'center',
        width: '65%',
        height: '95%',

        name: 'AQI',
        type: 'heatmap',
        coordinateSystem: 'geo',
        blurSize: 40,
        data: areaData,
        // 鼠标移入
        emphasis: {
            show: false,
            itemStyle: {
                areaColor: 'rgb(255,255,0,1)'
            }
        }
    }]
})
})
