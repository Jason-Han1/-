var timeData = ["21:00", "21:30", "22:00"];
var data1 = [783, 1919, 3099];
var data2 = [361, 722, 985];
var data3 = [414, 973, 2063];
var data4 = [674, 1194, 2295];
var data5 = [109, 227, 346];
var data6 = [555, 1038, 1308];
var data7 = [429, 690, 941];
var data8 = [398, 2299, 3504];
var data9 = [1709, 7329, 8986];
option = {
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    title: {
        text: '九宫图',
        subtext: '',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    
    
    grid: [{show:true,
         top: '5%',
        right: '70%',
        left:'5%',
        height: '25%'
    }, {
        show:true,
       right: '40%',
        left:'35%',
        top: '5%',
        height: '25%'
    },{
        show:true,
        right: '10%',
        left:'65%',
        top: '5%',
        height: '25%'
    }, {show:true,
         top: '35%',
        right: '70%',
        left:'5%',
        height: '25%'
    }, {
        show:true,
       right: '40%',
        left:'35%',
        top: '35%',
        height: '25%'
    },{
        show:true,
        right: '10%',
        left:'65%',
        top: '35%',
        height: '25%'
    },
    {show:true,
         top: '65%',
        right: '70%',
        left:'5%',
        height: '25%'
    }, {
        show:true,
       right: '40%',
        left:'35%',
        top: '65%',
        height: '25%'
    },{
        show:true,
        right: '10%',
        left:'65%',
        top: '65%',
        height: '25%'
    }],
    xAxis : [
        {   gridIndex: 0,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData,
            
        },
        {gridIndex: 2,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData
        },
        {
            gridIndex: 3,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData,
        },
        {   gridIndex: 4,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData
        },
        {
            gridIndex: 5,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData,
            
        },
        {gridIndex: 6,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData
        },
        {
            gridIndex: 7,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData,
        },
        {
            gridIndex: 8,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: timeData,
        }
    ],
    yAxis : [
        {   gridIndex: 0,
            name : 'icon1',
            type : 'value',
            nameLocation:'end',
            nameRotate:0,
            nameGap:10
        },
        {
            gridIndex: 1,
            name : 'icon2',
            type : 'value',
            nameLocation:'end',
            nameRotate:0,
            nameGap:10
            
        },
         { gridIndex: 2,
            name : 'icon3',
            type : 'value',
            nameLocation:'end',
            nameRotate:0,
            nameGap:10
        
        },
        {
            gridIndex: 3,
            name : 'icon4',
            type : 'value',
            nameLocation:'end',
            nameRotate:0,
            nameGap:10
            
        },
        {   gridIndex: 4,
            name : 'icon5',
            type : 'value',
            nameLocation:'end',
            nameRotate:0,
            nameGap:10
        
        },
        {
            gridIndex: 5,
            name : 'icon6',
            type : 'value',
            nameLocation:'end',
            nameRotate:0,
            nameGap:10
            
        },
         { gridIndex: 6,
            name : 'icon7',
            type : 'value',
            nameLocation:'end',
            nameRotate:0,
            nameGap:10
        
        },
        {
            gridIndex: 7,
            name : 'icon8',
            type : 'value',
            nameLocation:'end',
            nameRotate:0,
            nameGap:10
            
        },
        {
            gridIndex: 8,
            name : 'icon9',
            type : 'value',
            nameLocation:'end',
            nameRotate:0,
            nameGap:10
            
        }
    ],
    series : [
        {
            name:'icon1',
            type:'line',
             xAxisIndex: 0,
            yAxisIndex: 0,
            symbolSize: 8,
            hoverAnimation: false,
            data:data1
        },
        {
            name:'icon2',
            type:'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data: data2
        },
        {
            name:'icon3',
            type:'line',
             xAxisIndex: 2,
            yAxisIndex: 2,
            symbolSize: 8,
            hoverAnimation: false,
            data:data3
        },
        {
            name:'icon4',
            type:'line',
            xAxisIndex: 3,
            yAxisIndex: 3,
            symbolSize: 8,
            hoverAnimation: false,
            data: data4
        },
        {
            name:'icon5',
            type:'line',
             xAxisIndex: 4,
            yAxisIndex: 4,
            symbolSize: 8,
            hoverAnimation: false,
            data:data5
        },
        {
            name:'icon6',
            type:'line',
            xAxisIndex:5,
            yAxisIndex: 5,
            symbolSize: 8,
            hoverAnimation: false,
            data: data6
        },
        {
            name:'icon7',
            type:'line',
             xAxisIndex: 6,
            yAxisIndex:6,
            symbolSize: 8,
            hoverAnimation: false,
            data:data7
        },
        {
            name:'icon8',
            type:'line',
            xAxisIndex: 7,
            yAxisIndex: 7,
            symbolSize: 8,
            hoverAnimation: false,
            data: data8
        },
        {
            name:'icon9',
            type:'line',
            xAxisIndex: 8,
            yAxisIndex: 8,
            symbolSize: 8,
            hoverAnimation: false,
            data: data9
        }
    ]
};