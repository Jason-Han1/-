
const categroy = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];

var data = [2200, 1820, 1910, 2340, 2900, 3300, 3100];
var categroyData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var sortIndex = categroyData.map(x => categroyData.indexOf(x));

sortIndex.sort((a,b)=> data[a] - data[b]);
data = sortIndex.map(x => data[x]);
categroyData = sortIndex.map(x => categroyData[x]);




option = {
    title: {
        text: '简易动态数据 Demo'
    },
    xAxis: {},
    yAxis: {
        data: categroyData
    },
    series: [{
        type: 'bar',
        data: data,
        itemStyle:{
            color: function(params){
                return colorList[categroy.indexOf(params.name)];
            }
        },
        label: {
            show: true,
            position: 'right'
        }
    }]
};

setInterval(function() {
    
    

    data = data.map(x => x + Math.floor(Math.random() * 30) - 15);
    
    sortIndex.sort((a,b)=> data[a] - data[b]);
    data = sortIndex.map(x => data[x]);
    categroyData = sortIndex.map(x => categroyData[x]);
    
    myChart.setOption({
        yAxis:{
            data: categroyData
        },
        series: {
            data: data
        }
    });
}, 40);