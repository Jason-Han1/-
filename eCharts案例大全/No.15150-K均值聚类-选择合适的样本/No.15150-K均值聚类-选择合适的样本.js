// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
var dataLQ = [
    [12.63,1420,11430,9.2,"二圈层"]
   ];

var dataJN = [
    [7.28,11234,11000,3.9,"一圈层"]
   ];

var dataQY = [
    [10.39,12677,16800,2.7,"一圈层"]
   ];
   
var dataWH = [
    [10.72,13562,22180,1.1,"一圈层"]
   ];
   
var dataJJ = [
    [11.05,11538,19300,6.3,"一圈层"]
   ];

var dataCH = [
    [7.35,8627,15600,8,"一圈层"]
   ];

var dataSL = [
    [5.83,1152,17100,9.1,"二圈层"]
   ];  
   
var dataXD = [
    [7.33,1653,8090,9.3,"三圈层"]
   ];  
   
var dataPX = [
    [5.53,1761,9572,8.5,"二圈层"]
   ];  
   
var dataWJ = [
    [8.44,1674,12100,8.0,"二圈层"]
   ];  
   
var dataQBJ = [
    [8.58,1004,4600,8.0,"三圈层"]
   ];
   
var dataPZ = [
    [4.34,541,4570,12.9,"三圈层"]
   ]; 

   
var dataJT = [
    [3.94,626,4900,11.8,"三圈层"]
   ];  
   
var dataDJY = [
    [4.13,552,6020,6,"三圈层"]
   ];  
  
var dataXJ = [
    [6.49,932,8000,10.5,"三圈层"]
   ];  
   
var dataCZ = [
    [3.41,610,5300,13.4,"三圈层"]
   ];  

var dataQL = [
    [3.31,445,4700,12.8,"三圈层"]
   ];    
   
var dataDY = [
    [3.61,384,5081,11.4,"三圈层"]
   ];     

var dataPJ = [
    [3.99,458,4400,12.8,"三圈层"]
   ];   

var dataJY = [
    [2.46,670,6630,9,"三圈层"]
   ];    
var schema = [
    {name: 'date', index: 0, text: '人均GDP（万/人）'},
    {name: 'AQIindex', index: 1, text: '人口密度（人/平方公里）'},
    {name: 'PM25', index: 2, text: '平均房价（元）'},
    {name: 'PM10', index: 3, text: '工业增加值（%）'},
    {name: 'CO', index: 4, text: '圈层'},
    {name: 'NO2', index: 5, text: 'NO2'},
    {name: 'SO2', index: 6, text: 'SO2'},
    {name: '等级', index: 7, text: '等级'}
];

var lineStyle = {
    normal: {
        width: 2.5,
        opacity: 0.5
    }
};

var colors = ['#3366cc','#dc3912', '#ff9900', '#109618', 
             '#990099','#0099c6','#dd4477','#66aa00','#b82e2e',
             '#994499','#22aa99','#aaaa11','#6633cc','#329262'
             ,'#a9c413','#8b0707','#668d1c','#bea413','#0d4012'];

option = {
    color: colors, 
    backgroundColor: '#333',
        toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        bottom: 5,
        data: ['龙泉', '金牛', '青羊','武侯','锦江','成华','双流',
        '新都','郫县','温江','青白江','彭州','金堂','都江堰',
        '新津','崇州','邛崃','大邑','蒲江','简阳'],
        itemGap: 15,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    tooltip: {
        padding: 8,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj[0].value;
            return
                + schema[0].text + '：' + value[1] + '<br>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>'
                ;
        }
    },
    // dataZoom: {
    //     show: true,
    //     orient: 'vertical',
    //     parallelAxisIndex: [0]
    // },
    parallelAxis: [
        {dim: 0, name: schema[0].text, inverse: false,  nameLocation: 'end'},
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},
        {dim: 3, name: schema[3].text},
       
        {dim: 4, name: schema[4].text,
        type: 'category', data: ['一圈层', '二圈层', '三圈层']}
    ],
    parallel: {
        left: '10%',
        right: '18%',
        bottom: 100,
        parallelAxisDefault: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 15,
            nameTextStyle: {
                color: '#fff',
                fontSize: 8
            },
            axisLine: {
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#777'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        }
    },
    series: [
        {
            name: '龙泉',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataLQ
        },
        {
            name: '青羊',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataQY
        },
        {
            name: '金牛',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataJN
        },
        {
            name: '武侯',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataWH
        },
         {
            name: '锦江',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataJJ
        },
         {
            name: '成华',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataCH
        },
          {
            name: '双流',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataSL
        },
        {
            name: '新都',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataXD
        },
        {
            name: '郫县',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataPX
        },
        {
            name: '温江',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataWJ
        },
         {
            name: '青白江',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataQBJ
        },
          {
            name: '彭州',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataPZ
        },
           {
            name: '金堂',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataJT
        },
          {
            name: '都江堰',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataDJY
        },
          {
            name: '新津',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataXJ
        },
         {
            name: '崇州',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataCZ
        },
          {
            name: '邛崃',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataQL
        },
           {
            name: '大邑',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataDY
        },
           {
            name: '蒲江',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataPJ
        },
             {
            name: '简阳',
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataJY
        },
        
    ]
};