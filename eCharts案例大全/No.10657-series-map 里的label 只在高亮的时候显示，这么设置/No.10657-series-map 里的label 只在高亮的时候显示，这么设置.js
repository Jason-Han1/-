option = {
    title : {
        text: 'World Population (2010)',
        subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
        sublink : 'http://esa.un.org/wpp/Excel-Data/population.htm',
        left: 'center',
        top: 'top'
    },
    tooltip : {
        trigger: 'item',
        formatter : function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                    + '.' + value[1];
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
    },
    toolbox: {
        show : true,
        orient : 'vertical',
        left: 'right',
        top: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    visualMap: {
        type: 'continuous',
        min: 0,
        max: 1000000,
        text:['High','Low'],
        realtime: false,
        calculable : true,
        color: ['orangered','yellow','lightskyblue']
    },
    series : [
        {
            name: 'World Population (2010)',
            type: 'map',
            mapType: 'world',
            label:{show:false},
            emphasis:{
                label:{show:true}
            },
            roam: true,
            itemStyle:{
                emphasis:{label:{show:true}}
            },
            data:[
                {name : 'China', value : 17150.76}
            ]
        }
    ]
}
