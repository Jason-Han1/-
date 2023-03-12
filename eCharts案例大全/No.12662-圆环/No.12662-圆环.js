function getData(percent) {
    return [{
        value: percent,
        name: percent,
        itemStyle: {
             normal: {
                 color: 'rgba(0, 0, 0, 0)',
                    //  color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    //             offset: 0,
                    //             color: 'rgba(221,198,148,1)'
                    //         }, {
                    //             offset: 1,
                    //             color: 'rgba(233,178,82,0)'
                    //         }]),
                    borderWidth: 10.5,
                // shadowBlur: 30,
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                                color: 'rgba(221,198,148,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(233,178,82,0)'
                            }]),
                // shadowColor: 'rgba(142, 152, 241, 0.6)'
            }
        }
    }, {
        value: 1 - percent,
         itemStyle: placeHolderStyle
    }];
}

var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};

option = {
    backgroundColor: '#1D346E',
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {

            return params.seriesName + ": " + params.name * 100 + "%";
        }
    },
    
    series: [{
        name: '实勘率',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [160, 170],
        itemStyle: placeHolderStyle,
        
        label: {
            normal: {
                show: false,
            }
        },
        data: getData(0.6)
    }, {
        name: '户型图比例',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [125, 135],
        itemStyle: placeHolderStyle,
        data: getData(0.5)
    }, {
        name: '钥匙率',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [95, 105],
        itemStyle: placeHolderStyle,
        data: getData(0.4)
    // }, {
    //     name: '委托率',
    //     type: 'pie',
    //     clockWise: true, //顺时加载
    //     hoverAnimation: false, //鼠标移入变大
    //     radius: [95, 105],
    //     itemStyle: placeHolderStyle,
    //     data: getData(0.6)
    // }, {
    //     name: '经理陪看率',
    //     type: 'pie',
    //     clockWise: true, //顺时加载
    //     hoverAnimation: false, //鼠标移入变大
    //     radius: [80, 90],
    //     itemStyle: placeHolderStyle,
    //     data: getData(0.3)
    }]
};