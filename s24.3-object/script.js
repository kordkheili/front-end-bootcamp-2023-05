const products_array = [
  "گوشی سامسونگ a33",
  "گوشی شیائومی redmi 9",
  "گوشی بلک بری",
];
const product1_object = {
  title: "گوشی سامسونگ a33",
  resolution: "1920x1080",
  battery: "5000mA",
  screen: "5.9 inch",
  ram: "8GB",
  features: ["ضد گرد و غبار", "صفحه نمایش نشکن"],
};
const product2_object = {
  title: "گوشی شیائومی redmi 9",
  resolution: "1920x1080",
  battery: "6000mA",
  screen: "6.1 inch",
  ram: "4GB",
  features: ["صفحه نمایش نشکن"],
};
const product3_object = {
  title: "گوشی بلک بری",
  resolution: "640x480",
  battery: "600mA",
  screen: "2 inch",
  ram: "1GB",
  features: ["feature1", "feature2", "feature3"],
  test: function () {
    console.log(this.title);
  },
};
const products_array_detail = [
  product1_object,
  product2_object,
  product3_object,
];
console.log(products_array_detail);
