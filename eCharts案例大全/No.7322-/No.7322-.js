option = {
    color:["#315C94", "#497FB6", "#6F8FCF", "#7AA0BB", "#9FBEDD", "#BCD4E1"],
    backgroundColor:'#211b6a',
    textStyle: {
        color: '#fff',
        
    },
     tooltip: {
        trigger: "axis",
        axisPointer:{
            lineStyle:{
                type:'dashed',
                width:2,
                color:'#4B941A'
            },
            animation: true
        }
    },
    legend: {
        show:false,
        data: ['a','b','c','d','e'],
        left:'right',
    },
    grid:{
        show:false
    },
    yAxis: {
        data: [ '公共场所', '居留场所', '办公及学习场所', '医疗场所','其他'],
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#555'],
            }
        },
        axisLine: {
            show: false
        },
    },
    xAxis: {
        data: ['感染担忧', '新冠预防', '场所开放', '日常生活'],
        axisLine: {
            show: true,
            lineStyle: {
            color: '#555',
            },
        },
    },
    series:[
        {
            name:'a',
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return Math.sqrt(data[2]) * 20;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle:{
              normal:{
                  color:'red'
              }  
            },
            data:[
                ['感染担忧','公共场所',15],
                ['新冠预防','公共场所',23],
                ['场所开放','公共场所',9],
                ['日常生活','公共场所',7],               
            ]
        },
        {   
            name:'b',
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return Math.sqrt(data[2]) * 20;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle:{
              normal:{
                  color:'#C94C15'
              }  
            },
            data:[
                ['感染担忧','居留场所',3],
                ['新冠预防','居留场所',13],
                ['场所开放','居留场所',14],
				]
        },
        {   
            name:'c',
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return Math.sqrt(data[2]) * 20;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle:{
              normal:{
                  color:'#A18F1D'
              }  
            },
            data:[
                ['新冠预防','办公及学习场所',15],
                ['场所开放','办公及学习场所',1],
                ]
        },
        {   
            name:'d',
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return Math.sqrt(data[2]) * 20;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle:{
              normal:{
                  color:'#17885C'
              }  
            },
            data:[
               ['感染担忧','医疗场所',4],
                ['新冠预防','医疗场所',3],
               
            ]
        },
        {   
            name:'e',
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                 return Math.sqrt(data[2]) * 20;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle:{
              normal:{
                  color:'#2769CF'
              }  
            },
            data:[
                ['新冠预防','其他',1],
            ]
        },
        
   ]
};
