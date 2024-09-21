import React from 'react'
import './Price.scss'
import { Container } from '@mui/material'

const price = () => {
    return (
        <Container>
            <h3 className="pageTitle">Ціни</h3>
            <section className="padd">
                <a className="price-card bg-calc" href="#group_1-2">
                    Для ФО-П на єдиному податку 1-2 група
                    <span>1</span>
                </a>
                <a className="price-card bg-calc" href="#group_3">
                    Для ФО-П на єдиному податку 3 група
                    <span>2</span>
                </a>
                <a className="price-card bg-calc" href="#without_tax">
                    Для юридичних осіб на єдиному податку без ПДВ
                    <span>3</span>
                </a>
                <a className="price-card bg-calc" href="#with_tax">
                    Для юридичних осіб на загальній системі оподпткування з ПДВ
                    <span>4</span>
                </a>
                <a className="price-card bg-calc" href="#other_services">
                    Інші послуги
                    <span>5</span>
                </a>
            </section>
            <section className="price-section">
                <section className="price-category bg-hand" id="group_1-2">
                    <span>1</span>
                    <h2 className="price-category__name">
                        Для ФО-П на єдиному податку 1-2 група
                    </h2>
                    <article className="price-item">
                        <h3 className="price-item__name">Пакет мінімальний</h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>щомісячний
                                контроль сплати податків
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>заповнення
                                книги обліку доходів
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>подача
                                щорічної звітності
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                консультування
                            </li>
                        </ul>
                        <p className="cost">від 500 грн</p>
                    </article>
                    <article className="price-item">
                        <h3 className="price-item__name">Пакет стандарт</h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>щомісячний
                                контроль сплати податків
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>заповнення
                                книги обліку доходів
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>подача
                                щорічної звітності
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>підготовка
                                та щоквартальна здача 4ДФ
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                консультування
                            </li>
                        </ul>
                        <p className="cost">900-1200 грн</p>
                    </article>
                    <article className="price-item">
                        <h3 className="price-item__name">
                            Пакет максимальний_1
                        </h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>щомісячний
                                контроль сплати податків
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>заповнення
                                книги обліку доходів
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>подача
                                щорічної звітності
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>підготовка
                                та щоквартальна здача 4ДФ
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>1 найманий
                                працівник (первинні документи, податки та
                                звітність)
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                консультування
                            </li>
                        </ul>
                        <p className="cost">1800-2200 грн</p>
                    </article>
                    <article className="price-item">
                        <h3 className="price-item__name">
                            Пакет максимальний_2
                        </h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>щомісячний
                                контроль сплати податків
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>заповнення
                                книги обліку доходів
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>подача
                                щорічної звітності
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>підготовка
                                та щоквартальна здача 4ДФ
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>2-4
                                найманий працівник (первинні документи, податки
                                та звітність)
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                консультування
                            </li>
                        </ul>
                        <p className="cost">2000-2600 грн</p>
                    </article>
                    <article className="price-item">
                        <h3 className="price-item__name">
                            Пакет максимальний_3
                        </h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>щомісячний
                                контроль сплати податків
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>заповнення
                                книги обліку доходів
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>подача
                                щорічної звітності
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>підготовка
                                та щоквартальна здача 4ДФ
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>5-8
                                найманий працівник (первинні документи, податки
                                та звітність)
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                консультування
                            </li>
                        </ul>
                        <p className="cost">2400-3400 грн</p>
                    </article>
                </section>

                <section className="price-category bg-hand" id="group_3">
                    <span>2</span>
                    <h2 className="price-category__name">
                        Для ФО-П на єдиному податку 3 група
                    </h2>
                    <article className="price-item">
                        <h3 className="price-item__name">Пакет стандарт</h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>щомісячний
                                контроль сплати податків
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>заповнення
                                книги обліку доходів
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>підготовка
                                та щоквартальна подача звітності
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                консультування
                            </li>
                        </ul>
                        <p className="cost">1100-1500 грн</p>
                    </article>
                    <article className="price-item">
                        <h3 className="price-item__name">
                            Пакет максимальний_1
                        </h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>щомісячний
                                контроль сплати податків
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>заповнення
                                книги обліку доходів
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>подача
                                щоквартальної звітності
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>підготовка
                                та щоквартальна здача 4ДФ
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>1 найманий
                                працівник (первинні документи, податки та
                                звітність)
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                консультування
                            </li>
                        </ul>
                        <p className="cost">1800-2200 грн</p>
                    </article>
                    <article className="price-item">
                        <h3 className="price-item__name">
                            Пакет максимальний_2
                        </h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>щомісячний
                                контроль сплати податків
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>заповнення
                                книги обліку доходів
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>підготовка
                                та щоквартальна подача звітності
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>2-4
                                найманий працівник (первинні документи, податки
                                та звітність)
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                консультування
                            </li>
                        </ul>
                        <p className="cost">2300-2700 грн</p>
                    </article>
                    <article className="price-item">
                        <h3 className="price-item__name">
                            Пакет максимальний_3
                        </h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>щомісячний
                                контроль сплати податків
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>заповнення
                                книги обліку доходів
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>підготовка
                                та щоквартальна здача звітності
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>від 5
                                найманий працівник (первинні документи, податки
                                та звітність)
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>
                                консультування
                            </li>
                        </ul>
                        <p className="cost">від 2700 грн</p>
                    </article>
                </section>

                <section className="price-category bg-hand" id="without_tax">
                    <span>3</span>
                    <h2 className="price-category__name">
                        Для юридичних осіб на єдиному податку без ПДВ
                    </h2>
                    <article className="price-item">
                        <h3 className="price-item__name">Пакет мінімальний</h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>до 20
                                операцій на міцсяць
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i> до 2
                                співробітників
                            </li>
                        </ul>
                        <p className="cost">від 3500 грн</p>
                    </article>
                    <article className="price-item">
                        <h3 className="price-item__name">Пакет максимальний</h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>більше 20
                                операцій на міцсяць
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>більше 2
                                співробітників
                            </li>
                            <i>Можливе додаткове подання звітності:</i>
                            <li>• по військовому обліку</li>
                            <li>
                                • по податку (оренді) на землю та нерухомість
                            </li>
                            <li>• по рентній платі</li>
                            <li>• по екологічному податку</li>
                            <li>• в статистику</li>
                        </ul>
                        <p className="cost">
                            ціна розраховується індивідуально
                        </p>
                    </article>
                </section>
                <section className="price-category bg-hand" id="with_tax">
                    <span>4</span>
                    <h2 className="price-category__name">
                        Для юридичних осіб на загальній системі оподаткування з
                        ПДВ
                    </h2>
                    <article className="price-item">
                        <h3 className="price-item__name">Пакет мінімальний</h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>до 10
                                операцій на міцсяць
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>до 2
                                співробітників
                            </li>
                        </ul>
                        <p className="cost">від 5000 грн</p>
                    </article>
                    <article className="price-item">
                        <h3 className="price-item__name">Пакет стандарт</h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>до 30
                                операцій на міцсяць
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>до 5
                                співробітників
                            </li>
                        </ul>
                        <p className="cost">від 10000 грн</p>
                    </article>
                    <article className="price-item">
                        <h3 className="price-item__name">Пакет максимальний</h3>
                        <ul className="price-item__check">
                            <li>
                                <i className="fa-solid fa-check"></i>більше 30
                                операцій на міцсяць
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i>більше 5
                                співробітників
                            </li>
                            <i>Можливе додаткове подання звітності:</i>
                            <li>• по військовому обліку</li>
                            <li>
                                • по податку (оренді) на землю та нерухомість
                            </li>
                            <li>• по рентній платі</li>
                            <li>• по екологічному податку</li>
                            <li>• в статистику</li>
                        </ul>
                        <p className="cost">
                            ціна розраховується індивідуально
                        </p>
                    </article>
                </section>
                <section className="price-category bg-hand" id="other_services">
                    <span>5</span>
                    <h2 className="price-category__name">Інші послуги</h2>
                    <div className="others">
                        <article className="price-item">
                            <h3 className="price-item__name">Відкриття ФОП</h3>
                            <p className="cost">1500-2000 грн</p>
                        </article>
                        <article className="price-item">
                            <h3 className="price-item__name">
                                Підключення ПРРО
                            </h3>
                            <p className="cost">800-2000 грн</p>
                        </article>
                        <article className="price-item">
                            <h3 className=" price-item__name">
                                Здача річної звітності ФОП на єдиному податку 1
                                група
                            </h3>
                            <p className="cost">500 грн</p>
                        </article>
                        <article className="price-item">
                            <h3 className="price-item__name">
                                Здача річної звітності ФОП на єдиному податку 1
                                група с заповненням книги
                            </h3>
                            <p className="cost">1000 грн</p>
                        </article>
                        <article className="price-item">
                            <h3 className="price-item__name">
                                Здача річної звітності ФОП на єдиному податку 2
                                група
                            </h3>
                            <p className="cost">700 грн</p>
                        </article>
                        <article className="price-item">
                            <h3 className="price-item__name">
                                Здача річної звітності ФОП на єдиному податку 2
                                група с заповненням книги
                            </h3>
                            <p className="cost">1500 грн</p>
                        </article>
                        <article className="price-item">
                            <h3 className="price-item__name">
                                Здача квартальної звітності ФОП на єдиному
                                податку 3 група
                            </h3>
                            <p className="cost">700 грн</p>
                        </article>
                        <article className="price-item">
                            <h3 className="price-item__name">Кадровий облік</h3>
                            <p className="cost">
                                800 грн за 1 працівник + 400 грн за кожного
                                наступного
                            </p>
                        </article>
                    </div>
                </section>
            </section>
        </Container>
    )
}
export default price
