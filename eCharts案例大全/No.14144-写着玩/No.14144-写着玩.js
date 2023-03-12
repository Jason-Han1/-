option = {

    series: [{
        type: 'pie',
        data: [],
        itemStyle: {
            normal: {
                color: function(p) {
                    return new echarts.graphic.RadialGradient(0.5, 0.5, .5, [{
                        offset: 0,
                        color: 'hsl(' + p.value + ',100%,90%)'
                    }, {
                        offset: 0.4,
                        color: 'hsl(' + p.value + ',100%,50%)'
                    }, {
                        offset: 1,
                        color: 'rgba(255,255,255,0)'
                    }]);
                }

            }
        }
    }]
};
var data = [];
var backgroundColor = [];
var myintervel = setInterval(function() { //setInterval
    if (data.length === 360) {
        data = [];
        backgroundColor = []
        clearInterval(myintervel);
    } else {
        if (data.length % 10 === 0) {
            backgroundColor.push('hsl(' + data.length + ',50%,50%)');
        }
        data.push(data.length);

        myChart.setOption({
            backgroundColor: 'radial-gradient(' + backgroundColor.join(',') + ')',
            series: [{
                type: 'pie',
                data: data
            }]
        });
    }


}, 100);