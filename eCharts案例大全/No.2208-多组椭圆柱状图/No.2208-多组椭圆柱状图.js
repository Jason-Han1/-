option = {
    color: ['#C65FF9', '#FF704C', '#2872FC'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            console.log(params)
            var tar = params[1];
            var tar1 = params[4];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value+'<br/>'+tar1.seriesName+' : '+tar1.value;
        }
    },
    legend: {
        data: ['武汉', '北京'],
        //right: 10,
        top: 12,
        type: 'scroll',
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 16,
        // 因为柱子顶部和底部是通过 offset 跟柱子结合起来的，如果取消选中，柱子数量变化，又要重新计算 offset，为了简单点就直接禁掉了
        selectedMode: false,
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '武汉',
            type: 'bar',
            barWidth: 24,
            barCategoryGap: 12,
            data: ['11.8651', '4.9385'],
            itemStyle: {
　　　　　　　　　 // 柱体渐变色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#E1A4FF',
                    },
                    {
                        offset: 1,
                        color: '#C65FF9',
                    },
                ])
            },
        },
        {
            name: '武汉',
            type: 'pictorialBar',
            symbolSize: [24, 6],
            // 这个属性很重要，直接决定了顶部跟柱子是否契合
            symbolOffset: [-14.8, -3],
            z: 12,
            itemStyle: { color: '#C65FF9' },
            symbolPosition: 'end',

            // 要给成武汉这两个柱子的值，这是圆柱顶部，值不给对高度会对不上
            data: ['11.8651', '4.9385'],
        },
        {
            name: '武汉',
            type: 'pictorialBar',
            symbolSize: [24, 6],
            symbolOffset: [-14.8, 3],
            z: 12,
            itemStyle: { color: '#C65FF9' },
            symbolPosition: 'start',

　　　　　　　// 这个给成大于 0 的值就行，设置了 position，一定会在柱子底部展示
            data: [1, 1],
        },
        {
            name: '北京',
            type: 'bar',
            barWidth: 24,
            barCategoryGap: 12,
            data: ['3.7493', '2.5536'],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#FFAC97',
                    },
                    {
                        offset: 1,
                        color: '#FF704C',
                    },
                ])
            },
        },
        {
            name: '北京',
            type: 'pictorialBar',
            symbolSize: [24, 6],
            symbolOffset: [14, -3],
            z: 12,
            itemStyle: { color: '#FF704C' },
            symbolPosition: 'end',
            data: ['3.7493', '2.5536'],
        },
        {
            name: '北京',
            type: 'pictorialBar',
            symbolSize: [24, 6],
            symbolOffset: [14, 3],
            z: 12,
            itemStyle: { color: '#FF704C' },
            symbolPosition: 'start',
            data: ['3.7493', '1.5536'],
        }
    ]
};
