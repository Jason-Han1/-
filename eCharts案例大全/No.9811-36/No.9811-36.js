
option = {
    backgroundColor: '#031845',
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
    
       title: {
        text: '36',
        subtext: '新能源装机',
        x: 'center',
        y: '40%',
        textStyle: {
            fontSize: 72,
            fontWeight: 'normal',
            color: '#fff',
        },
        subtextStyle: {
            fontSize: 40,
            fontWeight: 'normal',
            align:"center",
            color:'#fff'
        },
    },
    series: [{
        type: 'pie',
        radius: ['140', '180'],
        center: ['50%', '50%'],
        color: ['#133C6A', '#3CAAFC', '#0090F1', '#FFA800','#4658F6'],
        itemStyle:{
     normal: {
        borderWidth: 5, 
        borderColor: '#031845',
      }
},
        data: [{
                value: 27,
                name: '新能源'
            },
            {
                value: 30,
                name: '火电'
            }
           
        ],
        labelLine: {
            normal: {
                show: true,
                length: 50,
                length2: 20,
                lineStyle: {
                    color: '#2878BD',
                    width: 2
                }
            }
        },
        label: {
            normal: {
                formatter: '{b|{b}}\n{hr|}\n{c|{c}%}',
                rich: {
                    b: {
                        fontSize: 32,
                        color: '#FFF',
                        align: 'left',
                        padding: 4
                    },
                    hr: {
                        borderColor: '#2878BD',
                        width: '100%',
                        borderWidth: 2,
                        height: 0
                    },
                    c: {
                        fontSize: 32,
                        align: 'center',
                        padding: 4,
                        color:'#fff'
                    }
                }
            }
        }
    }
    
    ]
};