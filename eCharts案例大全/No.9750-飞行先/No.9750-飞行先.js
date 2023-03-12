var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
option = {
    geo: {
        map: 'china'
    },
    series: [{
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            color: 'red',
            period: 4, //箭头指向速度，值越小速度越快
            trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: planePath, // circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none
            symbolSize: 15, //图标大小
        },
        lineStyle: {
            type: 'solid', //solid dashed dotted
            color: 'green',
            width: 1, //尾迹线条宽度
            opacity: 1, //尾迹线条透明度
            curveness: .3, //尾迹线条曲直度
            shadowColor: 'blue',
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 4
        },
        data: [
            [{
                coord: [109.1162, 34.2004] // 起始点
            }, {
                coord: [116.4551, 40.2539] // 终止点
            }]
        ]
    }]
}