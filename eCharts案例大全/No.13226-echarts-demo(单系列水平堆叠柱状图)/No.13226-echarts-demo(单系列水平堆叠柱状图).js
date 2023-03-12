option = {
    legend: {
        name: [],
        //orient 排列方式,默认水平
        orient: 'vertical',
        //align 排列方式为垂直的话,对齐方式由align决定
        align: 'left',
        right: 15,
        top: 'center',
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
        name: '/元',
        type: 'value',
        position: 'top',
        axisLabel: {
            show: true,
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
        data: ['扬州炒饭', '龙门花甲', '黄焖鸡米饭', '麻辣烫', '回锅肉盖浇饭'],
        //axisLabel 坐标轴刻度标签的相关设置
        axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 20
        }
    }, ],
    series: [{
            name: '运送费',
            type: 'bar',
            stack: '费用',
            data: [2.5, 2, 1.5, 2.5, 4],
            barWidth: '30%',
            itemStyle: {
                color: '#00C1FF',
            },

        },
        {
            name: '餐盒费',
            //type决定图表类型
            type: 'bar',
            //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
            stack: '费用',
            data: [2, 3, 2, 2, 2.5],
            barWidth: '30%',
            itemStyle: {
                color: '#51FFAE',
            },
        },
        {
            name: '食品费',
            //type决定图表类型
            type: 'bar',
            //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
            stack: '费用',
            data: [15, 25, 18, 20, 20],
            barWidth: '30%',
            itemStyle: {
                color: '#CEC608',
            },
        },

    ]
};