var num1=42;
var num2=100-num1;
option = {
    //color:['#C90C0A','#E7E7E7'],
    title: {
        text: num1+'%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 'normal',
            color: '#BBBBBB',
        }
    },
    series: [{
    	animation: false,
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['70%', '90%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false, //去掉hover放大
        data: [
            {
                value:num1,
                itemStyle:{//去掉hover高亮
                	normal:{color:'#C90C0A'},
                	emphasis:{color:'#C90C0A'}
                }
            }, {
                value: num2,
                itemStyle:{//去掉hover高亮
                	normal:{color:'#E7E7E7'},
                	emphasis:{color:'#E7E7E7'}
                }
            }
        ],
    }]
};