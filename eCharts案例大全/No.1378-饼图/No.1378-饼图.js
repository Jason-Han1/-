option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    grid:{
        width:380,
        height:380,
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '面积模式',
            type: 'pie',
            radius: [20, 140],
            center: ['50%', '50%'],
            radius:['50%','70%'],
            label: {
                show: true,fontSize:18
            },
            data: [
                {value: 1048, name: '已完成'},
                {value: 735, name: '滞后'},
                {value: 580, name: '正常推进'},
                {value: 484, name: '预警'},
                {value: 300, name: '其他'}
            ]
        }
    ]
};