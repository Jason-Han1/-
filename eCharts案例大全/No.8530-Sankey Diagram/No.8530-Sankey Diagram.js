var data={"nodes": [
      {"name": "a","value":45},
      {"name": "b"},
      {"name": "c"},
      {"name": "d"},
      
      {"name": "e"},
      {"name": "f"},
      {"name": "g"},
      {"name": "h"},
      {"name": "i"},
      {"name": "j"},
      {"name": "k"},
      {"name": "l"},
      {"name": "m"},
      
   ],
   "links": [
      {"source": "a", "target": "b", "value": 1},
      {"source": "b", "target": "c", "value": 3},
      {"source": "b", "target": "d", "value": 3},
      
      {"source": "a", "target": "e", "value": 1},
      {"source": "e", "target": "j", "value": 3},
      {"source": "e", "target": "d", "value": 1},
      {"source": "e", "target": "c", "value": 1},
     
      {"source": "a", "target": "k", "value": 1},
      {"source": "k", "target": "l", "value": 1},
      {"source": "k", "target": "m", "value": 1},     

      {"source": "a", "target": "g", "value": 1},
      {"source": "g", "target": "h", "value": 1},
      
      {"source": "a", "target": "f", "value": 1},
      {"source": "a", "target": "i", "value" : 1},
   ]}

console.log(data.nodes);

//var uploadedDataURL = "/asset/get/s/data-1461574766790-SyPd3Ljl.json";


myChart.showLoading();
//$.getJSON(uploadedDataURL, function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        title: {
            text: 'Sankey Diagram'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter: function(o){
                if(o.dataType!== "edge"){
                    return '';
                } else if(o.dataType == "node"){
                    return  o.data.name + o.data.value;
                } else {
                    return o.data.source + ' - ' + o.data.target + "：" + o.data.value + '%'
                }

            }

        },
        series: [
            {
                type: 'sankey',
                layout:'none',
                orient:'vertical',
                data: data.nodes,
                links: data.links,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                label:{
                    normal: {
                        position: 'inside',
                      align: 'center',
                      formatter: function(o){
                            return o.data.name +  (o.data.value? (' - ' + o.data.value ): '')
                        }
                    },
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5
                    }
                }
            }
        ]
    });
//});