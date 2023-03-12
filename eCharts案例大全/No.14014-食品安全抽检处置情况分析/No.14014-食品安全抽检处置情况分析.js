option = {
    backgroundColor: '#ffffff',
    title:{
        text:'食品安全抽检处置情况分析',
         subtext: '抽检环节处置情况',
        left:'left'
    },
    legend: {
        top: 50,
        left:30,
        textStyle: {
            color: '#000000',
        },
        data: ['产品控制','排查整改','行政处罚']
    },
    grid: {
        left: '3%',
        right: '44%',
        top:75,
         bottom: '41%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: true
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['生产', '流通', '餐饮']

        }
    ],
    series: [
        {
            name: '产品控制',
            type: 'bar',
            barWidth : 20,
            itemStyle: {
                normal: {
                    color: '#5793f3',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data:[347,486,389]
        },{
            name: '排查整改',
            type: 'bar',
            barWidth : 20,
            itemStyle: {
                normal: {
                    color: '#999'
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [207,232,160]
        },{
            name: '行政处罚',
            type: 'bar',
            barWidth : 20,
            itemStyle: {
                normal: {
                    color: '#7eccf1'
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [60,73,79]
        }]
};