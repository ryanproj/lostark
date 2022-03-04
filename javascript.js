var json = {"d":[  {"__type":"Service1.Operators:#MobileWCFService","operators":"ACCOUNTING"},   {"__type":"Service1.Operators:#MobileWCFService","operators":"AHOFFMAN"},   {"__type":"Service1.Operators:#MobileWCFService","operators":"AMONROY"},   {"__type":"Service1.Operators:#MobileWCFService","operators":"APATENTAS"},
    {"__type":"Service1.Operators:#MobileWCFService","operators":"WRAMOS    "}
]};

$(document).ready(function() {
    var $grouplist = $('#checkboxes');
    $.each(json.d, function() {
        $('<label>'+this.operators+': </label><input type=checkbox value='+this.operators+'/>').appendTo($grouplist);
    });
});
