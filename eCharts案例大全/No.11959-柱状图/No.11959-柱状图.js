var ItemStyle = {
    normal: {
        color: function(params) {
            var colorList;
            if (params.data >= 0) {
                colorList = '#5be2ff';
            } else {
                colorList = '#eb547c';
            }
            return colorList;
        },
    }
};
option = {
    xAxis: [{
        type: 'category',
        axisTick:{
            show: false
        },
        axisLine:{
            lineStyle:{
                color: '#bae0e8'
            }
        },
        data: ['00:00', '00:01', '00:02', '00:02', '00:02', '00:02', '00:02', '00:02', '00:02', '00:02', '00:02', '00:02']
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 2,
        axisLine: {
            show: false
        }, // 控制网格线是否显示
        axisLabel: {
            formatter: function(value) {
                var texts = [];
                if (value === 0) {
                    texts.push('');
                } else if (value === -1) {
                    texts.push('失败');
                } else  {
                    texts.push('正常');
                } 
                return texts;

            }
        }
    }],
    series: [{
        type: 'bar',
        itemStyle: ItemStyle,
        // barWidth: 20,
        barGap: 1,
        barCategoryGap: 10,
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1],
    }, ]
};