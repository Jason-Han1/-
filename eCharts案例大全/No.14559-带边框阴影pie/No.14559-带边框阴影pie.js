/*
    @songcxa
    @2017-11-18
    @带边框阴影pie
*/
option = {
    title: {
        text: '61.3%',
        textStyle: {
            color: '#e41c1c',
            fontSize: 20
        },
        subtext: '人口城镇化率',
        subtextStyle: {
            color: '#999'
        },
        top: '50%',
        right: '2%'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}万 ({d}%)"
    },
    color: ["#e41c1c", "#142944"],
    series: [{
        name: '城乡结构',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        selectedMode: 'single',
        hoverOffset: 3,
        selectedOffset: 5,
        label: {
            normal: {
                show: true,
                position: 'inside',
                color: '#fff',
                formatter: '{b}\n {d}%'
            }
        },
        labelLine: {
            normal: {
                show: false,
                length: 3,
                length2: 5
            }
        },
        data: [{
            value: 36.7,
            name: '城镇人口',
            selected: true
        }, {
            value: 26.3,
            name: '农村人口'
        }],
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 2,
                shadowBlur: 2,
                shadowOffsetX: 0,
                shadowColor: '#00a5f4',
                opacity: 1
            }
        }
    }]
};