option = {
    title: [
        {
        text: '中、美、日贸易量占世界总贸易量比重',
        left:'center'
        // subtext: '纯属虚构'
    },
    {
        text: '中国',
        // subtext:'实线',
                textStyle:{

                color:'#c23531'
            // }
        },
        right:35,
        top:275
        // subtext: '纯属虚构'
    },
        {
        text: '(实线)',
        right:3,
        top:280,
        textStyle:{
            color:'#c23531',
                fontSize:12
        
        }
        },
        // subtext:'实线',
       
        // subtext: '纯属虚构'

    {
        text: '美国',
        textStyle:{

                color:'#2f4554'

        },
        right:35,
        top:295
        // subtext: '纯属虚构'
    },
        {
        text: '英法俄德',
        textStyle:{
                // fontSize:12,
                color:'#d48265'

        },
        right:0,
        top:219
        // subtext: '纯属虚构'
    },
    {
        text: '日本',
        textStyle:{
            color:'#61a0a8'
        },
        right:35,
        top:410
        // subtext: '纯属虚构'
    },
    {
        subtext:'数据来源：WTO (俄罗斯1990、1991年无数据）',
        top:510,
        left:50,
        subtextStyle:{
            fontWeight:'bold'
        }
    }],
    tooltip: {
        trigger: 'axis',
        formatter:'{b}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br/>{a3}: {c3}%'
    },
    // legend: {
    //     data:['China','United States','India','Japan']
    // },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {},
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {
                pixelRatio:5
            }
        }
    },
    xAxis:  {
        type: 'category',
        name:'年份',
        // min:-35,
        // boundaryGap: false,
        data:[1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
        // data:['Mar-00', 'Jun-00', 'Sep-00', 'Dec-00', 'Mar-01', 'Jun-01', 'Sep-01', 'Dec-01', 'Mar-02', 'Jun-02', 'Sep-02', 'Dec-02', 'Mar-03', 'Jun-03', 'Sep-03', 'Dec-03', 'Mar-04', 'Jun-04', 'Sep-04', 'Dec-04', 'Mar-05', 'Jun-05', 'Sep-05', 'Dec-05', 'Mar-06', 'Jun-06', 'Sep-06', 'Dec-06', 'Mar-07', 'Jun-07', 'Sep-07', 'Dec-07', 'Mar-08', 'Jun-08', 'Sep-08', 'Dec-08', 'Mar-09', 'Jun-09', 'Sep-09', 'Dec-09', 'Mar-10', 'Jun-10', 'Sep-10', 'Dec-10', 'Mar-11', 'Jun-11', 'Sep-11', 'Dec-11', 'Mar-12', 'Jun-12', 'Sep-12', 'Dec-12', 'Mar-13', 'Jun-13', 'Sep-13', 'Dec-13', 'Mar-14', 'Jun-14', 'Sep-14', 'Dec-14', 'Mar-15', 'Jun-15', 'Sep-15', 'Dec-15', 'Mar-16', 'Jun-16', 'Sep-16', 'Dec-16', 'Mar-17', 'Jun-17', 'Sep-17']
        // data: 年6月', '200/2年9月', '2002年12月', '2003年3月', '2003年6月', '2003年9月', '2003年12月', '2004年3月', '2004年6月', '2004年9月', '2004年12月', '2005年3月', '2005年6月', '2005年9月', '2005年12月', '2006年3月', '2006年6月', '2006年9月', '2006年12月', '2007年3月', '2007年6月', '2007年9月', '2007年12月', '2008年3月', '2008年6月', '2008年9月', '2008年12月', '2009年3月', '2009年6月', '2009年9月', '2009年12月', '2010年3月', '2010年6月', '2010年9月', '2010年12月', '2011年3月', '2011年6月', '2011年9月', '2011年12月', '2012年3月', '2012年6月', '2012年9月', '2012年12月', '2013年3月', '2013年6月', '2013年9月', '2013年12月', '2014年3月', '2014年6月', '2014年9月', '2014年12月', '2015年3月', '2015年6月', '2015年9月', '2015年12月', '2016年3月', '2016年6月', '2016年9月', '2016年12月', '2017年3月', '2017年6月', '2017年9月']
    },
    yAxis: {
        type: 'value',
        // min:-35,
        name:'占世界贸易额比重',
        axisLabel: {
            formatter: '{value} %'
        }
    },
    series: [
        
                {
            name:'China',
            type:'line',
            data:[1.63, 1.9, 2.16, 2.55, 2.7, 2.69, 2.65, 2.87, 2.9, 3.1, 3.47, 3.89, 4.54, 5.33, 5.95, 6.44, 6.94, 7.45, 7.61, 8.44, 9.35, 9.58, 10.06, 10.6, 10.94, 11.49, 11.03, 11.11],
            markPoint: {
                label:{
                    show:true,
                    formatter:'{c}%'
                },
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'},
                    {coord:[41,15],name:'15',value:15} 
                ]
            },
        },
        {
            name:'United States',
            type:'line',
            lineStyle:{
                type:'dashed'
            },
            data:[12.84, 13.03, 13.05, 13.89, 13.72, 12.97, 13.21, 14.02, 14.54, 15.07, 14.94, 14.55, 13.84, 12.7, 12.06, 11.93, 11.6, 10.84, 10.26, 10.18, 10.21, 9.86, 10.1, 9.96, 10.25, 11.1, 11.08, 10.7],
            markPoint: {
                label:{
                    formatter:'{c}%'
                },
                data: [
                    {type: 'max', name:'最大值'},
                    {type:'min',name:'最小值'}
                ]
            },
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'}
            //     ]
            // }
        },

        {
            name:'Japan',
                        lineStyle:{
                type:'dotted'
            },
            type:'line',
                        markPoint: {
                label:{
                    formatter:'{c}%'
                },
                data: [
                    {type: 'max', name:'最大值'},
                    {type:'min',name:'最小值'}
                ]
            },
            data:[7.38, 7.73, 7.46, 7.85, 7.68, 7.45, 6.94, 6.7, 5.98, 6.25, 6.28, 5.74, 5.51, 5.35, 5.25, 5.03, 4.83, 4.57, 4.58, 4.33, 4.6, 4.42, 4.38, 3.95, 3.82, 3.7, 3.75, 3.71]
        },
        {
            name:'UK+Fance+Spain+Italy+Germany',
            type:'line',
            data:['-', '-', 23.55, 21.24, 21.26, 21.32, 20.88, 20.23, 21.2, 20.36, 18.28, 18.93, 18.85, 19.19, 18.79, 18.1, 18.06, 17.88, 17.38, 17.06, 16.04, 15.98, 15.17, 15.17, 15.16, 14.77, 14.91, 14.76],
            markPoint: {
                label:{
                    show:true,
                    formatter:'{c}%'
                },
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'},
                    {coord:[41,15],name:'15',value:15} 
                ]
            },
        },
    ]
};
