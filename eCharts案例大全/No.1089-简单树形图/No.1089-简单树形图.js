var data = {
    name: '原因分析',
    children: [
        {
            name: '可能非本人登陆',
        },
    ],
};
option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        confine: true,
    },
    series: [
        {
            type: 'tree',
            data: [data],
            left: 'center',
            // width: '50%',
            symbol: 'circle',
            symbolSize: 7,
            itemStyle: {
                color: '#007af4',
                borderColor: '#007af4',
                shadowColor: '#4A99FF',
                shadowBlur: 10,
            },
            lineStyle: {
                color: '#007af4',
            },
            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 15,
                    color: '#a4b5e3',
                    width: 80,
                    overflow: 'break',
                },
            },
            leaves: {
                label: {
                    normal: {
                        position: ['20', '-3'],
                        verticalAlign: 'top',
                        align: 'left',
                        color: '#9ab2e5',
                    },
                },
            },
            emphasis: {
                focus: 'descendant',
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
        },
    ],
};
