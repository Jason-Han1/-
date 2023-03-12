// http://rail.qiangs.tech/
// json数据每日更新

var uploadedDataURL = "/asset/get/s/data-1520061248047-S1dripwOz.json";

$.getJSON(uploadedDataURL, function(data) {
    console.log(data)
    lines=[]
    for(n=0;n<data.lines.length;n++){
        lines.push([data.stations[data.lines[n][0]].slice(1),
        data.stations[data.lines[n][1]].slice(1)])
    };
    myChart.setOption(option = {
        backgroundColor: '#rgba(0,0,0,0)',
        geo: {
            map: 'china',
            silent: true,
            itemStyle: {
                borderColor: '#rgba(0,0,0,0)',
                color: '#rgba(0,0,0,0)'
            },
            zoom:1.5
        },
        series: [{
            type: 'lines',
            coordinateSystem: 'geo',
            data: lines,
            large: true,
            lineStyle: {
                color:'#FFF',
                opacity: 0.1,
                width: 0.5,
                curveness: 0.1
            },
            blendMode: 'lighter'
        }]
    });
});