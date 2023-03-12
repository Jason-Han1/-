var option = {
    tooltip: {
        triggerOn: "click", //鼠标点击饼图事件
        formatter: function(a, b) {//事件的返回值
            console.log(a)
            console.log(a.name)
            console.log(b)
        }
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        // selectedMode:false,//图例禁止点击设置
        data: ['待确认']//图例名字
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        center: ["50%", "50%"], //圆心坐标
        radius: ['30%', '50%'], //设置内外环半径
        itemStyle: {
            normal: {
                label: {
                    show: false //不显示指引线
                },
                color: {//渐变颜色处理
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#ff6e00' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#ffff00' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            }
        },
        data: [{
            value: 666,//随便给一个数字即可
            name: '待确认',
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: '50', //显示中间的数字
                    fontSize: 40
                }
            },
        }]
    }]
};
myChart.on('legendselectchanged', function (params) {//图例点击事件
    alert(4)
});