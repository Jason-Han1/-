var data = [
    {
    name: '现刊',
    itemStyle: {
        color: '#1c7ddb'
    },
    children: [{
        name: '完全独有',
        value: 40,
        itemStyle: {
            color: '#2b9dfe'
        }
    }, {
        name: '最新年份独有',
        value: 15,
        itemStyle: {
            color: '#3ab7ef'
        }
      
    },
     {
        name: '现刊重复',
        value: 5,
        itemStyle: {
            color: '#febc5c'
        }
      
    }
    
    
    
    ]
},
 {
    name: '过刊',
    itemStyle: {
        color: '#f77440'
    },
    children: [{
        name: '过刊独有',
        value: 5,
        itemStyle: {
            color: '#6dd9f5'
        }
    }, {
        name: '过刊重复',
        value: 35,
        itemStyle: {
            color: '#ff9a40'
        }
      
    }]
}
    ]

option = {
    series: {
        type: 'sunburst',

        data: data,
        radius: [0, '95%'],
        sort: null,

        emphasis: {
            focus: 'ancestor'
        },

        levels: [{}, {
            r0: '15%',
            r: '35%',
            itemStyle: {
                borderWidth: 2
            },
            label: {
                rotate: 'tangential'
            }
        }, {
            r0: '35%',
            r: '70%',
            label: {
                align: 'right'
            }
        }, {
            r0: '70%',
            r: '72%',
            label: {
                position: 'outside',
                padding: 3,
                silent: false
            },
            itemStyle: {
                borderWidth: 3
            }
        }]
    }
};