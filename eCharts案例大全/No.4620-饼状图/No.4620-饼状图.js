option = {
    tooltip: {},
    "color": [
        "#f14365",
        "#287ad9",
        "#b55abc",
        "#ff61b3",
        "#f30f00",
        "#004983",
        "#0adaff",
        "#ff8a59",
        "#59ffb8"
    ],
    legend:{
         orient: 'vertical',
        right: 10,
        padding:0,
        itemHeight:12
       
    },
    "series": [{
        "name": "",
        "type": "pie",
        roseType: 'radius',
        radius: ['35%', '75%'],
        "hoverAnimation": false,
        "label": {
            fontSize: 14,
            rich: {
                a: {
                    fontSize: 14,
                    color: "#4fc7ff"
                },
                b: {
                    fontSize: 18,
                    lineHeight: 26,
                    color: "#f7cf0e"
                }
            },
            formatter: function(p) {
                return '{a|' + p.name + '}\n{b|' + p.percent + '}'
            }
        },

        "data": [{
                "value": 4159,
                "name": "准期征收金额"
            },
            {
                "value": 2268,
                "name": "当期逾期征收金额"
            },
            {
                "value": 3573,
                "name": "欠税清缴金额"
            },

        ]
    }]
};