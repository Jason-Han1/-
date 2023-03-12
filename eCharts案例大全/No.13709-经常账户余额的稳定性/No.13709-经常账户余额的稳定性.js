option = {
    toolbox:{
        show:true,
        feature:{
            saveAsImage:{
                pixelRatio:5
            }
        }
    },
    title: [{
        text: 'Persistence\nof surplus',
        textStyle:{
            fontSize:12,
            color:'#2f4554',
            fontWeight:'light'
        },
        left: 660,
        top:320
    },
    {
        text: 'Persistence\nof deficit',
        textStyle:{
            fontSize:5,
            color:'#c23531',
            fontWeight:'light'
        },
        left: 660,
        top:215
    },
    {
        text:'经常账户余额的稳定性',
        left:'center'
    },
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a0}  : {c0}<br/>{a1}  :{c1}'
    },
    // legend: {
    //     left: 'center',
    //     data: ['Persistence of deficit', 'Persistence of surplus']
    // },
    xAxis: {
        type: 'category',
        name: 'Year',
        axisTick:{
            alignWithLabel:true,
            interval:0
        },
        // nameLocation:'bottom',
        splitLine: {show: false},
        data: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009','2010','2011','2012','2013','2014','2015','2016']
    },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    yAxis: {
        type: 'value',
        // name: 'y'
    },
    series: [
        {
            name: 'Persistence of deficit',
            type: 'line',
            smooth:true,
            lineStyle:{
                normal:{type:'dashed'}
            },
            data: [15.76, 12.59, 17.94, 15.28, 15.9, 16.46, 10.17, 8.91, 6.29, 6.9, 11.38, 7.36, 7.93, 9.77, 7.28, 10.9]
        },
        {
            name: 'Persistence of surplus',
            type: 'line',
            smooth:true,
            data: [5.81, 5.43, 8.69, 7.21, 6.59, 10.92, 9.2, 6.9, 4.35, 7.08, 4.98, 5.85, 8.67, 7.74, 4.66, 6.57]
        },
        // {
        //     name: '1/2的指数',
        //     type: 'line',
        //     data: [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512]
        // }
    ]
};
