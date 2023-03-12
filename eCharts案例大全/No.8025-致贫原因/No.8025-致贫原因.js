var myColor = ['#bf19ff', '#854cff', '#5f45ff', '#02cdff', '#0090ff', '#f9e264', '#f47a75', '#009db2', '#0780cf', '#765005'];
option = {
    color: myColor,
    backgroundColor: '#0f375f',
    title: [{
        text: '致贫原因',
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: '16'
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: "{b}<br/>{c} ({d}%)",
        position: function(p) { // 其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        top: '90%',
        itemWidth: 10,
        itemHeight: 10,
        data: ['因病', '因灾', '因残', '因学', '缺资金', '缺技术', '缺水', '交通条件落后', '其他'],
        textStyle: {
            color: 'rgba(255,255,255,.5)',
            fontSize: '12',
        }
    },
    label: {
        show: true,
        position: 'outside',
        formatter: '{a|{b}：{d}%}\n{hr|}',
        rich: {
            hr: {
                backgroundColor: 't',
                borderRadius: 3,
                width: 3,
                height: 3,
                padding: [3, 3, 0, -12]
            },
            a: {
                padding: [-30, 15, -20, 15]
            }
        }
    },
    series: [{
        type: 'pie',
        center: ['50%', '42%'],
        radius: ['40%', '60%'],
        data: [{
            value: 2342,
            name: '因病'
        }, {
            value: 3321,
            name: '因灾'
        }, {
            value: 1123,
            name: '因残'
        }, {
            value: 876,
            name: '因学'
        }, {
            value: 9862,
            name: '缺资金'
        }, {
            value: 12352,
            name: '缺技术'
        }, {
            value: 12354,
            name: '缺水'
        }, {
            value: 8762,
            name: '交通条件落后'
        }, {
            value: 12865,
            name: '其他'
        }, ]
    }]
};