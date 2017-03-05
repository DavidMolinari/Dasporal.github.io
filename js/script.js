$(document).ready(function () {
    rotateText();
    // get infos des projets réalisés depuis le Json pour mettre en forme 
    $.getJSON("data/dataProjets.json", function (data) {
        var i = 0;
        $.each(data.projetsGrands, function () {
            $.each(this, function (item, type) {
                var nom = this.nom;
                var image = this.image;
                var description = this.description;
                $('.bigProjets').append('<div class="row"><div class="col s12"><div class="card"> <span class="card-content card-title bigProjetsNom">' + nom + '</span><div class="wrapperModal"><img src="' + image + '"></div><div class="card-content bigProjetsContent"><p>' + description + '</p></div><div class="card-action"><div id="bigProjetsLien'+i+'"></div></div></div></div></div>');
                $.each(this.liens, function (item, type) {
                    var lien = this.lien;
                    var texte = this.texte;
                    $('#bigProjetsLien'+i).append('<a target="_blank" href="' + lien + '">' + texte + '</a>')
                });
                i++;
            });
        });
        $.each(data.projetsPetits, function () {
            $.each(this, function (item, type) {
                var nom = this.nom;
                var description = this.description;
                $('.smallProjets').append('<div class="col s6"><div class="card"><div class="card-content cardLittle"><div class="card-title">'+nom+'</div>         <p>'+description+'</p></div><div class="card-action"><div id="smallProjetsLien'+i+'"></div></div></div></div>');
                $.each(this.liens, function (item, type) {
                    var lien = this.lien;
                    var texte = this.texte;
                    $('#smallProjetsLien'+i).append('<a target="_blank" href="' + lien + '">' + texte + '</a>')
                });
                i++;
            });
        });
    });
    
    // get infos de l'expérience
    $.getJSON("data/dataExpe.json", function (data) {
        var i = 0;
        $.each(data.experiences, function () {
            $.each(this, function (item, type) {
                var date = this.date;
                var intitule = this.intitule;
                var details = this.details;
                $('.timeline').append('<li class="event" data-date="'+date+'"><h3>'+intitule+'</h3><p>'+details+'</p></li>');
                i++;
            });
        });
    });
    $('ul.tabs').tabs();
    $('.aboutmeText').clone().appendTo($('#aboutmeMob'));
    $('.skillsContent').clone().appendTo($('#skillsMob'))
    $('.projectsContent').clone().appendTo($('#projectMob'))
    $('.experiencesContent').clone().appendTo($('#experiencesMob'))
    $('.modal-trigger').leanModal();
    $('#btnTheme').click(function () {
        if ($('#theme').attr('href') == 'css/blackTheme.css') {
            $('#theme').attr('href', 'css/defaultTheme.css');
        }
        else {
            $('#theme').attr('href', 'css/blackTheme.css');
        }
    });
});