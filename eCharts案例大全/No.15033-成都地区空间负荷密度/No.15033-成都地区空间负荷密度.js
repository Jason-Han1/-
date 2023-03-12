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
            text: '成都地区空间负荷密度',
            subtext: 'By Li Mao',
            //sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
        visualMap: {
            min: 0,
            max: 20,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            }
        },
       
        series: [{
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
                    value: 21.45
                }, {
                    name: '武侯区',
                    value: 27.22
                }, {
                    name: '青羊区',
                    value: 53.48
                },{
                    name: '简阳市',
                    value: 0.73
                },
                {
                    name: '金牛区',
                    value: 20.98
                },{
                    name: '龙泉驿区',
                    value: 2.96
                },{
                    name: '锦江区',
                    value: 41.15
                },{
                    name: '双流区',
                    value: 4.3
                },{
                    name: '新都区',
                    value: 2.98
                },{
                    name: '郫都区',
                    value: 4.02
                },{
                    name: '温江区',
                    value: 8.08
                },{
                    name: '青白江区',
                    value: 2.57
                },{
                    name: '彭州市',
                    value: 1.65
                },{
                    name: '金堂县',
                    value: 1.36
                },{
                    name: '都江堰市',
                    value: 1.27
                },{
                    name: '新津县',
                    value: 3.31
                },{
                    name: '崇州市',
                    value: 1.7
                },{
                    name: '邛崃市',
                    value: 0.65
                },{
                    name: '大邑县',
                    value: 0.72
                },{
                    name: '蒲江县',
                    value: 0.29
                }



            ]
        }]
    });
});