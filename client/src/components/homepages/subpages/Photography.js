import React, { useContext } from 'react'
import '../../../App.scss'
import './Photography.scss'
import { DataContext } from '../../Context/GlobalContext'
import FadeIn from '../../../FadeIn'

const Photography = () => {

    const state = useContext(DataContext)
    const [photography] = state.photography
    const [dataPhotography] = state.dataPhotography

    return (
        <div className="photography">
            <div className="photography__container">
                <h2 className="photography__title">
                    Photography
                </h2>

                {dataPhotography && <div className="photography__person">
                    <FadeIn direction={'left'}>
                        <div className="photography__person__card" key={'loading'}>
                            <div className="photography__person__card__image">
                                <img className="photography__person__card__img" src={'loading'} alt={'loading'} />
                            </div>
                            <p className="photography__person__card__name">
                                {'loading'}
                            </p>
                            <i className="photography__person__card__title">
                                {'loading'}
                            </i>
                            <p className="photography__person__card__description">
                                {'loading'}
                            </p>
                        </div>
                    </FadeIn>
                </div>}

                {!dataPhotography && <div className="photography__person">
                    {photography.map((item) => (
                        <FadeIn direction={'left'}>
                            <div className="photography__person__card" key={item._id}>
                                <div className="photography__person__card__image">
                                    <img className="photography__person__card__img" src={item.images.url} alt={item._id} />
                                </div>
                                <p className="photography__person__card__name">
                                    {item.name}
                                </p>
                                <i className="photography__person__card__title">
                                    {item.title}
                                </i>
                                <p className="photography__person__card__description">
                                    {item.description}
                                </p>
                            </div>
                        </FadeIn>

                    ))}
                </div>}
            </div>

        </div>
    )
}

export default Photography