option = {
    backgroundColor: '#031845',
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
       title: {
        text: '五级',
        subtext: '民用户安检隐患',
        x: 'center',
        y: '43%',
        textStyle: {
            fontSize: 40,
            fontWeight: 'normal',
            color: '#00FFFF',
        },
        subtextStyle: {
            fontSize: 28,
            fontWeight: 'normal',
            align:"center",
            color:'#CCCCCC'
        },
    },
    series: [{
        type: 'pie',
        radius: ['140', '180'],
        center: ['50%', '50%'],
        color: ['#80C269', '#00FFFF', '#0090F1', '#FFA800','#4658F6'],
        itemStyle:{
     normal: {
        borderWidth: 5, 
        borderColor: '#031845',
      }
},
        data: [{
                value: 27,
                name: '一级隐患'
            },
            {
                value: 30,
                name: '二级隐患'
            },
            {
                value: 24,
                name: '三级隐患'
            },
            {
                value: 27,
                name: '四级隐患'
            },
            {
                value: 27,
                name: '其他隐患'
            }
           
        ],
        labelLine: {
            normal: {
                show: true,
                length: 40,
                length2: 20,
                lineStyle: {
                    color: '#CCCCCC',
                    width: 1
                }
            }
        },
        label: {
            normal: {
                formatter: '{b|{b}}\n{hr|}\n{c|{c}%}',
                rich: {
                    b: {
                        fontSize: 24,
                        color: '#FFF',
                        align: 'left',
                        padding: 4
                    },
                    hr: {
                        borderColor: '#CCCCCC',
                        width: '100%',
                       // borderWidth: 1,
                        height: 0
                    },
                    c: {
                        fontSize: 24,
                        align: 'center',
                        padding: 4,
                        color:'#00EDED'
                    }
                }
            }
        }
    }
    
    ]
};