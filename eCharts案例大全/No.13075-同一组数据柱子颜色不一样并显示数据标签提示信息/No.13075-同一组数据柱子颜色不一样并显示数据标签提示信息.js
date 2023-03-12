option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = ['#2eddc1', '#FCCE10', '#E87C25', '#27727B','#9efdc6', '#f27C99', '#a27C99', '#27727B' ];
                    return colorList[params.dataIndex]
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{b}\n{c}'
                }
            }
        },
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};