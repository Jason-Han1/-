option = {

    series: [{
        name: '岗位分布',
        type: 'pie',
        radius: '55%',
        center: ['40%', '50%'],
        data: [{
                value: 3,
                name: '前端',
                itemStyle: {
                    normal: {
                        color: '#29c18f'
                    }
                }
            },
            {
                value: 11,
                name: 'java',
                itemStyle: {
                    normal: {
                        color: '#5fc4e1'
                    }
                }
            },

        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#ffffff',
                borderWidth: 2,
                label: {
                    show: true,
                    //	                            position:'inside',
                    formatter: '{b} : {c} '
                }
            },
            labelLine: {
                show: true
            }
        }
    }]
};