
let index = 0;
var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF'];

function fun() {
    var timer = setInterval(function() {
        console.log(index)
        myChart.dispatchAction({
            type: 'hideTip',
            seriesIndex: 0,
            dataIndex: index
        });
        // 显示提示框
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: index
        });
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index == 0 ? 5 : index - 1
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index
        });
        index++;
        if (index > 5) {
            index = 0;
        }
    }, 3000)
}
fun()
option = {
    backgroundColor:'#0F1A3A',
    title: {
        text: '',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 36
        }
    },
    legend: {
        icon: "circle",
        orient: 'horizontal',
        // x: 'left',
        data: ['公共管网用户数', '地下水用户数', '双水源用户数', '地下水居民用户数', '未定义数'],
        left: '17%',
        bottom: 300,
        align: 'right',
        textStyle: {
            fontSize:'30',
            color: "#"
        },
        itemGap: 20
    },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['10%', '25%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 30,
        emphasis:{
            itemStyle:{
                borderColor: '#f3f3f3',
                borderWidth: 20
            }
        },
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    fontSize:'30',
                    padding: [-30, 15, -20, 15]
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: [{
            'name': '公共管网用户数',
            'value': 5600
        }, {
            'name': '地下水用户数',
            'value': 3600
        }, {
            'name': '双水源用户数',
            'value': 1500
        }, {
            'name': '地下水居民用户数',
            'value': 2000
        }, {
            'name': '未定义数',
            'value': 899
        }],
    }]
};