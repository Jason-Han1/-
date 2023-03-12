option = {
    color: ['#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    toolbox: {
        show: true,
    },
    legend: {
        x: '80%', //水平位置，【left\center\right\数字】
        y: '350', //垂直位置，【top\center\bottom\数字】
        align: 'left', //字在图例的左边或右边【left/right】
        orient: 'vertical', //图例方向【horizontal/vertical】
        icon: 'circle', //图例形状【circle\rect\roundRect\triangle\diamond\pin\arrow\none】
        textStyle: {
            color: '#8C8C8C',
        },
        // height:150
    },
    series: [
        {
            name: '业务警种',
            type: 'pie',
            radius: [0, 150],

            data: [
                { value: 20, name: '国宝' },
                { value: 30, name: '治安' },
                { value: 25, name: '城市3' },
                { value: 25, name: '城市4' },
                { value: 20, name: '城市5' },
                { value: 35, name: '城市6' },
                { value: 30, name: '城市7' },
                { value: 40, name: '城市8' },
                { value: 25, name: '城市9' },
                { value: 25, name: '城市10' },
                { value: 20, name: '城市11' },
                { value: 35, name: '城市12' },
                { value: 30, name: '城市13' },
                { value: 40, name: '城市14' },
                { value: 25, name: '城市15' },
                { value: 25, name: '城市16' },
                { value: 20, name: '城市17' },
                { value: 35, name: '城市18' },
                { value: 30, name: '城市19' },
                { value: 40, name: '城市20' },
            ],
        },
    ],
};
