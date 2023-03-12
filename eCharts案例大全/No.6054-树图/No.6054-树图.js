let data = {
    name: '111',
    children: [
        {
            name: '股东'
        },
        {
            name: '参股公司'
        },
        {
            name: '供应商'
        },
        {
            name: '客户 '
        },
        {
            name: '合作方'
        }
    ]
}

myChart.setOption(option = {
        tooltip: {
            show: false
        },
        series:[
            {
                type: 'tree',
                data: [data],
                left: '0',
                right: '0',
                top: '8%',
                bottom: '8%',
                symbol: 'circle',
                symbolSize: 7,
                itemStyle: {
                    color: 'transparent',
                    borderWidth: 0
                },
                lineStyle: {
                    curveness: 0.4
                },
                orient: 'vertical',
                expandAndCollapse: true,
                label: {
                    position: 'top',
                    offset: [0,-10],
                    rotate: 0,
                    verticalAlign: 'middle',
                    align: 'center',
                    fontSize: 14,
                    padding: [6, 15],
                    lineHeight: 20,
                    color: 'rgba(50, 88, 222)',
                    borderRadius: 32,
                    backgroundColor: 'rgba(50, 88, 222, 0.13)',
                    borderWidth: 1
                },
                leaves: {
                    label: {
                        position: 'bottom',
                        offset: [0,10],
                        rotate: 0,
                        verticalAlign: 'middle',
                        align: 'center',
                        color: '#666',
                        backgroundColor: 'transparent',
                        borderColor: '#666',
                    }
                },
                animationDurationUpdate: 750
            }
        ]
    });
