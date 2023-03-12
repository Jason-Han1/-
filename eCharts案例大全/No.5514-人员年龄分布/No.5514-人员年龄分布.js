
let index = 0;
var colorList = ['#02F2F3', '#68B5FB', '#C0FE5D', '#F3E58D', '#D45A49'];

var data1 = [{
            'name': '25岁以下',
            'value': 586
        }, {
            'name': '25-30岁',
            'value': 681
        }, {
            'name': '30-35岁',
            'value': 550
        }, {
            'name': '35-45岁',
            'value': 451
        }, {
            'name': '45岁以上',
            'value': 110
        }
        ];
function fun() {
        var timer = setInterval(function() {
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
            dataIndex: index == 0? 5 : index -1
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
    },3000)
}

    fun()
setTimeout(function() {fun()}, 5000);
option = {
    backgroundColor: '#101736',
    "title": {
        "text": "人员年龄分布",
        x: "4%",
        width: 173,
        height: 163,
        fontSize: 22,
        textStyle: {
            color: '#05F0EE',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['24%', '45%'],
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
        label: {
            show: true,
            position: 'outside',
            color: '#ddd',
            formatter: function(params) {
                var percent = 0;
                var total = 0;
                for (var i = 0; i < data1.length; i++) {
                    total += data1[i].value;
                }
                percent = ((params.value / total) * 100).toFixed(0);
                if(params.name !== '') {
                    return params.name + '\n' + '\n' + '占百分比：' + percent + '%';
                }else {
                    return '';
                }
            },
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
        data: data1,
    }]
};