export default class Pitstop {
    constructor(){
        this.id = 0;
        this.id_section = 0;
        this.version = "ru";
        this.url = null;
        this.active = null;
        this.id_sort = null;
        this.news = 0;
        this.spec = null;
        this.top = null;
        this.name = null;
        this.price = null;
        this.price_old = null;
        this.image = null;
        this.image1 = null;
        this.image2 = null;
        this.image3 = null;
        this.anounce = null;
        this.text = null;
        this.art = null;
        this.brand = null;
        this.title = null;
        this.keyw = null;
        this.descr = null;
        this.shiny = {
            brand : null,
            code : null,
            name_new : null,
            load : null,
            speed : null,
            time : null,
            ts : null,
            width : null,
            rf : null,
            thorn : null,
            param : null,
            price :0,
            price1 :0,
            kol :0,
            photo : "none_pic.jpg",
            photo1 : null,
            photo2 : null,
            desc : null,
        };
        this.disc = {
            brand : null,
            code : null,
            name : null,
            width : null,
            diam : null,
            sver : null,
            vilet : null,
            color : null,
            type : null,
            price : 0,
            price1 : 0,
            kol : 0,
            img : "none_pic.jpg",
            img1 : null,
            img2 : null,
            text : null,

        };
        this.time_url = null;
        this.ts_url = null;
        this.battery = {
            act : null,
            id : null,
            code : null,
            brand : null,
            name : null,
            kol : 0,
            length : null,
            width : null,
            height : null,
            em : null,
            tok : null,
            pol : null,
            nap : null,
            gar : null,
            proiz : null,
            price : 0,
            price1 : 0,
            img : "none_pic.jpg",
            img1 : null,
            img2 : null,
            text : null,
        };
        this.maslo = {
            act : null,
            id : null,
            code : null,
            brand : null,
            name : null,
            type : null,
            ob : null,
            vz1 : null,
            vz2 : null,
            kol : 0,
            dvig : null,
            price : 0,
            price1 : 0,
            img : "none_pic.jpg",
            img1 : null,
            img2 : null,
            text : null,
        };
    };
    getShiny = () => (this.shiny);
    getDisc = () => (this.disc);
    getBattery = () => (this.battery);
    getOil = () => (this.maslo);
    
    setAttributes = (objItem) => {
        this.id = objItem["id"];
        this.id_section = objItem["id_section"];
        this.version = objItem["version"];
        this.url = objItem["url"];
        this.active = objItem["active"];
        this.id_sort = objItem["id_sort"];
        this.new = objItem["new"];
        this.spec = objItem["spec"];
        this.top = objItem["top"];
        this.name = objItem["name"];
        this.price = objItem["price"];
        this.price_old = objItem["price_old"];
        this.image = objItem["image"];
        this.image1 = objItem["image1"];
        this.image2 = objItem["image2"];
        this.image3 = objItem["image3"];
        this.anounce = objItem["anounce"];
        this.text = objItem["text"];
        this.art = objItem["art"];
        this.brand = objItem["brand"];
        this.title = objItem["title"];
        this.keyw = objItem["keyw"];
        this.descr = objItem["descr"];

        this.shiny.brand = objItem["tire_brand"];
        this.shiny.code = objItem["1c_code"];
        this.shiny.name_new = objItem["tire_name_new"];
        this.shiny.load = objItem["tire_load"];
        this.shiny.speed = objItem["tire_speed"];
        this.shiny.time = objItem["tire_time"];
        this.shiny.ts = objItem["tire_ts"];
        this.shiny.width = objItem["tire_width"];
        this.shiny.rf = objItem["tire_rf"];
        this.shiny.thorn = objItem["tire_thorn"];
        this.shiny.param = objItem["tire_param"];
        this.shiny.price = objItem["tire_price"];
        this.shiny.price1 = objItem["tire_price1"];
        this.shiny.kol = objItem["tire_kol"];
        this.shiny.photo = objItem["tire_photo"];
        this.shiny.photo1 = objItem["tire_photo1"];
        this.shiny.photo2 = objItem["tire_photo2"];
        this.shiny.desc = objItem["tire_desc"];

        this.disc.brand = objItem["disk_brand"];
        this.disc.code = objItem["1c_code_disk"];
        this.disc.name = objItem["disk_name"];
        this.disc.width = objItem["disk_width"];
        this.disc.diam = objItem["disk_diam"];
        this.disc.sver = objItem["disk_sver"];
        this.disc.vilet = objItem["disk_vilet"];
        this.disc.color = objItem["disk_color"];
        this.disc.type = objItem["disk_type"];
        this.disc.price = objItem["disk_price"];
        this.disc.price1 = objItem["disk_price1"];
        this.disc.kol = objItem["disk_kol"];
        this.disc.img = objItem["disk_img"];
        this.disc.img1 = objItem["disk_img1"];
        this.disc.img2 = objItem["disk_img2"];
        this.disc.text = objItem["disk_text"];

        this.time_url = objItem["time_url"];
        this.ts_url = objItem["ts_url"];

        this.battery.act = objItem["a_act"];
        this.battery.id = objItem["a_id"];
        this.battery.code = objItem["a_1c"];
        this.battery.brand = objItem["a_brand"];
        this.battery.name = objItem["a_name"];
        this.battery.kol = objItem["a_kol"];
        this.battery.length = objItem["a_length"];
        this.battery.width = objItem["a_width"];
        this.battery.height = objItem["a_height"];
        this.battery.em = objItem["a_em"];
        this.battery.tok = objItem["a_tok"];
        this.battery.pol = objItem["a_pol"];
        this.battery.nap = objItem["a_nap"];
        this.battery.gar = objItem["a_gar"];
        this.battery.proiz = objItem["a_proiz"];
        this.battery.price = objItem["a_price"];
        this.battery.price1 = objItem["a_price1"];
        this.battery.img = objItem["a_img"];
        this.battery.img1 = objItem["a_img1"];
        this.battery.img2 = objItem["a_img2"];
        this.battery.text = objItem["a_text"];

        this.maslo.act = objItem["m_act"];
        this.maslo.id = objItem["m_id"];
        this.maslo.code = objItem["m_1c"];
        this.maslo.brand = objItem["m_brand"];
        this.maslo.name = objItem["m_name"];
        this.maslo.type = objItem["m_type"];
        this.maslo.ob = objItem["m_ob"];
        this.maslo.vz1 = objItem["m_vz1"];
        this.maslo.vz2 = objItem["m_vz2"];
        this.maslo.kol = objItem["m_kol"];
        this.maslo.dvig = objItem["m_dvig"];
        this.maslo.price = objItem["m_price"];
        this.maslo.price1 = objItem["m_price1"];
        this.maslo.img = objItem["m_img"];
        this.maslo.img1 = objItem["m_img1"];
        this.maslo.img2 = objItem["m_img2"];
        this.maslo.text = objItem["m_text"];
    }

    attributeLabels = () => {
        return {
            id : 'ID',
            id_section : 'Id Секции',
            version : 'Версия',
            url : 'Ссылка',
            active : 'Активный товар',
            id_sort : 'Id Сортировки',
            new : 'Новый',
            spec : 'Спецзаказ',
            top : 'Популяный',
            name : 'Имя',
            price : 'Цена',
            price_old : 'Старая цена',
            image : 'Картинка',
            image1 : 'Картинка 1',
            image2 : 'Картинка2',
            image3 : 'Картинка 3',
            anounce : 'Анонс',
            text : 'Описание',
            art : 'Art',
            brand : 'Бренд',
            title : 'Название',
            keyw : 'Ключевые слова',
            descr : 'Описание',
            shiny : {
                tire_brand : 'Бренд шины',
                code : '1c код',
                tire_name_new : 'Название шины',
                tire_load : 'Индекс нагрузки',
                tire_speed : 'Индекс скорости',
                tire_time : 'Сезонность',
                tire_ts : 'Тип кузова',
                tire_width : 'Ширина/Высота/Диаметр',
                tire_rf : 'Беспрокольные',
                tire_thorn : 'Шипованные',
                tire_param : 'Дополнительные параметры',
                tire_price : 'Цена',
                tire_price1 : 'Старая цена',
                tire_kol : 'Количество',
                tire_photo : 'Картинка',
                tire_photo1 : 'Tire Photo1',
                tire_photo2 : 'Tire Photo2',
                tire_desc : 'Описание',
            },
            disc: {
                disk_brand : 'Бренд',
                code : '1c код',
                disk_name : 'Название диска',
                disk_width : 'Размер (радиус х ширина диска)',
                disk_diam : 'Диаметр ступицы',
                disk_sver : 'Сверловка',
                disk_vilet : 'Вылет',
                disk_color : 'Цвет',
                disk_type : 'Тип',
                disk_price : 'Цена',
                disk_price1 : 'Старая цена',
                disk_kol : 'Количество',
                disk_img : 'Картинка',
                disk_img1 : 'Disk Img1',
                disk_img2 : 'Disk Img2',
                disk_text : 'Описание',
            },
            time_url : 'Сезонность в транскрипции',
            ts_url : 'Тип кузова в транскрипции',
            battery: {
                a_act : 'Артикул',
                a_id : 'ID',
                code : '1c код',
                a_brand : 'Бренд',
                a_name : 'Название аккумулятора',
                a_kol : 'Количество',
                a_length : 'Длина',
                a_width : 'Ширина',
                a_height : 'Высота',
                a_em : 'Ёмкость',
                a_tok : 'Стартовый ток',
                a_pol : 'Полярность',
                a_nap : 'Напряжение',
                a_gar : 'Гарантия',
                a_proiz : 'Страна',
                a_price : 'Цена',
                a_price1 : 'Старая цена',
                a_img : 'Картинка',
                a_img1 : 'Img1',
                a_img2 : 'Img2',
                a_text : 'Описание',
            },
            maslo: {
                m_act : 'Act',
                m_id : 'ID',
                m_1c : '1c код',
                m_brand : 'Бренд',
                m_name : 'Название малса',
                m_type : 'Тип жидкости',
                m_ob : 'Объем',
                m_vz1 : 'Вязкость 1',
                m_vz2 : 'Вязкость 2',
                m_kol : 'Количество',
                m_dvig : 'Тип двигателя',
                m_price : 'Цена',
                m_price1 : 'Старая цена',
                m_img : 'Картинка',
                m_img1 : 'Img1',
                m_img2 : 'Img2',
                m_text : 'Описание',
            },
        };
    }
}
