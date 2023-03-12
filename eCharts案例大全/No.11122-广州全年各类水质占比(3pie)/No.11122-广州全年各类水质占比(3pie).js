var data = {
    data: [{
        name: 'I类',
        value: '110'
    }, {
        name: 'II类',
        value: '200.00'
    }, {
        name: 'III类',
        value: '200.00'
    }, {
        name: 'IV类',
        value: '200.00'
    }, {
        name: 'V类',
        value: '200.00'
    }, {
        name: '劣V',
        value: '200.00'
    }],
};
option = {
    backgroundColor: '#ffffff',
    legend: {
        show: true,
        orient: 'horizontal',
        top: '5%',
        data: data.data,
        formatter: data.data.name,
        textStyle: {
            fontSize: 12,
            color: '#333333'
        }
    },
    title: [{
            top: '38%',
            text: '一期',
            textStyle: {
                color: '#333333',
                fontSize: 12,
                align: 'center',
            },
            left: '15%',
        },
        {
            top: '38%',
            text: '二期',
            textStyle: {
                color: '#333333',
                fontSize: 12,
                align: 'center',
            },
            left: '49.5%',
        },
        {
            top: '38%',
            text: '三期',
            textStyle: {
                color: '#333333',
                fontSize: 12,
                align: 'center',
            },
            left: '82%',
        },
        {
            text: '广州全年各类水质占比',
            textStyle: {
                fontSize: 14,
                color: '#333333'
            }
        }
    ],
    series: [
        // begin
        {

            color: ['#feef10', '#494dd7', '#6abe08', '#fccf10', '#fea320', '#c32727'],
            type: 'pie',
            radius: ['16%', '23%'],
            center: ['17%', '40%'],
            labelLine: {
                normal: {
                    length: 25,
                    length2: 12,
                    lineStyle: {
                        //  color: '#41B3DC',
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    formatter: '{b}  ' + '\n' + '{d}%',
                    borderWidth: 0,
                    borderRadius: 4,
                    fontSize: 13,
                    align: 'center',
                    // color: '#3494BD',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }
                    }
                }
            },
            data: data.data,
        },
        //end
        // begin
        {

            color: ['#1f23f7', '#494dd7', '#6abe08', '#fccf10', '#fea320', '#c32727'],
            type: 'pie',
            radius: ['16%', '23%'],
            center: ['51%', '40%'],
            labelLine: {
                normal: {
                    length: 25,
                    length2: 15,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{b}  ' + '\n' + '{d}%',
                    borderWidth: 0,
                    borderRadius: 4,
                    fontSize: 13,
                    align: 'center',
                    color: '#3494BD',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }
                    }
                }
            },
            data: data.data,
        },
        //end

        // begin
        {
            color: ['#1f23f7', '#494dd7', '#6abe08', '#fccf10', '#fea320', '#c32727'],
            type: 'pie',
            radius: ['16%', '23%'],
            center: ['84%', '40%'],
            labelLine: {
                normal: {
                    length: 25,
                    length2: 15,
                    lineStyle: {
                        type: 'solid',
                        color: '#41B3DC'
                    }
                }

            },
            label: {
                normal: {

                    formatter: '{b}  ' + '\n' + '{d}%',
                    borderWidth: 0,
                    borderRadius: 4,

                    fontSize: 13,
                    align: 'center',
                    // color: '#3494BD',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }
                    }
                }
            },
            data: data.data,
        },
        //end

    ]
};