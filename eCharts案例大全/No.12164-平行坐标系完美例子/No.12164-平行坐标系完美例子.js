let [incomeTypeMap,
    payFrequencyMap,
    livingSituationMap,
    loanOutcomeMap
] = [{
        "EMP": "Employed",
        "CTB": "CTB - Child Tax Benefit",
        "DISINC": "Disability",
        "EMPINS": "Employment Insurance",
        "SSB": "Social Security\t",
        "RET": "Retirement",
        "SEMP": "Self-Employed",
        "WSIB": "WSIB - Worker Safety Insurance Board",
        "OTHER": "Other"
    },


    {
        "1": "Weekly",
        "2": "Bi-weekly",
        "3": "Semi-monthly",
        "4": "Monthly"
    },


    {
        "RENT": "I pay rent or board",
        "OWN_OUTRIGHT": "I own my home (no mortgage)",
        "MORTGAGE": "I own my home (with mortgage)",
        "FREE_FAMILY": "I live for free (with family)",
        "FREE_GOVERNMENT": "I live for free (public housing)"
    },
    {
        "APPROVED": "Approved"
    }
];

let schema = [{
        name: 'IncomeType',
        index: 0,
        text: 'Income Type'
    },
    {
        name: 'PayFrequency',
        index: 1,
        text: 'Pay Frequency'
    },
    {
        name: 'LoanAmount',
        index: 2,
        text: 'Loan Amount'
    },
    {
        name: 'PayFrequencyIncome',
        index: 3,
        text: 'Pay Frequency Income'
    },
    {
        name: 'LivingSituation',
        index: 4,
        text: 'Living Situation'
    },
    {
        name: 'Score',
        index: 5,
        text: 'Score'
    },
    {
        name: 'Decision Grade',
        index: 6,
        text: 'Decision Grade'
    },
    {
        name: 'LoanOutcome',
        index: 7,
        text: 'Decision Outcome'
    }
];
option = {
    backgroundColor: '#fff',

    parallelAxis: [{
            dim: 0,
            name: schema[0].text,
            type: 'category',
            data: ["EMP", "CTB", "DISINC", "EMPINS", "SSB", "RET", "SEMP", "WSIB", "OTHER"],
            axisLabel: {

                rotate: 35,
                formatter: function(value) {
                    let text = incomeTypeMap[value];
                    return text;
                },
                fontStyle: 'oblique'
            },

        },
        {
            dim: 1,
            name: schema[1].text,
            min: 1,
            max: 4,
            splitNumber: 4,
            axisLabel: {
                rotate: 35,
                formatter: function(value) {
                    let text = payFrequencyMap[value];
                    return text;
                },
                fontStyle: 'oblique'
            }
        },
        {
            dim: 2,
            name: schema[2].text
        },
        {
            dim: 3,
            name: schema[3].text
        },
        {
            dim: 4,
            name: schema[4].text,
            type: 'category',
            data: ["RENT", "OWN_OUTRIGHT", "MORTGAGE", "FREE_FAMILY", "FREE_GOVERNMENT"],
            axisLabel: {
                rotate: 35,
                formatter: function(value) {
                    let text = livingSituationMap[value];
                    return text;
                },
                fontStyle: 'oblique'
            }
        },
        {
            dim: 5,
            name: schema[5].text,
            min: 0,
            max: 1
        },
        {
            dim: 6,
            name: schema[6].text,
            type: 'category',
            data: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"]
        },
        {
            dim: 7,
            name: schema[7].text,
            type: 'category',
            data: ['APPROVED'],
            axisLabel: {
                rotate: 35,
                formatter: function(value) {
                    let text = loanOutcomeMap[value];
                    return text;
                },
                fontStyle: 'oblique'
            }
        }
    ],
    visualMap: {
        show: false,
        precision: 10,
        pieces: [{
                "get": "0.0000000000",
                "lte": "0.0010000000"
            },
            {
                "get": "0.0011000000",
                "lte": "0.0014000000"
            },
            {
                "get": "0.0015000000",
                "lte": "0.0021000000"
            },
            {
                "get": "0.0022000000",
                "lte": "0.0030000000"
            },
            {
                "get": "0.0031000000",
                "lte": "0.0043000000"
            },
            {
                "get": "0.0044000000",
                "lte": "0.0062000000"
            },
            {
                "get": "0.0063000000",
                "lte": "0.0089000000"
            },
            {
                "get": "0.0090000000",
                "lte": "0.0127000000"
            },
            {
                "get": "0.0128000000",
                "lte": "0.0183000000"
            },
            {
                "get": "0.0184000000",
                "lte": "0.0264000000"
            },
            {
                "get": "0.0265000000",
                "lte": "0.0379000000"
            },
            {
                "get": "0.0380000000",
                "lte": "0.0546000000"
            },
            {
                "get": "0.0547000000",
                "lte": "0.0785000000"
            },
            {
                "get": "0.0786000000",
                "lte": "0.1129000000"
            },
            {
                "get": "0.1130000000",
                "lte": "0.1624000000"
            },
            {
                "get": "0.1625000000",
                "lte": "0.2336000000"
            },
            {
                "get": "0.2337000000",
                "lte": "0.3360000000"
            },
            {
                "get": "0.3361000000",
                "lte": "0.4832000000"
            },
            {
                "get": "0.4832000000",
                "lte": "0.6950000000"
            },
            {
                "get": "0.6951000000",
                "lte": "1.0000000000"
            }
        ], // 每个范围对应一种颜色，主要配合inRange使用，即此处的A-T
        right: 0,
        text: ['T', 'A'],
        dimension: 5,
        inRange: {
            color: [
                '#ff3333', '#ff5c33', '#ff8533', '#ffad33',
                '#ffd633', '#ffff33', '#d6ff33', '#adff33',
                '#85ff33', '#5cff33', '#33ff33', '#33ff5c',
                '#33ff85', '#33ffad', '#33ffd6', '#33ffff',
                '#33d6ff', '#33adff', '#3385ff', '#335cff'
            ],
        }
    },
    parallel: {
        left: '3%',
        top: '10%',
        right: '10%',
        bottom: 60,

        parallelAxisDefault: {
            nameLocation: 'start',
            type: 'value',
            nameGap: 20,
            nameTextStyle: {
                color: '#333',
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#777'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                }
            }
        }
    },
    series: [{
            name: 'Data Attribute Relations',
            type: 'parallel',
            lineStyle: {
                normal: {
                    width: 1,
                    opacity: 1
                }
            },
            data: [
                ["DISINC", "1", "500", "8000", "MORTGAGE", "0.09541180412852619", "N", "APPROVED"],
                ["EMP", "1", "1500", "2000", "OWN_OUTRIGHT", "0.10238662692537857", "N", "APPROVED"],
                ["CTB", "2", "2400", "5800", "FREE_GOVERNMENT", "0.11093292692819123", "N", "APPROVED"],
                ["WSIB", "3", "1500", "1500", "RENT", "0.060875191215641423", "M", "APPROVED"]
            ]
        },

    ]
};