setTimeout(function() {

    option = {
        tooltip: {
            // trigger: 'axis',
            // axisPointer: {
            //     type: 'cross'
            // }
        },
        xAxis: {
            min: -10,
            max: 10
        },
        yAxis: {
            min: -10,
            max: 10
        },
        series: [{
            symbolSize: 20,
            data: [{
                    name: 'A1',
                    value: [1.0, 4.04]
                },
                {
                    name: 'A2',
                    value: [3.15, 2.95]
                },
                {
                    name: 'A3',
                    value: [13.0, 7.58]
                },
                {
                    name: 'A4',
                    value: [-3.15, 2.95]
                },
                {
                    name: 'A5',
                    value: [11.0, 8.33]
                },
                {
                    name: 'A6',
                    value: [-1.0,  4.04]
                },
                {
                    name: 'A7',
                    value: [3.15, -2.95]
                },
                {
                    name: 'A8',
                    value: [1.0, -4.04]
                },
                {
                    name: 'A9',
                    value: [3.15, -2.95]
                },
                {
                    name: 'A10',
                    value: [-1.0,  -4.04]
                },
                {
                    name: 'A11',
                    value: [-3.15, -2.95]
                },

            ],
            type: 'scatter'
        }]
    };

    myChart.setOption(option);

    function setGraphic() {
        setTimeout(function() {
            let dom = myChart.getDom().getElementsByTagName("canvas");
            console.log('dom', myChart.getDom(), dom[0].height, dom[0].width)
            // console.log('dom:',dom,dom.getElementsByTagName("canvas")[0].height,dom.offsetWidth);
            let newGraphic = [{
                    type: 'ring',
                    id: 'logo2',
                    shape: {
                        cx: dom[0].width / 2,
                        cy: dom[0].height / 2,
                        r: 115,
                        r0: 100
                    },
                    style: {
                        width: 150,
                        height: 150,
                        opacity: 0.4
                    },
                },
                {
                    type: 'ring',
                    id: 'logo3',
                    shape: {
                        cx: dom[0].width / 2,
                        cy: dom[0].height / 2,
                        r: 180,
                        r0: 125
                    },
                    style: {
                        // width: 150,
                        // height: 150,
                        fill: '#7cd6ee',
                        opacity: 0.4
                    },
                },
                {
                    type: 'ring',
                    // id: 'log4',
                    shape: {
                        cx: dom[0].width / 2,
                        cy: dom[0].height / 2,
                        r: 220,
                        r0: 180
                    },
                    style: {
                        // width: 150,
                        // height: 150,
                        fill: '#f2cb68',
                        opacity: 0.4
                    },
                },
                {
                    type: 'ring',
                    // id: 'log4',
                    shape: {
                        cx: dom[0].width / 2,
                        cy: dom[0].height / 2,
                        r: 280,
                        r0: 220
                    },
                    style: {
                        // width: 150,
                        // height: 150,
                        fill: '#fc5531',
                        opacity: 0.4
                    },
                },


            ];
            option.graphic = newGraphic;
            myChart.setOption(option);
        }, 300)

    }
    setTimeout(setGraphic, 500)
    window.addEventListener('resize', setGraphic);
});