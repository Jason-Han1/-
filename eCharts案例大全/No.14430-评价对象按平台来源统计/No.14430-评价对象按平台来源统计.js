option = {
    title : {
        text: '评价对象按平台来源统计',
        x:'left'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['产妇','家属','医院','双方（家属和医院）','其它']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['新浪微博','贴吧','天涯']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'产妇',
            type:'bar',
            data:[19, 6, 6]
        },
        {
            name:'家属',
            type:'bar',
            data:[51, 49, 32]
        },
        {
            name:'医院',
            type:'bar',
            data:[12, 31, 42]
        },
        {
            name:'双方（家属和医院）',
            type:'bar',
            data:[13, 6, 10]
        },
        {
            name:'其它',
            type:'bar',
            data:[5, 8, 10],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
    ]
};