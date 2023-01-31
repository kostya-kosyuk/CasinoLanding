/* eslint-disable jsx-a11y/anchor-has-content */
import classNames from 'classnames';
import { CardInfo } from "../types/CardInfo";
import { StringLiteral } from 'typescript';

type Props = {
    cards: CardInfo[],
    id: String,
};

export const Card: React.FC<Props> = ({ cards, id }) => (
    <>
    {
    cards.map(cardInfo => {
        const { name, link } = cardInfo;
        return (
            <div className="card" key={name}>
                <img
                    className="image"
                    src={window.location.origin + `/imgs/${name}.jpg`} alt={name}/>
                <a
                    className={classNames('link', {name})}
                    href={link + `&s1=${id}`}>
                </a>
            </div>
            )
        })
    }
    </>
);