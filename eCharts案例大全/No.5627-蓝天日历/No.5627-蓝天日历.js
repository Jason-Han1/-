

function getVirtulData() {
    var today = echarts.number.parseDate(new Date());
    var dayTime = 3600 * 24 * 1000;
    var thatday = today - dayTime * 31;

    var data = [];
    for (var time = thatday; time < today; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 100)
        ]);
    }
    return {
        data,
        today: echarts.format.formatTime('yyyy-MM-dd', today),
        thatday: echarts.format.formatTime('yyyy-MM-dd', thatday)
    };
}

option = {
    // title: {
    //     top: 30,
    //     text: '2020年9月污染情况',
    //     subtext: '安徽合肥',
    //     left: 'center',
    // },
    visualMap: {
        min: 0,
        max: 100,
        inRange: {
            color: ['green','yellow', 'red']
        },
        // inRange: {
        //     color: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196027']
        // },
        show: false
    },
    backgroundColor: '#fff',
    calendar: {
        cellSize: [40, 30],
        orient: 'vertical',
        range: [getVirtulData()['thatday'], getVirtulData()['today']],
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 4
        },
        splitLine: {
            show: false
        },
        // yearLabel: { show: false }
        yearLabel: {
            formatter: '2020年蓝天日历',
            fontSize:12,
            margin:30,
            show:true,
            color:'#000000'
        },
        monthLabel: {
            show:true,
            firstDay: 1,
            align:'left',
            position:'end',
            nameMap: 'cn',
            margin:5,
            color:'#000000'
        },
        dayLabel: {
            firstDay: 1,
            margin:10,
            nameMap: 'cn',
            textStyle: {
                color: '#000000'
            }
        }
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData()['data'],
        pointSize: 13,
        itemStyle: {
            normal: {
                color: '#f4e925'
            }
        },
        label: {
            show: true,
            formatter(params) {
                return params.value[0].split('-')[2]
            },
            fontSize:10,
            offset: [0, 0],
            // color: '#000000'
        }
    }
};
