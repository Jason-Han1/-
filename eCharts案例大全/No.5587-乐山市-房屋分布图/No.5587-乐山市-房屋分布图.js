//各地区地图json: http://datav.aliyun.com/tools/atlas/#&lat=31.769817845138945&lng=104.29901249999999&zoom=4


let mapdata = [{
        name: '夹江县',
        value: 4544,
        v: 22,
    },
    {
        name: '井研县',
        value: 423,
        v: 22,
    },
    {
        name: '峨眉山市',
        value: 0,
        v: 22,
    },
    {
        name: '市中区',
        value: 1234,
        v: 22,
    },
    {
        name: '五通桥区',
        value: 12,
        v: 22,
    },
    {
        name: '沙湾区',
        value: 3456,
        v: 22,
    },
    {
        name: '犍为县',
        value: 678,
        v: 22,
    },
    {
        name: '金口河区',
        value: 99,
        v: 22,
    },
    {
        name: '峨边彝族自治县',
        value: 123,
        v: 22,
    },
    {
        name: '马边彝族自治县',
        value: 0,
        v: 22,
    },
    {
        name: '沐川县',
        value: 567,
        v: 22,
    },
];
let mapUrl = 'https://geo.datav.aliyun.com/areas_v2/bound/511100_full.json';


//循环高亮显示图例
let index = -1;
var timer = setInterval(() => {
    // 隐藏提示框
    myChart.dispatchAction({
        type: 'hideTip',
        seriesIndex: 0,
        dataIndex: index
    });
    // 显示提示框
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index + 1
    });
    // 取消高亮指定的数据图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: index
    });
    // 高亮指定的数据图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index + 1
    });
    index++;
    if (index > 10) {
        index = -1;
    }
}, 1500);
//---------------------------------------------鼠标移入静止播放
myChart.on('mouseout', (e) => {
    clearInterval(timer);
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: e.dataIndex
    }); //鼠标移出后先把上次的高亮取消
    timer = setInterval(() => {
        // 隐藏提示框
        myChart.dispatchAction({
            type: 'hideTip',
            seriesIndex: 0,
            dataIndex: index
        });
        // 显示提示框
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: index + 1
        });
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index
        });
        // 高亮指定的数据图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index + 1
        });
        index++;
        if (index > 10) {
            index = -1;
        }
    }, 1500);
});
myChart.on('mousemove', (e) => {
    clearInterval(timer);
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: e.dataIndex
    });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: e.dataIndex
    });
});



myChart.showLoading();
$.getJSON(mapUrl, function(geoJson) {
    drawCharts(geoJson)
})

function drawCharts(json) {
    echarts.registerMap('leshan', json);
    myChart.hideLoading();
    var option = {
        backgroundColor: '#020933',
        title: {
            top: 20,
            text: '乐山市',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                let d = params.data;
                let str = '';
                str += `<div style='line-height:20px;backgroundColor:#0B1521;'>
                          <p style='margin:0;'>安置房：<span style='color:#13B0AF;'>${d.value}座</span></p>
                          <p style='margin:0;'>商品房：<span style='color:#13B0AF;'>${d.v}座</span></p>
                      </div>`
                return str;
            }
        },
        dataRange: {
            bottom: 100,
            right: 100,
            textStyle: {
                color: '#FFFF'
            },
            splitList: [{
                    start: 10000,
                    label: '>=10000',
                },
                {
                    start: 500,
                    end: 900
                },
                {
                    start: 100,
                    end: 400
                },
                {
                    start: 1,
                    end: 99
                },
                {
                    end: 1,
                    label: '0',
                },
            ],
            color: ['#0E3159', '#21446C', '#3168A5', '#428CD7', '#8FBBE8']
        },
        geo: {
            map: 'leshan',
            aspectScale: .75, //长宽比
            zoom: 1.1,
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#013C62',
                    shadowColor: '#182f68',
                    shadowOffsetX: 15,
                    shadowOffsetY: 25,
                    borderWidth: 1,
                },
            },
        },
        series: [{
                type: 'map',
                roam: false, //是否可拖动
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },

                itemStyle: {
                    normal: {
                        borderColor: '#006699',
                        borderWidth: 2,
                        areaColor: '#003366',
                    },
                    emphasis: { //设置高亮样式
                        shadowColor: '#25EEFE',
                        areaColor: '#35ABDD', //轮播的底色
                        borderWidth: 0,
                        borderColor: 'rgba(147, 235, 248, 1)',
                        color: '#35ABDD',
                        shadowOffsetX: 6, //高亮部分的阴影偏移量
                        shadowOffsetY: 10,
                        shadowBlur: -10
                    }
                },
                zoom: 1.1,
                map: 'leshan', //使用
                data: mapdata //热力图数据   不同区域 不同的底色
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                rippleEffect: {
                    period: 15,
                    scale: 4,
                    brushType: 'fill'
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: '#ffff',
                        shadowBlur: 10,
                        shadowColor: 'rgba(128, 217, 248, 1)'
                    }
                },
            }

        ]
    };
    myChart.setOption(option);
}