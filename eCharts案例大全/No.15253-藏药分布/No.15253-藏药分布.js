option = {
    title : {
        text: '藏药分布',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data: ['《甘露精义》','《甘露八部》','《月光》','《释诠》','《甘露之池》','《概念释诠》','《药性广论》','《精义集要》','《药物大全》','《甘露宝瓶》','《续》','《明释三十章》 ','《自然之底》','《温岛合》','《四部医典•蓝琉璃》','《八支》','《释难》','《宝堆》','《图谱》','《协据》','《甘露之滴》','《图鉴螺眼》','《味气铁鬘》','《如意宝树》','《图鉴》']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:5, name:'《甘露精义》'},
                {value:5, name:'《甘露八部》'},
                {value:5, name:'《月光》'},
                {value:5, name:'《释诠》'},
                {value:5, name:'《甘露之池》'},
                {value:5, name:'《概念释诠》'},
                {value:6, name:'《药性广论》'},
                {value:6, name:'《精义集要》'},
                {value:6, name:'《药物大全》'},
                {value:7, name:'《甘露宝瓶》'},
                {value:9, name:'《续》'},
                {value:10, name:'《自然之底》'},
                {value:12, name:'《温岛合》'},
                {value:12, name:'《四部医典•蓝琉璃》'},
                {value:13, name:'《八支》'},
                {value:16, name:'《释难》'},
                {value:18, name:'《宝堆》'},
                {value:25, name:'《图谱》'},
                {value:27, name:'《协据》'},
                {value:30, name:'《甘露之滴》'},
                {value:38, name:'《图鉴螺眼》'},
                {value:77, name:'《味气铁鬘》'},
                {value:107, name:'《如意宝树》'},
                {value:221, name:'《图鉴》'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
