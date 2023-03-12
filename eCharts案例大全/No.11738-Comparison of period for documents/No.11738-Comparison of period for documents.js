option = {
    title: {
        text: 'Comparison of period for documents',
        subtext: 'send CI&BL to customer ask for due payment',
        x: '2%',
        textAlign: 'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Industry\'s standard','Excellent suppliers','Part-Rich\'s improved','Part-Rich\'s expected']
    },
    grid: {
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'category',
        data: ['Industry\'s standard \nhandling due date','Excellent suppliers \nhandling due date','Part-Rich\'s improved \nhandling due date','Part-Rich\'s expected \nhandling due date']
    },
    xAxis: {
        type: 'value',
        name: 'days',
        min: 0,
        max: 8,
        interval: 1,
        axisLabel: {
            formatter: '{value} '
            }
    },

    series: [{
        type: 'bar',
        data: [7,5,3,1 ],        
        label: {
            normal: {
                show: true,
                position: 'inside'
                }
            },
        itemStyle: {
            normal: {
                color: function(params) {
                    // build a color map as your need.
                    var colorList = [
                        '#D48265', '#61A0A8', '#2F4554', '#C23531'
                    ];
                    return colorList[params.dataIndex]
                }
            }
        }
    }]
};