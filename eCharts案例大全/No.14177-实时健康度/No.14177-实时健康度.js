var rate = 0.32;
var text='健康'
var option = {
    title: {
        text: '实时健康度',
        show: true,
        left: '45%',
        top: '14%',
        right: 'auto',
        bottom: 'auto'
    },
    series: [{
        type: 'liquidFill',
        radius: '60%',
        data: [{
            value: rate,
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        }],
        amplitude: 0,
        shape: 'path://M324.234,516.886c0-41.643,0-252.383,0-258.626c0-14.688-11.906-26.594-26.593-26.594c-14.688,0-26.595,11.906-26.595,26.594c0,5.271,0,216.887,0,258.625c-13.383,8.71-22.24,23.791-22.24,40.949c0,26.97,21.863,48.834,48.834,48.834c26.969,0,48.834-21.864,48.834-48.834C346.475,540.676,337.617,525.596,324.234,516.886z',
        backgroundStyle: {
            color: 'yellow',
            borderColor: 'yellow',
            borderWidth: 10
        },
        itemStyle: {
            normal: {
                opacity: 1,
                shadowBlur: 0
            }
        },
        outline: {
            show: false
        },
        label: {
            normal: {
                position: ['50%', '98%'],
                formatter: function(data) {
                    return data.value * 100 + '%\n\n\n{a|'+text+'}'
                },
                fontSize: 40,
                color: '#D94854',
                rich: {
                    a: {
                        backgroundColor: '#339911',
                        color: '#fff',
                        borderRadius: 15,
                        padding: 5,
                        fontSize: 30
                    },
                }
            }
        }
    }]
};