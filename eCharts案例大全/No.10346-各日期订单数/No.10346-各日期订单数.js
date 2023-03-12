option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var result = '' + params[0].name + '<br/>';
            var unit = '';
            params.forEach(item => {
                unit = item.seriesType === 'bar' ? '%' : '<br/>';
                result += item.seriesName + ' : ' + item.value + unit;
            });
            return result;
        }
    },
    color: ['#4F7FFF', '#349A99'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['11/24', '11/25', '11/26', '11/27', '11/28', '11/29', '11/30']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '工单数',
        type: 'line',

        lineStyle: {
            color: '#4F7FFF'
        },
        stack: '总量',
        label: {
            normal: {
                show: true
            }
        },
        data: [120, 132, 101, 134, 90, 230, 210]
    }]
};