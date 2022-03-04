var json = {"d":[  
			{"profession":"Berserker"},
			{"profession":"Shadow Hunter"},
			{"profession":"Gunslinger"},
			{"profession":"Bard"},
			{"profession":"Paladin"},
			{"profession":"Gunlancer"},
			{"profession":"Scrapper"},
			{"profession":"SoulFist"},
			{"profession":"Sorceress"},
			{"profession":"Sharpshooter"},
			{"profession":"Deathblade"},
			{"profession":"Wardancer"},
			{"profession":"Striker"},
			{"profession":"Deadeye"},
			{"profession":"Artillerist"}
]};

$(document).ready(function() {
    var $grouplist = $('#checkboxes');
    $.each(json.d, function() {
        $('<label>'+this.profession+': </label><input type=checkbox value='+this.profession+'/>').appendTo($grouplist);
    });
});
