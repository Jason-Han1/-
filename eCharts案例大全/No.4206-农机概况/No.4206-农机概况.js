var getsjjg = ['插秧机', '拖拉机', '收割机', '农机具'];
var getsjjgrs = [35, 30, 22, 12];
var syjgdata = [];
for (var i = 0; i < getsjjg.length; i++) {
    syjgdata.push({
        name: getsjjg[i],
        value: getsjjgrs[i]
    })
}
var syjgdata2 = [];
for (var i = 0; i < getsjjg.length; i++) {
    syjgdata2.push({
        name: getsjjg[i],
        value: 100
    })
}

var rich = {
    value: {
        color: "#fff",
        fontSize: 26,
        align: 'center'
    },
    percent: {
        color: "#fff",
        fontSize: 20,
    }
}
//农机结构图表
var colorList = ["#25B3C7", "#1FC700", "#FF8700", "#8700E4"];
option = {
    backgroundColor: '#030F37',
    legend: {
        icon: 'rect',
        orient: 'vertical',
        left: '80%',
        top: '40%',
        align: 'left',
        itemGap: 15,
        itemWidth: 20, // 图例图形宽度
        itemHeight: 20, //图例图形高度
        textStyle: {
            color: '#4B93CB',
            rich: {
                name: {
                    align: 'left',
                    width: 60,
                    height: 30,
                    fontSize: 20,
                },
                value: {
                    width: 60,
                    height: 30,
                    fontSize: 20
                },
            }
        },
        data: syjgdata.map(item => item.name),
        formatter: function(name) {
            if (syjgdata && syjgdata.length) {
                for (var i = 0; i < syjgdata.length; i++) {
                    if (name === syjgdata[i].name) {
                        return (
                            '{name| ' +
                            name +
                            '} ' +
                            '{value| ' +
                            syjgdata[i].value +
                            '台} '
                        )
                    }
                }
            }
        }
    },
    series: [{
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                },
                borderColor: '#1E284B',
                borderWidth: 3
            }
        },
        type: 'pie',
        radius: ['40%', '60%'],
        center: ["50%", "50%"],
        labelLine: {
            show: false
        },
        label: {
            normal: {
                formatter: params => {
                    return (
                        '{value|' + params.percent.toFixed(0) + '}{percent|' + '%}'
                    );
                },
                rich: rich,
                position: 'inside'
            }
        },
        data: syjgdata
    }, {
        itemStyle: {
            normal: {
                color: 'rgba(30,38,74,0.5)',
            }
        },
        type: 'pie',
        hoverAnimation: false,
        radius: ['35%', '65%'],
        center: ["50%", "50%"],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 1,
        }],
        z: -1
    }]
};