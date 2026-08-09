$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });

    // Kramdown derives heading ids from the heading text, so a heading like
    // "1. Risk increases..." gets the id "1-risk-increases-...". An id starting
    // with a digit is not a valid CSS selector: document.querySelector throws on
    // it, bootstrap's scrollspy swallows that in a try/catch, and the entry is
    // silently dropped from the TOC's scroll tracking - it can never highlight.
    // Prefix those ids before the TOC is built so every entry is selectable.
    $(".post-content :header[id]").each(function () {
      var id = this.id;
      if (/^[0-9]/.test(id)) {
        this.id = "sec-" + id;
      }
    });

    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    // The navbar is sticky, and post headings carry a matching scroll-margin,
    // so a heading clicked in the TOC lands ~5rem below the top of the viewport.
    // Without the same offset here, scrollspy would still consider the previous
    // section to be the current one and highlight the wrong entry.
    $("body").scrollspy({
      target: navSelector,
      offset: 90,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
