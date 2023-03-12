option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
        bottom: 0,
        itemWidth: 10,
        itemHeight: 10,
        itemStyle: {
            borderWidth: 0,
        },
        textStyle: {
            color: 'rgba(255,255,255,.5)',
            fontSize: 12,
        },
    },
    series: [
        {
            name: '进站',
            type: 'pie',
            center: ['25%', '50%'],
            radius: '15%',
            label: {
                show: true,
                position: 'inside',
                formatter: '{d}%',
                color: '#fff',
            },
            labelLine: {
                length: 0,
                show: false,
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1.5,
            },
            data: [
                { value: 14763, name: '一卡通CPU卡' },
                { value: 29601, name: '一票通CPU卡' },
                { value: 29429, name: '一票通UL卡' },
                { value: 29234, name: '二维码电子票' },
                { value: 29274, name: '交通CPU卡' },
                { value: 14770, name: '人脸过闸' },
            ],
        },
        {
            name: '出站',
            type: 'pie',
            center: ['75%', '50%'],
            radius: '15%',
            label: {
                show: true,
                position: 'inside',
                formatter: '{d}%',
                color: '#fff',
            },
            labelLine: {
                length: 0,
                show: false,
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1.5,
            },
            data: [
                { value: 14835, name: '一卡通CPU卡' },
                { value: 29456, name: '一票通CPU卡' },
                { value: 29649, name: '一票通UL卡' },
                { value: 29570, name: '二维码电子票' },
                { value: 29591, name: '交通CPU卡' },
                { value: 14804, name: '人脸过闸' },
            ],
        },
    ],
};
