option = {
    backgroundColor: '#273454',
    color: ['#cd4692', '#9658c3', '#6c6be2', '#01aebf', '#18b794'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}$ ({d}%)",
        textStyle: {
            fontSize: 16,
        },
    },
    legend: {
        data: ['A', 'B', 'C', 'D', 'E'],
        orient: 'vertical',
        right: '5%',
        top: '13%',
        itemWidth: 50,
        itemHeight: 50,
        itemGap: 30,
        textStyle: {
            color: '#',
            fontSize: 16,
        },
    },
    series: [{
        name: 'TITLE',
        type: 'pie',
        clockwise: false,
        startAngle: 90,
        radius: '75%',
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
        // label: {
        //     normal: {
        //         show: true, 
        //         position: 'inside', 
        //         formatter: '{d}%', 
        //         formatter: function(data){
        //             return data.percent.toFixed(0)+"%"; 
        //         },
        //         textStyle : { 
        //             align : 'center',
        //             baseline : 'middle',
        //             fontFamily : '微软雅黑',
        //             fontSize : 15,
        //             fontWeight : 'bolder'
        //         }
        //     },
        // },
    }],
}