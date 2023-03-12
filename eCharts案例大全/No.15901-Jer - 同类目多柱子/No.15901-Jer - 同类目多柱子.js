var ItemStyle = {
    normal: {
        color: function(params) {
            var colorList;
            if (params.data >= 0) {
                colorList = '#C1232B';
            } else {
                colorList = '#27727B';
            }
            return colorList;
        },
    }
};
option = {
    xAxis: [{
        type: 'category',
        data: ['C', 'A', 'B4', 'B5', 'N', 'D4', 'D5', 'F1', 'O', 'M7', 'R', 'Z','Q']
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
        data: [5, -3, -5, -5, 14, -13, -7, -14, 24,-1,-2,-4,5],
    }, ]
};