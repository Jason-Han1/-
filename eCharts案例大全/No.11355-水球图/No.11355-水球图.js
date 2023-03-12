var value = 0.56

var option = {
backgroundColor: '#1b2735',
    series: [{
        type: 'liquidFill',
        radius: '80%',
        color: '#ff0',
        data: [value],
        outline: {
            show: false
        },
        
        backgroundStyle: {
            borderWidth: 2,
            borderColor: '#ff0',
            color: 'transparent'
        },
        label: {
            normal: {
                //formatter: (value * 100).toFixed(2) + '%',
                textStyle: {
                    fontSize: 50,
                    color: '#D94854'
                }
            }
        }
    }]
}