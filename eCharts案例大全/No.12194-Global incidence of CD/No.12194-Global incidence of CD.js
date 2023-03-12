myChart.showLoading();

$.get('https://raw.githubusercontent.com/WingsleyLui/MapJSON/master/global_map2.json', function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('globalmap', geoJson);

    myChart.setOption(option = {
        title : {
            text: 'Global incidence of CD',
            left: 'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: '{b}',
        },
        legend: {
            orient: 'vertical',
            left: 'left',

        },
        toolbox: {
            show: true,
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
            min: 2,
            max: 5,
            left: 'left',
            top: 'bottom',
            text:['high','low'],           // 文本，默认为数值文本
            calculable : true,
            inRange: {
                 color: ['#313695', '#4575b4', '#74add1',  '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
        },
        series: [
            {
                name: 'Total amount of patients',
                type: 'map',
                mapType: 'globalmap',
                roam: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: 'Argentina',value:2.184691431},
                    {name: 'Austria',value:2.56937391},
                    {name: 'Canada',value:2.08278537},
                    {name: 'China',value:2.184691431},
                    {name: 'Hongkong',value:4.197363273},
                    {name: 'Taiwan',value:2.096910013},
                    {name: 'Croatia',value:1.73239376},
                    {name: 'Czech Rep.',value:2.045322979},
                    {name: 'France',value:3.061829307},
                    {name: 'Germany',value:2.176091259},
                    {name: 'Hungary',value:2.392696953},
                    {name: 'Israel',value:2.276461804},
                    {name: 'Italy',value:2.004321374},
                    {name: 'Japan',value:1.991226076},
                    {name: 'Korea',value:3.509471352},
                    {name: 'Netherlands',value:3.043362278},
                    {name: 'Qatar',value:2.089905111},
                    {name: 'Romania',value:2.712649702},
                    {name: 'Serbia',value:2.707570176},
                    {name: 'Spain',value:3.051538391},
                    {name: 'Sweden',value:2.136720567},
                    {name: 'Switzerland',value:2.875061263},
                    {name: 'United Kingdom',value:3.35945602},
                    {name: 'United States of America',value:5.1549836},

                ],
                 nameMap: {
                    'Argentina':'Argentina 153',
                    'Austria':'Austria 371',
                    'Canada':'Canada 121',
                    'China':'China 153',
                    'Hongkong':'Hongkong 15753',
                    'Taiwan':'Taiwan 125',
                    'Croatia':'Croatia 54',
                    'Czech Rep.':'Czech Rep. 111',
                    'France':'France 1153',
                    'Germany':'Germany 150',
                    'Hungary':'Hungary 247',
                    'Israel':'Israel 189',
                    'Italy':'Italy 101',
                    'Japan':'Japan 98',
                    'Korea':'Korea 3232',
                    'Netherlands':'Netherlands 1105',
                    'Qatar':'Qatar 123',
                    'Romania':'Romania 516',
                    'Serbia':'Serbia 510',
                    'Spain':'Spain 1126',
                    'Sweden':'Sweden 137',
                    'Switzerland':'Switzerland 750',
                    'United Kingdom':'United Kingdom 2288',
                    'United States of America':'United States of America 142884',

                 },

            }
        ]
    });
});