//List of images' url for randomly portrait image generation based on the item position

const baseUrl = "https://res.cloudinary.com/dahwtwzdl/image/upload";

const portraitImagesList = [
  `${baseUrl}/v1643693564/login-main-portrait/portrait-image-20_n0cuvu.jpg`,
  `${baseUrl}/v1643693568/login-main-portrait/portrait-image-19_yvtqyf.jpg`,
  `${baseUrl}/v1643693571/login-main-portrait/portrait-image-18_bwytuc.jpg`,
  `${baseUrl}/v1643693579/login-main-portrait/portrait-image-17_qy29qq.jpg`,
  `${baseUrl}/v1643693566/login-main-portrait/portrait-image-16_pfnq3m.jpg`,
  `${baseUrl}/v1643693557/login-main-portrait/portrait-image-15_y1n5hq.jpg`,
  `${baseUrl}/v1643693549/login-main-portrait/portrait-image-14_owrxsw.jpg`,
  `${baseUrl}/v1643693545/login-main-portrait/portrait-image-13_gexoud.jpg`,
  `${baseUrl}/v1643693538/login-main-portrait/portrait-image-12_xtdzpy.jpg`,
  `${baseUrl}/v1643693534/login-main-portrait/portrait-image-11_tuo4vb.jpg`,
  `${baseUrl}/v1643693530/login-main-portrait/portrait-image-10_hoahhz.jpg`,
  `${baseUrl}/v1643693527/login-main-portrait/portrait-image-9_oscceb.jpg`,
  `${baseUrl}/v1643693515/login-main-portrait/portrait-image-8_cio3l2.jpg`,
  `${baseUrl}/v1643693511/login-main-portrait/portrait-image-7_ms76ey.jpg`,
  `${baseUrl}/v1643693506/login-main-portrait/portrait-image-6_is8oax.jpg`,
  `${baseUrl}/v1643693498/login-main-portrait/portrait-image-5_wlj2an.jpg`,
  `${baseUrl}/v1643693493/login-main-portrait/portrait-image-4_wlxdrj.jpg`,
  `${baseUrl}/v1643693477/login-main-portrait/portrait-image-3_ys0ye6.jpg`,
  `${baseUrl}/v1643693467/login-main-portrait/portrait-image-2_gl4fuq.jpg`,
  `${baseUrl}/v1643693457/login-main-portrait/portrait-image-1_kwqj5r.jpg`,
];

//toDo -> Create function to randomly pick an image from below list

const generateRandomNumber = () => {
  let randomNumber = -1;
  while (randomNumber < 0 || randomNumber >= portraitImagesList.length) {
    randomNumber = parseInt(Math.random() * 100);
  }
  return randomNumber;
};

const pickRandomImage = () => {
  return portraitImagesList[generateRandomNumber()];
};

export default pickRandomImage;
