const chartData = {
    total: 1000,
    data: [{
        value: 45,
        name: '诊断1'
    }, {
        value: 25,
        name: '诊断2'
    }, {
        value: 8,
        name: '诊断3'
    }, {
        value: 18,
        name: '诊断4'
    }, {
        value: 7,
        name: '诊断5'
    }, {
        value: 3,
        name: '诊断6'
    }, {
        value: 10,
        name: '诊断7'
    }, {
        value: 17,
        name: '诊断8'
    }, {
        value: 7,
        name: '诊断9'
    }, {
        value: 7,
        name: '这是一个比较c的诊断10'
    }]
}
let legendName = [];
chartData.data.map(item => legendName.push(item.name))

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {d}%"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        y: 'center',
        itemWidth: 20,
        itemHeight: 20,
        align: 'left',
        textStyle: {
            fontSize: 14,
            color: '#000'
        },
        data: legendName,
        formatter: name => {
            for (let i = 0; i < chartData.data.length; i++) {
                if (name === chartData.data[i].name) {
                    return name + '     ' + (chartData.data[i].value / chartData.total * 100).toFixed(2) + '%' + '     ' + chartData.data[i].value;
                }
            }
        }
    },
    series: [{
        type: 'pie',
        center: ["30%", "50%"],
        clockwise: false,
        data: chartData.data,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            }
        }
    }],
    color: [
        '#7c4bd8',
        '#e05667',
        '#f4cd49',
        '#5ebe67',
        '#3c90f7'
    ],
    backgroundColor: '#fff'
};