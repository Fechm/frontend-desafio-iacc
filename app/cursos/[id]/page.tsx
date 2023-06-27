import { ListOfStudents } from "./ListOfStudents";

interface CursoProps {
    params: { id: string },
}

export default function CursoPage({ params }: CursoProps) {
    return (
        <div>
            <h1>Estudiantes</h1>
            <ListOfStudents params={params} />
        </div>
    )
}