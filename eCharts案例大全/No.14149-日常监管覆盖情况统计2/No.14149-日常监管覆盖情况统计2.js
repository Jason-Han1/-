options = [{
    backgroundColor:'#FFFFFF',
    title : {
        text: '日常监管覆盖情况统计',
        subtext: '2017年'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['提供主体数','已检查主体数']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            //magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['南宁市','柳州市','桂林市','梧州市','北海市','防城港市','钦州市','贵港市','玉林市','百色市','贺州市','河池市','来宾市','崇左市']
        }
    ],
    yAxis : [
        {
            type: 'value',
           // name: '检查次数',
            min: 0,
            max: 4500,
            type : 'value'
        }
    ],
    series : [
        {
            name:'提供主体数',
            type:'bar',
            data:[1933, 1733, 1833, 1333, 1533, 1333, 1633, 1433, 1533, 993, 893,813,913,1013],
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
            }
        },
        {
            name:'已检查主体数',
            type:'bar',
            data:[2433, 2633, 2533, 2333, 2133, 2233, 2633, 2233, 2433, 1393, 1393,913,1213,1413],
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
            }
        }
    ]
},{
    backgroundColor:'#FFFFFF',
    title : {
        text: '各市违法违规比例',
        subtext: '2017年'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        
        orient: 'vertical',
        x: 'right',
       itemWidth: 14,
        itemHeight: 14,
        align: 'left',
    
    },
    series: [
        {
            name:'各市违法违规比例',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['32%', '35%'],
            color: ['#915872', '#3077b7', '#9a8169', '#3f8797','#5b8144','#307889','#9c6a79','#915872', '#3077b7', '#9a8169', '#3f8797','#5b8144','#307889','#9c6a79'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
               
            },
            tooltip: {
               show:false,
               
               
            },
            
            data:[ {value:3533, name:''},
                {value:3233, name:''},
                {value:3433, name:''},
                {value:3333, name:''},
                {value:3233, name:''},
                {value:3333, name:''},
                {value:3133, name:''},
                {value:2933, name:''},
                {value:3033, name:''},
                {value:2630, name:''},
                {value:2430, name:''},
                {value:2313, name:''},
                {value:2713, name:''},
                {value:2513, name:''}]
        },{
            name:'各市违法违规比例',
            type:'pie',
            radius: ['35%', '65%'],
            color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b',' #f17677','#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b','#f17677'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[ {value:3533, name:'南宁市'},
                {value:3233, name:'柳州市'},
                {value:3433, name:'桂林市'},
                {value:3333, name:'梧州市'},
                {value:3233, name:'北海市'},
                {value:3333, name:'防城港市'},
                {value:3133, name:'钦州市'},
                {value:2933, name:'贵港市'},
                {value:3033, name:'玉林市'},
                {value:2630, name:'百色市'},
                {value:2430, name:'贺州市'},
                {value:2313, name:'河池市'},
                {value:2713, name:'来宾市'},
                {value:2513, name:'崇左市'}]
        }
    ]
}

];
