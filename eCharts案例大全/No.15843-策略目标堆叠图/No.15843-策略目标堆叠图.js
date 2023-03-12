var PatternSrcA = 'data:image/png;base64,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'
var PatternSrcB ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAZCAIAAADMuvsyAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGEUlEQVR42lVWiVYTWRDtbxC6OyAioCKMo6joMCPiyqbMfBS9JkjAgCBr0ksWlkAEkuDnza2q9xo9p08fSL1X9d6te2+18eJsa75TGa4WzMjrTVwzcqzYv5V4eOOhaDceSvOIWrGLX3riAO/eBI/7V3Nrvh2NpHn8ywtoS2/FzUXI4708317sVIZqBd7o4ncssyLPjl079o2npxsUiBwbxai2L+vGGsWlbvznaQkpckmApWYkJd2e2Bs9XvvUjSZOSlLP5HRc3jHTYKyx/rkTPTpdRx45sR2HPakva5D5Uyc25B706BTDSTjXiV6db/PR6Ex8UYqi/N2ksNg5/Od8W5LaOkQFIu9OLT/bKf/d2uZirvxoxaFdoUMPpuFiO5K9Ri7yVW3cLPVnLnY/tg/7qwFj4jMAVM+suIDk9cXuwuV+fxJmwPbEDhcAYMGbyz3sHeRe4IoWPbRXnrc/duevDvuqAR234hloJ/7C/smzzc/X8UhtVdIJ4FIbC56efQN6I40vUhK/A3+5K96TTUTL9xorvNE3bzhB2E6cbSxdp/fqRYpGDpqFNQT1aGMNJZ9Qs31bAYjDUi+xaLSxutCJmQo+EzDMgMUtx2qri7wXBXAPoY/J2YElMhMVzjZ0SUJC9hrzl+XpHztyCcFcDot3fzU/d1V509oByBxlzDXIfak/1y4DfFtfneCpLEsSRNHsGY5KTlCdWRygPDIbt2uh9XtJakkSvGp9X2iX71bzSApUsRqnJpSI5B6iEOFgWkBUktoZWknwurWLMyFzdhlLLhq7ONB0a3e2XTHkILYiAu18fFJa+pkAJZvFp8GQqPP49Cv6cv+4yNpzbyWOpXlA7TwpffqZQDCiQOEmMxf3dilzh6LEahGuNBzMguTBMsURJrYoCioEOyCG5+ebdpKnHxPic4b/g3oR7ZxsbrO3MNuZtnKs4foKMtNebTKGCAn6+XB18K59IO3MfIpTeNAfolBLn+qly/tDIhq0mwTvrg7fXexBjaQrZRrqrv2J/7G9//7ioJ945wj7FKuhdzQMvsgcCcmhSGCqBqJoGJzBlG0aefQI15q6+A4SDdYL1PvIZ976meEIFUAUW+PHQJJWDYD+R2NNuU/qZVaFE4wfFxF9dFSC1u2KY904EczcoWg3Hq+v61yifmWC40ck0fGTdbYLEZJ0jUogaojgehglPDgBaInb46QvW1vZOcSo2Wxd3B5JMQNM7fhKnTxdEIXup862aaPGXFu6A2xg1JgubJkqNWGFTry52EfPclV2pWTZZifhZV5fGr692ke/+xg9GRiamyGYjF7OXXI7GR7syuiCHxGlzJgWiWf8epxnzc356wiDLNMPy8CXoQZfBG+Hal/IhLlPtIzYRIvBWIhQj1fpsRzLz6W09992gmbjiAQSvFoaA20tdKOnzRLTkglCzhfgaNj88Ggd2GJEUiJZkLAbs8yonR0akVa8jPUZv6QR4/Ui9sJxe1I3kx+xGv4C0k6f71g3xFPjAWUGqiH8a+Zyz6RzMPUYQ2TB+ju1ldmrQziurWcr27UqMFAtwHFBbCheMOBJKI9rwL1up3kZn5Z6WC1QZ2v3Q7fcL4Psl0mFN1wTwsUQvJ0GlpaZ+CW/vWy8iniy+UF4UHSfPwQ097LZOdHcBPL3G6uyLVOR8OhJswTeoju6XqDVQgswqSCzkdqKIgEjpywlcjCpFq8rD+pfjAwliaEYzHbyeEPJjrdpMGjM/ddJn59uKsBj1RqTlYMB+rmb4NCyRXdHNRXF0OxnJxtyUAPdkpIDMQ0yfCcIpOgH+YbWMdrxHkPwx14uyaTp0IBh6QNwEAXwSstE2eIVIC+G4OwlRXOUMDSpO5765gJB4BggGjvJDbDSbBAEebFf4FLSpMK0hr6H2uUBEpLDzPLFdKV3GJEgIGgon4LEWS5hQAZL3QqPKl8OmM18GmQYgp0IgsnGonxoSncx5kCFh0dFSwtaLipfPBIdO/6qx4arRM8UM17wF6F8ZMlUxt8oABuBXVBU8cvRYiCLHa7leQh+y6xfWCa0gFGgnVOnWzn6/HBxReWMzPmhen7hOvkfdLsTs9qh9BcAAAAASUVORK5CYII='
var PatternSrcC ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAZCAIAAADMuvsyAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEx0lEQVR42k3Wh04dSRCF4XmTlTZne9c5Y2ODAWOTwYBzTptzePf9rv5VC2l0menKp05VM+29+vPS7fufnlv67Pzysbm1Ly+t9u7lxs7zzae/zG89/ery7U/O3vz6yp2TN7bpfH5h5YuLtxZ2X7C9cOvw/RPzRN9c22B1/Oo6ZQqLey93X/5xcfUefcp8Dh0vPE8EHga+BWN24vrWueX9u6//Ykz14zOL5ZSLj04vXN14LCSpAEzo85trmmeX7u68+H354A1lCk44OXNzz6fslbH9/DdJTwSCsamO04u7PG48+bkwDkmLSsfvwdt/mFW33+oj8nJqYefOwx/Yfju/KYbfUeUHJ6+LTbS0/9oJk0nKylWW7/XHP7FkX/XlRCoDMeCz/+bvwCzXWkPql+3Nu69AVbM6FMADEsXcfvC9vkiI1MlEg5eVw7fQO79yQLuMHMpxNExIgXNUa7zwQplUX9hyx9yTQiCxgrycgp0OEzqTLIBOXJqDRx6swQ4JwTbYg66+8Htt84lC2ZYfw0Ci7Ll854GQsK10xAwM5qQTFuhraQ7GkukQSt+69y48uYtiFBhLd+vZr/oiD3TLlgkd6XKonav3vyOl3PmHp2749E7KcKpnRwNLDTKGgQYRVcbOvfilL9e1Rz+SYoYUQ9gL16R6KWOZDc7XuFDkmRSQs3Ea5cMKbkrRMIcyYMD7GDnYQo+ZCuiroNbQ8dncX99+xls+mzQvbOfWH4HBKNbTqan3Jph2wjYAmnrxaqpgCKhhkdlhLagmZG6yi9SWiAq88QwGnkkTzQJnSYAm3DV/nDokVorpgi0z3pkNp15CRTz0bKbDvLFuAWgZc05CflBvUoRSFJRqhcKgXQYZ7YRS0gr1yK9mo4l2VlyLtgz8spLQGLMmezR7ssMqLhl3kcgwCCmnmDmqxGE6BqxBioDlqqy6JhXtlJZP+rWMWyIeeDb3U6dFzTV7maJJHAHmgMGLT+yTUIcVyikP+tIgyYmakN0rpV5IbtnONle4tWU8ho9f7piVYzNzlApexpiVUEPII+RdEhzWlyaFFD8AoK2k7aKJ02RwQ4Qraw/LozEba7mbo3aO1QibemQ6SV2vg1OhGo+yRaMQanPMFggDCEinCriLBZUiWcjLN662uZpgYGAQW/MdKi3z8OAH8ofv/sXQEh3rdsZquQDQfRBoBNyRvXd8TkhOScEIhorjkYIl1dbMNvSYdwF4FxIMMu72gwEAnFMAmJPJn6On49YroWa36hsVGcgDFShomHRz3XLwyYRUs1twA4PwV5g5mrE6JnfbxG3c02z23Y9dSrGPQnOPCk1RF1rLSHj7EgyGrVXaYhisJgWh7vxPLhVEMRWYXa5bAiUYOZlZBSgtX2iPf1rG/xjdOahQuuUqlarSZsXI2ElbYRLP5DADrAcjnIReAZi1bJl5CZsKbT+IZFEr1Hn/yWRVdzBAlXEzisXNiXd7WCk1jHYbI77IwzAI2ah0o9Sz8CBqyTcODWHXa5dgnutjFwE1zJ1kymk3V8uyirnWqjgSrUbLe7TKFemXfpeutCTd2nGua6jQ5d9Md1V4Zv9l5q5pic8ygDx8NIbHLqvYUTvH/zS5o9x/g61Y9YVtN0q7r4kyhKSKgeJ/PuEsMY1mr9EAAAAASUVORK5CYII='
var PatternSrcD ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAKCAIAAABJ+IsHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABzUlEQVR42n1USW6DQBDkOWkYcfY0znsSMMeA8zmb5QWx4UGpXmZMLpEQGnqpqq4eUUxNiWcbu21s9e0HBGcub+dyjgGfj7F/XCW7D/0+djMTsvdYzedqG/rUpQhDj6CkGAi0awTxn7EFCA4ABHjxIh4EWtC1zojnWOP9HD4tbtx4T6dKCmIwaEM0fS5L0VFmLVuiB5TChj/Ex4pEHG5nMrJDtjVKGZpJ4VqJD70cxu6uKaPf0qBpsBaATmzNNq4Prc1LfEPFEsko9+sl008chFvGIu/CLkb3DEHPckjrk3abGICQVfy/Y6xqOVW2p7xmnLMf9/fq+XU57hifCKolipw2KHOrlwAEbGEQCO2pYlfTzEZTvcMuu1m6xZ/vbookjmmNOGGgKg6fZjUKUIZiW3y6Ih8T1261CGd6+dOQUS5NNYktBG67TXhWLldNraoJh3SB/RGT0Mghl9nodtdkRyyC1OpIRi8EHPxCRqFfVbjKStCaXTNW6s1PDr7KIEJ77T4BcGUqMuLK3r8m7T4oh9zjxKZaoS0iBZHUnnI+jOhuKTGckLPq8In9V8BuNQ5H98TSSN7TuCBFrG0++414vf46kn+1EzeHMSKp+fQLBIMYr07yLOwAAAAASUVORK5CYII='
var PatternSrcE ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAKCAIAAABJ+IsHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABmUlEQVR42mVTW3KDMAzkPJj2CJgDlAboKVpCfovzySPpsbvSGmHIjIaxJa1Wa4nM+aaoPq/jejI4XXkpfIPv97j8hLUfZwkFnJ+FopiAK6KJPYlCAqMs2P8uwF7HJ/2ZEPtmENc83FeYHMICZ15e8lhakHACTHqri8MQHv2GlUN4sCF2JpTjHFnDMoQ/pyghzqtO6t5XKIMp9wqnsFYtFcNzu1vXKynzssVhc85i2pw23ZLe5EpZxea+fqtaJZau0cu0NTXhSq3O1zKIsKiUiU8tihXlfEfFBG5wUYyQJjQRstktPOQlfC3EEg5RiuWxNBTjyymiZU4xKlZZ1CSibZAaFcU6RFzTDcCMyZhZ+Lxc6neHGU8qSNtSv3b2aZRGD2e+LaZBeh2EvJbOPhJHGrXk2u1P6rtTjks6i9t0vLpTTXnhxkaQHfAv5UyZ+W3V03aZ4JJMM1sFEhuWM+6s3713daZSLCobt1O2r8Q2YCa7/WDAmr/TV3EEF+oEXn+q1qXKysu7/8j3F+rkhz4aZ8SaSN6FRtFS9h+nLITANtSp+AAAAABJRU5ErkJggg=='
var PatternSrcF ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAKCAIAAABJ+IsHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABo0lEQVR42oVT243CMBBMD0ec2g64ZuI4LoMkPwchJRzQGrMzthNOSEiWtd7XzD5cNWNwoz/e538Hyq+xc0NH61L0+8eZ1tCMHibc+4f0cxGKCW4KOdwuEHTTFCoCh3fAoTZUA1DA993un9ucgS0wx55zYKJVHKRHlJIc/y6OhD4A10PbTC3BziqoWJtN6pR0renFWugebr8QkPAD8G6KvF9arWayJg9mzdSVNhYBSnbLKtMIBEzrFQndGKsN66ucIKztOnUEnjfErZkGyUG6oX1T8dBqxnDTjAswDhIibVWWS7xw1FImTTNGxdJnn2U3mR7bB2H/WMgVXVnI3qwwwQECnLe84eBsfL2Ao+qGH07eiwgZlKnx7E/QkkOuh97GT41Kx7POhVIZqOnhbCxPpmESz7QJWH8jWIssOD0T6sCBsfrEaWht/NRAIJ42saPQajmchUcl1KlzKqStyq+wX0vuFIJ4cJZBs1TeTA5N8iyrR9/qTIvr1psysY8udSL9EZeiOOMcFjO1uPnEMdFfj9fwSFEZ262DnjR5rULuU7d2cYxP9g05A9CyfQUAAAAASUVORK5CYII='

var PatternImgA = new Image();
var PatternImgB = new Image();
var PatternImgC = new Image();
var PatternImgD = new Image();
var PatternImgE = new Image();
var PatternImgF = new Image();

PatternImgA.src = PatternSrcA;
PatternImgB.src = PatternSrcB;
PatternImgC.src = PatternSrcC;
PatternImgD.src = PatternSrcD;
PatternImgE.src = PatternSrcE;
PatternImgF.src = PatternSrcF;

var itemStyleA = { normal: {color: {image: PatternImgA,repeat: 'repeat'}}};
var itemStyleB = { normal: {color: {image: PatternImgB,repeat: 'repeat'}}};
var itemStyleC = { normal: {color: {image: PatternImgC,repeat: 'repeat'}}};
var itemStyleD = { normal: {color: {image: PatternImgD,repeat: 'repeat'}}};
var itemStyleE = { normal: {color: {image: PatternImgE,repeat: 'repeat'}}};
var itemStyleF = { normal: {color: {image: PatternImgF,repeat: 'repeat'}}};

option = {
  	color:['#c03a2a', '#16a185', '#2c3f50',, '#666'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
      	x: 'right',
        data:['20', '50', '80', '100', '150', '300', '500', '800', '1000']
    },
    yAxis : [
        {
            type : 'value'
        }
    ],
    xAxis : [
        {
            type : 'category',
            data : ['产品1','产品2','产品3','产品4','产品5','产品6','产品7','产品8' ]
        }
    ],
    series : [
        {
            name:'20',
            type:'bar',
            stack: '总量',
            barWidth: '40px',
            data:[0, 212, 101, 0, 0, 0, 120, 0]
        },
        {
            name:'50',
            type:'bar',
            stack: '总量',
            data:[0, 232, 251, 0, 0, 0, 10, 0]
        },
        {
            name:'80',
            type:'bar',
            stack: '总量',
            data:[0, 232, 231, 134, 190, 0, 110, 0]
        },
        {
            name:'100',
            type:'bar',
            stack: '总量',
            data:[0, 132, 101, 0, 0, 150, 210, 0],
          	itemStyle: itemStyleA
        },
        {
            name:'150',
            type:'bar',
            stack: '总量',
            data:[120, 252, 201, 134, 60, 0, 150, 0],
          	itemStyle: itemStyleB
        },
        {
            name:'300',
            type:'bar',
            stack: '总量',
            data:[120, 0, 0, 184, 70, 0, 0, 90],
          	itemStyle: itemStyleC
        },
        {
            name:'500',
            type:'bar',
            stack: '总量',
            data:[120, 0, 0, 174, 10, 230, 0, 0],
          	itemStyle: itemStyleD
        },
        {
            name:'800',
            type:'bar',
            stack: '总量',
            data:[220, 0, 0, 134, 70, 0, 0, 0],
          	itemStyle: itemStyleE
        },
        {
            name:'1000',
            type:'bar',
            stack: '总量',
            data:[0, 0, 0, 0, 0, 0, 0, 90],
          	itemStyle: itemStyleF
        }
    ]
};          