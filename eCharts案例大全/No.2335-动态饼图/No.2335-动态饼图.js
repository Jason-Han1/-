// option = {
//     title: {
//         text: 'Awesome Chart'
//     },
//     xAxis: {
//         data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//     },
//     yAxis: {},
//     series: [{
//         type: 'bar',
//         data:[220, 182, 191, 234, 290, 330, 310]
//     }]
// };

var chartData = [{name: 'Mon', value: 130},{name: 'Tue', value: 200},{name: 'Wed', value: 150},{name: 'Fri', value: 180},{name: 'Sat', value: 220},{name: 'Sun', value: 210}],

option = {
    tooltip: {
        show: true,
        trigger: 'item',
        // 饼图百分比显示计算
        formatter: function(d) {
            let num = d.percent;
            if (d.percent >= 99) { num = '>99' }
            if (d.percent <= 1) { num = '<1' }
            return d.name + ' : ' + d.value  + ' (' + num + '%)';
        },
        transitionDuration: 0
    },
    color: ['#0082e6', '#15dbc6', '#37d066', '#cbc758', '#c48517', '#c44a07', '#b0222f', '#b63393', '#7a19ac', '#5d12ce', '#5460fa', '#97acfa'],  // 每个区域颜色
    series: [
        {
            name: '',
            type: 'pie',
            center: ['50%', '50%'], // 饼图的圆心坐标
            radius: ['60%', '72%'], // 饼图的半径
            minAngle: 5, // 最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
            hoverOffset: 10, // 高亮扇区的偏移距离
            itemStyle: {
                normal: {
                    borderColor: 12,
                    borderWidth: '#fff',
                },
            },
            emphasis: {
                label: {
                    show: true,
                    // fontSize: '18',
                    // fontWeight: 'bold',
                    formatter: function(item){
                        return '{b|' + item.value + '}\n{c|'+ item.name + '}'
                    },
                    rich: {
                        // 中间数据的样式
                        b: {
                            fontSize: '20',
                            fontWeight: 'bold',
                            padding: [2, 0, 10, 0],
                        },
                        // 中间名字的样式
                        c: {
                            fontSize: '24',
                        },
                    },
                },
            },
            // 饼图图形上的文本标签
            label: {
                show: false,
                position: 'center',
            },
            // 标签的视觉引导线样式
            labelLine: {
                normal: {
                    show: false,
                }
            },
        }
    ],
};

// option.legend.data = chartData.map(item => item.name);
// 得到系列数据
option.series[0].data = chartData.map(item => ({
    value: item.value || null,
    name: item.name || ''
}));



