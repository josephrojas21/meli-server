let config;

config = {
  port: process.env.PORT,
  searchItems: process.env.SEARCHITEMS,
  items: process.env.ITEMS
};

export default { ...config };