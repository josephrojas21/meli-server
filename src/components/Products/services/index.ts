import axios from 'axios';
import config from '../../../config';

export default class ItemsService {
  constructor() { };

  async getSearchItems(query: String) {
    try {
      const { data } = await axios.get(`${config.searchItems}/sites/MLA/search?q=${query}`);
      const categories: string[] = [];
      const breadcrumb: string[] = [];
      const items: object[] = [];

      if (data.filters.length > 0){ 
        data.filters.filter((filter: any) => {
          if (filter.id === 'category') {
            filter.values[0].path_from_root.forEach((path: any) => {
              return breadcrumb.push(path.name);
            })
          }
        })
      } else {
        data.available_filters.filter((filter: any) => {
          if (filter.id === 'category') {
            let maxResults = 0;
            filter.values.map((category: any) => {
              if (category.results > maxResults) {
                maxResults = category.results;
                return categories.unshift(category.name);
              }
            })
          }
        })
      }


      data.results.map((item: any) => {
        return items.push({
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: parseInt(item.price.toFixed(0)),
            decimals: item.price,
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          city: item.address.city_name,
        })
      })

      const results = {
        author: {
          name: 'Joseph',
          lastname: 'Rojas Montoya'
        },
        categories,
        breadcrumb,
        items: items.slice(0,4),
      }

      return results;

    } catch (error) {
      console.log(error)
      throw new Error('The items could not be fetched');
    }
  };

  async getItemDescription(id: String) {
    try {
      const response = await Promise.all([
        axios.get(`${config.items}/items/${id}`),
        axios.get(`${config.items}/items/${id}/description`)
      ]);

      const itemInfo = response[0].data;
      const description = response[1].data.plain_text;

      const result = {
        author: {
          name: 'Joseph',
          lastname: 'Rojas Montoya',
        },
        item: {
          id: itemInfo.id,
          title: itemInfo.title,
          price: {
            currency: itemInfo.currency_id,
            amount: parseInt(itemInfo.price.toFixed(0)),
            decimals: itemInfo.price,
          },
          picture: itemInfo.pictures[0].url,
          condition: itemInfo.condition,
          free_shipping: itemInfo.shipping.free_shipping,
          sold_quantity: itemInfo.sold_quantity,
          description
        }
      }

      return result;

    } catch (error) {
      console.log(error)
      throw new Error('The items description could not be fetched');
    }
  };
}