let data = [{
    name: "a",
    value: 40
}, {
    name: "b",
    value: 30
}, {
    name: "c",
    value: 20
}, {
    name: "d",
    value: 10
}]
option = {
    backgroundColor: '#012248',
    color: [
        '#81afe7',
        '#69d4b5',
        '#f08080',
        '#cfd4d8',
        '#ebcc7b',
        '#d2d17c',
        '#5085f2',
        '#8d7fec',
        '#00b7ee',
        '#e75fc3'
    ],
    grid: {
        left: 'center',
        top: 'center',
    },
    tooltip: {
        trigger: 'item',
    },
    calculable: true,
    series: [{
        name: '分布',
        type: 'pie',
        roseType: 'area',
        radius: ['0', '50%'],
        center: ['50%', '50%'],
        data: data,
        itemStyle: {
            normal: {
                label: {
                    textStyle: {
                        fontSize: 25
                    }
                }
            },
            emphasis: {
                shadowBlur: 50,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        //  初始展开效果
        animationType: 'scale', //缩放效果,默认'expansion'沿圆弧展开的效果。
        animationEasing: 'elasticOut',//初始缓动效果
        // 初始动画的延迟，每个数据返回不同的 delay 时间
        animationDelay: function(idx) {
            return Math.random() * 200
        }
    }]
}