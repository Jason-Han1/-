options = [
    // 第一个graph
{
    backgroundColor:'#FFFFFF',
    title: {
        text: 'Sales Revenue of CAN-LAX 2016-2017',
        textStyle:{
            fontSize:14
        }
    },
    
    tooltip: {                          // 提示框组件
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['2016', '2017','Growing Rate'],
        top:'18'
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true,
        show: false                 // 网格边框是否显示，上和右边框 
    },
    toolbox: {  
        feature: {
            dataView: {show: false, readOnly: false},        // 数据试图是否在控件中显示
            //magicType: {show: true, type: ['stack', 'tiled']},
            //restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,          // 坐标轴两边留白
        splitLine: {                // 网格线 x轴对应的是否显示
            show: false
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    
    yAxis: [                            // 双y坐标轴
        {
        name: 'Revenue(10k)',
        type: 'value',
        splitLine: {                // 网格线 y轴对应的是否显示
            show: false
        },
        axisLabel: {
            formatter: '{value}'
        }
    },
        {
            name: 'Growing\nRate (%)',
            //nameLocation: 'start',
            splitLine: {                // 网格线 y轴对应的是否显示
                show: false
            },
            min:0,
            max: 300,                       // growing rate upper limit
            type: 'value',
            //top:10,
            inverse: false,
            axisLine: {
                lineStyle: {
                    color: '#2f4554'
                }
        }
    }],
    
    series: [
        {
            name:'2016',
            type:'bar',
            color:'#00BFFF',
            //stack: '总量',
            markPoint : {
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            },
            data:[1741.9, 977, 1742.2, 1431.1, 1636.2, 1447, 1711.7, 1921.2, 2609.6, 3332.6, 3647.3, 2498.1]
        },
        {
            name:'2017',
            type:'bar',
            color: '#DC143C',
            //stack: '总量',
            markPoint : {
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            },
            data:[2609, 1162.9, 2942.9, 5174.6, 5114.4, 5065.8, 3956.1, 3691.1, 4637.6, 4603.8, 6401.1, 4988.4]
        },
        {
            name:'Growing Rate',
            type:'line',
            yAxisIndex: 1,              // yAxisIndex 1 表示第二个y轴，默认为0
            color: '#FFD700',
            //stack: '总量',
            markPoint : {
                data : [
                    {type : 'max', name : '最大值'},
                    //{type : 'min', name : '最小值'}
                ]
            },
            data:[49.8, 19, 68.9, 261.6, 212.6, 250.1, 131.1, 92.1, 77.7, 38.1, 75.5, 99.7]
        }
    ]
},

 //   visualMap: {                          # 旁边会有 视觉映射组件
   //     type: 'continuous',
     //   dimension: 1,
       // text: ['High', 'Low'],
//        inverse: true,
  //      itemHeight: 200,
    //    calculable: true,
      //  min: -2,
//        max: 6,
//        top: 60,
  //      left: 10,
    //    inRange: {
      //      colorLightness: [0.4, 0.8]
        //},
//        outOfRange: {
  //          color: '#bbb'
    //    },
      //  controller: {
        //    inRange: {
          //      color: '#01949B'
            //}
    //    }
    //},

    //第2个graph
{
    backgroundColor:'#FFFFFF',                      // 背景色
    title: {
        text: 'Cargo Load Factor-2016/2017',
        textStyle:{
            fontSize:14,
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['CLF-2016','CLF-2017'],
        top:'18'            // 距离容器顶端的距离
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            dataView: {show: false, readOnly: false},        // 数据试图是否在控件中显示
            saveAsImage: {show:true}
        }
    },
    
    xAxis: {
        type: 'category',
        boundaryGap: false,         // 坐标轴两边留白策略
        splitLine: {                // 网格线 x轴对应的是否显示
            show: false
        },
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    
    yAxis: {
        type: 'value',
        name: 'CLF(%)',
        min: 70,
        max: 100,
        interval: 10,
        splitLine: {                // 网格线 y轴对应的是否显示
            show: false
        }
    },
    
    series: [
         {
            name:'CLF-2016',
            type:'line',
            data:[88.29, 83.68, 89.64, 90.47, 90.21, 93.63, 94.07, 90.85, 90.32, 90.56, 86.69, 81.77]
          
        },
        {
            name:'CLF-2017',
            type:'line',
            data:[90.36, 86.21, 92.04, 89.91, 90.15, 90.38, 88.03, 88.99, 88.35, 87.18, 86.29, 81.23]
           
        }
    ]
},
    
     //第3个graph
{
    backgroundColor:'#FFFFFF',
    title: {
        text: 'Sales Strcture of CAN-LAX in 2016',
        //left:'center',              // title位置
        textStyle:{
            fontSize:14,
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        feature: {
            dataView: {show: false, readOnly: false},        // 数据试图是否在控件中显示
            //magicType: {show: true, type: ['stack', 'tiled']},
            //restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['直达', '中转', '联程', '邮件'],
        top:'18'
    },
    grid: {
        left: '2%',
        right: '9%',
        bottom: '3%',
        containLabel: true,
        show: false                 // 网格边框是否显示，上和右边框 
    },
    
    xAxis: [{
        type: 'category',
        splitLine: {                // 网格线 x轴对应的是否显示
            show: false
        },
         data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    }],
    
    yAxis: [{
        name: 'Revenue(10k)',
        type: 'value',
        splitLine: {                // 网格线 y轴对应的是否显示
            show: false
        },
        axisLabel: {
            formatter: '{value}'
        },
    }],
    

    series: [{
        name: '直达',
        type: 'bar',
        itemStyle:{
            normal:{color:'#01949B'},
        },
        
        //markPoint : {
                //data : [
                    //{type : 'max', name : '最大值'},
                     //{type : 'min', name : '最小值'}
                //]
            //},
            
        markLine : {
            data : [
                {type : 'average', name : '平均值'}
            ]
        },
            
        data: [919, 455.7, 1074.8, 911.7, 1006.8, 1075.6, 1106.1, 1274.5, 1755.6, 2562.7, 2056.1, 1227.9]
    }, 
        {
        name: '中转',
        type: 'bar',
        itemStyle:{
            normal:{color:'#EBA954'},
        },
        //markPoint : {
                //data : [
                    //{type : 'max', name : '最大值'},
                     //{type : 'min', name : '最小值'}
                //]
            //},
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            },
        data: [567.1, 261.4, 456.8, 387, 419.2, 227, 417, 413.1, 564, 583, 915.9, 666.3]
    }, {
        name: '联程',
        type: 'bar',
        itemStyle:{
            normal:{color:'#C23531'},
        },
        //markPoint : {
            //data : [
                //{type : 'max', name : '最大值'},
                 //{type : 'min', name : '最小值'}
            //]
        //},
        markLine : {
            data : [
                {type : 'average', name : '平均值'}
            ]
        },
        data: [255.9, 259.8, 210.5, 118.2, 196.5, 140.6, 188.6, 204.4, 290, 186.9, 661.3, 468.2]
    },{
        name: '邮件',
        type: 'bar',
        itemStyle:{
            normal:{color:'#6495ED'},
        },
        //markPoint : {
            //data : [
                //{type : 'max', name : '最大值'},
                 //{type : 'min', name : '最小值'}
            //]
        //},
        markLine : {
            data : [
                {type : 'average', name : '平均值'}
            ]
        },
        data: [0, 0, 0, 14.2, 13.7, 3.8, 0, 29.2, 0, 0, 14, 135.8]
    }]
},


    //第4个graph
{
    backgroundColor:'#FFFFFF',
    title: {
        text: 'Cargo Structure Percentage',
        subtext: '2016',
        left: 'center',
        subtextStyle:{
            fontSize:18
        }
    },
    toolbox: {  
        feature: {
            dataView: {show: false, readOnly: false},        // 数据试图是否在控件中显示
            //magicType: {show: true, type: ['stack', 'tiled']},
            //restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 20,
        left: 'center',
        data: ['直达', '中转', '联程', '邮件'],
        show:false                  // legend 不显示
    },
    series : [
        {
            name:'Cargo Source',
            type: 'pie',
            avoidLabelOverlap: false,
            radius : '50%',
            center: ['50%', '58%'],
            selectedMode: 'single',
            label: {
                normal: {
                    show: true,
                    textStyle:{
                        fontSize: '10',
                        //fontWeight: 'bold'
                    },
                    formatter: '{b} : {d}%',
                    position: 'outer'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {name: '直达', value: 61.8},
                {name: '联程', value: 13.2},
                {name: '中转', value: 24.2},
                {name: '邮件', value: 0.8}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
},
    
    // 第5个graph
{
    backgroundColor:'#FFFFFF',
    title: {
        text: 'Sales Strcture of CAN-LAX in 2017',
        //left:'center',              // title位置
        textStyle:{
            fontSize:14,
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        feature: {
            dataView: {show: false, readOnly: false},        // 数据试图是否在控件中显示
            //magicType: {show: true, type: ['stack', 'tiled']},
            //restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['直达', '中转', '联程', '邮件'],
        top:'18'
    },
    grid: {
        left: '2%',
        right: '9%',
        bottom: '3%',
        containLabel: true,
        show: false                 // 网格边框是否显示，上和右边框 
    },
    
    xAxis: [{
        type: 'category',
        splitLine: {                // 网格线 x轴对应的是否显示
            show: false
        },
         data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    }],
    
    yAxis: [{
        name: 'Revenue(10k)',
        type: 'value',
        splitLine: {                // 网格线 y轴对应的是否显示
            show: false
        },
        axisLabel: {
            formatter: '{value}'
        },
    }],
    

    series: [{
        name: '直达',
        type: 'bar',
        itemStyle:{
            normal:{color:'#01949B'},
        },
        
        //markPoint : {
                //data : [
                    //{type : 'max', name : '最大值'},
                     //{type : 'min', name : '最小值'}
                //]
            //},
            
        markLine : {
            data : [
                {type : 'average', name : '平均值'}
            ]
        },
            
        data: [1504.2, 622.8, 2132, 3668.6, 3797.3, 3632.8, 2716, 2320.6, 3288.1, 3220, 3911.4, 2942]
    }, 
        {
        name: '中转',
        type: 'bar',
        itemStyle:{
            normal:{color:'#EBA954'},
        },
        //markPoint : {
                //data : [
                    //{type : 'max', name : '最大值'},
                     //{type : 'min', name : '最小值'}
                //]
            //},
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            },
        data: [861.7, 196.6, 600.7, 836.2, 757.8, 804.2, 766.3, 797, 677.5, 734.2, 1363.5, 977.3]
    }, {
        name: '联程',
        type: 'bar',
        itemStyle:{
            normal:{color:'#C23531'},
        },
        //markPoint : {
            //data : [
                //{type : 'max', name : '最大值'},
                 //{type : 'min', name : '最小值'}
            //]
        //},
        markLine : {
            data : [
                {type : 'average', name : '平均值'}
            ]
        },
        data: [240.6, 294.4, 202.6, 476.9, 308.3, 376.4, 334.7, 401, 514, 506.2, 766.2, 794.4]
    },{
        name: '邮件',
        type: 'bar',
        itemStyle:{
            normal:{color:'#6495ED'},
        },
        //markPoint : {
            //data : [
                //{type : 'max', name : '最大值'},
                 //{type : 'min', name : '最小值'}
            //]
        //},
        markLine : {
            data : [
                {type : 'average', name : '平均值'}
            ]
        },
        data: [2.5, 49.1, 7.6, 192.9, 251, 252.3, 139.1, 172.5, 157.9, 143.4, 359.9, 274.7]
    }]
},

    //第6个graph
{
    backgroundColor:'#FFFFFF',
    title: {
        text: 'Cargo Structure Percentage',
        subtext: '2017',
        left: 'center',
        subtextStyle:{
            fontSize:18
        }
    },
    toolbox: {  
        feature: {
            dataView: {show: false, readOnly: false},        // 数据试图是否在控件中显示
            //magicType: {show: true, type: ['stack', 'tiled']},
            //restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 20,
        left: 'center',
        data: ['直达', '中转', '联程', '邮件'],
        show:false                  // legend 不显示
    },
    series : [
        {
            name:'Cargo Source',
            type: 'pie',
            avoidLabelOverlap: false,
            radius : '50%',
            center: ['50%', '58%'],
            selectedMode: 'single',
            label: {
                normal: {
                    show: true,
                    textStyle:{
                        fontSize: '10',
                        //fontWeight: 'bold'
                    },
                    formatter: '{b} : {d}%',
                    position: 'outer'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {name: '直达', value: 66.1},
                {name: '联程', value: 11.1},
                {name: '中转', value: 19.1},
                {name: '邮件', value: 3.7}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}

];