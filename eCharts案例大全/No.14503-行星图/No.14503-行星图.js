var data={
  "title":["标题","单位"],
  "legend":["a","b","c","d","e","f"],
  "data":[[8,30,2825],[9,90,3355],[5,150,2675],[5,210,2495],[6,270,2265],[7,330,1945]]
}

option = {

        title: [
            {
                text: data.title[0],
                left: 'center',
                
            },{
                text: data.title[1],
                left: 'center',
                top:'center',
                textStyle:{
                    color:"#fff"
                }
            }
        ],
        color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b',' #f17677'],
        legend: {
            data: data.legend,
            left:'center',
            bottom: 10
        },
        polar: {},
        angleAxis: {
            show:false,
            type: 'value',
            min:0,
            max:360
        },
        radiusAxis: {
            show:false,
            axisAngle: 0
        },
        series: []

    };
    for(let i=0;i<3;i++){
        option.series.push({
            type:'pie',
            radius:[27*i+"%",27*(i+1)+"%"],
            silent:true,
            labelLine:{
                normal:{
                    show:false
                },
                emphasis:{
                    show:false
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#FFFFFF'
                        }, {
                            offset: 0.10,
                            color: '#FFFFFF'
                        }, {
                            offset: 0.45,
                            color: '#DFDFFF'
                        }, {
                            offset: 0.55,
                            color: '#DFDFFF'
                        }, {
                            offset: 0.90,
                            color: '#FFFFFF'
                        },

                        {
                            offset: 1,
                            color: '#FFFFFF'
                        }
                    ], false),
                }
            },
            data:[{value:100}]
        });
    }
    var size=[];
    for(let i=0;i<data.data.length;i++){
        size.push(data.data[i][2]);
    }
    for(let i=0;i<data.data.length;i++){
        option.series.push({
            name:data.legend[i],
            coordinateSystem: 'polar',
            angleAxisIndex: 0,
            radiusAxisIndex: 0,
            type: 'scatter',
            
            symbolSize: function(d){
                return d[2]*50/Math.max.apply(Math,size);
            },
            label:{
                normal:{
                    show:true,
                    
                }
            },
            data: [data.data[i]]
        })
    }
    setInterval(function () {
        for(var i =0;i<data.data.length;i++){
            data.data[i][1]++;
            if(data.data[i][1]>=360){
                data.data[i][1]=0;
            }
        }
        // console.log(data.data[0][1])
        myChart.setOption(option)
    },100);