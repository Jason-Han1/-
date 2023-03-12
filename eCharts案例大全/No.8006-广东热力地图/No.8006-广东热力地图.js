var uploadedDataURL = "/asset/get/s/data-1502779360900-HkKJuGe_W.json";
$.get(uploadedDataURL, function(geoJson) {
    // console.log(geoJson)
    echarts.registerMap('GD', geoJson);
    let data = [
        ['113', '22', 41334],
        ['113', '22', 7883],
        ["113.2", "22.5", 5598],
        ["114", "22.5", 16346],
        ["115", "22.4", 11346],
        ['98.2', '39.7', 2686],
        ['114.0', '22.6', 2468],
        ['113', '22.62961', 11202],
        ['120', '22.72961', 6202],
        ['130', '24', 1036],
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
            left: 10,
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
            map: 'GD',
            label: {
                show: true
            },
            top: 'center',
            left: '100',
            roam: true,
            width: '90%',
            height: '95%',
            zoom: 0.9,
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
            mapType: 'GD',
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