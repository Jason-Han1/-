var num1=60;
var num2=100-num1;
option = {
    color:['#2467FF','#A8CDF6'],
    title: {
        text: '96.12%',
        subtext: '城区',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 40,
            fontWeight: 'normal',
            color: '#3271FF',
        },
        subtextStyle: {
            color: "#000",
            fontSize: 25,
            fontWeight: 'normal'
        }
    },
    series: [{
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
        hoverAnimation: false, 
        data: [
            {
                value:num1
            }, {
                value: num2
            }
        ]
    }]
};