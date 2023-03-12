
/* longitudeX latitudeY size label zhou year*/
var rawData = [
        [22,100,10,'Austra','zhou1',1990],
        [22,110,20,'Canada','zhou2',1990],
        [22,120,30,'China','zhou3',1990],
        [22,30,30,'China2','zhou3',1990],
        
        [22,100,10,'Austra','zhou1',1991],
        [22,110,10,'Canada','zhou2',1991],
        [22,120,10,'China','zhou3',1991],
        [22,30,35,'China2','zhou3',1991],
];

var aintD = {
        1990:{
            zhou1:[[22,100,10,'Austra','zhou1',1990]],
            zhou2:[[22,110,20,'Canada','zhou2',1990]],
            zhou3:[
                [22,120,30,'China','zhou3',1990],
                [22,30,30,'China2','zhou3',1990]
            ]
        },
        1991:{
            zhou1:[[22,100,10,'Austra','zhou1',1991]],
            zhou2:[[22,110,10,'Canada','zhou2',1991]],
            zhou3:[
                [22,120,10,'China','zhou3',1991],
                [22,30,35,'China2','zhou3',1991]
            ]
        }
}

option = {
    baseOption:{
        timeline:{
          data:Object.keys(aintD),  
          axisType:'category',
        },
        legend: {
            right: 10,
            data: ['zhou1','zhou2','zhou3'],//洲
        },
        xAxis: {
        },
        yAxis: {
            scale: true
        },
    },
    brush:{},
    options:Object.keys(aintD).map(year=>({
        title:{
            text:year
        },
        series: Object.keys(aintD[year]).map(k=>({
            name:k,
            data:aintD[year][k],
            type: 'scatter',
            symbolSize: function (data) {
                return data[2];
            },
            label: {
                // emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                // }
            }
        }))
    })),
 
};