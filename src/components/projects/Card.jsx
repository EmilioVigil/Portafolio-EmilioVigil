import { StyledCard, CardDescription, CardContent, CardImage, CardTitle, Button } from "./Card.styled"

export function Card({ img, title, description, deployLink, codeLink }) {
    return (
        <StyledCard>
            <CardImage src={img} alt={title} />
            <CardContent>
                <CardTitle className="card-title" >{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <Button>
                    <a href={deployLink} target={"_blank"} >Deploy</a>
                </Button>
                <Button>
                    <a href={codeLink} target={"_blank"} >Código</a>
                </Button>
            </CardContent>
        </StyledCard>
    )
}