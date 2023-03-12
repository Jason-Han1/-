let textLeft = '8%';// 标题距离左侧的距离

option = {
    backgroundColor: '#12233D',
    title: [
        {
            text: '手术治疗分析',
            top:'10',
            left: textLeft,
            textStyle:{
                color:'#fff',
                fontSize:'18',
                fontWeight:'normal'
            }
        },
        {
            text: '外环',
            bottom:'12%',
            left: textLeft,
            textStyle:{
                color:'#fff',
                fontSize:'20',
                fontWeight:'normal'
            }
        },
        {
            text: '内环',
            bottom:'8%',
            left: textLeft,
            textStyle:{
                color:'#fff',
                fontSize:'20',
                fontWeight:'normal'
            }
        },
    ],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    // legend: {
    //     icon: 'circle',
    //     selectedMode: false,
    //     bottom:'10%',
    //     data: ['微创', '非微创', '','四级', '三级', '其它'],
    //     textStyle:{
    //         color:'#fff',
    //         padding:[0,80,20,0]
    //     }
    // },
    legend: [
        {
            icon: 'circle',
            selectedMode: false,
            left:'15%',
            bottom:'12.3%',
            data: ['微创', '非微创'],
            textStyle:{
                color:'#fff',
                padding:[0,80,20,0]
            }
        },
        {
            icon: 'circle',
            selectedMode: false,
            left:'15%',
            bottom:'8.2%',
            data: ['四级', '三级', '其它'],
            textStyle:{
                color:'#fff',
                padding:[0,80,20,0]
            }
        },
    ],
    series: [
        {
            name: '外环',
            type: 'pie',
            radius: ['50%', '60%'],
            labelLine: {
                length: 30,
            },
            label: false,
            color: ['#04A781', '#07FEC5'],
            data: [
                { value: 300, name: '微创' },
                { value: 400, name: '非微创' },
            ],
        },
        {
            name: '内环',
            type: 'pie',
            radius: ['30%', '40%'],
            labelLine: {
                length: 30,
            },
            label: false,
            color: ['#0CF7ED', '#04A2FF', '#F3CE1F'],
            data: [
                { value: 100, name: '四级' },
                { value: 150, name: '三级' },
                { value: 200, name: '其它' },
            ],
        },
    ],
};
