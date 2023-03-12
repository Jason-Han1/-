var data = [
        [
            [97.5, 50],
            [97.5, 45.4],
            [100.8, 43.8],
            [97.8, 35.3],
            [97.65, 24],
            [114, 14]
        ],
        [
            [87, 45.2],
            [100.8, 43.8],
            [111.8, 43.8],
        ],
        [
            [79, 31.1],
            [84, 31],
            [98, 28],
            [110, 24.6],
        ],
        [
            [116, 48],
            [116, 21.6],
        ]

    ];
    option = {
        backgroundColor:'#000',
        geo: {
            map: 'china',
            show:false,
            zoom: 1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: false, //是否允许缩放
            itemStyle: {
                normal: {
                    color: 'rgba(51, 69, 89, .5)', //地图背景色
                    borderColor: '#516a89', //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(37, 43, 61, .5)' //悬浮背景
                }
            }
        },
        series: [{
            type: 'lines',
            zlevel: 4,
            polyline: true,
            effect: {
                show: true,
                color:'#F2F008',
                period: 7, //箭头指向速度，值越小速度越快
                trailLength: 0.6, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'circle', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 0, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: 0 //尾迹线条曲直度

                }
            },
            data: data
        },{
            type: 'lines',
            polyline: true,
            data: data,
            lineStyle: {
                normal: {
                    width: 2, //尾迹线条宽度
                    opacity: .7, //尾迹线条透明度
                    curveness: 0, //尾迹线条曲直度
                    color:'#848484'
                }
            },
        }]
    };