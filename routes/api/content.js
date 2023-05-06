const express = require("express");
const app = express();

var season = 1;
var currentSeason = 1;
var stage = `season${season}`;

// changes season 10 to season x for background.
if ((currentSeason = 10)) {
  season = "x";
} else {
  season = currentSeason;
}

app.get("/api/pages/fortnite-game", (req, res) => {
  // get current season
  currentSeason = req.headers["user-agent"].split("-")[1].split(".")[0];

  // switch to v6.21 background
  if (req.headers["user-agent"].split("-").includes("6.21")) {
    stage = "fortnitemares";
  }

  res.json({
    _title: "Fortnite Game",
    _activeDate: "2017-08-30T03:20:48.050Z",
    lastModified: "2019-11-01T17:33:35.346Z",
    _locale: "en-US",
    loginmessage: {},
    survivalmessage: {
      _title: "survivalmessage",
      overrideablemessage: {
        _type: "CommonUI Simple Message",
        message: {
          _type: "CommonUI Simple Message Base",
          title: "The Survive the Storm event is now live!",
          body: "Take the pledge:\nSelect a target survival time of 3 or 7 nights.\n\nSend Feedback:\nSurvive the Storm is still in development. We’d love to hear what you think.",
        },
      },
      _activeDate: "2017-08-25T20:35:56.304Z",
      lastModified: "2017-12-12T17:14:26.597Z",
      _locale: "en-US",
    },
    athenamessage: {
      _title: "athenamessage",
      overrideablemessage: {
        _type: "CommonUI Simple Message",
        message: {
          image:
            "https://cdn2.unrealengine.com/Fortnite/RUS-Axe-1921x1082-fb41e51e9a280b9752b42e2b94b31e34d5758870.png",
          _type: "CommonUI Simple Message Base",
          title: "Test",
          body: "Test",
        },
      },
      _activeDate: "2017-08-30T03:08:31.687Z",
      lastModified: "2017-11-10T15:38:47.250Z",
      _locale: "en-US",
    },
    subgameselectdata: {
      saveTheWorldUnowned: {
        _type: "CommonUI Simple Message",
        message: {
          image: "",
          hidden: false,
          messagetype: "normal",
          _type: "CommonUI Simple Message Base",
          title: {
            de: "Koop-PvE",
            ru: "Сюжетная PvE-кампания",
            ko: "팀과 함께 플레이하는 PvE",
            en: "Co-op PvE",
            it: "PvE co-op",
            fr: "JcE coopératif",
            es: "JcE cooperativo",
            ar: "Co-op PvE",
            ja: "協力PvE",
            pl: "Kooperacyjny tryb PvE",
            "es-419": "JcE cooperativo",
            tr: "Oyuncularla Birlikte PvE",
          },
          body: {
            de: "PVE-Modus, in dem du den Sturm kooperativ bekämpfst!",
            ru: "Совместное сражение с Бурей!",
            ko: '배틀로얄을 플레이하려면 상단의 "배틀로얄" 버튼을 클릭하세요.\n\n팀과 함께하는 PvE 모드, 폭풍과 싸우는 어드벤처!',
            en: "Cooperative PvE storm-fighting adventure!",
            it: "Avventura tempestosa cooperativa PvE!",
            fr: "Une aventure en JcE coopératif pour combattre la tempête !",
            es: "¡Aventura cooperativa JcE de lucha contra la tormenta!",
            ar: "Cooperative PvE storm-fighting adventure!",
            ja: "PvE協力プレイでストームに立ち向かえ！",
            pl: "Kooperacyjne zmagania PvE z burzą i pustakami!",
            "es-419":
              "¡Aventura de lucha contra la tormenta en un JcE cooperativo!",
            tr: "Diğer oyuncularla birlikte PvE fırtınayla savaşma macerası!",
          },
          spotlight: false,
        },
      },
      _title: "subgameselectdata",
      battleRoyale: {
        _type: "CommonUI Simple Message",
        message: {
          image: "",
          hidden: false,
          messagetype: "normal",
          _type: "CommonUI Simple Message Base",
          title: {
            de: "100-Spieler-PvP",
            ru: "PvP-режим на 100 игроков",
            ko: "100명의 플레이어와 함께하는 PvP",
            en: "100 Player PvP",
            it: "PvP a 100 giocatori",
            fr: "JcJ à 100 joueurs",
            es: "JcJ de 100 jugadores",
            ar: "100 Player PvP",
            ja: "100人参加のPvP",
            pl: "PvP dla 100 graczy",
            "es-419": "JcJ de 100 jugadores",
            tr: "100 Oyunculu PvP",
          },
          body: {
            de: "Battle Royale, 100-Spieler-PvP.\n\nFortschritte im PvE haben keinen Einfluss auf Battle Royale.",
            ru: "PvP-режим на 100 игроков «Королевская битва».\n\nПрогресс в кампании не затрагивает «Королевскую битву».",
            ko: "100명의 플레이어와 함께하는 PvP 모드, 배틀로얄.\n\nPvE 모드의 진행 상황은 배틀로얄 플레이에 영향을 주지 않습니다.",
            en: "100 Player PvP Battle Royale.\n\nPvE progress does not affect Battle Royale.",
            it: "Battaglia reale PvP a 100 giocatori.\n\nI progressi in PvE non sono trasferiti nella Battaglia reale.",
            fr: "Un Battle Royale à 100 en JcJ.\n\nLa progression du mode JcE n'affecte pas Battle Royale.",
            es: "Battle Royale JcJ de 100 jugadores.\n\nEl progreso JcE no afecta a Battle Royale.",
            ar: "100 Player PvP Battle Royale.\n\nPvE progress does not affect Battle Royale.",
            ja: "100人参加のPvPバトルロイヤル。\n\nPvEモードの進行状況はバトルロイヤルに影響しません。",
            pl: "Battle Royale: PvP dla 100 graczy\n\nPostępy w kampanii nie wpływają na grę w Battle Royale.",
            "es-419":
              "Batalla campal JcJ de 100 jugadores.\n\nEl progreso de JcE no afecta Batalla campal.",
            tr: "100 Oyunculu PvP Battle Royale. PvE ilerlemesi Battle Royale'i etkilemez.",
          },
          spotlight: false,
        },
      },
      creative: {
        _type: "CommonUI Simple Message",
        message: {
          image: "",
          hidden: false,
          messagetype: "normal",
          _type: "CommonUI Simple Message Base",
          title: {
            de: "Neue vorgestellte Inseln!",
            ru: "Новые рекомендованные острова!",
            ko: "새로운 추천 섬!",
            en: "New Featured Islands!",
            it: "Nuove isole in evidenza!",
            fr: "Nouvelles îles à la Une !",
            es: "¡Nuevas islas destacadas!",
            ar: "New Featured Islands!",
            ja: "新しいおすすめの島！",
            pl: "Nowe wyróżnione wyspy!",
            "es-419": "¡Nuevas islas destacadas!",
            tr: "Yeni Öne Çıkan Adalar!",
          },
          body: {
            de: "Deine Insel. Deine Freunde. Deine Regeln. \n\nEntdecke neue Arten, Fortnite zu spielen. Zocke von der Community erstellte Spiele mit Freunden und erschaffe deine Trauminsel.",
            ru: "Ваш остров. Ваши друзья. Ваши правила. \n\nПробуйте новые развлечения в Fortnite: играйте с друзьями в игры, созданные участниками сообщества, и стройте что угодно на собственном острове.",
            ko: "내가 만든 게임, 내가 세운 규칙, 이제 나만의 섬에서 즐긴다! \n포트나이트 게임을 완전히 새로운 방식으로 플레이해 보세요. 커뮤니티가 만든 게임을 친구들과 플레이해 보고, 여러분의 꿈의 섬을 만들어보세요.",
            en: "Your Island. Your Friends. Your Rules.\n\nDiscover new ways to play Fortnite, play community made games with friends and build your dream island.",
            it: "La tua isola. I tuoi amici. Le tue regole. \n\nScopri nuovi modi per giocare a Fortnite, divertiti insieme ai tuoi amici con i giochi creati dalla community e costruisci la tua isola da sogno.",
            fr: "Votre île. Vos amis. Vos règles.\n\nJouez à Fortnite autrement, éclatez-vous entre amis dans les jeux créés par la communauté et construisez l'île de vos rêves.",
            es: "Vuestra isla. Vuestros amigos. Vuestras reglas. \n\nDescubre nuevas formas de jugar a Fortnite, participa con tus amigos en juegos diseñados por la comunidad y construye la isla de tus sueños.",
            ar: "Your Island. Your Friends. Your Rules.\n\nDiscover new ways to play Fortnite, play community made games with friends and build your dream island.",
            ja: "コミュニティによって作られた島で遊んだり、夢に描いた自分に島を創り、フォートナイトの新しい楽しみ方を発掘しよう。",
            pl: "Twoja wyspa. Twoi znajomi. Twoje zasady. \n\nPoznajcie nowe sposoby na zabawę w Fortnite, zagrajcie ze znajomymi w gry stworzone przez innych graczy i zbudujcie wyspę swoich marzeń.",
            "es-419":
              "Tu isla. Tus amigos. Tus reglas. \n\nDescubre nuevas maneras de jugar Fortnite: juega con tus amigos a juegos diseñados por la comunidad y construye la isla de tus sueños.",
            tr: "Fortnite’ı oynamanın yepyeni yollarını keşfet, topluluğun yaptığı oyunlarda arkadaşlarınla eğlen ve hayalindeki adayı inşa et.",
          },
          spotlight: false,
        },
      },
      saveTheWorld: {
        _type: "CommonUI Simple Message",
        message: {
          image: "",
          hidden: false,
          messagetype: "normal",
          _type: "CommonUI Simple Message Base",
          title: {
            de: "Koop-PvE",
            ru: "Сюжетная PvE-кампания",
            ko: "팀과 함께 플레이하는 PvE",
            en: "Co-op PvE",
            it: "PvE co-op",
            fr: "JcE coopératif",
            es: "JcE cooperativo",
            ar: "Co-op PvE",
            ja: "協力PvE",
            pl: "Kooperacyjny tryb PvE",
            "es-419": "JcE cooperativo",
            tr: "Oyuncularla Birlikte PvE",
          },
          body: {
            de: "PVE-Modus, in dem du den Sturm kooperativ bekämpfst!",
            ru: "Совместное сражение с Бурей!",
            ko: '배틀로얄을 플레이하려면 상단의 "배틀로얄" 버튼을 클릭하세요.\n\n팀과 함께하는 PvE 모드, 폭풍과 싸우는 어드벤처!',
            en: "Cooperative PvE storm-fighting adventure!",
            it: "Avventura tempestosa cooperativa PvE!",
            fr: "Une aventure en JcE coopératif pour combattre la tempête !",
            es: "¡Aventura cooperativa JcE de lucha contra la tormenta!",
            ar: "Cooperative PvE storm-fighting adventure!",
            ja: "PvE協力プレイでストームに立ち向かえ！",
            pl: "Kooperacyjne zmagania PvE z burzą i pustakami!",
            "es-419":
              "¡Aventura de lucha contra la tormenta en un JcE cooperativo!",
            tr: "Diğer oyuncularla birlikte PvE fırtınayla savaşma macerası!",
          },
          spotlight: false,
        },
      },
      _activeDate: "2017-10-11T18:37:23.145Z",
      lastModified: "2019-05-06T12:59:15.974Z",
      _locale: "en-US",
    },
    savetheworldnews: {
      news: {
        _type: "Battle Royale News",
        messages: [
          {
            image:
              "https://raw.githubusercontent.com/secret-pommes/Curium/main/.github/resources/frontend_imgs/apibanner.png",
            hidden: false,
            _type: "CommonUI Simple Message Base",
            adspace: "Welcome!",
            title: "Nintendo Switch Multiplayer!",
            body: "Welcome to Curium / SwitchMP where you can revisit Chapter 1 Season 5 with multiplayer on the Nintendo Switch",
            spotlight: false,
          },
        ],
      },
      _title: "SaveTheWorldNews",
      _noIndex: false,
      alwaysShow: false,
      _activeDate: "2018-08-06T18:25:46.770Z",
      lastModified: "2019-10-30T20:17:48.789Z",
      _locale: "en-US",
    },
    battlepassaboutmessages: {
      news: {
        _type: "Battle Royale News",
        messages: [
          {
            layout: "Right Image",
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/battle-pass-about/Season_8/11BR_Launch_Upsell_HowDoesItWork-1024x1024-faa688dad8111f0a944c351dd7b11e4bff3562aa.png",
            hidden: false,
            _type: "CommonUI Simple Message Base",
            title: "HOW DOES IT WORK?",
            body: "Play to level up your Battle Pass. Earn XP from a variety of in-game activities like searching chests, eliminating opponents, completing challenges, and more! Level up to unlock over 100 rewards including 1500 V-Bucks!. You can purchase the Battle Pass any time during the season for 950 V-Bucks and retroactively unlock any rewards up to your current level.",
            spotlight: false,
          },
          {
            layout: "Left Image",
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/battle-pass-about/Season_8/11BR_Launch_Upsell_WhatsInside-(1)-1024x1024-68356adb3844b46ada633ace2d168af74b446f35.png",
            hidden: false,
            _type: "CommonUI Simple Message Base",
            title: "WHAT’S INSIDE?",
            body: "When you buy the Battle Pass, you’ll instantly receive two exclusive outfits - Turk and Journey! You can earn more exclusive rewards including Emotes, Outfits, Wraps, Pickaxes, Loading Screens and more. You’ll receive a reward each time you level up and for the first time, you can keep leveling up beyond level 100!",
            spotlight: false,
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/battle-pass-about/Season_8/11BR_Launch_Upsell_Badges-1024x1024-94b54a7e241b5747d83095feb1e6fc330c49689f.png",
            hidden: false,
            _type: "CommonUI Simple Message Base",
            title: "New This Season: Medals! ",
            body: "Battle Pass progression has been entirely reworked this Season. Advance your Battle Pass by completing challenges and earning in-game Medals! Earn daily medals and fill out your punch card to maximize your XP.",
            spotlight: false,
          },
        ],
      },
      _title: "BattlePassAboutMessages",
      _noIndex: false,
      _activeDate: "2018-06-20T18:15:07.002Z",
      lastModified: "2019-10-14T20:42:20.253Z",
      _locale: "en-US",
    },
    playlistinformation: {
      frontend_matchmaking_header_style: "None",
      _title: "playlistinformation",
      frontend_matchmaking_header_text: "",
      playlist_info: {
        _type: "Playlist Information",
        playlists: [
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_2v2_GunFright_LTM-1024x512-f3b0f0157e8652a23db8abc23814d97893179e20.jpg",
            playlist_name: "Playlist_Creative_Hyena_G",
            violator: "COMMUNITY CREATION",
            _type: "FortPlaylistInfo",
            description:
              "Code BluDrive \r\n\r\nIt's 2 vs 2 in a battle of champions, which duo will come out on top? \r\n\r\nAt the beginning of each round, all players will be granted the same random kit. The duo that has the most wins after 5 rounds are completed will be crowned the victors! \r\n\r\nCreated By: BluDrive",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_LTM_ModeTile-1024x512-aae4d5b5eb1ea4eeb31f852c8b98516681bfe769.jpg",
            playlist_name: "Playlist_DADBRO_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_LTM_ModeTile-1024x512-aae4d5b5eb1ea4eeb31f852c8b98516681bfe769.jpg",
            playlist_name: "Playlist_DADBRO_Squads_12",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/11BR_LTM_ModeTile-1024x512-aae4d5b5eb1ea4eeb31f852c8b98516681bfe769.jpg",
            playlist_name: "Playlist_DADBRO_Squads_8",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile_Red-1024x512-2e1c5e38b652093029befb6a86a44db844474af8.jpg",
            playlist_name: "Playlist_Creative_ZebraWallet_Random2",
            violator: "COMMUNITY CREATION",
            _type: "FortPlaylistInfo",
            description:
              "A solo queue, FFA simulation of the end-game scenario in Battle Royale with a quick moving zone. Randomized spawns and inventory items make each round unique. Stick around after the first game. there are multiple rounds in each session.  Zone Wars is a collection of games made by the community. The four maps included in this playlist are:  Desert created by JotaPeGame. Code: jotapegame Downhill River created by Enigma. Code: enigma Vortex created by Zeroyahero. Code: zeroyahero Colosseum created by Jesgran. Code: jesgran",
            display_name: "SOLO FFA",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile_Blue-1024x512-0f76af6296545de1b2d9da766e76475418bc5940.jpg",
            playlist_name: "Playlist_Creative_ZebraWallet_Random",
            violator: "COMMUNITY CREATION",
            _type: "FortPlaylistInfo",
            description:
              "A party queue, FFA simulation of the end-game scenario in Battle Royale with a quick moving zone. Randomized spawns and inventory items make each round unique. Stick around after the first game. there are multiple rounds in each session.  Zone Wars is a collection of games made by the community. The four maps included in this playlist are:  Desert created by JotaPeGame. Code: jotapegame Downhill River created by Enigma. Code: enigma Vortex created by Zeroyahero. Code: zeroyahero Colosseum created by Jesgran. Code: jesgran",
            display_name: "PARTY FFA",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/FORT_Tile_Tutorial-1024x512-72a618fa185a0bbc26ab6a290bc0a45cf460c576.png",
            playlist_name: "Playlist_Tutorial_1",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile-1024x512-a2741f113a7178ca15d71d281dcc2b614ff90754.jpg",
            playlist_name: "Playlist_Creative_ZebraWallet_A",
            violator: "PARTY FFA",
            _type: "FortPlaylistInfo",
            description:
              "Code jesgran Zone Wars - Arena  A party, FFA simulation of the end-game scenario in Battle Royale with a quick-moving zone. Eliminate the competition as you avoid the Storm. Randomized spawns and inventory items make each round unique. Stick around after the first game. There are multiple rounds in each session. Become the ultimate gladiator in this Colosseum style island. An open style island demands quick building. Created by Jesgran.",
            display_name: "Colosseum",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile_Red-1024x512-2e1c5e38b652093029befb6a86a44db844474af8.jpg",
            playlist_name: "Playlist_Creative_ZebraWallet_D",
            violator: "SOLO FFA",
            _type: "FortPlaylistInfo",
            description:
              "Code jotapegame Desert Zone Wars 4.1  \r\n\r\nA solo, FFA simulation of the end-game scenario in Battle Royale with a quick-moving zone. Eliminate the competition as you avoid the Storm. Randomized spawns and inventory items make each round unique. Stick around after the first game. There are multiple rounds in each session.  \r\n\r\nMake your way through a small desert town to the final circle. A diverse set of weapons and mobility allows for unique gameplay and lots of replayability.  \r\n\r\nCreated by JotaPeGame.",
            display_name: "Desert",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile_Blue-1024x512-0f76af6296545de1b2d9da766e76475418bc5940.jpg",
            playlist_name: "Playlist_Creative_ZebraWallet_DH",
            violator: "PARTY FFA",
            _type: "FortPlaylistInfo",
            description:
              "Code enigma S10 Enigmas Downhill River Zonewars X  A party, FFA simulation of the end-game scenario in Battle Royale with a quick-moving zone. Eliminate the competition as you avoid the Storm. Randomized spawns and inventory items make each round unique. Stick around after the first game. There are multiple rounds in each session.  Stay out of the storm as you move downhill through a river in this original style Zone Wars island. Community launch pads and a consistent Storm path allows for familiarity after a few rounds.  Created by Enigma.",
            display_name: "Downhill River",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_ZoneWars_In-Game_ModeTile_Black-1024x512-23ba95e82931361ce535a643fdac54e120254374.jpg",
            playlist_name: "Playlist_Creative_ZebraWallet_V",
            violator: "PARTY FFA",
            _type: "FortPlaylistInfo",
            description:
              "Code zeroyahero Vortex Zone Wars A party, FFA simulation of the end-game scenario in Battle Royale with a quick-moving zone. Eliminate the competition as you avoid the Storm. Randomized spawns and inventory items make each round unique. Stick around after the first game. There are multiple rounds in each session.  This island puts a unique twist on the Zone Wars game with mountainous terrain to traverse. The elevation change from zone to zone can be quite drastic!  Created by Zeroyahero",
            display_name: "Vortex",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_TheCombine_ModeTile-1024x512-3aa8ebdfe1df7d9995e824a781eacdb954ee9615.jpg",
            playlist_name: "Playlist_Crucible_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR_LTM-Tile_Playground-1024x512-53db8a4b5fb41251af279eaf923bc00ecbc17792.jpg",
            playlist_name: "Playlist_Creative_PlayOnly_40",
            special_border: "None",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10CM_LTM_KnockTown_Playlist-1024x512-72e32b88b332b4d3ee3ee5255eff9522b660485c.jpg",
            playlist_name: "Playlist_Creative_KaleTofu",
            violator: "COMMUNITY CREATION",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_Bounty_LTM_ModeTile-1024x512-57ae30f0c598acda4be4975930ad30e210debb61.jpg",
            playlist_name: "Playlist_Bounty_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_Bounty_LTM_ModeTile-1024x512-57ae30f0c598acda4be4975930ad30e210debb61.jpg",
            playlist_name: "Playlist_Bounty_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_Bounty_LTM_ModeTile-1024x512-57ae30f0c598acda4be4975930ad30e210debb61.jpg",
            playlist_name: "Playlist_Bounty_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/09CM_WorldCup_FeatIsland_WorldRun_ModeTile-1024x512-34d66c90603f4e64ebd56054b889c4ec163abea5.jpg",
            playlist_name: "Playlist_Creative_Squad_Battle_16_B",
            violator: "COMMUNITY CREATION",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_SneakySilencers-1024x512-1669e2eeddca63b61e9b94cc19c3ec502fd33f29.jpg",
            playlist_name: "Playlist_Sneaky_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/09CM_WorldCup_FeatIsland_JunkyardJuke_ModeTile-1024x512-7a2585ce248f1efa438674c368b37116dc5514de.jpg",
            playlist_name: "Playlist_Creative_Squad_Battle_16_A",
            violator: "COMMUNITY CREATION",
            _type: "FortPlaylistInfo",
            description: "",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/09CM_WorldCup_FeatIsland_SkyStation_ModeTile-1024x512-a5424f9ac27626a73646c9fd158901c4c363ec0c.jpg",
            playlist_name: "Playlist_Creative_Squad_Battle_32_A",
            violator: "COMMUNITY CREATION",
            _type: "FortPlaylistInfo",
            description:
              "Created by Team Evolve. Featured in the Fortnite World Cup Creative Finals.  Battle other squads to capture zones and score points! Any player can capture a zone and score points for your team. Use impulse grenades to blast other teams out of the capture zones. Players can now earn XP after each game and the top three teams will earn bonus XP.",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_OneShot-1024x512-9914c2c88b21f72f9628681e0cbcd20bb7311a3f.jpg",
            playlist_name: "Playlist_Low_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_HeavyMetal_ModeTile-1024x512-4db8223707fb313220eef577dafde5c14106e49d.jpg",
            playlist_name: "Playlist_Heavy_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/09CM_In-Game_PropHunt_ModeTile-1024x512-1510311027a93a720b42ed22e711c7e478931adb.jpg",
            playlist_name: "Playlist_Creative_PuppyHugs",
            violator: "PLAYER MADE!",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Unvaulted-1024x512-d3cbe3c4a756190279af4ce98773d6599f7aab4f.jpg",
            playlist_name: "Playlist_Unvaulted_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/br06-teamrumble-800x450-800x450-a2265b85af06.jpg",
            playlist_name: "Playlist_Creative_TDM_v1",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/EN_CM09_BeachAssaultCreativeLTM_ContestWinner_ModeTile-1024x512-9cdeb2e0ea37179a37d3384cf73c9949d2d19546.jpg",
            playlist_name: "Playlist_Creative_BeachAssault",
            violator: "PLAYER MADE",
            _type: "FortPlaylistInfo",
            display_name: "BEACH ASSAULT BY PRUDIZ",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Barebones-1024x512-4a29337febb04e9043d57c9e61afe849f8a9e9c7.jpg",
            playlist_name: "Playlist_Hard_Solo",
            _type: "FortPlaylistInfo",
            description:
              "This mode has the map, compass, storm timer and many other elements of the Heads Up Display turned off.",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_BlueWeapons_ModeTile-1024x512-0c38f1bc3b991943e3f6650bf7acfbcdd8739b1e.jpg",
            playlist_name: "Playlist_Blue_Squads",
            _type: "FortPlaylistInfo",
            description: "",
            display_name: "",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_SolidGold-1024x512-36e202c36d3ef3bd151a97c060401d33ac6f549a.png",
            playlist_name: "Playlist_SolidGold_Squads",
            _type: "FortPlaylistInfo",
            description: "",
            display_name: "",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_PurpleReign_ModeTile-1024x512-c5a7e2bd3f32b83f17e4fa28817312ab6210133c.jpg",
            playlist_name: "Playlist_Purple_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_FullAuto_ModeTile-1024x512-d1532221d738ba3aed434512b7c670e72b89f474.jpg",
            playlist_name: "Playlist_Auto_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_HeavyMetal_ModeTile-1024x512-4db8223707fb313220eef577dafde5c14106e49d.jpg",
            playlist_name: "Playlist_Heavy_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_GunGame_ModeTile-1024x512-409bcc8860d5bd4342f61b9ce0e9f39da7e05ddf.jpg",
            playlist_name: "Playlist_Gungame_Reverse",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_Surfin_ModeTile-1024x512-ebff23e30b121cfe3eecf173949c055325522090.jpg",
            playlist_name: "Playlist_Race_12",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_DeaglesandHeadshots_ModeTile-1024x512-4d969f5a9126ba71b7ee77088fd22df5b4c7caba.jpg",
            playlist_name: "Playlist_Beagles_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_LeaveNoneBehind_ModeTile-1024x512-bfe65d02a5d42577d22c133d25ad9c9fb62a35a0.jpg",
            playlist_name: "Playlist_Behind_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_LoadoutSwap_ModeTile-1024x512-f73c146f8ccc7998aab14f8c1957f0ad01faa933.jpg",
            playlist_name: "Playlist_Swap_Squads_Respawn",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_TankBattle_ModeTile-1024x512-48554aae511d9c5a7ac1a5d4fd54e0f5a37bd66d.jpg",
            playlist_name: "Playlist_Tank_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_StrategicStructures_ModeTile-1024x512-4f6f448375284fef60fe2a2c15f292115ebec558.jpg",
            playlist_name: "Playlist_Strategic_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_BuildersParadise_ModeTile-1024x512-730a5ffe51c8f0420b91529d1fc05e081aa2071c.jpg",
            playlist_name: "Playlist_Paradise_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_PowerUp_ModeTile-1024x512-7e1824071133f9eac4ca44c701605923893c85bf.jpg",
            playlist_name: "Playlist_Pow_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_BuilttoLast_ModeTile-1024x512-cf95f4701f41c608ae8590fe588a5a0ea25ed68a.jpg",
            playlist_name: "Playlist_Care_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_Tag_ModeTile-1024x512-d4471981ccdc8d9f444d1f416b3f4458612da006.jpg",
            playlist_name: "Playlist_Tag_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_WaterBalloons_ModeTile-1024x512-ea418e1a4fb6ce21d5f01f2ac18ae60e41e9ef74.jpg",
            playlist_name: "Playlist_Bison_Respawn_Squads",
            _type: "FortPlaylistInfo",
            description: "",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_WaterBalloons_ModeTile-1024x512-ea418e1a4fb6ce21d5f01f2ac18ae60e41e9ef74.jpg",
            playlist_name: "Playlist_Bison_Respawn",
            _type: "FortPlaylistInfo",
            description: "",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_SiphonRumble_ModeTile-1024x512-02ad3c97e4cdc7172f6ea59140b89b004f95886a.jpg",
            playlist_name: "Playlist_Respawn_20_Sif",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/14DaysofSummer/09BR_14DoS_LTM_LavaRumble_ModeTile-1024x512-29cc6ad680519d8f792bf1fa4053cf9191f84b6e.jpg",
            playlist_name: "Playlist_Respawn_20_Lava",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_ModeTile_TDM-1024x512-878ba9f92deb153ec85f2bcbce925e185344290e.jpg",
            playlist_name: "Playlist_Respawn_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/09BR_LTM_HordeRush_Mode_Tile-1024x512-a844840eb58db868b6abfbe18fc8a8f483e18c60.jpg",
            playlist_name: "Playlist_Mash_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/09BR_LTM_DowntownDrop_Screenshot_ModeTile-1024x512-d8ce0a16ae59e2a2f501813ddf540a00e60098b5.jpg",
            playlist_name: "Playlist_Creative_Vigilante",
            violator: "PLAYER MADE!",
            _type: "FortPlaylistInfo",
            description:
              "Created by NotNellaf & Tollmolia in collaboration with Jordan Brand. \r\n\r\nShow off your moves in the Downtown Drop LTM. Launch off massive jumps, grind down city streets and collect coins to win! \r\n\r\nProve you deserve the title of G.O.A.T.",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/09BR_Social_LTM_WicksBounty_Announce_PlaylistTile-1024x512-df3870c355530a7591c7a3fa453c15686c862989.jpg",
            playlist_name: "Playlist_Wax_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/09BR_Social_LTM_WicksBounty_Announce_PlaylistTile-1024x512-df3870c355530a7591c7a3fa453c15686c862989.jpg",
            playlist_name: "Playlist_Wax_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/09BR_Social_LTM_WicksBounty_Announce_PlaylistTile-1024x512-df3870c355530a7591c7a3fa453c15686c862989.jpg",
            playlist_name: "Playlist_Wax_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/09BR_RobotFight_ModeTile-1024x512-2a5383ab45d733d276100a14092da01c5db66fb7.jpg",
            playlist_name: "Playlist_Music_Highest   ",
            violator: "LIVE EVENT!",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/09BR_RobotFight_ModeTile-1024x512-2a5383ab45d733d276100a14092da01c5db66fb7.jpg",
            playlist_name: "Playlist_Music_Higher",
            violator: "LIVE EVENT!",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/10BR_In-Game_Farewell_ModeTile-1024x512-3c6326529cb23dbe465594a4266f2054ba52e4ad.jpg",
            playlist_name: "Playlist_Music_High",
            violator: "LIVE EVENT!",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/09BR_RobotFight_ModeTile-1024x512-2a5383ab45d733d276100a14092da01c5db66fb7.jpg",
            playlist_name: "Playlist_Music_Med",
            violator: "LIVE EVENT!",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v94/09BR_RobotFight_ModeTile-1024x512-2a5383ab45d733d276100a14092da01c5db66fb7.jpg",
            playlist_name: "Playlist_Music_Low",
            violator: "LIVE EVENT!",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_Endgame_InGame_Mode-Tile-1024x512-03bb0dc121ae8b2dcd27b8b386670737093d0c83.jpg",
            playlist_name: "Playlist_Ashton_Sm",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/EN_08BR_DeepFried_Mode_Tile-1024x512-227979fa27053f858066a1a47d68b55f792fded1.jpg",
            playlist_name: "Playlist_Barrier_16_B_Lava",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_AirRoyale_Mode-Tile-1024x512-e071f542b7e0ce2cfc34c208e14604815b76439c.jpg",
            playlist_name: "Playlist_Goose_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_AirRoyale_Mode-Tile-1024x512-e071f542b7e0ce2cfc34c208e14604815b76439c.jpg",
            playlist_name: "Playlist_Goose_Duos_24",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_AirRoyale_Mode-Tile-1024x512-e071f542b7e0ce2cfc34c208e14604815b76439c.jpg",
            playlist_name: "Playlist_Goose_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/CM_LobbyTileArt-1024x512-fbcd48db36552ccb1ab4021b722ea29d515377cc.jpg",
            playlist_name: "Playlist_PlaygroundV2",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR_LTM-Tile_Playground-1024x512-53db8a4b5fb41251af279eaf923bc00ecbc17792.jpg",
            playlist_name: "Playlist_Playground",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_FloorIsLava_ModeTile-1024x512-f1af4cd98c7ff0ce4058f4e3b65a853641d0a35e.jpg",
            playlist_name: "Playlist_Fill_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_FloorIsLava_ModeTile-1024x512-f1af4cd98c7ff0ce4058f4e3b65a853641d0a35e.jpg",
            playlist_name: "Playlist_Fill_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_FloorIsLava_ModeTile-1024x512-f1af4cd98c7ff0ce4058f4e3b65a853641d0a35e.jpg",
            playlist_name: "Playlist_Fill_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_SolidGreen_ModeTile_Squads-1024x512-f0d931472907d54ffaa52ef81f78bf9d5fcfaa2d.jpg",
            playlist_name: "Playlist_Green_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_SolidGreen_ModeTile_Squads-1024x512-f0d931472907d54ffaa52ef81f78bf9d5fcfaa2d.jpg",
            playlist_name: "Playlist_Green_Squad",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_LTM_SolidGreen_ModeTile_Squads-1024x512-f0d931472907d54ffaa52ef81f78bf9d5fcfaa2d.jpg",
            playlist_name: "Playlist_Green_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Slide-1024x512-189625349e80dc81e225691aa952ffd280996058.jpg",
            playlist_name: "Playlist_Slide_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Unvaulted-1024x512-d3cbe3c4a756190279af4ce98773d6599f7aab4f.jpg",
            playlist_name: "Playlist_Classic_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_Drifting50s_Powder-1024x512-5fb24cfd4d83e4cd3a3589b126313beba9cc69a7.jpg",
            playlist_name: "Playlist_Hover",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_Drifting50s_Powder-1024x512-5fb24cfd4d83e4cd3a3589b126313beba9cc69a7.jpg",
            playlist_name: "Playlist_Hover_64",
            violator: "Large Team Mode",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_Drifting50s_Powder-1024x512-5fb24cfd4d83e4cd3a3589b126313beba9cc69a7.jpg",
            playlist_name: "Playlist_Hover_48",
            violator: "Large Team Mode",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_InfinityBlade_v2-1024x512-475608c25c288f7d5c884eeebc47fb565f6f5803.jpg",
            playlist_name: "Playlist_Sword_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_InfinityBlade_v2-1024x512-475608c25c288f7d5c884eeebc47fb565f6f5803.jpg",
            playlist_name: "Playlist_Sword_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_InfinityBlade_v2-1024x512-475608c25c288f7d5c884eeebc47fb565f6f5803.jpg",
            playlist_name: "Playlist_Sword_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_LoveShot_v2-1024x512-cd7b917157be2472bebc3db3b125e9b20174c748.jpg",
            playlist_name: "Playlist_Love_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_LoveShot_v2-1024x512-cd7b917157be2472bebc3db3b125e9b20174c748.jpg",
            playlist_name: "Playlist_Love_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_LoveShot_v2-1024x512-cd7b917157be2472bebc3db3b125e9b20174c748.jpg",
            playlist_name: "Playlist_Love_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_CatchSquads-1024x512-7289222d56b08ef8de20c7187af2670496dca3df.jpg",
            playlist_name: "Playlist_Toss_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_CatchSquads-1024x512-7289222d56b08ef8de20c7187af2670496dca3df.jpg",
            playlist_name: "Playlist_Toss_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_LTM_CatchSquads-1024x512-7289222d56b08ef8de20c7187af2670496dca3df.jpg",
            playlist_name: "Playlist_Toss_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_NFL_TeamRumble-1024x512-6facfc07214965dc2211d703904607a30c68d08a.jpg",
            playlist_name: "Playlist_Omaha",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_WinterDeimos_Squads-1024x512-cf4323aa9c2cfd027484cf4da14544128e3d4c7e.jpg",
            playlist_name: "Playlist_Deimos_Squad_Winter",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_WinterDeimos_Duos_-1024x512-84315aac8d1fcfb840deba46c4dafda8e9005b2a.jpg",
            playlist_name: "Playlist_Deimos_Duo_Winter",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_ModeTile_WinterDeimos_Solo-1024x512-5c759fe60ec85988f35c729b5fb6a7993d8dbb58.jpg",
            playlist_name: "Playlist_Deimos_Solo_Winter",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_OneShot-1024x512-9914c2c88b21f72f9628681e0cbcd20bb7311a3f.jpg",
            playlist_name: "Playlist_Low_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_GroundGame-1024x512-37a4d1d335b4c9427bdc672db0f335f4df813874.jpg",
            playlist_name: "Playlist_Ground_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_WildWest-1024x512-42779242a5a73d654332d9d0afe0983f9d8401d0.jpg",
            playlist_name: "Playlist_WW_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Slide-1024x512-189625349e80dc81e225691aa952ffd280996058.jpg",
            playlist_name: "Playlist_Slide_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_GroundGame-1024x512-37a4d1d335b4c9427bdc672db0f335f4df813874.jpg",
            playlist_name: "Playlist_Ground_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_GroundGame-1024x512-37a4d1d335b4c9427bdc672db0f335f4df813874.jpg",
            playlist_name: "Ground_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_OneShot-1024x512-9914c2c88b21f72f9628681e0cbcd20bb7311a3f.jpg",
            playlist_name: "Playlist_Low_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_HighExplosives50s-1024x512-3a8d44af3c2718b5aaaaebbd4627258a657bf0bf.jpg",
            playlist_name: "Playlist_50v50HE",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_HighExplosives-1024x512-4afc4219531db710e56f3b038e7cd84ca2be7675.jpg",
            playlist_name: "Playlist_HighExplosives_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_HighExplosives-1024x512-4afc4219531db710e56f3b038e7cd84ca2be7675.jpg",
            playlist_name: "Playlist_HighExplosives_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_HighExplosives-1024x512-4afc4219531db710e56f3b038e7cd84ca2be7675.jpg",
            playlist_name: "Playlist_HighExplosives_Squads / Event 24",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_WildWest-1024x512-42779242a5a73d654332d9d0afe0983f9d8401d0.jpg",
            playlist_name: "Playlist_WW_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_SneakySilencers-1024x512-1669e2eeddca63b61e9b94cc19c3ec502fd33f29.jpg",
            playlist_name: "Playlist_Sneaky_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_FoodFight16-1024x512-309538a1b961b5ab0c22417ab34170cc302bbab8.jpg",
            playlist_name: "Playlist_Barrier_16",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_CloseEncounters50s-1024x512-03dcc058e1bec3e853b3ee20594128805223b5a3.jpg",
            playlist_name: "Playlist_Close_50",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_HolidayDisco-1024x512-684bd4b41613e59d895a477389515a8b4878da6a.jpg",
            playlist_name: "Playlist_Disco_32_Alt",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Slide-1024x512-189625349e80dc81e225691aa952ffd280996058.jpg",
            playlist_name: "Playlist_Slide_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Barebones-1024x512-4a29337febb04e9043d57c9e61afe849f8a9e9c7.jpg",
            playlist_name: "Playlist_Hard_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Siphon-1024x512-66cb27084be50387682989b50a01dbc9e42f5a5d.jpg",
            playlist_name: "Playlist_Vamp_Squad",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR07_14-DoF_Social-1024x512-5fa7dd4752d1f0cc1a101f09cb170d0f5b2a31cf.jpg",
            playlist_name: "Playlist_33",
            violator: "",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR_LTM_Unvaulted-1024x512-d3cbe3c4a756190279af4ce98773d6599f7aab4f.jpg",
            playlist_name: "Playlist_Unvaulted_Squads",
            violator: "",
            _type: "FortPlaylistInfo",
            description: "",
            display_name: "",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_ModeTile_TDM-1024x512-878ba9f92deb153ec85f2bcbce925e185344290e.jpg",
            playlist_name: "Playlist_Respawn_24",
            _type: "FortPlaylistInfo",
            description: "",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_ModeTile_LTM_WildWest-1024x512-f67d9d1dd2ca0b290c92b1380240429f0f257a10.jpg",
            playlist_name: "Playlist_WW_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_LobbyTile_FoodFight-1024x512-5e1540a0a2ba0a1f663d32c60cfec3a360278672.png",
            playlist_name: "Playlist_Barrier_12",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_In-GamePlaylist_TeamTerror-1024x512-310430bdaf1b1dd0ecb4d3b180bb6409b7ff6e27.jpg",
            playlist_name: "playlist_deimos_50",
            _type: "FortPlaylistInfo",
            description: "",
            display_name: "",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_Fortnitemares_In-GamePlaylist_1024x512_-Solo-1024x512-7e7fe76e48beb3a06da0592cb26e412265986e4d.jpg",
            playlist_name: "Playlist_Deimos_Solo",
            violator: "",
            _type: "FortPlaylistInfo",
            display_name: "",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_Fortnitemares_In-GamePlaylist_1024x512_Squads-1024x512-783a0812f6acf1f5931c8015e6ad13c0b76c5a9c.jpg",
            playlist_name: "Playlist_Deimos_Squad",
            violator: "",
            _type: "FortPlaylistInfo",
            display_name: "",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_Fortnitemares_In-GamePlaylist_1024x512_Duos-1024x512-1eadb7cfab62c9eb5c90c65577c676d5d0bb15c2.jpg",
            playlist_name: "Playlist_Deimos_Duo",
            violator: "",
            _type: "FortPlaylistInfo",
            display_name: "",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_LobbyTile_LTM_DiscoDomination-1024x512-c79f07de78d8283656fcf4d1ee757f880911d775.jpg",
            playlist_name: "Playlist_Disco_32",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR06_LobbyTile_LTM_DiscoDomination-1024x512-c79f07de78d8283656fcf4d1ee757f880911d775.jpg",
            playlist_name: "Playlist_Disco",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_Soaring50s-1024x512-80762dcc260cc959c11dac2ca2f6ae176eb63ef3.jpg",
            playlist_name: "Playlist_Soaring_Squads",
            special_border: "None",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_Soaring50s-1024x512-80762dcc260cc959c11dac2ca2f6ae176eb63ef3.jpg",
            playlist_name: "Playlist_Soaring_Duos",
            special_border: "None",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_Soaring50s-1024x512-80762dcc260cc959c11dac2ca2f6ae176eb63ef3.jpg",
            playlist_name: "Playlist_Soaring_Solo",
            special_border: "None",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_HighStakes_ModeTile-1024x512-741e576e8ae2e30c256ff3508011760ace890711.jpg",
            playlist_name: "Playlist_Bling_Squads",
            violator: "",
            special_border: "HighStakes",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_HighStakes_ModeTile-1024x512-741e576e8ae2e30c256ff3508011760ace890711.jpg",
            playlist_name: "Playlist_Bling_Duos",
            violator: "",
            special_border: "HighStakes",
            _type: "FortPlaylistInfo",
            description: "",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/08BR_HighStakes_ModeTile-1024x512-741e576e8ae2e30c256ff3508011760ace890711.jpg",
            playlist_name: "Playlist_Bling_Solo",
            violator: "",
            special_border: "HighStakes",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_SolidGold-1024x512-36e202c36d3ef3bd151a97c060401d33ac6f549a.png",
            playlist_name: "Playlist_50v50SAU",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LobbyTile_LTM_ScoreRoyale-1024x512-b608aaf7840cdf6b7a702c5cbe1848a2247516d6.jpg",
            playlist_name: "Playlist_Score_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LobbyTile_LTM_ScoreRoyale-1024x512-b608aaf7840cdf6b7a702c5cbe1848a2247516d6.jpg",
            playlist_name: "Playlist_Score_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LobbyTile_LTM_ScoreRoyale-1024x512-b608aaf7840cdf6b7a702c5cbe1848a2247516d6.jpg",
            playlist_name: "Playlist_Score_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_Soaring50s-1024x512-80762dcc260cc959c11dac2ca2f6ae176eb63ef3.jpg",
            playlist_name: "Playlist_Soaring_50s",
            special_border: "None",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LobbyTile_LTM-Steady-Storm-1024x512-f38e603ed9c80b6210a25c4737d3d8b675b8d28e.jpg",
            playlist_name: "Playlist_Steady_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LobbyTile_LTM-Steady-Storm-1024x512-f38e603ed9c80b6210a25c4737d3d8b675b8d28e.jpg",
            playlist_name: "Playlist_Steady_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LobbyTile_LTM-Steady-Storm-1024x512-f38e603ed9c80b6210a25c4737d3d8b675b8d28e.jpg",
            playlist_name: "Playlist_Steady_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_FlyExplosives-1024x512-6283e3392b3aa44794dac64423b22606f8773503.png",
            playlist_name: "Playlist_FlyExplosives_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_FlyExplosives-1024x512-6283e3392b3aa44794dac64423b22606f8773503.png",
            playlist_name: "Playlist_FlyExplosives_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR05_LTM_FlyExplosives-1024x512-6283e3392b3aa44794dac64423b22606f8773503.png",
            playlist_name: "Playlist_FlyExplosives_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/LTM_Tile_FinalFight-1024x576-5af82788940faeef422ad204aaa241e36e7c9c56.jpg",
            playlist_name: "Playlist_Final_12",
            _type: "FortPlaylistInfo",
          },
          {
            image: "",
            playlist_name: "Playlist_Creative_PlayOnly",
            special_border: "None",
            _type: "FortPlaylistInfo",
            display_subname: "-",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistimages/BR_LTM-Tile_Tactics-Showdown-1024x512-a84753f49eb70d8751a99b4db83cdb5eb8290166.jpg",
            playlist_name: "Playlist_Taxes_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistimages/BR_LTM-Tile_Tactics-Showdown-1024x512-a84753f49eb70d8751a99b4db83cdb5eb8290166.jpg",
            playlist_name: "Playlist_Taxes_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistimages/BR_LTM-Tile_Tactics-Showdown-1024x512-a84753f49eb70d8751a99b4db83cdb5eb8290166.jpg",
            playlist_name: "Playlist_Taxes_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/LTM_Tile_FinalFight-1024x576-5af82788940faeef422ad204aaa241e36e7c9c56.jpg",
            playlist_name: "Playlist_Final_20",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_SniperShootout-1024x512-bcaf8004961e4e374d0603813f840f4b575d230b.jpg",
            playlist_name: "Playlist_Snipers_Squads",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_SniperShootout-1024x512-bcaf8004961e4e374d0603813f840f4b575d230b.jpg",
            playlist_name: "Playlist_Snipers_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_SniperShootout-1024x512-bcaf8004961e4e374d0603813f840f4b575d230b.jpg",
            playlist_name: "Playlist_Snipers_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_BlitzShowdown-1024x512-7eccbc505214ac522cc5dde7b3ceaa3a5f99e754.png",
            playlist_name: "Playlist_Comp_Blitz_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_5x20-1024x512-451b402db5751c25a1e7616930c5ae37d8b20710.png",
            playlist_name: "Playlist_5x20",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_Blitz-1024x512-98c63417095442c210177ee9b5f3463d0003cd5a.png",
            playlist_name: "Playlist_Blitz_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_Blitz-1024x512-98c63417095442c210177ee9b5f3463d0003cd5a.png",
            playlist_name: "Playlist_Blitz_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_Blitz-1024x512-98c63417095442c210177ee9b5f3463d0003cd5a.png",
            playlist_name: "Playlist_Blitz_Squad",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_CloseEncounters-1024x512-e617b7603adb59353ba81ed392174859c0c6807b.jpg",
            playlist_name: "Playlist_Close_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_CloseEncounters-1024x512-e617b7603adb59353ba81ed392174859c0c6807b.jpg",
            playlist_name: "Playlist_Close_Squad",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_CloseEncounters-1024x512-e617b7603adb59353ba81ed392174859c0c6807b.jpg",
            playlist_name: "Playlist_Close_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_SoloShowdown-1024x512-0f522b0881adebfe241c6527f03c9140f70b88a7.png",
            playlist_name: "Playlist_Comp_Solo",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_SolidGold-1024x512-36e202c36d3ef3bd151a97c060401d33ac6f549a.png",
            playlist_name: "Playlist_SolidGold_Solo",
            violator: "",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/BR04_LTM_SolidGold-1024x512-36e202c36d3ef3bd151a97c060401d33ac6f549a.png",
            playlist_name: "Playlist_SolidGold_Duos",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/LTM_50v50-1024x512-788bf1a67426f54307c4296123ac2d3ff8cc0d6c.png",
            playlist_name: "Playlist_50v50",
            _type: "FortPlaylistInfo",
          },
          {
            image: "",
            playlist_name: "Playlist_Carmine",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR_LobbyTileArt_Solo-512x512-24446ea2a54612c5604ecf0e30475b4dec81c3bc.png",
            playlist_name: "Playlist_DefaultSolo",
            hidden: false,
            special_border: "None",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR_LobbyTileArt_Duo-512x512-5dea8dfae97bddcd4e204dd47bfb245d3f68fc7b.png",
            playlist_name: "Playlist_DefaultDuo",
            hidden: false,
            special_border: "None",
            _type: "FortPlaylistInfo",
          },
          {
            playlist_name: "Playlist_Trios",
            hidden: false,
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR_LobbyTileArt_Squad-512x512-5225ec6ca3265611957834c2c549754fe1778449.png",
            playlist_name: "Playlist_DefaultSquad",
            hidden: false,
            special_border: "None",
            _type: "FortPlaylistInfo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlistinformation/v12/partyroyaleupdated/EN_12PR_In-Game_Launch_ModeTile-1024x512-13cf734f07363d61f6fec3a2f5486a3550035c32.jpg",
            playlist_name: "Playlist_Papaya",
            hidden: false,
            special_border: "None",
            _type: "FortPlaylistInfo",
          },
        ],
      },
      _noIndex: false,
      _activeDate: "2018-04-25T15:05:39.956Z",
      lastModified: "2019-10-29T14:05:17.030Z",
      _locale: "en-US",
    },
    playlistimages: {
      playlistimages: {
        images: [
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_SolidGold-1024x512-36e202c36d3ef3bd151a97c060401d33ac6f549a.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_50v50SAU",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_SolidGold-1024x512-36e202c36d3ef3bd151a97c060401d33ac6f549a.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_SolidGold_Duos",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR05_LobbyTile_LTM_ScoreRoyale-1024x512-b608aaf7840cdf6b7a702c5cbe1848a2247516d6.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Score_Squads",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR05_LobbyTile_LTM_ScoreRoyale-1024x512-b608aaf7840cdf6b7a702c5cbe1848a2247516d6.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Score_Duos",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR05_LobbyTile_LTM_ScoreRoyale-1024x512-b608aaf7840cdf6b7a702c5cbe1848a2247516d6.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Score_Solo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR05_LTM_Soaring50s-1024x512-80762dcc260cc959c11dac2ca2f6ae176eb63ef3.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Soaring_50s",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR05_LobbyTile_LTM-Steady-Storm-1024x512-f38e603ed9c80b6210a25c4737d3d8b675b8d28e.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Steady_Squads",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR05_LobbyTile_LTM-Steady-Storm-1024x512-f38e603ed9c80b6210a25c4737d3d8b675b8d28e.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Steady_Duos",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR05_LobbyTile_LTM-Steady-Storm-1024x512-f38e603ed9c80b6210a25c4737d3d8b675b8d28e.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Steady_Solo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR05_LTM_FlyExplosives-1024x512-6283e3392b3aa44794dac64423b22606f8773503.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_FlyExplosives_Squads",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR05_LTM_FlyExplosives-1024x512-6283e3392b3aa44794dac64423b22606f8773503.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_FlyExplosives_Duos",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR05_LTM_FlyExplosives-1024x512-6283e3392b3aa44794dac64423b22606f8773503.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_FlyExplosives_Solo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_SniperShootout-1024x512-bcaf8004961e4e374d0603813f840f4b575d230b.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Snipers_Squads",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_SniperShootout-1024x512-bcaf8004961e4e374d0603813f840f4b575d230b.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Snipers_Duos",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_SniperShootout-1024x512-bcaf8004961e4e374d0603813f840f4b575d230b.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Snipers_Solo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_5x20-1024x512-451b402db5751c25a1e7616930c5ae37d8b20710.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_5x20",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_Blitz-1024x512-98c63417095442c210177ee9b5f3463d0003cd5a.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Blitz_Solo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_Blitz-1024x512-98c63417095442c210177ee9b5f3463d0003cd5a.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Blitz_Duos",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_Blitz-1024x512-98c63417095442c210177ee9b5f3463d0003cd5a.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Blitz_Squad",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_CloseEncounters-1024x512-e617b7603adb59353ba81ed392174859c0c6807b.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Close_Solo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_CloseEncounters-1024x512-e617b7603adb59353ba81ed392174859c0c6807b.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Close_Squad",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_CloseEncounters-1024x512-e617b7603adb59353ba81ed392174859c0c6807b.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Close_Duos",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_SolidGold-1024x512-36e202c36d3ef3bd151a97c060401d33ac6f549a.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_SolidGold_Solo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR04_LTM_SolidGold-1024x512-36e202c36d3ef3bd151a97c060401d33ac6f549a.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_SolidGold_Squads",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR_LTM-Tile_Playground-1024x512-53db8a4b5fb41251af279eaf923bc00ecbc17792.jpg",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_Playground",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/LTM_50v50-1024x512-788bf1a67426f54307c4296123ac2d3ff8cc0d6c.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_50v50",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR_LobbyTileArt_Solo-512x512-24446ea2a54612c5604ecf0e30475b4dec81c3bc.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_DefaultSolo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR_LobbyTileArt_Duo-512x512-5dea8dfae97bddcd4e204dd47bfb245d3f68fc7b.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_DefaultDuo",
          },
          {
            image:
              "https://cdn2.unrealengine.com/Fortnite/fortnite-game/playlisttiles/BR_LobbyTileArt_Squad-512x512-5225ec6ca3265611957834c2c549754fe1778449.png",
            _type: "PlaylistImageEntry",
            playlistname: "Playlist_DefaultSquad",
          },
        ],
        _type: "PlaylistImageList",
      },
      _title: "playlistimages",
      _activeDate: "2018-08-07T02:14:56.108Z",
      lastModified: "2018-08-28T15:50:37.174Z",
      _locale: "en-US",
    },

    emergencynotice: {
      news: {
        _type: "Battle Royale News",
        messages: [
          {
            hidden: false,
            _type: "CommonUI Simple Message Base",
            title: "Curium API | SwitchMP",
            body: "Made by: Secret1337 (secret_pommes#1337)\nDiscord: https://discord.gg/V7PRRQHG44",
            spotlight: true,
          },
        ],
      },
      _title: "emergencynotice",
      _noIndex: false,
      alwaysShow: false,
      _activeDate: "2018-08-06T19:00:26.217Z",
      lastModified: "2019-10-29T22:32:52.686Z",
      _locale: "en-US",
    },
    emergencynoticev2: {
      "jcr:isCheckedOut": true,
      _title: "emergencynoticev2",
      _noIndex: false,
      "jcr:baseVersion": "a7ca237317f1e771e921e2-7f15-4485-b2e2-553b809fa363",
      emergencynotices: {
        _type: "Emergency Notices",
        emergencynotices: [
          {
            gamemodes: [],
            hidden: false,
            _type: "CommonUI Emergency Notice Base",
            title: "Curium API",
            body: "Made by: Secret1337 (secret_pommes#1337)\nMy Github: https://github.com/secret-pommes",
          },
        ],
      },
      _activeDate: "2018-08-06T19:00:26.217Z",
      lastModified: "2021-12-01T15:55:56.012Z",
      _locale: "en-US",
    },
    koreancafe: {
      _title: "KoreanCafe",
      cafe_info: {
        cafes: [
          {
            korean_cafe: "PCB.Partner.Neowiz",
            korean_cafe_description: "ON",
            _type: "PCB Info",
            korean_cafe_header: "PC CAFE BENEFITS",
          },
          {
            korean_cafe: "PCB.Partner.Other",
            korean_cafe_description: "ON",
            _type: "PCB Info",
            korean_cafe_header: "PC CAFE BENEFITS",
          },
        ],
        _type: "PCBs",
      },
      _activeDate: "2018-10-25T18:35:49.659Z",
      lastModified: "2018-11-07T06:37:42.201Z",
      _locale: "en-US",
    },
    creativeAds: {
      ad_info: {
        ads: [],
        _type: "Creative Ad Info",
      },
      _title: "creative-ads",
      _activeDate: "2018-11-09T20:00:42.300Z",
      lastModified: "2019-09-25T15:55:44.830Z",
      _locale: "en-US",
    },
    playersurvey: {
      s: {
        s: [
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Not Motivated",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Motivated",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate how motivated you feel to complete the Chapter 2 - Season 1 Battle Pass",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Not Motivated",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Motivated",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate how motivated you feel to complete the <keyword>Missions and Challenges</> in Chapter 2 - Season 1",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Not Motivated",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Motivated",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate how motivated you feel to complete the <keyword>Medal Punchcard</> in Chapter 2 - Season 1",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            sg: ["a"],
            t: "We want your feedback!",
            id: "191015BattlePassMotivation",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Low",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very High",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate the <keyword>value</> of the Chapter 2 - Season 1 Battle Pass",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Low",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very High",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate the <keyword>quality</> of the content in the Chapter 2 - Season 1 Battle Pass",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Low",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very High",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate the <keyword>variety</> of the content in the Chapter 2 - Season 1 Battle Pass",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            sg: ["a"],
            t: "We want your feedback!",
            id: "191015BattlePassSentiment",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about <keyword>carrying knocked players</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            sg: ["a"],
            t: "We want your feedback!",
            id: "190924_ITEMC_Carrying_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about <keyword>swimming</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            sg: ["a"],
            t: "We want your feedback!",
            id: "190924_ITEMC_Swimming_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about <keyword>fishing</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            sg: ["a"],
            t: "We want your feedback!",
            id: "190924_ITEMC_Fishing_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Slurpy Swamp</> point of interest in Fortnite Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_POIC_Slurpy Swamp_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Holly Hedges</> point of interest in Fortnite Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_POIC_Holly Hedges_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Salty Springs</> point of interest in Fortnite Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_POIC_Salty Springs_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Steamy Stacks</> point of interest in Fortnite Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_POIC_Steamy Stacks_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Dirty Docks</> point of interest in Fortnite Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_POIC_Dirty Docks_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Misty Meadows</> point of interest in Fortnite Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_POIC_Misty Meadows_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Frenzy Farm</> point of interest in Fortnite Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_POIC_Frenzy Farm_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Pleasant Park</> point of interest in Fortnite Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_POIC_Pleasant Park_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Retail Row</> point of interest in Fortnite Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_POIC_Retail Row_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Lazy Lake</> point of interest in Fortnite Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_POIC_Lazy Lake_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Weeping Woods</> point of interest in Fortnite Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_POIC_Weeping Woods_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Craggy Cliffs</> point of interest in Fortnite Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_POIC_Craggy Cliffs_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Sweaty Sands</> point of interest in Fortnite Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_POIC_Sweaty Sands_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Hideouts</> (Haystacks, Dumpsters, etc) in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_ITEMC_Hideouts_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Fishing Rod</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_ITEMC_Fishing Rod_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Upgrade Bench</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_ITEMC_Upgrade Bench_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Bandage Bazooka</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_ITEMC_Bandage Bazooka_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Motorboat</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190924_ITEMC_Motorboat_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Submachine Gun</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Submachine Gun_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Bolt-Action Sniper Rifle</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Bolt-Action Sniper Rifle_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Pump Shotgun</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Pump Shotgun_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Burst Assault Rifle</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Burst Assault Rifle_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Damage Trap</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Damage Trap_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Small Shield Potion</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Small Shield Potion_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Shield Potion</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Shield Potion_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Medkit</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Medkit_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Grenade</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Grenade_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Bandage</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Bandage_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Tactical Shotgun</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Tactical Shotgun_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Pistol</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Pistol_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Rocket Launcher</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Rocket Launcher_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, how do you feel about the <keyword>Assault Rifle</> in Fortnite: Battle Royale?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190619_ITEMC_Assault Rifle_FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_FirstGame",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate your experience in the last game",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190612Game1-HeartbeatNegativePositve-FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Creative_Heartbeats_2000_30d",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate your experience in the last game",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["pc"],
            id: "190417HeartbeatNegativePositve-FNC",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Creative_Heartbeats_2000_30d",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Mostly Creating",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Mostly Playing",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "How did you spend your time in the last game?",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["pc"],
            id: "190405_TimeSpent_FNC",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Overall, do you feel the addition of the Reboot Van to the game is:",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190405RebootVan-FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: true,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_Statless",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Much Too Slow",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Much Too Fast",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate the pace of the last game",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190308Pace-FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
              m: "",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Much Easier",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Much Harder",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Recently do you feel the game is Much Easier (1), the Same (3), or Much Harder (5)",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190308OverallDifficulty-FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: true,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Difficult",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Easy",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate how difficult or easy it is to use the controls for <keyword>Building</>",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Difficult",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Easy",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate how difficult or easy it is to use the controls for <keyword>Combat</>",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Difficult",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Easy",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate how difficult or easy it is to use the controls for <keyword>Moving</>",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["c"],
            id: "190308Controls-StW",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: true,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_Statless",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Difficult",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Easy",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate how difficult or easy it is to use the controls for <keyword>Building</>",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Difficult",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Easy",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate how difficult or easy it is to use the controls for <keyword>Combat</>",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Difficult",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Easy",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate how difficult or easy it is to use the controls for <keyword>Moving</>",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190308Controls-FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "StW_Probabilities_1000_30dCD",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate how you feel about Building in Fortnite Save the World",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Difficult",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Easy",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate how difficult or easy it is to use the Building controls",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["c"],
            id: "190308Building-StW",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate how you feel about Building in Fortnite Battle Royale",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Difficult",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Easy",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate how difficult or easy it is to use the Building controls",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190308Building-FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "StW_Probabilities_1000_30dCD",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate your experience in the last game",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["c"],
            id: "190308HeartbeatNegativePositve-StW",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "StW_Probabilities_1000_30dCD",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Dissatisfied",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Satisfied",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate your satisfaction with the last game",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["c"],
            id: "190308HeartbeatSatisfaction-StW",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Dissatisfied",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Satisfied",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate your satisfaction with the last game",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190308HeartbeatSatisfaction-FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
          {
            rt: false,
            pr: {
              t: "",
              _type: "Player Survey - Message",
            },
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            hidden: false,
            e: false,
            _type: "Player Survey - Survey",
            cm: {
              _type: "Player Survey - Message",
            },
            q: [
              {
                mc: {
                  s: "rating",
                  c: [
                    {
                      t: "Very Negative",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                    {
                      t: "Very Positive",
                      _type: "Player Survey - Multiple Choice Question Choice",
                    },
                  ],
                  t: "Please rate your experience in the last game",
                  _type: "Player Survey - Multiple Choice Question",
                },
                _type: "Player Survey - Question Container",
              },
            ],
            r: "rm",
            t: "We want your feedback!",
            sg: ["a"],
            id: "190308HeartbeatNegativePositve-FNBR",
            po: {
              _type: "Player Survey - Message",
            },
          },
        ],
        cg: [
          {
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Creative_Heartbeats_2000_Platform",
                },
                _type: "Player Survey - Condition Container",
              },
              {
                mc: {
                  s: {
                    t: "a",
                    _type: "Player Survey - Metadata Survey ID",
                  },
                  t: 30,
                  _type: "Player Survey - Condition - Most Recently Completed",
                  o: "g",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "FNBR_Creative_Heartbeats_2000_30d",
          },
          {
            c: [
              {
                _type: "Player Survey - Condition Container",
                o: {
                  c: [
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.015667324,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Android"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.00226297,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["IOS"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.000181053,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["PS4"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.000979775,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Switch"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.000772231,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Windows"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.000375674,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["XboxOne"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                  ],
                  _type: "Player Survey - Condition - Or",
                },
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "FNBR_Creative_Heartbeats_2000_Platform",
          },
          {
            c: [
              {
                mc: {
                  s: {
                    t: "a",
                    _type: "Player Survey - Metadata Survey ID",
                  },
                  t: 14,
                  _type: "Player Survey - Condition - Most Recently Completed",
                  o: "g",
                },
                _type: "Player Survey - Condition Container",
              },
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Probabilities_1000_OldPlayers",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "FNBR_Heartbeats_30dCD_Statless",
          },
          {
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
              {
                ss: {
                  s: "bl",
                  t: 9,
                  _type: "Player Survey - Condition - BR Season Stat",
                  o: "e",
                },
                _type: "Player Survey - Condition Container",
              },
              {
                ab: {
                  t: true,
                  _type: "Player Survey - Condition - BR Battle Pass Owned",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "BPOwnerHeartbeats",
          },
          {
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_30dCD_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
              {
                _type: "Player Survey - Condition Container",
                pi: {
                  q: {
                    t: "s",
                    _type: "Player Survey - Gameplay Tag Query",
                    n: ["Athena.Location.POI.TheBlock"],
                  },
                  _type: "Player Survey - Condition - BR POI",
                },
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "BlockVisitHeartbeats",
          },
          {
            c: [
              {
                _type: "Player Survey - Condition Container",
                o: {
                  c: [
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.06772773450728073,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["XboxOne"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.11253657438667566,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Switch"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.03493083694285315,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["PS4"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.060595043325455976,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Windows"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.028816782894357674,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["IOS"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.11500862564692352,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Android"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                  ],
                  _type: "Player Survey - Condition - Or",
                },
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "FNBR_FirstGame_1000_Platform",
          },
          {
            c: [
              {
                _type: "Player Survey - Condition Container",
                o: {
                  c: [
                    {
                      a: {
                        c: [
                          {
                            as: {
                              s: "MatchesPlayed",
                              pt: ["a"],
                              t: 1,
                              ag: "s",
                              _type:
                                "Player Survey - Condition - BR Match Stat",
                              i: ["gamepad", "touch", "keyboardmouse"],
                              o: "e",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            cg: {
                              _type:
                                "Player Survey - Condition - Condition Group",
                              id: "FNBR_FirstGame_1000_Platform",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            mc: {
                              s: {
                                t: "a",
                                _type: "Player Survey - Metadata Survey ID",
                              },
                              t: 30,
                              _type:
                                "Player Survey - Condition - Most Recently Completed",
                              o: "g",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                  ],
                  _type: "Player Survey - Condition - Or",
                },
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "FNBR_FirstGame",
          },
          {
            c: [
              {
                _type: "Player Survey - Condition Container",
                o: {
                  c: [
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.002751011,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["PS4"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.008374035,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Windows"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.006566055,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["XboxOne"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                  ],
                  _type: "Player Survey - Condition - Or",
                },
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "StW_Probabilities_1000_Platform",
          },
          {
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "FNBR_Heartbeats_SplitAt20",
                },
                _type: "Player Survey - Condition Container",
              },
              {
                mc: {
                  s: {
                    t: "a",
                    _type: "Player Survey - Metadata Survey ID",
                  },
                  t: 14,
                  _type: "Player Survey - Condition - Most Recently Completed",
                  o: "g",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "FNBR_Heartbeats_30dCD_SplitAt20",
          },
          {
            c: [
              {
                _type: "Player Survey - Condition Container",
                o: {
                  c: [
                    {
                      a: {
                        c: [
                          {
                            as: {
                              s: "MatchesPlayed",
                              pt: ["a"],
                              t: 1,
                              ag: "s",
                              _type:
                                "Player Survey - Condition - BR Match Stat",
                              i: ["gamepad", "touch", "keyboardmouse"],
                              o: "ge",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            as: {
                              s: "MatchesPlayed",
                              pt: ["a"],
                              t: 20,
                              ag: "s",
                              _type:
                                "Player Survey - Condition - BR Match Stat",
                              i: ["gamepad", "touch", "keyboardmouse"],
                              o: "l",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            cg: {
                              _type:
                                "Player Survey - Condition - Condition Group",
                              id: "FNBR_Probabilities_1000_NewPlayers",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            as: {
                              s: "MatchesPlayed",
                              pt: ["a"],
                              t: 20,
                              ag: "s",
                              _type:
                                "Player Survey - Condition - BR Match Stat",
                              i: ["gamepad", "touch", "keyboardmouse"],
                              o: "ge",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            cg: {
                              _type:
                                "Player Survey - Condition - Condition Group",
                              id: "FNBR_Probabilities_1000_OldPlayers",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                  ],
                  _type: "Player Survey - Condition - Or",
                },
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "FNBR_Heartbeats_SplitAt20",
          },
          {
            c: [
              {
                _type: "Player Survey - Condition Container",
                o: {
                  c: [
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.007833662,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Android"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.001131485,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["IOS"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.0000905266885133352,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["PS4"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.000489887477101219,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Switch"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.000386115312824342,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Windows"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.000187837,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["XboxOne"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                  ],
                  _type: "Player Survey - Condition - Or",
                },
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "FNBR_Probabilities_1000_OldPlayers",
          },
          {
            c: [
              {
                _type: "Player Survey - Condition Container",
                o: {
                  c: [
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.002188906,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["XboxOne"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.002041152,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Windows"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.002933814,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Switch"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.000678885,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["PS4"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.002164533,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["IOS"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.008357813,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Android"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                  ],
                  _type: "Player Survey - Condition - Or",
                },
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "FNBR_Probabilities_1000_NewPlayers",
          },
          {
            c: [
              {
                mc: {
                  s: {
                    t: "a",
                    _type: "Player Survey - Metadata Survey ID",
                  },
                  t: 30,
                  _type: "Player Survey - Condition - Most Recently Completed",
                  o: "g",
                },
                _type: "Player Survey - Condition Container",
              },
              {
                _type: "Player Survey - Condition Container",
                o: {
                  c: [
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.007833662,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Android"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.001131485,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["IOS"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.0000905266885133352,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["PS4"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.000489887477101219,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Switch"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.000386115312824342,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["Windows", "Mac"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                    {
                      a: {
                        c: [
                          {
                            rd: {
                              p: 0.000187837,
                              _type: "Player Survey - Condition - Random",
                            },
                            _type: "Player Survey - Condition Container OA",
                          },
                          {
                            _type: "Player Survey - Condition Container OA",
                            pl: {
                              p: ["XboxOne"],
                              _type: "Player Survey - Condition - Platform",
                            },
                          },
                        ],
                        _type: "Player Survey - Condition - And",
                      },
                      _type: "Player Survey - Condition Container O",
                    },
                  ],
                  _type: "Player Survey - Condition - Or",
                },
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "FNBR_Probabilities_1000_30dCD",
          },
          {
            c: [
              {
                cg: {
                  _type: "Player Survey - Condition - Condition Group",
                  id: "StW_Probabilities_1000_Platform",
                },
                _type: "Player Survey - Condition Container",
              },
              {
                mc: {
                  s: {
                    t: "a",
                    _type: "Player Survey - Metadata Survey ID",
                  },
                  t: 30,
                  _type: "Player Survey - Condition - Most Recently Completed",
                  o: "g",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "StW_Probabilities_1000_30dCD",
          },
          {
            c: [
              {
                rd: {
                  p: 0.5,
                  _type: "Player Survey - Condition - Random",
                },
                _type: "Player Survey - Condition Container",
              },
            ],
            _type: "Player Survey - Condition Group",
            id: "Percent50",
          },
        ],
        e: true,
        _type: "Player Survey - Survey Root",
      },
      _title: "playersurvey",
      _noIndex: false,
      _activeDate: "2019-10-15T07:50:00.000Z",
      lastModified: "2019-10-15T22:00:24.726Z",
      _locale: "en-US",
    },
    creativeFeatures: {
      ad_info: {
        _type: "Creative Ad Info",
      },
      _title: "Creative Features",
      _activeDate: "2019-03-27T14:47:20.426Z",
      lastModified: "2019-06-20T22:06:24.590Z",
      _locale: "en-US",
    },
    specialoffervideo: {
      _activeDate: "2021-08-14T23:58:00.000Z",
      _locale: "pl",
      _noIndex: false,
      _title: "specialoffervideo",
      bSpecialOfferEnabled: false,
      "jcr:baseVersion": "a7ca237317f1e78e4627c4-c68f-4a12-9480-066c92dd14e5",
      "jcr:isCheckedOut": true,
      lastModified: "2021-07-12T16:08:40.485Z",
      specialoffervideo: {
        _type: "SpecialOfferVideoConfig",
        bCheckAutoPlay: true,
        bStreamingEnabled: true,
        videoString: "",
        videoUID: "",
      },
    },
    subgameinfo: {
      battleroyale: {
        image: "",
        color: "1164c1",
        _type: "Subgame Info",
        description: {
          de: "100 Spieler PvP",
          ru: "PVP-режим на 100 игроков",
          ko: "100인 플레이어 PvP",
          en: "100 Player PvP",
          it: "PvP a 100 giocatori",
          fr: "JcJ à 100 joueurs",
          es: "JcJ de 100 jugadores",
          ar: "100 لاعب ضد لاعب",
          ja: "プレイヤー100人によるPvP",
          pl: "PvP dla 100 graczy",
          "es-419": "JcJ de 100 jugadores",
          tr: "100 Oyunculu PVP",
        },
        subgame: "battleroyale",
        standardMessageLine2: "",
        title: {
          de: "Battle Royale",
          ru: "Battle Royale",
          ko: "Battle Royale",
          en: "Battle Royale",
          it: "Battaglia reale",
          fr: "Battle Royale",
          es: "Battle Royale",
          ar: "Battle Royale",
          ja: "Battle Royale",
          pl: "Battle Royale",
          "es-419": "Batalla campal",
          tr: "Battle Royale",
        },
        standardMessageLine1: "",
      },
      savetheworld: {
        image: "",
        color: "7615E9FF",
        specialMessage: "",
        _type: "Subgame Info",
        description: {
          de: "Kooperatives PvE-Abenteuer!",
          ru: "Совместное сражение с Бурей!",
          ko: "협동 PvE 어드벤처!",
          en: "Cooperative PvE Adventure",
          it: "Avventura cooperativa PvE!",
          fr: "Aventure en JcE coopératif !",
          es: "¡Aventura cooperativa JcE!",
          ar: "مشروع تعاوني للاعب ضد البيئة!",
          ja: "協力プレイが楽しめるPvE！",
          pl: "Kooperacyjne zmagania PvE z pustakami!",
          "es-419": "¡Aventura de JcE cooperativa!",
          tr: "Diğer oyuncularla birlikte PvE macerası!",
        },
        subgame: "savetheworld",
        title: {
          de: "Rette die Welt",
          ru: "Сражениес Бурей",
          ko: "세이브 더 월드",
          en: "Save The World",
          it: "Salva il mondo",
          fr: "Sauver le monde",
          es: "Salvar elmundo",
          ar: "Save The World",
          ja: "世界を救え",
          pl: "Ratowanie Świata",
          "es-419": "Salva el mundo",
          tr: "Dünyayı Kurtar",
        },
      },
      _title: "SubgameInfo",
      _noIndex: false,
      creative: {
        image: "",
        color: "13BDA1FF",
        _type: "Subgame Info",
        description: {
          de: "Deine Inseln. Deine Freunde. Deine Regeln.",
          ru: "Ваши острова. Ваши друзья. Ваши правила.",
          ko: "나의 섬. 나의 친구. 나의 규칙.",
          en: "Your Islands. Your Friends. Your Rules.",
          it: "Le tue isole. I tuoi amici. Le tue regole.",
          fr: "Vos îles, vos amis, vos règles.",
          es: "Tus islas. Tus amigos. Tus reglas.",
          ar: "جزرك. أصدقاؤك. قواعدك.",
          ja: "自分の島。自分のフレンド。自分のルール。",
          pl: "Twoje wyspa, twoi znajomi, twoje zasady.",
          "es-419": "Tus islas. Tus amigos. Tus reglas.",
          tr: "Senin Adaların. Senin Dostların. Senin Kuralların.",
        },
        subgame: "creative",
        title: {
          de: "Kreativmodus",
          ru: "Творческийрежим",
          ko: "포크리",
          en: "Creative",
          it: "Modalità creativa",
          fr: "Mode Créatif",
          es: "Modo Creativo",
          ar: "Creative",
          ja: "クリエイティブ",
          pl: "Tryb kreatywny",
          "es-419": "Modo Creativo",
          tr: "Kreatif",
        },
        standardMessageLine1: "",
      },
      _activeDate: "2019-05-02T16:48:47.429Z",
      lastModified: "2019-10-29T12:44:06.577Z",
      _locale: "en-US",
    },
    lobby: {
      backgroundimage:
        "https://fortnite-public-service-prod11.ol.epicgames.com/images/seasonx.png",
      stage: "seasonx",
      _title: "lobby",
      _activeDate: "2019-05-31T21:24:39.892Z",
      lastModified: "2019-07-31T21:24:17.119Z",
      _locale: "en-US",
    },
    battleroyalenews: {
      news: {
        _type: "Battle Royale News",
        motds: [],
        messages: [
          {
            image:
              "https://raw.githubusercontent.com/secret-pommes/Curium/main/.github/resources/frontend_imgs/apibanner.png",
            hidden: false,
            _type: "CommonUI Simple Message Base",
            adspace: "Welcome!",
            title: "Nintendo Switch Multiplayer!",
            body: "Welcome to Curium / SwitchMP where you can revisit Chapter 1 Season 5 with multiplayer on the Nintendo Switch",
            spotlight: false,
          },
        ],
      },
      _title: "battleroyalenews",
      header: "",
      style: "SpecialEvent",
      _noIndex: false,
      alwaysShow: false,
      _activeDate: "2018-08-17T16:00:00.000Z",
      lastModified: "2019-10-31T20:29:39.334Z",
      _locale: "en-US",
    },
    battleroyalenewsv2: {
      news: {
        motds: [],
        _type: "Battle Royale News v2",
      },
      "jcr:isCheckedOut": true,
      _title: "battleroyalenewsv2",
      _noIndex: false,
      alwaysShow: false,
      "jcr:baseVersion": "a7ca237317f1e7721def6e-9f96-4c43-b429-30c794953b04",
      _activeDate: "2020-01-21T14:00:00.000Z",
      lastModified: "2021-09-14T16:31:00.888Z",
      _locale: "en-US",
    },
    dynamicbackgrounds: {
      backgrounds: {
        backgrounds: [
          {
            stage: stage,
            _type: "DynamicBackground",
            key: "lobby",
          },
          {
            stage: stage,
            _type: "DynamicBackground",
            key: "vault",
          },
        ],
        _type: "DynamicBackgroundList",
      },
      _title: "dynamicbackgrounds",
      _noIndex: false,
      _activeDate: "2019-08-21T15:59:59.342Z",
      lastModified: "2019-10-29T13:07:27.936Z",
      _locale: "en-US",
    },
    creativenews: {
      news: {
        _type: "Battle Royale News",
        messages: [
          {
            image:
              "https://raw.githubusercontent.com/secret-pommes/Curium/main/.github/resources/frontend_imgs/apibanner.png",
            hidden: false,
            _type: "CommonUI Simple Message Base",
            adspace: "Welcome!",
            title: "Nintendo Switch Multiplayer!",
            body: "Welcome to Curium / SwitchMP where you can revisit Chapter 1 Season 5 with multiplayer on the Nintendo Switch",
            spotlight: false,
          },
        ],
      },
      _title: "Creativenews",
      header: "",
      style: "None",
      _noIndex: false,
      alwaysShow: false,
      _activeDate: "2018-08-17T16:00:00.000Z",
      lastModified: "2019-10-31T20:35:52.569Z",
      _locale: "en-US",
    },
    shopSections: {
      _title: "shop-sections",
      sectionList: {
        _type: "ShopSectionList",
        sections: [],
      },
      _noIndex: false,
      _activeDate: "2022-12-01T23:45:00.000Z",
      lastModified: "2022-12-01T21:50:44.089Z",
      _locale: "en-US",
      _templateName: "FortniteGameShopSections",
    },
    _suggestedPrefetch: [],
  });
});

module.exports = app;
