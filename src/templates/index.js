import "swiper/css";
import "../scss/main.scss";
import "../utils/hello";
import "../components/slider-swiper";
import { variantOnChange } from "../components/variants-product";
import { openAccordion } from "../utils/accordion";

variantOnChange(".variants");
openAccordion();
