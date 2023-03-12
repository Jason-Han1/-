option = {
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    series: [{
        name: 'chinaMap',
        type: 'map',
        map: 'world',
        roam: true,
        itemStyle: {
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        center: [15.97, 29.71],
        zoom: 2,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{b}'
            }
        },
        data: [{
            name: 'United States',
            value: 1
        }, {
            name: 'Canada',
            value: 2
        }, {
            name: 'Hondyras',
            value: 3
        }, {
            name: 'Chile',
            value: 4
        }, {
            name: 'Ecuador',
            value: 5
        }, {
            name: 'Peru',
            value: 6
        }, {
            name: 'Italy',
            value: 1
        }, {
            name: 'Panama',
            value: 2
        }, {
            name: 'Kuwait',
            value: 3
        }, {
            name: 'Thailand',
            value: 4
        }, {
            name: '香港',
            value: 5
        }, {
            name: 'UAE',
            value: 6
        }, {
            name: 'India',
            value: 1
        }, {
            name: 'Indonesia',
            value: 2
        }, {
            name: 'Russia',
            value: 3
        }, {
            name: 'Japan',
            value: 4
        }, {
            name: 'Malaysia',
            value: 5
        }, {
            name: 'Mexico',
            value: 6
        }, {
            name: 'Argentina',
            value: 6
        }, {
            name: 'South Africa',
            value: 7
        }],
        zlevel: 3
    }],
    visualMap: {
        min: 0,
        max: 7,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        show: false,
        inRange: {
            color: ['#ffffff', '#ffc188', '#479fd2', '#fba853', '#48c7c0', '#fa8737', '#4bbdd6', '#ff6f5b']
        }
        //
    }
}