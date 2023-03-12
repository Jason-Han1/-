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
            min: 1.9,
            max: 5.2,
            left: 'left',
            top: 'bottom',
            text:['high 158,490','low 80'],           // 文本，默认为数值文本
            calculable : false,
            inRange: {
                //color: ['#313695', '#F84B4D', '#74add1',  '#fdae61', '#f46d43', '#d73027', '#a50026']
                //color:['#FFDF00','#5FCCF5','#A12FDC','#FE8627','#F63796','#FF5023']
                color:['#FFDF00','#FE8627','#FF5023','#F63796','#A12FDC']
                //color:['#ffecb3','#e85285','#6aib9a']
                //color:['#feeb65','#e4521b','#4d342f']
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
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: 'Argentina 153',value:2.184691431},
                    {name: 'Austria 371',value:2.56937391},
                    {name: 'Canada 121',value:2.08278537},
                    {name: 'China 153',value:2.184691431},
                    {name: 'Hongkong 15753',value:4.197363273},
                    {name: 'Taiwan 125',value:2.096910013},
                    {name: 'Croatia 54',value:1.73239376},
                    {name: 'Czech Rep. 111',value:2.045322979},
                    {name: 'France 1153',value:3.061829307},
                    {name: 'Germany 150',value:2.176091259},
                    {name: 'Hungary 247',value:2.392696953},
                    {name: 'Israel 189',value:2.276461804},
                    {name: 'Italy 101',value:2.004321374},
                    {name: 'Japan 98',value:1.991226076},
                    {name: 'Korea 3232',value:3.509471352},
                    {name: 'Netherlands 1105',value:3.043362278},
                    {name: 'Qatar 123',value:2.089905111},
                    {name: 'Romania 516',value:2.712649702},
                    {name: 'Serbia 510',value:2.707570176},
                    {name: 'Spain 1126',value:3.051538391},
                    {name: 'Sweden 137',value:2.136720567},
                    {name: 'Switzerland 750',value:2.875061263},
                    {name: 'United Kingdom 2288',value:3.35945602},
                    {name: 'United States of America 142884',value:5.1549836},


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
                    'United States of America':'United States of America 142884'

                 }

            }
        ]
    });
});