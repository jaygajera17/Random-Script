$('button').on('click', function (e) {

    $(".groups").css("visibility", "visible");
    e.preventDefault();
    var namespergroup = parseInt($('.pergroup').val()),
        allnames = $('textarea').val().split('\n'),
        allnameslen = allnames.length;

    var numgroups = Math.ceil(allnameslen / namespergroup);

    if ($('.numgroups').val()) {
        numgroups = parseInt($('.numgroups').val());
        namespergroup = allnameslen / numgroups;
    }

    $('.groups').empty();

    for (i = 0; i < numgroups; i++) {
        $('.groups').append('<div class="group" data-aos="zoom-in-down" data-aos-delay="300" id="group' + (i + 1) + '"><h3>Group ' + (i + 1) + '</h3></div>');
    }

    $('.group').each(function () {
        for (j = 0; j < namespergroup; j++) {
            var randname = Math.floor(Math.random() * allnames.length);
            if (allnames[randname]) {
                $(this).append('<p>' + allnames[randname] + '</p>');
            }
            allnames.splice(randname, 1);
            console.log(allnames);
        }
    });
});

$('.toggle-wrap a').on('click', function (e) {
    e.preventDefault();
    $('.wrap').toggleClass('alt');
    $('.pergroup-wrap, .numgroups-wrap').find('input').val('');
});