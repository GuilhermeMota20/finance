export type FormLoginType = {
  username: string;
  password: string;
};

export type ResponseLoginType = {
  data: {
    access_token: string;
    // "expires_in": 36000,
    // "refresh_expires_in": 1800,
    // "refresh_token": "eyJhbGciOiJIUzUxMiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwY2Y1NzM0Ni1kMzBiLTQyYmYtYTNiOS05NzgzNDE0NGZmY2MifQ.eyJleHAiOjE3NDk0ODk1MTYsImlhdCI6MTc0OTQ4NzcxNiwianRpIjoiYjlhMTYwZDUtYjE1YS00NjA4LThkOWMtNWRhYTczZGY3MTRjIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoxODA4MC9yZWFsbXMvbWV0cmljYXMiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjE4MDgwL3JlYWxtcy9tZXRyaWNhcyIsInN1YiI6ImM1NmNjOTEzLWZjODctNDU4Mi1hMzJiLTZkODI1YjU0Yjc4YiIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJtZXRyaWNhcy1hcHAiLCJzZXNzaW9uX3N0YXRlIjoiOTg2OThjZGEtMjI2ZS00OWQ0LTkxNzgtZmE0ZjY0MDA3ZDZiIiwic2NvcGUiOiJtaWNyb3Byb2ZpbGUtand0IHByb2ZpbGUgZW1haWwiLCJzaWQiOiI5ODY5OGNkYS0yMjZlLTQ5ZDQtOTE3OC1mYTRmNjQwMDdkNmIifQ.75sSiclnUZ9KiiAanRen_ST0wrcGkWw5QvZBmaluqLuzlQpW5R0DT0dlaUpaMV2iLW7el95tzCKRxyoV5m1Y8Q",
    // "token_type": "Bearer",
    // "not-before-policy": 0,
    // "session_state": "98698cda-226e-49d4-9178-fa4f64007d6b",
    // "scope": "microprofile-jwt profile email"
  };
};