var uploadedDataURL = "/asset/get/s/data-1493307661784-BJIGZ5y1b.json";

//var uploadedDataURL = "/asset/get/s/data-1493307461647-By0Hx5kkb.json";

//var uploadedDataURL = "/asset/get/s/data-1493307255243-ByktJqkJb.json";

//var uploadedDataURL = "/asset/get/s/data-1493306833817-ry90pKJJZ.json";

//var uploadedDataURL = "/asset/get/s/data-1493303460769-rJ6sltyyZ.json";

//var uploadedDataURL = "/asset/get/s/data-1482818963027-Hko9SKJrg.json";

myChart.showLoading();
$.get(uploadedDataURL, function(geoJson) {

    echarts.registerMap('Chengdu', geoJson);
    myChart.hideLoading();
    myChart.setOption({
        title: {
            text: '成都地区负荷预测特征数据',
            subtext: '数据已标准化',
            //sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
         tooltip : {
        trigger: 'item',
        formatter : function (params) {
            var value = (params.value + '').split('.');
            value = value[0];
                    
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
    },
        toolbox: {
        show: true,
        orient:'vertical',
        iconStyle:{
            bottom:20
            
        },
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
        legend: {
        orient: 'vertical',
        selectedMode:'single',
        right: '10%',
        data:['人均GDP','平均房价','人口密度','工业增速']},
        //添加多个视觉控件
        visualMap: 
        [
        {
            min: 0,
            max: 1,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            }
        }],
       
        series: [
            {name:'人均GDP',
            type: 'map',
            roam:true,
            map: 'Chengdu',
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: [{
                    name: '成华区',
                    value: 0.48
                }, {
                    name: '武侯区',
                    value: 0.81
                }, {
                    name: '青羊区',
                    value: 3524
                },{
                    name: '简阳市',
                    value: 0
                },
                {
                    name: '金牛区',
                    value: 0.47
                },{
                    name: '龙泉驿区',
                    value: 1
                },{
                    name: '锦江区',
                    value: 0.85
                },{
                    name: '双流区',
                    value: 0.23
                },{
                    name: '新都区',
                    value: 0.48
                },{
                    name: '郫都区',
                    value: 0.3
                },{
                    name: '温江区',
                    value: 0.59
                },{
                    name: '青白江区',
                    value: 0.6
                },{
                    name: '彭州市',
                    value: 0.19
                },{
                    name: '金堂县',
                    value: 0.15
                },{
                    name: '都江堰市',
                    value: 0.16
                },{
                    name: '新津县',
                    value: 0.49
                },{
                    name: '崇州市',
                    value: 0.09
                },{
                    name: '邛崃市',
                    value: 0.08
                },{
                    name: '大邑县',
                    value: 0.11
                },{
                    name: '蒲江县',
                    value: 0.14
                }



            ]
        },
            {name:'平均房价',
            type: 'map',
            roam:true,
            map: 'Chengdu',
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: [{
                    name: '成华区',
                    value: 0.63
                }, {
                    name: '武侯区',
                    value: 1
                }, {
                    name: '青羊区',
                    value: 0.7
                },{
                    name: '简阳市',
                    value: 0.13
                },
                {
                    name: '金牛区',
                    value: 0.37
                },{
                    name: '龙泉驿区',
                    value: 0.4
                },{
                    name: '锦江区',
                    value: 0.78
                },{
                    name: '双流区',
                    value: 0.71
                },{
                    name: '新都区',
                    value: 0.21
                },{
                    name: '郫都区',
                    value: 0.29
                },{
                    name: '温江区',
                    value: 0.43
                },{
                    name: '青白江区',
                    value: 0.01
                },{
                    name: '彭州市',
                    value: 0.01
                },{
                    name: '金堂县',
                    value: 0.028
                },{
                    name: '都江堰市',
                    value: 0.09
                },{
                    name: '新津县',
                    value: 0.20
                },{
                    name: '崇州市',
                    value: 0.05
                },{
                    name: '邛崃市',
                    value: 0.017
                },{
                    name: '大邑县',
                    value: 0.038
                },{
                    name: '蒲江县',
                    value:  0
                }



            ]
        },
            {name:'人口密度',
            type: 'map',
            roam:true,
            map: 'Chengdu',
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: [{
                    name: '成华区',
                    value: 0.63
                }, {
                    name: '武侯区',
                    value: 1
                }, {
                    name: '青羊区',
                    value: 0.93
                },{
                    name: '简阳市',
                    value: 0.02
                },
                {
                    name: '金牛区',
                    value: 0.82
                },{
                    name: '龙泉驿区',
                    value: 0.08
                },{
                    name: '锦江区',
                    value: 0.85
                },{
                    name: '双流区',
                    value: 0.06
                },{
                    name: '新都区',
                    value: 0.097
                },{
                    name: '郫都区',
                    value: 0.1
                },{
                    name: '温江区',
                    value: 0.098
                },{
                    name: '青白江区',
                    value: 0.047
                },{
                    name: '彭州市',
                    value: 0.012
                },{
                    name: '金堂县',
                    value: 0.018
                },{
                    name: '都江堰市',
                    value: 0.013
                },{
                    name: '新津县',
                    value: 0.017
                },{
                    name: '崇州市',
                    value: 0.004
                },{
                    name: '邛崃市',
                    value: 0.004
                },{
                    name: '大邑县',
                    value: 0
                },{
                    name: '蒲江县',
                    value: 0.005
                }



            ]
        },
            {
            name:'工业增速',
            type: 'map',
            visualMap: true,
            roam:true,
            map: 'Chengdu',
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: [{
                    name: '成华区',
                    value: 0.56
                }, {
                    name: '武侯区',
                    value: 0
                }, {
                    name: '青羊区',
                    value: 0.21
                },{
                    name: '简阳市',
                    value: 0.64
                },
                {
                    name: '金牛区',
                    value: 0.23
                },{
                    name: '龙泉驿区',
                    value: 0.66
                },{
                    name: '锦江区',
                    value: 0.42
                },{
                    name: '双流区',
                    value: 0.65
                },{
                    name: '新都区',
                    value: 0.67
                },{
                    name: '郫都区',
                    value: 0.6
                },{
                    name: '温江区',
                    value: 0.56
                },{
                    name: '青白江区',
                    value: 0.56
                },{
                    name: '彭州市',
                    value: 0.95
                },{
                    name: '金堂县',
                    value: 0.86
                },{
                    name: '都江堰市',
                    value: 0.39
                },{
                    name: '新津县',
                    value: 0.76
                },{
                    name: '崇州市',
                    value: 1
                },{
                    name: '邛崃市',
                    value: 0.95
                },{
                    name: '大邑县',
                    value: 0.83
                },{
                    name: '蒲江县',
                    value: 0.95
                }



            ]
        },
        
        
        ]
    });
});