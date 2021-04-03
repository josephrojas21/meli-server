import axios from 'axios';
import config from '../../../config';

export default class ItemsService {
    constructor() {};

    async getSearchItems(query:String) {
        try {
            const { data } =  await axios.get(`${config.searchItems}/sites/MLA/search?q=${query}`);
            const categories: string[] = [];
            const items: object[] = [];
            const results =  {
                author: {
                    name: 'Joseph',
                    lastname: 'Rojas Montoya'
                },
                categories,
                items
            }

            data.available_filters.filter((filter: any) => {
                if (filter.id === 'category') {
                    filter.values.map((category: any) => {
                        return categories.push(category.name);
                    })
                }
            })

            data.results.map((item: any) => {
                const condition = item.attributes.filter((idt: any) => idt.id === 'ITEM_CONDITION');

                return items.push({
                    id: item.id,
                    title: item.title,
                    price: {
                        currency: item.currency_id,
                        amount: parseInt(item.price.toFixed(0)),
                        decimals: item.price,
                    },
                    picture: item.thumbnail,
                    condition: condition.value_name,
                    free_shipping: item.shipping.free_shipping
                })
            })

            return results;

        } catch (error) {
            console.log(error)
            throw new Error ('The items could not be fetched');
        }
    };

    async getItemDescription(id: String) {
        try {
            const response = await Promise.all([
                axios.get(`${config.items}/items/${id}`),
                axios.get(`${config.items}/items/${id}/description`)
            ]);
            console.log(response)
            return response;

        } catch (error) {
            console.log(error)
            throw new Error ('The items description could not be fetched');
        }
    };
}