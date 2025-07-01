(function () {
    "use strict";

    var manifest = {
        type: "other",
        version: "0.0.1",
        name: "Удаление рекламы",
        description: "Плагин для удаление рекламы перед фильмом",
        component: "stats",
    };

    function startPlugin() {

        Lampa.Manifest.plugins = manifest;

        // not used currently
        // Lampa.Timeline.listener.follow('view', function (e) {
        //   console.log('Stats', 'view', e);
        // });

        // Lampa.Player.listener.follow('start', function (e) {
        //   console.log('Stats', 'player start', e);
        // });

        // Lampa.Player.listener.follow('destroy', function (e) {
        //   console.log('Stats', 'player destroy', e);
        // });

        // monitor reactions
        Lampa.Storage.listener.follow("change", function (e) {
            console.log('RAd: Storage event =', e);
            //if (e.name == "mine_reactions") {
                //var movies_watched = Lampa.Storage.get("stats_movies_watched", {});
                //var movies_watched_updated = updateReactions(e, movies_watched);
                //Lampa.Storage.set("stats_movies_watched", movies_watched_updated);
            //}
        });

        // *** MOVIES WATCHED ***

        // monitor movies watched
        // 1 - store movie data when movie card is shown
        Lampa.Listener.follow("full", function (e) {
            //if (e.type == "complite") {
            //    console.log("Stats", "full complite", e);
            //}
        });

    }



    // *** MENU ***
    /*
    console.log('Stats', 'Starting to create menu elements...');
    
    Lampa.SettingsApi.addComponent({
        component: "stats",
        icon: pluginSVG,
        name: "Статистика",
    });
    */
    // TEMP - doesn't work
    // setTimeout(() => {
    //   var parentContainer = document.querySelector('.settings__body .scroll__body > div');
    //   var statsElement = document.querySelector('.settings__body .settings-folder[data-component="stats"]');
    //   parentContainer.insertBefore(statsElement, parentContainer.firstChild);
    // }, 2000);

    



    if (window.appready) {
        try {
            console.log('RAd: Starting the plugin... 1a');
            startPlugin();
        } catch (err) {
            console.log('RAd: Something went wrong', err);
        }
    } else {
        Lampa.Listener.follow("app", function (e) {
            console.log('RAd: Starting the plugin... 2a');
            if (e.type == "ready") {
                console.log('RAd: Starting the plugin... 2b');
                startPlugin();
            }
        });
    }
})();