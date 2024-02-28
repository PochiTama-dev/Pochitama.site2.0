import { Button, Image } from "react-bootstrap";

function SliderBeneficio({ id, title, description, image, alt }) {
  return (
    <div className="sliderBeneficio">
      <div className="beneficios-cards-box-mobile">
        <div className={`beneficios-card`}>
          <div className="d-flex justify-content-center pb-2">
            <Image
              fluid
              src={image}
              alt={alt}
              style={{ width: "50%" }}
            ></Image>
          </div>
          <div className="d-flex justify-content-center py-3">
            <Button
              variant="tertiary"
              className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-4 border-radius btn rounded"
            >
              {title}
            </Button>
          </div>
          <div className="d-flex justify-content-center py-4">
            <ul className="text-white text-uppercase fs-6 fw-bold">{description}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderBeneficio;
