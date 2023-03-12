
option = {
    backgroundColor: '#1D346F',
    title: {
        text: '',
        subtext: '',
        x: 'center'
    },
    tooltip: { //提示框组件。
        trigger: 'item', //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        formatter: '{a} <br/> {b}: {c}',
        textStyle: {
            fontSize: '24px'
        }
    },
    legend: {
        show: false,
        orient: 'horizontal', //图例的排列方向
        x: 'left', //图例的位置
        data: ['']
    },
    geo: [{
        show: true,
        map: 'china',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        // roam: false,//地图设置不可拖拽，固定的
        itemStyle: {
            normal: {
                areaColor: '#031525',
                borderWidth: 0,
                shadowColor: '#D79D3D',
                shadowBlur: 30,
                shadowOffsetX: -5,
                shadowOffsetY: 10
            }
        }
    }],
    series: [
        {
            name: '企业数量',
            type: 'map',
            mapType: 'china',
            roam: true,
            zoom: 1,
            geoIndex: 1,
            itemStyle: {
                normal: {
                    areaColor: '#1D346F',
                    borderColor: '#D79D3D',
                    // borderWidth: 0,
                    // shadowColor: '#D79D3D',
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
        },{
            name: '企业数量2',
            type: 'map',
            mapType: 'china',
            roam: true,
            zoom: 1,
            geoIndex: 1,
            itemStyle: {
                normal: {
                    areaColor: '#1D346F',
                    borderColor: '#D79D3D',
                    // borderWidth: 0,
                    // shadowColor: '#D79D3D',
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
        }
    ]
};
// myChart.setOption(option);