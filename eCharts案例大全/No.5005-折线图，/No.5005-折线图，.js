option = {
    backgroundColor: '#01004C',
    title: {

    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['2019', '2020'],
        textStyle: {
            color: '#fff'
        },
        // selected:{
        //     "信息科技":false,
        //     "大消费":false
        // }
    },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         mark: {
    //             show: true
    //         },
    //         dataView: {
    //             show: true,
    //             readOnly: false
    //         },
    //         magicType: {
    //             show: true,
    //             type: ['line', 'bar']
    //         },
    //         restore: {
    //             show: true
    //         },
    //         saveAsImage: {
    //             show: true
    //         }
    //     }
    // },
    // calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data:['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月'],
        axisLabel: {
            show: true,
            interval:0,
            textStyle: {
                color: "#ffffff", //X轴文字颜色
                fontSize: 16
            }
        },
        splitLine: { show: true,lineStyle:{
            type:"dashed"
        }},
        

    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            show:true,
            formatter: '{value} ',
            color: '#ffffff',
            textStyle: {
                fontSize: 16
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#ccc"
            },
        },


    }],
    series: [{
            name: '2019',
            type: 'line',
            data: [200, 560, 260, 608, 800,760, 370,456,890,208],
            lineStyle: {
                normal: {
                    width: 0,
                    color: {
                        type: 'linear',

                        colorStops: [{
                            offset: 0,
                            color: '#57BD9F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#19BC8C' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#57BD9F',
                    borderWidth: 0,
                    borderColor: "#57BD9F"
                }
            },
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ],
                label: {
        show: false
      },
                // symbol: "pin",
                symbolSize: 50,
                symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURQAAAAAAAAAAAAAAAExpcQAAAAAAAAAAAAAAAAAAABURBHhKBlQ7C8OdKn1ZEIJXDLWKIN60MfDFN8GUIraIHsueJtSmKdyvLax+GqN2F5FjD5ttE/TGNuS2MOu+M4VYCyJ2encAAAATdFJOUwEYHy8AEiYCBgw5/VuclMzOxNqvJPNWAAADjUlEQVRYw5XZh3biMBAFUIUSQMim2ZTQ/v8v1+qaJmsHJ+Ek63ve2FmQJmqFS021SbUllX9m/yU9vcJtxaqQinjzHCIrYBEvn7oDRUgcUrEej2GUFRXTLset11WSA7GXJFiQpGIJlh7QfkIBE4oUjAEx94MKkziiEr2kLYpKpigq2DDwsvbrKpucCEHshXgZixXIGJKKACw9zzlkmSqaOWQSIch5gVuiSqQgYhB5ljDd6Xx+vc7nU2cCiUUMsp7ndDdZuc6djqQgUrD0dPciZUkgSmAO6L0pSfd5MfXpXEgvFhFLEATM3nSyexSYeyAxRYxgGdA27D19+oh10kEETbuIFAwBa54TaUQAkoa7z+f9eU+HPf+dnsevHdN0BlFA571nyosoIgRBw7c58IablkEX8DZbOCIEc8cuoLk1lIk3Ol9EDIaOmwJeXcTYMweWHY/X2bpdR9IzB/qOr02FehbBqeN4CpN0jN8er6HnBvA4ynXNT4/zYLiENXCEoLuIs+ClDbxI4IaAjYXBjZgw1ShZIwfK17At4PF/wCEcw4U93A8awPBr0w/TCfZwdSmOIXy24tA3/x6aoalMIzi9Gh5bvKNu+a/nL+LU873y8F/6mReH8q7ou1RDfqrhPdkKr9juIur+Plu9xpew9hZgJOaRnpnqWwB+ydb9Y6ZiwOIFe8O/L/v7rOdArelbCl45lD3PRew107GwFAkRD0+5HgcmYAbZpYM2FfBptLBwoOvDvPrqZa/Pqy9+fUiXX0vb9J9QtuElv/hil8QxogHKMz81XMAS5FeIU9N8wNQwE5DbVuT74pr+umP6+IanvuFfsiBWZCdFV8X68LX1Fz65r9Hj1sPc1gw2bb6kjOZX7BjkdxZURF4OqLjtLWra3Rir7P3HdPRp27NmA5Y7eqZpKx72+/3XHvZxKLdRnMeBnBiK8ySQ7CCzmEHkMQHpmAWKjjTRM8XWFnqKHwTBpvMmPIgGbb6ZhvGoioiBNNErxwOsh2dfZCPuxyJWNL+LBRk30AEdms5tkJjIvl8wA5ENCYjmh2iYscuTpUUxWdrtxIYpSMVyWrVeM55qmHDSeRqazokeN4PFI7qdMOtjPQKCoVV1wsncEBaEIjG3YBTZMHZGgz9MwpGuagLpLFYaOnMeB86LFY8F6+NxcSReAVfinwPAHwJW7SD6CwMtJXkS6ERV48QTV6saSdHwbfG0f1rN6BGbBWHZAAAAAElFTkSuQmCC"
            },
            
        },
        {
            name: '2020',
            type: 'line',
            data: [300, 450, 360, 708, 600,970, 450,670,490,950],
            lineStyle: {
                normal: {
                    width: 0,
                    color: {
                        type: 'linear',
                        colorStops: [{
                            offset: 0,
                            color: '#7117EB' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#638BEE' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 6,
                    shadowOffsetY: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#7597EB',
                    borderWidth: 0,
                    borderColor: "#7597EB"
                }
            },
             markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ],
                label: {
        show: false
      },
                // symbol: "pin",
                symbolSize: 50,
                // itemStyle:{
                //     color:"#3AFDF7",
                //     borderColor:"#3AFDF7"
                // }
                      symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABsUExURUxpcQAAAAABAQWOqQAAAAAAAAAAAAAAAAAAAAAAAAxXYAkwMh6orSjGxgl3iA2ZriHCyzPp5QiHnTDe2yXS2SjZ3i7l5hKqvRm4xxWxwivf4iLM1SDH0Ru+yx7DzjHs6zTy7w6htwqZsTf380tDcBAAAAAUdFJOUwApMv4SGiEBBQtaQpevid7e38HGASarfwAAAt5JREFUWMPtmOl2gjAQhSVYpAmLgFUrtri8/zt2JhuBCplg+8+bHFQOfudOJkAyq9VLL602I/0JLNV6DjpgvYMG1IU8w+plkQtxyFg70sxgZI8DyBsqSeSHYmpkKE/iEJUkkVKCWI0MIRp7ChdFzAqhCqlMBvDQHuCQxrOmqu73qmoyjkxEGpMBPLAH7pjIgdWryoVEKpMkosND3OU+0gWRIUQEGl7WIWHIu1+6jOmwKUBlUPHyy4Ry7ZFg0eGJ5jKpRlCJOmD013QzaqRHQtDKoIy3m5WKWlokGYR8dHvd8Jv9YU9mjGLRGhSnvaNuPxKcOAmKRW0QAt57BUFriwSDHAyeRs3tJ+zcb9GOYH4iKLej6AFCiisKsIJEE4Ay4g+SdMx+IMtoQDVzZoEqJyxXf9jJbr/s3HM7aGoQISseYMS2O6MP5zgQntrKiTMPfB8BZ7U1M9ELbPHyFnvb7lTDrj/6U2TguSXpTADqMZSXu38dfSpRxlBn+Qxqzz4RsmzmIV7+7QUS5qG5U75Jot0p8l7eUnhb0r2sY/4iKGP+J6yJWRz9vKPwRuw8sbOj1heg4fBAGeGJ3cfMj15xRnqnYMyYFrD42XfVzG95wPXIeu19Mdv3vDh8zuogosQfsWuxmAcWNIOORVbO8UpGM9ivHSLGDzPiNsUb2nIOLRbTvKJf2WyIC07MSznFKwVx7eXMRRn0dUIyYP/S6/cSsegZB9NBBQsxOCDWj/zVgTxnWcxEaSg37NiupWDUBfaYCBb5zdFVHrme0mng3swM422k0AEcbH4eEC0vDd2O2t1KfbvFttX0Hcp0Yuo4BpbsNSbkbQFvMIyijLVKsWQAnT24JnID5A4vuIzhJoaPeOnSsoghRpLIo6d4LjGJijguouQ5nkMEZFEkeo+8nGeLI7rS0u/iFxfAnHLLer2gvDJDtIWqZwt0bgEsTZ/nOTW1pVW0/y1I/ka+Kr4v/Yt+AGfZskkEYbOcAAAAAElFTkSuQmCC"
            },
           
        }
    ]
};