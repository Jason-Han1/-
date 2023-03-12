option = {
    color:["#315C94", "#497FB6", "#6F8FCF", "#7AA0BB", "#9FBEDD", "#BCD4E1"],
    backgroundColor:'#211b6a',
    textStyle: {
        color: '#fff',
        
    },
    title: {
        text: '产品签单额分布',
        left:'left',
        top:'1%',
        textStyle: {
            color: '#fff',
         },
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
        data: [ '2017', '2016', '2015', '2014','2013','2012','2011'],
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#fff'],
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
            color: '#fff',
            },
        },
    },
    xAxis: {
        data: ['俄罗', '宝钢', '宣钢', '梅钢', '涟钢', '福建'],
        axisLine: {
            show: true,
            lineStyle: {
            color: '#fff',
            },
        },
    },
    series:[
        {
            name:'a',
            type: 'scatter',
            symbol: 'roundRect',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
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
            data:[
                ['俄罗','2011',200],
                ['俄罗','2017',1500],
                ['俄罗','2012',2000],
                ['俄罗','2016',2500],
                ['俄罗','2013',3000],
                ['俄罗','2015',3500],
                ['俄罗','2014',4000]
            ]
        },
        {   
            name:'b',
            type: 'scatter',
            symbol: 'roundRect',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
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
            data:[
                ['宝钢','2015',1400],
                ['宝钢','2017',1500],
                ['宝钢','2012',5500],
                ['宝钢','2011',500],
            ]
        },
        {   
            name:'c',
            type: 'scatter',
            symbol: 'roundRect',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
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
            data:[
                ['宣钢','2012',200],
                ['宣钢','2017',1000],
            ]
        },
        {   
            name:'d',
            type: 'scatter',
            symbol: 'roundRect',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
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
            data:[
                ['梅钢','2016',4500],
            ]
        },
        {   
            name:'e',
            type: 'scatter',
            symbol: 'roundRect',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
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
            data:[
                ['涟钢','2012',1050],
                ['涟钢','2016',300],
                ['涟钢','2015',1600],
                ['涟钢','2011',3500],
            ]
        },
        {   
            name:'f',
            type: 'scatter',
            symbol: 'roundRect',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
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
            data:[
                ['福建','2011',1500],
                ['福建','2014',700],
                ['福建','2017',500],
            ]
        },
   ]
};