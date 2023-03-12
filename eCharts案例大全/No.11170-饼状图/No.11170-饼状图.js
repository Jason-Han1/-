option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable: true,
    series: [{
            name: '性别',
            type: 'pie',
            radius: [15, 30],
            center: ['23%', '20%'],
            roseType: 'radius',
            label: {
                normal: {
                    formatter: "{d}%"
                }
            },
            color: ["#F9A589", "#F58095"],
            data: [{
                    value: 5,
                    name: '男'
                },
                {
                    value: 10,
                    name: '女'
                },
            ]
        },
        {
            name: '年龄段',
            type: 'pie',
            radius: [15, 30],
            center: ['75%', '20%'],
            roseType: 'radius',
            label: {
                normal: {
                    formatter: "{d}%"
                }
            },
            color: ["#F9A589", "#F58095", "#8EA4EC", "#96E083", "#F9D089"],
            data: [{
                    value: 10,
                    name: '3-5岁'
                },
                {
                    value: 5,
                    name: '5-8岁'
                },
                {
                    value: 15,
                    name: '8-12岁'
                },
                {
                    value: 25,
                    name: '12-18岁'
                },
                {
                    value: 25,
                    name: '18岁以上'
                }
            ]
        },
        {
            name: '身高区间',
            type: 'pie',
            radius: [15, 30],
            center: ['23%', '70%'],
            roseType: 'radius',
            label: {
                normal: {
                    formatter: "{d}%"
                }
            },
            color: ["#F9A589", "#F58095", "#8EA4EC", "#96E083", "#F9D089"],
            data: [{
                    value: 10,
                    name: '60-100cm'
                },
                {
                    value: 5,
                    name: '100-120cm'
                },
                {
                    value: 35,
                    name: '120-140cm'
                },
                {
                    value: 30,
                    name: '140-160cm'
                },
                {
                    value: 40,
                    name: '160cm以上'
                }
            ]
        },
        {
            name: '体重区间',
            type: 'pie',
            radius: [15, 30],
            center: ['75%', '70%'],
            roseType: 'radius',
            label: {
                normal: {
                    formatter: "{d}%"
                }
            },
            color: ["#F9A589", "#F58095", "#8EA4EC", "#96E083", "#F9D089"],
            data: [{
                    value: 10,
                    name: '15-25kg'
                },
                {
                    value: 5,
                    name: '25-35kg'
                },
                {
                    value: 15,
                    name: '35-45kg'
                },
                {
                    value: 35,
                    name: '45-55kg'
                },
                {
                    value: 35,
                    name: '55以上'
                },

            ]
        }
    ]
};