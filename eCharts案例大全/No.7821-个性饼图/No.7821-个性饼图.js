var dataList = [{
        name: '美容汽车服务',
        value: 15,selected:true
    },
    {
        name: '保养服务',
        value: 125
    }
]

const colorList = ['#fce201', '#0ee8f5'];

function appendBaseColor(dataList, colorList, opacity) {
    const temp = [];
    for (let i in dataList) {
        const tempObj = {
            ...dataList[i],
            itemStyle: {
                color: colorList[i],
                opacity: opacity
            }
        };
        temp.push(tempObj)
    }
    return temp;
}

option = {
    backgroundColor: '#20203e',
   
    series: [{
            type: 'pie',
            radius: [0, 66],
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                color:'#88f'
            },
            labelLine: {
                normal: {
                    color:'rgba(0,0,0,0)'
                }
            },
          
           data:[{
               name: '美容汽车服务',
               value: 15,
               selected:true,
               itemStyle: {
                    color: '#fce201',
                    opacity: 1
                }
               
           },{
               name: '保养服务',
                value: 125,
                itemStyle: {
                    color: '#0ee8f5',
                    opacity: 0
                }
                
           }]
        },
        {
            type: 'pie',
            radius: [60, 80],
            label: {
                normal: {
                    fontSize: 14,
                }
            },
            labelLine: {
                show: false
            },
            data: appendBaseColor(dataList, colorList, 1)
        }
    ]
};