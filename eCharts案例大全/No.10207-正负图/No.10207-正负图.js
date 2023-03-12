var ItemStyle = {
    normal: {
        color: function(params) {
            var colorList;
            if (params.data >= 0) {
                colorList = '#61A5E8';
            } else {
                colorList = '#E16757';
            }
            return colorList;
        },
    }
};
option = {
    xAxis: [{
        type: 'category',
        data: ['C', 'A', 'B4', 'B5']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        type: 'bar',
        itemStyle: ItemStyle,
        barWidth: 20,
        barGap: 1,
        barCategoryGap: 20,
        data: [5, -3, 5, -5],
    }, ]
};