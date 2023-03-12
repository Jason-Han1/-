const colorList = ['#47A2FF ', '#53C8D1', '#59CB74', '#FBD444', '#7F6AAD', '#585247']

option = {
    title: {
        text: 'Cluster',
        subtext: '3',
        textStyle: {
            fontSize: 16,
            color: '#999',
            lineHeight: 20
        },
        subtextStyle: {
            fontSize: 28,
            color: '#333'
        },
        textAlign: 'center',
        left: '39.8%',
        top: '45%'
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: '10%',
        top: 'center',
        itemGap: 30,
        selectedMode: false,
        icon: 'pin',
        data: ['南京a', '南京b', '南京c', '南京d', '南京e'],
        textStyle: {
            color: '#77899c',
            rich: {
                uname: {
                    width: 100
                },
                unum: {
                    color: '#4ed139',
                    width: 40,
                    align: 'right'
                }
            }
        },
        formatter(name) {
            return `{uname|${name}}{unum|1132}`
        }
    },
    color: colorList,
    series: [
        {
            name: '姓名',
            type: 'pie',
            radius: [60, 90],
            center: ['40%', '50%'],
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                borderWidth: 3,
                borderColor: '#fff'
            },
            data: [
                {name: '南京a', value: 100},
                {name: '南京b', value: 100},
                {name: '南京c', value: 100},
                {name: '南京d', value: 100},
                {name: '南京e', value: 100},
            ],
        }
    ]
};
