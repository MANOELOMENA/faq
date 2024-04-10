import React, { useState } from 'react'
import './faq.scss'

const FAQ = () => {
  const [faqItems, setFaqItems] = useState([
    { question: "Pergunta 1", answer: "Resposta 1", isOpen: false },
    { question: "Pergunta 2", answer: "Resposta 2", isOpen: false },
    { question: "Pergunta 3", answer: "Resposta 3", isOpen: false },
    { question: "Pergunta 4", answer: "Resposta 4", isOpen: false }
  ])

  const toggleItem = (index) => {
    setFaqItems(prevItems => {
      const updatedItems = [...prevItems]
      updatedItems[index].isOpen = !updatedItems[index].isOpen
      return updatedItems
    })
  }
  return (
    <div className="faq-form">
      <div className="faq-form__container">
        <h1 className="faq-form__title">FAQs</h1>
        <div className="faq-form__items">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-form__item">
              <div className="faq-form__question" onClick={() => toggleItem(index)}>
                <span className="faq-form__toggle-btn">{item.isOpen ? '-' : '+'}</span>
                <h3>{item.question}</h3>
              </div>
              {item.isOpen && (
                <p className="faq-form__answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ