export const cleanData = (data) => {
  data.map((artist) => {
    return {
      name: artist.name,
      id: artist.id,
      image_url: artist.image_url,
      url: artist.url,
      followers: artist.tracker_count,
      thumb_url: artist.thumb_url || '',
    };
  });
};

// bjectfacebook_page_url: "http://www.facebook.com/6458611289"id: "1323"image_url: "https://photos.bandsintown.com/large/11275856.jpeg"mbid: "e01646f2-2a04-450d-8bf2-0d993082e058"name: "Phish"options: {display_listen_unit: false}display_listen_unit: false[[Prototype]]: Objectsupport_url: ""thumb_url: "https://photos.bandsintown.com/thumb/11275856.jpeg"tracker_count: 494633upcoming_event_count: 14url: "https://www.bandsintown.com/a/1323?came_from=267&app_id=888501139bcf6b4a81fec1c338f31325"[[Prototype]]: Object
