option = {
    title: {
        text: '',
        subtext: '',
        left: 'center',
        top: '20px',
    },
    geo: [
        {
            id: 'geoId',
            map: 'world',
            // aspectScale: 0.9,
            roam: true, // 是否允许缩放
            zoom: 1.2, // 默认显示级别
            // layoutSize: '95%',
            layoutCenter: ['50%', '50%'],
            itemStyle: {
                normal: {
                    areaColor: '#B0C6EF',
                    borderColor: '#ECEFF1',
                    borderWidth: 0,
                },
            },
            emphasis: {
                focus: 'none',
                areaColor: '#ffc28a',
            },
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        // console.log(params.name);
                        if (params.name == 'Brazil') return '巴西';
                        else if (params.name == 'Australia') return '澳大利亚';
                         else if (params.name == 'Nigeria') return '尼日利亚';
                          else if (params.name == 'Germany') return '德国';
                           else if (params.name == 'Russia') return '俄罗斯';
                            else if (params.name == 'Canada') return '加拿大';
                        else {
                            return '';
                        }
                    }, textStyle: {
                             color: '#FFF'
                         }
                },
            },
            zlevel: 3,
            // silent: true,
            regions: [
                {
                    name: 'Brazil',
                    itemStyle: {
                        areaColor: '#2655B3',
                    },
                },{
                    name: 'Australia',
                    itemStyle: {
                        areaColor: '#2655B3',
                    },
                },{
                    name: 'Nigeria',
                    itemStyle: {
                        areaColor: '#2655B3',
                    },
                },{
                    name: 'Germany',
                    itemStyle: {
                        areaColor: '#2655B3',
                    },
                },{
                    name: 'Russia',
                    itemStyle: {
                        areaColor: '#2655B3',
                    },
                },{
                    name: 'Canada',
                    itemStyle: {
                        areaColor: '#2655B3',
                    },
                },
            ],
        },
    ],
    series: [
        {
            type: 'map',
            geoIndex: 0,
        },
        {
            type: 'lines',
            zlevel: 5,
            effect: {
                show: false,
                // period: 4, //箭头指向速度，值越小速度越快
                // trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                // symbol: 'arrow', //箭头图标
                // symbol: imgDatUrl,
                symbolSize: 5, // 图标大小
            },
            lineStyle: {
                width: 18, //尾迹线条宽度
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(0,245,253,1)', // 0% 处的颜色
                        },
                        {
                            offset: 0.2,
                            color: 'rgba(0,245,253,1)', // 0% 处的颜色
                        },
                        {
                            offset: 0.6,
                            color: 'rgba(0,245,253,.5)', // 0% 处的颜色
                        },
                        {
                            offset: 0.7,
                            color: 'rgba(0,245,253,.5)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,245,253,1)', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
                opacity: 0.9, //尾迹线条透明度
                curveness: 0, //尾迹线条曲直度
            },
            label: {
                show: true,
                position: 'end',
                 normal: {
                         show: true,
                         textStyle: {
                             color: '#00F5FD'
                         }
                     },
                // formatter: function(params){
                //   console.log(params)
                // }
            },
            silent: true,
            // selectedMode: 'single',
            data: [
                {
                    name: 20,
                    coords: [
                        [-48.678945, -10.493623],
                        [-48.678945, 10.493623],
                    ],
                },
                {
                    name: 15,
                    coords: [
                        [133.78,-25.27],
                        [133.78,-5.27],
                    ],
                },
                {
                    name: 9,
                    coords: [
                        [8.68,9.08],
                        [8.68,18.08],
                    ],
                },
                {
                    name: 10,
                    coords: [
                        [10.45,51.17],
                        [10.45,61.17],
                    ],
                },
                {
                    name: 10,
                    coords: [
                        [105.32,61.52],
                        [105.32,71.52],
                    ],
                },
                {
                    name: 25,
                    coords: [
                        [-106.35,56.13],
                        [-106.35,81.13],
                    ],
                },
            ],
        },
    ],
    toolbox: {
        show: true,

        feature: {
            saveAsImage: {
                show: true,
                excludeComponents: ['toolbox'],
                pixelRatio: 2,
            },
        },
    },
    backgroundColor: 
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5,  [{
          offset: 0, color: '#00416F' // 0% 处的颜色
        }, {
          offset: 1, color: '#071743' // 100% 处的颜色
        }], false),
};
