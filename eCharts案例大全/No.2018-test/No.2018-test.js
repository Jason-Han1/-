let nameList = ['总人数','双师型人数']
let xData = [
    '文学类', 
    '历史学类', 
    '理学类', 
    '工学类', 
    '农学类', 
    '医学类', 
    '军事学类',
    '管理学类',
    '艺术类', 
    '未填写'
];
let yData = ['学士以下', '学士', '硕士', '博士'];
let scatterData = [
    ['文学类','学士以下',31],
    ['文学类','硕士',40],
    ['文学类','博士',50],
    ['历史学类','硕士',40],
    ['历史学类','博士',50],
    ['理学类','学士以下',31],
    ['理学类','学士',31],
    ['理学类','硕士',40],
    ['工学类','学士以下',31],
    ['农学类','学士',31],
    ['农学类','硕士',40],
    ['农学类','博士',50],
    ['医学类','硕士',40],
    ['医学类','博士',50],
    ['军事学类','学士以下',31],
    ['军事学类','学士',31],
    ['军事学类','硕士',40],
    ['军事学类','博士',50],
    ['管理学类','学士以下',31],
    ['管理学类','学士',31],
    ['管理学类','硕士',40],
    ['艺术类','学士',31],
    ['艺术类','硕士',40],
    ['艺术类','博士',50],
    ['未填写','学士',31],
    ['未填写','硕士',40],
    ['未填写','博士',50],
];
let scatterData2 = [
    ['历史学类','博士',50],
    ['医学类','硕士',40],
]

option = {
    grid:{
        left:'2%',
        right:'2%',
        bottom:'2%',
        top:'10%',
        containLabel:true
    },
    legend:{
        data:nameList,
        itemWidth:8,
        itemHeight:8,
        icon:'circle',
        textStyle:{
            color:'#CAEEFF',
            fontSize:12
        },
        right:10
    },
    xAxis: {
        type: 'category',
        data: xData,
        splitLine: {
            show: true,
            lineStyle:{
                color:'#31C2FF',
                opacity:0.2
            }
        },
        axisLine: {
            show: true,
            lineStyle:{
                color:'#31C2FF'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel:{
            color:'#CAEEFF',
            fontSize:12
        }
    },
    yAxis: {
        type: 'category',
        data: yData,
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle:{
                color:'#31C2FF'
            }
        },
        axisLabel:{
            color:'#CAEEFF',
            fontSize:12
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            name:'总人数',
            symbolSize: function (d) {
                return d[2];
            },
            data: scatterData,
            type: 'scatter',
            itemStyle:{
                color:'rgba(0, 138, 255, 0.2)',
                borderColor:'#008AFF',
                shadowColor:'#008AFF',
                shadowBlur:10
            }
        },
        {
            name:'双师型人数',
            symbolSize: function (d) {
                return d[2]/2;
            },
            data: scatterData2,
            type: 'scatter',
            itemStyle:{
                color:'rgba(0, 138, 255, 1)',
            } 
        }
    ],
};
