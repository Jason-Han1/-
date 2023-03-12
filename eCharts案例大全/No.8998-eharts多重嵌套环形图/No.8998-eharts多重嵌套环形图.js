var uploadedDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABICAYAAABGOvOzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAFNUlEQVR42uWcW2wVRRjHf1O0VoKIFxIjFWpULg8KFYMyUi9g9AFa0ZhiEVDaYFNRozHxAr6IocEHMfESUKxV0vBgKvH2QCSRRMPgiyQqJKiYqGjCxaYar5jW8WHOSVfYc87s7szOwf5fes7uznzz/+23c3ZmZyv4P0jpFuBq4Emk0EmK1oRuuyNdCqwB3kDp00cjgGmFv8uBbSg9ZrQBuCLy+Q5gqy2EUx+A0mOBK0/YuhR4YXQAgLlAbcz2LpR+fDQAuLHMvm6Uvit/AEqvTtIRZVRzmX0CeA2lr8sPgNL1wPNYXoMZY03lvx1gnGqBfpSenA8AaC3U24XSSz0jaLU8biLwdqHD9A6gLfJ5E0o3eLGutADuSVCiEdjoF4DS04CrIlvGA32e+oMbgEsSlulE6cX+AEBHzLZrgSc8AOhIWa4HpScVvwhnzVG6DjgEnB+z9zgwEym+dBTrHOBH4MyUNbyHFC3gNgNaS5gHOAN4uXDdulBbBvMAzYURpFMAD1XYfz2w0lGsVQ7q2IDSNW7OiNK3ADssjhwAZiDFsQyxGoG9TtoNt7rKANtO7jxifooSapGjNgPcmR2A0k2Y9LbVsnK3pha6ySGARhcZ0J2izEaUTht7lkMAF2YDoPRCYF6KkrOBu1NGHe8QQF36TtCcwb3AzJQ1HAYuQ4rfEsYdBCY4AvBtlgzozGAe4AKg4oRFjD5zZB5gTzoASk8EnnbQgEdQekrCMu86BPB+2gzoxvykZVUdsCFhmV7gZwexDwH9yQEofQ3pByJxWoLS9peSFIO4yb41SPF3MgBmWPsSLgdRpq51Ccs8B7yTIeZmpOiD5GOBTk6egnahZpSeY320efy1hHT9QS9wf/GLPQAzp5b0erWVAJ5KVEKK48BtwMPArxYljgIrkaIdKYajgW3MC2AnsMATgKLmIcXuxKWUnoDplxZhHpIWh8oDmHuV7UBf3D2HLYBOYLNn8wC7kGJ+5lqUHgcMIcVflQ6tDMCk/j7grBwAAMxHil05xarQB5jU35KjeYC1Ocaq2Am2Azfn2SBgAUrPDg/APOF5NmfzRT2aV6D4PsCk/g7yP/tFDQPTkeKg70ClMiBE6kc1BujKI9DJGWAeGuwHzg4IAMyA56LE8wUJFZcB66vAPJhJj7aslSQDYEZ6K0I7j6jdd4CRS8B0fHswt5LVpBlIccBX5dEMWFGF5ovt8iaTAUqfBnwFXBzabYy+Q4oGX5UXM+D2KjUPMAWlZ/kGcF9olxXUnL2KUgDMLW9TaIcVtNAfAGih+tcLNhYWYHgBMDe0OwvV4mcukhpfFXtQlqdQZQHUh3ZmqUnZq4gH4PJpq0+d6wuA19GWQ3lpZw12c+rVIG8Avg/tzFJe2lmDGQOcCnKzyDIGwKehnVloCPjcF4APQ7uz0CdI8bsfAFJ8AXwd2mEFbfdVcXEMsDW0wzIaArb5BvAq8GdopyX0JlIc8QtAisNAT2inMfoHf2sSIgCM1gGDoR2foJ5CH5UDALOC+7HQjiM6gp83TUoAMBC2AG+Fdo5J/eVIMZAvAKMOwGvaWWgtUuzMI1Cpp8P1wMdAQwDzLyLFA3kFi58LlOIHzCrwfTmbXw88mGfA8muEzOqrXmCx53b8AaxGitfzNF8ZwAiIe4FncLdMPardQCdS7M/bPNhOh0vxCjAd2IR5B9CFvsG8+toUyjykWfNrFlCsApaR/NXVYeADzNijHymGQhlPD2AEhAAux/wDgznAVGAyMA4Yi7mr/AU4CBwAPsIshPwptOmo/gXpBiFF3mCebgAAAABJRU5ErkJggg==";
var option = {
    graphic: {
        elements: [{
            type: 'image',
            style: {
                image: uploadedDataURL,
                width: 70,
                height: 70
            },
            left: 'center',
            top: 'center'
        }]
    },
    backgroundColor: '#ffffff',
    series: [
        //最外层圆环
        {
            type: 'pie',
            zlevel: 3,
            silent: true,
            radius: ['67%', '68%'],
            startAngle: -65,
            label: {
                normal: {
                    show: false
                },
            },
            itemStyle: {
                color: 'red'
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie2()
        },
        //背景圆环
        {
            type: 'pie',
            zlevel: 1,
            silent: true,
            radius: ['40%', '60%'],
            hoverAnimation: false,
            // animation:false,    //charts3 no
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie1()
        },
        {
            zlevel: 2,
            name: '中间环形图',
            type: 'pie',
            radius: ['45%', '55%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',

                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: "25",
                    name: "2",
                },
                {
                    value: "25",
                    name: "3",
                },
                {
                    value: "25",
                    name: "4",
                },
                {
                    value: "25",
                    name: "5",
                },
                {
                    value: "25",
                    name: "6",
                }
            ]
        },
        {
            name: '最里层环形',
            type: 'pie',
            startAngle: 315,
            hoverAnimation: false,
            radius: ["30%", "31%"],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '10',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: "rgba(0,0,0,0)"
                        }
                    }
                },
                {
                    value: 70,
                    itemStyle: {
                        normal: {
                            color: "rgba(20,198,249,1)"
                        }
                    }
                },
            ]
        }
    ]
};

function _pie1() {
    let dataArr = [];
    for (var i = 0; i < 8; i++) {

        dataArr.push({
            name: (i + 1).toString(),
            value: 20,
            itemStyle: {
                normal: {
                    color: "rgba(88,142,197,0.1)",
                    borderWidth: 0,
                    borderColor: "rgba(0,0,0,0)"
                }
            }
        })

    }
    return dataArr

}

function _pie2() {
    let dataArr = [];
    var index = 0;

    for (var i = 0; i < 8; i++) {
        if (i % 2 === 0) {

            var temp = new echarts.graphic.LinearGradient(
                0, 0, 1, 1,
                [{
                        offset: 0,
                        color: '#3ac26e'
                    },
                    {
                        offset: 0.2,
                        color: '#dab344'
                    },
                    {
                        offset: 0.4,
                        color: '#0CB9FF'
                    },
                    {
                        offset: 0.6,
                        color: '#e72b7c'
                    },
                    {
                        offset: 0.8,
                        color: '#1976b9'
                    },
                    {
                        offset: 1,
                        color: '#620fa0'
                    }
                ]
            )

            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: { //颜色渐变
                        color: temp,
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 5,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }
    return dataArr

}