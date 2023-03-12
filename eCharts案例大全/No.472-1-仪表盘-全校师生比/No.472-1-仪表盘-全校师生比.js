var value = 200;
var setColor ='',setStatu='';
if(0<=value &&value<=50){
     setColor ='#01cc00'
     setStatu ='优'
}else if(51<=value&&value<=100){
    setColor ='#feff00'
    setStatu ='良'
}else if(101<=value &&value<=150){
     setColor ='#ff6501'
     setStatu ='轻度污染'
}else if(151<=value &&value<=200){
     setColor ='#fe0000'
     setStatu ='中度污染'
}else if(201<=value &&value<=300){
     setColor ='#860085'
     setStatu ='重度污染'
}else if(value>300){
     setColor ='#800000'
     setStatu ='严重污染'
}
var option = {
   title: {
        text: '{a|' + value + ' }{b|' + setStatu + '}\n{c|' + '空气质量指数' + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 40,
                    color: '#fff',
                    fontWeight:'600',
                    padding: [20, 0]
                },
                b: {
                    fontSize: 12,
                    color: '#fff',
                    padding: [20, 0]
                },
                c: {
                    fontSize: 12,
                    color: '#fff'
                }
            }
        }
    },
    angleAxis: {
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        min: 0,
        max: 412,
        startAngle: 225,
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        data: ['a', 'b', 'c'],
        z: 10,
    },
    polar: {
        radius: '50%',
    },
    series: [
       
        {
            type: 'bar',
            data: [, , 310],
            z: 0,
            coordinateSystem: 'polar',
            barMaxWidth: 25,
            roundCap: true,
            color: '#D8D8D8',
            barGap: '-100%',
        },
        
    ],
    tooltip: {
        show: false,
    },
};
