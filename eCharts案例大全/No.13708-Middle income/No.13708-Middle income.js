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
        text: 'Middle income',
        textStyle:{
            fontSize:12,
            color:'#2f4554',
            fontWeight:'light'
        },
        left: 650,
        top:180
    },
    {
        text: 'World',
        textStyle:{
            fontSize:5,
            color:'#61a0a8',
            fontWeight:'light'
        },
        left: 660,
        top:325
    },
    {
        text: 'High income',
        textStyle:{
            fontSize:5,
            color:'#c23531',
            fontWeight:'light'
        },
        left: 660,
        top:380
    },
    {
        text:'全球和中高收入国家储蓄情况',
        left:'center'
    },
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b}年<br/>{a0} : {c0}%<br/>{a1} : {c1}%<br/>{a2} : {c2}%'
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
        data: [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    yAxis: {
        type: 'value',
        scale:true,
        name: '%'
    },
    series: [
        {
            name: 'High income',
            type: 'line',
            smooth:true,
            lineStyle:{
                normal:{type:'dotted'}
            },
            data: [27.98, 27.69, 27.75, 29.11, 28, 25.69, 26.11, 26.02, 26.27, 26.61, 25.92, 25.12, 23.73, 23.35, 24.43, 24.13, 24.02, 23.96, 24.67, 24.94, 24.78, 23.82, 23.43, 23.09, 23.59, 23.9, 23.97, 24.38, 24.22, 23.91, 24.02, 23.18, 22.57, 22.44, 22.92, 23.14, 23.49, 23.76, 22.75, 20.56, 21.1, 21.34, 21.5, 21.79, 22.14, 22.44, 22.16]
        },
        {
            name: 'Middle income',
            type: 'line',
            smooth:true,
            lineStyle:{
                normal:{type:'dashed'}
            },
            data: [24.47, 24.6, 24.16, 26.07, 26.1, 26.63, 26.69, 27.18, 28.28, 27.54, 26.72, 25.79, 25.93, 25.79, 26.49, 26.76, 25.82, 28.38, 28.7, 29.26, 28.19, 28.6, 30.04, 29.17, 29.47, 28.36, 27.9, 27.23, 26.65, 27.11, 28.73, 28.01, 28.58, 30.3, 32.16, 33.01, 34.44, 34.53, 34.29, 32.31, 34.05, 33.74, 32.94, 32.2, 31.82, 31.4, 30.73]
        },
        {
            name: 'World',
            type: 'line',
            smooth:true,
            data: [26.99, 26.82, 26.75, 28.25, 27.44, 25.89, 26.22, 26.28, 26.76, 26.81, 26.08, 25.25, 24.27, 23.95, 24.93, 24.79, 24.46, 25.1, 25.7, 26.13, 25.71, 25.14, 25.29, 24.79, 25.23, 25.13, 25.07, 25.16, 24.88, 24.79, 25.35, 24.54, 24.26, 24.68, 25.56, 25.96, 26.63, 26.85, 26.07, 23.94, 24.83, 24.91, 24.78, 24.77, 24.9, 24.95, 24.54]
        },
        // {
        //     name: '1/2的指数',
        //     type: 'line',
        //     data: [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512]
        // }
    ]
};
