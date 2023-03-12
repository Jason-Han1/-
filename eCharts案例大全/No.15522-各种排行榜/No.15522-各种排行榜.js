option = {
    title: {
        "text": "各种排行榜", 
        "subtext": "排行榜的性质说明附标题", 
        "x": "center"
    }, 
    color: ['#3398DB'], //可选色：'#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
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
            data : ['张小凡', '李龙爱', '闻得喜', '海明威', '大唐', '四得', '王成明', '唐小风', '吴得海', '李成明'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'人数/应收款',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220, 390, 330, 220]
        }
    ]
};
