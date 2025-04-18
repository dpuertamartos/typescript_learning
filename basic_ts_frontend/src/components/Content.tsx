import Part from "./Part";
import { CoursePart } from "../Types";

interface ContentProps {
    parts: CoursePart[];
};

const Content = (props: ContentProps) => {
    return (
        <div>
            {props.parts.map((part) => (
                <Part key={part.name} part={part} />
            ))}
        </div>
    );
};

export default Content;