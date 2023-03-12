option = {

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
    },



    series: [
        {
            name: '金字塔',
            type: 'funnel',
            width: '30%',
            height: '50%',
            left: '6%',
            top: '25%',
            sort: 'ascending',
            label: {
                show: true,
                position: 'inside',
            },

            data: [
                {value: 30, name: '\n\nSeek\n\nfinancial\n\nresource'},
                {value: 60, name: 'Learn \nabout \nculture \nand \ncustoms'},
                {value: 90, name: 'Buy land'}
            ]
        },
                {
            name: '金字塔',
            type: 'funnel',
            width: '30%',
            height: '50%',
            left: '38%',
            top: '25%',
            sort: 'ascending',
            label: {
                show: true,
                position: 'inside',
            },
            data: [
                {value: 30, name: '\n\nEDP \n\nSpecial\n \nZone'},
                {value: 60, name: 'Geographical location \nand \nclimatic conditions'},
                {value: 90, name: 'religion and basic necessities'}
            ]
        },
                {
            name: '金字塔',
            type: 'funnel',
            width: '30%',
            height: '50%',
            left: '70%',
            top: '25%',
            sort: 'ascending',
            label: {
                show: true,
                position: 'inside',
                // fontSize:21,
            },
            data: [
                {value: 30, name: '\nCoordinate \n\nthe \n\ncontradiction'},
                {value: 60, name: 'Protect the EDP\'s culture'},
                {value: 90, name: 'Reclamation\n\nFund allocation \n\nrescue activities'}
            ]
        },
              
    ]
};
