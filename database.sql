-- name the DB quill

CREATE TABLE notes
(
    id SERIAL PRIMARY KEY,
    text character varying(3000) NOT NULL
);