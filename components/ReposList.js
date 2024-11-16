import Link from "next/link";

export default function ReposList({ data }) {
        return (
                <div className="mt-8">
                        <div className="mt-8">
                                <h3 className="font-bold font-2xl">Repositories</h3>
                                <ul>
                                        {data.map(el => (
                                                <li key={el.id}>
                                                        <Link href={`/repositories/${el.full_name}`}>{el.name}</Link>
                                                </li>
                                        ))}
                                </ul>
                        </div>
                </div>
        )
} 