option = {
    title: {
        //可配置
        left: 'center',
        //可配置
        text: '转速-油耗',
        textStyle: {
        fontSize: 20,
        fontWeight: 'normal',    
        fontFamily: 'Arial',   
    },
    },
    
    xAxis: {
        //可配置
        type: 'category',
        axisLabel: {
            fontSize: 20,
            fontWeight: 'normal',    
            fontFamily: 'Arial',
        },
        //动态可变
        data: ['2020-03-01 00:00:00', '2020-03-01 00:00:10', '2020-03-01 00:00:16', '2020-03-01 00:00:22', '2020-03-01 00:00:28', '2020-03-01 00:00:30', '2020-03-01 00:00:39']
    },
    yAxis: [{
        //可配置
        name: '转速',
        //可配置
        scale: true,
        //可配置
        type: 'value',
        nameTextStyle:{
        fontWeight: 'normal',    
        fontFamily: 'Arial',   
        fontSize:20,
        },
        axisLabel: {
            fontSize: 20,
            fontWeight: 'normal',    
            fontFamily: 'Arial',
        },
    
    }, {
        //可配置
        name: '油耗',
        //可配置
        scale: true,
        //可配置
        type: 'value',
        nameTextStyle:{
        fontWeight: 'normal',    
        fontFamily: 'Arial',   
        fontSize:20,
        },
        axisLabel: {
            fontSize: 20,
            fontWeight: 'normal',    
            fontFamily: 'Arial',
        },
    }],
   
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
            color: '#000'
        },
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        },
        label: {
            backgroundColor: '#777'
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: false
            },
            brush: {
                type: ['lineX', 'clear']
            }
        }
    },
    dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            //可配置
            top: '85%',
            //可配置
            start: 0,
            //可配置
            end: 100
        },
        {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            //可配置
            left: '92%',
            //可配置
            start: 0,
            //可配置
            end: 100
        },
        {
            type: 'inside',
            xAxisIndex: [0],
            //可配置
            start: 0,
            //可配置
            end: 100
        },
        {
            type: 'inside',
            yAxisIndex: [0],
            //可配置
            start: 0,
            //可配置
            end: 100
        }
    ],

    legend: {
        //可配置
        top: 30,
        //可配置
        data: ['转速', '油耗'],
    textStyle:{
        fontSize:20,
        fontWeight: 'normal',    
        fontFamily: 'sans-serif',   
    },
    },
    grid: {
        //可配置
        left: '10%',
        //可配置
        right: '10%',
        //可配置
        bottom: '15%',
        //可配置
        top: '10%',
        containLabel: true
    },
    series: [{
            //可配置
            name: '转速',
            //可配置
            //动态可变
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            //可配置
            type: 'line',
        },
        {
            yAxisIndex: 1,
            //可配置
            name: '油耗',
            //动态可变
            data: [182, 193, 191, 194, 190, 130, 120],
            //可配置
            type: 'line',
        }
    ]
};