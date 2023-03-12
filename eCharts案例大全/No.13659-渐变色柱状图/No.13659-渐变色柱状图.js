option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#FEED08' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#FFC1B2' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
    xAxis: {
        type: 'category',
        show: false
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [{
        data: [120, 200],
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                color: 'black'
            }
        },
        //配置样式
        itemStyle: {
            //通常情况下：
            normal: {　　　　　　　　　　　　 //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function(params) {
                    var colorList = ['#E8A510', '#E8A510'];
                    return colorList[params.dataIndex];
                }
            },
            //鼠标悬停时：
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        //设置柱子的宽度
        barWidth: 120,
    }]
};