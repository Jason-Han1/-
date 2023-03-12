function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 1000)
        ]);
    }
    return data;
}
option = {
    backgroundColor: '#202533',
    calendar: {
        left: 'center',
        top: 'center',
        orient: 'vertical',
        cellSize: 80,
        range: '2017-10',
        dayLabel: {
            show: false,
            firstDay: 1,
            nameMap: 'cn',
            color: '#fff'
        },
        monthLabel: {
            nameMap: 'cn',
            color: '#fff',
            position: 'start',
            align: 'left'
        },
        yearLabel: {
            show: false
        }
    },
    visualMap: {
        type: 'continuous',
        min: 0,
        max: 1000,
        inRange: {
            color: ['#02AC64', '#91CB61', '#F6C93F', '#F89D33', '#D0021B']
        }  
    },
    series: [
        {
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            label: {
                normal: {
                    show: true,
                    offset: [25, -25],
                    textStyle: {
                        color: '#fff'
                    }
                }  
            },
            data: Array(31).fill(undefined).map((v, index) => {
                return [`2017-10-${index + 1}`, index + 1]
            })
        },
        {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: getVirtulData(2017)
        }
    ]
};