var data=[];

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            data.push([j*(5/20)+115.2,i*(5.2/20)+23.3,Math.floor(Math.random()*20-10),Math.floor(Math.random()*20-10)])
         }
    }
      console.log(data)   


var data=[
    [117,27,0,0],[117.5,27,0,0],[118,27,0,0],[118.5,27,0,0],[119,27,0,0],
    [117,26.5,0,0],[117.5,26.5,50,50],[118,26.5,0,0],[118.5,26.5,0,0],[119,26.5,0,0],
    [117,26,0,0],[117.5,26,-55,-55],[118,26,0,0],[118.5,26,0,0],[119,26,0,0],
    [117,25.5,0,0],[117.5,25.5,0,0],[118,25.5,0,0],[118.5,25.5,0,0],[119,25.5,0,0],
]

data=[
    [116,27,0,0],[117,27,0,0],[118,27,0,0],[119,27,0,0],[120,27,0,0],
    [116,26.5,0,0],[117,26.5,50,50],[118,26.5,60,100],[119,26.5,0,0],[120,26.5,0,0],
    [116,26,0,0],[117,26,-55,-55],[118,26,60,60],[119,26,0,0],[120,26,0,0],
    [116,25.5,0,0],[117,25.5,0,0],[118,25.5,0,0],[119,25.5,0,0],[120,25.5,0,0],
]


var option = {
    geo: [{
        map: 'test',
        roam: true,
        silent:true

    }],

tooltip:{},

    series: [{
        type: 'flowGL',
        coordinateSystem: 'geo',
        data: data,
        supersampling: 4,
        particleType: 'line',
        particleDensity: 58,
        particleSpeed: 0.6,
        particleSize:1,
        // gridWidth: 21,
       //  gridHeight: 21,
        itemStyle: {
             color:'#313695',
            opacity: 0.7
        }
    },
    {
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: data,
        tooltip: {
            show: true,
            formatter: function(e){
              //  console.log(e);
                return "经纬度"+e.data[0]+"<br>"+e.data[1]+"<br>"+"X:"+e.data[2]+"<br>"+"Y:"+e.data[3]
            }
        },
        itemStyle:{
            color:'green',
            opacity:0.5
        }
    }]

}