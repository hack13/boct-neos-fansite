export interface GameList {
    id:           string;
    name:         string;
    date:         string;
    script:       string;
    storytellers: string;
    thumbnail:    string;
    slug:         string;
}

export interface Games {
    "game name":     string;
    date:            string;
    thumbnail:       string;
    "video sources": VideoSource[];
    script:          Script;
    roster:          Roster;
    notes:           string;
}

export interface Roster {
    storytellers: Storyteller[];
    residents:    Resident[];
    travellers:   any[];
    fabled:       any[];
}

export interface Resident {
    name:      string;
    role:      string;
    reminders: any[];
    isDead:    boolean;
    pronouns:  string;
}

export interface Storyteller {
    name: string;
    pfp:  string;
}

export interface Script {
    name:   string;
    author: string;
    roles:  Role[];
}

export interface Role {
    id: string;
}

export interface VideoSource {
    id:          string;
    perspective: string;
    platform:    string;
    source:      string;
    credit:      string;
}