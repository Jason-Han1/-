var percent = 0.7;

function getData() {
    return [{
        value: percent,
        itemStyle: {
            normal: {
                color: '#fb358a',
                shadowBlur: 10,
                shadowColor: '#fb358a'
            }
        }
    }, {
        value: 1 - percent,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}

option = {
    backgroundColor: '#333645',

    title: {
        text: (percent * 100) + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#98a0c4',
            fontWeight: 'bolder',
            fontSize: 64,
        }
    },
    series: [{
            type: 'pie',
            radius: ['39%', '49%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },

            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#313443',
                        shadowBlur: 10,
                        shadowColor: '#1b1e25',


                    }
                }
            }],

            animation: false
        },

        {
            type: 'pie',
            radius: ['39%', '49%'],
            silent: true,
            label: {
                normal: {
                    show: false,
                }
            },

            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#313443',
                        shadowBlur: 50,
                        shadowColor: '#1b1e25'
                    }
                }
            }],
        
            animation: false
        },

        {
            name: 'main',
            type: 'pie',
            radius: ['50%', '51%'],
            label: {
                normal: {
                    show: false,
                }
            },
            data: getData(),
            
            animationEasingUpdate: 'cubicInOut',
            animationDurationUpdate: 500
        }
    ]
};
// var arr = [0.1,0.2,0.3,0.4]
// var i = 1
var a=0
var timer1,timer2;
function add(){
    a++;
    console.log(a);
    myChart.setOption({
        title: {
            text: (a *1) + '%'
        },
        series: [{
            name: 'main',
            radius: [ '50%', (a + 51) + '%']
        }]
    })
    if(a>=10){
        clearInterval(timer1);
        timer2=setInterval(sub,1000);
    }
}
function sub(){
    a--;
    console.log(a);
    myChart.setOption({
        title: {
            text: (a *1) + '%'
        },
        series: [{
            name: 'main',
            radius: [ '50%', (a + 51) + '%']
        }]
    })
    if(a<=0){
        clearInterval(timer2);
        timer1=setInterval(add,1000);
    } 
}
timer1=setInterval(add,1000);