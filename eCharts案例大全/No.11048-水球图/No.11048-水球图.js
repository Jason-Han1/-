var data = [0.6,0.6,0.6]
var option = {
    backgroundColor: '#1b2735',
    title: {
        text: '水球图',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: 'rgb(97, 142, 205)'
        }
    },
    series: [{
        type: 'liquidFill',
        radius: '80%',
        data: data,
        backgroundStyle: {
            borderWidth: 5,
            borderColor: 'rgb(255,0,255,0.9)',
            color: 'rgb(255,0,255,0.01)'
        },
        label: {
            normal: {
                textStyle: {
                    fontSize: 20 //设置不起作用
                }
            }
        }
    }]
}