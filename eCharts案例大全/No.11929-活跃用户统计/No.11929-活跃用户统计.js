//http://ip:8762/api/datacatalog/countCtrl/getDailyActiveUser?recentlyDay=31
var getData = [
    {"day":"2018-01-01","count":16},{"day":"2018-01-02","count":61},{"day":"2018-01-03","count":26},
    {"day":"2018-01-04","count":62},{"day":"2018-01-05","count":36},{"day":"2018-01-06","count":64},
    {"day":"2018-01-07","count":56},{"day":"2018-01-08","count":66},{"day":"2018-01-09","count":67},
    {"day":"2018-01-10","count":69},{"day":"2018-01-11","count":60},{"day":"2018-01-12","count":11},
    {"day":"2018-01-13","count":23},{"day":"2018-01-14","count":34},{"day":"2018-01-15","count":41},
    {"day":"2018-01-16","count":51},{"day":"2018-01-17","count":13},{"day":"2018-01-18","count":6},
    {"day":"2018-01-19","count":65},{"day":"2018-01-20","count":0},{"day":"2018-01-21","count":1},
    {"day":"2018-01-22","count":2},{"day":"2018-01-23","count":77},{"day":"2018-01-24","count":77},
    {"day":"2018-01-25","count":89},{"day":"2018-01-26","count":34},{"day":"2018-01-27","count":22},
    {"day":"2018-01-28","count":26},{"day":"2018-01-29","count":36},{"day":"2018-01-30","count":76},
    {"day":"2018-01-31","count":16},{"day":"2018-02-01","count":16}]
var data1 = [];
for (var i = 0; i < getData.length; i++) {
    data1.push([getData[i].day,getData[i].count]);
} 
option = {
    backgroundColor:'#fff',
    tooltip: {
        trigger: 'item',
        formatter:'{a}<br/>{c}',
    },
    calendar: [{
        top: 90,
        left: 'center',
        range: [data1[0][0], data1[data1.length-1][0]],
        orient: 'vertical',
        cellSize: 70,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#204371',
                width: 5,
                type: 'solid'
            }
        },
        yearLabel: {
            margin:60,
            show:true,
            color:'#000000'
        },
        monthLabel: {
            firstDay: 1,
            nameMap: 'cn',
            margin:30,
            color:'#000000'
        },
        dayLabel: {
            firstDay: 1,
            nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            textStyle: {
                color: '#000000'
            }
        }
    }],
    series: [{
        name: '活跃用户统计',
        type: 'effectScatter',
        coordinateSystem: 'calendar',
        data: data1,
        symbolSize: function(val) {
                val = val[1] / 5;
                val = val <5 ? 5 : Math.min(val, 30);
                return val;
            },
        itemStyle: {
            normal: {
                color: '#FF0000'
            }
        },
        label: {
            show: true,
            formatter (params) {
                return params.value[0].split("-")[2]
            },
            offset: [25, -20],
            color: '#000000'
        }
    }]
};