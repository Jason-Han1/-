var mainData = [];
mainData.push({
    name: '公共财政预算收入',
    value: 342305,
    percent: 10.23
});
mainData.push({
    name: '全口径财政收入',
    value: 1332042,
    percent: -10.2
});
mainData.push({
    name: '公共财政预算支出',
    value: 305652,
    percent: -23
});


function createSeries(mainData) {
    var result = [];
  
    for (var i = 0; i < mainData.length; i++) {
    		var increase = mainData[i].percent >0;
    	
    
        result.push({
            type: 'pie',
            center: [i * 33.333+10 + '%', '10%'],
            radius: ['15%', '18%'],
            label: {
        normal: {
            position: 'center',
            formatter: function(params) {
                if (params.name == "other")
                    return "";
                return params.value;
            },
          
            textStyle: {
                 color: increase ? 'red' : 'green',
                fontSize: 18
            }
        }
    },
            data: [{
                name: 'other',
                value:1
            
            }, {
                  value:  mainData[i].percent + '%'
            }],
            markPoint: {
            data: [{
                        value: mainData[i].value+'\n' +mainData[i].name,
                        x: myChart.getWidth() * (i + 0.5) / 3,
                        y: myChart.getHeight() * 0.25 + 15,
                        label: {
                            normal: {
                                show: true,
                                position: 'left'
                            }
                        },
                    }
            ]
        }
        });
    }
    return result;
}
option = {
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: createSeries(mainData)
}