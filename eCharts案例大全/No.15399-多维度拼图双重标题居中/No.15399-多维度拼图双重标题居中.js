option = {
    title: {
        text: '去年',
        subtext: '12月',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 22
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var res = params.seriesName;
            res += '<br/>' + params.name + ' : ' + params.percent + '%';
            return res;
        }
    },
    legend: {
        orient: 'vertical',
        right: '0%',
        bottom: '0%',
        data: ['食堂', '超市', '刷卡', '交通'],
        itemWidth: 20,
        itemHeight: 10
    },
    series: [{
        name: '消费',
        type: 'pie',
        selectedMode: 'single',
        radius: ['50%', '90%'],
        label: {
            normal: {
                position: 'inner',
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 11,
            name: '食堂'
        }, {
            value: 22,
            name: '超市'
        }, {
            value: 33,
            name: '刷卡'
        }, {
            value: 22,
            name: '交通'
        }]
    }]
};