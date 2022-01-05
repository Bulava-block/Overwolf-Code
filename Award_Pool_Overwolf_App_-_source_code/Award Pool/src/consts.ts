const gameIds = [
  21216, // Fortnite
  21626, // Call of Duty War Zone
  10798, // Rocket League
  // Among Us
  7314, // Dota 2
  21640, // Valorant
  10826, // Rainbow Six Siege
  7764, // CSGO
  5426, // League Of Legends
  10624,
  //5426,   // Team Fight Tactics
  // NBA2k
  // Roblox
  8032, // MineCraft
];

const interestingFeatures = {
  21216: [
    // Fortnite
    "counters",
    "death",
    "items",
    "kill",
    "killed",
    "killer",
    "location",
    "match_info",
    "match",
    "me",
    "phase",
    "rank",
    "revived",
    "roster",
    "team",
  ],
  21626: [
    // Call of Duty War Zone
    "match_info",
    "game_info",
    "kill",
    "death",
  ],
  10798: [
    // Rocket League
    "gep_internal",
    "stats",
    "teamGoal",
    "opposingTeamGoal",
    "match",
    "roster",
    "me",
    "match_info",
    "death",
  ],
  7314: [
    // Dota2
    "game_state_changed",
    "match_state_changed",
    "match_detected",
    "daytime_changed",
    "clock_time_changed",
    "ward_purchase_cooldown_changed",
    "match_ended",
    "kill",
    "assist",
    "death",
    "cs",
    "xpm",
    "gpm",
    "gold",
    "hero_leveled_up",
    "hero_respawned",
    "hero_buyback_info_changed",
    "hero_boughtback",
    "hero_health_mana_info",
    "hero_status_effect_changed",
    "hero_attributes_skilled",
    "hero_ability_skilled",
    "hero_ability_used",
    "hero_ability_cooldown_changed",
    "hero_ability_changed",
    "hero_item_cooldown_changed",
    "hero_item_changed",
    "hero_item_used",
    "hero_item_consumed",
    "hero_item_charged",
    "match_info",
    "roster",
    "party",
    "error",
    "hero_pool",
    "me",
    "game",
  ],
  21640: [
    // Valorant
    "me",
    "game_info",
    "match_info",
    "gep_internal",
    "kill",
    "death",
  ],

  10624: [
    // Heroes of the storm
    "me",
    "game_info",
    "match_info",
    "gep_internal",
    "kill",
    "roster",
    "death",
  ],

  10826: [
    // Rainbow Six Siege
    "game_info",
    "match",
    "match_info",
    "roster",
    "kill",
    "death",
    "me",
    "defuser",
  ],
  7764: [
    // CSGO
    "match_info",
    "kill",
    "death",
    "assist",
    "headshot",
    "round_start",
    "match_start",
    "match_info",
    "match_end",
    "team_round_win",
    "bomb_planted",
    "bomb_change",
    "reloading",
    "fired",
    "weapon_change",
    "weapon_acquired",
    "info",
    "roster",
    "player_activity_change",
    "team_set",
    "replay",
    "counters",
    "mvp",
    "scoreboard",
    "kill_feed",
  ],
  5426: [
    // League Of Legends, Team Fight Tactics
    "live_client_data",
    "matchState",
    "match_info",
    "death",
    "respawn",
    "abilities",
    "kill",
    "assist",
    "gold",
    "minions",
    "summoner_info",
    "gameMode",
    "teams",
    "level",
    "announcer",
    "counters",
    "damage",
    "heal",
  ],
  54261: [
    // Team Fight Tactics **TempID (TFT and LOL share the same Game ID)
    "live_client_data",
    "me",
    "match_info",
    "roster",
    "store",
    "board",
    "bench",
    "carousel",
  ],
  8032: [
    // MineCraft
    "game_info",
    "match_info",
  ],
};

const windowNames = {
  inGame: "in_game",
  desktop: "desktop",
};

const hotkeys = {
  toggle: "showhide",
};

export { gameIds, interestingFeatures, windowNames, hotkeys };
