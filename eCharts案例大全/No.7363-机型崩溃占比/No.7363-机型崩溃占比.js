option = {
    title: {
        text: '机型崩溃占比',
        subtext: '机型崩溃次数/所有机型总崩溃次数',
        left: 'center'
    },
    color: ['#1890FF', '#2FC25B', '#FACC14',  '#F04864',  '#8543E0', '#13C2C2', '#3436C7', '#FF99C3', '#223273', '#FF9D4D'],
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        // formatter: '{a} <br/>{b} : {c} ({d}%)'
        formatter: '{a}：{b} <br/> 崩溃占比：{d}% <br/> 崩溃次数：{c} 次'

    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['小米8', 'iPhoneX', '华为P30', '红米5', 'OPPO R11', 'iPhone 11', 'iPhone 6S', 'iPhone 7', 'iPhone 8', 'iPhone XS']
        // selected: data.selected
    },
    series: [
        {
            name: '机型',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: [
                {value: 25, name: '小米8'},
                {value: 20, name: 'iPhoneX'},
                {value: 15, name: '华为P30'},
                {value: 10, name: '红米5'},
                {value: 7, name: 'OPPO R11'},
                {value: 5, name: 'iPhone 11'},
                {value: 5, name: 'iPhone 6S'},
                {value: 5, name: 'iPhone 7'},
                {value: 5, name: 'iPhone 8'},
                {value: 3, name: 'iPhone XS'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
