var data_nei = [{
    value: 10,
    name: '动态扣分'
}, {
    value: 20,
    name: '静态扣分'
}];

var data_wai = [{
    value: 10,
    name: '轨道几何'
}, {
    value: 20,
    name: '轨道结构'
}, {
    value: 30,
    name: '轨道'
}, {
    value: 40,
    name: '人体感觉'
}];
var total = "21";

option = {
    backgroundColor: '#fff',
    title: {
        text: '总扣分',
        subtext: total,
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
        formatter: "{b}: {c}"
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['25%', '58%'],

        label: {
            normal: {
                position: 'inner',
                formatter: '{b} {c}',
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
        data: data_nei
    }, {
        type: 'pie',
        radius: ['58%', '83%'],
        label: {
            normal: {
                position: 'inner',
                formatter: '{b} {c}',
                textStyle: {
                    color: '#777777',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        data: data_wai
    }]
};