option = {
    title : {
        text: '某地区蒸发量和降水量',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量','降水量']
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
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint : {
                   label: {
                    offset: [0, 0],
                    color: '#ffffff',
                    formatter:function(a){console.log(a)},
                },
                  itemStyle:{
                  color: 'green' 
                },
                data : [
                    
                                    { coord: [0,2.0] ,value:2},
                                    { coord: [1,4.9],value:4.9},
                                    { coord: [2,7.0],value:7},
                                     { coord: [3,23.2] ,value:23.2},
                                    { coord: [4,25.6],value:25.6},
                                    { coord: [5,76.7],value:76.7},
                                     { coord: [6,135.6] ,value:135.6},
                                    { coord: [7,162.2],value:162.2},
                                    { coord: [8,32.6],value:32.6},
                  
                ]
            },
          
        },
    
    ]
};
