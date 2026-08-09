---
layout: page
permalink: /blog/
title: Blog
nav: true
nav_order: 3
---

<!-- _pages/blog.md -->

<!-- Reuses the publications list markup so posts render in the same style. -->

<div class="publications">

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in posts_by_year %}
  <h2 class="bibliography">{{ year.name }}</h2>
  <ol class="bibliography">
    {% for post in year.items %}
      <li>
        <div class="bib-entry">
          {% assign words = post.content | number_of_words %}
          {% assign minutes = words | divided_by: 200 | plus: 1 %}
          <div class="pub-type">
            {%- if post.categories.first %}{{ post.categories.first }} &middot; {% endif -%}
            {{ minutes }} min read
          </div>
          <div class="title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
          {% if post.author %}
            <div class="author">{{ post.author }}</div>
          {% endif %}
          {% if post.description %}
            <div class="description">{{ post.description }}</div>
          {% endif %}
          <div class="periodical">
            <em>{{ post.date | date: "%B %-d, %Y" }}</em>
          </div>
        </div>
      </li>
    {% endfor %}
  </ol>
{% endfor %}

</div>

{% include wallpaper.liquid %}
