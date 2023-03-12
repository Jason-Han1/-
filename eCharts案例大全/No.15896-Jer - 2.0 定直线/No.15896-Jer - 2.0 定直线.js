option = {
    xAxis : [
        {
            type : 'category',
            boundaryGap:false,
            data : ['北京','上海','天津','重庆','河北','河南','湖北','湖南','广东','广西','其他']
        }
    ],
        tooltip : {
        trigger: 'item',
        formatter: "{b}:{c}"
    },
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'line',
            data:[200, 49, 70, 232, 256, 76.7, 135.6, 162.2, 32.6, 200,  230],
              //2.0 定直线
               markLine : {
               data : 
                 [ {name: '',xAxis: 0, yAxis: 0},
                 {name: '',value:0, xAxis: 0, yAxis: 0} ],
               
            },
        },
    ]
};
                    