import Model from './abstractModel';

export default class Battery extends Model {
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
            title : 'Заголовок',
            price : 'Цена',
            old_price : 'Старая Цена',
            currency : 'Валюта',
            picture : 'Изображение',
            model : 'Наименование',
            delivery : 'Доставка',
            ostatok : 'В наличии',
            article : 'Артикул',
            capacity : 'Ёмкость',
            current : 'Стартовый ток',
            polarity : 'Полярность',
            length : 'Длина',
            width : 'Ширина',
            height : 'Высота',
            country : 'Страна',
            assurance : 'Гарантия',
            voltage : 'Напряжение',
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

    constructor(){
        super();
        this.id = 0;
        this.parent_brend_id = 0;
        this.title = null;
        this.price = 0;
        this.old_price = 0;
        this.currency = "KZT";
        this.picture = "/upload/none_pic.jpg";
        this.model = null;
        this.delivery = 0;
        this.ostatok = 0;
        this.sklad = null;
        this.article = null;
        this.capacity = null;
        this.current = null;
        this.polarity = null;
        this.length = 0;
        this.width = 0;
        this.height = 0;
        this.country = null;
        this.assurance = null;
        this.voltage = 0;
        this.status = 0;
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
        this.picture = objItem["picture"];
        this.model = objItem["model"];
        this.delivery = objItem["delivery"];
        this.ostatok = objItem["ostatok"];
        this.sklad = objItem["sklad"];
        this.article = objItem["article"];
        this.capacity = objItem["capacity"];
        this.current = objItem["current"];
        this.polarity = objItem["polarity"];
        this.length = objItem["length"];
        this.width = objItem["width"];
        this.height = objItem["height"];
        this.country = objItem["country"];
        this.assurance = objItem["assurance"];
        this.voltage = objItem["voltage"];
        this.status = objItem["status"];
        this.code = objItem["code"];
        this.url = objItem["url"];
        this.meta_title = objItem["meta_title"];
        this.meta_keywords = objItem["meta_keywords"];
        this.meta_description = objItem["meta_description"];
        this.description = objItem["description"];
    }
}
