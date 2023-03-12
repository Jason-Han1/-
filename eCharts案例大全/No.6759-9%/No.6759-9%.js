option = {
    backgroundColor: '#021228',
    title: [{
        text: '9%',
        // subtext: '88%',
        textAlign: 'center',
        textStyle: {
            color: '#ffffff',
            fontSize: 12,
            lineHeight: 12
        },
        subtextStyle: {
            color: '#ffffff',
            fontSize: 12,
            // fontWeight:800
        },
        x: '50%',
        y: 'center',
    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },

    series: [{
        name: '正常运行',
        type: 'pie',
        radius: ['90%', '91%'],
         clockWise: true,
        startAngle:400,
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: 'center'
        },
        
        labelLine: {
            show: false
        },
        hoverAnimation: false,
        data: [
            {
                
                tooltip: {
                    show: false
                },
                itemStyle: { //设置透明伞形
                    normal: {
                        color: '#02273c', //伞形颜色
                      


                    },

                },
                value: 28,
                name: ''
            },
            {
                itemStyle: {
                    normal: {
                        color:'#ff0950',
                        borderWidth: 0,
                        borderColor:'#ff0950'
                    }
                },

                value: 3,
                name: ''
            },

        ]
    }]
};