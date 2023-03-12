data = [{
        name: '活跃用户/交易用户',
        value: 75.35,
        sum: 100
    },
    {
        name: '用信额/授信额',
        value: 35.68,
        sum: 100
    },
    {
        name: 'ID猪数据完整度',
        value: 86.24,
        sum: 100
    }
];
data = data.sort((a, b) => {
    return b.value - a.value
});
getArrByKey = (data, k) => {
    let key = k || "value";
    let res = [];
    if (data) {
        data.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
};
opt = {
    index: 0
}
color = ['#368BFF', '#0CEBEA'];

option = {
    grid: {
        top: '2%',
        bottom: '1%',
        right: 30,
        left: 30,
        containLabel: true
    },
    tooltip: {
        show: true,
        formatter: '{b} : {c}%'
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(data, 'name'),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            align: 'right',
            verticalAlign: 'middle',
            fontSize: 16,
            textStyle: {
                color: '#0CEBEA',
            },
            formatter: function(value, index) {
                return (data[index].value / data[index].sum * 100).toFixed(2) + '%'
            },
        }
    }],
    series: [{
        name: '百分比条',
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            barBorderRadius: 30,
        },
        yAxisIndex: 0,
        data: data,
        barWidth: 20,
        barCategoryGap: '40%',
        itemStyle: {
            normal: {
                show: true,
                // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，分别表示右,下,左,上。例如（0，0，0，1）表示从正上开始向下渐变；如果是（1，0，0，0），则是从正右开始向左渐变。
                // 相当于在图形包围盒中的百分比，如果最后一个参数传 true，则该四个值是绝对的像素位置
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: color[0] //指0%处的颜色
                }, {
                    offset: 1,
                    color: color[1]  //指100%处的颜色
                }], false),
                barBorderRadius: 30,

            },
        },
        label: {
            normal: {
                // color: '#000',
                show: true,
                position: [-65, '-20px'],
                textStyle: {
                    fontSize: 16
                },
                formatter: function(a, b) {
                    return a.name
                }
            }
        }
    }]
};