function calculateHousePrice (width, depth, height, garden) {
    const volumeInMeters = width * depth * height
    const housePrice = volumeInMeters * 2.5 * 1000 + garden * 300
    console.log(housePrice);
};
calculateHousePrice(8, 10, 10, 100); //Peters 2030000
calculateHousePrice(5, 11, 8, 70); //Julias 1121000
