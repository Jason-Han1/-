option = {
    backgroundColor: '#273454',
    color: ['#ffdada', '#dbf6e9', '#9ddfd3', '#ffa36c', '#18b794'],
    tooltip: {
        show:"false",
        formatter: "{a} <br/>{b} : {c}$ ({d}%)",
        textStyle: {
            fontSize: 16,
        },
    },
    legend: {
        data: ['A', 'B', 'C', 'D', 'E'],
        orient: 'horizontal',
        width: 150,
        bottom: '0%',
        left:'center',
        itemWidth: 20,
        itemHeight: 20,
        itemGap: 15,
        textStyle: {
            color: '#',
            fontSize: 16,
        },
    },
    grid:{
      top:0,
      padding:{
          top:0
      }
    },
    series: [{
        name: 'TITLE',
        type: 'pie',
        clockwise: false,
        startAngle: 90,
        radius: ["40%","80%"],
        center: ['44%', '50%'],
        hoverAnimation: false,
        roseType: 'radius', //area
        data: [{
                value: 335,
                name: 'A'
            },
            {
                value: 310,
                name: 'B'
            },
            {
                value: 234,
                name: 'C'
            },
            {
                value: 135,
                name: 'D'
            },
            {
                value: 148,
                name: 'E'
            }
        ],
        itemStyle: {
            normal:{ 
                borderColor:'#273454',
                borderWidth:'5',
            },
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 100,
                    width: 0,
                    height: 10,
                    padding: [3, 3, 0, -16],
                    shadowColor: '#1c1b3a',
                    shadowBlur: 1,
                    shadowOffsetX: '0',
                    shadowOffsetY: '2',
                },
                a: {
                    padding: [-35, 15, -20, 5],
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1,
                }
            }
        },
        
    }],
}