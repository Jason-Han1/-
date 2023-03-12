// 双击可框选放大
// 可改图片
// 可改线条颜色 等等
console.log(window.GraphRelation)
var elDiv = document.createElement('div')
elDiv.setAttribute('id','my-chart')
elDiv.setAttribute('style','height:100%;background-color:black')
document.body.setAttribute('style','height:100%;')
document.querySelector('html').setAttribute('style','height:100%;')
document.body.appendChild(elDiv)

var myChart = GraphRelation(document.getElementById('my-chart'));

var nodes = [
    {
        "id": 0
    },
    {
        "id": 1
    },
    {
        "id": 2
    },
    {
        "id": 3
    },
    {
        "id": 4
    },
    {
        "id": 5
    },
    {
        "id": 6
    },
    {
        "id": 7
    },
    {
        "id": 8
    },
    {
        "id": 9
    },
    {
        "id": 10
    },
    {
        "id": 11
    },
    {
        "id": 12
    },
    {
        "id": 13
    },
    {
        "id": 14
    },
    {
        "id": 15
    },
    {
        "id": 16
    },
    {
        "id": 17
    },
    {
        "id": 18
    },
    {
        "id": 19
    },
    {
        "id": 20
    },
    {
        "id": 21
    },
    {
        "id": 22
    },
    {
        "id": 23
    },
    {
        "id": 24
    },
    {
        "id": 25
    },
    {
        "id": 26
    },
    {
        "id": 27
    },
    {
        "id": 28
    },
    {
        "id": 29
    },
    {
        "id": 30
    },
    {
        "id": 31
    },
    {
        "id": 32
    },
    {
        "id": 33
    },
    {
        "id": 34
    },
    {
        "id": 35
    },
    {
        "id": 36
    },
    {
        "id": 37
    },
    {
        "id": 38
    },
    {
        "id": 39
    },
    {
        "id": 40
    },
    {
        "id": 41
    },
    {
        "id": 42
    },
    {
        "id": 43
    },
    {
        "id": 44
    },
    {
        "id": 45
    },
    {
        "id": 46
    },
    {
        "id": 47
    },
    {
        "id": 48
    },
    {
        "id": 49
    },
    {
        "id": 50
    },
    {
        "id": 51
    },
    {
        "id": 52
    },
    {
        "id": 53
    },
    {
        "id": 54
    },
    {
        "id": 55
    },
    {
        "id": 56
    },
    {
        "id": 57
    },
    {
        "id": 58
    },
    {
        "id": 59
    },
    {
        "id": 60
    },
    {
        "id": 61
    },
    {
        "id": 62
    },
    {
        "id": 63
    },
    {
        "id": 64
    },
    {
        "id": 65
    },
    {
        "id": 66
    },
    {
        "id": 67
    },
    {
        "id": 68
    },
    {
        "id": 69
    },
    {
        "id": 70
    },
    {
        "id": 71
    },
    {
        "id": 72
    },
    {
        "id": 73
    },
    {
        "id": 74
    },
    {
        "id": 75
    },
    {
        "id": 76
    },
    {
        "id": 77
    },
    {
        "id": 78
    },
    {
        "id": 79
    },
    {
        "id": 80
    },
    {
        "id": 81
    },
    {
        "id": 82
    },
    {
        "id": 83
    },
    {
        "id": 84
    },
    {
        "id": 85
    },
    {
        "id": 86
    },
    {
        "id": 87
    },
    {
        "id": 88
    },
    {
        "id": 89
    },
    {
        "id": 90
    },
    {
        "id": 91
    },
    {
        "id": 92
    },
    {
        "id": 93
    },
    {
        "id": 94
    },
    {
        "id": 95
    },
    {
        "id": 96
    },
    {
        "id": 97
    },
    {
        "id": 98
    },
    {
        "id": 99
    },
    {
        "id": 100
    },
    {
        "id": 101
    },
    {
        "id": 102
    },
    {
        "id": 103
    },
    {
        "id": 104
    },
    {
        "id": 105
    },
    {
        "id": 106
    },
    {
        "id": 107
    },
    {
        "id": 108
    },
    {
        "id": 109
    },
    {
        "id": 110
    },
    {
        "id": 111
    },
    {
        "id": 112
    },
    {
        "id": 113
    },
    {
        "id": 114
    },
    {
        "id": 115
    },
    {
        "id": 116
    },
    {
        "id": 117
    },
    {
        "id": 118
    },
    {
        "id": 119
    },
    {
        "id": 120
    },
    {
        "id": 121
    },
    {
        "id": 122
    },
    {
        "id": 123
    },
    {
        "id": 124
    },
    {
        "id": 125
    },
    {
        "id": 126
    },
    {
        "id": 127
    },
    {
        "id": 128
    },
    {
        "id": 129
    },
    {
        "id": 130
    },
    {
        "id": 131
    },
    {
        "id": 132
    },
    {
        "id": 133
    },
    {
        "id": 134
    },
    {
        "id": 135
    },
    {
        "id": 136
    },
    {
        "id": 137
    },
    {
        "id": 138
    },
    {
        "id": 139
    },
    {
        "id": 140
    },
    {
        "id": 141
    },
    {
        "id": 142
    },
    {
        "id": 143
    },
    {
        "id": 144
    },
    {
        "id": 145
    },
    {
        "id": 146
    },
    {
        "id": 147
    },
    {
        "id": 148
    },
    {
        "id": 149
    },
    {
        "id": 150
    },
    {
        "id": 151
    },
    {
        "id": 152
    },
    {
        "id": 153
    },
    {
        "id": 154
    },
    {
        "id": 155
    },
    {
        "id": 156
    },
    {
        "id": 157
    },
    {
        "id": 158
    },
    {
        "id": 159
    },
    {
        "id": 160
    },
    {
        "id": 161
    },
    {
        "id": 162
    },
    {
        "id": 163
    },
    {
        "id": 164
    },
    {
        "id": 165
    },
    {
        "id": 166
    },
    {
        "id": 167
    },
    {
        "id": 168
    },
    {
        "id": 169
    },
    {
        "id": 170
    },
    {
        "id": 171
    },
    {
        "id": 172
    },
    {
        "id": 173
    },
    {
        "id": 174
    },
    {
        "id": 175
    },
    {
        "id": 176
    },
    {
        "id": 177
    },
    {
        "id": 178
    },
    {
        "id": 179
    },
    {
        "id": 180
    },
    {
        "id": 181
    },
    {
        "id": 182
    },
    {
        "id": 183
    },
    {
        "id": 184
    },
    {
        "id": 185
    },
    {
        "id": 186
    },
    {
        "id": 187
    },
    {
        "id": 188
    },
    {
        "id": 189
    },
    {
        "id": 190
    },
    {
        "id": 191
    },
    {
        "id": 192
    },
    {
        "id": 193
    },
    {
        "id": 194
    },
    {
        "id": 195
    },
    {
        "id": 196
    },
    {
        "id": 197
    },
    {
        "id": 198
    },
    {
        "id": 199
    },
    {
        "id": 200
    },
    {
        "id": 201
    },
    {
        "id": 202
    },
    {
        "id": 203
    },
    {
        "id": 204
    },
    {
        "id": 205
    },
    {
        "id": 206
    },
    {
        "id": 207
    },
    {
        "id": 208
    },
    {
        "id": 209
    },
    {
        "id": 210
    },
    {
        "id": 211
    },
    {
        "id": 212
    },
    {
        "id": 213
    },
    {
        "id": 214
    },
    {
        "id": 215
    },
    {
        "id": 216
    },
    {
        "id": 217
    },
    {
        "id": 218
    },
    {
        "id": 219
    },
    {
        "id": 220
    },
    {
        "id": 221
    },
    {
        "id": 222
    },
    {
        "id": 223
    },
    {
        "id": 224
    },
    {
        "id": 225
    },
    {
        "id": 226
    },
    {
        "id": 227
    },
    {
        "id": 228
    },
    {
        "id": 229
    },
    {
        "id": 230
    },
    {
        "id": 231
    },
    {
        "id": 232
    },
    {
        "id": 233
    },
    {
        "id": 234
    },
    {
        "id": 235
    },
    {
        "id": 236
    },
    {
        "id": 237
    },
    {
        "id": 238
    },
    {
        "id": 239
    },
    {
        "id": 240
    },
    {
        "id": 241
    },
    {
        "id": 242
    },
    {
        "id": 243
    },
    {
        "id": 244
    },
    {
        "id": 245
    },
    {
        "id": 246
    },
    {
        "id": 247
    },
    {
        "id": 248
    },
    {
        "id": 249
    },
    {
        "id": 250
    },
    {
        "id": 251
    },
    {
        "id": 252
    },
    {
        "id": 253
    },
    {
        "id": 254
    },
    {
        "id": 255
    },
    {
        "id": 256
    },
    {
        "id": 257
    },
    {
        "id": 258
    },
    {
        "id": 259
    },
    {
        "id": 260
    },
    {
        "id": 261
    },
    {
        "id": 262
    },
    {
        "id": 263
    },
    {
        "id": 264
    },
    {
        "id": 265
    },
    {
        "id": 266
    },
    {
        "id": 267
    },
    {
        "id": 268
    },
    {
        "id": 269
    },
    {
        "id": 270
    },
    {
        "id": 271
    },
    {
        "id": 272
    },
    {
        "id": 273
    },
    {
        "id": 274
    },
    {
        "id": 275
    },
    {
        "id": 276
    },
    {
        "id": 277
    },
    {
        "id": 278
    },
    {
        "id": 279
    },
    {
        "id": 280
    },
    {
        "id": 281
    },
    {
        "id": 282
    },
    {
        "id": 283
    },
    {
        "id": 284
    },
    {
        "id": 285
    },
    {
        "id": 286
    },
    {
        "id": 287
    },
    {
        "id": 288
    },
    {
        "id": 289
    },
    {
        "id": 290
    },
    {
        "id": 291
    },
    {
        "id": 292
    },
    {
        "id": 293
    },
    {
        "id": 294
    },
    {
        "id": 295
    },
    {
        "id": 296
    },
    {
        "id": 297
    },
    {
        "id": 298
    },
    {
        "id": 299
    },
    {
        "id": 300
    },
    {
        "id": 301
    },
    {
        "id": 302
    },
    {
        "id": 303
    },
    {
        "id": 304
    },
    {
        "id": 305
    },
    {
        "id": 306
    },
    {
        "id": 307
    },
    {
        "id": 308
    },
    {
        "id": 309
    },
    {
        "id": 310
    },
    {
        "id": 311
    },
    {
        "id": 312
    },
    {
        "id": 313
    },
    {
        "id": 314
    },
    {
        "id": 315
    },
    {
        "id": 316
    },
    {
        "id": 317
    },
    {
        "id": 318
    },
    {
        "id": 319
    },
    {
        "id": 320
    },
    {
        "id": 321
    },
    {
        "id": 322
    },
    {
        "id": 323
    },
    {
        "id": 324
    },
    {
        "id": 325
    },
    {
        "id": 326
    },
    {
        "id": 327
    },
    {
        "id": 328
    },
    {
        "id": 329
    },
    {
        "id": 330
    },
    {
        "id": 331
    },
    {
        "id": 332
    },
    {
        "id": 333
    },
    {
        "id": 334
    },
    {
        "id": 335
    },
    {
        "id": 336
    },
    {
        "id": 337
    },
    {
        "id": 338
    },
    {
        "id": 339
    },
    {
        "id": 340
    },
    {
        "id": 341
    },
    {
        "id": 342
    },
    {
        "id": 343
    },
    {
        "id": 344
    },
    {
        "id": 345
    },
    {
        "id": 346
    },
    {
        "id": 347
    },
    {
        "id": 348
    },
    {
        "id": 349
    },
    {
        "id": 350
    },
    {
        "id": 351
    },
    {
        "id": 352
    },
    {
        "id": 353
    },
    {
        "id": 354
    },
    {
        "id": 355
    },
    {
        "id": 356
    },
    {
        "id": 357
    },
    {
        "id": 358
    },
    {
        "id": 359
    },
    {
        "id": 360
    },
    {
        "id": 361
    },
    {
        "id": 362
    },
    {
        "id": 363
    },
    {
        "id": 364
    },
    {
        "id": 365
    },
    {
        "id": 366
    },
    {
        "id": 367
    },
    {
        "id": 368
    },
    {
        "id": 369
    },
    {
        "id": 370
    },
    {
        "id": 371
    },
    {
        "id": 372
    },
    {
        "id": 373
    },
    {
        "id": 374
    },
    {
        "id": 375
    },
    {
        "id": 376
    },
    {
        "id": 377
    },
    {
        "id": 378
    },
    {
        "id": 379
    },
    {
        "id": 380
    },
    {
        "id": 381
    },
    {
        "id": 382
    },
    {
        "id": 383
    },
    {
        "id": 384
    },
    {
        "id": 385
    },
    {
        "id": 386
    },
    {
        "id": 387
    },
    {
        "id": 388
    },
    {
        "id": 389
    },
    {
        "id": 390
    },
    {
        "id": 391
    },
    {
        "id": 392
    },
    {
        "id": 393
    },
    {
        "id": 394
    },
    {
        "id": 395
    },
    {
        "id": 396
    },
    {
        "id": 397
    },
    {
        "id": 398
    },
    {
        "id": 399
    },
    {
        "id": 400
    },
    {
        "id": 401
    },
    {
        "id": 402
    },
    {
        "id": 403
    },
    {
        "id": 404
    },
    {
        "id": 405
    },
    {
        "id": 406
    },
    {
        "id": 407
    },
    {
        "id": 408
    },
    {
        "id": 409
    },
    {
        "id": 410
    },
    {
        "id": 411
    },
    {
        "id": 412
    },
    {
        "id": 413
    },
    {
        "id": 414
    },
    {
        "id": 415
    },
    {
        "id": 416
    },
    {
        "id": 417
    },
    {
        "id": 418
    },
    {
        "id": 419
    },
    {
        "id": 420
    },
    {
        "id": 421
    },
    {
        "id": 422
    },
    {
        "id": 423
    },
    {
        "id": 424
    },
    {
        "id": 425
    },
    {
        "id": 426
    },
    {
        "id": 427
    },
    {
        "id": 428
    },
    {
        "id": 429
    },
    {
        "id": 430
    },
    {
        "id": 431
    },
    {
        "id": 432
    },
    {
        "id": 433
    },
    {
        "id": 434
    },
    {
        "id": 435
    },
    {
        "id": 436
    },
    {
        "id": 437
    },
    {
        "id": 438
    },
    {
        "id": 439
    },
    {
        "id": 440
    },
    {
        "id": 441
    },
    {
        "id": 442
    },
    {
        "id": 443
    },
    {
        "id": 444
    },
    {
        "id": 445
    },
    {
        "id": 446
    },
    {
        "id": 447
    },
    {
        "id": 448
    },
    {
        "id": 449
    },
    {
        "id": 450
    },
    {
        "id": 451
    },
    {
        "id": 452
    },
    {
        "id": 453
    },
    {
        "id": 454
    },
    {
        "id": 455
    },
    {
        "id": 456
    },
    {
        "id": 457
    },
    {
        "id": 458
    },
    {
        "id": 459
    },
    {
        "id": 460
    },
    {
        "id": 461
    },
    {
        "id": 462
    },
    {
        "id": 463
    },
    {
        "id": 464
    },
    {
        "id": 465
    },
    {
        "id": 466
    },
    {
        "id": 467
    },
    {
        "id": 468
    },
    {
        "id": 469
    },
    {
        "id": 470
    },
    {
        "id": 471
    },
    {
        "id": 472
    },
    {
        "id": 473
    },
    {
        "id": 474
    },
    {
        "id": 475
    },
    {
        "id": 476
    },
    {
        "id": 477
    },
    {
        "id": 478
    },
    {
        "id": 479
    },
    {
        "id": 480
    },
    {
        "id": 481
    },
    {
        "id": 482
    },
    {
        "id": 483
    },
    {
        "id": 484
    },
    {
        "id": 485
    },
    {
        "id": 486
    },
    {
        "id": 487
    },
    {
        "id": 488
    },
    {
        "id": 489
    },
    {
        "id": 490
    },
    {
        "id": 491
    },
    {
        "id": 492
    },
    {
        "id": 493
    },
    {
        "id": 494
    },
    {
        "id": 495
    },
    {
        "id": 496
    },
    {
        "id": 497
    },
    {
        "id": 498
    },
    {
        "id": 499
    },
    {
        "id": 500
    },
    {
        "id": 501
    },
    {
        "id": 502
    },
    {
        "id": 503
    },
    {
        "id": 504
    },
    {
        "id": 505
    },
    {
        "id": 506
    },
    {
        "id": 507
    },
    {
        "id": 508
    },
    {
        "id": 509
    },
    {
        "id": 510
    },
    {
        "id": 511
    },
    {
        "id": 512
    },
    {
        "id": 513
    },
    {
        "id": 514
    },
    {
        "id": 515
    },
    {
        "id": 516
    },
    {
        "id": 517
    },
    {
        "id": 518
    },
    {
        "id": 519
    },
    {
        "id": 520
    },
    {
        "id": 521
    },
    {
        "id": 522
    },
    {
        "id": 523
    },
    {
        "id": 524
    },
    {
        "id": 525
    },
    {
        "id": 526
    },
    {
        "id": 527
    },
    {
        "id": 528
    },
    {
        "id": 529
    },
    {
        "id": 530
    },
    {
        "id": 531
    },
    {
        "id": 532
    },
    {
        "id": 533
    },
    {
        "id": 534
    },
    {
        "id": 535
    },
    {
        "id": 536
    },
    {
        "id": 537
    },
    {
        "id": 538
    },
    {
        "id": 539
    },
    {
        "id": 540
    },
    {
        "id": 541
    },
    {
        "id": 542
    },
    {
        "id": 543
    },
    {
        "id": 544
    },
    {
        "id": 545
    },
    {
        "id": 546
    },
    {
        "id": 547
    },
    {
        "id": 548
    },
    {
        "id": 549
    },
    {
        "id": 550
    },
    {
        "id": 551
    },
    {
        "id": 552
    },
    {
        "id": 553
    },
    {
        "id": 554
    },
    {
        "id": 555
    },
    {
        "id": 556
    },
    {
        "id": 557
    },
    {
        "id": 558
    },
    {
        "id": 559
    },
    {
        "id": 560
    },
    {
        "id": 561
    },
    {
        "id": 562
    },
    {
        "id": 563
    },
    {
        "id": 564
    },
    {
        "id": 565
    },
    {
        "id": 566
    },
    {
        "id": 567
    },
    {
        "id": 568
    },
    {
        "id": 569
    },
    {
        "id": 570
    },
    {
        "id": 571
    },
    {
        "id": 572
    },
    {
        "id": 573
    },
    {
        "id": 574
    },
    {
        "id": 575
    },
    {
        "id": 576
    },
    {
        "id": 577
    },
    {
        "id": 578
    },
    {
        "id": 579
    },
    {
        "id": 580
    },
    {
        "id": 581
    },
    {
        "id": 582
    },
    {
        "id": 583
    },
    {
        "id": 584
    },
    {
        "id": 585
    },
    {
        "id": 586
    },
    {
        "id": 587
    },
    {
        "id": 588
    },
    {
        "id": 589
    },
    {
        "id": 590
    },
    {
        "id": 591
    },
    {
        "id": 592
    },
    {
        "id": 593
    },
    {
        "id": 594
    },
    {
        "id": 595
    },
    {
        "id": 596
    },
    {
        "id": 597
    },
    {
        "id": 598
    },
    {
        "id": 599
    },
    {
        "id": 600
    }
];

var links = [
    {
        "source": 0,
        "target": 1
    },
    {
        "source": 1,
        "target": 2
    },
    {
        "source": 1,
        "target": 3
    },
    {
        "source": 1,
        "target": 4
    },
    {
        "source": 2,
        "target": 5
    },
    {
        "source": 2,
        "target": 6
    },
    {
        "source": 2,
        "target": 7
    },
    {
        "source": 2,
        "target": 8
    },
    {
        "source": 2,
        "target": 9
    },
    {
        "source": 3,
        "target": 10
    },
    {
        "source": 3,
        "target": 11
    },
    {
        "source": 3,
        "target": 12
    },
    {
        "source": 3,
        "target": 13
    },
    {
        "source": 3,
        "target": 14
    },
    {
        "source": 3,
        "target": 15
    },
    {
        "source": 3,
        "target": 16
    },
    {
        "source": 4,
        "target": 17
    },
    {
        "source": 4,
        "target": 18
    },
    {
        "source": 4,
        "target": 19
    },
    {
        "source": 4,
        "target": 20
    },
    {
        "source": 4,
        "target": 21
    },
    {
        "source": 4,
        "target": 22
    },
    {
        "source": 4,
        "target": 23
    },
    {
        "source": 4,
        "target": 24
    },
    {
        "source": 4,
        "target": 25
    },
    {
        "source": 5,
        "target": 26
    },
    {
        "source": 5,
        "target": 27
    },
    {
        "source": 5,
        "target": 28
    },
    {
        "source": 5,
        "target": 29
    },
    {
        "source": 5,
        "target": 30
    },
    {
        "source": 5,
        "target": 31
    },
    {
        "source": 5,
        "target": 32
    },
    {
        "source": 5,
        "target": 33
    },
    {
        "source": 5,
        "target": 34
    },
    {
        "source": 5,
        "target": 35
    },
    {
        "source": 5,
        "target": 36
    },
    {
        "source": 6,
        "target": 37
    },
    {
        "source": 6,
        "target": 38
    },
    {
        "source": 6,
        "target": 39
    },
    {
        "source": 6,
        "target": 40
    },
    {
        "source": 6,
        "target": 41
    },
    {
        "source": 6,
        "target": 42
    },
    {
        "source": 6,
        "target": 43
    },
    {
        "source": 6,
        "target": 44
    },
    {
        "source": 6,
        "target": 45
    },
    {
        "source": 6,
        "target": 46
    },
    {
        "source": 6,
        "target": 47
    },
    {
        "source": 6,
        "target": 48
    },
    {
        "source": 6,
        "target": 49
    },
    {
        "source": 7,
        "target": 50
    },
    {
        "source": 7,
        "target": 51
    },
    {
        "source": 7,
        "target": 52
    },
    {
        "source": 7,
        "target": 53
    },
    {
        "source": 7,
        "target": 54
    },
    {
        "source": 7,
        "target": 55
    },
    {
        "source": 7,
        "target": 56
    },
    {
        "source": 7,
        "target": 57
    },
    {
        "source": 7,
        "target": 58
    },
    {
        "source": 7,
        "target": 59
    },
    {
        "source": 7,
        "target": 60
    },
    {
        "source": 7,
        "target": 61
    },
    {
        "source": 7,
        "target": 62
    },
    {
        "source": 7,
        "target": 63
    },
    {
        "source": 7,
        "target": 64
    },
    {
        "source": 8,
        "target": 65
    },
    {
        "source": 8,
        "target": 66
    },
    {
        "source": 8,
        "target": 67
    },
    {
        "source": 8,
        "target": 68
    },
    {
        "source": 8,
        "target": 69
    },
    {
        "source": 8,
        "target": 70
    },
    {
        "source": 8,
        "target": 71
    },
    {
        "source": 8,
        "target": 72
    },
    {
        "source": 8,
        "target": 73
    },
    {
        "source": 8,
        "target": 74
    },
    {
        "source": 8,
        "target": 75
    },
    {
        "source": 8,
        "target": 76
    },
    {
        "source": 8,
        "target": 77
    },
    {
        "source": 8,
        "target": 78
    },
    {
        "source": 8,
        "target": 79
    },
    {
        "source": 8,
        "target": 80
    },
    {
        "source": 8,
        "target": 81
    },
    {
        "source": 9,
        "target": 82
    },
    {
        "source": 9,
        "target": 83
    },
    {
        "source": 9,
        "target": 84
    },
    {
        "source": 9,
        "target": 85
    },
    {
        "source": 9,
        "target": 86
    },
    {
        "source": 9,
        "target": 87
    },
    {
        "source": 9,
        "target": 88
    },
    {
        "source": 9,
        "target": 89
    },
    {
        "source": 9,
        "target": 90
    },
    {
        "source": 9,
        "target": 91
    },
    {
        "source": 9,
        "target": 92
    },
    {
        "source": 9,
        "target": 93
    },
    {
        "source": 9,
        "target": 94
    },
    {
        "source": 9,
        "target": 95
    },
    {
        "source": 9,
        "target": 96
    },
    {
        "source": 9,
        "target": 97
    },
    {
        "source": 9,
        "target": 98
    },
    {
        "source": 9,
        "target": 99
    },
    {
        "source": 9,
        "target": 100
    },
    {
        "source": 10,
        "target": 101
    },
    {
        "source": 10,
        "target": 102
    },
    {
        "source": 10,
        "target": 103
    },
    {
        "source": 10,
        "target": 104
    },
    {
        "source": 10,
        "target": 105
    },
    {
        "source": 10,
        "target": 106
    },
    {
        "source": 10,
        "target": 107
    },
    {
        "source": 10,
        "target": 108
    },
    {
        "source": 10,
        "target": 109
    },
    {
        "source": 10,
        "target": 110
    },
    {
        "source": 10,
        "target": 111
    },
    {
        "source": 10,
        "target": 112
    },
    {
        "source": 10,
        "target": 113
    },
    {
        "source": 10,
        "target": 114
    },
    {
        "source": 10,
        "target": 115
    },
    {
        "source": 10,
        "target": 116
    },
    {
        "source": 10,
        "target": 117
    },
    {
        "source": 10,
        "target": 118
    },
    {
        "source": 10,
        "target": 119
    },
    {
        "source": 10,
        "target": 120
    },
    {
        "source": 10,
        "target": 121
    },
    {
        "source": 11,
        "target": 122
    },
    {
        "source": 11,
        "target": 123
    },
    {
        "source": 11,
        "target": 124
    },
    {
        "source": 11,
        "target": 125
    },
    {
        "source": 11,
        "target": 126
    },
    {
        "source": 11,
        "target": 127
    },
    {
        "source": 11,
        "target": 128
    },
    {
        "source": 11,
        "target": 129
    },
    {
        "source": 11,
        "target": 130
    },
    {
        "source": 11,
        "target": 131
    },
    {
        "source": 11,
        "target": 132
    },
    {
        "source": 11,
        "target": 133
    },
    {
        "source": 11,
        "target": 134
    },
    {
        "source": 11,
        "target": 135
    },
    {
        "source": 11,
        "target": 136
    },
    {
        "source": 11,
        "target": 137
    },
    {
        "source": 11,
        "target": 138
    },
    {
        "source": 11,
        "target": 139
    },
    {
        "source": 11,
        "target": 140
    },
    {
        "source": 11,
        "target": 141
    },
    {
        "source": 11,
        "target": 142
    },
    {
        "source": 11,
        "target": 143
    },
    {
        "source": 11,
        "target": 144
    },
    {
        "source": 12,
        "target": 145
    },
    {
        "source": 12,
        "target": 146
    },
    {
        "source": 12,
        "target": 147
    },
    {
        "source": 12,
        "target": 148
    },
    {
        "source": 12,
        "target": 149
    },
    {
        "source": 12,
        "target": 150
    },
    {
        "source": 12,
        "target": 151
    },
    {
        "source": 12,
        "target": 152
    },
    {
        "source": 12,
        "target": 153
    },
    {
        "source": 12,
        "target": 154
    },
    {
        "source": 12,
        "target": 155
    },
    {
        "source": 12,
        "target": 156
    },
    {
        "source": 12,
        "target": 157
    },
    {
        "source": 12,
        "target": 158
    },
    {
        "source": 12,
        "target": 159
    },
    {
        "source": 12,
        "target": 160
    },
    {
        "source": 12,
        "target": 161
    },
    {
        "source": 12,
        "target": 162
    },
    {
        "source": 12,
        "target": 163
    },
    {
        "source": 12,
        "target": 164
    },
    {
        "source": 12,
        "target": 165
    },
    {
        "source": 12,
        "target": 166
    },
    {
        "source": 12,
        "target": 167
    },
    {
        "source": 12,
        "target": 168
    },
    {
        "source": 12,
        "target": 169
    },
    {
        "source": 13,
        "target": 170
    },
    {
        "source": 13,
        "target": 171
    },
    {
        "source": 13,
        "target": 172
    },
    {
        "source": 13,
        "target": 173
    },
    {
        "source": 13,
        "target": 174
    },
    {
        "source": 13,
        "target": 175
    },
    {
        "source": 13,
        "target": 176
    },
    {
        "source": 13,
        "target": 177
    },
    {
        "source": 13,
        "target": 178
    },
    {
        "source": 13,
        "target": 179
    },
    {
        "source": 13,
        "target": 180
    },
    {
        "source": 13,
        "target": 181
    },
    {
        "source": 13,
        "target": 182
    },
    {
        "source": 13,
        "target": 183
    },
    {
        "source": 13,
        "target": 184
    },
    {
        "source": 13,
        "target": 185
    },
    {
        "source": 13,
        "target": 186
    },
    {
        "source": 13,
        "target": 187
    },
    {
        "source": 13,
        "target": 188
    },
    {
        "source": 13,
        "target": 189
    },
    {
        "source": 13,
        "target": 190
    },
    {
        "source": 13,
        "target": 191
    },
    {
        "source": 13,
        "target": 192
    },
    {
        "source": 13,
        "target": 193
    },
    {
        "source": 13,
        "target": 194
    },
    {
        "source": 13,
        "target": 195
    },
    {
        "source": 13,
        "target": 196
    },
    {
        "source": 14,
        "target": 197
    },
    {
        "source": 14,
        "target": 198
    },
    {
        "source": 14,
        "target": 199
    },
    {
        "source": 14,
        "target": 200
    },
    {
        "source": 14,
        "target": 201
    },
    {
        "source": 14,
        "target": 202
    },
    {
        "source": 14,
        "target": 203
    },
    {
        "source": 14,
        "target": 204
    },
    {
        "source": 14,
        "target": 205
    },
    {
        "source": 14,
        "target": 206
    },
    {
        "source": 14,
        "target": 207
    },
    {
        "source": 14,
        "target": 208
    },
    {
        "source": 14,
        "target": 209
    },
    {
        "source": 14,
        "target": 210
    },
    {
        "source": 14,
        "target": 211
    },
    {
        "source": 14,
        "target": 212
    },
    {
        "source": 14,
        "target": 213
    },
    {
        "source": 14,
        "target": 214
    },
    {
        "source": 14,
        "target": 215
    },
    {
        "source": 14,
        "target": 216
    },
    {
        "source": 14,
        "target": 217
    },
    {
        "source": 14,
        "target": 218
    },
    {
        "source": 14,
        "target": 219
    },
    {
        "source": 14,
        "target": 220
    },
    {
        "source": 14,
        "target": 221
    },
    {
        "source": 14,
        "target": 222
    },
    {
        "source": 14,
        "target": 223
    },
    {
        "source": 14,
        "target": 224
    },
    {
        "source": 14,
        "target": 225
    },
    {
        "source": 15,
        "target": 226
    },
    {
        "source": 15,
        "target": 227
    },
    {
        "source": 15,
        "target": 228
    },
    {
        "source": 15,
        "target": 229
    },
    {
        "source": 15,
        "target": 230
    },
    {
        "source": 15,
        "target": 231
    },
    {
        "source": 15,
        "target": 232
    },
    {
        "source": 15,
        "target": 233
    },
    {
        "source": 15,
        "target": 234
    },
    {
        "source": 15,
        "target": 235
    },
    {
        "source": 15,
        "target": 236
    },
    {
        "source": 15,
        "target": 237
    },
    {
        "source": 15,
        "target": 238
    },
    {
        "source": 15,
        "target": 239
    },
    {
        "source": 15,
        "target": 240
    },
    {
        "source": 15,
        "target": 241
    },
    {
        "source": 15,
        "target": 242
    },
    {
        "source": 15,
        "target": 243
    },
    {
        "source": 15,
        "target": 244
    },
    {
        "source": 15,
        "target": 245
    },
    {
        "source": 15,
        "target": 246
    },
    {
        "source": 15,
        "target": 247
    },
    {
        "source": 15,
        "target": 248
    },
    {
        "source": 15,
        "target": 249
    },
    {
        "source": 15,
        "target": 250
    },
    {
        "source": 15,
        "target": 251
    },
    {
        "source": 15,
        "target": 252
    },
    {
        "source": 15,
        "target": 253
    },
    {
        "source": 15,
        "target": 254
    },
    {
        "source": 15,
        "target": 255
    },
    {
        "source": 15,
        "target": 256
    },
    {
        "source": 16,
        "target": 257
    },
    {
        "source": 16,
        "target": 258
    },
    {
        "source": 16,
        "target": 259
    },
    {
        "source": 16,
        "target": 260
    },
    {
        "source": 16,
        "target": 261
    },
    {
        "source": 16,
        "target": 262
    },
    {
        "source": 16,
        "target": 263
    },
    {
        "source": 16,
        "target": 264
    },
    {
        "source": 16,
        "target": 265
    },
    {
        "source": 16,
        "target": 266
    },
    {
        "source": 16,
        "target": 267
    },
    {
        "source": 16,
        "target": 268
    },
    {
        "source": 16,
        "target": 269
    },
    {
        "source": 16,
        "target": 270
    },
    {
        "source": 16,
        "target": 271
    },
    {
        "source": 16,
        "target": 272
    },
    {
        "source": 16,
        "target": 273
    },
    {
        "source": 16,
        "target": 274
    },
    {
        "source": 16,
        "target": 275
    },
    {
        "source": 16,
        "target": 276
    },
    {
        "source": 16,
        "target": 277
    },
    {
        "source": 16,
        "target": 278
    },
    {
        "source": 16,
        "target": 279
    },
    {
        "source": 16,
        "target": 280
    },
    {
        "source": 16,
        "target": 281
    },
    {
        "source": 16,
        "target": 282
    },
    {
        "source": 16,
        "target": 283
    },
    {
        "source": 16,
        "target": 284
    },
    {
        "source": 16,
        "target": 285
    },
    {
        "source": 16,
        "target": 286
    },
    {
        "source": 16,
        "target": 287
    },
    {
        "source": 16,
        "target": 288
    },
    {
        "source": 16,
        "target": 289
    },
    {
        "source": 17,
        "target": 290
    },
    {
        "source": 17,
        "target": 291
    },
    {
        "source": 17,
        "target": 292
    },
    {
        "source": 17,
        "target": 293
    },
    {
        "source": 17,
        "target": 294
    },
    {
        "source": 17,
        "target": 295
    },
    {
        "source": 17,
        "target": 296
    },
    {
        "source": 17,
        "target": 297
    },
    {
        "source": 17,
        "target": 298
    },
    {
        "source": 17,
        "target": 299
    },
    {
        "source": 17,
        "target": 300
    },
    {
        "source": 17,
        "target": 301
    },
    {
        "source": 17,
        "target": 302
    },
    {
        "source": 17,
        "target": 303
    },
    {
        "source": 17,
        "target": 304
    },
    {
        "source": 17,
        "target": 305
    },
    {
        "source": 17,
        "target": 306
    },
    {
        "source": 17,
        "target": 307
    },
    {
        "source": 17,
        "target": 308
    },
    {
        "source": 17,
        "target": 309
    },
    {
        "source": 17,
        "target": 310
    },
    {
        "source": 17,
        "target": 311
    },
    {
        "source": 17,
        "target": 312
    },
    {
        "source": 17,
        "target": 313
    },
    {
        "source": 17,
        "target": 314
    },
    {
        "source": 17,
        "target": 315
    },
    {
        "source": 17,
        "target": 316
    },
    {
        "source": 17,
        "target": 317
    },
    {
        "source": 17,
        "target": 318
    },
    {
        "source": 17,
        "target": 319
    },
    {
        "source": 17,
        "target": 320
    },
    {
        "source": 17,
        "target": 321
    },
    {
        "source": 17,
        "target": 322
    },
    {
        "source": 17,
        "target": 323
    },
    {
        "source": 17,
        "target": 324
    },
    {
        "source": 18,
        "target": 325
    },
    {
        "source": 18,
        "target": 326
    },
    {
        "source": 18,
        "target": 327
    },
    {
        "source": 18,
        "target": 328
    },
    {
        "source": 18,
        "target": 329
    },
    {
        "source": 18,
        "target": 330
    },
    {
        "source": 18,
        "target": 331
    },
    {
        "source": 18,
        "target": 332
    },
    {
        "source": 18,
        "target": 333
    },
    {
        "source": 18,
        "target": 334
    },
    {
        "source": 18,
        "target": 335
    },
    {
        "source": 18,
        "target": 336
    },
    {
        "source": 18,
        "target": 337
    },
    {
        "source": 18,
        "target": 338
    },
    {
        "source": 18,
        "target": 339
    },
    {
        "source": 18,
        "target": 340
    },
    {
        "source": 18,
        "target": 341
    },
    {
        "source": 18,
        "target": 342
    },
    {
        "source": 18,
        "target": 343
    },
    {
        "source": 18,
        "target": 344
    },
    {
        "source": 18,
        "target": 345
    },
    {
        "source": 18,
        "target": 346
    },
    {
        "source": 18,
        "target": 347
    },
    {
        "source": 18,
        "target": 348
    },
    {
        "source": 18,
        "target": 349
    },
    {
        "source": 18,
        "target": 350
    },
    {
        "source": 18,
        "target": 351
    },
    {
        "source": 18,
        "target": 352
    },
    {
        "source": 18,
        "target": 353
    },
    {
        "source": 18,
        "target": 354
    },
    {
        "source": 18,
        "target": 355
    },
    {
        "source": 18,
        "target": 356
    },
    {
        "source": 18,
        "target": 357
    },
    {
        "source": 18,
        "target": 358
    },
    {
        "source": 18,
        "target": 359
    },
    {
        "source": 18,
        "target": 360
    },
    {
        "source": 18,
        "target": 361
    },
    {
        "source": 19,
        "target": 362
    },
    {
        "source": 19,
        "target": 363
    },
    {
        "source": 19,
        "target": 364
    },
    {
        "source": 19,
        "target": 365
    },
    {
        "source": 19,
        "target": 366
    },
    {
        "source": 19,
        "target": 367
    },
    {
        "source": 19,
        "target": 368
    },
    {
        "source": 19,
        "target": 369
    },
    {
        "source": 19,
        "target": 370
    },
    {
        "source": 19,
        "target": 371
    },
    {
        "source": 19,
        "target": 372
    },
    {
        "source": 19,
        "target": 373
    },
    {
        "source": 19,
        "target": 374
    },
    {
        "source": 19,
        "target": 375
    },
    {
        "source": 19,
        "target": 376
    },
    {
        "source": 19,
        "target": 377
    },
    {
        "source": 19,
        "target": 378
    },
    {
        "source": 19,
        "target": 379
    },
    {
        "source": 19,
        "target": 380
    },
    {
        "source": 19,
        "target": 381
    },
    {
        "source": 19,
        "target": 382
    },
    {
        "source": 19,
        "target": 383
    },
    {
        "source": 19,
        "target": 384
    },
    {
        "source": 19,
        "target": 385
    },
    {
        "source": 19,
        "target": 386
    },
    {
        "source": 19,
        "target": 387
    },
    {
        "source": 19,
        "target": 388
    },
    {
        "source": 19,
        "target": 389
    },
    {
        "source": 19,
        "target": 390
    },
    {
        "source": 19,
        "target": 391
    },
    {
        "source": 19,
        "target": 392
    },
    {
        "source": 19,
        "target": 393
    },
    {
        "source": 19,
        "target": 394
    },
    {
        "source": 19,
        "target": 395
    },
    {
        "source": 19,
        "target": 396
    },
    {
        "source": 19,
        "target": 397
    },
    {
        "source": 19,
        "target": 398
    },
    {
        "source": 19,
        "target": 399
    },
    {
        "source": 19,
        "target": 400
    },
    {
        "source": 20,
        "target": 401
    },
    {
        "source": 20,
        "target": 402
    },
    {
        "source": 20,
        "target": 403
    },
    {
        "source": 20,
        "target": 404
    },
    {
        "source": 20,
        "target": 405
    },
    {
        "source": 20,
        "target": 406
    },
    {
        "source": 20,
        "target": 407
    },
    {
        "source": 20,
        "target": 408
    },
    {
        "source": 20,
        "target": 409
    },
    {
        "source": 20,
        "target": 410
    },
    {
        "source": 20,
        "target": 411
    },
    {
        "source": 20,
        "target": 412
    },
    {
        "source": 20,
        "target": 413
    },
    {
        "source": 20,
        "target": 414
    },
    {
        "source": 20,
        "target": 415
    },
    {
        "source": 20,
        "target": 416
    },
    {
        "source": 20,
        "target": 417
    },
    {
        "source": 20,
        "target": 418
    },
    {
        "source": 20,
        "target": 419
    },
    {
        "source": 20,
        "target": 420
    },
    {
        "source": 20,
        "target": 421
    },
    {
        "source": 20,
        "target": 422
    },
    {
        "source": 20,
        "target": 423
    },
    {
        "source": 20,
        "target": 424
    },
    {
        "source": 20,
        "target": 425
    },
    {
        "source": 20,
        "target": 426
    },
    {
        "source": 20,
        "target": 427
    },
    {
        "source": 20,
        "target": 428
    },
    {
        "source": 20,
        "target": 429
    },
    {
        "source": 20,
        "target": 430
    },
    {
        "source": 20,
        "target": 431
    },
    {
        "source": 20,
        "target": 432
    },
    {
        "source": 20,
        "target": 433
    },
    {
        "source": 20,
        "target": 434
    },
    {
        "source": 20,
        "target": 435
    },
    {
        "source": 20,
        "target": 436
    },
    {
        "source": 20,
        "target": 437
    },
    {
        "source": 20,
        "target": 438
    },
    {
        "source": 20,
        "target": 439
    },
    {
        "source": 20,
        "target": 440
    },
    {
        "source": 20,
        "target": 441
    },
    {
        "source": 21,
        "target": 442
    },
    {
        "source": 21,
        "target": 443
    },
    {
        "source": 21,
        "target": 444
    },
    {
        "source": 21,
        "target": 445
    },
    {
        "source": 21,
        "target": 446
    },
    {
        "source": 21,
        "target": 447
    },
    {
        "source": 21,
        "target": 448
    },
    {
        "source": 21,
        "target": 449
    },
    {
        "source": 21,
        "target": 450
    },
    {
        "source": 21,
        "target": 451
    },
    {
        "source": 21,
        "target": 452
    },
    {
        "source": 21,
        "target": 453
    },
    {
        "source": 21,
        "target": 454
    },
    {
        "source": 21,
        "target": 455
    },
    {
        "source": 21,
        "target": 456
    },
    {
        "source": 21,
        "target": 457
    },
    {
        "source": 21,
        "target": 458
    },
    {
        "source": 21,
        "target": 459
    },
    {
        "source": 21,
        "target": 460
    },
    {
        "source": 21,
        "target": 461
    },
    {
        "source": 21,
        "target": 462
    },
    {
        "source": 21,
        "target": 463
    },
    {
        "source": 21,
        "target": 464
    },
    {
        "source": 21,
        "target": 465
    },
    {
        "source": 21,
        "target": 466
    },
    {
        "source": 21,
        "target": 467
    },
    {
        "source": 21,
        "target": 468
    },
    {
        "source": 21,
        "target": 469
    },
    {
        "source": 21,
        "target": 470
    },
    {
        "source": 21,
        "target": 471
    },
    {
        "source": 21,
        "target": 472
    },
    {
        "source": 21,
        "target": 473
    },
    {
        "source": 21,
        "target": 474
    },
    {
        "source": 21,
        "target": 475
    },
    {
        "source": 21,
        "target": 476
    },
    {
        "source": 21,
        "target": 477
    },
    {
        "source": 21,
        "target": 478
    },
    {
        "source": 21,
        "target": 479
    },
    {
        "source": 21,
        "target": 480
    },
    {
        "source": 21,
        "target": 481
    },
    {
        "source": 21,
        "target": 482
    },
    {
        "source": 21,
        "target": 483
    },
    {
        "source": 21,
        "target": 484
    },
    {
        "source": 22,
        "target": 485
    },
    {
        "source": 22,
        "target": 486
    },
    {
        "source": 22,
        "target": 487
    },
    {
        "source": 22,
        "target": 488
    },
    {
        "source": 22,
        "target": 489
    },
    {
        "source": 22,
        "target": 490
    },
    {
        "source": 22,
        "target": 491
    },
    {
        "source": 22,
        "target": 492
    },
    {
        "source": 22,
        "target": 493
    },
    {
        "source": 22,
        "target": 494
    },
    {
        "source": 22,
        "target": 495
    },
    {
        "source": 22,
        "target": 496
    },
    {
        "source": 22,
        "target": 497
    },
    {
        "source": 22,
        "target": 498
    },
    {
        "source": 22,
        "target": 499
    },
    {
        "source": 22,
        "target": 500
    },
    {
        "source": 22,
        "target": 501
    },
    {
        "source": 22,
        "target": 502
    },
    {
        "source": 22,
        "target": 503
    },
    {
        "source": 22,
        "target": 504
    },
    {
        "source": 22,
        "target": 505
    },
    {
        "source": 22,
        "target": 506
    },
    {
        "source": 22,
        "target": 507
    },
    {
        "source": 22,
        "target": 508
    },
    {
        "source": 22,
        "target": 509
    },
    {
        "source": 22,
        "target": 510
    },
    {
        "source": 22,
        "target": 511
    },
    {
        "source": 22,
        "target": 512
    },
    {
        "source": 22,
        "target": 513
    },
    {
        "source": 22,
        "target": 514
    },
    {
        "source": 22,
        "target": 515
    },
    {
        "source": 22,
        "target": 516
    },
    {
        "source": 22,
        "target": 517
    },
    {
        "source": 22,
        "target": 518
    },
    {
        "source": 22,
        "target": 519
    },
    {
        "source": 22,
        "target": 520
    },
    {
        "source": 22,
        "target": 521
    },
    {
        "source": 22,
        "target": 522
    },
    {
        "source": 22,
        "target": 523
    },
    {
        "source": 22,
        "target": 524
    },
    {
        "source": 22,
        "target": 525
    },
    {
        "source": 22,
        "target": 526
    },
    {
        "source": 22,
        "target": 527
    },
    {
        "source": 22,
        "target": 528
    },
    {
        "source": 22,
        "target": 529
    },
    {
        "source": 23,
        "target": 530
    },
    {
        "source": 23,
        "target": 531
    },
    {
        "source": 23,
        "target": 532
    },
    {
        "source": 23,
        "target": 533
    },
    {
        "source": 23,
        "target": 534
    },
    {
        "source": 23,
        "target": 535
    },
    {
        "source": 23,
        "target": 536
    },
    {
        "source": 23,
        "target": 537
    },
    {
        "source": 23,
        "target": 538
    },
    {
        "source": 23,
        "target": 539
    },
    {
        "source": 23,
        "target": 540
    },
    {
        "source": 23,
        "target": 541
    },
    {
        "source": 23,
        "target": 542
    },
    {
        "source": 23,
        "target": 543
    },
    {
        "source": 23,
        "target": 544
    },
    {
        "source": 23,
        "target": 545
    },
    {
        "source": 23,
        "target": 546
    },
    {
        "source": 23,
        "target": 547
    },
    {
        "source": 23,
        "target": 548
    },
    {
        "source": 23,
        "target": 549
    },
    {
        "source": 23,
        "target": 550
    },
    {
        "source": 23,
        "target": 551
    },
    {
        "source": 23,
        "target": 552
    },
    {
        "source": 23,
        "target": 553
    },
    {
        "source": 23,
        "target": 554
    },
    {
        "source": 23,
        "target": 555
    },
    {
        "source": 23,
        "target": 556
    },
    {
        "source": 23,
        "target": 557
    },
    {
        "source": 23,
        "target": 558
    },
    {
        "source": 23,
        "target": 559
    },
    {
        "source": 23,
        "target": 560
    },
    {
        "source": 23,
        "target": 561
    },
    {
        "source": 23,
        "target": 562
    },
    {
        "source": 23,
        "target": 563
    },
    {
        "source": 23,
        "target": 564
    },
    {
        "source": 23,
        "target": 565
    },
    {
        "source": 23,
        "target": 566
    },
    {
        "source": 23,
        "target": 567
    },
    {
        "source": 23,
        "target": 568
    },
    {
        "source": 23,
        "target": 569
    },
    {
        "source": 23,
        "target": 570
    },
    {
        "source": 23,
        "target": 571
    },
    {
        "source": 23,
        "target": 572
    },
    {
        "source": 23,
        "target": 573
    },
    {
        "source": 23,
        "target": 574
    },
    {
        "source": 23,
        "target": 575
    },
    {
        "source": 23,
        "target": 576
    },
    {
        "source": 24,
        "target": 577
    },
    {
        "source": 24,
        "target": 578
    },
    {
        "source": 24,
        "target": 579
    },
    {
        "source": 24,
        "target": 580
    },
    {
        "source": 24,
        "target": 581
    },
    {
        "source": 24,
        "target": 582
    },
    {
        "source": 24,
        "target": 583
    },
    {
        "source": 24,
        "target": 584
    },
    {
        "source": 24,
        "target": 585
    },
    {
        "source": 24,
        "target": 586
    },
    {
        "source": 24,
        "target": 587
    },
    {
        "source": 24,
        "target": 588
    },
    {
        "source": 24,
        "target": 589
    },
    {
        "source": 24,
        "target": 590
    },
    {
        "source": 24,
        "target": 591
    },
    {
        "source": 24,
        "target": 592
    },
    {
        "source": 24,
        "target": 593
    },
    {
        "source": 24,
        "target": 594
    },
    {
        "source": 24,
        "target": 595
    },
    {
        "source": 24,
        "target": 596
    },
    {
        "source": 24,
        "target": 597
    },
    {
        "source": 24,
        "target": 598
    },
    {
        "source": 24,
        "target": 599
    },
    {
        "source": 24,
        "target": 600
    }
];

var nodes1 = [
    {
        "id": "Myriel",
        symbol: 'rect',
        symbolSize: [60, 30],//宽,高
        itemStyle: {
            borderColor: 'white'
        }
    },
    {
        "id": "Napoleon",
        symbol: 'https://cdn.oeyes.com/m/images/home/logo.gif',
        label: {
            show: true,
            color: 'yellow',
            position: 'right',
            formatter: function (params) {
                return '1111111111111111';
            }
        }
    },
    { "id": "Mlle.Baptistine" },
    { "id": "Mme.Magloire" },
    { "id": "CountessdeLo" },
    { "id": "Geborand" },
    { "id": "Champtercier" },
    { "id": "Cravatte" },
    { "id": "Count" },
    { "id": "OldMan" },
    { "id": "Labarre" },
    { "id": "Valjean" },
    { "id": "Marguerite" },
    { "id": "Mme.deR" },
    { "id": "Isabeau" },
    { "id": "Gervais" },
    { "id": "Tholomyes" },
    { "id": "Listolier" },
    { "id": "Fameuil" },
    { "id": "Blacheville" },
    { "id": "Favourite" },
    { "id": "Dahlia" },
    { "id": "Zephine" },
    { "id": "Fantine" },
    { "id": "Mme.Thenardier" },
    { "id": "Thenardier" },
    { "id": "Cosette" },
    { "id": "Javert" },
    { "id": "Fauchelevent" },
    { "id": "Bamatabois" },
    { "id": "Perpetue" },
    { "id": "Simplice" },
    { "id": "Scaufflaire" },
    { "id": "Woman1" },
    { "id": "Judge" },
    { "id": "Champmathieu" },
    { "id": "Brevet" },
    { "id": "Chenildieu" },
    { "id": "Cochepaille" },
    { "id": "Pontmercy" },
    { "id": "Boulatruelle" },
    { "id": "Eponine" },
    { "id": "Anzelma" },
    { "id": "Woman2" },
    { "id": "MotherInnocent" },
    { "id": "Gribier" },
    { "id": "Jondrette" },
    { "id": "Mme.Burgon" },
    { "id": "Gavroche" },
    { "id": "Gillenormand" },
    { "id": "Magnon" },
    { "id": "Mlle.Gillenormand" },
    { "id": "Mme.Pontmercy" },
    { "id": "Mlle.Vaubois" },
    { "id": "Lt.Gillenormand" },
    { "id": "Marius" },
    { "id": "BaronessT" },
    { "id": "Mabeuf" },
    { "id": "Enjolras" },
    { "id": "Combeferre" },
    { "id": "Prouvaire" },
    { "id": "Feuilly" },
    { "id": "Courfeyrac" },
    { "id": "Bahorel" },
    { "id": "Bossuet" },
    { "id": "Joly" },
    { "id": "Grantaire" },
    { "id": "MotherPlutarch" },
    { "id": "Gueulemer" },
    { "id": "Babet" },
    { "id": "Claquesous" },
    { "id": "Montparnasse" },
    { "id": "Toussaint" },
    { "id": "Child1" },
    { "id": "Child2" },
    { "id": "Brujon" },
    { "id": "Mme.Hucheloup" }
];

var links1 = [
    { "source": "Napoleon", "target": "Myriel" },
    { "source": "Mlle.Baptistine", "target": "Myriel" },
    { "source": "Mme.Magloire", "target": "Myriel" },
    { "source": "Mme.Magloire", "target": "Mlle.Baptistine" },
    { "source": "CountessdeLo", "target": "Myriel" },
    { "source": "Geborand", "target": "Myriel" },
    { "source": "Champtercier", "target": "Myriel" },
    { "source": "Cravatte", "target": "Myriel" },
    { "source": "Count", "target": "Myriel" },
    { "source": "OldMan", "target": "Myriel" },
    { "source": "Valjean", "target": "Labarre" },
    { "source": "Valjean", "target": "Mme.Magloire" },
    { "source": "Valjean", "target": "Mlle.Baptistine" },
    { "source": "Valjean", "target": "Myriel" },
    { "source": "Marguerite", "target": "Valjean" },
    { "source": "Mme.deR", "target": "Valjean" },
    { "source": "Isabeau", "target": "Valjean" },
    { "source": "Gervais", "target": "Valjean" },
    { "source": "Listolier", "target": "Tholomyes" },
    { "source": "Fameuil", "target": "Tholomyes" },
    { "source": "Fameuil", "target": "Listolier" },
    { "source": "Blacheville", "target": "Tholomyes" },
    { "source": "Blacheville", "target": "Listolier" },
    { "source": "Blacheville", "target": "Fameuil" },
    { "source": "Favourite", "target": "Tholomyes" },
    { "source": "Favourite", "target": "Listolier" },
    { "source": "Favourite", "target": "Fameuil" },
    { "source": "Favourite", "target": "Blacheville" },
    { "source": "Dahlia", "target": "Tholomyes" },
    { "source": "Dahlia", "target": "Listolier" },
    { "source": "Dahlia", "target": "Fameuil" },
    { "source": "Dahlia", "target": "Blacheville" },
    { "source": "Dahlia", "target": "Favourite" },
    { "source": "Zephine", "target": "Tholomyes" },
    { "source": "Zephine", "target": "Listolier" },
    { "source": "Zephine", "target": "Fameuil" },
    { "source": "Zephine", "target": "Blacheville" },
    { "source": "Zephine", "target": "Favourite" },
    { "source": "Zephine", "target": "Dahlia" },
    { "source": "Fantine", "target": "Tholomyes" },
    { "source": "Fantine", "target": "Listolier" },
    { "source": "Fantine", "target": "Fameuil" },
    { "source": "Fantine", "target": "Blacheville" },
    { "source": "Fantine", "target": "Favourite" },
    { "source": "Fantine", "target": "Dahlia" },
    { "source": "Fantine", "target": "Zephine" },
    { "source": "Fantine", "target": "Marguerite" },
    { "source": "Fantine", "target": "Valjean" },
    { "source": "Mme.Thenardier", "target": "Fantine" },
    { "source": "Mme.Thenardier", "target": "Valjean" },
    { "source": "Thenardier", "target": "Mme.Thenardier" },
    { "source": "Thenardier", "target": "Fantine" },
    { "source": "Thenardier", "target": "Valjean" },
    { "source": "Cosette", "target": "Mme.Thenardier" },
    { "source": "Cosette", "target": "Valjean" },
    { "source": "Cosette", "target": "Tholomyes" },
    { "source": "Cosette", "target": "Thenardier" },
    { "source": "Javert", "target": "Valjean" },
    { "source": "Javert", "target": "Fantine" },
    { "source": "Javert", "target": "Thenardier" },
    { "source": "Javert", "target": "Mme.Thenardier" },
    { "source": "Javert", "target": "Cosette" },
    { "source": "Fauchelevent", "target": "Valjean" },
    { "source": "Fauchelevent", "target": "Javert" },
    { "source": "Bamatabois", "target": "Fantine" },
    { "source": "Bamatabois", "target": "Javert" },
    { "source": "Bamatabois", "target": "Valjean" },
    { "source": "Perpetue", "target": "Fantine" },
    { "source": "Simplice", "target": "Perpetue" },
    { "source": "Simplice", "target": "Valjean" },
    { "source": "Simplice", "target": "Fantine" },
    { "source": "Simplice", "target": "Javert" },
    { "source": "Scaufflaire", "target": "Valjean" },
    { "source": "Woman1", "target": "Valjean" },
    { "source": "Woman1", "target": "Javert" },
    { "source": "Judge", "target": "Valjean" },
    { "source": "Judge", "target": "Bamatabois" },
    { "source": "Champmathieu", "target": "Valjean" },
    { "source": "Champmathieu", "target": "Judge" },
    { "source": "Champmathieu", "target": "Bamatabois" },
    { "source": "Brevet", "target": "Judge" },
    { "source": "Brevet", "target": "Champmathieu" },
    { "source": "Brevet", "target": "Valjean" },
    { "source": "Brevet", "target": "Bamatabois" },
    { "source": "Chenildieu", "target": "Judge" },
    { "source": "Chenildieu", "target": "Champmathieu" },
    { "source": "Chenildieu", "target": "Brevet" },
    { "source": "Chenildieu", "target": "Valjean" },
    { "source": "Chenildieu", "target": "Bamatabois" },
    { "source": "Cochepaille", "target": "Judge" },
    { "source": "Cochepaille", "target": "Champmathieu" },
    { "source": "Cochepaille", "target": "Brevet" },
    { "source": "Cochepaille", "target": "Chenildieu" },
    { "source": "Cochepaille", "target": "Valjean" },
    { "source": "Cochepaille", "target": "Bamatabois" },
    { "source": "Pontmercy", "target": "Thenardier" },
    { "source": "Boulatruelle", "target": "Thenardier" },
    { "source": "Eponine", "target": "Mme.Thenardier" },
    { "source": "Eponine", "target": "Thenardier" },
    { "source": "Anzelma", "target": "Eponine" },
    { "source": "Anzelma", "target": "Thenardier" },
    { "source": "Anzelma", "target": "Mme.Thenardier" },
    { "source": "Woman2", "target": "Valjean" },
    { "source": "Woman2", "target": "Cosette" },
    { "source": "Woman2", "target": "Javert" },
    { "source": "MotherInnocent", "target": "Fauchelevent" },
    { "source": "MotherInnocent", "target": "Valjean" },
    { "source": "Gribier", "target": "Fauchelevent" },
    { "source": "Mme.Burgon", "target": "Jondrette" },
    { "source": "Gavroche", "target": "Mme.Burgon" },
    { "source": "Gavroche", "target": "Thenardier" },
    { "source": "Gavroche", "target": "Javert" },
    { "source": "Gavroche", "target": "Valjean" },
    { "source": "Gillenormand", "target": "Cosette" },
    { "source": "Gillenormand", "target": "Valjean" },
    { "source": "Magnon", "target": "Gillenormand" },
    { "source": "Magnon", "target": "Mme.Thenardier" },
    { "source": "Mlle.Gillenormand", "target": "Gillenormand" },
    { "source": "Mlle.Gillenormand", "target": "Cosette" },
    { "source": "Mlle.Gillenormand", "target": "Valjean" },
    { "source": "Mme.Pontmercy", "target": "Mlle.Gillenormand" },
    { "source": "Mme.Pontmercy", "target": "Pontmercy" },
    { "source": "Mlle.Vaubois", "target": "Mlle.Gillenormand" },
    { "source": "Lt.Gillenormand", "target": "Mlle.Gillenormand" },
    { "source": "Lt.Gillenormand", "target": "Gillenormand" },
    { "source": "Lt.Gillenormand", "target": "Cosette" },
    { "source": "Marius", "target": "Mlle.Gillenormand" },
    { "source": "Marius", "target": "Gillenormand" },
    { "source": "Marius", "target": "Pontmercy" },
    { "source": "Marius", "target": "Lt.Gillenormand" },
    { "source": "Marius", "target": "Cosette" },
    { "source": "Marius", "target": "Valjean" },
    { "source": "Marius", "target": "Tholomyes" },
    { "source": "Marius", "target": "Thenardier" },
    { "source": "Marius", "target": "Eponine" },
    { "source": "Marius", "target": "Gavroche" },
    { "source": "BaronessT", "target": "Gillenormand" },
    { "source": "BaronessT", "target": "Marius" },
    { "source": "Mabeuf", "target": "Marius" },
    { "source": "Mabeuf", "target": "Eponine" },
    { "source": "Mabeuf", "target": "Gavroche" },
    { "source": "Enjolras", "target": "Marius" },
    { "source": "Enjolras", "target": "Gavroche" },
    { "source": "Enjolras", "target": "Javert" },
    { "source": "Enjolras", "target": "Mabeuf" },
    { "source": "Enjolras", "target": "Valjean" },
    { "source": "Combeferre", "target": "Enjolras" },
    { "source": "Combeferre", "target": "Marius" },
    { "source": "Combeferre", "target": "Gavroche" },
    { "source": "Combeferre", "target": "Mabeuf" },
    { "source": "Prouvaire", "target": "Gavroche" },
    { "source": "Prouvaire", "target": "Enjolras" },
    { "source": "Prouvaire", "target": "Combeferre" },
    { "source": "Feuilly", "target": "Gavroche" },
    { "source": "Feuilly", "target": "Enjolras" },
    { "source": "Feuilly", "target": "Prouvaire" },
    { "source": "Feuilly", "target": "Combeferre" },
    { "source": "Feuilly", "target": "Mabeuf" },
    { "source": "Feuilly", "target": "Marius" },
    { "source": "Courfeyrac", "target": "Marius" },
    { "source": "Courfeyrac", "target": "Enjolras" },
    { "source": "Courfeyrac", "target": "Combeferre" },
    { "source": "Courfeyrac", "target": "Gavroche" },
    { "source": "Courfeyrac", "target": "Mabeuf" },
    { "source": "Courfeyrac", "target": "Eponine" },
    { "source": "Courfeyrac", "target": "Feuilly" },
    { "source": "Courfeyrac", "target": "Prouvaire" },
    { "source": "Bahorel", "target": "Combeferre" },
    { "source": "Bahorel", "target": "Gavroche" },
    { "source": "Bahorel", "target": "Courfeyrac" },
    { "source": "Bahorel", "target": "Mabeuf" },
    { "source": "Bahorel", "target": "Enjolras" },
    { "source": "Bahorel", "target": "Feuilly" },
    { "source": "Bahorel", "target": "Prouvaire" },
    { "source": "Bahorel", "target": "Marius" },
    { "source": "Bossuet", "target": "Marius" },
    { "source": "Bossuet", "target": "Courfeyrac" },
    { "source": "Bossuet", "target": "Gavroche" },
    { "source": "Bossuet", "target": "Bahorel" },
    { "source": "Bossuet", "target": "Enjolras" },
    { "source": "Bossuet", "target": "Feuilly" },
    { "source": "Bossuet", "target": "Prouvaire" },
    { "source": "Bossuet", "target": "Combeferre" },
    { "source": "Bossuet", "target": "Mabeuf" },
    { "source": "Bossuet", "target": "Valjean" },
    { "source": "Joly", "target": "Bahorel" },
    { "source": "Joly", "target": "Bossuet" },
    { "source": "Joly", "target": "Gavroche" },
    { "source": "Joly", "target": "Courfeyrac" },
    { "source": "Joly", "target": "Enjolras" },
    { "source": "Joly", "target": "Feuilly" },
    { "source": "Joly", "target": "Prouvaire" },
    { "source": "Joly", "target": "Combeferre" },
    { "source": "Joly", "target": "Mabeuf" },
    { "source": "Joly", "target": "Marius" },
    { "source": "Grantaire", "target": "Bossuet" },
    { "source": "Grantaire", "target": "Enjolras" },
    { "source": "Grantaire", "target": "Combeferre" },
    { "source": "Grantaire", "target": "Courfeyrac" },
    { "source": "Grantaire", "target": "Joly" },
    { "source": "Grantaire", "target": "Gavroche" },
    { "source": "Grantaire", "target": "Bahorel" },
    { "source": "Grantaire", "target": "Feuilly" },
    { "source": "Grantaire", "target": "Prouvaire" },
    { "source": "MotherPlutarch", "target": "Mabeuf" },
    { "source": "Gueulemer", "target": "Thenardier" },
    { "source": "Gueulemer", "target": "Valjean" },
    { "source": "Gueulemer", "target": "Mme.Thenardier" },
    { "source": "Gueulemer", "target": "Javert" },
    { "source": "Gueulemer", "target": "Gavroche" },
    { "source": "Gueulemer", "target": "Eponine" },
    { "source": "Babet", "target": "Thenardier" },
    { "source": "Babet", "target": "Gueulemer" },
    { "source": "Babet", "target": "Valjean" },
    { "source": "Babet", "target": "Mme.Thenardier" },
    { "source": "Babet", "target": "Javert" },
    { "source": "Babet", "target": "Gavroche" },
    { "source": "Babet", "target": "Eponine" },
    { "source": "Claquesous", "target": "Thenardier" },
    { "source": "Claquesous", "target": "Babet" },
    { "source": "Claquesous", "target": "Gueulemer" },
    { "source": "Claquesous", "target": "Valjean" },
    { "source": "Claquesous", "target": "Mme.Thenardier" },
    { "source": "Claquesous", "target": "Javert" },
    { "source": "Claquesous", "target": "Eponine" },
    { "source": "Claquesous", "target": "Enjolras" },
    { "source": "Montparnasse", "target": "Javert" },
    { "source": "Montparnasse", "target": "Babet" },
    { "source": "Montparnasse", "target": "Gueulemer" },
    { "source": "Montparnasse", "target": "Claquesous" },
    { "source": "Montparnasse", "target": "Valjean" },
    { "source": "Montparnasse", "target": "Gavroche" },
    { "source": "Montparnasse", "target": "Eponine" },
    { "source": "Montparnasse", "target": "Thenardier" },
    { "source": "Toussaint", "target": "Cosette" },
    { "source": "Toussaint", "target": "Javert" },
    { "source": "Toussaint", "target": "Valjean" },
    { "source": "Child1", "target": "Gavroche" },
    { "source": "Child2", "target": "Gavroche" },
    { "source": "Child2", "target": "Child1" },
    { "source": "Brujon", "target": "Babet" },
    { "source": "Brujon", "target": "Gueulemer" },
    { "source": "Brujon", "target": "Thenardier" },
    { "source": "Brujon", "target": "Gavroche" },
    { "source": "Brujon", "target": "Eponine" },
    { "source": "Brujon", "target": "Claquesous" },
    { "source": "Brujon", "target": "Montparnasse" },
    { "source": "Mme.Hucheloup", "target": "Bossuet" },
    { "source": "Mme.Hucheloup", "target": "Joly" },
    { "source": "Mme.Hucheloup", "target": "Grantaire" },
    { "source": "Mme.Hucheloup", "target": "Bahorel" },
    { "source": "Mme.Hucheloup", "target": "Courfeyrac" },
    { "source": "Mme.Hucheloup", "target": "Gavroche" },
    { "source": "Mme.Hucheloup", "target": "Enjolras" }
];

var options = {
    series: {
        type: 'graph',
        symbolSize: 6,
        roam: true,
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        itemStyle:{
        },
        label: {
            show: true,
            formatter: function (params) {
                // return params.id;
                return '';
            }
        },
        edgeLabel: {
            show: true,
            formatter: function (params) {
                // return params.id;
                return '';
            }
        },
        data: nodes,
        links: links,
        lineStyle: {
            opacity: 1,
            width: 1
        }
    }
};

myChart.setOption(options);

var rectSelect = [];

myChart.on('dblclick', function (e) {
    if (e.topTarget.name == 'globalGroup') {
        myChart.setRectSelect(true);
    } else if (e.topTarget.name == 'rectSelect') {
        myChart.setRectSelect(false);
        myChart.setSelectCenter(rectSelect);
    }
})

myChart.on('mouseup', function (e) {
    if (e.which != 1) {
        options.series.data.map((it) => {
            it.itemStyle = {}
        })
        myChart.setRectSelect(false);
        myChart.update();
    }
})



myChart.on('selected', function (params) {
    // 矩形选框 宽高
    var width = params.ctx.shape.width;
    var height = params.ctx.shape.height;

    // 矩形选框中心点
    var rectSelectCenterX = params.ctx.shape.x + params.ctx.position[0] + width / 2;
    var rectSelectCenterY = params.ctx.shape.y + params.ctx.position[1] + height / 2;


    rectSelect = [rectSelectCenterX, rectSelectCenterY, width, height];


    options.series.data.map((it) => {
        it.itemStyle = {
            borderColor: null,
            borderWidth: 1
        }
    })
    params.selected.map((it) => {
        it.itemStyle.borderColor = 'yellow';
        it.itemStyle.borderWidth = 5;
    })

    myChart.update();
})
