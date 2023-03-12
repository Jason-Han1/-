var labels = ['PM2.5', 'CO', 'PM10', 'NO2', 'SO2', 'O3'];
option = {
    backgroundColor: '#000',
    tooltip: {
        formatter: function(params) {
            var results = '';
            for (var i = 0; i < labels.length; i++) {
                results += labels[i] + '：' + params.value[i] + '天<br>';
            }
            return results;
        }
    },
    radar: {
        name: {
            textStyle: {
                color: '#fff',
            }
        },
        indicator: [{name:'PM2.5', max: 30},
        {name: 'CO', max: 30}, 
        {name:'PM10', max: 30}, 
        {name:'NO2', max: 30}, 
        {name:'SO2', max: 30}, 
        {name:'O3', max: 30}]
    },
    series: [{
        type: 'radar',
        data: [{
            value: [5, 10, 20, 30, 5, 0],
        }, ],
        areaStyle:{
            normal:{
                
            },
        },
    }],
};