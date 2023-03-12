var placeHolderStyle = {
    normal: {
        color: 'transparent',
        opacity: 0.1
    },
    emphasis: {
        color: 'transparent',
        opacity: 0.1
    }
}
var data = []


option = {
    backgroundColor: '#030303',
    color:['#FF9600', '#FFFF00', '#0EF4F4'],
    textStyle: {
        fontSize: 16,
        color: '#40E7F4 '
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        top: 'center',
        right: '10%',
        align: 'right',
        data: ['客户1', '客户2', '客户3'],
        textStyle: {
            color: '#fff ',
            fontSize: 16,
            lineHeight: 24,
            padding: 10,
        },
        formatter:function(name){
            if(name === '客户1') return '客户1\n100人';
            if(name === '客户2') return '客户2\n200人';
            if(name === '客户3') return '客户3\n300人';
        },
        itemWidth: 4,
        itemHeight: 38,
        itemGap: 16
    },
    series: [{
        name: '客户1',
        type: 'pie',
        radius: ['80%', '84%'],
        label: false,
        startAngle: 90,
        clockWise: false,
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: 100,
                name: '客户1',
            },
            {
                value: 500,
                hoverAnimation: false, //鼠标移入变大
                itemStyle: placeHolderStyle
            }

        ]
    }, {
        name: '客户2',
        type: 'pie',
        radius: ['75%', '79%'],
        label: false,
        startAngle: ((100/600*360)+90),
        clockWise: false,
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: 200,
                name: '客户2',
            },
            {
                value: 400,
                hoverAnimation: false,
                itemStyle: placeHolderStyle
            }
        ]
    }, {
        name: '客户3',
        type: 'pie',
        radius: ['70%', '74%'],
        label: false,
        startAngle: ((300/600*360)+90),
        clockWise: false,
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: 300,
                name: '客户3',
            },
            {
                value: 300,
                hoverAnimation: false,
                itemStyle: placeHolderStyle
            }
        ]
    },{
        type: 'pie',
        radius: ['70%', '74%'],
        label: false,
        hoverAnimation: false,
        itemStyle:{
            color: 'transparent',
            borderWidth:1,
            borderColor:'#1B2A3A'
        },
        data:[100]
    },{
        type: 'pie',
        radius: ['80%', '84%'],
        label: false,
        hoverAnimation: false,
        itemStyle:{
            color: 'transparent',
            borderWidth:1,
            borderColor:'#1B2A3A'
        },
        data:[100]
    }]
};
console.log(option)