var labelStyle = {
    show: true,
    rich: {
        a: {
            color: '#fff',
            align: 'center',
            fontSize: 20,
            fontWeight: "bold"
        },
        b: {
            color: '#fff',
            align: 'center',
            fontSize: 10
        }
    },
    formatter: function(params) {
        return "{a|" + params.value + "%}\n\n" + "{b|在线统计}";
    },
    position: 'center'

};

var itemStyles = function(color1, color2) {
    return {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //描边颜色,右/下/左/上
            offset: 0,
            color: color1
        }, {
            offset: 1,
            color: color2
        }]),
        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //描边颜色
            offset: 0,
            color: color1
        }, {
            offset: 1,
            color: color2
        }]),
        borderWidth: 5 //描边线宽
    }
};

option = {
    backgroundColor: '#0e2147',
    series: [{
        center: ["25%", "50%"],
        radius: ["12%", "13%"],
        clockWise: false, //饼图的扇区是否是顺时针排布
        hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果
        type: 'pie',
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        itemStyle: itemStyles('rgba(209,226,112,1)', 'rgba(175,191,86,1)'),
        data: [{
            name: " ",
            value: 20,
            itemStyle: {
                borderWidth: 0
            }
        }, {
            name: "",
            label: labelStyle,
            value: 80
        }]
    }, {
        center: ["50%", "50%"],
        radius: ["12%", "13%"],
        clockWise: false, //饼图的扇区是否是顺时针排布
        hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果
        type: 'pie',
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        itemStyle: itemStyles('rgba(241,155,88,1)', 'rgba(242,119,22,1)'),
        data: [{
            name: " ",
            value: 20,
            itemStyle: {
                borderWidth: 0
            }
        }, {
            name: "",
            label: labelStyle,
            value: 80
        }]
    }, {
        center: ["75%", "50%"],
        radius: ["12%", "13%"],
        clockWise: false, //饼图的扇区是否是顺时针排布
        hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果
        type: 'pie',
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        itemStyle: itemStyles('rgba(220,122,111,1)', 'rgba(190,65,85,1)'),
        data: [{
            name: " ",
            value: 20,
            itemStyle: {
                borderWidth: 0
            }
        }, {
            name: "",
            label: labelStyle,
            value: 80
        }]
    }]
};