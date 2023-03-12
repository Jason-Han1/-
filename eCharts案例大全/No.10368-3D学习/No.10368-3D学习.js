
var hours = ['福州市', '厦门市', '漳州市', '宁德市', '南平市', '莆田市', '泉州市',
        '三明市', '龙岩市', '平潭县'];
var days = ['AQI', 'CO', 'NO2',
        'PM25', 'PM10', 'SO2', 'O3'];
        var data=[]
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 7; j++) {
    data.push([i,j,Math.floor(Math.random()*150)])
    }
}



option = {
    tooltip: {},
     visualMap: {
                min: 0,
                max: 600,
                splitNumber: 6,
                pieces: [

                    {
                        min: 120,
                        label: '严重污染'
                    },

                    {
                        min: 100,
                        max: 120,
                        label: '重度污染'
                    },
                    {
                        min: 80,
                        max: 100,
                        label: '中度污染'
                    },
                    {
                        min: 70,
                        max: 80,
                        label: '轻度污染'
                    },
                    {
                        min: 50,
                        max: 70,
                        label: '良'
                    },
                    {
                        min: 0,
                        max: 50,
                        label: '优'
                    },
                ],
        
                color: ['#a11430', '#e06b9d', '#db4a6e', '#f2c248', '#cddb4c', '#4bcf1c'],
              
     },
    xAxis3D: {
        type: 'category',
        name:'城市',
        data: hours,
        axisLabel:{
            interval:0,
            showMaxLabel:false
        }
        
    },
    yAxis3D: {
        type: 'category',
        name:'项目',
        data: days
    },
    zAxis3D: {
        type: 'value',
        name:'数值'
    },
    grid3D: {
        boxWidth: 100,
        boxDepth: 40,
        boxHeight:50,
        viewControl: {
            // projection: 'orthographic'
            autoRotate:true,
             
        },
       
       
    },
    series: [{
        type: 'bar3D',
        data: data.map(function (item) {
            return {
                value: [item[0], item[1], item[2]],
            }
        }),
        shading: 'color',

        label: {
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
               // color: '#900'
            }
        }
    }]
}