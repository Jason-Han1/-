var echartData =  [
                {value:33, name:'悠悠'},
                {value:9, name:'扬扬'}];



var  colorList=[ '#3bafff', '#f1bb4c'];
option = {
    legend: {
        show:true,
        orient: 'horizontal',
        icon: 'circle',
        bottom : 30,
        itemGap : 15,
        textStyle: {
            rich: {
                x :{
                    fontSize : 20,
                    padding: [10, 10, 30, 0],
                },
                0: {
                    color: colorList[0],
                    fontSize : 20
                },
                1: {
                    color: colorList[1],
                    fontSize : 20
                }
            }
        },
        formatter: function(name){
            for (let i = 0; i < echartData.length; i++) {
                if(name == echartData[i].name){
                    return  '{x|'+ name+'}\n{'+i+'|'+echartData[i].value+'}项';
                }
            }
        }
    },
    series: [
        // 主要展示层的
        {
            radius: ['0%', '51%'],
            center: ['50%', '50%'],
            type: 'pie',
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            label:{
                normal:{
                    position: 'inside' ,
                    formatter: '{d}%',
                }
            },
            data: echartData
        },
        // 边框的设置
        {
            radius: ['47%', '51%'],
            center: ['50%', '50%'],
            type: 'pie',
            animation: false,
            itemStyle: {
                normal: {
                    color:'rgba(250,250,250,0.5)'
                }
            },
            data: [{value:1}]
        }
    ]
};