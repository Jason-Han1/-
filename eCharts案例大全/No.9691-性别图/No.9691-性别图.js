var people_path = 'path://M662.633485 327.209195H360.762137C327.763015 327.209195 301.012754 354.943866 301.012754 389.227001l22.341818 257.572915 0.642006 7.746876c3.424033 18.618182 19.131787 32.699519 38.049572 32.699519v0.042801H373.773464l1.626416-0.042801 1.626416 0.042801a26.236656 26.236656 0 0 1 23.925433 22.941024c0.214002 1.198412 0.256803 2.354023 0.342404 3.509634l20.715402 269.856635 0.470805 6.034859a39.205183 39.205183 0 0 0 38.220773 33.940732h102.121797a39.076782 39.076782 0 0 0 38.049572-33.084723l0.599206-7.789676 20.715402-269.385831c0-0.898809 0.128401-1.754817 0.256802-2.610826a26.322257 26.322257 0 0 1 23.925434-23.454629l1.669216-0.0428 1.626416 0.0428h11.513313v-0.0428c19.345789 0 35.395946-14.808945 38.263573-34.069133l0.042801-0.470804 0.342403-3.980439 22.51302-259.498934c0-34.240334-26.707461-61.975005-59.706583-61.975006zM511.719211 274.650282c72.974713 0 132.210491-61.504201 132.210491-137.303741C643.929702 61.504201 584.693924 0 511.719211 0 438.701698 0 379.55152 61.504201 379.55152 137.346541c0 75.79954 59.150178 137.303741 132.167691 137.303741z';
var girl_path = 'path://M601.088 327.168h-189.44c-32.768 0-59.904 27.648-59.904 61.952l-95.232 278.016 0.512 7.68c3.584 18.432 18.944 32.768 37.888 32.768H310.272c12.288 1.024 89.088-9.728 90.624 2.56 0 1.024 0.512 2.56 0.512 3.584l20.48 269.824 0.512 6.144c2.56 19.456 18.944 33.792 38.4 33.792h101.888c18.944-0.512 35.328-14.336 37.888-33.28l0.512-7.68 20.48-269.312c0-1.024 0-1.536 0.512-2.56 1.536-12.288 77.824-2.048 90.624-3.072H727.04c19.456 0 35.328-14.848 38.4-34.304v-0.512l0.512-4.096L660.992 389.12c0-34.304-26.624-61.952-59.904-61.952zM511.488 274.432c73.216 0 132.096-61.44 132.096-137.216C644.096 61.44 584.704 0 511.488 0 438.784 0 379.392 61.44 379.392 137.216s59.392 137.216 132.096 137.216z';
var bracket_path = '';
option = {
    backgroundColor: '#0088e8',
    grid: [{
            show: false,
            left: 110,
            top: 40,
            bottom: 20,
            width: '38%'
        }, //左
       
        {
            show:false,
            right: 110,
            top: 40,
            bottom: 20,
            width: '38%'
        } //右
    ],
    xAxis: [{
        offset:0,
        type: 'value',
        inverse: true,
        name: '',
        nameLocation: 'top',
        nameTextStyle: {
            color: '#6ed28d',
            fontSize: 18
        },
        position: 'top',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }, {
       
        gridIndex: 1,
        type: 'value',
        name: '',
        nameLocation: 'top',
        nameTextStyle: {
            color: '#f3ce00',
            fontSize: 18
        },
        position: 'top',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    yAxis: [{
        
        type: 'category',
        inverse: true,
        position: 'right',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: []
    }, {
        gridIndex: 1,
        type: 'category',
        inverse: true,
        position: 'left',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: []
    }],
    series: [
        
        // 男
        {
        type: 'pictorialBar',
        symbol: people_path,
        symbolRepeat: 'fixed',
        symbolMargin: 3,
        symbolClip: true,
        symbolSize: [10, 23],
        symbolBoundingData: 100,
        z: 10,
        label: {
            normal: {
                show: true,
                offset: [0, -50],
                textStyle: {
                    fontSize: 14
                },
                formatter: '{c}%'
            }
        },
        itemStyle: {
            normal: {
                color: '#6ed28d'
            }
        },
        data: [73.86]
    },
    
   
    {
        type: 'pictorialBar',
        symbolSize: [10, 23],
        symbolBoundingData: 100,
        z: 5,
        itemStyle: {
            normal: {
                color: '#00284d'
            }
        },
        label: {
            normal: {
                show: false
            }
        },
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: 3,
        symbol: people_path,
        data: [100]
    }, 
    
    // 女
    {
        type: 'pictorialBar',
        symbolSize: [10, 23],
        symbolBoundingData: 100,
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#00284d'
            }
        },
        label: {
            normal: {
                show: false
            }
        },
        z: 5,
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: 3,
        symbol: girl_path,
        data: [100]
    }, {
        type: 'pictorialBar',
        symbol: girl_path,
        symbolRepeat: 'fixed',
        symbolMargin: 3,
        symbolClip: true,
        symbolSize: [10, 23],
        symbolBoundingData: 100,
        z: 10,
        label: {
            normal: {
                show: true,
                offset: [0, -50],
                textStyle: {
                    fontSize: 14
                },
                formatter: '{c}%'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#f3ce00'
            }
        },
        data: [26.14]
    }]
};