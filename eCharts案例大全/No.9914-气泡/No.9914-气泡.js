//数据
var data = [{
        "name": "IT人员",
        "value": 300
    },
    {
        "name": "医务人员",
        "value": 106
    },
    {
        "name": "教师工作人员",
        "value": 210
    },
    {
        "name": "精神病障碍患者",
        "value": 320
    },
    {
        "name": "快递人员",
        "value": 490
    },
    {
        "name": "银行人员",
        "value": 150
    },

    {
        "name": "犀利的危险人员",
        "value": 302
    }
];
//图片
var img = "data:image/png;base64,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";
//控制每行字符个数

var xData = [],
    yData = [],
    Datas = [];
data.map(function(a, b) {
    xData.push(a.name);
    yData.push(a.value);
    Datas.push([a.name, a.value])
    // if (a.value === 0) {
    //     yData.push(a.value + min);
    // } else {
    //     yData.push(a.value);
    // }
    // yData.push((Math.random(0,1) * 100).toFixed(0));
});
//找出最大值，判断缩放比
let max = 0;
let len = data.length;
let scale = 1;
for (let i = 0; i < len; i++) {
    if (data[i].value > max) {
        max = data[i].value;
    }
}
if (max > 0 && max < 100) {
    scale = 0.2;
} else if (max > 100 && max < 500) {
    scale = 0.3;
} else if (max > 500 && max < 1000) {
    scale = 0.5;
} else if (max > 1000 && max < 5000) {
    scale = 2;
} else if (max > 5000) {
    scale = 5;
}
var option = {
    tooltip: {},
    backgroundColor: '#0e2147',
    grid: {
        left: '8%',
        bottom: '26%',
        top: '20%',
        width: '89%'
    },
    xAxis: {
        type: 'category',
        data: xData,
        splitLine: {
            show: false
        }, //去除网格线
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#4073b2',
                width: 2,
            }
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: 14,
                color: '#fff',
            },
            formatter: function(value) {
                var ret = ""; //拼接加\n返回的类目项
                var maxLength = 3; //每项显示文字个数
                var valLength = value.length; //X轴类目项的文字个数
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                if (rowN > 1) //如果类目项的文字大于3,
                {
                    for (var i = 0; i < rowN; i++) {
                        var temp = ""; //每次截取的字符串
                        var start = i * maxLength; //开始截取的位置
                        var end = start + maxLength; //结束截取的位置
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                        temp = value.substring(start, end) + "\n";
                        ret += temp; //凭借最终的字符串
                    }
                    return ret;
                } else {
                    return value;
                }
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '人数',
        nameTextStyle: {
            color: "#fff",
            fontSize: 14,
            margin: 2,
        },
        splitLine: {
            show: false
        }, //去除网格线
        axisLine: {
            lineStyle: {
                color: '#4073b2',
                width: 2,
            }
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        }
    },
    series: [{
        name: '',
        type: 'scatter',
        data: Datas,
        symbol: `image://${img}`,
        symbolSize: function(data) {
            // console.log('sadf1211221',data[1]);
            if (data[1] < 5) {
                return Math.sqrt(data[1]) / 0.17;
            }
            return Math.sqrt(data[1]) / scale;
        },
        animationDurationUpdate: 8000,
        animationEasingUpdate: 8000,
        animationDelay: function(idx) {
            // 越往后的数据延迟越大
            return idx * 400;
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                // distance: 16,
                formatter: function(params) {
                    return params.value[1]
                },
                color: '#fff',
                fontSize: 14
            }

        }
    }]
};