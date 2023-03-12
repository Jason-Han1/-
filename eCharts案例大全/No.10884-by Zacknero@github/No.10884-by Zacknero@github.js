currentIndex = 2; // 0, 1, 2, 3, ....
len = 9; // len = option.baseOption.timeline.data.length - 1

option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            top: '50%', // 'top: "auto"'' -> 'top: "50%"'
            currentIndex: currentIndex, // 'currentIndex: 2' -> 'currentIndex: currentIndex' 
            controlStyle: {
                show: false
            },
            data: [
                '2002-01-01', '2003-01-01', '2004-01-01',
                {
                    value: '2005-01-01',
                    symbol: 'diamond',
                    symbolSize: 16
                },
                '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01',
                {
                    value: '2011-01-01',
                    symbol: 'diamond',
                    symbolSize: 18
                },
            ],
            label: {
                formatter: function(s) {
                    return (new Date(s)).getFullYear();
                },
                position: 'top',
                rotate: 90,
                padding: -10
            },
            lineStyle: {
                width: 5,
                color: {
                    type: 'linear',
                    colorStops: [{
                        offset: currentIndex / len,
                        color: 'green' // color at position < (currentIndex / len)
                    }, {
                        offset: currentIndex / len,
                        color: 'grey' // color at position > (currentIndex / len) 
                    }]
                }
            }
        }
    }
};

myChart.on('timelinechanged', function(params) {
    option.baseOption.timeline.currentIndex = params.currentIndex;
    option.baseOption.timeline.lineStyle.color.colorStops[0].offset = params.currentIndex / (option.baseOption.timeline.data.length - 1);
    option.baseOption.timeline.lineStyle.color.colorStops[1].offset = params.currentIndex / (option.baseOption.timeline.data.length - 1);
    myChart.setOption(option);
});