import Model from './abstractModel';

export default class Oil extends Model {
    getId = () => {
        return this.id;
    }
    getPrice = () => {
        return this.price;
    }

    attributeLabels = () => {
        return {
            id : 'ID',
            parent_brend_id : 'Бренд',
            title : 'Наименование',
            price : 'Цена',
            brand : 'Бренд',
            old_price : 'Старая цена',
            currency : 'Валюта',
            model : 'Наименование',
            delivery : 'Доставка',
            ostatok : 'В наличии',
            picture : 'Изображение',
            viscosity_1 : 'Вязкость',
            viscosity_2 : 'Вязкость',
            type_fluid : 'Тип жидкости',
            type_engine : 'Тип двигателя',
            size : 'Объем',
            status : 'Статус',
            code : 'Код',
            url : 'Url адрес',
            meta_title : 'Сео заголовок',
            meta_keywords : 'Сео теги',
            meta_description : 'Сео описание',
            description : 'Описание',
        };
    }

    getDescription = () => {
        return this.description;
    }

    constructor() {
        super();
        this.id = 0;
        this.parent_brend_id = 0;
        this.title = null;
        this.price = 0;
        this.old_price = null;
        this.model = null;
        this.delivery = null;
        this.ostatok = null;
        this.currency = "KZT";
        this.picture = "/upload/none_pic.jpg";
        this.viscosity_1 = null;
        this.viscosity_2 = null;
        this.type_fluid = null;
        this.type_engine = null;
        this.size = null;
        this.status = 1;
        this.code = null;
        this.url = null;
        this.meta_title = null;
        this.meta_keywords = null;
        this.meta_description = null;
        this.description = null;
    }
    
    setAttributes = (objItem) => {
        this.id = objItem["id"];
        this.parent_brend_id = objItem["parent_brend_id"];
        this.title = objItem["title"];
        this.price = objItem["price"];
        this.old_price = objItem["old_price"];
        this.currency = objItem["currency"];
        this.model = objItem["model"];
        this.delivery = objItem["delivery"];
        this.ostatok = objItem["ostatok"];
        this.picture = objItem["picture"];
        this.viscosity_1 = objItem["viscosity_1"];
        this.viscosity_2 = objItem["viscosity_2"];
        this.type_fluid = objItem["type_fluid"];
        this.type_engine = objItem["type_engine"];
        this.size = objItem["size"];
        this.status = objItem["status"];
        this.code = objItem["code"];
        this.url = objItem["url"];
        this.meta_title = objItem["meta_title"];
        this.meta_keywords = objItem["meta_keywords"];
        this.meta_description = objItem["meta_description"];
        this.description = objItem["description"];
    }
}
