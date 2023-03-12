option = {
    title: {
        text: '国际STEM教育研究国家（地区）分布',
        left: 'center',
        top: 'top'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                    + '.' + value[1];
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    visualMap: {
        min: 1,
        max: 80,
        text:['High','Low'],
        realtime: false,
        calculable: true,
        inRange: {
            color: ['skyblue','orangered']
        }
    },
    series: [
        {
            name: 'World Population (2010)',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle:{
                emphasis:{label:{show:true}}
            },
            data:[
                {name: 'Australia', value:41},
                {name: 'China', value:9},
                {name: 'United States', value:472},
                {name: 'United Kingdom', value:36},
                {name: 'South Africa', value: 3},
                {name: 'Germany', value: 22},
                {name: 'Spain', value: 22},   
                {name: 'Taiwan', value: 15},   
                {name: 'Korea', value: 10},      
                {name: 'Netherlands', value: 10},  
                {name: 'Turkey', value: 8},   
                {name: 'Canada', value: 7},      
                {name: 'Israel', value: 6},
                {name: 'Greece', value: 6},
                {name: 'Sweden', value: 5},
                {name: 'France', value: 4},
                {name: 'Finland', value: 4},
                {name: 'Malaysia', value: 4},
                {name: 'Denmark', value: 4},
                {name: 'Belgium', value: 3},
                {name: 'Ireland', value: 3},
                {name: 'Italy', value: 3},
                {name: 'LIthuania', value: 3},
                {name: 'Russia', value: 3},
                {name: 'Slovenia', value: 2},
                {name: 'New Zealand', value: 2},
                {name: 'Austria', value: 2},
                {name: 'Saudi Arabia', value: 2},
                {name: 'Norway', value: 2},
                {name: 'Singapore', value: 2},
                {name: 'Brazil', value: 2},
                {name: 'Mexico', value: 2},
            ]
        }
    ]
};
