 backColor= ['#d48265','#c23531','#91c8af','#749f83','#61a0a8',"#39cccc","#487ed1","#37b1ec","#cbeea2","#5f64ee","#fac417","#7fdbff","#9e50ad"]
repulsionData=[250, 300]
preSpan='金融,制造业,广告媒体,教育培训,通信,建筑,服务,地产,物流,医疗,IT,电商客户'.split(',')
preData=[]
preSpanCount= "0.0473,0.1466,0.0024,0.2695,0.0118,0.0189,0.1962,0.0378,0.0473,0.0236,0.1017,0.0969".split(",");
preSpan.forEach(function(v,i){
    var percentData=Math.round(preSpanCount[i]*10000)/100;
    var widthData=percentData*6;
    widthData=widthData>200?200:widthData<20?20:widthData;  
    var itemObj={
        "name": v,
        "value": percentData,
        "symbolSize": widthData,
        "itemStyle": {
            "normal": {
                "borderColor": "rgba(255, 255, 255, 0.22)",
                "borderWidth": 8,
                "color": backColor[i],
                "opacity":0.9
            }
        }
    }
    preData.push(itemObj);
})
option = {
    title: {
        text: '球状百分比占比图'
    },
    backgroundColor: '#fff',
                    tooltip: {},
                    animationDuration:500,
                    // animationDurationUpdate: 100,
                    color: ['#fff', '#fff', '#fff'],
                    series: [{
                        type: 'graph',
                        tooltip : {
                            formatter: function (params) {
		                        return params.name + ': ' + params.value+'%';
		                    }
                        },
                        layout: 'force',
                        force: {
                            repulsion: repulsionData,
                            gravity:0.13
                            // edgeLength: 10
                        },
                        roam: true,
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        emphasis:{
                            itemStyle:{
                                borderWidth:10,
                                opacity:1
                            }
                        },
                        data: preData
                    }]
};