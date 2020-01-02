class Place {
  constructor(id, title, imageUri, address, lat, lng) {
    this.address = address;
    this.id = id;
    this.imageUri = imageUri;
    this.lat = lat;
    this.lng = lng
    this.title = title;
  }
}

export default Place;