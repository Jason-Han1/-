data = [{
        name: '商品1',
        value: 55.35,
        label: "5455",
        sum: 100
    },
    {
        name: '忠县柑橘大丰骐达',
        value: 25.68,
        label: "25",
        sum: 100
    },
    {
        name: '商品3',
        value: 16.24,
        label: "16",
        sum: 100
    },
    {
        name: '商品4',
        value: 6.24,
        label: "6",
        sum: 100
    },
    {
        name: '商品5',
        value: 5.24,
        label: "5",
        sum: 100
    },
    {
        name: '商品3',
        value: 16.24,
        label: "16",
        sum: 100
    },
    {
        name: '商品4',
        value: 6.24,
        label: "6",
        sum: 100
    },
    {
        name: '商品5',
        value: 5.24,
        label: "5",
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
color = ['#01CC98', '#65FE66'];

option = {
    grid: {
        top: '15%',
        bottom: '0%',
        right: '2%',
        left: '2%',
        containLabel: true
    },
    tooltip: {
        show: true,
        formatter: '{b} : {c}%'
    },
    graphic: [{
        type: 'text',
        z: 100,
        left: '4%',
        top: '8%',
        style: {
            fill: '#81A5E8',
            text: '品类',
            // text: [
            //     '横轴表示温度，单位是°C',
            //     '纵轴表示高度，单位是km',
            //     '右上角有一个图片做的水印',
            //     '这个文本块可以放在图中各',
            //     '种位置'
            // ].join('\n'),
            font: '16px Microsoft YaHei',
            
        }
    },{
        type: 'text',
        z: 100,
        left: 'center',
        top: '8%',
        style: {
            fill: '#81A5E8',
            text: '占比',
            // text: [
            //     '横轴表示温度，单位是°C',
            //     '纵轴表示高度，单位是km',
            //     '右上角有一个图片做的水印',
            //     '这个文本块可以放在图中各',
            //     '种位置'
            // ].join('\n'),
            font: '16px Microsoft YaHei'
        }
    },{
        type: 'text',
        z: 100,
        right: '2%',
        top: '8%',
        style: {
            fill: '#81A5E8',
            text: '购买人数',
            // text: [
            //     '横轴表示温度，单位是°C',
            //     '纵轴表示高度，单位是km',
            //     '右上角有一个图片做的水印',
            //     '这个文本块可以放在图中各',
            //     '种位置'
            // ].join('\n'),
            font: '16px Microsoft YaHei'
        }
    }],
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
            fontSize: 14,
            textStyle: {
                color: '#FEFEFE',
            },
            formatter: function(value, index) {
                var val="";
                        if(value.length >4){
                            val = value.substr(0,4)+'...';
                            return val;
                        }else{
                            return value;
                        }
            },
        }
    },{
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
        },
        data:getArrByKey(data, 'label'),
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
        barWidth: 11,
        // barCategoryGap: '40%',
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
            emphasis: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,
                    [{
                            offset: 0,
                            color: '#CE8A00'
                        },
                        {
                            offset: 1,
                            color: '#EEBA00'
                        }
                    ]
                )

            }
        },
        label: {
            normal: {
                // color: '#000',
                show: false,
                // position: [-65, '-20px'],
                position:'right',
                textStyle: {
                    fontSize: 16
                },
                formatter: function(a, b) {
                    // return (data[index].value / data[index].sum * 100).toFixed(2) + '%'
                    return a.value
                }
            }
        }
    }]
};