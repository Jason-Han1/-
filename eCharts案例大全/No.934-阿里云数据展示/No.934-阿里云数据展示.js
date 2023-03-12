function getData(percent) {
    return [{
        value: percent,
        name: percent,
        itemStyle: {
             normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00B2EE'
                            }, {
                                offset: 1,
                                color: '#00DDE6'
                            }])
            }
        }
    }, {
        value: 1 - percent,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}

placeHolderStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        }


    }
};

option = {
    backgroundColor: '#0E2A43',
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {

            return params.seriesName + ": " + params.name * 100 + "%";
        }
    },
    legend: {
        top: "25%",
        left: "40%",
        itemHeight: 18,
        data: ['实勘率', '户型图比例', '钥匙率', '委托率', '经理陪看率'],
        textStyle: {
            color: '#fff'
        },

        selectedMode: true,
        orient: "vertical",

    },
    series: [{
        name: '实勘率',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [180, 200],
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
        radius: [155, 175],
        itemStyle: placeHolderStyle,
        data: getData(0.5)
    }, {
        name: '钥匙率',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [130, 150],
        itemStyle: placeHolderStyle,
        data: getData(0.4)
    }, {
        name: '委托率',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [105, 125],
        itemStyle: placeHolderStyle,
        data: getData(0.6)
    }, {
        name: '经理陪看率',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [80, 100],
        itemStyle: placeHolderStyle,
        data: getData(0.3)
    }]
};