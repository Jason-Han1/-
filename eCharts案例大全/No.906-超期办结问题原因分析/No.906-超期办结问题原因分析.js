var m2R2Data = [
    {
        value: 180,
        name: '流转环节超时',
        itemStyle: {
            color: '#5087ec',
        },
    },
    {
        value: 50,
        name: '处置环节超时',
        itemStyle: {
            color: '#68bbc4',
            normal: {
                borderWidth: 5,
                
            }
        },
    },
    {
        value: 29,
        // legendname: '流转与处置环节超时',
        name: '流转与处置环节超时',
        itemStyle: {
            color: '#58a55c',
        },
    },
];
nametext='超期办结问题原因分析'

option = {
    title: [
        {
            text: nametext,
            textStyle: {
                fontSize: 16,
                color: 'black',
            },
            top: '100',
            x: 'center',
        },
    ],
    tooltip: {
        trigger: 'item',
    },
    legend: {
        type: 'scroll',
        // 是否横向展示
        // orient: 'vertical',
        // left: '65%',
        align: 'left',
        // top: 'middle',
        textStyle: {
            color: '#8C8C8C',
        },
        x: 'center',
        y: '650',
    },
    series: [
        {
            // 是否需要在鼠标移上去展示
            // name: nametext,
            type: 'pie',
            // center: ['35%', '50%'],
            radius: ['30%', '45%'],
            // clockwise: false, //饼图的扇区是否是顺时针排布
            // avoidLabelOverlap: false,
            itemStyle: {
                //图形样式
                normal: {
                    borderRadius: 10,
                    borderColor: '#ffffff',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    // 是否在外部展示
                    // show: false,
                     formatter: '{b}： {c} ',
                    show: true,
                },
            },
            data: m2R2Data,
           
        },
    ],
};
