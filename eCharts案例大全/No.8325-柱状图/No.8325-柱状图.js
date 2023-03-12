option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['星期一星期一星期一星期一星期一星期一星期一星期一星期一星期一星期一星期一', '星期二星期二星期二星期二星期二星期二星期二星期二星期二', '星期三', '星期四', '星期五星期五星期五星期五星期五星期五', '星期六', '星期日星期日星期日星期日星期日星期日星期日星期日星期日星期日星期日星期日星期日'],
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            interval: 0,
            rotate: 20
        },
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
    }]
};