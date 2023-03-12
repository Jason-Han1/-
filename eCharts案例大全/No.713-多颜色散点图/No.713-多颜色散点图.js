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
        data: ['a','b','c','d','e','f'],
        left:'right',
    },
    grid:{
        show:false
    },
    yAxis: {
        data: [ '2011', '2012', '2013', '2014','2015','2016'],
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
        data: ['俄罗', '宝钢', '宣钢', '梅钢', '涟钢', '福建'],
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
                return Math.sqrt(data[2]) * 1;
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
                ['俄罗','2011',200],
                ['宝钢','2011',1500],
                ['宣钢','2011',2000],
                ['梅钢','2011',2500],
                ['涟钢','2011',3000],
                ['福建','2011',3500],
            ]
        },
        {   
            name:'b',
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return Math.sqrt(data[2]) * 1;
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
                ['俄罗','2012',1400],
                ['宝钢','2012',1500],
                ['宣钢','2012',5500],
                ['梅钢','2012',500],
            ]
        },
        {   
            name:'c',
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return Math.sqrt(data[2]) * 1;
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
                ['宣钢','2013',200],
                ['福建','2013',1000],
            ]
        },
        {   
            name:'d',
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return Math.sqrt(data[2]) * 1;
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
                ['梅钢','2014',4500],
                ['宝钢','2014',500],
            ]
        },
        {   
            name:'e',
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return Math.sqrt(data[2]) * 1;
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
                ['俄罗','2015',1050],
                ['涟钢','2015',300],
                ['福建','2015',1600],
                ['梅钢','2015',900],
            ]
        },
        {   
            name:'f',
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return Math.sqrt(data[2]) * 1;
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
                  color:'#509820'
              }  
            },
            data:[
                ['俄罗','2016',500],
                ['宝钢','2016',1700],
                ['福建','2016',500],
            ]
        },
   ]
};