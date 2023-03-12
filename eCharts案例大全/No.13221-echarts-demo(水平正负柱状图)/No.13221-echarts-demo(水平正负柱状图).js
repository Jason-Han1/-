option = {
    legend: {
        name: ['收入', '支出'],
        textStyle: {
            color: '#fff',
            fontSize: 24,
        },
    },
    backgroundColor: '#08254F',
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
        type: 'value',
        position: 'top',
        axisLabel: {
            show: false,
            color: '#fff',
            fontSize: 14,
        },
        splitLine: {
            show: false
        },
        axisLine: {
            // show:false,
            lineStyle: {
                color: '#FFFFFF'
            }
        },
        axisTick: {
            show: false
        },

    },
    yAxis: [{
        type: 'category',
        //是否反向坐标轴    
        inverse: true,
        //axisTick 坐标轴刻度相关设置
        axisTick: {
            show: false
        },
        //axixLine 坐标轴轴线相关设置
        axisLine: {
            lineStyle: {
                color: '#FFFFFF',
            }
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        //axisLabel 坐标轴刻度标签的相关设置
        axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 20
        }
    }, ],
    series: [{
            name: '支出',
            type: 'bar',
            stack: '收支情况',
            data: [-150, -750, -330, -650, -420],
            barWidth: '30%',
            itemStyle: {
                color: '#00C1FF',
                barBorderRadius: [30, 0, 0, 30],
            },
            label: {
                show: true,
                position: 'left',
                color: '#fff',
                //可自定义label显示,函数使用
                formatter: function(params) {
                    return (params.data * -1) + "万元";
                }
            },

        },
        {
            name: '收入',
            //type决定图表类型
            type: 'bar',
            //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
            stack: '收支情况',
            data: [820, 932, 901, 934, 1290],
            barWidth: '30%',
            itemStyle: {
                color: '#51FFAE',
                barBorderRadius: [0, 30, 30, 0],
            },
            label: {
                show: true,
                position: 'right',
                color: '#fff',
                //自定义显示
                //{a}：系列名。
                // {b}：数据名。
                // {c}：数据值。
                // {@xxx}：数据中名为'xxx'的维度的值，如{@product}表示名为'product'` 的维度的值。
                // {@[n]}：数据中维度n的值，如{@[3]}` 表示维度 3 的值，从 0 开始计数。
                formatter: '{c}万元'
            },
        },

    ]
};