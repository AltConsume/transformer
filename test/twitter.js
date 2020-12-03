const transform = require(`../`)

const exampleTweet = {
  "created_at": "Tue Dec 01 12:34:40 +0000 2020",
  "id": 1333751365433176000,
  "id_str": "1333751365433176068",
  "text": "RT @JamesBlunt: https://t.co/qaRx6bZCJ5",
  "truncated": false,
  "entities": {
    "hashtags": [],
    "symbols": [],
    "user_mentions": [
      {
        "screen_name": "JamesBlunt",
        "name": "James Blunt",
        "id": 82097756,
        "id_str": "82097756",
        "indices": [
          3,
          14
        ]
      }
    ],
    "urls": [],
    "media": [
      {
        "id": 1333722361904976000,
        "id_str": "1333722361904975873",
        "indices": [
          16,
          39
        ],
        "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1333722361904975873/pu/img/U7UjIuwdUEQktjpI.jpg",
        "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1333722361904975873/pu/img/U7UjIuwdUEQktjpI.jpg",
        "url": "https://t.co/qaRx6bZCJ5",
        "display_url": "pic.twitter.com/qaRx6bZCJ5",
        "expanded_url": "https://twitter.com/JamesBlunt/status/1333722552842260481/video/1",
        "type": "photo",
        "sizes": {
          "thumb": {
            "w": 150,
            "h": 150,
            "resize": "crop"
          },
          "small": {
            "w": 383,
            "h": 680,
            "resize": "fit"
          },
          "large": {
            "w": 576,
            "h": 1024,
            "resize": "fit"
          },
          "medium": {
            "w": 576,
            "h": 1024,
            "resize": "fit"
          }
        },
        "source_status_id": 1333722552842260500,
        "source_status_id_str": "1333722552842260481",
        "source_user_id": 82097756,
        "source_user_id_str": "82097756"
      }
    ]
  },
  "extended_entities": {
    "media": [
      {
        "id": 1333722361904976000,
        "id_str": "1333722361904975873",
        "indices": [
          16,
          39
        ],
        "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1333722361904975873/pu/img/U7UjIuwdUEQktjpI.jpg",
        "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1333722361904975873/pu/img/U7UjIuwdUEQktjpI.jpg",
        "url": "https://t.co/qaRx6bZCJ5",
        "display_url": "pic.twitter.com/qaRx6bZCJ5",
        "expanded_url": "https://twitter.com/JamesBlunt/status/1333722552842260481/video/1",
        "type": "video",
        "sizes": {
          "thumb": {
            "w": 150,
            "h": 150,
            "resize": "crop"
          },
          "small": {
            "w": 383,
            "h": 680,
            "resize": "fit"
          },
          "large": {
            "w": 576,
            "h": 1024,
            "resize": "fit"
          },
          "medium": {
            "w": 576,
            "h": 1024,
            "resize": "fit"
          }
        },
        "source_status_id": 1333722552842260500,
        "source_status_id_str": "1333722552842260481",
        "source_user_id": 82097756,
        "source_user_id_str": "82097756",
        "video_info": {
          "aspect_ratio": [
            9,
            16
          ],
          "duration_millis": 12480,
          "variants": [
            {
              "content_type": "application/x-mpegURL",
              "url": "https://video.twimg.com/ext_tw_video/1333722361904975873/pu/pl/6ByU-YTZEnGMMU_5.m3u8?tag=10"
            },
            {
              "bitrate": 632000,
              "content_type": "video/mp4",
              "url": "https://video.twimg.com/ext_tw_video/1333722361904975873/pu/vid/320x568/LQaHogLyyGhedLzQ.mp4?tag=10"
            },
            {
              "bitrate": 832000,
              "content_type": "video/mp4",
              "url": "https://video.twimg.com/ext_tw_video/1333722361904975873/pu/vid/360x640/u04AvvhktMOr9O5W.mp4?tag=10"
            },
            {
              "bitrate": 2176000,
              "content_type": "video/mp4",
              "url": "https://video.twimg.com/ext_tw_video/1333722361904975873/pu/vid/576x1024/_mm29jaeZpJg-2OP.mp4?tag=10"
            }
          ]
        },
        "additional_media_info": {
          "monetizable": false,
          "source_user": {
            "id": 82097756,
            "id_str": "82097756",
            "name": "James Blunt",
            "screen_name": "JamesBlunt",
            "location": "London",
            "description": "Cockney rhyming slang for the good stuff; Proof that one song is all you need.",
            "url": "https://t.co/KjWDw8222S",
            "entities": {
              "url": {
                "urls": [
                  {
                    "url": "https://t.co/KjWDw8222S",
                    "expanded_url": "https://linktr.ee/howtobeacompleteandutterblunt",
                    "display_url": "linktr.ee/howtobeacomple…",
                    "indices": [
                      0,
                      23
                    ]
                  }
                ]
              },
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 2028528,
            "friends_count": 89,
            "listed_count": 3937,
            "created_at": "Tue Oct 13 13:46:00 +0000 2009",
            "favourites_count": 8627,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 1235,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "003366",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1166766046151397377/Xf05z0Hj_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1166766046151397377/Xf05z0Hj_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/82097756/1593161015",
            "profile_link_color": "990000",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "DCE9FA",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          }
        }
      }
    ]
  },
  "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
  "in_reply_to_status_id": null,
  "in_reply_to_status_id_str": null,
  "in_reply_to_user_id": null,
  "in_reply_to_user_id_str": null,
  "in_reply_to_screen_name": null,
  "user": {
    "id": 6347942,
    "id_str": "6347942",
    "name": "Rammi ✨",
    "screen_name": "Rammi",
    "location": "Ealing, London",
    "description": "🇹🇭 Glittery Bio McBioface. Greets random dogs and [insert something to do with coconut water]. I should probably have more snark and glitter (she/her)",
    "url": "https://t.co/IIYHIMm93X",
    "entities": {
      "url": {
        "urls": [
          {
            "url": "https://t.co/IIYHIMm93X",
            "expanded_url": "https://twitch.tv/rammikins",
            "display_url": "twitch.tv/rammikins",
            "indices": [
              0,
              23
            ]
          }
        ]
      },
      "description": {
        "urls": []
      }
    },
    "protected": false,
    "followers_count": 3352,
    "friends_count": 2003,
    "listed_count": 101,
    "created_at": "Sat May 26 19:36:16 +0000 2007",
    "favourites_count": 2,
    "utc_offset": null,
    "time_zone": null,
    "geo_enabled": true,
    "verified": false,
    "statuses_count": 82231,
    "lang": null,
    "contributors_enabled": false,
    "is_translator": false,
    "is_translation_enabled": false,
    "profile_background_color": "5C00B9",
    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme4/bg.gif",
    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme4/bg.gif",
    "profile_background_tile": true,
    "profile_image_url": "http://pbs.twimg.com/profile_images/789600483933499393/XTSoMTf8_normal.png",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/789600483933499393/XTSoMTf8_normal.png",
    "profile_banner_url": "https://pbs.twimg.com/profile_banners/6347942/1525233603",
    "profile_link_color": "981CEB",
    "profile_sidebar_border_color": "9A5EDC",
    "profile_sidebar_fill_color": "B48EC7",
    "profile_text_color": "321D4E",
    "profile_use_background_image": true,
    "has_extended_profile": true,
    "default_profile": false,
    "default_profile_image": false,
    "following": true,
    "follow_request_sent": false,
    "notifications": false,
    "translator_type": "regular"
  },
  "geo": null,
  "coordinates": null,
  "place": null,
  "contributors": null,
  "retweeted_status": {
    "created_at": "Tue Dec 01 10:40:10 +0000 2020",
    "id": 1333722552842260500,
    "id_str": "1333722552842260481",
    "text": "https://t.co/qaRx6bZCJ5",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [],
      "media": [
        {
          "id": 1333722361904976000,
          "id_str": "1333722361904975873",
          "indices": [
            0,
            23
          ],
          "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1333722361904975873/pu/img/U7UjIuwdUEQktjpI.jpg",
          "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1333722361904975873/pu/img/U7UjIuwdUEQktjpI.jpg",
          "url": "https://t.co/qaRx6bZCJ5",
          "display_url": "pic.twitter.com/qaRx6bZCJ5",
          "expanded_url": "https://twitter.com/JamesBlunt/status/1333722552842260481/video/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 383,
              "h": 680,
              "resize": "fit"
            },
            "large": {
              "w": 576,
              "h": 1024,
              "resize": "fit"
            },
            "medium": {
              "w": 576,
              "h": 1024,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 1333722361904976000,
          "id_str": "1333722361904975873",
          "indices": [
            0,
            23
          ],
          "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1333722361904975873/pu/img/U7UjIuwdUEQktjpI.jpg",
          "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1333722361904975873/pu/img/U7UjIuwdUEQktjpI.jpg",
          "url": "https://t.co/qaRx6bZCJ5",
          "display_url": "pic.twitter.com/qaRx6bZCJ5",
          "expanded_url": "https://twitter.com/JamesBlunt/status/1333722552842260481/video/1",
          "type": "video",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 383,
              "h": 680,
              "resize": "fit"
            },
            "large": {
              "w": 576,
              "h": 1024,
              "resize": "fit"
            },
            "medium": {
              "w": 576,
              "h": 1024,
              "resize": "fit"
            }
          },
          "video_info": {
            "aspect_ratio": [
              9,
              16
            ],
            "duration_millis": 12480,
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/ext_tw_video/1333722361904975873/pu/pl/6ByU-YTZEnGMMU_5.m3u8?tag=10"
              },
              {
                "bitrate": 632000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1333722361904975873/pu/vid/320x568/LQaHogLyyGhedLzQ.mp4?tag=10"
              },
              {
                "bitrate": 832000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1333722361904975873/pu/vid/360x640/u04AvvhktMOr9O5W.mp4?tag=10"
              },
              {
                "bitrate": 2176000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1333722361904975873/pu/vid/576x1024/_mm29jaeZpJg-2OP.mp4?tag=10"
              }
            ]
          },
          "additional_media_info": {
            "monetizable": false
          }
        }
      ]
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 82097756,
      "id_str": "82097756",
      "name": "James Blunt",
      "screen_name": "JamesBlunt",
      "location": "London",
      "description": "Cockney rhyming slang for the good stuff; Proof that one song is all you need.",
      "url": "https://t.co/KjWDw8222S",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/KjWDw8222S",
              "expanded_url": "https://linktr.ee/howtobeacompleteandutterblunt",
              "display_url": "linktr.ee/howtobeacomple…",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 2028528,
      "friends_count": 89,
      "listed_count": 3937,
      "created_at": "Tue Oct 13 13:46:00 +0000 2009",
      "favourites_count": 8627,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 1235,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "003366",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1166766046151397377/Xf05z0Hj_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1166766046151397377/Xf05z0Hj_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/82097756/1593161015",
      "profile_link_color": "990000",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "DCE9FA",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 17944,
    "favorite_count": 116264,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "und"
  },
  "is_quote_status": false,
  "retweet_count": 17944,
  "favorite_count": 0,
  "favorited": false,
  "retweeted": false,
  "possibly_sensitive": false,
  "possibly_sensitive_appealable": false,
  "lang": "und"
}

const transformed = transform(exampleTweet, `twitter`)

console.log("DONE:", transformed)
