var labelShow = {
    show: true,
    color: '#fff',
    fontSize: 15,
    formatter: [
        '{d| {d}% }',
        '{b| {b} }'
    ].join('\n'),
    rich: {
        d: {
            fontSize: 15,
            color: '#fff'
        },
        b: {
            fontSize: 18,
            color: '#fff'
        },
    }
};
option = {
     title: {
        text: '生物学科难点分布',
        textStyle: {
            fontSize: 25,
            fontWeight: 'normal',
            color: '#fff',
        },
        x: 'center'
    },
    backgroundColor: '#05274C',
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: {
            color: "#fff"
        },
        data: ['遗传学', '生物实验', '遗传概率', '细胞组成', '光合作用',"其它"]
        
        
    },
    series: [
        {
            name: '兴趣爱好分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 1200, name: '遗传学',label: labelShow},
                {value: 1310, name: '生物实验',label: labelShow},
                {value: 200, name: '遗传概率',label: labelShow},
                {value: 400, name: '细胞组成',label: labelShow},
                {value: 500, name: '光合作用',label: labelShow},
                 {value: 200, name: '其它',label: labelShow},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
