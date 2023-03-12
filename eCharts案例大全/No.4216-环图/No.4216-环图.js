option = {
    backgroundColor:'#000',
    // tooltip: {
    //     trigger: 'item',
    //     formatter: "{b} : {d}% <br/> {c}"
    // },
  
    legend: {
        orient: 'vertical',
        itemWidth:20,
        itemHeight:20,
        x: '40',
        y:'center',
        itemGap:30,
        textStyle: {
            color: '#66dbfc',
			fontSize:24
        },
        data: ['低风险', '中低风险', '中等风险', '高风险', '超高风险']
    },
    series: [{
        type: 'pie',
        radius: ['50%', '60%'],
        center: ['57%', '50%'],
        color: ['#66fc7f', '#24a0ff', '#fcc366', '#da66fc', '#f22d2d'],
         data: [{
                value: 10,
                name: '低风险'
            },
            {
                value: 20,
                name: '中低风险'
            },
            {
                value: 2,
                name: '中等风险'
            },
            {
                value: 60,
                name: '高风险'
            },
            {
                value: 1,
                name: '超高风险'
            }
        ],
        labelLine: {
            normal: {
                show: true,
                length: 0,
                length2: 20,
            }
        },
        label: {
            normal: {
                formatter: '\n{hr|}\n{d|{d}%}',
                rich: {
                  
                    hr: {
                        // borderColor: '#12EABE',
                        width: '100%',
                        borderWidth: 2,
                        height: 0
                    },
                    d: {
                        fontSize: 20,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                    },
                }
            }
        }
    }]
};