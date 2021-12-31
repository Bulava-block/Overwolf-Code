const testCSGO = {
  "events":[
    {
      "name":"team_set",
      "data":"{\r\n  \"team\": \"T\"\r\n}"
    },
    {
      "name":"player_activity_change",
      "data":"{\r\n  \"activity\": \"playing\"\r\n}"
    },
    {
      "name":"match_start",
      "data":"{\r\n  \"player_team\": \"T\"\r\n}"
    },
    {
      "name":"team_set",
      "data":"{\r\n  \"team\": \"T\"\r\n}"
    },
    {
      "name":"player_activity_change",
      "data":"{\r\n  \"activity\": \"playing\"\r\n}"
    },
    {
      "name":"bomb_planted",
      "data":"{}"
    },
    {
      "name":"bomb_change",
      "data":"{\r\n  \"state\": \"planted\"\r\n}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"CT\",\r\n  \"bomb\": \"defused\"\r\n}"
    },
    {
      "name":"bomb_change",
      "data":"{\r\n  \"state\": \"defused\"\r\n}"
    },
    {
      "name":"round_start",
      "data":"{\r\n  \"num_of_rounds\": 4,\r\n  \"player_team\": \"T\"\r\n}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_deagle\",\r\n  \"weapon_type\": \"Pistol\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"qq\",\"assister\":\"\",\"weapon\":\"sg556\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"BOT Ethan\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Smile\",\"assister\":\"\",\"weapon\":\"world\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"qq\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"BOT Jon\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Smile\",\"assister\":\"\",\"weapon\":\"world\",\"headshot\":false,\"suicide\":true,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"qq\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"BOT Jon\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"clistrlyc\",\"assister\":\"\",\"weapon\":\"glock\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"BOT Pat\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"\",\"weapon\":\"knife_t\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"EpikBrodey\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"mp5sd\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"BOT Doug\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"mp5sd\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"clistrlyc\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"EpikBrodey\",\"weapon\":\"mp5sd\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Tango\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"qq\",\"assister\":\"\",\"weapon\":\"sg556\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"AE Æ\"}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"T\",\r\n  \"bomb\": null\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"qq\",\"assister\":\"\",\"weapon\":\"sg556\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"AE Æ\"}"
    },
    {
      "name":"round_start",
      "data":"{\r\n  \"num_of_rounds\": 5,\r\n  \"player_team\": \"T\"\r\n}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_taser\",\r\n  \"weapon_type\": null\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"govvvenor\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"LordXKrull\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"EpikBrodey\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"qq\",\"assister\":\"\",\"weapon\":\"sg556\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"jacobtuckert\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"qq\",\"assister\":\"\",\"weapon\":\"sg556\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"jacobtuckert\"}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_m4a1\",\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"death",
      "data":"{\r\n  \"totalDeaths\": 2\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"p90\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"LordXKrull\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"AE Æ\"}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"T\",\r\n  \"bomb\": null\r\n}"
    },
    {
      "name":"round_start",
      "data":"{\r\n  \"num_of_rounds\": 6,\r\n  \"player_team\": \"T\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"EpikBrodey\"}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_taser\",\r\n  \"weapon_type\": null\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 62,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 55,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 46,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 44,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 36,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"reloading",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 36,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 62,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"death",
      "data":"{\r\n  \"totalDeaths\": 3\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"clistrlyc\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"govvvenor\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"AE Æ\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"aug\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"clistrlyc\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"jacobtuckert\",\"assister\":\"mk_ultrA\",\"weapon\":\"m4a1\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"LordXKrull\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"LordXKrull\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"mk_ultrA\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"jacobtuckert\",\"assister\":\"mk_ultrA\",\"weapon\":\"m4a1\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"LordXKrull\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"LordXKrull\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"mk_ultrA\"}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"T\",\r\n  \"bomb\": \"exploded\"\r\n}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_glock\",\r\n  \"weapon_type\": \"Pistol\"\r\n}"
    },
    {
      "name":"round_start",
      "data":"{\r\n  \"num_of_rounds\": 7,\r\n  \"player_team\": \"T\"\r\n}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"weapon_change",
      "data":"{\r\n  \"weapon_name\": \"weapon_glock\",\r\n  \"weapon_type\": \"Pistol\"\r\n}"
    },
    {
      "name":"weapon_change",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"death",
      "data":"{\r\n  \"totalDeaths\": 4\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"mp9\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"clistrlyc\",\"assister\":\"\",\"weapon\":\"g3sg1\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":true,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"govvvenor\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"LordXKrull\",\"assister\":\"\",\"weapon\":\"sg556\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"BOT Yahn\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"govvvenor\",\"weapon\":\"mp9\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"clistrlyc\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"mp5sd\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"qq\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"mp9\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"LordXKrull\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"mp9\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"LordXKrull\"}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"CT\",\r\n  \"bomb\": null\r\n}"
    },
    {
      "name":"round_start",
      "data":"{\r\n  \"num_of_rounds\": 8,\r\n  \"player_team\": \"T\"\r\n}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_mac10\",\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"qq\",\"assister\":\"\",\"weapon\":\"sg556\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":true,\"flashed\":false,\"victim\":\"govvvenor\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"jacobtuckert\",\"assister\":\"\",\"weapon\":\"m4a1\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"clistrlyc\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"black kid\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"jacobtuckert\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"black kid\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"jacobtuckert\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"black kid\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"LordXKrull\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"LordXKrull\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"\",\"weapon\":\"glock\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"AE Æ\"}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_mac10\",\r\n  \"weapon_current_ammo\": 28,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_mac10\",\r\n  \"weapon_current_ammo\": 26,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"reloading",
      "data":"{\r\n  \"weapon_name\": \"weapon_mac10\",\r\n  \"weapon_current_ammo\": 26,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"AE Æ\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Tango\"}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_mac10\",\r\n  \"weapon_current_ammo\": 28,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"death",
      "data":"{\r\n  \"totalDeaths\": 5\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Chance C. | 3C-33 | Civ...\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"qq\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Chance C. | 3C-33 | Civ...\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Dispenser\"}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"CT\",\r\n  \"bomb\": null\r\n}"
    },
    {
      "name":"round_start",
      "data":"{\r\n  \"num_of_rounds\": 9,\r\n  \"player_team\": \"T\"\r\n}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"black kid\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"clistrlyc\",\"assister\":\"\",\"weapon\":\"g3sg1\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"1two3\"}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 62,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"reloading",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 59,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 59,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Dispenser\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"jacobtuckert\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"govvvenor\",\"assister\":\"\",\"weapon\":\"aug\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"clistrlyc\"}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 62,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 54,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 46,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"reloading",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 45,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 45,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 62,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"death",
      "data":"{\r\n  \"totalDeaths\": 6\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Tango\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Dispenser\",\"assister\":\"clistrlyc\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"govvvenor\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Dispenser\",\"assister\":\"clistrlyc\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"govvvenor\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"famas\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Dispenser\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"famas\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Dispenser\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"LordXKrull\",\"assister\":\"Smile\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"mk_ultrA\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"LordXKrull\",\"assister\":\"Smile\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"mk_ultrA\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Chance C. | 3C-33 | Civ...\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"qq\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"LordXKrull\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Chance C. | 3C-33 | Civ...\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"LordXKrull\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"AE Æ\"}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"T\",\r\n  \"bomb\": null\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"LordXKrull\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"AE Æ\"}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"round_start",
      "data":"{\r\n  \"num_of_rounds\": 10,\r\n  \"player_team\": \"T\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 29,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"jacobtuckert\",\"assister\":\"\",\"weapon\":\"ssg08\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"LordXKrull\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"clistrlyc\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"jacobtuckert\"}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 27,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 21,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 14,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Smile\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"AE Æ\"}"
    },
    {
      "name":"kill",
      "data":"{\r\n  \"totalKills\": 0\r\n}"
    },
    {
      "name":"headshot",
      "data":"{\r\n  \"headshotsInRound\": 1\r\n}"
    },
    {
      "name":"reloading",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 11,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 11,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Smile\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"AE Æ\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Chance C. | 3C-33 | Civ...\",\"assister\":\"\",\"weapon\":\"hegrenade\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Tango\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Chance C. | 3C-33 | Civ...\",\"assister\":\"\",\"weapon\":\"hegrenade\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Tango\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"govvvenor\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"qq\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"Chance C. | 3...\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"SMP500\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"Chance C. | 3...\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"SMP500\"}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"CT\",\r\n  \"bomb\": null\r\n}"
    },
    {
      "name":"death",
      "data":"{\r\n  \"totalDeaths\": 7\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"AE Æ\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"CT\",\r\n  \"bomb\": null\r\n}"
    },
    {
      "name":"round_start",
      "data":"{\r\n  \"num_of_rounds\": 11,\r\n  \"player_team\": \"T\"\r\n}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"qq\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Dispenser\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Apreah\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"1two3\"}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_bizon\",\r\n  \"weapon_current_ammo\": 62,\r\n  \"weapon_max_ammo\": 64,\r\n  \"weapon_type\": \"Submachine Gun\"\r\n}"
    },
    {
      "name":"death",
      "data":"{\r\n  \"totalDeaths\": 8\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"LordXKrull\",\"assister\":\"Dispenser\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"mk_ultrA\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"mk_ultrA\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"LordXKrull\",\"assister\":\"Dispenser\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"mk_ultrA\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"BOT(DABMUN)\",\"assister\":\"\",\"weapon\":\"m4a1\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"clistrlyc\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"SMP500\",\"assister\":\"\",\"weapon\":\"mac10\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Bad Hairline\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"SMP500\",\"assister\":\"LordXKrull\",\"weapon\":\"mac10\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"BOT(DABMUN)\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"SMP500\",\"assister\":\"LordXKrull\",\"weapon\":\"mac10\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"BOT(DABMUN)\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"govvvenor\",\"assister\":\"jacobtuckert\",\"weapon\":\"aug\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"SMP500\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"\",\"weapon\":\"sg556\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Chance C. | 3C-33 | Civ...\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"\",\"weapon\":\"sg556\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Chance C. | 3C-33 | Civ...\"}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"CT\",\r\n  \"bomb\": null\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"Chance C. | 3...\",\"weapon\":\"mac10\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Tango\"}"
    },
    {
      "name":"round_start",
      "data":"{\r\n  \"num_of_rounds\": 12,\r\n  \"player_team\": \"T\"\r\n}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"SMP500\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Bad Hairline\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"SMP500\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Bad Hairline\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"SMP500\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"BOT(DABMUN)\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"1two3\",\"assister\":\"\",\"weapon\":\"scar20\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Tango\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"SMP500\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"BOT(DABMUN)\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"1two3\",\"assister\":\"\",\"weapon\":\"scar20\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Tango\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Apreah\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"mk_ultrA\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"SMP500\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"govvvenor\",\"assister\":\"\",\"weapon\":\"aug\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"clistrlyc\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"govvvenor\",\"assister\":\"\",\"weapon\":\"aug\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"LordXKrull\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"death",
      "data":"{\r\n  \"totalDeaths\": 9\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"SMP500\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"govvvenor\",\"assister\":\"\",\"weapon\":\"aug\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"clistrlyc\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"govvvenor\",\"assister\":\"\",\"weapon\":\"aug\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"LordXKrull\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"mk_ultrA\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Apreah\"}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"CT\",\r\n  \"bomb\": null\r\n}"
    },
    {
      "name":"round_start",
      "data":"{\r\n  \"num_of_rounds\": 13,\r\n  \"player_team\": \"T\"\r\n}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 28,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 22,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 16,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 9,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 2,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"reloading",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 0,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 0,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Dispenser\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"mk_ultrA\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"BOT(DABMUN)\",\"assister\":\"\",\"weapon\":\"elite\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":true,\"flashed\":false,\"victim\":\"SMP500\"}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 28,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"govvvenor\",\"assister\":\"\",\"weapon\":\"aug\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"qq\"}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 27,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 24,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Dispenser\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Chance C. | 3C-33 | Civ...\"}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 17,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 11,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"clistrlyc\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"clistrlyc\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Dispenser\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Chance C. | 3C-33 | Civ...\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Dispenser\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"AE Æ\"}"
    },
    {
      "name":"reloading",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 11,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"BOT(DABMUN)\",\"assister\":\"mk_ultrA\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"LordXKrull\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"clistrlyc\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Dispenser\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"AE Æ\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"BOT(DABMUN)\",\"assister\":\"mk_ultrA\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"LordXKrull\"}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_smokegrenade\",\r\n  \"weapon_type\": \"Grenade\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 24,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Dispenser\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"AE Æ\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"BOT(DABMUN)\",\"assister\":\"mk_ultrA\",\"weapon\":\"ak47\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"LordXKrull\"}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 18,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 12,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"govvvenor\",\"assister\":\"mk_ultrA\",\"weapon\":\"aug\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Dispenser\"}"
    },
    {
      "name":"death",
      "data":"{\r\n  \"totalDeaths\": 10\r\n}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"CT\",\r\n  \"bomb\": null\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"BOT(DABMUN)\",\"assister\":\"Chance C. | 3...\",\"weapon\":\"elite\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"govvvenor\",\"assister\":\"mk_ultrA\",\"weapon\":\"aug\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Dispenser\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"BOT(DABMUN)\",\"assister\":\"Chance C. | 3...\",\"weapon\":\"elite\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"CT\",\r\n  \"bomb\": null\r\n}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"round_start",
      "data":"{\r\n  \"num_of_rounds\": 14,\r\n  \"player_team\": \"T\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"\",\"weapon\":\"xm1014\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Chance C. | 3C-33 | Civ...\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"\",\"weapon\":\"xm1014\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"BOT(DABMUN)\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"\",\"weapon\":\"xm1014\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Chance C. | 3C-33 | Civ...\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"govvvenor\",\"assister\":\"\",\"weapon\":\"aug\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"clistrlyc\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"\",\"weapon\":\"xm1014\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"BOT(DABMUN)\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"\",\"weapon\":\"xm1014\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"jacobtuckert\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"govvvenor\",\"assister\":\"\",\"weapon\":\"aug\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"clistrlyc\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Tango\",\"assister\":\"\",\"weapon\":\"xm1014\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"jacobtuckert\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"govvvenor\",\"assister\":\"\",\"weapon\":\"aug\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"qq\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"govvvenor\",\"assister\":\"\",\"weapon\":\"aug\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"qq\"}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 29,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 28,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 25,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Smile\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"mk_ultrA\"}"
    },
    {
      "name":"kill",
      "data":"{\r\n  \"totalKills\": 1\r\n}"
    },
    {
      "name":"headshot",
      "data":"{\r\n  \"headshotsInRound\": 1\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 22,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"reloading",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 22,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Smile\",\"assister\":\"\",\"weapon\":\"ak47\",\"headshot\":true,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"mk_ultrA\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"p90\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"SMP500\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"AE Æ\",\"assister\":\"\",\"weapon\":\"p90\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"SMP500\"}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_ak47\",\r\n  \"weapon_current_ammo\": 28,\r\n  \"weapon_max_ammo\": 30,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"death",
      "data":"{\r\n  \"totalDeaths\": 11\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Apreah\",\"assister\":\"mk_ultrA\",\"weapon\":\"deagle\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"1two3\",\"assister\":\"\",\"weapon\":\"scar20\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Tango\"}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"CT\",\r\n  \"bomb\": null\r\n}"
    },
    {
      "name":"match_start",
      "data":"{\r\n  \"player_team\": \"CT\"\r\n}"
    },
    {
      "name":"team_round_win",
      "data":"{\r\n  \"winningTeam\": \"CT\",\r\n  \"bomb\": null\r\n}"
    },
    {
      "name":"match_end",
      "data":"{}"
    },
    {
      "name":"player_activity_change",
      "data":"{\r\n  \"activity\": \"menu\"\r\n}"
    },
    {
      "name":"player_activity_change",
      "data":"{\r\n  \"activity\": \"menu\"\r\n}"
    },
    {
      "name":"player_activity_change",
      "data":"{\r\n  \"activity\": \"playing\"\r\n}"
    },
    {
      "name":"match_start",
      "data":"{\r\n  \"player_team\": null\r\n}"
    },
    {
      "name":"player_activity_change",
      "data":"{\r\n  \"activity\": \"playing\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Yaycan\",\"assister\":\"\",\"weapon\":\"world\",\"headshot\":false,\"suicide\":true,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Yaycan\"}"
    },
    {
      "name":"weapon_acquired",
      "data":"{\r\n  \"weapon_name\": \"weapon_famas\",\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Yaycan\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"LordXKrull\"}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_famas\",\r\n  \"weapon_current_ammo\": 23,\r\n  \"weapon_max_ammo\": 25,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"fired",
      "data":"{\r\n  \"weapon_name\": \"weapon_famas\",\r\n  \"weapon_current_ammo\": 21,\r\n  \"weapon_max_ammo\": 25,\r\n  \"weapon_type\": \"Rifle\"\r\n}"
    },
    {
      "name":"kill_feed",
      "data":"{\"attacker\":\"Yaycan\",\"assister\":\"\",\"weapon\":\"awp\",\"headshot\":false,\"suicide\":false,\"wallbang\":false,\"revenge\":false,\"domination\":false,\"noscope\":false,\"throughsmoke\":false,\"flashed\":false,\"victim\":\"Smile\"}"
    },
    {
      "name":"death",
      "data":"{\r\n  \"totalDeaths\": 1\r\n}"
    },
    {
      "name":"player_activity_change",
      "data":"{\r\n  \"activity\": \"menu\"\r\n}"
    },
    {
      "name":"player_activity_change",
      "data":"{\r\n  \"activity\": \"menu\"\r\n}"
    },
    {
      "name":"match_end",
      "data":"{}"}]}