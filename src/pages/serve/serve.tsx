import { Breadcrumbs, Container } from '@mui/material'
import './Serve.scss'
import twoNotebookRound from '../../assets/two-notebooks-round.webp'
import notebookRound from '../../assets/notebook-round.webp'
import codecsRound from '../../assets/codecs-round.webp'

type Props = {}
const serve = (props: Props) => {
    return (
        <Container>
            <Breadcrumbs></Breadcrumbs>
            <div className="site-about lev-font-color">
                <div className="serve-bg bg-two_notebooks">
                    <div className="serve-row">
                        <div className="serve-text-block">
                            <p className="serve-text__title">
                                Бухгалтерський облік:
                            </p>
                            <ul>
                                <li>комплексний бухгалтерський супровід</li>
                                <li>підготовка всіх фінансових звітів</li>
                                <li>
                                    аудит фінансової звітності та облікових
                                    програм
                                </li>
                            </ul>
                        </div>
                        <div className="serve-round-image">
                            <img
                                src={twoNotebookRound}
                                alt="two-notebooks-round"
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="serve-bg bg-codecs">
                    <div className="serve-row">
                        <div className="serve-round-image">
                            <img src={codecsRound} alt="codecs-round" />
                        </div>
                        <div className="serve-text-block">
                            <p className="serve-text__title">
                                Податковий супровід:
                            </p>
                            <ul>
                                <li>
                                    складання та подання податкової звітності
                                </li>
                                <li>розблокування податкових накладних</li>
                                <li>оцінка стану платника податків</li>
                                <li>оптимізація податкових зобов`язань</li>
                                <li>супровід податкових перевірок</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="serve-bg bg-notebook">
                    <div className="serve-row">
                        <div className="serve-text-block">
                            <p className="serve-text__title">Кадровий облік:</p>
                            <ul>
                                <li>ведення кадрової документації</li>
                                <li>облік робочого часу</li>
                                <li>розрахунок заробітної плати</li>
                                <li>подання звітності</li>
                            </ul>
                        </div>
                        <div className="serve-round-image">
                            <img src={notebookRound} alt="notebook-round" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="serve-row">
                    <span className="serve-text__title">
                        Індивідуальне консультування
                    </span>
                    <p>
                        Наші фахівці готові надати індивідуальні консультації,
                        враховуючи унікальні потреби та особливості вашого
                        бізнесу.
                    </p>
                </div>
            </div>
        </Container>
    )
}
export default serve
