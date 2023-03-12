var xingmurenri = [{
    "yHeT": 200,
    "wHeT": 300
}, {
    "yHeT": 200,
    "wHeT": 300
}, {
    "yHeT": 200,
    "wHeT": 300
}, {
    "yHeT": 200,
    "wHeT": 300
}, {
    "yHeT": 200,
    "wHeT": 300
}];
option = {
    legend: {
        name: [],
        textStyle: {},
    },
    backgroundColor: '#fff',
    // tooltip（提示框组件）
    tooltip: {
        //trigger(触发类型)，可选'item','axis','none'
        trigger: 'axis',
        axisPointer: {
            //指示器类型,可选'line','shadow','cross'
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: ['卫健', '社区', '电力', '教育', '文明办'],
        axisLabel: {
            show: true
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    },
    yAxis: [{
        type: 'value',
        //axisTick 坐标轴刻度相关设置
        axisTick: {
            show: true
        },
        //axisLabel 坐标轴刻度标签的相关设置
        axisLabel: {
            show: true
        }
    }, ],
    series: [{
            name: '总计',
            type: 'bar',
            barGap: '-100%',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function(val) {
                        var num = xingmurenri[val.dataIndex].yHeT + xingmurenri[val.dataIndex].wHeT;
                        return val.data + "(" + num + ")";
                    }
                }

            },
            data: [20, 40, 55, 30, 12],
        },
        {
            name: '有合同',
            type: 'bar',
            stack: '总计',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function(val) {

                        return val.data + "(" + xingmurenri[val.dataIndex].yHeT + ")";
                    }
                }

            },
            data: [5, 15, 20, 10, 2],
            itemStyle: {
                color: '#00C1FF',
            },

        },

        {
            name: '无合同',
            //type决定图表类型
            type: 'bar',
            //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
            stack: '总计',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function(val) {
                        return val.data + "(" + xingmurenri[val.dataIndex].wHeT + ")";
                    }
                }

            },
            data: [15, 25, 35, 20, 10],
            itemStyle: {
                color: '#CEC608',
            },
        },

    ]
};