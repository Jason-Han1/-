option = {
    legend: {
        data: ['扫描数','扫描成功','报价成功','出单成功'],
        itemGap: 40,
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 400,
            fontFamily: 'PingFang SC Regular'
        }
    },
    calculable: true,
    backgroundColor: '#333',
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            width: 540,
            height: 220,
            left: 'center',
            color: [
        {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#FF5624' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(255, 86, 36, 0.2)' // 100% 处的颜色
            }],
        }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#EBE806' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(235, 232, 6, 0.2)' // 100% 处的颜色
            }],
        }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#37FFF9' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(0, 222, 215, 0.2)' // 100% 处的颜色
            }],
        }, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#5EA6FE' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(94, 166, 254, 0.2)' // 100% 处的颜色
            }],
        }],
            label: {
                show: true,
                position: 'inside',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 400,
                padding: [-5, 0, 0, 0],
                fontFamily: 'PingFang SC Regular'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: 'transparent',
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                {value: 100, name: '扫描数'},
                {value: 75, name: '扫描成功'},
                {value: 50, name: '报价成功'},
                {value: 25, name: '出单成功'}
            ]
        }
    ]
};
