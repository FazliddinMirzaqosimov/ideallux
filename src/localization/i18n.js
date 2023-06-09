import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(initReactI18next)
    // .use(LanguageDetector)
    .init({
        // debug:true,
        fallbackLng:'ru',
        supportedLngs:['ru','uz'],
        interpolation:{
            escapeValue:false
        },
        resources:{
            ru:{
                translation:{
                    navbar: {
                        article:'Статьи',
                        contact:'Контакты',
                        catalog:'Каталог',
                        buyers:'Покупателям',
                        aboutCompany:'О компании',
                        information:'Информация',
                        home:'Главная'
                    },
                    more:'Подробнее',
                    category:'Категории',
                    new:'Наши новинки',
                    usefulArticles:'Полезные статьи',
                    popularGoods:'Популярные товары',
                    information:{
                        shippingAndPayment:{
                            title:'Доставка и оплата',
                            text:'Оплатите товар удобным для вас способом\nи мы доставим его в течении 24 часов'
                        },
                        officialGuarantee:{
                            title:'Официальная гарантия',
                            text:'Официальная гарантия в течении 36 месяцев'
                        },
                        dataSecurity:{
                            title:'Сохранность данных',
                            text:'Ваши персональные данные в полной безопасности'
                        }
                        ,
                        purchaseReturns:{
                            title:'Возврат товара',
                            text:'Возврат товара в течении 14 дней'
                        }
                    },
                    search:'Найти',
                    searchPlaceholder:'Искать товар',
                    catalogProduct:'Каталог товаров',
                    filter:'Фильтр',
                    sort:'Сортировать',
                    see:'Увидеть',
                    contact:{
                        alwaysInTouch:'Всегда на связи',
                        contactCenter:{
                            title:'Контакт-центр'
                        },
                        address:{
                            title:'Адрес',
                            text:'Узбекистан, Самарканд Регион, Ургут дистриcт ФРЕЕ ЕCОНОМИC ЗОНЕ УРГУТ'
                        },
                        email:{
                            title:'Электронная почта'
                        }
                    },
                    pageNotFound:{
                        title:'Упсс... Страница не доступна',
                        info:'Информация о компании не предоставленна'
                    },
                    nothingFound:"Ничего не найдено",
                    aboutCompany:"Один из ведущих производителей на рынке бытовой техники.История IDEAL началась в 2013 году. И уже сегодня, в компании горит дело одной из лучших команд экспертов своего дела, состоящая более чем из 1000 человек. Каждый из них обладает безупречным вкусом и творческим мышлением, поэтому продукция IDEAL не только очень функциональная и надежна, но и впишется в любой современный интерьер. Также компания IDEAL ведет тесное сотрудничество с такими компаниями, как 'SIMFER' и 'ODUL trophy'",
                    download:'скачать Каталог'
                }
            },
            uz:{
                translation:{
                    navbar: {
                        article:'Maqolalar',
                        contact:'Kontaktlar',
                        catalog:'Katalog',
                        buyers:'Xaridorlar',
                        aboutCompany:'Kompaniya haqida',
                        information:'Ma`lumot',
                        home:'Asosiy'
                    },
                    more:'Ko\'proq',
                    category:'Kategoriyalar',
                    new:'Bizning yangiliklar',
                    usefulArticles:'Foydali maqolalar',
                    popularGoods:'Ommabop tovarlar',
                    information:{
                        shippingAndPayment:{
                            title:'Yetkazib berish va to\'lash',
                            text:"Tovarlarni siz uchun qulay tarzda to'lang\n" +
                                "va biz uni 24 soat ichida yetkazib beramiz"
                        },
                        officialGuarantee:{
                            title:'Rasmiy kafolat',
                            text:'36 oylik rasmiy kafolat'
                        },
                        dataSecurity:{
                            title:'Ma\'lumotlar xavfsizligi',
                            text:'Shaxsiy ma\'lumotlaringiz butunlay xavfsiz'
                        }
                        ,
                        purchaseReturns:{
                            title:'Sotib olish qaytariladi',
                            text:'14 kun ichida tovarlarni qaytarish'
                        }
                    },
                    search:'Qidiring',
                    searchPlaceholder:'Mahsulotni qidirish',
                    catalogProduct:'Mahsulot katalogi',
                    filter:'Filtr',
                    sort:'Saralash',
                    see:"Ko'rish",
                    contact:{
                        alwaysInTouch:'Har doim aloqada',
                        contactCenter:{
                            title:'Aloqa markazi'
                        },
                        address:{
                            title:'Manzil',
                            text:'Oʻzbekiston, Samarqand viloyati, Urgut tumani URGUT ERKIN IQTISODIYOT ZONASI'
                        },
                        email:{
                            title:'Elektron pochta'
                        }
                    },
                    pageNotFound:{
                        title:'Voy... Sahifa mavjud emas',
                        info:'Kompaniya haqida ma\'lumot berilmagan'
                    },
                    nothingFound:'Hech narsa topilmadi',
                    aboutCompany:"Uy xo'jaligi texnikasining yetakchi ishlab\n" +
                        "chiqaruvchilardan biri. IDEAL 2013-yilda tashkil topgan.\n" +
                        "Bugungi kunda kompaniya jadallik bilan rivojlanib bormoqda.\n" +
                        "1000 kishidan ortiq o‘z sohasi bo‘yicha mutaxasislardan\n" +
                        "iborat jamoa.Har bir xodimimiz o'z kasbining ustasi,\n" +
                        "shuning uchun.IDEAL mahsulotlari juda funktsional va\n" +
                        "ishonchli, Ayni paytda har qanday zamon talablariga mos\n" +
                        "keladi. IDEAL kompaniyasi \"SIMFER\" va \"ODUL trophy\"\n" +
                        "kompaniyalar bilan yaqindan hamkorlik qiladi.",
                    download:'Katalog yuklab olish'
                }
            }}
    })