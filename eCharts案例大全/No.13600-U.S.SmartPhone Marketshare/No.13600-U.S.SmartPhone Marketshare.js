option = {
    backgroundColor: "#ffffff",
    color: ["#289bce", "#63c642", "#f0871d", "#e7302c", "#d32287", "#923d9b"],
    title: {
        text: 'U.S.SmartPhone Marketshare',
        x: 'center',
        textStyle: {
            fontSize: '28'
        },
    },
   
    series: [{

        label: {
            normal: {
                textStyle: {

                    fontSize: animationThreshold = 18

                },
                position: 'inner'
            }
        },


        type: 'pie',
        radius: '65%',
        center: ['50%', '45%'],

        data: [{
                value: 39.0,
                name: '39.0%'
            }, {
                value: 19.5,
                name: '19.5%'
            }, {
                value: 9.8,
                name: '9.8%'
            }, {
                value: 7.4,
                name: '7.4%'
            },
            {
                value: 3.1,
                name: '3.1%'
            }, {
                value: 21.2,
                name: '21.2%'
            },

        ],
        itemStyle: {
            normal: {
                borderWidth: 0,
                borderColor: '#ffffff',
            },

        }
    }]
};