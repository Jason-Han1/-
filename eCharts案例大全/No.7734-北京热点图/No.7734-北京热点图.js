var uploadedDataURL = "/asset/get/s/data-1499156198404-H1AJkAOEZ.json";
$.get(uploadedDataURL, function(geoJson) {
    // console.log(geoJson)
    echarts.registerMap('GD', geoJson);
    let data = [
        ['116.424697', '39.927967', 1334],// '东城'
        ['116.358141', '39.913919', 9334],// '西城'
        ['116.765487', '40.136573', 834],// '朝阳'
        ['116.290679', '39.857184', 2334],// '丰台'
        ['116.17672', '39.949198', 6734],// '石景山'
        ['116.177807', '40.062966', 1234],// '海淀'
        ['115.905234', '40.010063', 2634],// '门头沟'
        ['115.941902', '39.708825', 1334],// '房山'
        ['116.747351', '39.814339', 1178],// '通州'
        ['116.737316', '40.137897', 634],// '顺义'
        ['116.226118', '40.225311', 534],// '昌平'
        ['116.402095', '39.655493', 2334],// '大兴'
        ['116.621138', '40.432762', 1334],// '怀柔'
        ['117.117604', '40.192158', 4534],// '平谷'
        ['117.065719', '40.500122', 724],// '密云'
        ['116.016705', '40.507607', 334]// '延庆'
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