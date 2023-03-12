function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate(year + '-12-31');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time <= end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000),
            `首污`,
            // Math.floor(Math.random() * 10000)
            '轻度污染'
        ]);
    }
    return data;
}

option = {
    visualMap: {
        show: false,
        type:'piecewise',
        dimension:3,
        categories: ['严重污染', '重度污染', '中度污染', '轻度污染', '良', '优'],
        color:['#cfcfcf','rgb(0,228,0)','rgb(225,225,0)','rgb(225,126,0)','rgb(225,0,0)','rgb(153,0,76)','rgb(126,0,35)']
    },
    calendar: {
        range: '2017',
        orient: 'vertical',
        cellSize:40,
        dayLabel:{
            nameMap: 'cn'
        },
        monthLabel:{
            nameMap: 'cn'
        }
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        label:{
            show:true,
            formatter:(params) =>{
                return `${params.data[2]}\n${params.data[3]}`
            }
        },
        data: getVirtulData(2017)
    }
};