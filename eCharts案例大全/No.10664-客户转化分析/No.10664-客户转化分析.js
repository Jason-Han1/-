option = {
    title: {
        text: '',
        subtext: ''
    },
    tooltip: {
        trigger: 'item',
        formatter: "<b>{a}</b>：<br/>{b}： {c} <br/>转化率：{d}%"
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    legend: {
        data: ['客户总数量','电话拜访客户数量','成交客户数量'],
        left: '0%',
    },
    calculable: true,
    series: [
        {
            name:'客户转化',
            type:'funnel',
            left: '10%',
            top: 30,
            //x2: 80,
            bottom: 10,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 1,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                {value: 20, name: '成交客户数量'},
                {value: 60, name: '电话拜访客户数量'},
                {value: 100, name: '客户总数量'}
            ]
        }
    ]
};
