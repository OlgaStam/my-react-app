import React, { useState } from 'react'
import { Container } from '@mui/material'
import './Home.scss'
import Modal from '../Modal/Modal'

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false)

    const handleOpenModal = () => setModalOpen(true)
    const handleCloseModal = () => setModalOpen(false)
    return (
        <>
            <div id="home-fon" className="text-white fon-title">
                <Container>
                    <div className="title-home">
                        Бухгалтерська<br></br>
                        агенція "ЛЕВ"
                    </div>
                    <div className="small-font title-children">
                        Наш супровід - Ваш спокій
                    </div>
                    <div className="consultation-appointment">
                        <button
                            onClick={handleOpenModal}
                            type="button"
                            id="w0"
                            className="btn btn-light modal-button-consulting"
                            data-toggle="modal"
                            data-target="#myModal"
                        >
                            Запис на консультацію
                        </button>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="body-content">
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
            </Container>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
            <div className="content-block__bg">
                <Container>
                    <div className="content-block__title">Нас обирають:</div>
                    <div className="content-block">
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
                </Container>
            </div>
        </>
    )
}
export default Home
