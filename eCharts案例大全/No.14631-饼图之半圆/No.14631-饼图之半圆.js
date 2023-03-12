var data = [{
    value: 24.5,//正确率的百分比
    name: '高等教育学'
}, {
    value: 89,
    name: '高等教育心理学'
}, {
    value: 38,
    name: '综合学科'
}];

var a = 0;
var scale = 1;
var borderColor = '#021421';
for (var i = 0; i < data.length; i++) {
    a += data[i].value;
}
data.push({
    value: a,
    name: '',
    itemStyle: {
        normal: {
            color: 'none'
        }
    }
});
var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 19 * scale,
        padding: [5, 4]
    },
    circle: {
        backgroundColor: "#ffc72b",
        width: 7 * scale,
        align: 'left',
        height: 7 * scale,
        borderRadius: 7 * scale
    },
    green: {
        color: "rgba(63,255,234,0.5)",
        fontSize: 19 * scale,
        padding: [6, 0]
    },
    tip: {
        color: "#ffc72b",
        fontSize: 40 * scale,
        padding: [15, 4]
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: 21 * scale,
        padding: [10, 0]
    },
    hr: {
        borderColor: '#06405a',
        width: '100%',
        borderWidth: 0.5,
        height: 0
    }
}
console.log(data);
option = {
    legend: {
        formatter: function(name) {
            var sum = 0; //各科正确率总和
            var averagePercent; //综合正确率
            data.forEach(function(value, index, array) {
                if (index < (data.length - 1)) {
                    sum += value.value;
                }
            });
            averagePercent = (sum / (data.length - 1)).toFixed(2);
            return '{tip|' + averagePercent + '%}\n{hr|}\n{white|' + '综合正确率' + '}\n{hr|}';
        },
        data: [data[0].name],
        // data: ['高等教育学'],
        itemGap: 50,
        left: '0',
        top: '0',
        icon: 'none',
        textStyle: {
            color: "#fff",
            fontSize: 16 * scale,
            rich: rich
        },
    },
    backgroundColor: "#021421",
    color: ['#176265', '#28a59e', '#3fffea'],
    series: [{
        name: '访问来源',
        type: 'pie',
        startAngle: -180,
        hoverAnimation: false,
        radius: ['78%', '55%'],
        center: ['50%', '88%'],
        data: data,
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    if (data.length !== (params.dataIndex + 1)) {
                        return '{yellow|' + params.value + '%}\n{circle|}\n{green|' + params.name + '}';
                    }
                },
                color: "rgba(63,255,234,0.5)",
                rich: rich
            }
        },
        // markLine: {
        //     label:{
        //         normal:{
        //             position:'start',
        //         }
        //     },
        //     lineStyle:{
        //         normal:{
        //             color:"#fff"
        //         }
        //     }
        // },
        labelLine: {
            normal: {
                length: 80 * scale,
            }
        },
        itemStyle: {
            normal: {
                borderColor: borderColor,
                borderWidth: 4 * scale,
            },
            // emphasis: {
            //     shadowBlur: 10,
            //     shadowOffsetX: 0,
            //     shadowColor: 'rgba(0, 0, 0, 0.5)'
            // }
        }
    }]
};