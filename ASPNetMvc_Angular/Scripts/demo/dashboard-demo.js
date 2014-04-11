$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2014-04-09',
            sold: 212
        }, {
            period: '2014-03-26',
            sold: 224
        }, {
            period: '2014-03-12',
            sold: 150
        }, {
            period: '2014-02-26',
            sold: 83
        }, {
            period: '2014-02-12',
            sold: 72
        }, {
            period: '2014-01-29',
            sold: 76
        }, {
            period: '2014-01-15',
            sold: 167
        }],
        xkey: 'period',
        ykeys: ['sold'],
        labels: ['CFAA Auction sold'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
