option = {
    // title: {
    //     text: 'US',
    // },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        orient: 'vertical',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },


    series: [

        {
            name: '金字塔',
            type: 'funnel',
            sort: 'ascending',

            label: {
                show: true,
                position: 'inside',
                fontSize:21,
            },
 
            data: [
                // {value: 20, name: '访问'},
                // {value: 40, name: '咨询'},
                {value: 30, name: 'Seek \n\nfinancial \n\nresources'},
                {value: 60, name: 'Protect the EDP\'s culture'},
                {value: 90, name: 'Reclamation\n\nFund allocation \n\nrescue activities'}
            ]
        }
    ]
};
