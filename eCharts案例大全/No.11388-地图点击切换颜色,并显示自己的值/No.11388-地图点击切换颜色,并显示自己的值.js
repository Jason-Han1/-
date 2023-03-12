   var geoCoordMap = {
            '黑龙江': [127.9688, 45.368],
            '内蒙古': [110.3467, 41.4899],
            "吉林": [125.8154, 44.2584],
            '北京': [116.4551, 40.2539],
            "辽宁": [123.1238, 42.1216],
            "河北": [114.4995, 38.1006],
            "天津": [117.4219, 39.4189],
            "山西": [112.3352, 37.9413],
            "陕西": [109.1162, 34.2004],
            "甘肃": [103.5901, 36.3043],
            "宁夏": [106.3586, 38.1775],
            "青海": [101.4038, 36.8207],
            "新疆": [87.9236, 43.5883],
            "西藏": [91.11, 29.97],
            "四川": [103.9526, 30.7617],
            "重庆": [108.384366, 30.439702],
            "山东": [117.1582, 36.8701],
            "河南": [113.4668, 34.6234],
            "江苏": [118.8062, 31.9208],
            "安徽": [117.29, 32.0581],
            "湖北": [114.3896, 30.6628],
            "浙江": [119.5313, 29.8773],
            "福建": [119.4543, 25.9222],
            "江西": [116.0046, 28.6633],
            "湖南": [113.0823, 28.2568],
            "贵州": [106.6992, 26.7682],
            "云南": [102.9199, 25.4663],
            "广东": [113.12244, 23.009505],
            "广西": [108.479, 23.1152],
            "海南": [110.3893, 19.8516],
            '上海': [119.1803, 31.2891],
            '台湾': [121.4648, 25.5630]
        };
        var chinaDatas = [
            [{
                name: '黑龙江',
                value: 100
            }],
            [{
                name: '内蒙古',
                value: 300
            }],
            [{
                name: '吉林',
                value: 300
            }],
            [{
                name: '辽宁',
                value: 300
            }],
            [{
                name: '河北',
                value: 300
            }],
            [{
                name: '天津',
                value: 300
            }],
            [{
                name: '山西',
                value: 300
            }],
            [{
                name: '陕西',
                value: 300
            }],
            [{
                name: '甘肃',
                value: 300
            }],
            [{
                name: '宁夏',
                value: 300
            }],
            [{
                name: '青海',
                value: 300
            }],
            [{
                name: '新疆',
                value: 300
            }],
            [{
                name: '西藏',
                value: 300
            }],
            [{
                name: '四川',
                value: 300
            }],
            [{
                name: '重庆',
                value: 300
            }],
            [{
                name: '山东',
                value: 300
            }],
            [{
                name: '河南',
                value: 300
            }],
            [{
                name: '江苏',
                value: 300
            }],
            [{
                name: '安徽',
                value: 300
            }],
            [{
                name: '湖北',
                value: 300
            }],
            [{
                name: '浙江',
                value: 300
            }],
            [{
                name: '福建',
                value: 300
            }],
            [{
                name: '江西',
                value: 300
            }],
            [{
                name: '湖南',
                value: 300
            }],
            [{
                name: '贵州',
                value: 300
            }],
            [{
                name: '广西',
                value: 300
            }],
            [{
                name: '海南',
                value: 300
            }],
            [{
                name: '上海',
                value: 1300
            }],
            [{
                name: '广东',
                value: 1300
            }],
            [{
                name: '云南',
                value: 1300
            }],
            [{
                name: '北京',
                value: 1300
            }],
            [{
                name: '台湾',
                value: 1300
            }]
        ];
        var defaultP = [
            [{
                name: '四川',
                value: 300,
                selected: true
            }]
        ]
        var convertData = function(data) {
            console.log(data)
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i][0].name];
                console.log(geoCoord, 'geoCoord')
                if (geoCoord) {
                    res.push({
                        name: data[i][0].name,
                        value: geoCoord.concat(data[i][0].value)
                    });
                }
            }
            console.log(res, '///')
            return res;
        };

         option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                triggerOn: 'click',
                backgroundColor: 'transparent',
                alwaysShowContent: true,
                formatter(params, p, a) {
                    console.log(params.data.name)
                    return params.data.name + params.data.value
                }
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        color: 'white',
                        show: false
                    }
                },
                zoom: 1.2,
                itemStyle: {
                    normal: {
                        borderWidth: 1, // 区域边框宽度
                        borderColor: 'rgba(37, 88, 184, 0.8)', // 区域边框颜色
                        areaColor: '#0183C3' // 区域颜色
                    },
                    emphasis: {
                        areaColor: '#3889FF'
                    }
                },
                regions: defaultP[0],
                tooltip: {
                    show: false
                }
            },
            series: [
                {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                z:1,
               
                data: convertData(defaultP),
               
                symbolSize: 14,
                itemStyle: {              
                       color:'#fff',       
                },
                tooltip: {
                    show: true
                }
            }, {
                type: 'map',
                mapType: 'china',
                geoIndex: 0,
                z: 0,
                data: convertData(chinaDatas)
            }]
        };
        setTimeout(() => {
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: 0
            })

        }, 0)
        // var mymap = echarts.init(document.getElementById('main'));
        // mymap.setOption(options);
        myChart.on('click', params => {
            if (params.seriesType === 'map') {
                // 如果不存在，则不能选中
                console.log(params)
                const selectData = convertData([
                    [{
                        name: params.name,
                        value: params.data.value[2]
                    }]
                ])
                option.geo.regions = [{
                    name: params.name,
                    selected: true
                }]

                // 显示光圈
                option.series[0].data = selectData
                myChart.setOption(option)
                setTimeout(() => {
                    myChart.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: 0
                    })

                }, 0)

            }
        })