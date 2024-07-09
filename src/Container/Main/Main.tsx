import './Main.scss'
type Props = {}
const Main = () => {
    return (
        <main role="main">
            <div id="main-fon" className="text-white fon-title">
                <div className="container">
                    <div className="title-main">
                        Бухгалтерська<br></br>
                        агенція "ЛЕВ"
                    </div>
                    <div className="small-font title-children">
                        Наш супровід - Ваш спокій
                    </div>
                    <div className="consultation-appointment">
                        <button
                            type="button"
                            id="w0"
                            className="btn btn-light modal-button-consulting"
                            data-toggle="modal"
                            data-target="#myModal"
                        >
                            Запис на консультацію
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="body-content">
                    {/* 
                      div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-body">
                              <form id="contact-form" action="/main/home/create-consulting" method="post">
                                <type="hidden" name="_csrf-frontend" value="Lj8XChbIfxpM9_Ygcybp_pBl790aBtcI4BT61TYVk7FHcno_bPgqUQ2Vo1o_SqW84z22uy93lW6GdbTtXV3l4g==">
                                <div className="form-group field-contactform-name required">
                                  <label className="control-label" for="contactform-name">Ім'я</label>
                                  <input type="text" id="contactform-name" className="form-control" name="ContactForm[name]" autofocus="" aria-required="true">
                                    <div className="help-block"></div>
                                </div>
                                <div className="form-group field-contactform-email required">
                                  <input type="text" id="contactform-email" className="form-control" name="ContactForm[email]" aria-required="true">
                                    <div className="help-block"></div>
                                </div>
                                <div className="form-group field-contactform-phone required">
                                  <label className="control-label" for="contactform-phone">Номер телефону</label>
                                  <input type="text" id="contactform-phone" className="form-control" name="ContactForm[phone]" aria-required="true">
                                    <div className="help-block"></div>
                                </div>
                                <div className="form-group field-contactform-question required">
                                  <label className="control-label" for="contactform-question">Коротке питання</label>
                                  <input type="text" id="contactform-question" className="form-control" name="ContactForm[question]" aria-required="true">
                                    <div className="help-block"></div>
                                </div>
                                <div className="form-group consulting-submit-button">
                                  <button type="submit" className="btn btn-success" name="contact-button">Надіслати</button>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary close-modal" data-dismiss="modal">Закрити</button>
                            </div>
                          </div>
                        </div>
                      </div> 
                    */}
                    <div className="content-block lev-font-color">
                        <div className="content-block__title  lev-font-color"></div>
                        <div className="about_us">
                            <p className="tf">
                                Ми – бухгалтерська агенція, що досить недовго
                                працює на ринку України. Але сьогодні можемо з
                                впевненістю сказати, що за нашими плечима вже
                                багато задоволених клієнтів. Це все тому, що
                                провідні бухгалтери нашої агенції мають досвід
                                роботи в фінансовій сфері понад 15 років, а
                                помічниці – доповнюють їх наполегливістю в праці
                                та навчанні. Нам довіряють вести свою
                                бухгалтерію промислові підприємства та
                                підприємства торгівлі (юридичні особи на
                                загальній системі оподаткування з ПДВ),
                                представники громадського харчування та
                                ІТ-спеціалісти (ФОПи на єдиному податку),
                                надавачі послуг населенню та неприбуткові
                                організації. Ми беремо на себе всю рутинну
                                роботу з бухгалтерського обліку, складаємо
                                податкову звітність та допомагаємо в усіх
                                напрямках управлінського обліку.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-block__bg">
                <div className="container">
                    <div className="content-block__title">Нас обирають:</div>
                    <div className="content-block choose">
                        <div className="content-block__item">
                            <p className="content-block__item-header">
                                Mалий та середній бізнес (ТОВ, ФОП)
                            </p>
                            <p className="content-block__item-text">
                                Юридичні особи, які прагнуть оптимізувати свою
                                діяльність та зосередитися на основних
                                завданнях, шукають ефективне та професійне
                                ведення обліку та кадрового управління за
                                доступними витратами.
                            </p>
                        </div>
                        <div className="content-block__item">
                            <p className="content-block__item-header">
                                Фрілансери та самозайняті особи
                            </p>
                            <p className="content-block__item-text">
                                {' '}
                                Фізичні особи - підприємці, які ведуть власний
                                бізнес, і прагнуть ефективних рішень для свого
                                обліку та оподаткування.
                            </p>
                        </div>
                        <div className="content-block__item">
                            <p className="content-block__item-header">
                                Стартапи та нові підприємства
                            </p>
                            <p className="content-block__item-text">
                                Нові компанії, які потребують експертної
                                допомоги в бухгалтерському та управлінському
                                обліку, але не можуть собі дозволити великий
                                внутрішній штат спеціалістів.
                            </p>
                        </div>
                        <div className="content-block__item">
                            <p className="content-block__item-header">
                                Сектор не комерційних організацій
                            </p>
                            <p className="content-block__item-text">
                                Неприбуткові організації, які не мають
                                прибуткової мети, і шукають послуги з обліку та
                                фінансового управління
                            </p>
                        </div>
                    </div>
                    <div className="content-block__title">
                        Бухгалтерська агенція "ЛЕВ" - це:
                    </div>
                    <div className="content-block cw">
                        <div className="content-block__item">
                            <p className="content-block__item-header">
                                Глибокий досвід та професіоналізм
                            </p>
                            <p className="content-block__item-text">
                                Провідні бухгалтери агенції мають досвід роботи
                                понад 16 років та гарантують високу експертизу й
                                точність у веденні обліку для різних галузей.
                            </p>
                        </div>
                        <div className="content-block__item">
                            <p className="content-block__item-header">
                                Широкий спектр послуг
                            </p>
                            <p className="content-block__item-text">
                                Комплексне обслуговування з бухгалтерського,
                                податкового, управлінського та кадрового обліку
                                для різних видів підприємств.
                            </p>
                        </div>
                        <div className="content-block__item">
                            <p className="content-block__item-header">
                                Онлайн обслуговування
                            </p>
                            <p className="content-block__item-text">
                                Надання послуг як в офісі, так і онлайн, що
                                забезпечує максимальну зручність та доступність
                                для клієнтів.
                            </p>
                        </div>
                        <div className="content-block__item">
                            <p className="content-block__item-header">
                                Індивідуальний підхід
                            </p>
                            <p className="content-block__item-text">
                                Орієнтація на потреби клієнтів різних галузей,
                                забезпечуючи персоналізовані рішення та
                                консультації.
                            </p>
                        </div>
                        <div className="content-block__item">
                            <p className="content-block__item-header">
                                Висока ефективність та швидкість
                            </p>
                            <p className="content-block__item-text">
                                Використання передових технологій для
                                автоматизації процесів та оперативного вирішення
                                завдань.
                            </p>
                        </div>
                        <div className="content-block__item">
                            <p className="content-block__item-header">
                                Різноманітні галузі обслуговування
                            </p>
                            <p className="content-block__item-text">
                                Досвід роботи з підприємствами торгівлі,
                                виробництва, надання послуг, громадського
                                харчування, IT сфери та неприбуткових
                                організацій.
                            </p>
                        </div>
                        <div className="content-block__item">
                            <p className="content-block__item-header">
                                Безпека даних
                            </p>
                            <p className="content-block__item-text">
                                Гарантована безпека та конфіденційність даних
                                клієнтів, що особливо важливо для обробки
                                чутливої фінансової інформації.
                            </p>
                        </div>
                        <div className="content-block__item">
                            <p className="content-block__item-header">
                                Конкурентно-спроможні тарифи
                            </p>
                            <p className="content-block__item-text">
                                Агенція може запропонувати конкурентоспроможні
                                тарифи та гнучку систему оплати для своїх
                                клієнтів.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="up-button__wrapper">
                <a href="" className="up-button">
                    <svg width="29" height="29" viewBox="0 0 50 29" fill="none">
                        <path
                            className="up-button__path"
                            d="M4.5 24.5L25 4L45.5 24.5"
                            stroke="#545683"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </a>
            </div>
        </main>
    )
}
export default Main
