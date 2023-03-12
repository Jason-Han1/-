var data={
  "data":[[8,30,2825],[4,30,2825],[0,30,2825],[2,30,2825]] // [,角度,name]
}

option = {
        color: ['#E84B46', '#496FA5','#4A1BE7','#1BD6E7'],
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
        
        let opacity = 0.7;
        if(i === 1) {opacity=0.35}
        if(i === 2) {opacity=0.15}
        option.series.push({
            type:'pie',
            radius: [33*i+"%",33*(i+1)+"%"],
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
                borderWidth:0,
                opacity:opacity,
                color: {
                    type: 'radial',
                    x: 0,
                    y: 0,
                    r: 3,
                    colorStops: [
                    {
                        offset: 0, color: 'rgba(27,88,231,0.2)' // 0% 处的颜色
                    },
                    {
                        offset: 1, color: '#fff' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
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
            coordinateSystem: 'polar',
            angleAxisIndex: 0,
            radiusAxisIndex: 0,
            type: 'scatter',
            symbolSize: function(d){
                return d[2]*50/Math.max.apply(Math,size);
            },
            itemStyle: {
             shadowBlur: 10
            },
            label:{
                normal:{
                    show:true,
                    
                }
            },
            data: [data.data[i]]
        })
    }
        myChart.setOption(option)
