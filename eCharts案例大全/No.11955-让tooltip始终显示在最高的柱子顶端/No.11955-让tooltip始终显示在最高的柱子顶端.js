var barOption = null
var barWidth = null
var barSpace = null
function getBarOption() {
    var displayList = myChart.getZr().storage._displayList
    var barList = []
    var xList = []
    for (var i = 0;i<displayList.length;i++){
        if (displayList[i]['type'] === 'rect' && displayList[i]['shape']['x'] >0){
            barList.push(displayList[i])
            xList.push(displayList[i]['shape']['x']).toFixed(2)
        }
    }
    var barWidth = barList[2]['shape']['width']
    xList = xList.sort((a,b)=>{return a-b})
    var spaceList = []
    for (var i = 0; i < xList.length - 1; i++) {
        var space = (xList[i+1] - xList[i] - barWidth).toFixed(2)
        if (spaceList.indexOf(space) === -1){
            spaceList.push(space);
        }
    }
    return [barWidth,parseInt(spaceList[0])]
    }
function setBarOption(){
    barOption = getBarOption()
    barWidth = barOption[0]
    barSpace = barOption[1]
}
option = {
    legend: {},
    roam:true,
    tooltip: {
        trigger:'axis',
        position:(point,params,dom,rect)=>{
            var tooltipHeight = 100
            x = params[0]['data'][0]
            y = Math.max.apply(null,params[0]['data'].slice(1))
            idx = params[0]['data'].slice(1).indexOf(y)
            point = myChart.convertToPixel({gridIndex:0},[x,y])
            point[0] = point[0] - 1.5*(barWidth) - barSpace + idx * (barWidth+barSpace)
            point[1] -= tooltipHeight
            return  point
        }
    },
    dataset: {
        source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 80, 39.1]
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // graphic:{
    //     type:'rect',
    //     shape: {
    //     x: 135.83999999999997,
    //     y: 333,
    //     width: 50,
    //     height: -118.209
    // }
    // },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};
setTimeout(() => {
    setBarOption()
}, 500);