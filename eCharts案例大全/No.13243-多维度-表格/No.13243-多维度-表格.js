var data = {
    xjm: [500, 300, 490, 333, 346],
    zjm: [300, 400, 500, 300, 400],
    djm: [60, 80, 90, 60, 70]
};

function getTableLine(num) {
    var list = [];
    var bottom = 250;
    var height = 20;
    for (var i = 0; i < num; i++) {
        list.push({
            type: 'line',
            bottom: bottom - i * height,
            right: 10,
            style: {
                fill: '#333'
            },
            shape: {
                x1: 0,
                y1: 0,
                x2: 3200,
                y2: 0
            }

        });
    }
    return list;
}
var lineList = getTableLine(4);

option = {
  	color: ['#3e6591', '#eb7d22', '#d73f45'],
  	title: [{
        text: ' \n小截面\n中截面\n大截面',
        bottom: 215,
        left: 10,
        textStyle: {
            lineHeight: 20,
            fontSize: 13,
           fontWeight: 'bold',
            formatter: function(value) {
                return '{table|' + value + '}';
            },
            rich: {
                table: {
                    align: 'center'
                }
            }
        }
    }],
    // legend: {
    //     data: ['35KV', '110KV', '220KV', '500KV','800KV']
    // },
  	grid: {
      	bottom: 300,
        left:60,
        right: 10
    },
    
  
    yAxis:  {
            type : 'value',
        },
    xAxis: [{
                type: 'category',
                boundaryGap: true,
               	offset: 20,
               	axisTick: {
                   	length: 110
                 },     
                 data: ['35KV', '110KV', '220KV', '500KV', '800KV'],
                axisLabel: {
                    formatter: function(value, index) {
                        return '{table|' + value +
                            '}\n{table|' + data.xjm[index] +
                            '}\n{table|' + data.zjm[index] +
                            '}\n{table|' + data.djm[index]+'}';
                    },
                    rich: {
                        table: {
                            lineHeight: 20,
                            fontWeight:'bold',
                            align: 'center'
                        }
                    }
                }
            }
        ],
     series: [{
                type: 'bar',
                data:[220, 182, 191, 234, 290],
                label: {
                 	normal: {
                      	show: true,
                      	position: 'bottom',
                      	textStyle: {color: '#000'},
                      	formatter: '小截面'
                    }
                }
            }, {
                type: 'bar',
                data:[210, 132, 91, 204, 220],
                label: {
                 	normal: {
                      	show: true,
                      	position: 'bottom',
                      	textStyle: {color: '#000'},
                      	formatter: '中截面',              
                    }
                }      
            }, {
                type: 'bar',
                data:[120, 132, 131, 254, 278],
                label: {
                 	normal: {
                      	show: true,
                      	position: 'bottom',
                      	textStyle: {color: '#000'},
                      	formatter: '大截面',              
                    }
                }      
            }],
             graphic: lineList
};