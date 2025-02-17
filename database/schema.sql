CREATE TABLE Conference (
    conference_id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Team (
    team_id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    location VARCHAR(255),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    college VARCHAR(255),
    mascot VARCHAR(255),
    arena VARCHAR(255),
    time_zone VARCHAR(50),
    conference_id INT REFERENCES Conference(conference_id),
    coach VARCHAR(255)
);

CREATE TABLE Game (
    game_id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    location VARCHAR(255),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    time TIME,
    arena VARCHAR(255),
    attendance INT,
    home_team INT REFERENCES Team(team_id),
    away_team INT REFERENCES Team(team_id),
    home_ranking INT,
    away_ranking INT,
    url VARCHAR(500),
    neutral BOOLEAN,
    tournament BOOLEAN,
    conference BOOLEAN,
    winner BOOLEAN NOT NULL
);

CREATE TABLE Player (
    player_id SERIAL PRIMARY KEY,
    player_uuid UUID DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    class VARCHAR(50),
    weight FLOAT,
    height FLOAT,
    handedness VARCHAR(10),
    team_id INT REFERENCES Team(team_id)
);

CREATE TABLE PlayerStat (
    id SERIAL PRIMARY KEY,
    game_id INT REFERENCES Game(game_id),
    team_id INT REFERENCES Team(team_id),
    player_id INT REFERENCES Player(player_id),
    pts INT DEFAULT 0,
    fg INT DEFAULT 0,
    fg_a INT DEFAULT 0,
    two_pt INT DEFAULT 0,
    two_pt_a INT DEFAULT 0,
    three_pt INT DEFAULT 0,
    three_pt_a INT DEFAULT 0,
    ft INT DEFAULT 0,
    ft_a INT DEFAULT 0,
    o_reb INT DEFAULT 0,
    d_reb INT DEFAULT 0,
    assist INT DEFAULT 0,
    pf INT DEFAULT 0,
    stl INT DEFAULT 0,
    to INT DEFAULT 0,
    blk INT DEFAULT 0
);

-- Indexes for optimizing queries
CREATE INDEX idx_game_date ON Game(date);
CREATE INDEX idx_game_home_team ON Game(home_team);
CREATE INDEX idx_game_away_team ON Game(away_team);
CREATE INDEX idx_player_name ON Player(name);
CREATE INDEX idx_player_team ON Player(team_id);
CREATE INDEX idx_playerstat_game ON PlayerStat(game_id);
CREATE INDEX idx_playerstat_player ON PlayerStat(player_id);
CREATE INDEX idx_playerstat_team ON PlayerStat(team_id);
CREATE INDEX idx_team_name ON Team(name);
CREATE INDEX idx_conference_name ON Conference(name);
