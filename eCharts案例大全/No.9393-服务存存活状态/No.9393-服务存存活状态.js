option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['0时', '4时', '8时', '12时', '16时', '20时', '24时']
    },
    tooltip: {
        trigger: 'axis'
    },
    lineStyle: {
        color: '#629e51'
    },
    yAxis: {
        min: 0,
        max: 100,
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        }
    },
    series: [
        {
        data: [50, 50, 50,,, 50, 50],
        type: 'line',
        areaStyle: {
            /*color: function(parmas) {
                if (parmas.value >50) {
                    return '#629e51';
                } else {
                    return '#db5a6b';
                }
            }*/


            normal: {
               color: '#629e51'
            }
        }
    },
    {
        data: [,,50,50,50,50,],
        type: 'line',
        areaStyle: {
            /*color: function(parmas) {
                if (parmas.value >50) {
                    return '#629e51';
                } else {
                    return '#db5a6b';
                }
            }*/


            normal: {
               color: '#db5a6b'
            }
        }
    }
    
    
    ]
};