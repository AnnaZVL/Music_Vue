export const getImagePath =  (imagePath) => {
    if (imagePath) {
        return new URL(imagePath, import.meta.url).href;
    } else {
        return new URL('@/assets/img/personal_page/no-photo.jpg', import.meta.url).href
    }
  }