// let legend:['累计采样场所数', '累计采样管数', '累计检测管数', '累计阳性管数', '累计异常处置场所数'];
//       let  dataX:['2012', '2013', '2014','2015','2016','2017'];
//       let  dataY1:[150,145,167,122,167,154],
//       let  dataY2:[164,127,178,186,175,143],
//       let  dataY3:[168,164,186,164,185,178],
//       let dataY4:[178,194,156,134,165,157],
//       let  dataY5:[178,194,56,134,165,157];
 option = {
    color:["#315C94", "#497FB6", "#6F8FCF", "#7AA0BB", "#9FBEDD", "#BCD4E1"],
    backgroundColor:'#011424',
    textStyle: {
        color: '#fff',
        
    },
     tooltip: {
        trigger: "axis",
        //  formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}<br />{a4}: {c4}",
        axisPointer: {
            type: "shadow"
        },
        textStyle: {
            align: 'left'
        }
    },
    legend: {
        show:false,
        data: ['累计采样场所数', '累计采样管数', '累计检测管数', '累计阳性管数', '累计异常处置场所数'],
        left:'right',
    },
    grid:{
        top: 10,
        bottom: 40,
        left: 50,
        right: 30
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(164,218,255,0.1)",
              type: "dashed"
            }
          },
        axisLine: {
            show: false
        },
    },
    xAxis: {
        data:['2012', '2013', '2014','2015','2016','2017'],
        axisLine: {
            show: true,
            lineStyle: {
            color: '#555',
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#DFDFDF",
                fontSize: 14
            },
            formatter: "{value}"
        },
    },
   series: [{
            name: "累计采样场所数",
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return 20;
            },
            data:[150,145,167,122,167,154]
        },
        {
            name: "累计采样管数",
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return 20;
            },
            data: [164,127,178,186,175,143]
        },
        {
            name: "累计检测管数",
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return 20;
            },
            data: [168,164,186,164,185,178]
        },
        {
            name: "累计阳性管数",
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return 20;
            },
            data:[178,194,156,134,165,157]
        },
        {
            name: "累计异常处置场所数",
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                return 20;
            },
            data: [178,194,56,134,165,157]
        }
    ]

};