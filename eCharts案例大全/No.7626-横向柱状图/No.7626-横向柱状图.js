var index = 0;
var colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: '34%'
    },
    xAxis: {
        type: 'value',

        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }

    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        },
        data: ['非金属矿采选业', '通用及专用设备制造业', '非金属矿物制品业', 
        '黑色金属冶炼及压延加工业', '纺织业', '金属制品业',
        '交通运输、电气、电子设备制造业', '石油加工、炼焦及核燃料加工业',
        '谁的生产和供应业', '化学原料及化学制造业', '废弃资源和废旧材料回收加工业'],
        axisLabel: {
            margin: 10,
            fontSize: 14,
            align: 'right',
            color: '#333',
            
        }
    },
    series: [{
            z: 2,
            name: 'value',
            type: 'bar',
            data: [3.66, 2.86, 1.82, 1.8, 1.53, 1.47, 1.3, 1.25, 1.1, 1.02, 1],
            label: {
                show: true,
                position: 'right',
                color: '#333333',
                fontSize: 14,
                offset: [10, 0]
            }
        }

    ]
};