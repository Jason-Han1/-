var data = [{
    value: 1500,
    name: '营业部项目'
}, {
    value: 500,
    name: '公司项目'
}];
option = {
    backgroundColor: '#fff',
    title: {
        text: '项目总数',
        subtext: '2000',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        bottom: '0%',
        data: ['营业部项目', '公司项目']
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['25%', '58%'],
        color: ['#AF89D6', '#FF999A','#86D560','#59ADF3',   '#FFCC67'],

        label: {
            normal: {
                position: 'inner',
                formatter: '{b}:{d}%',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }, {
        type: 'pie',
        radius: ['58%', '83%'],
        itemStyle: {
            normal: {
                color: '#F2F2FC'
            },
            emphasis: {
                color: '#ADADAD'
            }
        },
        label: {
            normal: {
                position: 'inner',
                formatter: '{c}家',
                textStyle: {
                    color: '#777777',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        data: data
    }]
};