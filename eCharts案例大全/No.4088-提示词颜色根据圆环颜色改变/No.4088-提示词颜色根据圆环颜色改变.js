var sData = [{
    name: "个体户",
    value: "150000",
    text:'sssss'
}, {
    name: "内资总数",
    value: "120000",
    text:'sssss'
}, {
    name: "外贸总数",
    value: "100000",
    text:'sssss'
}];

var colorList = ['#B383FC','#23C3FF','#FFDE4C'];
option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#000F44' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#000B3B' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
    },
     title: {
        text: '{a|'+ '28000' +'}\n{c|'+ '主体总数' +'}',
        top:'47%',
        left:'55%',
        textStyle: {
            rich:{
                a: {
                    fontSize: 26,
                    color: '#23C3FF'
                },
                c: {
                    fontSize: 16,
                    color: '#EEEEEE',
                    padding: [5,5]
                }
            }
        }
    },
    series: [{
        type: 'pie',
        z: 3,
        center: ['60%', '50%'],
        radius: ['20%', '25%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        legend:{
            data: [sData[0].name]
        },
        label: {
            show: true,
            position: 'outside',
            formatter: function(params, ticket, callback) {
                        return '{value|' + params.value + '}\n{name|' + params.name + '}\n{name|' + params.data.text + '}';
                    },
                    padding: [0, -80],
                    rich: {
                        value: {
                            fontSize: 16,
                            padding: [20, 0],
                            align: 'left'
                        },
                        name: {
                            color: '#eeeeee',
                            align: 'left',
                            fontSize: 14,
                            padding: [4, 0],
                        },
                    }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 150,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: sData
    }]
};