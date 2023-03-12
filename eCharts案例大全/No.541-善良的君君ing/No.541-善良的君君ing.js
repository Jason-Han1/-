option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        data: ['网安部门', '网研部门', '网安三处', '网络基础资源处', '工控部门', '工程中心','其他']
    },
    series: [
        {
            name: '磁盘使用率',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
                position: 'inner',
                fontSize: 14,
            },
            labelLine: {
                show: true,
				smooth: 0.2,
            },
            data: [
                {value: 38, name: '已用空间\n(60.32%)'},
                {value: 25, name: '剩余空间\n(39.68%)'},
            ]
        },
        {
            name: '磁盘使用率',
            type: 'pie',
            radius: ['35%', '60%'],
            labelLine: {
                length: 30,
            },
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                
                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                }
            },
            data: [
                {value: 514, name: '部门A'},
                {value: 23, name: '部门B'},
                {value: 0.00, name: '部门C'},
                {value: 34816, name: '部门D'},
                {value: 2457.6, name: '部门E'},
				{value: 937, name: '部门F'},
				{value: 164.4, name: '部门G'}
            ]
        }
    ]
};
    