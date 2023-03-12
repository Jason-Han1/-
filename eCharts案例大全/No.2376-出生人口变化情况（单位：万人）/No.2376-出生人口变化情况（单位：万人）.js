option = {
    title : {
        text: '出生人口变化情况（单位：万人）',
        //subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:[]
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['2004','2005','2006','2007','2008','2009','2010','2011','2012','2013', '2014','2015','2016','2017','2018','2019','2020']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
		{
            name:'新生儿',
            type:'bar',
            "label": {
                "show": true,
                "position": "top",
                "distance": 10,
                fontSize:16
            },
            data:[1593, 1617, 1585, 1595, 1608, 1591, 1592, 1604, 1635, 1640, 1687, 1655, 1786, 1723, 1523, 1465, 1200],
        }
    ]
};