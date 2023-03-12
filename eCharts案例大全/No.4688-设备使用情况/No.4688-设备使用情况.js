let color = ['#83a1c5', '#45d7ff'];
let data = {
    bracelet: [{name: '正在使用', value: 18}, {name: '未使用', value: 82}],
    mattress: [{name: '正在使用', value: 45}, {name: '未使用', value: 55}]
}

option = {
    backgroundColor: '#031930',
    title: [
        // 图片
        {
            text: '{img|手环}',
            textStyle: {
                rich: {
                    img: {
                        color: 'red',
                        backgroundColor: {
                            image: ''
                        },
                        align: 'center'
                    }
                }
            },
            top: '15%',
            left: '21%'
        },
        {
            text: '智能工作手表\n使用率',
            textStyle: {
                color: '#82a1c4',
            },
            textAlign: 'center',
            top: '15%',
            left: '30%'
        },
        // 图片
        {
            text: '{img|床垫}',
            textStyle: {
                rich: {
                    img: {
                        color: 'red',
                        backgroundColor: {
                            image: ''
                        },
                        align: 'center'
                    }
                }
            },
            top: '15%',
            left: '61%'
        },
        {
            text: '智能检测床垫\n使用率',
            textStyle: {
                color: '#82a1c4',
            },
            textAlign: 'center',
            top: '15%',
            left: '70%'
        },
        ],
    legend: {
        data: ['正在使用', '未使用'],
        orient: 'horizontal',
        bottom: '20%',
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
            color: '#82a1c4'
        },
        selectedMode: false
    },
    series: [{
        type: 'pie',
        data: data.bracelet,
        silent: true,
        center: ['30%', '50%'],
        radius: '40%',
        label: {
            show: true,
            position: 'inside',
            formatter: function(value) {
                return value.value + '%';
            },
            color: '#111',
        },
        labelLine: {
            show: false
        }
    }, {
        type: 'pie',
        data: data.mattress,
        silent: true,
        center: ['70%', '50%'],
        radius: '40%',
        label: {
            show: true,
            position: 'inside',
            formatter: function(value) {
                return value.value + '%';
            },
            color: '#111'
        },
        labelLine: {
            show: false
        }
    }, {
        type: 'pie',
        silent: true,
        center: ['30%', '50%'],
        radius: '44%',
        label: {
            show: false
        },
        data: [100],
        labelline: {
            show: false
        },
        itemStyle: {
            color: '#022d52'
        },
        z: -1
    }, {
        type: 'pie',silent: true,
        center: ['70%', '50%'],
        radius: '44%',
        label: {
            show: false,
        },
        data: [100],
        labelLine: {
            show: false,
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
    let b = 100;
    let m = 100;
    for(let i = 0; i < data.bracelet.length; i++) {
        if(i === data.bracelet.length - 1) {
            data.bracelet[i].value = b;
            data.mattress[i].value = m;
        }else {
            data.bracelet[i].value = Math.floor(Math.random() * b + 1);
            data.mattress[i].value = Math.floor(Math.random() * m + 1);
            b = b - data.bracelet[i].value;
            m = m - data.mattress[i].value;
        }
    }
    option.series[0].data = data.bracelet;
    option.series[1].data = data.mattress;
    myChart.setOption(option, true);
}

setInterval(function() {
    vdata();
}, 1000);