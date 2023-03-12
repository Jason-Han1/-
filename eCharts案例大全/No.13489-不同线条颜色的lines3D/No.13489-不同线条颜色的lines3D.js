$.getJSON('/asset/get/s/data-1483975567865-BJOcimZIg.json', function(data) {

    function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
    }
    var routes = data.routes.slice(0,900).map(function(airline) {
        return {
            coords: [
                getAirportCoord(airline[1]),
                getAirportCoord(airline[2])
            ],
            value: Math.round(Math.random() * 100)
        }
    });
    myChart.setOption({
        timeline: {
            axisType: 'category',
            autoPlay: true,
            data: ['2014','2015','2016','2017']  
        },
        baseOption:{
            title:{
                text:'境外资本流入',
                textStyle:{
                    color:'#fff'
                },
                left:'center',
                top:20
            },
            visualMap:{
                id:'lines',
                type:'piecewise',
                show:false,
                seriesIndex:0,
                splitNumber: 4,
                max:100,
                color:['#215096', '#3598c1', '#40a9ed', '#b7d6f3']
            },
            backgroundColor: '#000',
           
            globe: {
                baseTexture: '/asset/get/s/data-1491837049070-rJZtl7Y6x.jpg',
                heightTexture: '/asset/get/s/data-1491889019097-rJQYikcpl.jpg',
                environment: '/asset/get/s/data-1499132777213-SyZdmO_4-.jpg',
                shading: 'lambert',
                globeRadius:70,
                light: {
                    ambient: {
                        intensity: 0.4
                    },
                    main: {
                        intensity: 0.4
                    }
                },
    
                viewControl: {
                    autoRotate: true
                }
            },
            series: [{
                type: 'lines3D',
                coordinateSystem: 'globe',
                lineStyle: {
                    width:1.5,
                    opacity: 0.8
                },
                data: []
            }]
        },
        options:[
            {   
                title:{text:'2014'},
                series:[{data:routes.slice(0,5)}]
            },{
                title:{text:'2015'},
                series:[{data:routes.slice(0,50)}]
            },{   
                title:{text:'2016'},
                series:[{data:routes.slice(0,150)}]
            },{
                title:{text:'2017'},
                series:[{data:routes}]
            }
        ],
        
    });
});