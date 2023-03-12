option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        data: ['警告', '罚款', '责令整改', '责令停产停业','罚没']
    },
    series: [

        {
            name: '处罚类型',
            type: 'pie',
            radius: ['10%', '50%'],
            labelLine: {
                length: 30,
            },
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c|{c}}  {per|{d}%}   ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                
                rich: {
                    a: {
                        color: 'red',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: 'red',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: 'red',
                        fontSize: 14,
                        fontWeight: 'normal',
                        lineHeight: 33
                    },
                    c: {
                        color: 'red'
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
                {value: 1048, name: '警告'},
                {value: 251, name: '罚款'},
                {value: 147, name: '责令整改'},
                {value: 147, name: '责令停产停业'},
                {value: 147, name: '罚没'}
            ]
        }
    ]
};