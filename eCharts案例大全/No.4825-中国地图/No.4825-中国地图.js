var uploadedDataURL = "/asset/get/s/data-1606874759613-JTEfY7Bl9.json";


data = [{
    fromName: '合肥',
    toName: '上海',
    count: '1',
    amount: '89999',
    coords: [
        [118.8062, 31.9208],
        [119.4543, 25.9222]
    ]
}, {
    fromName: '拉萨',
    toName: '上海',
    count: '1',
    amount: '89999',
    coords: [
        [127.9688, 45.368],
        [119.4543, 25.9222]
    ]

}, {
    fromName: '吉林',
    toName: '上海',
    count: '1',
    amount: '89999',
    coords: [
        [110.3467, 41.4899],
        [119.4543, 25.9222]
    ]
}, {
    fromName: '吉林',
    toName: '上海',
    count: '1',
    amount: '89999',
    coords: [
        [125.8154, 44.2584],
        [119.4543, 25.9222]
    ]
}, {
    fromName: '吉林',
    toName: '上海',
    count: '1',
    amount: '89999',
    coords: [
        [116.4551, 40.2539],
        [119.4543, 25.9222]
    ]
}, {
    fromName: '吉林',
    toName: '上海',
    count: '1',
    amount: '89999',
    coords: [
        [123.1238, 42.1216],
        [119.4543, 25.9222]
    ]
}, {
    fromName: '吉林',
    toName: '上海',
    count: '1',
    amount: '89999',
    coords: [
        [114.4995, 38.1006],
        [119.4543, 25.9222]
    ]
}, {
    fromName: '吉林',
    toName: '上海',
    count: '1',
    amount: '89999',
    coords: [
        [117.4219, 39.4189],
        [119.4543, 25.9222]
    ]
}]


$.get(uploadedDataURL, function(chinaJson) {
    echarts.registerMap('china', chinaJson);
    console.log(chinaJson)

    option = {
        // backgroundColor: '#090F27',
        geo: {
            map: 'china',
            show: true, //显示地图
            roam: false,
            label: {
                emphasis: {
                    show: false
                }
            },
            aspectScale: 1, //地图的长宽比拉升地图
            layoutSize: "100%", //地图的大小
            itemStyle: {
                normal: {
                    opacity: 1
                },
                emphasis: {
                    label: {
                        show: true,
                        opacity: 0
                    }
                }
            },
        },
        series: [{
            name: '',
            type: 'lines',
            zlevel: 2,
            tooltip: {
                show: false
            },
            effect: {
                show: true,
                period: 3, //箭头指向速度，值越小速度越快
                trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    color: '#FFCE8F',
                    width: 2, //线条宽度
                    opacity: 0.8, //尾迹线条透明度
                    curveness: .3 //尾迹线条曲直度
                },
                emphasis: {
                    width: 3,
                    opacity: 0.5,
                }
            },
            data: data
        }, ]
    };
    myChart.setOption(option);
});