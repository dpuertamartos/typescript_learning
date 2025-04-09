import { CoursePart } from "../Types";

const assertNever = (value: never): never => {
    throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
};

const Part = (props: { part: CoursePart }) => {
    const part = props.part;
    switch (part.kind) {
        case "basic":
            return (
                <div>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <p>description: {part.description}</p>
                </div>
            );
        case "group":
            return (
                <div>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <p>project exercises: {part.groupProjectCount}</p>
                </div>
            );
        case "background":
            return (
                <div>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <p>description: {part.description}</p>
                    <p>submit to: {part.backgroundMaterial}</p>
                </div>
            );
        case "special":
            return (
                <div>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <p>required skills: {part.requirements.join(", ")}</p>
                </div>
            );
        default:
            return assertNever(part);
    }
};

export default Part;
