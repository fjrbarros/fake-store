export const imageUrl = {
  eletronics:
    'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  jewelery:
    'https://www.lovehappensmag.com/blog/wp-content/uploads/2020/08/Chanel_watch_2020_-_MADEMOISELLE_PRIV%C3%89_BOUTON_Ganse_de_Diamant_-_11-1.jpg',
  mensClothing:
    'https://www.apetogentleman.com/wp-content/uploads/2020/12/howwearflannelmain1-450x340.jpg',
  womensClothing:
    'https://theexpatchronicle.net/wp-content/uploads/2020/04/fashion-1140x758.jpg',
  default:
    'https://cdn.pixabay.com/photo/2018/12/27/14/19/jewel-3897719_1280.jpg',
};

export const getImageUrl = (category = ''): string => {
  if (category.toLowerCase() === 'electronics') {
    return imageUrl.eletronics;
  }

  if (category.toLowerCase() === 'jewelery') {
    return imageUrl.jewelery;
  }

  if (category.toLowerCase().replace("'", '') === 'mens clothing') {
    return imageUrl.mensClothing;
  }

  if (category.toLowerCase().replace("'", '') === 'womens clothing') {
    return imageUrl.womensClothing;
  }

  return imageUrl.default;
};
