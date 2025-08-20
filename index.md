---
layout: default
title: Blog
permalink: /blog/
---

# ✍️ Blog Posts

{% if site.posts and site.posts != empty %}
<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
{% else %}
<p>No posts yet — stay tuned!</p>
{% endif %}
