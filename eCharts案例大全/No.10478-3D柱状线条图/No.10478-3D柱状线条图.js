 var symbolSize = 2.5;
 var random = function(ints,y){
     var data = [];
     data.push([0,y,0]);
     for(var i=1;i<ints;i++){
         data.push([i,y,parseInt(Math.random() * 10) + 100]);
     }
     return data;
 }
    option = {
         xAxis3D: {
            type: 'category',
            data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        },
        yAxis3D: {
            type: 'category',
            data: [1,2,3,4,5]
        },
        zAxis3D: {
            type: 'value'
        },
        grid3D: {
            distance:100,
           boxWidth: 100,
            boxDepth: 80,
            viewControl: {
                // autoRotate: true
            },
            light: {
                main: {
                    shadow: true,
                    quality: 'ultra',
                    intensity: 1.5
                }
            }
        },
        dataset: {},
        series: [
            {
                type: 'bar3D',
                data: [
                    [0,0,10] ,
                     [0,1,13] ,
                      [0,2,1] ,
                       [0,3,25] ,
                        [0,4,11] 
                ],
                stack: 'stack',
                shading: 'lambert',
                emphasis: {
                    label: {
                        show: false
                    }
                }
            },
            {
                type: 'bar3D',
                data: [
                    [0,0,1] ,
                     [0,1,10] ,
                      [0,2,1] ,
                       [0,3,15] ,
                        [0,4,9] 
                ],
                stack: 'stack',
                shading: 'lambert',
                emphasis: {
                    label: {
                        show: false
                    }
                }
            },
           {
                type: 'bar3D',
                data: [
                    [0,0,11] ,
                     [0,1,21] ,
                      [0,2,44] ,
                       [0,3,13] ,
                        [0,4,19] 
                ],
                stack: 'stack',
                shading: 'lambert',
                emphasis: {
                    label: {
                        show: false
                    }
                }
            },{
                type: 'bar3D',
                data: [
                    [0,0,11] ,
                     [0,1,50] ,
                      [0,2,30] ,
                       [0,3,16] ,
                        [0,4,99] 
                ],
                stack: 'stack',
                shading: 'lambert',
                emphasis: {
                    label: {
                        show: false
                    }
                }
            },
             {
                name:"qq",
                type: 'line3D',
                data: random(20,0)
            },
             {
                name:"qq",
                type: 'line3D',
                data: random(20,1)
            },
             {
                name:"qq",
                type: 'line3D',
                data: random(20,2)
            },
             {
                name:"qq",
                type: 'line3D',
                data: random(20,3)
            },
             {
                name:"qq",
                type: 'line3D',
                data: random(20,4)
            }
        ]
    };

    myChart.setOption(option);