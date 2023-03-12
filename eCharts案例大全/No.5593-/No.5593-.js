//职称结构取数
var getsjjg = ['小说', '辅助教材', '期刊', '其他'];
var getsjjgrs = [300, 200, 100, 50];
var syjgdata = [];
for (var i = 0; i < getsjjg.length; i++) {
    syjgdata.push({
        name: getsjjg[i],
        value: getsjjgrs[i]
    })
}
var rich = {
    name: {
        color: "#666666",
        fontSize: 14,
        padding: [8, 30, 0, 30],
        fontWeight: '400',
        align: 'left'
    },
    value: {
        color: "#333",
        fontSize: 15,
        padding: [0, 30, 8, 30],
        fontWeight: '500',
        align: 'left'
    },
    percent: {
        color: "#FFF",
        align: 'right',
        fontSize: 15,
        fontWeight: '500',
        //padding: [0, 5]
    },
    hr: {
        borderColor: '#DFDFDF',
        width: '100%',
        borderWidth: 1,
        height: 0,
    },
    cir: {
        fontSize: 26,
    }
}
//职称结构图表
var colorList = ['#507AFF', '#51D9A2', '#FFC371', '#797AFF'];
option = {
    series: [{
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        radius: ['0%', '50%'],
        center: ["50%", "50%"],
        label: {
            normal: {
                position: 'inner',
                formatter: params => {
                    return (
                        '{percent|' + params.percent.toFixed(0) + '%}'
                    );
                },
                rich: rich,
            }
        },
        data: syjgdata
    }, ]
};