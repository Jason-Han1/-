option = {
    title: {
        text: '大范围事件天气过程追踪',
        left: 10
    },
    legend: {
        y: 'bottom',
        data: ['推定过程区间'] //修改的地方1

    },
    grid: {
        containLabel: true,
        left: 20
    },
    xAxis: {
        type: 'time'
    },

    yAxis: {

        data: ['1961年', '1962年', '1963年', '1964年', '1965年', '1966年', '1967年', '1968年', '1969年', '1970年', '1971年', '1972年', '1973年', '1974年', '1975年', '1976年', '1977年', '1978年', '1979年', '1980年', '1981年', '1982年', '1983年', '1984年', '1985年', '1986年', '1987年', '1988年', '1989年', '1990年', '1991年', '1992年', '1993年', '1994年', '1995年', '1996年', '1997年', '1998年',
 '1999年', '2000年', '2001年', '2002年', '2003年', '2004年', '2005年', '2006年', '2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年']

    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var res = params[0].name + "</br>"
            var date0 = params[3].data;
            var date1 = params[2].data;
            var date2 = params[1].data;
            var date3 = params[0].data;
            date0 = (date0.getMonth() + 1) + "-" + date0.getDate();
            date1 = (date1.getMonth() + 1) + "-" + date1.getDate();
            date2 = (date2.getMonth() + 1) + "-" + date2.getDate();
            date3 = (date3.getMonth() + 1) + "-" + date3.getDate();
            res += params[3].seriesName + "~" + params[2].seriesName + ":</br>" + date0 + "~" + date1 + "</br>"
            res += params[1].seriesName + "~" + params[0].seriesName + ":</br>" + date2 + "~" + date3 + "</br>"
            console.log(params[0]);
            return res;
        }
    },
    series: [
     
        {
            name: '结束时间2',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#ADD8E6'
                }
            },
            data: [
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                                new Date("03/15"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
                                new Date("04/10"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                                new Date("04/10"),
                new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
                                new Date("04/09"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
                new Date("03/02")
            ]
        },
        {
            name: '开始时间2',
            type: 'bar',
            stack: '总量',
            barGap: '-100%',
            //修改地方2
            itemStyle: {
                normal: {
                    color: 'rgba(254,248,239,1)'
                }
            },
            data: [
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                                new Date("03/10"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
                                new Date("04/05"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                                new Date("04/05"),
                new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
                                new Date("04/02"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
                new Date("03/02")
                
            ]
        },
        {
            name: '结束时间',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#ADD8E6'
                }
            },
            data: [
                new Date("03/11"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/31"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/07"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/13"),
            new Date("03/02"),
                new Date("04/06"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/19"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/24"),
                new Date("03/11"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/29"),
                new Date("03/23"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/31"),
                new Date("03/20"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("04/02"),
                new Date("03/28"),
                new Date("03/09"),
            new Date("03/02"),
                new Date("03/11"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/25"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/09"),
            new Date("03/02"),
                new Date("03/08")
                
            ]
        },
        {
            name: '开始时间',
            type: 'bar',
            stack: '总量',
            barGap: '-100%',
            //修改地方2
            itemStyle: {
                normal: {
                    color: 'rgba(254,248,239,1)'
                }
            },
            data: [
                new Date("03/04"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/26"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/09"),
            new Date("03/02"),
                new Date("03/19"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/12"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/20"),
                new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/16"),
                new Date("03/17"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/17"),
                new Date("03/16"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/23"),
                new Date("03/16"),
                new Date("03/04"),
            new Date("03/02"),
                new Date("03/04"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/19"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
            new Date("03/02"),
                new Date("03/03"),
            new Date("03/02"),
                new Date("03/03")
            ]
        },

    ]
};