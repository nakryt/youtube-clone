import { PageInfo, Statistics, Thumbnail } from "./types";

interface Snippet {
  publishedAt: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
  channelId: string;
  channelTitle: string;
  tags: string[];
}

export interface Item {
  kind: "youtube#video";
  etag: string;
  id: string;
  snippet: Snippet;
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
  statistics: Statistics;
}

export interface VideoResponse {
  kind: string;
  etag: string;
  items: Item[];
  nextPageToken: string;
  pageInfo: PageInfo;
}

export interface VideoItem {
  id: string;
  publishedAt: string;
  title: string;
  description: string;
  tags: string[];
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
  channel: {
    id: string;
    title: string;
    thumbnail: string;
  };
  statistics: Statistics;
}

//
// [
//
//     {
//         "kind": "youtube#video",
//         "etag": "BdupBZbLBy6ORfX1I0k5UXAHajY",
//         "id": "UZdCgTNHVN4",
//         "snippet": {
//             "publishedAt": "2021-01-11T00:13:03Z",
//             "channelId": "UCruQg25yVBppUWjza8AlyZA",
//             "title": "Air Force vet arrested for Capitol riot - Larry Brock Jr. seen carrying zip ties on Senate floor",
//             "description": "FOX 4 News is a FOX-owned station serving Dallas-Fort Worth and all of North Texas.",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/UZdCgTNHVN4/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/UZdCgTNHVN4/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/UZdCgTNHVN4/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 },
//                 "standard": {
//                     "url": "https://i.ytimg.com/vi/UZdCgTNHVN4/sddefault.jpg",
//                     "width": 640,
//                     "height": 480
//                 },
//                 "maxres": {
//                     "url": "https://i.ytimg.com/vi/UZdCgTNHVN4/maxresdefault.jpg",
//                     "width": 1280,
//                     "height": 720
//                 }
//             },
//             "channelTitle": "FOX 4 Dallas-Fort Worth",
//             "tags": [
//                 "FOX",
//                 "KDFW",
//                 "Dallas",
//                 "Fort",
//                 "Worth",
//                 "Good",
//                 "Day",
//                 "Texas",
//                 "News",
//                 "Sports",
//                 "weather",
//                 "politics"
//             ],
//             "categoryId": "25",
//             "liveBroadcastContent": "none",
//             "defaultLanguage": "en",
//             "localized": {
//                 "title": "Air Force vet arrested for Capitol riot - Larry Brock Jr. seen carrying zip ties on Senate floor",
//                 "description": "FOX 4 News is a FOX-owned station serving Dallas-Fort Worth and all of North Texas."
//             },
//             "defaultAudioLanguage": "en"
//         },
//         "statistics": {
//             "viewCount": "686362",
//             "likeCount": "8957",
//             "dislikeCount": "735",
//             "favoriteCount": "0",
//             "commentCount": "4932"
//         }
//     },
//     {
//         "kind": "youtube#video",
//         "etag": "evzEQtP8XkYLWzC1sl1grX5V8g0",
//         "id": "f8oy13PjR-Y",
//         "snippet": {
//             "publishedAt": "2021-01-09T22:36:09Z",
//             "channelId": "UC0psAD-M4X6O0yC_hFRK4hw",
//             "title": "FINDING OUT I'M PREGNANT",
//             "description": "OMG OMG HI!! This has been a secret that I've been hiding for a while now!\n\n\n\nShop my lashes! \n\nhttp://www.thelashbarla.com\n\nhttp://www.instagram.com/thelashbarla\n\nshop my merchandise!\nhttps://www.shopalondradessy.com\nhttps://www.instagram.com/shopalondra...\n\n\nMY SOCIAL MEDIAS\n\nhttp://www.instagram.com/alondradessy\n\nhttp://www.twitter.com/alondradessy\n\nSnapchat, alondradessy.\n\nsee you babes in my next bideeeeo",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/f8oy13PjR-Y/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/f8oy13PjR-Y/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/f8oy13PjR-Y/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 },
//                 "standard": {
//                     "url": "https://i.ytimg.com/vi/f8oy13PjR-Y/sddefault.jpg",
//                     "width": 640,
//                     "height": 480
//                 },
//                 "maxres": {
//                     "url": "https://i.ytimg.com/vi/f8oy13PjR-Y/maxresdefault.jpg",
//                     "width": 1280,
//                     "height": 720
//                 }
//             },
//             "channelTitle": "AlondraDessy",
//             "tags": [
//                 "alondradessy",
//                 "alo and benny",
//                 "alondra and benny",
//                 "tre and alo",
//                 "alo and elsy",
//                 "Louies life",
//                 "jenny69",
//                 "ace fam",
//                 "ace family",
//                 "tre carter",
//                 "Landon and shyla",
//                 "alo breakup",
//                 "through Ryans eyes",
//                 "Catherine paiz",
//                 "Austin mcbroom",
//                 "James charles",
//                 "daisy marquez",
//                 "bram fam",
//                 "bramty",
//                 "alondradessy and benny",
//                 "benny and alondradessy",
//                 "comedy",
//                 "benisha",
//                 "alondra dessy",
//                 "gabbie hanna",
//                 "Trisha paytas",
//                 "Laura mellado",
//                 "Laura mellado pregnant",
//                 "karina garcia",
//                 "alondra pregnant"
//             ],
//             "categoryId": "22",
//             "liveBroadcastContent": "none",
//             "localized": {
//                 "title": "FINDING OUT I'M PREGNANT",
//                 "description": "OMG OMG HI!! This has been a secret that I've been hiding for a while now!\n\n\n\nShop my lashes! \n\nhttp://www.thelashbarla.com\n\nhttp://www.instagram.com/thelashbarla\n\nshop my merchandise!\nhttps://www.shopalondradessy.com\nhttps://www.instagram.com/shopalondra...\n\n\nMY SOCIAL MEDIAS\n\nhttp://www.instagram.com/alondradessy\n\nhttp://www.twitter.com/alondradessy\n\nSnapchat, alondradessy.\n\nsee you babes in my next bideeeeo"
//             }
//         },
//         "statistics": {
//             "viewCount": "2579135",
//             "likeCount": "211256",
//             "dislikeCount": "4024",
//             "favoriteCount": "0",
//             "commentCount": "21059"
//         }
//     },
//     {
//         "kind": "youtube#video",
//         "etag": "skOTTnIDQRmj3wmk-o1ZhGj4Zp8",
//         "id": "72z7sr2ZLJs",
//         "snippet": {
//             "publishedAt": "2021-01-10T14:25:00Z",
//             "channelId": "UCVT1tPkR-fUVlO652EcO3ow",
//             "title": "Former Homeland Security head's advice following Capitol attack: \"Buckle up\"",
//             "description": "Former Homeland Security Secretary Michael Chertoff talks with CBS News national security correspondent David Martin about the failure of the Capitol Police to prevent armed Trump supporters from breaching a Joint Session of Congress, despite threats of violence posted on social media in the runup to the Electoral College vote tabulation.\n\nSubscribe to the \"CBS Sunday Morning\" Channel HERE: http://bit.ly/20gXwJT\nGet more of \"CBS Sunday Morning\" HERE: http://cbsn.ws/1PlMmAz\nFollow \"CBS Sunday Morning\" on Instagram HERE: http://bit.ly/23XunIh\nLike \"CBS Sunday Morning\" on Facebook HERE: https://www.facebook.com/CBSSundayMorning/\nFollow \"CBS Sunday Morning\" on Twitter HERE: http://bit.ly/1RquoQb\n\nGet the latest news and best in original reporting from CBS News delivered to your inbox. Subscribe to newsletters HERE: http://cbsn.ws/1RqHw7T\n\nGet your news on the go! Download CBS News mobile apps HERE: http://cbsn.ws/1Xb1WC8\n\nGet new episodes of shows you love across devices the next day, stream local news live, and watch full seasons of CBS fan favorites anytime, anywhere with CBS All Access. Try it free! http://bit.ly/1OQA29B\n\n---\n\"CBS Sunday Morning\" features stories on the arts, music, nature, entertainment, sports, history, science, Americana and highlights unique human accomplishments and achievements. Check local listings for CBS Sunday Morning broadcast times.",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/72z7sr2ZLJs/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/72z7sr2ZLJs/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/72z7sr2ZLJs/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 },
//                 "standard": {
//                     "url": "https://i.ytimg.com/vi/72z7sr2ZLJs/sddefault.jpg",
//                     "width": 640,
//                     "height": 480
//                 },
//                 "maxres": {
//                     "url": "https://i.ytimg.com/vi/72z7sr2ZLJs/maxresdefault.jpg",
//                     "width": 1280,
//                     "height": 720
//                 }
//             },
//             "channelTitle": "CBS Sunday Morning",
//             "tags": [
//                 "CBS Sunday Morning",
//                 "CBS News",
//                 "news",
//                 "former homeland security",
//                 "secretary michael chertoff",
//                 "cbs news",
//                 "david martin",
//                 "trump supporters",
//                 "police",
//                 "electoral college"
//             ],
//             "categoryId": "25",
//             "liveBroadcastContent": "none",
//             "localized": {
//                 "title": "Former Homeland Security head's advice following Capitol attack: \"Buckle up\"",
//                 "description": "Former Homeland Security Secretary Michael Chertoff talks with CBS News national security correspondent David Martin about the failure of the Capitol Police to prevent armed Trump supporters from breaching a Joint Session of Congress, despite threats of violence posted on social media in the runup to the Electoral College vote tabulation.\n\nSubscribe to the \"CBS Sunday Morning\" Channel HERE: http://bit.ly/20gXwJT\nGet more of \"CBS Sunday Morning\" HERE: http://cbsn.ws/1PlMmAz\nFollow \"CBS Sunday Morning\" on Instagram HERE: http://bit.ly/23XunIh\nLike \"CBS Sunday Morning\" on Facebook HERE: https://www.facebook.com/CBSSundayMorning/\nFollow \"CBS Sunday Morning\" on Twitter HERE: http://bit.ly/1RquoQb\n\nGet the latest news and best in original reporting from CBS News delivered to your inbox. Subscribe to newsletters HERE: http://cbsn.ws/1RqHw7T\n\nGet your news on the go! Download CBS News mobile apps HERE: http://cbsn.ws/1Xb1WC8\n\nGet new episodes of shows you love across devices the next day, stream local news live, and watch full seasons of CBS fan favorites anytime, anywhere with CBS All Access. Try it free! http://bit.ly/1OQA29B\n\n---\n\"CBS Sunday Morning\" features stories on the arts, music, nature, entertainment, sports, history, science, Americana and highlights unique human accomplishments and achievements. Check local listings for CBS Sunday Morning broadcast times."
//             },
//             "defaultAudioLanguage": "en"
//         },
//         "statistics": {
//             "viewCount": "998201",
//             "likeCount": "10801",
//             "dislikeCount": "2331",
//             "favoriteCount": "0",
//             "commentCount": "5241"
//         }
//     },
//     {
//         "kind": "youtube#video",
//         "etag": "Ph9MLS0hwDegzyF6VUUvZttdezo",
//         "id": "sJn8dG9iSaw",
//         "snippet": {
//             "publishedAt": "2021-01-10T00:00:08Z",
//             "channelId": "UCToxKVrkEuAONR4rFIJ_DyQ",
//             "title": "Among Us Logic 13 | Cartoon Animation",
//             "description": "They are AMONG US skin pack ➡️ https://cutt.ly/TheyAreAmongUsGameToons - video sponsored by Logdotzip\n\n► SUBSCRIBE to GameTunes! -\nhttps://www.youtube.com/channel/UCbbCaPmU-AvYQFMu6KCnyjw?sub_confirmation=1\n\n► Check out our MERCH! -\nhttps://newscapepro.com/collections/gametoons-1\n\nA new player enters the lobby and discovers a way to revive dead crewmates. Will Player join them and cheat in order to get his first victory? \n\nFeaturing:\n🡆 Abigail Turner - https://www.abigailturnervo.com/\n\nDon't forget to like, comment, subscribe and share to show your support for this channel!\n\nFollow us here for all sorts of cool stuff!\n► STORE: https://newscapepro.com/collections/gametoons-1  👕👚🕶\n► INSTAGRAM: https://www.instagram.com/gametoonsofficial/?hl=en 📸\n► FACEBOOK: https://www.facebook.com/GameToonsYT 📘\n► TIK TOK: https://www.tiktok.com/@gametoonsofficial?lang=en 🎵\n► TWITTER: https://twitter.com/GameToons 🐤",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/sJn8dG9iSaw/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/sJn8dG9iSaw/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/sJn8dG9iSaw/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 },
//                 "standard": {
//                     "url": "https://i.ytimg.com/vi/sJn8dG9iSaw/sddefault.jpg",
//                     "width": 640,
//                     "height": 480
//                 },
//                 "maxres": {
//                     "url": "https://i.ytimg.com/vi/sJn8dG9iSaw/maxresdefault.jpg",
//                     "width": 1280,
//                     "height": 720
//                 }
//             },
//             "channelTitle": "GameToons",
//             "tags": [
//                 "among us",
//                 "among us logic",
//                 "animation",
//                 "funny animation",
//                 "cartoon animation",
//                 "game toons",
//                 "gametoons",
//                 "cartoon",
//                 "animated",
//                 "among us new map",
//                 "airship",
//                 "among us animation",
//                 "among us hacks",
//                 "among us funny",
//                 "kid friendly",
//                 "family friendly",
//                 "gt",
//                 "revive"
//             ],
//             "categoryId": "1",
//             "liveBroadcastContent": "none",
//             "localized": {
//                 "title": "Among Us Logic 13 | Cartoon Animation",
//                 "description": "They are AMONG US skin pack ➡️ https://cutt.ly/TheyAreAmongUsGameToons - video sponsored by Logdotzip\n\n► SUBSCRIBE to GameTunes! -\nhttps://www.youtube.com/channel/UCbbCaPmU-AvYQFMu6KCnyjw?sub_confirmation=1\n\n► Check out our MERCH! -\nhttps://newscapepro.com/collections/gametoons-1\n\nA new player enters the lobby and discovers a way to revive dead crewmates. Will Player join them and cheat in order to get his first victory? \n\nFeaturing:\n🡆 Abigail Turner - https://www.abigailturnervo.com/\n\nDon't forget to like, comment, subscribe and share to show your support for this channel!\n\nFollow us here for all sorts of cool stuff!\n► STORE: https://newscapepro.com/collections/gametoons-1  👕👚🕶\n► INSTAGRAM: https://www.instagram.com/gametoonsofficial/?hl=en 📸\n► FACEBOOK: https://www.facebook.com/GameToonsYT 📘\n► TIK TOK: https://www.tiktok.com/@gametoonsofficial?lang=en 🎵\n► TWITTER: https://twitter.com/GameToons 🐤"
//             }
//         },
//         "statistics": {
//             "viewCount": "3229999",
//             "likeCount": "110264",
//             "dislikeCount": "3104",
//             "favoriteCount": "0",
//             "commentCount": "13667"
//         }
//     }
// ]
