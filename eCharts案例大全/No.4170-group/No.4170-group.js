//饼图数据
var pieData = [
    [{
        "name": "A系统",
        "value": 2
    }, {
        "name": "B系统",
        "value": 4
    }, {
        "name": "C系统",
        "value": 3
    }, {
        "name": "D系统",
        "value": 3
    }, {
        "name": "E系统",
        "value": 7
    }, {
        "name": "F系统",
        "value": 3
    }, {
        "name": "G系统",
        "value": 3
    }, {
        "name": "H系统",
        "value": 3
    }],
];

//折线图数据
var yqyData = [
    [800,750,730,700,600,500,400,300,200,100],
    [500,300,400,450]
]

var xData = [
    ['ee','qa','fe','data','devops','DB','ads','cosmos','cube','experiment'],
    ['week1','week2','week3','week4']
    ]

//-------------------------------关系图数据获取:start，有点多，可先忽略查看-------------------------------------------


//我选折线图作为基础option
option = {
    title: [
        {text: '所有Group平均耗时情况',left:'center'},
        // {text: 'job平均耗时(TOP10)', textAlign:'right'},
    ],
    xAxis: [{
            data: xData[0],
            gridIndex: 0,
            name:'GroupName',
            max: 10,
            axisLabel :{
                interval:0,
             }
        }, //折线图x轴数据赋值，指定坐标信息
        {
            data: xData[0],
            gridIndex: 1,
            name:'GroupName',
            max: 10,
            axisLabel :{
                interval:0,
             }
        },
        {
            data: xData[0],
            gridIndex: 2,
            name:'GroupName',
            max: 10,
            axisLabel :{
                interval:0,
             }
        },
        {
            data: xData[0],
            gridIndex: 3,
            name:'GroupName',
            max: 10,
            axisLabel :{
                interval:0,
             }
        },
        // {
        //     data: xData[1],
        //     gridIndex: 4,
        //     name:'Week',
        //     type: 'category',
        // },
    ],
    yAxis: [{
        splitLine: {
            show: false
        },
        gridIndex: 0,
        name:'PipeLine平均耗时(TOP10)(s)',
    }, 
    {
        splitLine: {
            show: false
        },
        gridIndex: 1,
        // type: 'value',
        name:'job平均耗时(TOP10)平均耗时(s)',
    },
    {
        splitLine: {
            show: false
        },
        gridIndex: 2,
        // type: 'value',
        name:'9分位Stage平均耗时(s)',
    },
    {
        splitLine: {
            show: false
        },
        gridIndex: 3,
        // type: 'value',
        name:'8分位Stage平均耗时(s)',
    },
    // {
        
    //     gridIndex: 4,
    //     type: 'value',
    //     name:'每周平均耗时(s)',
    // },
    ],

    grid: [ //指定坐标轴位置，大小
        {
            x: '9%',
            y: '10%',
            width: '30%',
            height: '20%'
        }, 
        {
            x: '55%',
            bottom: '1%',
            y: '10%',
            height: '20%',
            width: '30%',
        
        },
        {
            x: '9%',
            y: '40%',
            height: '20%',
            width: '30%',
        },
        {
            x: '55%',
            y: '40%',
            height: '20%',
            width: '30%',
        },
        // {
        //     x: '9%',
        //     y: '75%',
        //     height: '20%',
        //     width: '80%',
        // },
    ],

    series: [{
            type: 'bar',
            xAxisIndex: 0, //指定折线图数据显示到：grid坐标系：0
            yAxisIndex: 0,
            showSymbol: false,
            data: yqyData[0] ,//折线图y轴数据赋值
            barWidth: 20,
            barCateGoryGap:10
        },
        {
            type: 'bar',
            xAxisIndex: 1, //指定折线图数据显示到：grid坐标系：0
            yAxisIndex: 1,
            showSymbol: false,
            data: yqyData[0] ,//折线图y轴数据赋值
            barWidth: 20,
            barCateGoryGap:10
        },
        {
            type: 'bar',
            xAxisIndex: 2, //指定折线图数据显示到：grid坐标系：0
            yAxisIndex: 2,
            showSymbol: false,
            data: yqyData[0] ,//折线图y轴数据赋值
            barWidth: 20,
            barCateGoryGap:10,
        },
        {
            type: 'bar',
            xAxisIndex: 3, //指定折线图数据显示到：grid坐标系：0
            yAxisIndex: 3,
            showSymbol: false,
            data: yqyData[0] ,//折线图y轴数据赋值
            barWidth: 20,
            barCateGoryGap:10,
        },
        // {
        //     type: 'line',
        //     xAxisIndex: 4, //指定折线图数据显示到：grid坐标系：0
        //     yAxisIndex: 4,
        //     data: yqyData[1] ,//折线图y轴数据赋值
        // },
        // {
        //     name: '面积模式',
        //     type: 'pie',
        //     radius: [10, 80],
        //     center: ['18%', '78%'],
        //     data: pieData[0] //饼图数据赋值
        // }
    ]
};