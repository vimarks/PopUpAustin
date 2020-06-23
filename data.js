export let places = new Map();

places.set(1, {
  name: "The Club",
  address: null,
  height: 24,
  lights: true,
  images: ["pictures/club-1.JPG", "pictures/club-3.JPG", "pictures/club-4.JPG"]
});
places.set(2, {
  name: "Concave",
  address: null,
  height: 13,
  lights: false,
  images: ["pictures/cave-1.JPG", "pictures/cave-2.JPG", "pictures/club-2.JPG"],
  directionLink:
    "https://www.google.com/maps/place/30%C2%B014'13.1%22N+97%C2%B045'07.6%22W/@30.2367769,-97.7525639,19z/data=!4m5!3m4!1s0x0:0x0!8m2!3d30.23696!4d-97.75212"
});
places.set(3, {
  name: "45th street",
  address: null,
  height: 13,
  lights: false,
  images: ["pictures/45th-1.JPG", "pictures/45th-2.JPG", "pictures/45th-3.JPG"]
});
