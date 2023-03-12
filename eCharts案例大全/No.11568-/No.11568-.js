option = {
    backgroundColor: "#212121",
    series: [{
        name: '自定义水球图',
        type: 'liquidFill',
        data: [{
            value: 0.4,
            textStyle: {
                color: '#646464'
            }
        }],
        radius: '90%',
        shape: "path://M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM16 18.711c3.623 0 7.070-0.963 10-2.654-0.455 5.576-4.785 9.942-10 9.942s-9.544-4.371-10-9.947c2.93 1.691 6.377 2.658 10 2.658zM8 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3s-2-1.343-2-3zM20 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3s-2-1.343-2-3z",
        phase: 0,
        center: ['50%', '50%'],
        waveAnimation: true,
        outline: {
            show: true,
            borderDistance: 1,
            itemStyle: {
                color: '#C1232B',
                borderColor: 'transparent',
                borderWidth: 1,
            }
        },
        backgroundStyle: {
            color: '#B5C334',
        },
        borderColor: 'pink',
        color: '#FCCE10',
        itemStyle: {
            opacity: 0.5,
        },
        label: {
            show: false,
            color: '#f00',
            insideColor: 'transparent',
            fontWeight: 'bold',
            fontSize: 20,
            align: 'center',
            baseline: 'middle',
            position: 'inside'
        },
        emphasis: {
            itemStyle: {
                opacity: 0.8,
            }
        }
    }]
};