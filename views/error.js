

<% layout('/layouts/boilerplate') -%>

<div class="container mt-5">
  <h1 class="text-danger">Error <%= status %></h1>
  <p><%= message %></p>
  <a href="/listings" class="btn btn-primary">Back to Listings</a>
</div>
