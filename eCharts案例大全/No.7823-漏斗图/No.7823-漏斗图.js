var colorList = ['#bd3639','#a45a35','#c6a754'];
option = {
    backgroundColor: '#20203e',
    color:colorList,
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}"
    },

    series: [
        {
            name: '',
            type: 'funnel',
            left: '15%',
            width: '70%',
            sort: 'ascending',
            gap: 8,
            label: {
                normal: {
                    formatter: '{b}',
                    fontSize: 18,
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}: {c}'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: .8,
                    borderColor: 'rgba(9,20,36,0)',
                }
            },
            data: [
                {value: 30, name: '红'},
                {value: 60, name: '橙'},
                {value: 90, name: '黄'}
            ]
        },
        {
            name: '',
            type: 'funnel',
            left: '15%',
            width: '70%',
            maxSize: '80%',
            sort: 'ascending',
            gap: 8,
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                    formatter: '{c}',
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}: {c}'
                }
            },
            itemStyle: {
                normal: {
                    opacity: 1,
                    borderColor: 'rgba(9,20,36,0)',
                    borderWidth: 0,
                    shadowBlur: 5,
                    shadowOffsetX: 5,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0, 0, 0, 1)'
                }
            },

            data: [
                {value: 25, name: '红'},
                {value: 50, name: '橙'},
                {value: 80, name: '黄'}
            ]
        }
    ]
};