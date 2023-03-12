option = {
    title: {
        text: '基础雷达图',
        textStyle: {
            color: 'red',
            fontWeight: 'bold',
        },
        subtext: '仅供参考',
        subtextStyle: {
            fontStyle: 'italic',
        },
        x: 'center'
    },
    tooltip: {},
    legend: {
        x: 'left',
        y: '5%',
        orient: 'vertical'
    },
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            {name:'攻击', max:10000, color:'#aaa'},
            {name:'生命', max:42000, color:'#bbb'},
            {name:'防御', max:1500, color:'#ccc'},
            {name:'速度', max:285, color:'#ddd'},
            {name:'暴击', max:100, color:'#eee'},
            {name:'暴击伤害', max:325, color:'#fff'},
            // {name:'效果命中', max:100, color:'#111'},
            // {name:'效果抵抗', max:100, color:'#222'},
        ]
    },
    series: [{
        name: '实体对比',
        type: 'radar',
        data: [{
            value: [8926, 12763, 356, 125, 95, 225],
            name: '输出'
        }, {
            value: [2591, 37598, 752, 150, 85, 185],
            name: '奶妈'
        }, {
            value: [2859, 2560, 486, 235, 10, 150],
            name: '辅助'
        }]
    }]
};