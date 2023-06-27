import { ListOfStudents } from "./ListOfStudents";

interface CursoProps {
    params: { id: string },
}

export default function CursoPage({ params }: CursoProps) {
    return (
        <div>
            <ListOfStudents params={params} />
        </div>
    )
}