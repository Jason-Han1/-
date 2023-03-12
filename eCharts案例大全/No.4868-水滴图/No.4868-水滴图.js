option = {
    backgroundColor: "#dadada",
    series: [{
        type: 'liquidFill',
        data: [0.99, 0.375, 0.125],
        radius: '60%',
        shape: 'path://M737.8 508.2c-0.6-2.1-1.6-4-3-5.6L543.3 183.2 511.4 130l-31.9 53.2-192.7 321.4c-0.5 0.8-0.9 1.6-1.2 2.5-22 39-33.7 83-33.7 127.5 0 143 116.4 259.4 259.4 259.4 143 0 259.4-116.4 259.4-259.4 0.1-44.2-11.3-87.8-32.9-126.4z m0 0',
        center: ['50%', '50%'],
        // outline  外边
        outline: {
            borderDistance: 5,
            itemStyle: {
                borderWidth: 4
            },
            // padding: [5, 0, 0, 0],
            // magin: [-50, 0, 0, 0]
        },
        backgroundStyle: {
            color: '#ffffff',
            borderWidth: 3
        },
        label: {
            normal: {
                color: '#ffffff',
                fontSize: 24,
            }
        },
    }]
};