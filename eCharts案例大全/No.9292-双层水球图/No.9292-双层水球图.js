var value = 0.56

var option = {
backgroundColor: '#1b2735',
    series: [{
        type: 'liquidFill',
        radius: '80%',
        itemStyle: {//在项目中  可能用这个改变球的颜色
            color: '#afa'
        },
        color: '#68cffe',
        data: [value,value],//两个value双层波浪
        outline: {
            show: false
        },
        
        backgroundStyle: {
            borderWidth: 2,
            borderColor: '#68cffe',
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