
function handleCustomItem($p, $api) {
    let customItem = {
        icon: [

            // 0：进店人数
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAKwwAACsMBNCkkqwAAA' +
            'Bx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAkASURBVHic7Z19jFRXGYef987MLlVod0GBYii11DQQC8RGo6XR1mrSYtQUYQOoNVot' +
            'iR+7WxaKYRe4W2b5qIX9MCSu/Gf9iNS09au2RKlJSRtJo41ahFrTALJFNHy33d3Zua9/7GxFYJY7M+femTlznv/2zrm/c8Iz9953zj33IqqKw168cg/AES1' +
            'OsOU4wZbjBFuOE2w5TrDlOMGW4wRbjhNsOU6w5TjBluMEW44TbDlOsOU4wZbjBFuOE2w5TrDlOMGW4wRbjhNsOU6w5TjBluMEW44TbDlOsOUkwzYUEaMdt7' +
            'XrrBFhMQHvw33RUHgd4Xd9XbIvVPuQjxxJ6IYGBbd26GIN+IHCO42F2sN3+zZL85UaVazgBzfqjKEMBxUmGQm0EBGaervksfHahPUW+6lxcIRPOrnjo0qTq' +
            'az4r31CQ+x9VhvCDFNRsQv2Ap6Lu89qQ+CwqazYBfdslj960Bt3v1WDMJhMkTYWV44qGqB5vS6TLF9VmAPUGw2vQgTeAF5M1rF+uy8HrtS+Yqtohxkqtop2' +
            'xIsTbDmhpypN0dKhK4Fb4+632lBI96Xl76XmxCrY93XCyWG2AI1x9luVeBwD1pUeEyOnMyzFyQ2HskJVS65sYxWsyso4+6tqlFmrNnBbqTGxCW7zda7Cwrj' +
            '6s4Egy+dLzYhN8EjGHb0FIyz1fa0rJSIWwb6vE1T5Yhx92YQqk89kuLuUjFgEu+KqeAJKO03HItgVV8Wj8OmNG/XqYvePXLArrkpEmXAqy+eK3T1ywdlh7o' +
            '+6D9sR5QvF7xvh3aTczNUA7vpbEiIE9UlmPtwpA2PbKuJukiuuzKCKN5RleTH7RirYFVcGKfI0HZlgV1yZRZUFbb7OLXS/yAS74so8I5nCfxNHItj3dUIA9' +
            '0aRXdMUcYcpEsGuuIoGhetbOgq77EUiWHGn56go9DexccFtvs5VLf0+piMPwtL+fk2FbW5csCuuokWVyQeOhr/DZFSwK65iooDTtFHBpzJ8iKiKK+F8VeVG' +
            'm/2xsA2NCk6m+I/JvP9D+VNV5UaYrRr+39mo4InKPwHj/52pCIEnvGA6F0DgAHAqimw8Qr2OoWCEI+GHYJDOTjmL8AeTmTmeV4/HI8hFPPaIsMd4LhxJKDu' +
            'J5gsferzGq2hR8yIEnuh5iP0iHDMc/GZDkj3AE0ZzGR1zd5ccE9hvOFpT8GTYxsYFN6ToFzF3LRbhRN3V7BIRFWGLqdzRcHp9X84vnM/PRDhkMHfQE7YD4J' +
            'l71jeX/eNH0vJa2ObGBXd2ylkRfGOBwoaH18o5gDkz+b4IfzOUe/yqiWwDaGqSrAdrjOSOZnfv6JKjAL1p+ZUIe83E8kadsL6QfSKZquxJy04RflJykPBob' +
            '1r6x/5cuVIyCPcAZ0pMHvI8Fm/7tryd090lvxRvVHgpiLB3cpINF25LpVguhC+M8qDicW8hRy9EeLuwMcVXBH5R7P4CT944ja9dvL03LYdE+IwIJ4sMfhNh' +
            'ec8muaQqb0yyToRdReUCIuy7aiJLfF9GLtz+iC8nvASLipUswojn8Y2etBRc30S9Jss7laFTlbVAqPlTEYZF2NK9iU4RyTu4NR06e0j5KcotBQzplWSCZTs' +
            '2ybi/T1va9ZsoW8O+qE2EAKW/sY5W35fhfO1W+zp1OMOPUD5RwJgHEh5f6k7Lby/cWFGvcMjJ2AjcgzLx8h1wXoTHU+CHPQ2pqrRuYDkBa1RZkK+dCIdE6G' +
            '1IsuvioyvvmH2dPjRMB7CC/LNzQyI8RRK/t1P+HCYXoLlDF0nAOoSPqOY5iwqHPaVf3kVP9yp56+KPK0rwGH19Wv/aCe7Iwk0C18LoOxol4ODs6fy+uVmGi' +
            's1ua9dZGbhd4D3Au1U5KR4DiSTP7fDllWJzfV+Tp0e4TZX3A9cq1HnwugqvNibZ6/tS9HRkS5dOY5A7yTITmCYeZwNlwFP292yWl8bbtyIFO8xREctmHeXH' +
            'CbYcJ9hynGDLif01SoWy2tepmWHuIsGIJHiqx5fT5R5TNVHRVXTrel0YZPk5MCW3acBLsORys1C1hhVVdBDwKP+TCzBDszyzql3di9RCUrGCmzfqdSjvvXi' +
            '7wqSs8rSTHI6KFXzjFP4FXHZmywbJfX1aP95jKLt3a8JEPxV9DW5p13WqdOX7XOBcQrhrR5c8H+e4TNDcrvcLbANeUOVVEY4LXKPKdSp8UISdvWnpzre/Fd' +
            'fgnjRbRPhevs+r/UhWpUGVu4FvqdIVKA8qLEOZLYqRI7iiBYuI9qT5us2S8xEYclPRgqGmJRtxU9BExwPr9WbNcl8gXG+i87C0dIAoAmTIs3DgAslVeU2+G' +
            'M/QKTq04OYNemd2hN8AKfMrfa9MmC7HJK/u0PmFrl2qNGI/RUuWrYRcdlNOFCZlAh4q9zgMEPM1WLnJRIcxMa/cAygVz4u7ipYIH9Iyjam102Uk9lO0B20i' +
            'VP6dHOF4wuQi9vIRbxXd3SUvrmrXeVmPJSg3mOi8EBTqUL7MeHWAcDyV4o7t/uhTBdVM7FU0QO5xjLzTZ1HR36+pl4/wGOHkHoxvZNFRMxMdb8tVPpu3kWV' +
            'yc9gvuIblIuWYyYqbA4fZBrUnF0DLcQ0uldYOnUNA/a0L+EtTk2THtq/dqtcMnuXDjXU8O/Zsj+/rO04O05w3zGK5OarwCFY+FcB39r3EUMs6PabCOVGmv3' +
            'WWqYAM1jMZGAY4k6ER8nyL7Zdr7BRdrmtwvcINKPMVpgGXrCbIvf7g0ge6akAugEoN3A/2EqxA+MfY3wJ/FeF22+XmqOojOBTdm+TlxBRuTib5eCLBRxvru' +
            'KU3LebepVHZVOE1uAhyz8Y+W+5xxI2Xr/4oPMdRidTMTFYN4wTbTE2sqqxl1B3B1uME24zUwkRHLeNO0fZj30TH4HkWPdCu0b1iv4IIlAXjrfW28n5woPyw' +
            '3GOoFNTNZFmPuwZbTlUKDmLur2rJPWxXMrEKVqHol4LWGiocNpETq2BJsg/4d5x9VisJj2dM5MQquMeX0wnhPoTBOPutNkT4dfcm2W0kqxwvYWnt0DmB0ir' +
            'wAUK+Vb0WUDgqwtML59F34arTy7YN6e2/hOUiiJd6FboAAAAASUVORK5CYII=',

            // 1：化妆人数
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAA' +
            'Bx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAd4SURBVHic7Z1biF1XHcZ//33mTJyk5NJSqNWKl1bTFEVLUChGH4SSlhqtF7SgUIsS' +
            'KnVuadXMmTJ7aJMWYzJJHhqqIBqLJmlAQQk+SEGIIIRatRrQlFBqDVpLkjbp1JyZsz9fUjymZ3Jm1qyz19571u/tbPZa/4/5Zq21190kEakuSWgBkd4SDa4' +
            '4fa4JzazrO4Pj+orBjf197NqR2j9dY0XAtSk154RdDB5paH1LHLv488W+Gpt2PWTPOAWLOBvcuyo64d1tv94+m3F0eFyf7lm8SEfya4PF8izj8FBDX8gtZi' +
            'T3j6wa8MRQQ5/POe6SJfevaIk+4CfD4/pc3rGXIkG6SRJ9Ej8dHtdnQsRfSgTrB0v0ZRkHBhu6M5SGpUDogY464uBIQ58KrKOyhDYYoN4STw6Na1NoIVWkC' +
            'AYD1JVxaLShW0ILqRpFMRhg2az4+f3jeldoIVWiSAYDXD0jfjExoZWhhVSFohmMxE1nZjl46JBqobVUgcIZDIDY+Ns/sju0jCpQTIMBifuGGvp6aB1lp7AG' +
            'A0jsHRnXraF1lJlCGwzUWhmHhsd1Y2ghZaXoBgOsyjIOj+zSQGghZaQMBgOs02nuCS2ijJTFYCQ+FFpDGSmPwdAfWkMZKY3BJrov44y8idIYHHEjGlxxosE' +
            'Vx3lnQ1cyLpjxssccX/WY15KhZzsbIn4p3s6GSCHwXkVv3a6rpl/nNom1iHcaJMzVxbE3P1eHd80wwblEnExqHIl7nOaPtypako08yGQmtiCW+xA3d2x+uX' +
            'wF9zwyZv/uZZwiEXx34WBD+xFfdsrMKT4nBq7gI49utTN5xQxJ0DZ4eEy35WkugMQN0+d5NM+YZcSLwTKCrLwwuDtNFceoL4Mfg8V7feTjELf/jFgbInZZ8' +
            'GKwwVt95ONCbZYrQsUuA7EfXHF8tcHxsK2C4qcEK5zBWRLniS+HnzY4luDC4mWoUgn3WivMkpqBAf4WIm5ZiLNJJcHVp0WV4DRV/+kZ9sH/+qKd1k6pw6RC' +
            'J1zWXcl4qV7n2ztTO77QtEsB5xI8OUlyuslBoAin5ZyyFdy8p2H/Ci2kV+Q+Fn2myZcohrkA1zLNI6FFFBFng2X5Ti50RXzx/h1aEVpG0XA22AKNP8+FYKB' +
            '1lrhJ7RIWU4Kv9CnEC0XUFBj3gQ6xzKMOX8Sx9UtYTDfpdzbP7k9uiNOhJRSNONBREoIMdCwF0lTJtLimOcM1qrHgk3+SbP61nESzv85L35m0UwuNMxexBM' +
            '/BA+N6TzNjC8ZdEqvzjG3wvOCHV/azM03tPBRgVWWVGGnoky3xY2BVSB1mnEjqbJxK7WQ02BMjD+qmVotngHpoLQBm/HVNnQ9MTNB0Se/cBg81NOaatlckd' +
            'Q5MpXZyMXm0WuyjIOYCSLzvbJMt4DYU62ywxDbXtL0ia/I04GzwcKrVWZMNHiV5ITM24WhwHBhow1q8P7SGOVjnmjAa3EaWcW1oDR0RzqfvRoMrThzoWABm' +
            '/Ezwq0RcLbhbcH1oTd2IBs8Tg6k922z0jd9pqqnTTY4AHw8oqyuxip4nqv//+dVpatMJ7A+lZ75Eg+eBwbm9k/bCpc9lPBdCz0LolcHHLeGrBhsT+BrG0z2' +
            'KkwuC2U7PkxLsqvDeBhs8V1/Dh7/7gL32xrPHH9ePjr/AUxIf9R0vJFlW/B0dvSjB32s3F2DzZpsxeKwHsSJd8G5wYp23kmTwd9+xIt3xbrDUub2KhCF+RV' +
            'ecaHDFyc3gWgm6FFUkluCKEw2uONHgNpKk+AMXCyUaXHGiwRUnGlxxosEVJxpccaLBFScaXHGiwRUnGlxxcjO4VYLlLVUkluCKEw2uONHgipObwVWcqSkDs' +
            'QTPg7nOAzMr/t6uaPA8kFj9zQl12jtc+LMxo8FtXG6nwoVZvt9+mu3guG6Q+FY+ytwpfBVTFCRub57l1NCYjskYMLFeCnNPxULIzeAkQ1lewXqFWCn4BKI0' +
            'X4yxiq440eCKk5vBWewHB8H/5rOk84msifEW37Ei3fFusMH6Ts9bGTf7jhXpTi+2j35jtKFb2p8Nj+mDiMKdbbkU8N5Nklg9C0cHx3QU43mDtwk+JsU+dwh' +
            '69Uc3YANiQ5m+rEycAA5QtLsoYNo1YSxVbezebn8A7gqtoxO7H875artIOYgGV5xocMWJbXAbExNa+WrGdaF1zMFfXBJFg9t4pcWtWcaToXXMgdOXfayiK0' +
            '40uA2pehMi7vcHW/FOtLOEC6E19Ajnfzz3+4MLePbkxZEod8R5T1K8YsYrrmkXU0UfXUTaXvDi1Db7x2IyWFbnWV9iPON8F5SzwbWEHUDLNb1vLOHhxeZx8' +
            'dbP33iQ4xfjCdekzgZPPWTPmjHa/c3eY8aRddfxAy+Z9XOfwete8vKAwbE1fexzTb+or+g922wvCcNmbhcnekCWsH9NnTs3b7YZHxnuTe3PlnC7GS/7yG8x' +
            'mPFUvZ870tT+45yHj9tHt6RaOzvDvYg7MN6Rw9zvKUv4NTV27pm0P/UiwNbtumr6NUaBz0pcDwu/HNoFg3OC39dqPLaqxuE0tQzc7w/+L/uuK+Hnh3R8AAA' +
            'AAElFTkSuQmCC',

            // 2：支付人数
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAA' +
            'Bx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAhYSURBVHic7Z1tkFV1GcB/z7lcWECRRUNxME0dKptwSs1pphgZYCayGotSuDC9aA3j' +
            'h1gWAnSXjYMskgyx7I6NMdVU1odcp2bqS1k6fXCoRGvEkqh8GcCUSFkIcId77jlPH+7usuAC99x7zn353+f3iT38X565vz3P/Z/zf1lRVQx38WodgJEuJth' +
            'xTLDjmGDHMcGOY4IdxwQ7jgl2HBPsOCbYcUyw45hgxzHBjmOCHccEO44JdhwT7Dgm2HFMsOOYYMcxwY5jgh3HBDuOCXYcE+w4JthxTLDjmGDHMcGOY4Idxw' +
            'Q7zrhSC4pImnE0NL6v3tECcyKY7ykzFU4q7J6W5ee+LyeS7i/Onm4ptbAJficruvQmCVmKsFiVGWMUGRCPL/d2y6+S7NcEp8gqX2cV8iwBcsCsEqqoCFt6N' +
            '0tnUjGY4IRZ2aEzEO5SJadwS1mNCPf2bZbvJhGPCU6Add/SSwZP8DmJWIowV7XiAelAyyVcvXWdHK80tjiCSx5kNQO+ry0DAbej5Ab/x+3ABAVI5pya1vxx' +
            'lgGPJNJaiTS94P5+zfzxBeZGSu5IwCKUKWn1pUqOKgtu2hTd1qW3EJFTWIxyRZW6VbJc07dRDlTUiKXosWlbr+9FyaHkNOT6GoQgFFgMbK1Wh84LXrtBr8w' +
            'XWBxBTiNuqnU8FB+vqibYyRS90tepWmARxe+82xIYASeK53HDjm75e7n1mzJF+762HC3wKY1YqgGfVGV8rWM6F0ODra5q9NXQgodGwPO0OAL+7MgIuM6P31' +
            'RYQpUEN2SKbuvSW4nIodylcHmt4ymHjHBrz2bZXU5dJ1P0al/fFxbIRcUR8HW1jqdShtJ0WYLjUNd38NoNOnN4BIzyoaoHkCIivNGaZabvSxS3bkPfwfdt0' +
            'dbBk3weJXeqwJx6GwEnhSozjkTMBZ5Ks5+6ENy+XScywKfDiNzgCRbW8wg4SSRkCSkLrlmK7u/XzK7nma/CUlHuULg40Q4aABGOtma53PclH6deXafolV36' +
            'UY3I7drDnQrT0bp/qkkNVaYeC1gI/DKtPqoieLWvNwSF4jvgKOQ91eizUQiLo+nUBKeWold16lWhsliFpSg3lhNcMyAw2Dqe6XEW59UsRbf7Oi0q8AWUXEH' +
            '5OCAor4nwQ1X2C7ydZH+ucDzgUiDx1ZeQgGDf10lHQj5DRC7M8wkgC8XfTBE6pmbpK+dZz0iGslP0yvV6m0bco8IdKBedWZaDKszr65Z/JReqMUyqKXrtBr' +
            '3yVMCjUcS8Ym9jFMpwT98DJrceiCW43ddpp/LsUrjmXGVE+FHvA/K7iiMzEqFkwb6v3kDAT88nF0DhB2Nd7+vTCa8c4hsKd6pwPcqkmLE2G6HAv1V4crzQv' +
            'a1bXi2nkZLf8w7kWabKwguVy1zKn8++1t6lH3j5ELsj6FaYbXJLIqPwbpS7g4g9bR36xXIaifMi/4IdCJzsWSWDo6+t8fWKMORphdmxozMAULhY4cdtXZqL' +
            'W7dkwQofLqHYOx6H8gEPA61xgjLOQUTval8vi1Ol9DtYmBA3nvZO/Ygqi+LWM8ZGlcvCgDVx6pQsWJRX4gYUlvCdbcRDifeZlp6ihd/GDUbk/CNuoww03md' +
            'a+h3s0R87GJhcRh3jPChnvjW8ECUL7t0kzyDsjx+SUUtirXcSKesuNmpILMGemuBGI5bgns3ynBB/NG3UjtizSerxGBH3pxGMUwgvi7IHYSDhlmPNrccW7E' +
            'X0R5jgcyHCQU+4u6dbnkyrjx3dKc4H73hQnl/Rof+ktCOEmgvhN5JlSY8vRwF27tTsi68xW+D9wD9aM+yJu0S2UsraNeB5PJZ0II2OCIcnT2bZjiG5bZ06Z' +
            '+9+9hHynIb8REN2DwS81L5e51czrrIER+NsNH026tG2pUPeAmjv1JuBpxSuPaOMclWkPLGiUz9WrbjKEtzny9+AvQnH0rCI8Oa0zOlf+hC+rzr2158qHjr2' +
            'oog0qGRjl93Fp3lmeOXo/Q/qu0pYBz5rdadeXYW4yhecHW/fw6P47/A/3h4sbTIg8qozEVO24G/7sk/ghSSDaVR01IKG7BT2AuEFK2X4a5oxDVPR3luxNA2' +
            'AjFrtsm2NnBThvMcHi/BEjy9H0o+sUsGWpoHi6Ljtm7pg5MIk7gVeH6usCIcz8LVqxVaR4B5fXhLhL0kF08hoyCPt23UiQG+n/GfyRcwWj0eBYwACxwV+ls' +
            '3ywe2b5WC14qp881lxhqmUBXluo1wXvcV3du7U5cuXSzD0TPwlVZV1PjMe8nlDRKq+Fbri8y+y5a30cBJVvrL3AH9Y5evIa1wR0a0b5fVayIUE7uBt3fJqW' +
            '4c+W/ZJ6I6hys1hwIttHfp7FfaI8qYIgUIeIZCIQDPkiQhGrkcE4hV/jiAvIYFkCCIl740jkIAgnETeCwiyEwmAkg8VT2Z/cHEK0QQPMfQWawHKAi3+PPQf' +
            'Q3v1wpFyp+uMmgQcXSYcnpo4WbwU5lFiZN5EjijSDI/TvEdt1DWJCO7bKAcE/pREW0ayJHbImNoUYl2SmOCWDI9rzOUkRvokJrj4KMCupNozkiHZcyDV0nS' +
            '9kajglinpHehllEeigh+6T44l2Z5ROU4e1WucxgQ7jgl2HBPsOCbYcUyw45hgxzHBjmOCHccEO44JdhwT7Dgm2HFMsOOYYMcxwY5jgh3HBDtOuoKVINX2m5' +
            'NY52ylKliFQ2m235TE/ExTFewJT6fZfjMiGu8zTVXwtdP5NbAvzT6ajJAMfXEqpCp4xQo55WX4KrbzMBmE3t5N8mycKqmPondskl2ex9eBU2n35TICv5iWp' +
            'St2vbT+AvjZrOrSG8OQ79lJAPEQ4TBCR2+3jBx/GOfPy/4fPRbxiraa0i0AAAAASUVORK5CYII='
        ]
    }
    if ($p.dataIndex < 3) {

        let item, value, coord, size;

        item = {
            type: 'group',
            silent: true,
            children: [
                {
                    type: 'image',
                    style: {
                        image: customItem.icon[$p.dataIndex],
                        x: (coord = $api.coord( [$p.dataIndex, 0] ) ) [0] + (size = $api.size( [$p.dataIndex, 0] ) ) [0] / 2 - 30,
                        y: coord[1] + 22,
                        width: 60,
                        height: 60
                    }
                },
                {
                    type: 'text',
                    style: {
                        text: '11111111',
                        x: coord[0] + size[0] / 2,
                        y: coord[1] + 97,
                        textAlign: 'center',
                        fontSize: 12,
                        lineHeight: 12,
                        fill: '#626262'
                    }
                }
            ]
        };

        if ($p.dataIndex > 0)
            item.children.push(
                {
                    type: 'text',
                    style: {
                        text: '2222222',
                        x: coord[0],
                        y: coord[1] + 59,
                        textAlign: 'center',
                        fontSize: 12,
                        lineHeight: 12,
                        fill: '#626262'
                    }
                }
            );

        if ($p.dataIndex > 0)
            item.children.push(
                {
                    type: 'rect',
                    shape: {
                        x: coord[0] + 40,
                        y: coord[1] + 64,
                        width: size[0] / 2 - 80,
                        height: 1
                    },
                    style: {
                        fill: '#E6E6E6'
                    }
                }
            );

        if ($p.dataIndex < 2)
            item.children.push(
                {
                    type: 'rect',
                    shape: {
                        x: coord[0] + size[0] / 2 + 40,
                        y: coord[1] + 64,
                        width: size[0] / 2 - 80,
                        height: 1
                    },
                    style: {
                        fill: '#E6E6E6'
                    }
                }
            );

        return item;

    }

}

option = {
    grid: {
        top: 124,
        right: 35,
        bottom: 238,
        left: 85
    },
    xAxis: {
        type: 'category',
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
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 24,
            fontSize: 12,
            lineHeight: 12,
            color: '#626262'
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#E6E6E6'
            }
        }
    },
   legend: {
        selectedMode: false,
        right: 38,
        top: 35,
        itemWidth: 20,
        itemHeight: 20,
        itemGap: 40,
        textStyle: {
            fontSize: 14,
            lineHeight: 14,
            color: '#626262'
        },
        data: [
            { name: '进店人数', icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMjMvMjCBOUfiAAAADUlEQVQImWPIq/r/HwAGKALnPF0oZgAAAABJRU5ErkJggg==' },
            { name: '化妆人数', icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMjMvMjCBOUfiAAAADUlEQVQImWP4P6n3PwAH0AMe8iw47AAAAABJRU5ErkJggg==' },
            { name: '化妆人数2', icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMjMvMjCBOUfiAAAADUlEQVQImWP4f8T/PwAH6gMSdPXsiwAAAABJRU5ErkJggg==' }
        ]
    },
    series: [
        {
            type: 'line',
            showSymbol: false,
            lineStyle: {
                width: 2,
                color: '#6E7AFF'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 1,
                            color: 'rgba(110, 122, 255, 0)'
                        },
                        {
                            offset: 0,
                            color: 'rgba(110, 122, 255, .4)'
                        }
                    ]
                }
            },
            name: '进店人数',
            data: [
                { value: 10, rawValue: 11 },
                { value: 6, rawValue: 7},
                NaN,
                NaN
            ]
        },
        {
            type: 'line',
            symbol: 'circle',
            symbolSize: 14,
            itemStyle: {
                borderWidth: 2,
                borderColor: '#6E7AFF',
                color: '#FFFFFF'
            },
            lineStyle: {
                width: 2,
                color: '#6E7AFF'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 1,
                            color: 'rgba(255, 146, 141, 0)'
                        },
                        {
                            offset: 0,
                            color: 'rgba(255, 146, 141, .4)'
                        }
                    ]
                }
            },
            name: '化妆人数',
            data: [
                NaN,
                { value: 6, rawValue: 7 },
                { value: 4, rawValue: 5},
                NaN,
            ],
        },
        {
            type: 'line',
            showSymbol: false,
            lineStyle: {
                width: 2,
                color: '#6E7AFF'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 1,
                            color: 'rgba(255, 196, 79, 0)'
                        },
                        {
                            offset: 0,
                            color: 'rgba(255, 196, 79, .4)'
                        }
                    ]
                }
            },
            name: '化妆人数2',
            data: [
                NaN,NaN,
                { value: 4, rawValue: 4 },
                { value: 4, rawValue: 4 },
            ],
        },
        {
            type: 'custom',
            renderItem: handleCustomItem,
            data: [ 10,  6, 4,  4 ]
        }
    ]
};