option = {
    color: [
        '#C1232B',
        '#FF6347',
        '#E87C25',
        '#60C0DD',
        '#27727B',
        '#FE8463',
        '#228B22',
        '#6A5ACD',
        '#8A2BE2',
        '#D7504B',
        '#EE3A8C',
        '#FF4500',
        '#F0805A',
        '#26C0C0',
    ],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    toolbox: {
        show: true,
    },
    legend: {
        orient: 'horizontal',
        y: 'bottom',
        top: 'bottom',
        textStyle: {
            color: '#8C8C8C',
        },
        height: 150,
    },
    series: [
        {
            name: '在线巡查问题',
            type: 'pie',
            radius: [20, 100],
            center: ['50%', '45%'],
            data: [
                { value: 23, name: '戴口罩问题' },
                { value: 25, name: '存在安全隐患' },
                { value: 27, name: '看手机行为' },
                { value: 55, name: '有外来人员' },
                { value: 70, name: '看护不到位' },
                { value: 55, name: '着装和操作不规范' },
                { value: 35, name: '活动设施不足' },
            ],
        },
    ],
};
