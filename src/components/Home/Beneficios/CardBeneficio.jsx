import React from "react";
import { Container, Image, Stack, Col } from "react-bootstrap";

export default function CardBeneficio({
  id,
  title,
  description,
  image,
  alignEnd,
}) {
  return (
    <Container fluid className="px-0 mt-7 mb-3" id={id}>
      <Stack
        className={`${
          alignEnd
            ? "justify-content-end align-items-end"
            : "justify-content-start align-items-start"
        } d-flex flex-column mx-0 position-relative`}
      >
        <Container
          fluid
          className={`${
            alignEnd ? "text-start rounded-start-4" : "text-end rounded-end-4"
          } mx-0 bg-tertiary w-70 text-uppercase fs-2 py-lg-2 py-xl-4 px-7 text-white text-wrap text-uppercase`}
        >
          {title}
        </Container>
        <Container
          className={`${
            alignEnd ? "top--25 end-3" : "top--25 start-3"
          } mx-0 w-15 pt-xl-0 pt-md-3 position-absolute px-0`}
        >
          <Image fluid src={image} roundedCircle></Image>
        </Container>
        <Container
          className={`${
            alignEnd ? "pe-20percent" : "ps-20percent"
          } mx-0 pt-5 w-70 fs-5 text-white text-wrap text-uppercase`}
        >
          {description}
        </Container>
        <Col sm={3} lg={2} className="px-0"></Col>
      </Stack>
    </Container>
  );
}
