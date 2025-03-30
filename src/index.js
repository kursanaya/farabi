if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    })
}
function toggleMenu() {
    var menu = document.getElementById("dropdown-menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
// Закрытие меню при клике вне его области
document.addEventListener("click", function (event) {
    var menu = document.getElementById("dropdown-menu");
    var menuButton = document.querySelector(".menu-button");

    if (menu.style.display === "block" && !menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let days = document.querySelectorAll(".programme-day");
    let buttonsContainer = document.createElement("div");

    buttonsContainer.classList.add("programme-buttons");

    days.forEach((day, index) => {
        let button = document.createElement("button");
        button.innerText = `${index + 1}`;
        button.addEventListener("click", function () {
            days.forEach(d => d.style.display = "none");
            day.style.display = "block";
        });
        buttonsContainer.appendChild(button);
    });

    days[0].parentNode.insertBefore(buttonsContainer, days[0]);
    days.forEach((d, i) => { if (i !== 0) d.style.display = "none"; });
});
const articles = {
    1: {
        title: "ИНВЕНТАРИЗАЦИЯ ГЕРБАРНЫХ ОБРАЗЦОВ РОДА ALLIUM L. АРАЛО-БАЛХАШСКОГО РЕГИОНА В ГЕРБАРНЫХ ФОНДАХ Г. АЛМАТЫ",
        author: "Абдилданов Д.Ш.",
        text: `Целью работы является скрининг гербарных материалов видов рода Allium Арало-Балхашского региона, 
        представленных в гербарных фондах Института ботаники и фитоинтродукции (АА), 
        Казахского Национального университета имени аль-Фараби и других учреждений...`
    },
    2: {
        title: "СРАВНИТЕЛЬНЫЙ АНАЛИЗ ПОЧВ ПРОИЗРАСТАЮЩИХ FRAXINUS SOGDIANA BUNGE",
        author: "Алдибекова А.Р.",
        text: `Анализ морфогенетических свойств почв долин рек Шарын и Боролдай проводился для
характеристики условий произрастания древесных пород (ясень согдийский), определяющих формирование морфологических показателей и их изменение...`
    },
    3: {
        title: "РАЗРАБОТКА ТЕХНОЛОГИИ ВВЕДЕНИЯ В КУЛЬТУРУ IN VITRO ГИБРИДОВ ВИНОГРАДА КАЗАХСТАНСКОЙ СЕЛЕКЦИИ",
        author: "Аралбаева М.М., Земцова А.С., Михайленко Н.В.",
        text: `Виноград занимает лидирующую позицию в ряду экономически значимых сельскохозяйственных культур. 
    Благодаря ряду полезных качеств, доказанных многочисленными научными исследованиями, является ценным пищевым продуктом...`
    },
    4: {
        title: "ВИДЫ ХОХЛАТОК ФЛОРЫ ЗАИЛИЙСКОГО АЛАТАУ, ХРАНЯЩИЕСЯ В ГЕРБАРИИ (АА)",
        author: "Ахметжанова Р.К.",
        text: `Биоразнообразие Казахстана, как и большинства государств мира, находится под
угрозой. Сокращение его компонентов, в частности ботанического разнообразия вызвано,
прежде всего, антропогенным влиянием...`
    },
    5: {
        title: "ОСОБЕННОСТИ ПИТАНИЯ САЗАНА (CYPRINUS CARPIO) В ОЗЕРЕ БАЛКАШ",
        author: "Бараков Р.Т., Алтаева Ф.А.",
        text: `Изучение питания рыб имеет важное значение в выяснении вопросов использования кормовых объектов,
формирования пищевых взаимоотношений и повышения рыбопродуктивности водоемов. За частую, ухудшение кормовой базы ведет к негативным...`
    },
    6: {
        title: "AКТУAЛЬНЫE ПPOБЛEМЫ БИOЛOГИИ И COХPAНEНИЯ БИOPAЗНOOБPAЗИЯ",
        author: "Валиева Г.М.",
        text: `Биoлoгичecкoe paзнooбpaзиe (БP)– этo coвoкупнocть вceх фopм жизни, нaceляющeй
нaшу плaнeту. Этo тo, чтo дeлaeт Зeмлю нe пoхoжeй нa дpугиe плaнeты Coлнeчнoй cиcтeмы.
БP–этo бoгaтcтвo и мнoгooбpaзиe жизни и ee пpoцeccoв, включaющee paзнooбpaзиe живых...`
    }
};

function openArticle(id) {
    document.getElementById("articleTitle").innerText = articles[id].title;
    document.getElementById("articleAuthor").innerText = "Автор: " + articles[id].author;
    document.getElementById("articleText").innerText = articles[id].text;
    document.getElementById("articleModal").style.display = "flex";
}

function closeArticle() {
    document.getElementById("articleModal").style.display = "none";
}

function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
window.onclick = function(event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};