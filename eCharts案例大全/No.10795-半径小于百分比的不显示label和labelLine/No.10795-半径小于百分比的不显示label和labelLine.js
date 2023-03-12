var data = [];

for (let i = 0; i < 20; i++) {
    let val = Math.floor(Math.random() * 100);
    data.push({
        name: val,
        value: val
    });
}


//预处理
let threshold = 0.05; //小于5%半径的不显示lavel
let sum = 0;
for (var m of data) {
    sum += m.value;
}
for (var i in data) {
    if (data[i].value / sum < threshold) {
        data[i].label = {
            show: false
        };
        data[i].labelLine = {
            show: false
        };
    }
}

option = {
    title: {
        text: '测试小于百分比的不显示label和labelLine',
        subtext: '虚构数据',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} ({d}%)"
    },
    series: [{
        type: 'pie',
        radius: '65%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        data: data,
    }]
};