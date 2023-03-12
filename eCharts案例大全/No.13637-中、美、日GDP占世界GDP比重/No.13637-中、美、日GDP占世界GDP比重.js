option = {
    title: [
        {
        text: '中、美、日GDP占世界GDP比重',
        left:'center'
        // subtext: '纯属虚构'
    },
    {
        text: '中国',
        right:35,
        top:290
        // subtext: '纯属虚构'
    },
    {
        text: '美国',
        right:35,
        top:170
        // subtext: '纯属虚构'
    },
    {
        text: '日本',
        right:35,
        top:390
        // subtext: '纯属虚构'
    },
        {
        text: '英法俄德',
        right:3,
        top:315
        // subtext: '纯属虚构'
    },
    {
        subtext:'数据来源：世界银行',
        top:510,
        left:50,
        subtextStyle:{
            fontWeight:'bold'
        }
    }],
    tooltip: {
        trigger: 'axis',
        formatter:'{b}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%'
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
        name:'占世界GDP比重',
        axisLabel: {
            formatter: '{value} %'
        }
    },
    series: [
        {
            name:'China',
            type:'line',
            data:[1.6, 1.6, 1.68, 1.72, 2.03, 2.38, 2.73, 3.06, 3.29, 3.35, 3.6, 4.01, 4.25, 4.27, 4.47, 4.83, 5.35, 6.13, 7.24, 8.49, 9.24, 10.33, 11.43, 12.48, 13.27, 14.84, 14.76],
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
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'}
            //     ]
            // }
        },
        {
            name:'United States',
            type:'line',
            data:[26.46, 25.82, 25.75, 26.56, 26.29, 24.79, 25.63, 27.42, 29.04, 29.72, 30.65, 31.74, 31.79, 29.56, 28.08, 27.64, 27.04, 25.04, 23.15, 23.92, 22.73, 21.15, 21.63, 21.69, 22.0, 24.2, 24.51],
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
            data:[13.89, 14.98, 15.35, 17.26, 17.66, 17.64, 15.28, 14.04, 12.88, 14.03, 14.55, 12.87, 11.91, 11.44, 11.0, 10.04, 8.81, 7.81, 7.94, 8.69, 8.64, 8.4, 8.28, 6.7, 6.13, 5.87, 6.52]
        },
        {
            name:'UK+France+Russia+Germany',
            type:'line',
            data:[20.56, 20.08, 20.35, 18.9, 18.51, 19.21, 18.71, 17.95, 18.09, 17.13, 15.57, 15.74, 16.46, 17.56, 18.11, 17.6, 17.53, 18.08, 17.67, 16.13, 15.2, 15.4, 14.81, 15.06, 14.94, 13.46, 13.02],
            markPoint: {
                // symbolSize:30,
                label:{
                    formatter:'{c}%',
                },
                data: [
                    {type: 'max', name:'最大值'},
                    // {type:'min',name:'最小值'}
                ]
            },
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'}
            //     ]
            // }
        },
    ]
};
