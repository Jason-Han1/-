var uploadedDataURL = "/asset/get/s/data-1498630743837-BygD9pgVW.json";


myChart.showLoading();

$.get(uploadedDataURL, function(mapJson) {
    myChart.hideLoading();

    echarts.registerMap('SoutheastAsia', mapJson);
    let geoCoordMap = {
        '缅甸': [96.328125, 24.046463999666567],
        '泰国': [102.83203125, 16.425547506916725],
        '马来西亚': [101.71142578125, 3.1843944923387464],
        '印度尼西亚': [106.80908203125, -6.162400921526583],
        '菲律宾': [120.58593749999999, 15.60187487673981],
        '新加坡': [103.853759765625, 1.2962761196418218],
        '柬埔寨': [105.1171875, 12.554563528593656],
        '越南': [105.8203125, 21.12549763660628],
        '老挝': [103.20556640625, 19.476950206488414],
        '印度': [77.23388671874999, 28.65203063036226],
        '尼泊尔': [85.2978515625, 27.761329874505233],
        '马尔代夫': [73.212890625, 2.986927393334876],
        '巴勒斯坦': [71.5869140625, 34.05265942137599],
        '孟加拉': [90.3955078125, 23.926013033021192],
        '不丹': [90.791015625, 27.68352808378776],
        '斯里兰卡': [80.5078125, 7.623886853120049],
        '文莱': [114.76318359375, 4.718777551249855],
        '统计': [133.20556640625, 14.476950206488414],
        'GDP-缅甸': [101.328125, 46.476950206488411],
        'GDP-泰国': [121.20556640625, 39.476950206488418],
        'GDP-马来西亚': [80.328125, -14.476950206488414],
        'GDP-印度尼西亚': [129.20556640625, -15.476950206488414],
        'GDP-菲律宾': [138.00488281250000, 17.476950206488414],
        'GDP-新加坡': [99.328125, -21.476950206488414],
        'GDP-柬埔寨': [133.20556640625, 27.476950206488414],
        'GDP-越南': [129.20556640625, 33.941191793456518],
        'GDP-老挝': [115.20556640625, 45.476950206488418],
        'GDP-印度': [55.20556640625, 31.476950206488411],
        'GDP-尼泊尔': [78.20556640625, 40.476950206488418],
        'GDP-马尔代夫': [58.20556640625, -9.476950206488414],
        'GDP-巴勒斯坦': [65.20556640625, 44.476950206488411],
        'GDP-孟加拉': [58.20556640625, 19.476950206488407],
        'GDP-不丹': [91.20556640625, 42.476950206488418],
        'GDP-斯里兰卡': [58.20556640625, 9.476950206488414],
        'GDP-文莱': [135.20556640625, 4.476950206488407],
    };
    let data = [{
        name: '缅甸',
        value: 4822023
    }, {
        name: '泰国',
        value: 6553255
    }, {
        name: '马来西亚',
        value: 2949131
    }, {
        name: '印度尼西亚',
        value: 5187582
    }, {
        name: '菲律宾',
        value: 3590347
    }, {
        name: '新加坡',
        value: 917092
    }, {
        name: '柬埔寨',
        value: 632323
    }, {
        name: '越南',
        value: 19317568
    }, {
        name: '老挝',
        value: 9919945
    }, {
        name: '印度',
        value: 69919945
    }, {
        name: '尼泊尔',
        value: 19919945
    }, {
        name: '马尔代夫',
        value: 6919945
    }, {
        name: '巴勒斯坦',
        value: 29919945
    }, {
        name: '孟加拉',
        value: 9919945
    }, {
        name: '不丹',
        value: 1219945
    }, {
        name: '斯里兰卡',
        value: 1919945
    }, {
        name: '文莱',
        value: 999945
    }];

    let pathname = [
        'GDP-缅甸',
        'GDP-泰国',
        'GDP-马来西亚',
        'GDP-印度尼西亚',
        'GDP-菲律宾',
        'GDP-新加坡',
        'GDP-柬埔寨',
        'GDP-越南',
        'GDP-老挝',
        'GDP-印度',
        'GDP-尼泊尔',
        'GDP-马尔代夫',
        'GDP-巴勒斯坦',
        'GDP-孟加拉',
        'GDP-不丹',
        'GDP-斯里兰卡',
        'GDP-文莱'
    ];
    // const pathname = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


    function formtVData(geoData, data, srcNam) {
        var tGeoDt = [];
        for (var i = 0, len = data.length; i < len; i++) {
            var tNam = data[i].name
            if (srcNam[i] != tNam) {
                tGeoDt.push({
                    name: tNam,
                    value: geoData[tNam]
                });
            }

            tGeoDt.push({
                name: srcNam[i],
                value: geoData[srcNam[i]],
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: 'red',
                        borderColor: '#000'
                    }
                }
            });

        }
        return tGeoDt;
    }

    function formtGCData(geoData, data, srcNam, dest) {
        var tGeoDt = [];
        if (dest) {
            for (let i = 0, len = data.length; i < len; i++) {
                if (srcNam[i] != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[srcNam[i]], geoData[data[i].name]]
                    });
                }
            }
        } else {
            for (let i = 0, len = data.length; i < len; i++) {
                if (srcNam[i] != data[i].name) {
                    tGeoDt.push({
                        coords: [geoData[data[i].name], geoData[srcNam[i]]]
                    });
                }
            }
        }
        return tGeoDt;
    }

    let option = {
        backgroundColor: '#000',
        title: {
            show: false,
            text: '东南亚各国GDP总量',
            subtext: 'GDP单位:百万美元',
            left: 'center',
            top: 'top',
            textStyle: {
                fontSize: 25,
                color: 'rgba(255,255,255, 0.9)'
            }
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function(params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                return params.seriesName + '<br/>' + params.name + ': ' + value;
            }
        },
        visualMap: {
            show: false,
            left: 'right',
            min: 500000,
            max: 38000000,
            inRange: {
                color: ['#CCC', '#FEFEFE', '#EFEFEF', '#EEEEEE', '#EDEDED']
            },
            // text: ['High', 'Low'], // 文本，默认为数值文本
            textStyle: {
                fontSize: 16,
                color: '#EFEFEF'
            },
            calculable: true
        },
        geo: {
            map: 'SoutheastAsia',
            label: {
                emphasis: {
                    show: false
                }
            },
            // roam: true,
            silent: false,
            center: ['10%', '30%'],
            scaleLimit: {
                min: 0.75,
                max: 2
            },
            aspectScale: 1.3,
            itemStyle: {
                normal: {
                    shadowColor: '#002B45',
                    shadowBlur: 4,
                    shadowOffsetX: -12,
                    areaColor: '#005FB2',
                    borderColor: '#000'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            },
            
        },
        series: [ 
            {
            name: '定位',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [{name:'云南',value:[106,25]}],
            symbolSize: function(val) {
                return val[2] / 2;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true, 
            itemStyle: {
                normal: {
                    color: '#0ce928', 
                    shadowBlur: 20,
                    shadowColor: '#0ce928', 
                }
            },
            zlevel: 1
        },
            
            {

            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.1,
                color: 'maroon',
                symbol: 'arrow',
                symbolSize: 8
            },
            lineStyle: {
                normal: {
                    color: '#efefef',
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: formtGCData(geoCoordMap, data, pathname, false)
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                scale: 2.5,
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: 5,
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 20,
                    color: '#EFEFEF',
                    fontWeight: 400,
                    borderColor: '#FFF'
                }
            },
            data: formtVData(geoCoordMap, data, pathname)
        }]
    };


    myChart.setOption(option);
});