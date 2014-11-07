ArtStack.Views.MediumArtworkLI = Backbone.View.extend({

  template: JST['artworks/_medium_artwork_li'],

  stackTemplate: JST['stacks/_stack_button'],

  tagName: "li",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click button": "toggleStack"
  },

  render: function () {
    var renderedContent = this.template({ artwork: this.model });
    var button = this.stackTemplate({ artwork: this.model });
    this.$el.html(renderedContent);
    this.$(".art-image").append(button);
    return this;
  },

  toggleStack: function () {

    event.preventDefault();

    if (this.model.get('stacked')) {

      $("button").addClass("stacked-false");
      $("button").removeClass("stacked-true");
      this.model.set({ stacked: false });

      $.ajax({
        type: "PATCH",
        url: "/api/artworks/" + this.model.id,
        data: {
          stack: false
        }
      });

    } else {

      $("button").addClass("stacked-true");
      $("button").removeClass("stacked-false");
      this.model.set({ stacked: true });

      $.ajax({
        type: "PATCH",
        url: "/api/artworks/" + this.model.id,
        data: {
          stack: true
        }
      });
    }
  },

});
