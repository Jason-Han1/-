option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    
    legend: {
        
        orient: 'vertical',
        x: 'left',
        data:['测试集总H','测试集总M','测试集总L']
    },
    series: [
        {
            name:'测试集',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '35%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:29, name:'测试集总H'},
                {value:42, name:'测试集总M'},
                {value:23, name:'测试集总L'}
            ]
        },
        {
            name:'分类',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    
                   
                    rich: {
                        
                        b: {
                            fontSize: 18,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:113, name:'训练集的H个数'},
                {value:169, name:'训练集的M个数'},
                {value:105, name:'训练集的L个数'}
                
            ]
        }
    ]
};