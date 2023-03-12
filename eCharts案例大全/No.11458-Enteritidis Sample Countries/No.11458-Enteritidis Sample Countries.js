option = {
    title: {
        text: 'Enteritidis Sample Countries',
        //subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
        //sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
        left: 'center',
        top: 'top'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
            return 'Counts of Enteritidis isolates' + '<br/>' + params.name + ' : ' + value;
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
        min: 0,
        max: 500,
        text:['High','Low'],
        realtime: false,
        calculable: true,
        color: ['orangered','yellow','lightskyblue']
    },
    series: [
        {
            name: 'Enteritidis Sample Countries',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle:{
                emphasis:{label:{show:true}}
            },
            data:[
                {name: 'Ethiopia', value: 1},
                {name: 'India', value: 2},
                {name: 'Ireland', value: 2},
                {name: 'Mozambique', value: 2},
                {name: 'Bangladesh', value: 3},
                {name: 'Serbia', value: 4},
                {name: 'Pakistan', value: 5},
                {name: 'Kenya', value: 14},
                {name: 'Brazil', value: 15},
                {name: 'Gambia', value: 17},
                {name: 'Costa Rica', value: 20},
                {name: 'Democratic Republic of Congo', value: 28},
                {name: 'Malawi', value: 39},
                {name: 'Uganda', value: 49},
                {name: 'United Kingdom', value: 51},
                {name: 'South Africa', value: 232},
                {name: 'Mali', value: 242},
                {name: 'Peru', value: 245},
                {name: 'Colombia', value: 402},
                {name: 'Unknown', value: 73}
            ]
        }
    ]
};