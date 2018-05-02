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
            parent_auto_id : 'Авто',
            title : 'Заголовок',
            price : 'Цена',
            old_price : 'Старая Цена',
            currency : 'Валюта',
            brend : 'Бренд',
            model : 'Модель',
            delivery : 'Доставка',
            ostatok : 'В наличии',
            size : 'Размер',
            width : 'Ширина',
            height : 'Высота',
            radius : 'Диаметр',
            season : 'Сезон',
            picture : 'Изображение',
            loads : 'Индекс нагрузки',
            speed : 'Индекс скорости',
            typeTC : 'Тип авто',
            runflat : 'Беспрокольные',
            ship : 'Шипованные',
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
        this.parent_auto_id = 0;
        this.title = null;
        this.price = 0;
        this.old_price = 0;
        this.currency = "KZT";
        this.model = null;
        this.delivery = null;
        this.ostatok = 0;
        this.size = null;
        this.width = 0;
        this.height = 0;
        this.radius = null;
        this.season = null;
        this.picture = null;
        this.loads = null;
        this.speed = null;
        this.typeTC = null;
        this.runflat = 0;
        this.ship = 0;
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
        this.parent_auto_id = objItem["parent_auto_id"];
        this.title = objItem["title"];
        this.price = objItem["price"];
        this.old_price = objItem["old_price"];
        this.currency = objItem["currency"];
        this.model = objItem["model"];
        this.delivery = objItem["delivery"];
        this.ostatok = objItem["ostatok"];
        this.size = objItem["size"];
        this.width = objItem["width"];
        this.height = objItem["height"];
        this.radius = objItem["radius"];
        this.season = objItem["season"];
        this.picture = objItem["picture"];
        this.loads = objItem["loads"];
        this.speed = objItem["speed"];
        this.typeTC = objItem["typeTC"];
        this.runflat = objItem["runflat"];
        this.ship = objItem["ship"];
        this.status = objItem["status"];
        this.code = objItem["code"];
        this.url = objItem["url"];
        this.meta_title = objItem["meta_title"];
        this.meta_keywords = objItem["meta_keywords"];
        this.meta_description = objItem["meta_description"];
        this.description = objItem["description"];
    }
}
