app.title = '2000-2017年SCI论文top10国家';


option = {

    baseOption: {
        label: {
            fontSize: 25,
            fontFamily: 'impact'
        },
        timeline: {
            show: false,
            // y: 0,
            axisType: 'category',
            autoPlay: true,
            playInterval: 150,
            label: {
                normal: {
                    formatter: ""
                }
            },
            data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2001, 2001, 2001, 2001, 2001, 2001, 2001, 2001, 2001, 2001, 2001, 2001, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2002, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2003, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2004, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2005, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2006, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2007, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2009, 2009, 2009, 2009, 2009, 2009, 2009, 2009, 2009, 2009, 2009, 2009, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2010, 2011, 2011, 2011, 2011, 2011, 2011, 2011, 2011, 2011, 2011, 2011, 2011, 2012, 2012, 2012, 2012, 2012, 2012, 2012, 2012, 2012, 2012, 2012, 2012, 2013, 2013, 2013, 2013, 2013, 2013, 2013, 2013, 2013, 2013, 2013, 2013, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2015, 2015, 2015, 2015, 2015, 2015, 2015, 2015, 2015, 2015, 2015, 2015, 2016, 2016, 2016, 2016, 2016, 2016, 2016, 2016, 2016, 2016, 2016, 2016]
        },

        title: [{
            textAlign: 'center',
            left: '75%',
            top: '75%',
            textStyle: {
                fontSize: 40,
                color: 'silver',
                fontWeight: 'bold',
                fontFamily: 'impact',
            }
        }, {
            text: 'SCI论文量Top10国家',
            left: 'center',
            top: 30,
            textStyle: {
                color: 'black',
                fontFamily: 'impact',
                fontSize: 40
            }
        }],

        grid: {
            top: '12%',
            left: '3%',
            right: '4%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            max: 400000,

        },
        yAxis: {
            type: 'category',
            data: ['美国', '英国', '日本', '德国', '法国', '加拿大', '意大利', '俄罗斯', '中国', '西班牙'],
            axisLabel: {
                fontSize: 20,
                fontWeight: 'bold'
            }

        }

    },
    options: [{
            title: {
                text: '2000年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '中国', '加拿大', '意大利', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 21768.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 27078.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 29453.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 31367.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 31621.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 48123.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 56019.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66128.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73544.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 234374.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },

        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '中国', '加拿大', '意大利', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 21878.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 26934.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 29894.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 31326.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 31725.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 48093.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55902.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66145.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73503.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 234284.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '中国', '加拿大', '意大利', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 21987.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 26790.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 30335.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 31285.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 31829.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 48064.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55785.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66163.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73462.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 234193.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },



        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '中国', '加拿大', '意大利', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 21878.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 26934.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 29894.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 31326.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 31725.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 48093.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55902.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66145.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73503.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 234284.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '中国', '加拿大', '意大利', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 21987.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 26790.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 30335.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 31285.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 31829.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 48064.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55785.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66163.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73462.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 234193.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '中国', '加拿大', '意大利', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 22096.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 26645.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 30776.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 31244.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 31932.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 48034.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55668.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66180.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73422.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 234102.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '中国', '意大利', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 22206.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 26501.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31204.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 31217.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 32036.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 48005.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55550.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66198.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73381.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 234012.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '中国', '意大利', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 22316.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 26357.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31163.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 31658.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 32140.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 47975.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55433.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66215.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73340.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 233922.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '中国', '意大利', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 22425.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 26212.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31122.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 32098.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 32244.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 47946.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55316.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66232.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73300.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 233831.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 22534.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 26068.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31081.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 32348.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 32539.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 47916.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55199.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66250.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73259.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 233740.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 22644.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25924.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31040.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 32452.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 32980.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 47886.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55082.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66267.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73218.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 233650.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 22754.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25780.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31000.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 32556.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 33421.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 47857.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54964.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66285.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73177.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 233560.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 22863.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25636.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 30959.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 32659.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 33862.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 47827.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54847.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66302.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73136.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 233469.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 22972.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25491.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 30918.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 32763.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 34303.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 47798.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54730.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66320.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73096.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 233378.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2001年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 23082.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25347.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 30877.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 32867.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 34744.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 47768.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54613.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66337.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73055.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 233288.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2002年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 23203.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25377.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 30974.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 32959.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 35094.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 47816.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54647.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66400.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73170.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 233640.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2002年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 23324.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25407.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31070.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 33052.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 35444.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 47864.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54680.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66462.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73285.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 233992.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2002年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 23445.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25437.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31167.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 33144.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 35793.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 47911.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54714.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66525.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73400.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 234344.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2002年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 23566.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25467.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31263.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 33236.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 36143.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 47959.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54748.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66587.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73516.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 234696.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2002年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 23687.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25497.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31360.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 33328.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 36493.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48007.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54782.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66650.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73631.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 235048.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2002年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 23808.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25527.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31456.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 33420.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 36842.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48054.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54816.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66712.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73746.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 235400.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2002年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 23930.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25557.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31553.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 33513.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 37192.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48102.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54849.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66775.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73861.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 235753.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2002年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 24051.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25587.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31650.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 33605.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 37542.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48150.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54883.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66838.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 73976.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 236105.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2002年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 24172.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25617.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31746.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 33697.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 37892.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48198.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54917.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66900.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 74092.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 236457.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2002年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 24293.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25647.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31843.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 33790.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 38242.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48246.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54950.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66963.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 74207.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 236809.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2002年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 24414.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25677.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 31939.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 33882.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 38591.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48293.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54984.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67025.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 74322.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 237161.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2002年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 24535.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25707.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 32036.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 33974.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 38941.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48341.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55018.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67088.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 74437.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 237513.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2003年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 24633.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25660.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 32255.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 34225.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 39632.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48432.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55159.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67151.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 74622.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 238414.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2003年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 24731.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25614.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 32475.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 34477.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 40323.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48522.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55300.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67213.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 74807.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 239314.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2003年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 24828.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25567.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 32694.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 34728.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 41014.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48613.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55441.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67276.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 74992.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 240215.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2003年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 24926.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25520.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 32914.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 34979.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 41705.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48704.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55582.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67339.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 75177.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 241116.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2003年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25024.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25473.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 33133.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 35231.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 42396.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48795.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55723.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67401.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 75362.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 242017.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2003年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25122.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25426.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 33352.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 35482.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 43088.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48886.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55864.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67464.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 75546.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 242918.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2003年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25220.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25380.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 33572.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 35733.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 43779.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 48976.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 56006.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67527.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 75731.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 243818.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2003年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25318.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 25333.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 33791.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 35985.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 44470.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 49067.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 56147.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67589.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 75916.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 244719.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2003年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25286.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 25416.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 34011.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 36236.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 45161.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 49158.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 56288.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67652.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76101.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 245620.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2003年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25240.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 25513.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 34230.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 36487.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 45852.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 49248.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 56429.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67715.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76286.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 246520.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2003年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25193.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 25611.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 34450.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 36739.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 46543.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 49339.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 56570.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67777.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76471.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 247421.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2003年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25146.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 25709.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 34669.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 36990.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 47234.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 49430.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 56711.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 67840.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76656.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 248322.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2004年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25132.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 25872.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 34840.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 37134.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 48181.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 49510.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 56849.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 68042.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76691.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 249191.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2004年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '中国', '法国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25118.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 26034.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 35011.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 37279.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 49128.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 49590.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 56988.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 68243.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76727.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 250059.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2004年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '中国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25104.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 26197.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 35182.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 37423.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 49671.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 50074.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 57126.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 68445.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76762.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 250928.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2004年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '中国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25090.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 26360.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 35352.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 37567.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 49751.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 51021.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 57264.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 68647.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76798.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 251797.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2004年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '中国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25076.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 26522.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 35523.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 37712.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 49831.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 51968.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 57402.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 68848.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76833.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 252665.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2004年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '中国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25062.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 26685.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 35694.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 37856.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 49912.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 52915.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 57540.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 69050.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76868.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 253534.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2004年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '中国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25047.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 26848.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 35865.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 38000.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 49992.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 53862.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 57679.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 69252.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76904.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 254403.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2004年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '中国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25033.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 27010.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 36036.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 38145.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 50072.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 54809.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 57817.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 69453.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76939.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 255271.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2004年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '中国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25019.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 27173.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 36206.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 38289.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 50152.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 55756.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 57955.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 69655.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76975.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 256140.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2004年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '中国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25005.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 27336.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 36377.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 38433.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 50232.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 56702.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 58094.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 69857.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77010.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 257009.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2004年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '中国', '英国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 24991.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 27498.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 36548.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 38578.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 50313.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 57649.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 58232.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 70058.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77046.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 257877.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2004年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 24977.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 27661.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 36719.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 38722.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 50393.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 58370.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 58596.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 70260.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77081.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 258746.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2005年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25375.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 27528.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 36992.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 38843.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 50572.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 58519.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 59641.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 70525.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77058.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 259576.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2005年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 25774.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 27394.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 37265.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 38964.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 50752.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 58668.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 60687.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 70790.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77036.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 260405.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2005年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26172.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 27260.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 37538.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 39085.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 50931.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 58818.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 61732.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 71055.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77013.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 261234.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2005年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26571.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 27127.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 37810.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 39206.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 51110.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 58967.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 62777.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 71320.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76990.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 262064.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2005年'
            },
            yAxis: {
                type: 'category',
                data: ['俄罗斯', '西班牙', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26969.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 26994.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 38083.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 39327.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 51290.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 59116.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 63823.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 71585.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76968.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 262894.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2005年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26860.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 27368.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 38356.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 39448.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 51469.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 59265.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 64868.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 71850.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76945.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 263723.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2005年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26726.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 27766.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 38629.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 39569.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 51648.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 59414.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 65913.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 72114.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76922.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 264552.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2005年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26593.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 28164.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 38902.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 39690.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 51828.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 59563.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 66959.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 72379.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76900.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 265382.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2005年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26460.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 28563.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 39174.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 39811.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 52007.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 59712.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 68004.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 72644.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76877.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 266212.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2005年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26326.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 28961.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 39447.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 39932.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 52186.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 59862.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 69049.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 72909.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76854.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 267041.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2005年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '俄罗斯', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26192.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 29360.0,
                        itemStyle: {
                            color: '#FB9A99'
                        }
                    },
                    {
                        value: 39720.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 40053.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 52366.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 60011.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 70095.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 73174.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76832.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 267870.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2005年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26059.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 29758.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 39993.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 40174.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 52545.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 60160.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 71140.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 73439.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76809.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 268700.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2006年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26249.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 29974.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 40224.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 40362.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 52722.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 60410.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 72287.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 73584.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76844.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 269410.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2006年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '加拿大', '意大利', '法国', '英国', '中国', '德国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26440.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 30190.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 40455.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 40550.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 52898.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 60660.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 73434.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 73728.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76879.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 270120.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2006年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '加拿大', '意大利', '法国', '英国', '德国', '中国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26630.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 30406.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 40686.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 40737.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 53075.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 60910.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 73873.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 74580.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 76914.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 270830.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2006年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '加拿大', '意大利', '法国', '英国', '德国', '中国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 26821.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 30622.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 40918.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 40925.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 53252.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 61160.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74018.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 75727.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 76949.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 271540.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2006年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '意大利', '加拿大', '法国', '英国', '德国', '中国', '日本', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 27011.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 30838.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 41113.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 41149.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 53429.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 61410.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74163.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76874.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 76984.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 272250.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2006年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '意大利', '加拿大', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 27202.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 31054.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 41300.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 41380.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 53606.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 61660.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74308.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77018.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 78021.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 272960.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2006年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '意大利', '加拿大', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 27392.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 31271.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 41488.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 41611.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 53782.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 61911.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74452.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77053.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 79168.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 273670.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2006年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '意大利', '加拿大', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 27582.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 31487.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 41676.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 41842.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 53959.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 62161.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74597.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77088.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 80315.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 274380.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2006年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '意大利', '加拿大', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 27773.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 31703.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 41864.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 42074.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 54136.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 62411.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74742.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77123.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 81462.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 275090.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2006年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '意大利', '加拿大', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 27963.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 31919.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 42052.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 42305.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 54312.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 62661.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74886.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77158.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82608.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 275800.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2006年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '意大利', '加拿大', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 28154.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 32135.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 42239.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 42536.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 54489.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 62911.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75031.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77193.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 83755.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 276510.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2006年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '意大利', '加拿大', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 28344.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 32351.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 42427.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 42767.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 54666.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 63161.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75176.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77228.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 84902.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 277220.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2007年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '意大利', '加拿大', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 28705.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 32556.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 42636.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 42879.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 54732.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 63331.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75311.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 77112.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 85671.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 277629.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2007年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '意大利', '加拿大', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 29066.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 32762.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 42846.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 42992.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 54797.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 63501.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75446.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76995.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 86440.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 278037.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2007年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '意大利', '加拿大', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 29428.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 32967.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 43056.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 43104.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 54863.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 63671.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75581.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76879.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 87210.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 278446.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2007年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '加拿大', '意大利', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 29789.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 33172.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 43216.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 43265.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 54928.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 63841.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75716.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76763.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 87979.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 278855.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2007年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '加拿大', '意大利', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 30150.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 33377.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 43328.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 43474.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 54994.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 64011.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75851.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76646.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 88748.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 279263.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2007年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '加拿大', '意大利', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 30511.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 33582.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 43440.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 43684.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 55060.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 64181.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75986.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76530.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 89518.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 279672.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2007年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '加拿大', '意大利', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 30872.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 33788.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 43553.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 43894.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 55125.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 64351.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76122.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76414.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 90287.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 280081.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2007年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '加拿大', '意大利', '法国', '英国', '德国', '日本', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 31233.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 33993.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 43665.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 44103.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 55191.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 64521.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76257.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 76297.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 91056.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 280489.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2007年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 31594.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 34198.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 43777.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 44312.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 55256.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 64691.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76181.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 76392.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 91825.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 280898.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2007年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 31956.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 34404.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 43890.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 44522.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 55322.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 64861.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76065.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 76527.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 92594.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 281307.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2007年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 32317.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 34609.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 44002.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 44732.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 55387.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 65031.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75948.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 76662.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 93364.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 281715.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2007年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 32678.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 34814.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 44114.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 44941.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 55453.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 65201.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75832.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 76797.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 94133.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 282124.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2008年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 33061.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 35018.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 44361.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 45124.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 55784.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 65298.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75863.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 77010.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 95244.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 282901.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2008年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 33444.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 35222.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 44608.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 45308.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 56116.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 65395.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75894.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 77222.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 96356.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 283677.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2008年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 33827.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 35427.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 44855.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 45491.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 56447.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 65492.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75926.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 77434.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 97467.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 284454.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2008年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 34210.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 35631.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 45102.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 45674.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 56778.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 65589.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75957.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 77647.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 98578.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 285231.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2008年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 34593.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 35835.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 45349.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 45857.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 57110.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 65686.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75988.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 77860.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 99690.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 286007.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2008年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 34976.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 36040.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 45596.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 46040.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 57441.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 65784.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76019.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 78072.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 100801.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 286784.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2008年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 35360.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 36244.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 45842.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 46224.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 57772.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 65881.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76050.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 78284.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 101912.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 287561.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2008年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 35743.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 36448.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 46089.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 46407.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 58104.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 65978.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76081.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 78497.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 103024.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 288337.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2008年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 36126.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 36652.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 46336.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 46590.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 58435.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 66075.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76112.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 78710.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 104135.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 289114.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2008年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 36509.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 36856.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 46583.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 46774.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 58766.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 66172.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76144.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 78922.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 105246.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 289891.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2008年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 36892.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 37061.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 46830.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 46957.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 59098.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 66269.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76175.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 79134.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 106358.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 290667.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2008年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 37265.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 37275.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 47077.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 47140.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 59429.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 66366.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76206.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 79347.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 107469.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 291444.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2009年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 37425.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 37493.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 47234.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 47319.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 59565.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 66498.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76152.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 79602.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 108855.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 291838.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2009年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 37575.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 37720.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 47392.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 47499.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 59702.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 66630.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76098.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 79857.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 110240.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 292231.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2009年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 37725.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 37948.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 47549.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 47678.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 59838.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 66762.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76043.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 80112.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 111626.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 292625.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2009年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 37875.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 38176.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 47706.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 47857.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 59975.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 66894.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75989.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 80367.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 113012.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 293019.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2009年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 38025.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 38403.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 47864.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 48037.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 60111.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 67026.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75935.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 80622.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 114397.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 293412.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2009年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 38175.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 38631.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 48021.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 48216.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 60248.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 67158.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75880.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 80876.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 115783.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 293806.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2009年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 38325.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 38859.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 48178.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 48395.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 60384.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 67291.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75826.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 81131.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 117169.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 294200.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2009年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 38475.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 39086.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 48336.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 48575.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 60520.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 67423.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75772.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 81386.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 118554.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 294593.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2009年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 38625.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 39314.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 48493.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 48754.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 60657.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 67555.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75718.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 81641.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 119940.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 294987.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2009年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 38775.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 39542.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 48650.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 48933.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 60793.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 67687.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75664.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 81896.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 121326.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 295381.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2009年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 38925.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 39769.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 48808.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 49113.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 60930.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 67819.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75609.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82151.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 122711.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 295774.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2009年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 39075.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 39997.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 48965.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 49292.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 61066.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 67951.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75555.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82406.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 124097.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 296168.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2010年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 39337.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 40186.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 49057.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 49385.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 61142.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 68155.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75461.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82654.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 125149.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 296855.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2010年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 39600.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 40376.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 49150.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 49479.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 61217.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 68358.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75368.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82903.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 126201.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 297542.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2010年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 39862.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 40565.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 49242.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 49572.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 61292.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 68562.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75274.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 83152.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 127253.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 298230.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2010年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 40125.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 40754.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 49335.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 49665.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 61368.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 68766.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75181.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 83400.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 128305.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 298917.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2010年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 40387.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 40943.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 49427.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 49759.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 61444.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 68969.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75087.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 83648.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 129357.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 299604.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2010年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 40650.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 41132.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 49520.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 49852.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 61519.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 69173.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74994.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 83897.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 130410.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 300291.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2010年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 40912.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 41322.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 49612.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 49945.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 61594.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 69377.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74900.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 84146.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 131462.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 300978.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2010年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 41174.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 41511.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 49704.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 50039.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 61670.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 69580.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74806.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 84394.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 132514.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 301665.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2010年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 41437.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 41700.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 49797.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 50132.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 61746.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 69784.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74713.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 84642.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 133566.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 302352.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2010年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 41699.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 41890.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 49889.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 50225.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 61821.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 69988.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74619.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 84891.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 134618.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 303040.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2010年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 41962.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 42079.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 49982.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 50319.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 61896.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 70191.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74526.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 85140.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 135670.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 303727.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2010年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 42224.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 42268.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 50074.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 50412.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 61972.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 70395.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74432.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 85388.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 136722.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 304414.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2011年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 42569.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 42570.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 50267.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 50626.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 62140.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 70655.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74597.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 85743.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 138631.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 305540.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2011年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 42870.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 42915.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 50460.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 50840.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 62309.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 70915.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74762.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 86097.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 140540.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 306666.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2011年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 43172.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 43261.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 50653.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 51054.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 62477.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 71175.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 74928.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 86452.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 142449.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 307792.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2011年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 43473.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 43607.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 50846.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 51267.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 62646.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 71435.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75093.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 86807.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 144358.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 308918.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2011年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 43774.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 43952.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 51039.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 51481.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 62814.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 71695.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75258.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 87161.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 146267.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 310044.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2011年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 44076.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 44298.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 51232.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 51695.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 62982.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 71956.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75424.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 87516.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 148176.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 311170.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2011年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 44377.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 44644.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 51426.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 51909.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 63151.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 72216.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75589.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 87871.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 150084.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 312297.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2011年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 44678.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 44989.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 51619.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 52123.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 63319.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 72476.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75754.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 88225.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 151993.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 313423.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2011年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 44979.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 45335.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 51812.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 52336.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 63488.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 72736.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 75919.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 88580.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 153902.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 314549.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2011年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 45280.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 45681.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 52005.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 52550.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 63656.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 72996.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76084.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 88935.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 155811.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 315675.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2011年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 45582.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 46026.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 52198.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 52764.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 63825.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 73256.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76250.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 89289.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 157720.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 316801.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2011年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 45883.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 46372.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 52391.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 52978.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 63993.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 73516.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76415.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 89644.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 159629.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 317927.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2012年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 46176.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 46576.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 52622.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 53238.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 64172.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 73802.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76474.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 89949.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 161722.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 318918.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2012年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 46470.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 46781.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 52853.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 53498.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 64350.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 74087.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76532.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 90254.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 163815.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 319908.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2012年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 46763.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 46986.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 53084.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 53758.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 64529.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 74372.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76591.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 90559.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 165908.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 320898.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2012年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 47056.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 47190.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 53315.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 54018.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 64707.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 74658.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76649.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 90864.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 168001.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 321889.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2012年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 47350.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 47394.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 53546.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 54278.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 64886.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 74944.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76708.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 91169.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 170094.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 322880.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2012年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 47599.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 47643.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 53777.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 54538.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 65064.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 75229.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76766.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 91474.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 172186.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 323870.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2012年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 47804.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 47936.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 54008.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 54798.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 65243.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 75514.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76825.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 91778.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 174279.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 324860.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2012年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 48008.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 48230.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 54239.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 55058.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 65422.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 75800.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76884.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 92083.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 176372.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 325851.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2012年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 48212.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 48523.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 54470.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 55318.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 65600.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76086.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 76942.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 92388.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 178465.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 326842.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2012年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 48417.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 48816.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 54701.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 55578.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 65779.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76371.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 77001.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 92693.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 180558.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 327832.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2012年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 48622.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 49110.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 54932.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 55838.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 65957.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76656.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 77059.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 92998.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 182651.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 328822.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2012年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '英国', '日本', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 48826.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 49403.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 55163.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 56098.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 66136.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76942.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 77118.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 93303.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 184744.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 329813.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2013年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 49242.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 49571.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 55369.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 56463.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 66368.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77243.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 77347.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 93583.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 187523.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 330906.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2013年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '西班牙', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 49658.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 49739.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 55575.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 56828.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 66601.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77367.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 77752.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 93862.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 190302.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 331998.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2013年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 49907.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 50074.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 55781.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 57192.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 66833.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77492.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 78157.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 94142.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 193081.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 333091.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2013年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 50075.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 50489.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 55987.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 57557.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 67066.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77617.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 78562.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 94422.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 195860.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 334183.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2013年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 50243.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 50905.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 56193.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 57922.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 67298.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77741.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 78967.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 94702.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 198639.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 335276.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2013年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 50411.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 51321.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 56400.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 58286.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 67530.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77866.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 79372.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 94982.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 201418.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 336368.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2013年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 50579.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 51737.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 56606.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 58651.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 67763.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77991.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 79777.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 95261.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 204198.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 337461.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2013年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 50747.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 52153.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 56812.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 59016.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 67995.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78115.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 80182.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 95541.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 206977.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 338554.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2013年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 50915.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 52568.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 57018.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 59381.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68228.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78240.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 80587.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 95821.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 209756.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 339646.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2013年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 51083.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 52984.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 57224.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 59746.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68460.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78365.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 80992.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 96100.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 212535.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 340739.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2013年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 51251.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 53400.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 57430.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 60110.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68693.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78489.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 81397.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 96380.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 215314.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 341831.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2013年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 51419.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 53816.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 57636.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 60475.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68925.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78614.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 81802.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 96660.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 218093.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 342924.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2014年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 51561.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 54204.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 57743.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 60578.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68919.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78498.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 81878.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 96706.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 220906.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 343355.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2014年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 51703.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 54593.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 57851.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 60682.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68913.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78383.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 81954.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 96753.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 223718.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 343786.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2014年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 51844.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 54981.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 57958.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 60785.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68907.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78268.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82030.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 96800.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 226530.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 344216.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2014年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 51986.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 55369.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 58065.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 60889.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68901.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78152.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82106.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 96846.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 229343.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 344647.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2014年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 52128.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 55758.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 58173.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 60992.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68895.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78036.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82182.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 96892.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 232156.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 345078.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2014年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 52270.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 56146.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 58280.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 61096.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68890.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77921.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82258.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 96939.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 234968.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 345508.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2014年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 52412.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 56534.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 58387.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 61199.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68884.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77806.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82333.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 96986.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 237780.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 345939.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2014年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 52554.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 56923.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 58495.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 61302.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68878.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77690.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82409.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 97032.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 240593.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 346370.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2014年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 52696.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 57311.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 58602.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 61406.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68872.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77574.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82485.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 97078.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 243406.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 346801.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2014年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 52837.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 57699.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 58709.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 61509.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68866.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77459.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82561.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 97125.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 246218.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 347232.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2014年'
            },
            yAxis: {
                type: 'category',
                data: ['西班牙', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 52979.0,
                        itemStyle: {
                            color: '#33A02C'
                        }
                    },
                    {
                        value: 58088.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 58817.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 61613.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68860.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77344.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82637.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 97172.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 249030.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 347662.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2014年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 53121.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 58476.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 58924.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 61716.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 68854.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77228.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 82713.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 97218.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 251843.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 348093.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2015年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 53364.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 58702.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 59054.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 61881.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 69022.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77178.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 83155.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 97472.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 254390.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 348641.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2015年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 53607.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 58927.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 59185.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 62046.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 69190.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77128.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 83596.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 97725.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 256936.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 349189.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2015年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 53850.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 59153.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 59315.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 62211.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 69359.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77078.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 84038.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 97979.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 259483.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 349737.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2015年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 54093.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 59379.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 59445.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 62376.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 69527.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77028.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 84480.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 98232.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 262030.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 350285.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2015年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 54336.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 59576.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 59604.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 62541.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 69695.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76978.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 84921.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 98486.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 264576.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 350833.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2015年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 54578.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 59706.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 59830.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 62706.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 69864.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76928.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 85363.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 98740.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 267123.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 351382.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2015年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 54821.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 59836.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 60056.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 62870.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 70032.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76879.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 85805.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 98993.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 269670.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 351930.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2015年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 55064.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 59967.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 60281.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 63035.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 70200.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76829.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 86246.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 99247.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 272216.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 352478.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2015年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 55307.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 60097.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 60507.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 63200.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 70368.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76779.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 86688.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 99500.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 274763.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 353026.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2015年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 55550.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 60227.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 60733.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 63365.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 70536.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76729.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 87130.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 99754.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 277310.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 353574.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2015年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 55793.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 60358.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 60958.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 63530.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 70705.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76679.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 87571.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 100007.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 279856.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 354122.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2015年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 56036.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 60488.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 61184.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 63695.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 70873.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76629.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 88013.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 100261.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 282403.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 354670.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2016年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 56130.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 60650.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 61482.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 63911.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 71076.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76793.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 88383.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 100552.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 284704.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 355403.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2016年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 56225.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 60813.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 61781.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 64126.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 71278.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 76957.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 88753.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 100843.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 287004.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 356136.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2016年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 56319.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 60975.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 62080.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 64342.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 71480.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77121.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 89123.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 101134.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 289305.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 356869.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2016年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 56413.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 61137.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 62378.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 64558.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 71683.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77285.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 89493.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 101425.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 291605.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 357602.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2016年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 56508.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 61300.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 62676.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 64774.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 71886.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77449.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 89863.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 101716.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 293906.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 358335.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2016年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 56602.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 61462.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 62975.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 64990.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 72088.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77613.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 90232.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 102007.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 296206.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 359068.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2016年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 56696.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 61624.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 63274.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 65205.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 72290.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77777.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 90602.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 102298.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 298507.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 359802.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2016年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 56791.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 61787.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 63572.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 65421.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 72493.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 77941.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 90972.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 102589.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 300808.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 360535.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2016年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 56885.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 61949.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 63870.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 65637.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 72696.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78105.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 91342.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 102880.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 303108.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 361268.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2016年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 56979.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 62111.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 64169.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 65852.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 72898.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78269.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 91712.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 103171.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 305409.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 362001.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2016年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 57074.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 62274.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 64468.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 66068.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 73100.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78433.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 92082.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 103462.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 307709.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 362734.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2016年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 57168.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 62436.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 64766.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 66284.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 73303.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78597.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 92452.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 103753.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 310010.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 363467.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2017年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 58040.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 62541.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 64229.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 66356.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 73314.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78703.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 92664.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 103899.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 312825.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 363779.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2017年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 58912.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 62646.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 63692.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 66429.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 73325.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78809.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 92876.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 104046.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 315639.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 364091.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2017年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '加拿大', '印度', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 59784.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 62750.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 63156.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 66501.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 73336.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 78915.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 93088.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 104192.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 318454.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 364404.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2017年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 60656.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 62619.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 62855.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 66573.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 73347.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 79021.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 93299.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 104338.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 321268.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 364716.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2017年'
            },
            yAxis: {
                type: 'category',
                data: ['韩国', '印度', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 61528.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 62082.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 62960.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 66646.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 73358.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 79127.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 93511.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 104485.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 324083.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 365028.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2017年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '韩国', '加拿大', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 61546.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 62400.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 63065.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 66718.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 73368.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 79233.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 93723.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 104631.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 326898.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 365340.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2017年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '加拿大', '韩国', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 61009.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 63170.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 63271.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 66790.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 73379.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 79339.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 93935.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 104777.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 329712.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 365652.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2017年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '加拿大', '韩国', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 60472.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 63275.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 64143.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 66863.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 73390.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 79445.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 94147.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 104924.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 332527.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 365964.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2017年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '加拿大', '韩国', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 59935.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 63380.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 65015.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 66935.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 73401.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 79551.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 94358.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 105070.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 335341.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 366276.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2017年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '加拿大', '韩国', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 59398.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 63484.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 65887.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 67007.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 73412.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 79657.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 94570.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 105216.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 338156.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 366589.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2017年'
            },
            yAxis: {
                type: 'category',
                data: ['印度', '加拿大', '韩国', '意大利', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 58862.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 63589.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 66759.0,
                        itemStyle: {
                            color: '#B2DF8A'
                        }
                    },
                    {
                        value: 67080.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 73423.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 79763.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 94782.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 105363.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 340970.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 366901.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        },


        {
            title: {
                text: '2017年'
            },
            yAxis: {
                type: 'category',
                data: ['澳大利亚', '加拿大', '意大利', '印度', '法国', '日本', '英国', '德国', '中国', '美国']

            },
            series: [{
                name: 'Article & Review',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 58325.0,
                        itemStyle: {
                            color: '#A6CEE3'
                        }
                    },
                    {
                        value: 63694.0,
                        itemStyle: {
                            color: '#FDBF6F'
                        }
                    },
                    {
                        value: 67152.0,
                        itemStyle: {
                            color: '#FF7F00'
                        }
                    },
                    {
                        value: 67631.0,
                        itemStyle: {
                            color: '#FF1493'
                        }
                    },
                    {
                        value: 73434.0,
                        itemStyle: {
                            color: '#CAB2D6'
                        }
                    },
                    {
                        value: 79869.0,
                        itemStyle: {
                            color: '#B15928'
                        }
                    },
                    {
                        value: 94994.0,
                        itemStyle: {
                            color: '#6A3D9A'
                        }
                    },
                    {
                        value: 105509.0,
                        itemStyle: {
                            color: '#00CED1'
                        }
                    },
                    {
                        value: 343785.0,
                        itemStyle: {
                            color: '#E31A1C'
                        }
                    },
                    {
                        value: 367213.0,
                        itemStyle: {
                            color: '#1F78B4'
                        }
                    }
                ]
            }]
        }
    ]
};