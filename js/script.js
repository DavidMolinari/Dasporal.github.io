$(document).ready(function () {
    rotateText();

    $('ul.tabs').tabs();
    $('.aboutmeText').clone().appendTo($('#aboutmeMob'));
    $('.skillsContent').clone().appendTo($('#skillsMob'))
    $('.projectsContent').clone().appendTo($('#projectMob'))
    $('.experiencesContent').clone().appendTo($('#experiencesMob'))
    $('.contactContent').clone().appendTo($('#contactMob'))
    $('.modal-trigger').leanModal();

    $('#btnTheme').click(function () {
        if ($('#theme').attr('href') == 'css/blackTheme.css') {
            $('#theme').attr('href', 'css/defaultTheme.css');
        } else {
            $('#theme').attr('href', 'css/blackTheme.css');
        }
    });
});
