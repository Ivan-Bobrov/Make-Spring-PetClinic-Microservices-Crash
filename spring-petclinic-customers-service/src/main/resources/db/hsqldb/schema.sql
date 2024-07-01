DROP TABLE pets IF EXISTS;
DROP TABLE types IF EXISTS;
DROP TABLE owners IF EXISTS;
DROP TABLE files IF EXISTS;
DROP TABLE pet_records IF EXISTS;

CREATE TABLE types (
  id   INTEGER IDENTITY PRIMARY KEY,
  name VARCHAR(80)
);
CREATE INDEX types_name ON types (name);

CREATE TABLE owners (
  id         INTEGER IDENTITY PRIMARY KEY,
  first_name VARCHAR(30),
  last_name  VARCHAR(30),
  address    VARCHAR(255),
  city       VARCHAR(80),
  telephone  VARCHAR(12)
);
CREATE INDEX owners_last_name ON owners (last_name);

CREATE TABLE pets (
  id         INTEGER IDENTITY PRIMARY KEY,
  name       VARCHAR(30),
  birth_date DATE,
  type_id    INTEGER NOT NULL,
  owner_id   INTEGER NOT NULL
);

CREATE TABLE files (
  id        INTEGER IDENTITY PRIMARY KEY,
  data      BLOB,
  description   VARCHAR(250),
  date      DATE,
  pet_id    INTEGER NOT NULL
);

CREATE TABLE pet_records (
    id INTEGER IDENTITY PRIMARY KEY,
    description VARCHAR(250),
    last_access TIMESTAMP,
    locked BOOLEAN,
    locked_by INT,
    pet_id INTEGER NOT NULL
);

ALTER TABLE pets ADD CONSTRAINT fk_pets_owners FOREIGN KEY (owner_id) REFERENCES owners (id);
ALTER TABLE pets ADD CONSTRAINT fk_pets_types FOREIGN KEY (type_id) REFERENCES types (id);
ALTER TABLE files ADD CONSTRAINT fk_files_pet FOREIGN KEY (pet_id) REFERENCES pets (id);
ALTER TABLE pet_records ADD CONSTRAINT fk_pet_records_pet FOREIGN KEY (pet_id) REFERENCES pets (id);
CREATE INDEX pets_name ON pets (name);

CREATE TABLE courses (
    id          INTEGER IDENTITY PRIMARY KEY,
    name        VARCHAR(256) NOT NULL,
    description CLOB NOT NULL,
    instructor  INTEGER NOT NULL
);
CREATE INDEX course_name ON courses (name);
