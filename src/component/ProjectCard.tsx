import { Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Tooltip from "./CustomTooltip";

interface props {
    title: string,
    description: string,
    imgUrl: string,
    link?: string,

}
export default function ProjectCard({ title, description, imgUrl, link = '' }: props) {
    const handleClick = (link: string) => {
        if (link.indexOf('#') === 0)
            window.location.replace(link)
        else
            window.open(link, '_blank')
    }
    return (
        <Col sm={6} md={4}>
            <Tooltip tooltip={title}>
                <div className="proj-imgbx" onClick={() => handleClick(link)} >
                    <img src={imgUrl} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </Tooltip>
        </Col>
    );
}
