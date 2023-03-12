option = {
    backgroundColor: '#153274',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        //            x: 'right',文字在图例颜色的右边了
        right: 'center',
        bottom: '5%',
        textStyle:{
            color:'#fff'
        },
        //            data数据中若存在''，则表示换行，用''切割。
        data: ['非诉讼', '行政诉讼', '劳动仲裁']
    },
    //        calculable:true,
    series: [{
            type: 'pie',
            radius: ['53%', '55%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: 0,
                },
            },
            itemStyle: {
                normal: {
                    color: function(a) {
                        if (a.data == 2) {
                            return '#5DC3FB';
                        }
                        if (a.data == 1) {
                            return 'rgba(0,0,0, 0)';
                        }
                    },
                },
            },
            data: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
        },
        {
            name: '',
            type: 'pie',
            radius: ['0%', '50%'],
            center: ['50%', '50%'],
            startAngle: 190, //设置起始的角度
            avoidLabelOverlap: false,
            hoverAnimation: true,
            /*控制圆环点击不会放大*/

            label: {
                normal: {
                    show: 1,
                    position: 'top',
                    formatter: '{c}%',
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    smooth: true,
                    length: 30,
                    length2: 30,
                    lineStyle: {
                        type: 'dotted',
                    },
                },
            },
            data: [{
                    value: 21,
                    name: '非诉讼',
                    itemStyle: {
                        color: '#26D2FE'
                    }
                },
                {
                    value: 12,
                    name: '行政诉讼',
                    itemStyle: {
                        color: '#BFF2A3'
                    }
                },
                {
                    value: 16,
                    name: '劳动仲裁',
                    itemStyle: {
                        color: '#FF727A'
                    }
                }

            ]
        }
    ]
};