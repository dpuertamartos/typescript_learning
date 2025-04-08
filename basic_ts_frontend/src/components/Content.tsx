interface ContentProps {
    parts: PartProps[];
};

interface PartProps {
    name: string;
    exerciseCount: number;
};

const Content = (props: ContentProps) => {
    return (
        <div>
            {props.parts.map((part) => (
                <Part key={part.name} name={part.name} exerciseCount={part.exerciseCount} />
            ))}
        </div>
    );
};

const Part = (props: PartProps) => {
    return (
        <p>{props.name} {props.exerciseCount}</p>
    );
};

export default Content;