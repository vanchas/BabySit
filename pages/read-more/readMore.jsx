import React, { Component } from 'react'
import HowItWorks from '../../components/read-more/HowItWorks'
import OurMission from '../../components/read-more/OurMission'
import Vacancies from '../../components/read-more/Vacancies'
import FAQs from '../../components/read-more/FAQs'
import Rules from '../../components/read-more/Rules'
import s from './read-more.module.scss'


export default class ReadMore extends Component {
  render() {
    return (
      <div className={s.read_more}>
        <HowItWorks />
        <OurMission />
        <Vacancies />
        <FAQs />
        <Rules />
      </div>
    )
  }
}
