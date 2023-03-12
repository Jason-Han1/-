
var seriesData = [{
        name: '财务管理决策实训',
        value: 18
    },
    {
        name: '2商品流通业实训',
        value: 6
    },
    {
        name: '优雅圆舞曲',
        value: 10
    },
    {
        name: '巧克力之夏',
        value: 7.9
    },
    {
        name: '财税宝4G',
        value: 6.7
    },
    {
        name: '成本会计',
        value: 6
    }
];
var index=-1;
var colors=['#1785ef','#2cb7ff','#fe9f2e','#ffc426','#f36119','#7c3ce6','#e63c90']
option = {
    color:colors,
    backgroundColor:'#fff',
    title: {
        text: '项目总量',
        subtext: '20.000 个',
        x: 'center',
        bottom: '42%',
        textStyle: {
            fontSize:18,
            fontWeight:'normal',
            lineHeight :24,
            color: ['#54565a']
        },
        subtextStyle: {
            color: '#201715',
            fontWeight:'bold',
            fontSize: 28
        },
    },
    legend:{
        orient: "vartical",
        right:20,
        top: "center",
        itemWidth: 8,
        itemHeight: 8,
        itemGap :23,
        icon:'circle',
        textStyle:{
            color:'#54565a'
        }
    },
    series: [{
        type: 'pie',
        z:5,
        center:['50%','50%'],
        radius:['40%','50%'],
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        tooltip: {
            show: false
        },
        data:seriesData
    },{
        type:'pie',
        z:4,
        center:['50%','50%'],
        radius:['35%','55%'],
        hoverAnimation:false,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        tooltip: {
            show: false
        },
        itemStyle: {
            normal: {
                color:'#f6f7fc'
            }
        },
        emphasis:{
            show:false,
            itemStyle:{
                color:'#f6f7fc'
            }
        },
        data: [{
            value: 1,
        }],
    }
   
    ]
};

