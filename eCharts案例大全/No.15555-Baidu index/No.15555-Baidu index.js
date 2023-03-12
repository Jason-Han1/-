option = {
    title : {
        text: 'Baidu index',
        subtext: ''
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['Pantene','Rejoice','Ziyuan','Clear','Loreal']
    },
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
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Pantene',
            type:'line',
            smooth:true,
            data:[67,63,60,65,62,60,73,78,77,68,68,69]
        },
        {
            name:'Rejoice',
            type:'line',
            smooth:true,
            data:[51,49,50,50,53,53,53,54,60,50,52,52 ]
        },
        {
            name:'Ziyuan',
            type:'line',
            smooth:true,
            data:[52,59,71,76,91,97,99,94,83,73,89,85]
        },
        {
            name:'Clear',
            type:'line',
            smooth:true,
            data:[47,48,49,71,102,73,69,54,51,51,55,54]
        },
        {
            name:'Loreal',
            type:'line',
            smooth:true,
            data:[364,361,365,342,339,353,312,284,319,395,296,319]
        }
    ]
};

