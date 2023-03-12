option = {
    backgroundColor: '#142468',
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow',
        },
        textStyle: {
            fontSize: 18,
        },
        formatter: "{a} <br/>{b}: {c}万人({d}%)",
    },
    legend: {
        show: false,
        left: "left",
        top: "20%",
        bottom: "30%",
        orient: "vertical",
        itemGap: 25,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#ffffff',
            fontStyle: 'normal',
            fontSize: 14,
            // fontFamily: 'CRegular',
            fontFamily: '黑体',
        },
    },
    color:['#0c85dd','#ffe035','#00c0ff','#f6e9dd','#63a1e3'],
    series: [
        // 数据展示层
        {
        name:'年龄分布',
        type:'pie',
        center:['50%', '50%'],
        radius: [0, '70%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'outside'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        data:[
            {value:1214, name:'20-24岁'},
            {value:943, name:'25-29岁'},
            {value:518, name:'30-34岁'},
            {value:225, name:'35-39岁'},
            {value:51, name:'40岁以上'}
        ]
    },
    // 外边框
    {
        radius: ['75%', '75%'],
        center:['50%', '50%'],
        type: 'pie',
        hoverAnimation: false, //鼠标移入变大
        silent: true,// 取消鼠标响应
        label: {
            show: false,
        },
        data: [{
            value: 0,
            itemStyle: {
                normal: {
                    borderWidth: 0.5,
                    borderColor: '#dbaa56'
                }
            }
        }]
    },
    ]
};