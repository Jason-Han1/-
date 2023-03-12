option = {
    backgroundColor: '#2c343c',

    title: {
        text: '新闻记者年龄情况统计',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
       // formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 100,
        max: 600,
        //inRange: {
        //    colorLightness: [0, 1]
        //}
    },
    series : [
        {
            name:'',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:22582, name:'30岁以下'},
                {value:88936, name:'30岁至40岁'},
                {value:79529, name:'40岁至50岁'},
                {value:40517, name:'50岁以上'},
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'white'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: 'red',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};