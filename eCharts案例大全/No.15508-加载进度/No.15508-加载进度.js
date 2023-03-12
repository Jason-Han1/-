var tips = 100;


option = {
    title: [{
        text: (tips * 1) + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#747474',
            fontSize: 30,
        }
    }, ],
    series: [
        {
            name: '火灾',
            type: 'pie',
            radius: ['30%', '31%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                value: tips,
                itemStyle: {
                    normal: {
                        color: '#fb358a',
                        shadowBlur: 10,
                        shadowColor: '#fb358a'
                    }
                }
            },
            {
                value: 100 - tips,
            }
            ],
        },

    ]
};

// setInterval(function (){
//     tips++;
//      if(tips>100){
//       tips = 0 
//     }
//     option.series[0].data[0].value = tips;

//     myChart.setOption(option);
// },100);