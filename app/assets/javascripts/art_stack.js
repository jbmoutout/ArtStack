window.ArtStack = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    new ArtStack.Routers.Router({
      $rootEl: $("#backbone-content")
    });

    ArtStack.artworks = new ArtStack.Collections.Artworks();
    ArtStack.artworks.fetch();

    ArtStack.artists = new ArtStack.Collections.Artists();
    ArtStack.artists.fetch();

    Backbone.history.start();
  }
};
