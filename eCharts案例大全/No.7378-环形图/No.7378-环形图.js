option = {
    backgroundColor: '#071729',
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            clockWise: false,
            radius: ['50%', '60%'],
             center:['50%','50%'],
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'center',
                color:'#ccc'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 70, name: '访问来源',itemStyle: {
                        normal: {
                            color: '#FE505A'
                        }
                    }},
                {value: 30,
                    itemStyle: {
                        normal: {
                            color: '#ccc'
                        }
                    }
                },
               
            ]
        },
        {
            name: '',
            type: 'pie',
            clockWise: false,
            radius: ['20%', '30%'],
             center:['50%','50%'],
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 40, name: '',itemStyle: {
                        normal: {
                            color: '#66B2F9'
                        }
                    }},
                {value: 60,
                    itemStyle: {
                        normal: {
                            color: '#ccc'
                        }
                    }
                },
               
            ]
        }
    ]
};
