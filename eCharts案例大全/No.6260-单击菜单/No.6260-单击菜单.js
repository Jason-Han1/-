option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};

var mychart = document.getElementById('chart-panel');
var ismenu  = false;
var menu = document.createElement("div");
mychart.append(menu);

mychart.addEventListener('click',(p) => {
    if (!ismenu) {
        menu.style.width = '200px';
        menu.style.height = '200px';
        menu.style.backgroundColor = '#fff';
        menu.style.position = 'absolute';
        menu.style.left = p.layerX + 'px';
        menu.style.top = p.layerY + 'px';
        menu.style.display = 'block';
        ismenu = true;
    } 
    else {
        menu.style.display = 'none';
        ismenu = false;
    }
})