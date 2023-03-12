option = {
    series: [{
        type: 'liquidFill',
        data: [

            0.55,
        ],
        color: [ '#19B1EC'],
        radius: '100%',
        shape: 'path://m136.6,51.4c-16.1,-26.7 -32,-48.6 -32.7,-49.6c-0.9,-1.2 -2.4,-2 -3.9,-2c-1.5,0 -3,0.7 -3.9,2c-0.6,0.9 -16.5,22.8 -32.7,49.6c-22.4,37 -33.3,62.7 -33.3,78.7c0,38.5 31.3,69.8 69.8,69.8s69.8,-31.3 69.8,-69.8c0.1,-16 -10.8,-41.8 -33.1,-78.7zm-82.3,61.7c1.7,1 2.2,3.2 1.1,4.9c-0.3,0.5 -2.6,14.1 5.7,30.7c5.3,10.6 13.2,14.6 13.3,14.7c1.9,0.5 5.3,2 4.8,3.9c-0.4,1.3 -1.4,2.3 -2.7,2.6c-0.6,0.1 -1.1,0.1 -1.7,0c-0.7,-0.2 -16.8,-4.4 -23.6,-17.9l0,0c-10,-20.1 -0.6,-36.3 -0.1,-37c0.5,-0.8 1.3,-1.4 2.2,-1.7',
        waveAnimation: true,
        backgroundStyle: {
            borderColor: '#fff',
            borderWidth: 0.2,
            shadowColor: 'grey',
            shadowBlur: 20,
            color: '#fff'
        },
        outline: {
            show: false
        },
        amplitude: 5,
        direction: 'right',
        animationDuration: 10,
        label: {
            formatter: function() {
                return '\n';
            },
        }
    }],
    toolbox: {
        show: false
    },
};