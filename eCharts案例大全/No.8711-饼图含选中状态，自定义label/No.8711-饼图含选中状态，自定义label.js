let bgColor = '#05274C';
let bdColor = 'rgba(23, 47, 109, 0.5)';
let scale = 1;
var echartData = [{
    name: 'A类',
    value: '272',
    unit: '元',
    desc: '金额',
    selected: true
}, {
    name: 'B类',
    value: '292',
    unit: '元',
    desc: '金额'
}, {
    name: 'C类',
    value: '120',
    unit: '元',
    desc: '金额'
}, {
    name: 'D类',
    value: '42',
    unit: '元',
    desc: '金额'
}];
option = {
    backgroundColor: bgColor,
    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
    series: [{
        type: 'pie',
        radius: ['0', '50%'],
        selectedMode: 'single',
        selectedOffset: 10,
        labelLine: {
            normal: {
                length: 25,
                length2: 15,
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        label: {
            normal: {
                formatter: (params) => {
                    let desc = params.data.desc || '';
                    let unit = params.data.unit || '';
                    return '{a|' + params.name + '}\n{a|' + desc + ": " + params.value + unit + ' ' + params.percent + '%}'
                },
                rich: {
                    a: {
                        color: '#ffffff',
                        fontSize: 14 * scale,
                        height: 16 * scale,
                        align: 'center'
                    }
                },
            },
        },
        data: echartData,
    }]
};