//职称结构取数
var getsjjg = ['高级', '中级', '初级', '无等级'];
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
    name: {
        color: "#99B3FF",
        fontSize: 14,
        padding: [0, 5],
        fontWeight:'400',
        align: 'right'
    },
    value: {
        color: "#99B3FF",
        fontSize: 14,
        padding: [5, 5],
        fontWeight:'500',
        align: 'right'
    },
    percent: {
        color: "#99B3FF",
        align: 'right',
        fontSize: 14,
        fontWeight:'500',
        padding: [0, 5]
    },
    hr: {
        borderColor: '#DFDFDF',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
//职称结构图表
var colorList = ["#503EFF","#733DFF","#966EFF","#3E6DFF","#536EBF","#6E93FF","#5FEBFF","#8AF1FF","#8AF1FF"];
option = {
    backgroundColor:'#000',
    series: [{
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                },
                borderColor: '#172659',
                borderWidth: 3
            }
        },
        type: 'pie',
        //clockWise: false ,
        //roseType: 'radius',
        radius: ['40%', '60%'],
        center: ["50%", "50%"],
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#34569D'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return (
                        '{name|' + params.name + '}{percent|' + params.percent.toFixed(0) + '%}'
                    );
                },
                rich: rich,
                padding: [0, -5, 0, -5],
            }
        },
        data: syjgdata
    },{
        itemStyle: {
            normal: {
                color: 'rgba(62,109,255,0.4)',
            }
        },
        type: 'pie',
        hoverAnimation: false,
        radius: ['35%', '65%'],
        center: ["50%", "50%"],
        label: {
            normal: {
                show:false
            }
        },
        data: [{
                value: 1,
            }],
        z:-1
    }]
};