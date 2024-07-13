CREATE DATABASE rickandmorty;

USE rickandmorty;

CREATE TABLE episodes(
	episode_id INT IDENTITY(0, 1) NOT NULL PRIMARY KEY ,
	episode_name VARCHAR(50) NOT NULL,
	episode_airdate VARCHAR(50),
	episode_episode VARCHAR(25) NOT NULL UNIQUE,
);


CREATE TABLE chars(
	char_id INT IDENTITY(0, 1) NOT NULL PRIMARY KEY,
	char_name VARCHAR(50) NOT NULL,
	char_status VARCHAR(25),
	char_species VARCHAR(50),
    char_type VARCHAR(50),
    char_gender VARCHAR(10),
	char_image VARCHAR(100),
);

CREATE TABLE charEpisodes(
	charEpisodes_id INT NOT NULL PRIMARY KEY,
	char_id INT NOT NULL FOREIGN KEY REFERENCES chars(char_id),
	episode_id INT NOT NULL FOREIGN KEY REFERENCES episodes(episode_id)
);


-- DML
INSERT INTO episodes (episode_name, episode_airdate, episode_episode) 
VALUES ('deneme', 'deneme', 'deneme');

INSERT INTO chars (char_name, char_status, char_species, char_type, char_gender, char_image) 
VALUES ('deneme', 'deneme', 'deneme', 'deneme', 'deneme', 'deneme');