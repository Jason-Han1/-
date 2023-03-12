//var colorList =['#228c38', '#1a57b2', '#b04b07', '#af8108'];
var colorList =["#f6d54a","#f69846","#44aff0","#45dbf7","#f845f1","#ad46f3","#5045f6","#4777f5"];
var colorListSub =['rgba(35,143,56,.5)', 'rgba(26,87,178,.5)', 'rgba(176,75,7,.5)', 'rgba(175,129,8,.5)'];
option = {
    backgroundColor: '#020306',
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}度 ({d}%)"
    },
    legend: {
        orient: 'vertical',
        textStyle:{
            color:'#fff',
            fontSize: 16,
        },
        right:'13%',
        top:'25%',
        data:['群体','刑事','火灾','治安','交通','其他']
    },
    series: [
        {
            type:'pie',
            radius: ['27%', '35%'],
            // roseType: 'radius',
            clockwise :false,
            z:10,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        return colorList[params.dataIndex]
                    },
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            },
            label: {
                normal: {
                     formatter: '{d|{c}起}\n{hr|}\n{d|({d}%)}',
                    // formatter: '{b|{b}}\n{hr|}\n{d|{c}  ({d}%)}',
                    rich: {
                        b: {
                            fontSize: 16,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 16,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 16,
                            color: '#fff',
                            align: 'center',
                            padding: 4
                        }
                    }
                }
            },
          /*  label: {
                normal: {
                    formatter: function(params){
                         return params.name+':'+params.value+'件';
                    },
                    // backgroundColor: '#eee',
                }
            },*/
            
            labelLine: {
                normal: {
                    length: 50,
                    length2: 0,
                    lineStyle:{
                        width:2
                    }
                }
            },
            data:[
                {value:300, name:'群体'},
                {value:351, name:'刑事'},
                {value:300, name:'治安'},
                {value:200, name:'火灾'},
                {value:51, name:'交通'},
                {value:51, name:'其他'},
                
            ]
        }
    ]
};