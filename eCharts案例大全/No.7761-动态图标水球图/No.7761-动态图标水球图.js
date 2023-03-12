option = {
    textStyle: {
        center: ['60%', '40%'],
        fontFamily: 'Microsoft YaHei',
        fontSize: 50,
        textBorderColor: '#00B0FF',
        textBorderWidth: 1,
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowBlur: 5,
        textShadowOffsetX: 5,
        textShadowOffsetY: 5,
        fontWeight: 'bold'
    },
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.55, 0.4, 0.25],
        color: ['#00ACC1', '#26C6DA', '#4DD0E1', '#80DEEA'],
        radius: '60%',
        outline: {
            show: false
        },
        amplitude: '7%',
        center: ['40%', '50%'],
        animationDuration: 700,
        backgroundStyle: {
            borderColor: '#29B6F6',
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, 1)',
            shadowBlur: 40,
            shadowOffsetX: 30,
            shadowOffsetY: 30
        },
        shape: `path://
          M
          27.8217 79.0764 L
          4.5698 65.6947 L
          4.5136 38.8339 L
          27.7094 25.3548 L
          32.1501 27.9104 L
          32.1882 47.1812 L
          51.0021 58.2438 L
          51.0175 65.5973 
          Z
          M
          68.9272 81.6524 L
          56.6049 74.5984 L
          56.5405 60.3801 L
          68.7984 53.2157 L
          81.1207 60.2697 L
          81.1851 74.4880
          Z
          M
          54.9019 56.9184 L
          35.1516 45.5585 L
          35.1144 22.7743 L
          54.8275 11.3500 L
          74.5778 22.7099 L
          74.6150 45.4941
          Z
        `,
        label: {
            formatter: function() {
                return '                                    网格化服务管理平台\n\n'
            }
        }
    }]

}