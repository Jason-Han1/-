option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}({d}%)"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['展现','点击','访问','咨询','订单']
    },

    series: [
        {
            name:'员工结构',
            type:'funnel',
            left:"center",
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '100%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'ascending',
            gap: 0,
            label: {
                show: true,
                position: 'inside',
                fontSize:20
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
                {value: 48, name: '1-2级'},
                {value: 35, name: '3级'},
                {value: 21, name: '4级(专业)'},
                {value: 11, name: '4级(管理)'},
                {value: 10, name: '5级'},
                {value: 4, name: '6级'},
                {value: 1, name: '7级'}
            ]
        }
    ]
};
