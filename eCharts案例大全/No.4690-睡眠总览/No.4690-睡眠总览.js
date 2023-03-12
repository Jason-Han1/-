let color = ['#83a1c5', '#45d7ff', '#286fff', '#bf8c3d'];
let data = {
    sleep: [{name: '微', value: 10},{name: '低', value: 9}, {name: '中', value: 26}, {name: '高', value: 55}],
    wake: [{name: '微', value: 28},{name: '低', value: 11}, {name: '中', value: 25}, {name: '高', value: 36}],
    move: [{name: '微', value: 18},{name: '低', value: 17}, {name: '中', value: 35}, {name: '高', value: 40}]
};
option = {
    backgroundColor: '#031930',
    title: [{
            text: '最近24小时',
            textStyle: {
                color: '#82a1c4',
                fontSize: 18,
                lineheight: 20
            },
            padding: [10, 20],
            right: '10%',
            top: 50,
            borderColor: '#015292',
            borderWidth: 1,
            borderRadius: 8
        },
        {
            subtext: '{img|入睡图片}\n入睡效率',
            subtextStyle: {
                rich: {
                    img: {
                        color: 'red',
                        backgroundColor: {
                            image: ''
                        },
                        align: 'center'
                    }
                },
                color: '#82a1c4',
                fontSize: 30
            },
            top: '20%',
            left: '15%'
        },
        {
            subtext: '{img|苏醒图片}\n苏醒次数',
            subtextStyle: {
                rich: {
                    img: {
                        color: 'red',
                        backgroundColor: {
                            image: ''
                        },
                        align: 'center'
                    }
                },
                color: '#82a1c4',
                fontSize: 30
            },
            top: '20%',
            left: '45%'
        },
        {
            subtext: '{img|睡动图片}\n睡动幅度',
            subtextStyle: {
                rich: {
                    img: {
                        color: 'red',
                        backgroundColor: {
                            image: ''
                        },
                        align: 'center'
                    }
                },
                color: '#82a1c4',
                fontSize: 30
            },
            top: '20%',
            left: '75%'
        },
    ],
    legend: {
        data: ['微', '低', '中', '高'],
        orient: 'horizontal',
        bottom: '20%',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#82a1c4'
        },
        selectedMode: false
    },
    series: [{
        type: 'pie',
        clockwise: false,
        data: data.sleep,
        silent: true,
        center: ['20%', '50%'],
        radius: '35%',
        label: {
            show: true,
            position: 'inside',
            formatter: function(value) {
                return value.value + '%';
            },
            color: '#000',
            fontSize: 10
        },
        labelLine: {
            show: false
        },
    },{
        type: 'pie',
        clockwise: false,
        data: data.wake,
        silent: true,
        center: ['50%', '50%'],
        radius: '35%',
        label: {
            show: true,
            position: 'inside',
            formatter: function(value) {
                return value.value + '%';
            },
            color: '#000',
            fontSize: 10
        },
        labelLine: {
            show: true
        },
    }, {
        type: 'pie',
        clockwise: false,
        data: data.move,
        silent: true,
        center: ['80%', '50%'],
        radius: '35%',
        label: {
            show: true,
            position: 'inside',
            formatter: function(value) {
                return value.value + '%';
            },
            color: '#000',
            fontSize: 10
        },
        labelLine: {
            show: true
        },
    }, {
        type: 'pie',
        silent: true,
        center: ['20%', '50%'],
        radius: '38%',
        label: {
            show: false
        },
        data: [100],
        labelLine: {
            show: false
        },
        itemStyle: {
            color: '#022d52'
        },
        z: -1
    }, {
        type: 'pie',
        silent: true,
        center: ['50%', '50%'],
        radius: '38%',
        label: {
            show: false
        },
        data: [100],
        labelLine: {
            show: false
        },
        itemStyle: {
            color: '#022d52'
        },
        z: -1
    }, {
        type: 'pie',
        silent: true,
        center: ['80%', '50%'],
        radius: '38%',
        label: {
            show: false
        },
        data: [100],
        labelLine: {
            show: false
        },
        itemStyle: {
            color: '#022d52'
        },
        z: -1
    }],
    color: color
};


// 模拟数据
function vdata() {
    let s = 100;
    let w = 100;
    let m = 100;
    for(let i = 0; i < data.sleep.length; i++) {
        if(i === data.sleep.length - 1) {
            data.sleep[i].value = s;
            data.wake[i].value = w;
            data.move[i].value = m;
        }else {
            data.sleep[i].value = Math.floor(Math.random() * s + 1);
            data.wake[i].value = Math.floor(Math.random() * w + 1);
            data.move[i].value = Math.floor(Math.random() * m + 1);
            s = s - data.sleep[i].value;
            w = w - data.wake[i].value;
            m = m - data.move[i].value;
        }
    }
    option.series[0].data = data.sleep;
    option.series[1].data = data.wake;
    option.series[2].data = data.move;
    myChart.setOption(option, true);
}
setInterval(function() {
    vdata();
}, 1000);