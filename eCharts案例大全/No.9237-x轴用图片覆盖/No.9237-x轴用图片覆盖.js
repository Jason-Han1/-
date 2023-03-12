option = {
    xAxis: {
            type: 'category',
            show: true,
            data: ['wn', 'Bar', 'Scatter', 'Ka', 'Pie', 'Radar', 'Chord', 'Force'],
            renderAsImage:true,
            axisLabel: {
                show:true,
                rotate:'100',
                formatter: function (value) {
                       return '{'+ value + '| }\n{value|' + value + '}';
                },
                textStyle:{
                    color:'#666'
                },
                rich: {
                    wn: {
                        height: 40,
                        align: 'center',
                        backgroundColor: {
                            image: 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
                        }
                    },
                    Bar: {
                        height: 40,
                        align: 'center',
                        backgroundColor: {
                            image: 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
                        }
                    }
                    
                }
            }
        },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
