// var seriesData = [[], [1, 820], [2, 932], [3, 901], [4, 934], [5, 1290], [6, 1330], [7, 1320]];
// var seriesData = [[0, 820], [1, 932], [2, 901], [3, 934], [4, 1290], [5, 1330], [6, 1320]];

var seriesData = [820, 932, 901, 934, 1290, 1330, 1320];
var seriesData2 = [];

var top = 50, left = 100, bottom = 50, right = 50;

option = {
    grid:[{
        top: top,
        left: left,
        bottom: bottom,
        right: right
    }],
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        id: 'bb',
        data: seriesData,
        type: 'line',
        symbolSize: 20
    }],
    graphic: [{
        id: 'aa',
        type: 'polyline',
        shape: {
            points: []
        }
    }]
};
var moveFn;
let initDownX = '';
var xAxisItem = null;
var pointsArr = [];
var arr = [];
var myChartWidth = myChart.getWidth() - left - right;
var myChartHeight = myChart.getHeight() - top - bottom;
myChart.getZr().on('mousedown', params => {
    initDownX = xAxisItem = params.offsetX;
    pointsArr = [];
    arr = [];
    myChart.getZr().on('mousemove', moveFn);
});

function moveFn(params){
    if(!initDownX) return;
    if(Math.abs(params.offsetX - xAxisItem) >= 5){
        xAxisItem = params.offsetX;
        pointsArr.push([params.offsetX, params.offsetY]);
        let decimal = (params.offsetX - left) / myChartWidth * seriesData.length;
        var yItemData = myChart.convertFromPixel('grid', [params.offsetX, params.offsetY])[1];
        let json = {
            x: decimal,
            y: yItemData
        };
        arr.push(json);
        let distanceLeft = params.offsetX - initDownX;
        
        if(params.offsetX < initDownX){
            distanceLeft = initDownX - params.offsetX;
        }
        if(distanceLeft >= myChartWidth / seriesData.length){
            myChart.setOption({
                graphic:[{
                    id: 'aa',
                    shape: {
                        points: pointsArr,
                    },
                    style: {
                        stroke: 'red'
                    }
                }]
            });
        }
    }
}
myChart.getZr().on('mouseup', params => {
	myChart.getZr().off('mousemove', moveFn);
	if(!initDownX || !arr.length) return;
	initDownX = '';
	if(arr[0].x > arr[arr.length - 1].x){
	    arr.reverse();
	}
	let x = parseInt(arr[0].x);
	let dataIndexEnd = parseInt(arr[arr.length - 1].x);
	
    while(x <= dataIndexEnd){
        let xNum = x + 0.5;
        for(var i = 0; i < arr.length; i++){
            if(!arr[i + 1]) break;
            if(arr[i].x <= xNum && xNum <= arr[i + 1].x){
                var yData = ((arr[i].y + arr[i + 1].y) / 2).toFixed(2);
                seriesData[x] = yData;
                break;
            }
        }
        x++;
    }
	myChart.setOption({
	    series:[{
	        id: 'bb',
	        data: seriesData
	    }],
	    graphic:[{
            id: 'aa',
            shape: {
                points: [],
            },
        }]
	});
});
