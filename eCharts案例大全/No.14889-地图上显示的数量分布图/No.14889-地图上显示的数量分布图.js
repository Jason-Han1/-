const uploadedDataURL = "/asset/get/s/data-1505365622074-r1Ad0tw9-.json";

$.getJSON(uploadedDataURL, function(all) {

    const max = (all.Data[(all.Data.length * 75 / 100).toFixed(0)].value[2] / 100).toFixed(0) * 100;
    /**
     * 分类数据 
     */
    option = {
        backgroundColor: '#0F082E',
        title: {
            text: all.Name,
            subtext: '数据纯属虚构',
            x: 'center',
            textStyle: {
                color: '#FFFFFF'
            }
        },
        tooltip: {
            trigger: 'item',
            padding: [5,10],
            backgroundColor: 'rgba(50,103,213, 0.3)',
            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.9)',
            formatter: (data) => `${data.seriesName}<br>${data.name} : ${data.value[2]}`
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['数量分布图'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            // show:false,
            min: 0,
            max: max * 10,
            // splitNumber: 5,
            color: ['#d94e5d', '#eac736', '#50a3ba'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: [{
            map: 'china',
            // roam: true,
            z: 1,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    shadowBlur: 50,
                    shadowColor: 'rgba(50,103,213, 0.3)',
                    areaColor: '#0E0930',
                    borderColor: '#3369D9'
                },
                emphasis: {
                    show: false,
                    areaColor: '#3369D9',
                    opacity: 0.2
                }
            }
        }, {
            map: 'china',
            z: 1,
            label: {
                emphasis: {
                    show: false,
                    // color: '#efefef'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 0.2,
                    shadowBlur: 60,
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    areaColor: '#0E0930',
                    borderColor: '#3369D9'
                },
                emphasis: {
                    show: false,
                    areaColor: '#3369D9',
                    opacity: 0.2
                }
            }
        }],
        series: [{
            name: all.Name,
            type: 'scatter',
            coordinateSystem: 'geo',
            data: all.Data,
            large: false,
            symbolSize: function(value) {
                var size = (value[2] * 5 / max).toFixed(0);
                size = size > 8 ? 8 : size;
                size = size < 2 ? 2 : size;
                return size;
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 15,
                    color: '#efefef',
                    shadowColor: '#258CF9'
                }
            }
        }]
    };

    myChart.setOption(option);

    /**
     * 前 10 轮播
     */
    let index = all.Data.length;
    const st = setInterval(() => {
        if (index <= all.Data.length - 10) index = all.Data.length;
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: index--
        })
    }, 3000)
})