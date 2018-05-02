import Model from './abstractModel';

export default class Disc extends Model {
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
            price : 'Цена',
            old_price : 'Старая Цена',
            currency : 'Валюта',
            model : 'Наименование',
            picture : 'Изображение',
            delivery : 'Доставка',
            ostatok : 'В наличии',
            status : 'Статус',
            title : 'Заголовок',
            size : 'Размер (радиус х ширина диска)',
            borer : 'Сверловка (кол-во х расстояние отверстий)',
            stupica : 'Диаметр ступицы',
            radius : 'Вылет',
            color : 'Цвет',
            type : 'Тип',
            manufacturer : 'Бренд',
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
        this.parent_auto_id = 0;
        this.title = null;
        this.price = 0;
        this.old_price = 0;
        this.currency = "KZT";
        this.picture = "/upload/none_pic.jpg";
        this.model = null;
        this.delivery = 0;
        this.ostatok = null;
        this.sklad = null;
        this.size = null;
        this.borer = null;
        this.stupica = null;
        this.radius = null;
        this.color = null;
        this.type = null;
        this.manufacturer = null;
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
        this.picture = objItem["picture"];
        this.model = objItem["model"];
        this.delivery = objItem["delivery"];
        this.ostatok = objItem["ostatok"];
        this.sklad = objItem["sklad"];
        this.size = objItem["size"];
        this.borer = objItem["borer"];
        this.stupica = objItem["stupica"];
        this.radius = objItem["radius"];
        this.color = objItem["color"];
        this.type = objItem["type"];
        this.manufacturer = objItem["manufacturer"];
        this.status = objItem["status"];
        this.code = objItem["code"];
        this.url = objItem["url"];
        this.meta_title = objItem["meta_title"];
        this.meta_keywords = objItem["meta_keywords"];
        this.meta_description = objItem["meta_description"];
        this.description = objItem["description"];
    }
}
