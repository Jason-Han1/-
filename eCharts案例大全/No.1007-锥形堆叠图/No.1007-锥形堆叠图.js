function getVirtulData(year) {
    year = year || '2017';
    let date = +echarts.number.parseDate(year + '-01-01');
    let end = +echarts.number.parseDate(+year + 1 + '-01-01');
    let dayTime = 3600 * 24 * 1000;
    let data = [];
    for (let time = date; time < end; time += dayTime) {
        data.push([echarts.format.formatTime('yyyy-MM-dd', time), Math.floor(Math.random() * 1000)]);
    }
    console.log(data);
    return data;
}
option = {
    tooltip: {
        position: 'top',
    },

    calendar: [
        {
            //   orient: 'vertical',
            yearLabel: {
                show: false,
                margin: 30,
            },
            monthLabel: {
                show: true,
                nameMap: 'cn',
                margin: 20,
                
                color:'red'
            },
            //   dayLabel: {
            //      firstDay: 1,
            //      nameMap: 'cn'
            //   },
            cellSize: 90,
            range: ['2017-02-21', '2017-03-19'],
        },
    ],
    series: [
        {
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            symbolSize: function (val) {
                
                return val[1] / 40;
            },
            label: {
                show: true,
                color: 'red',
            },
            data: getVirtulData('2017'),
        },
    ],
};
