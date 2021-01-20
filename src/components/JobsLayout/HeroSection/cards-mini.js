import React from "react"
import { Container, Row } from "reactstrap"

//Import Components
import CardBox from "./card-box"

const CardsMini = () => {
  const coins = [
    {
      title: "1",
      color: "info",
      icon: "bx bxs-phone",
      description: "Automate high volume, repetitive, and time-consuming assessment and candidate screening"
    },
    {
      title: "2",
      color: "success",
      icon: "bx bx-transfer",
      description: "Assess and evaluate candidates fast"
    },
    {
      title: "3",
      color: "primary",
      icon: "bx bx-dollar-circle",
      description: "Save time and money"
    },
  ]

  return (
    <React.Fragment>
      <section className="section bg-white p-0">
        <Container>
          <div className="currency-price">
            <Row>
              {/* reder card boxes */}
              <CardBox coins={coins} />
            </Row>
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default CardsMini
