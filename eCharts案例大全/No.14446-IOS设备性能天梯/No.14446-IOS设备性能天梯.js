
// github: github.com/jackshawn/pics-by-echarts

var ios = JSON.parse('{"device":["iPhone8Plus","iPhone8","iPhoneX","iPadPro10.5\'","iPadPro12.9\' 2","iPhone7","iPhone7Plus","iPadPro12.9\'","iPadPro9.7\'","iPad2017","iPhone6sPlus","iPhoneSE","iPhone6s","iPadAir2","iPadmini4","iPhone6Plus","iPhone6","iPodtouch6","iPadAir","iPhone5s","iPadmini2","iPadMini3","iPad4","iPhone5","iPhone5c","iPad2","iPad2","iPadmini","iPad3","iPhone4S","iPodtouch5"],"cpu":["AppleA11Bionic@2.4GHz","AppleA11Bionic@2.4GHz","AppleA11Bionic@2.4GHz","AppleA10XFusion@2.3GHz","AppleA10XFusion@2.3GHz","AppleA10Fusion@2.3GHz","AppleA10Fusion@2.3GHz","AppleA9X@2.3GHz","AppleA9X@2.3GHz","AppleA9@1.8GHz","AppleA9@1.8GHz","AppleA9@1.8GHz","AppleA9@1.8GHz","AppleA8X@1.5GHz","AppleA8@1.5GHz","AppleA8@1.4GHz","AppleA8@1.4GHz","AppleA8@1.1GHz","AppleA7@1.4GHz","AppleA7@1.3GHz","AppleA7@1.3GHz","AppleA7@1.3GHz","AppleA6X@1.4GHz","AppleA6@1.3GHz","AppleA6@1.3GHz","AppleA5@1.0GHz","AppleA5(32nm)@1.0GHz","AppleA5@1.0GHz","AppleA5X@1.0GHz","AppleA5@800MHz","AppleA5@800MHz"],"singleCore":[4217,4216,4205,3900,3897,3442,3439,3041,2963,2523,2455,2450,2332,1795,1657,1471,1436,1330,1328,1268,1249,1246,807,754,743,336,333,329,328,284,281],"multiCore":[10164,10100,10113,9276,9265,5759,5759,5033,4918,4375,4193,4202,3987,4141,2828,2476,2420,2231,2245,2137,2106,2101,1323,1202,1184,578,574,565,567,490,487],"metal":[15404,15197,15225,28661,28644,12523,12542,15216,15191,10116,9966,9990,9649,7695,4836,4528,4196,4205,555,552,552,554,0,0,0,0,0,0,0,0,0]}')
option = {
            title: {
                text: 'IOS设备性能天梯',
                subtext: '数据来自Geekbench 4  2017-12-07'
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(245, 245, 245, 0.8)',
                borderWidth: 1,
                borderColor: '#ddd',
                padding: 10,
                textStyle: {
                    color: '#000'
                },
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: '#000',
                        opacity: 0.03
                    }
                }
            },
            legend: {
                data: ['single core', 'multi core', 'Metal']
            },
            grid: {
                bottom: 0
            },
            xAxis: {
                type: 'value',
                splitLine: false,
                axisLine:false
            },
            yAxis: {
                type: 'category',
                data: ios.device.reverse(),
                axisTick: false,
                axisLine: {
                    lineStyle: {
                        width: 0
                    }
                }
            },
            series: [
                {
                    name: 'single core',
                    type: 'bar',
                    data: ios.singleCore.reverse(),
                    itemStyle: {
                        normal: {
                            color: '#50da4a'
                        }
                    }
                },
                {
                    name: 'multi core',
                    type: 'bar',
                    data: ios.multiCore.reverse(),
                    itemStyle: {
                        normal: {
                            color: '#39c3f7'
                        }
                    }
                },
                {
                    name: 'Metal',
                    type: 'bar',
                    data: ios.metal.reverse(),
                    itemStyle: {
                        normal: {
                            color: '#ff5968'
                        }
                    }
                }
            ]
        };