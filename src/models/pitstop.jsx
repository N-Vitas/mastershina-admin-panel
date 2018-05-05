import buildUrl from 'build-url';

class Pitstop {
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
}
Pitstop.getAttribute = (name) => {
    switch(name){
        case 'brand': return 'tire_brand';
        case 'code': return '1c_code';
        case 'name_new': return 'tire_name_new';
        case 'load': return 'tire_load';
        case 'speed': return 'tire_speed';
        case 'time': return 'tire_time';
        case 'ts': return 'tire_ts';
        case 'width': return 'tire_width';
        case 'rf': return 'tire_rf';
        case 'thorn': return 'tire_thorn';
        case 'param': return 'tire_param';
        case 'price': return 'tire_price';
        case 'price1': return 'tire_price1';
        case 'kol': return 'tire_kol';
        case 'photo': return 'tire_photo';
        case 'photo1': return 'tire_photo1';
        case 'photo2': return 'tire_photo2';
        case 'desc': return 'tire_desc';
        default:
            return '';
    }
}
Pitstop.attributeLabels = () => {
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
            brand : 'Бренд шины',
            code : '1c код',
            name_new : 'Название шины',
            load : 'Индекс нагрузки',
            speed : 'Индекс скорости',
            time : 'Сезонность',
            ts : 'Тип кузова',
            width : 'Ширина/Высота/Диаметр',
            rf : 'Беспрокольные',
            thorn : 'Шипованные',
            param : 'Дополнительные параметры',
            price : 'Цена',
            price1 : 'Старая цена',
            kol : 'Количество',
            photo : 'Картинка',
            photo1 : 'Tire Photo1',
            photo2 : 'Tire Photo2',
            desc : 'Описание',
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

Pitstop.createSearch = (type = 'shiny', search={}, page=1, sort='', limit=10) => {
    let params = { page,sort };
    switch(type){
        case 'disc':
            params = {...params,'SearchApiDataProvider[disc]':true}
            break;
        case 'oil':
            params = {...params,'SearchApiDataProvider[oil]':true}
            break;
        case 'battery':
            params = {...params,'SearchApiDataProvider[battery]':true}
            break;
        default:
        params = {...params,'SearchApiDataProvider[shiny]':true}
    }
    // А далее параметры поиска
    if(typeof search.id !== 'undefined') { params = {...params,'SearchApiDataProvider[id]':search.id}}
    if(typeof search.id_section !== 'undefined') { params = {...params,'SearchApiDataProvider[id_section]':search.id_section}}
    if(typeof search.version !== 'undefined') { params = {...params,'SearchApiDataProvider[version]':search.version}}
    if(typeof search.url !== 'undefined') { params = {...params,'SearchApiDataProvider[url]':search.url}}
    if(typeof search.active !== 'undefined') { params = {...params,'SearchApiDataProvider[active]':search.active}}
    if(typeof search.id_sort !== 'undefined') { params = {...params,'SearchApiDataProvider[id_sort]':search.id_sort}}
    if(typeof search.new !== 'undefined') { params = {...params,'SearchApiDataProvider[new]':search.new}}
    if(typeof search.spec !== 'undefined') { params = {...params,'SearchApiDataProvider[spec]':search.spec}}
    if(typeof search.top !== 'undefined') { params = {...params,'SearchApiDataProvider[top]':search.top}}
    if(typeof search.name !== 'undefined') { params = {...params,'SearchApiDataProvider[name]':search.name}}
    if(typeof search.price !== 'undefined') { params = {...params,'SearchApiDataProvider[price]':search.price}}
    if(typeof search.price_old !== 'undefined') { params = {...params,'SearchApiDataProvider[price_old]':search.price_old}}
    if(typeof search.image !== 'undefined') { params = {...params,'SearchApiDataProvider[image]':search.image}}
    if(typeof search.image1 !== 'undefined') { params = {...params,'SearchApiDataProvider[image1]':search.image1}}
    if(typeof search.image2 !== 'undefined') { params = {...params,'SearchApiDataProvider[image2]':search.image2}}
    if(typeof search.image3 !== 'undefined') { params = {...params,'SearchApiDataProvider[image3]':search.image3}}
    if(typeof search.anounce !== 'undefined') { params = {...params,'SearchApiDataProvider[anounce]':search.anounce}}
    if(typeof search.text !== 'undefined') { params = {...params,'SearchApiDataProvider[text]':search.text}}
    if(typeof search.art !== 'undefined') { params = {...params,'SearchApiDataProvider[art]':search.art}}
    if(typeof search.brand !== 'undefined') { params = {...params,'SearchApiDataProvider[brand]':search.brand}}
    if(typeof search.title !== 'undefined') { params = {...params,'SearchApiDataProvider[title]':search.title}}
    if(typeof search.keyw !== 'undefined') { params = {...params,'SearchApiDataProvider[keyw]':search.keyw}}
    if(typeof search.descr !== 'undefined') { params = {...params,'SearchApiDataProvider[descr]':search.descr}}
    if(typeof search.tire_brand !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_brand]':search.tire_brand}}
    if(typeof search['1c_code'] !== 'undefined') { params = {...params,'SearchApiDataProvider[1c_code]':search['1c_code']}}
    if(typeof search.tire_name_new !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_name_new]':search.tire_name_new}}
    if(typeof search.tire_load !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_load]':search.tire_load}}
    if(typeof search.tire_speed !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_speed]':search.tire_speed}}
    if(typeof search.tire_time !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_time]':search.tire_time}}
    if(typeof search.tire_ts !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_ts]':search.tire_ts}}
    if(typeof search.tire_width !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_width]':search.tire_width}}
    if(typeof search.tire_rf !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_rf]':search.tire_rf}}
    if(typeof search.tire_thorn !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_thorn]':search.tire_thorn}}
    if(typeof search.tire_param !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_param]':search.tire_param}}
    if(typeof search.tire_price !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_price]':search.tire_price}}
    if(typeof search.tire_price1 !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_price1]':search.tire_price1}}
    if(typeof search.tire_kol !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_kol]':search.tire_kol}}
    if(typeof search.tire_photo !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_photo]':search.tire_photo}}
    if(typeof search.tire_photo1 !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_photo1]':search.tire_photo1}}
    if(typeof search.tire_photo2 !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_photo2]':search.tire_photo2}}
    if(typeof search.tire_desc !== 'undefined') { params = {...params,'SearchApiDataProvider[tire_desc]':search.tire_desc}}
    if(typeof search.disk_brand !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_brand]':search.disk_brand}}
    if(typeof search['1c_code_disk'] !== 'undefined') { params = {...params,'SearchApiDataProvider[1c_code_disk]':search['1c_code_disk']}}
    if(typeof search.disk_name !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_name]':search.disk_name}}
    if(typeof search.disk_width !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_width]':search.disk_width}}
    if(typeof search.disk_diam !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_diam]':search.disk_diam}}
    if(typeof search.disk_sver !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_sver]':search.disk_sver}}
    if(typeof search.disk_vilet !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_vilet]':search.disk_vilet}}
    if(typeof search.disk_color !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_color]':search.disk_color}}
    if(typeof search.disk_type !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_type]':search.disk_type}}
    if(typeof search.disk_price !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_price]':search.disk_price}}
    if(typeof search.disk_price1 !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_price1]':search.disk_price1}}
    if(typeof search.disk_kol !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_kol]':search.disk_kol}}
    if(typeof search.disk_img !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_img]':search.disk_img}}
    if(typeof search.disk_img1 !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_img1]':search.disk_img1}}
    if(typeof search.disk_img2 !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_img2]':search.disk_img2}}
    if(typeof search.disk_text !== 'undefined') { params = {...params,'SearchApiDataProvider[disk_text]':search.disk_text}}
    if(typeof search.time_url !== 'undefined') { params = {...params,'SearchApiDataProvider[time_url]':search.time_url}}
    if(typeof search.ts_url !== 'undefined') { params = {...params,'SearchApiDataProvider[ts_url]':search.ts_url}}
    if(typeof search.a_act !== 'undefined') { params = {...params,'SearchApiDataProvider[a_act]':search.a_act}}
    if(typeof search.a_id !== 'undefined') { params = {...params,'SearchApiDataProvider[a_id]':search.a_id}}
    if(typeof search.a_1c !== 'undefined') { params = {...params,'SearchApiDataProvider[a_1c]':search.a_1c}}
    if(typeof search.a_brand !== 'undefined') { params = {...params,'SearchApiDataProvider[a_brand]':search.a_brand}}
    if(typeof search.a_name !== 'undefined') { params = {...params,'SearchApiDataProvider[a_name]':search.a_name}}
    if(typeof search.a_kol !== 'undefined') { params = {...params,'SearchApiDataProvider[a_kol]':search.a_kol}}
    if(typeof search.a_length !== 'undefined') { params = {...params,'SearchApiDataProvider[a_length]':search.a_length}}
    if(typeof search.a_width !== 'undefined') { params = {...params,'SearchApiDataProvider[a_width]':search.a_width}}
    if(typeof search.a_height !== 'undefined') { params = {...params,'SearchApiDataProvider[a_height]':search.a_height}}
    if(typeof search.a_em !== 'undefined') { params = {...params,'SearchApiDataProvider[a_em]':search.a_em}}
    if(typeof search.a_tok !== 'undefined') { params = {...params,'SearchApiDataProvider[a_tok]':search.a_tok}}
    if(typeof search.a_pol !== 'undefined') { params = {...params,'SearchApiDataProvider[a_pol]':search.a_pol}}
    if(typeof search.a_nap !== 'undefined') { params = {...params,'SearchApiDataProvider[a_nap]':search.a_nap}}
    if(typeof search.a_gar !== 'undefined') { params = {...params,'SearchApiDataProvider[a_gar]':search.a_gar}}
    if(typeof search.a_proiz !== 'undefined') { params = {...params,'SearchApiDataProvider[a_proiz]':search.a_proiz}}
    if(typeof search.a_price !== 'undefined') { params = {...params,'SearchApiDataProvider[a_price]':search.a_price}}
    if(typeof search.a_price1 !== 'undefined') { params = {...params,'SearchApiDataProvider[a_price1]':search.a_price1}}
    if(typeof search.a_img !== 'undefined') { params = {...params,'SearchApiDataProvider[a_img]':search.a_img}}
    if(typeof search.a_img1 !== 'undefined') { params = {...params,'SearchApiDataProvider[a_img1]':search.a_img1}}
    if(typeof search.a_img2 !== 'undefined') { params = {...params,'SearchApiDataProvider[a_img2]':search.a_img2}}
    if(typeof search.a_text !== 'undefined') { params = {...params,'SearchApiDataProvider[a_text]':search.a_text}}
    if(typeof search.m_act !== 'undefined') { params = {...params,'SearchApiDataProvider[m_act]':search.m_act}}
    if(typeof search.m_id !== 'undefined') { params = {...params,'SearchApiDataProvider[m_id]':search.m_id}}
    if(typeof search.m_1c !== 'undefined') { params = {...params,'SearchApiDataProvider[m_1c]':search.m_1c}}
    if(typeof search.m_brand !== 'undefined') { params = {...params,'SearchApiDataProvider[m_brand]':search.m_brand}}
    if(typeof search.m_name !== 'undefined') { params = {...params,'SearchApiDataProvider[m_name]':search.m_name}}
    if(typeof search.m_type !== 'undefined') { params = {...params,'SearchApiDataProvider[m_type]':search.m_type}}
    if(typeof search.m_ob !== 'undefined') { params = {...params,'SearchApiDataProvider[m_ob]':search.m_ob}}
    if(typeof search.m_vz1 !== 'undefined') { params = {...params,'SearchApiDataProvider[m_vz1]':search.m_vz1}}
    if(typeof search.m_vz2 !== 'undefined') { params = {...params,'SearchApiDataProvider[m_vz2]':search.m_vz2}}
    if(typeof search.m_kol !== 'undefined') { params = {...params,'SearchApiDataProvider[m_kol]':search.m_kol}}
    if(typeof search.m_dvig !== 'undefined') { params = {...params,'SearchApiDataProvider[m_dvig]':search.m_dvig}}
    if(typeof search.m_price !== 'undefined') { params = {...params,'SearchApiDataProvider[m_price]':search.m_price}}
    if(typeof search.m_price1 !== 'undefined') { params = {...params,'SearchApiDataProvider[m_price1]':search.m_price1}}
    if(typeof search.m_img !== 'undefined') { params = {...params,'SearchApiDataProvider[m_img]':search.m_img}}
    if(typeof search.m_img1 !== 'undefined') { params = {...params,'SearchApiDataProvider[m_img1]':search.m_img1}}
    if(typeof search.m_img2 !== 'undefined') { params = {...params,'SearchApiDataProvider[m_img2]':search.m_img2}}
    if(typeof search.m_text !== 'undefined') { params = {...params,'SearchApiDataProvider[m_text]':search.m_text}}

    return buildUrl('', { path: 'pitstop/search', queryParams: params });
}

export default Pitstop;